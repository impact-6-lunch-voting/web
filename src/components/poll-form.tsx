import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Button } from "~/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { type Poll } from "~/lib/types/Poll";
import { addVoteToPoll } from "~/lib/votes/add-vote-to-poll";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { toast } from "~/components/ui/use-toast";

interface PollFormProps {
  poll: Poll;
  groupId: string | undefined;
}

export function PollForm({ poll, groupId }: PollFormProps) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (variables: { choiceName: string; userId: string }) =>
      addVoteToPoll(variables.choiceName, variables.userId, poll.id),
    onSuccess: () => {
      showSuccessToast();
      void queryClient.invalidateQueries({ queryKey: ["groups", groupId] });
    },
    onError: showErrorToast,
  });

  const { data: sessionData } = useSession();

  const userId = sessionData?.user.id;

  const FormSchema = z.object({
    /*type: z.enum(poll.choices, {
      required_error: "You need to select a notification type.",
    }),*/
    name: z.string().min(1),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function showErrorToast() {
    toast({
      title: "Error while submitting choice!",
      variant: "destructive",
    });
  }

  function showSuccessToast() {
    toast({
      title: "Successfully submitted choice!",
      variant: "success",
    });
  }

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!userId) {
      showErrorToast();
      return;
    }
    mutate({
      userId,
      choiceName: data.name,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-3xl">Select a lunch option!</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  {poll.choices?.map(({ name, votes }) => (
                    <FormItem
                      className="flex items-center space-x-3 space-y-0"
                      key={name}
                    >
                      <FormControl>
                        <RadioGroupItem value={name} />
                      </FormControl>
                      <FormLabel className="text-2xl font-normal">
                        {name} - Amount of votes: {votes.length}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
