import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Icons } from "~/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { toLocalizedTime } from "~/lib/localization/to-localized-time";
import { type Group } from "~/lib/types/Group";
import { JoinGroupDialog } from "~/components/join-group-dialog";
import { useRouter } from "next/router";

const groups: Group[] = [
  {
    id: "1",
    name: "Die Coolen",
    location: "Restaurant zum goldenen Anker",
    startedAt: "2023-05-24T12:00:00+00:00",
    finishedAt: "2023-05-24T13:00:00+00:00",
    poll: {
      id: "123",
      name: "Restaurant",
      startedAt: "2023-05-24T09:30:00+00:00",
      finishedAt: "2023-05-24T11:00:00+00:00",
      choices: [
        { name: "Restaurant zum goldenen Anker", votes: [] },
        { name: "Woanders", votes: [] },
      ],
    },
    joinedUsers: [
      {
        profileName: "MechTee",
        avatarUrl:
          "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcShOeREOxQiNZUjbvhtxqDlV5vSPGvoriYwVrUgvdc417UDhf0ssygBeLxOul5YIqIy",
        socialId: "nix",
      },
    ],
  },
];

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Lunch Voting</title>
        <meta name="description" content="Vote for your lunch" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen w-full flex-col space-y-6">
        <h1 className="font-heading text-4xl md:text-4xl">Lunch Gruppen</h1>

        <div className="flex w-full justify-between">
          <h2 className="font-heading text-lg text-gray-500">
            Schließe dich einer Gruppe an oder erstelle eine eigene
          </h2>
          <div>
            <Button asChild variant="ghost">
              <Link href="/create-group">
                <Icons.add className="mr-2 h-4 w-4" />
                <span>Gruppe hinzufügen</span>
              </Link>
            </Button>
          </div>
        </div>

        {groups.map(
          (
            { id, name, joinedUsers, location, startedAt, finishedAt },
            index
          ) => {
            return (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{name}</CardTitle>
                    <div className="flex  gap-4 ">
                      <Button
                        onClick={() => router.push(`/groups/${id}`)}
                        variant="secondary"
                      >
                        Gruppen-Details
                      </Button>

                      <JoinGroupDialog />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-12">
                    <div>
                      <div className="flex items-center font-bold text-violet-400">
                        <Icons.mapPin className="mr-2 h-4 w-4" />
                        <span>Ort</span>
                      </div>
                      <div className="flex min-h-[44px] items-center text-lg">
                        {location}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center font-bold text-violet-400">
                        <Icons.clock2 className="mr-2 h-4 w-4" />
                        <span>Zeit</span>
                      </div>
                      <div className="flex min-h-[44px] items-center text-lg">
                        {toLocalizedTime(startedAt)} -{" "}
                        {toLocalizedTime(finishedAt)}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center font-bold text-violet-400">
                        <Icons.users className="mr-2 h-4 w-4" />
                        <span>Teilnehmer</span>
                      </div>
                      {joinedUsers.map(
                        ({ avatarUrl, profileName }, userIndex) => {
                          return (
                            <div
                              key={userIndex}
                              className="flex min-h-[44px] items-center text-lg"
                            >
                              <Avatar>
                                <AvatarImage src={avatarUrl} />
                                <AvatarFallback>
                                  {profileName.slice(0, 2)}
                                </AvatarFallback>
                              </Avatar>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          }
        )}
      </main>
    </>
  );
};

export default Home;
