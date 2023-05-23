import { type InferGetStaticPropsType, type GetStaticProps } from "next";
import { Layout } from "~/components/layout";
import { Button } from "~/components/ui/button";
import { type Poll, getPolls } from "~/lib/get-polls";

export default function PollsPage({
  polls, // passed from getStaticProps or getServerSideProps
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div className="container space-y-6">
        <h1 className="font-heading text-4xl md:text-4xl">Polls</h1>
        <div>
          {!polls.length ? (
            <div className="flex justify-center gap-6 align-middle">
              <h2 className="font-heading text-lg">
                No polls yet, start your first poll now
              </h2>
              <Button variant="default">Add poll</Button>
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
      </div>
    </Layout>
  );
}

// Fetch necessary data for each product when pre-rendered or revalidated
export const getStaticProps: GetStaticProps<{ polls: Poll[] }> = async (
  context
) => {
  const polls = await getPolls();

  return {
    props: {
      polls,
    },
    revalidate: 10, // In seconds
  };
};
