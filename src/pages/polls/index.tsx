import { type InferGetStaticPropsType, type GetStaticProps } from "next";
import { Layout } from "~/components/layout";
import { Button } from "~/components/ui/button";
import { type Poll, getPolls } from "~/lib/get-polls";

export default function PollsPage({
  polls, // passed from getStaticProps or getServerSideProps
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div className="container">
        <h1 className="font-heading text-3xl md:text-4xl">Polls</h1>
        <div>
          {!polls.length ? (
            <div className="flex justify-center gap-6 align-middle">
              <h2 className="font-heading text-lg">
                No polls yet, start your first poll now
              </h2>
              <Button variant="default">Add poll</Button>
            </div>
          ) : (
            <ul>
              {polls.map((poll) => (
                <li key={poll.id}>{poll.title}</li>
              ))}
            </ul>
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
