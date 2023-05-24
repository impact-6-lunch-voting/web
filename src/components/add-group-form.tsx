"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { toast } from "~/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addGroup } from "~/lib/groups/add-group";

const FormSchema = z.object({
  groupName: z.string().min(2, {
    message: "Group name must be at least 2 characters.",
  }),
  location: z.string().min(2, {
    message: "Location must be at least 2 characters.",
  }),
});

interface AddGroupFormProps {
  onSubmitSuccessful: () => void;
}

export function AddGroupForm({ onSubmitSuccessful }: AddGroupFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const queryClient = useQueryClient();

  const { mutate: addGroupMutation } = useMutation({
    mutationFn: (variables: z.infer<typeof FormSchema>) =>
      addGroup({
        location: variables.location,
        name: variables.groupName,
      }),
    onSuccess: () => {
      toast({
        title: "Successfully created group!",
        variant: "success",
      });
      void queryClient.invalidateQueries({ queryKey: ["groups"] });
      onSubmitSuccessful();
    },
    onError: () => {
      toast({
        title: "Error while creating group!",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    addGroupMutation(data);
  }

  return (
    <Form {...form} control={form.control}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          name="groupName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Group name</FormLabel>
              <FormControl>
                <Input placeholder="Group name" {...field} />
              </FormControl>
              <FormDescription>This is the name of your group.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="Location" {...field} />
              </FormControl>
              <FormDescription>
                This is the location of your group.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
