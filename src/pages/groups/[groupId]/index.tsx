import { useRouter } from "next/router";
import { Icons } from "~/components/icons";
import { PollForm } from "~/components/poll-form";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { useGetGroupById } from "~/lib/groups/get-group-by-id";
import { toLocalizedTime } from "~/lib/localization/to-localized-time";

export default function GroupDetailPage() {
  const router = useRouter();
  const { groupId } = router.query;

  const id = groupId as string;

  const { data: group, isLoading, error } = useGetGroupById(id);

  if (isLoading) return <p>Loading...</p>;

  if (!group || error) return <p>Group not found</p>;

  return (
    <div className="w flex flex-col gap-2 ">
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-bold">Group: {group.name}</h1>
        <Card className="mt-12 max-h-[360px] overflow-scroll">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{group.name}</CardTitle>
              <Button variant="default">Gruppe beitreten</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-12">
              <div className="min-w-[300px]">
                <div className="flex h-12 items-center font-bold text-violet-400">
                  <Icons.mapPin className="mr-2 h-4 w-4" />
                  <span>Location</span>
                </div>
                <div className="flex min-h-[44px] items-center text-lg">
                  {group.location ? (
                    <span>{group.location}</span>
                  ) : (
                    <div>
                      <Badge variant="secondary">
                        Voting aktiv bis{" "}
                        {toLocalizedTime(group.poll.finishedAt)} Uhr
                      </Badge>
                    </div>
                  )}
                </div>
              </div>

              <div className="min-w-[200px]">
                <div className="flex h-12 items-center font-bold text-violet-400">
                  <Icons.clock2 className="mr-2 h-4 w-4" />
                  <span>Zeit</span>
                </div>
                <div className="flex min-h-[44px] items-center text-lg">
                  {toLocalizedTime(group.startedAt)} -{" "}
                  {toLocalizedTime(group.finishedAt)} Uhr
                </div>
              </div>

              <div>
                <div className="flex h-12 items-center font-bold text-violet-400">
                  <Icons.users className="mr-2 h-4 w-4" />
                  <span>Teilnehmer</span>
                </div>
                {group.joinedUsers.map((user, userIndex) => {
                  return (
                    <div
                      key={userIndex}
                      className="flex flex-col items-center gap-4 text-lg"
                    >
                      <div className="flex flex-row gap-2">
                        <Avatar>
                          <AvatarImage src={user.avatarUrl} />
                          <AvatarFallback>
                            {user.profileName.slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <p className="pl-2">{user.profileName}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="flex flex-col pt-20">
          <PollForm poll={group.poll} groupId={id} />
        </div>
      </div>
    </div>
  );
}
