import { useGetGroupById } from "~/lib/groups/get-group-by-id";
import { useRouter } from "next/router";
import { GroupUserInfo } from "~/components/group-user-info";
import { PollForm } from "~/components/poll-form";
import { Card } from "~/components/ui/card";

export default function GroupDetailPage() {
  const router = useRouter();
  const { groupId } = router.query;

  const id = groupId?.[0];

  /*if (!id) void router?.push("/");*/

  const { data: group, isLoading, error } = useGetGroupById(id!);

  if (isLoading) return <p>Loading...</p>;

  if (!group || error) return <p>Group not found</p>;

  const { name, joinedUsers, location, startedAt, finishedAt, poll } = group;

  return (
    <div className="w flex flex-col items-center justify-center gap-2 ">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-5xl font-bold">Group: {name}</h1>
        <div className="mt-16 flex flex-row gap-8">
          <div>
            <Card className="flex w-full min-w-[350px] flex-col gap-4 px-6 py-4">
              <p className="text-3xl">Location: {location}</p>
              <p className="text-3xl">Started at: {startedAt}</p>
              <p className="text-3xl">Finished at: {finishedAt}</p>
            </Card>
          </div>
          <Card className="flex max-h-72 min-w-[350px] flex-col overflow-scroll px-6 py-4">
            <h2 className="pb-4 font-bold">Teilnehmer:</h2>
            {joinedUsers.map((user) => (
              <div key={user.socialId} className="flex flex-col gap-4">
                <GroupUserInfo user={user} />
              </div>
            ))}
          </Card>
        </div>
        <div className="flex flex-col pt-20">
          <PollForm poll={poll} groupId={id} />
        </div>
      </div>
    </div>
  );
}
