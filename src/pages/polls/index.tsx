import { Layout } from "~/components/layout";
import { buttonVariants } from "~/components/ui/button";
import { useGetPolls } from "~/lib/polls/use-get-polls";
import Link from "next/link";

export default function PollsPage() {
  const { data: polls = [], isLoading } = useGetPolls();

  return (
    <Layout>
      <div className="container space-y-6">
        <h1 className="font-heading text-4xl md:text-4xl">Polls</h1>
        {isLoading ? (
          <div className="flex justify-center gap-6 align-middle">
            <h2 className="font-heading text-lg">Loading...</h2>
          </div>
        ) : (
          <div>
            {!polls.length ? (
              <div className="flex justify-center gap-6 align-middle">
                <h2 className="font-heading text-lg">
                  No polls yet, start your first poll now
                </h2>
                <Link
                  className={buttonVariants({ variant: "default" })}
                  href="/polls/add"
                >
                  Add Poll
                </Link>
              </div>
            ) : (
              <div className="flex flex-col space-x-6">
                {polls.map((poll) => (
                  <div
                    key={poll.id}
                    className="w-full rounded-lg border border-gray-200 p-3 px-5"
                  >
                    {poll.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}
