import { useGetGroupById } from "~/lib/groups/get-group-by-id";
import { useRouter } from "next/router";
import { GroupUserInfo } from "~/components/group-user-info";
import { PollForm } from "~/components/poll-form";

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
    <div className="w flex flex-col items-center gap-2">
      <div className="flex flex-col justify-start gap-2">
        <h1>Group: {name}</h1>
        <p>Location: {location}</p>
        <p>Started at: {startedAt}</p>
        <p>Finished at: {finishedAt}</p>

        <div className="flex flex-col">
          <h2 className="font-bold">Users:</h2>
          {joinedUsers.map((user) => (
            <GroupUserInfo key={user.socialId} user={user} />
          ))}
        </div>

        <div className="flex flex-col">
          <h2>Poll: {poll.name}</h2>

          <PollForm poll={poll} groupId={id} />
        </div>
      </div>
    </div>
  );
}
