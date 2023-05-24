import { type Group } from "~/lib/types/Group";
import { useQuery } from "@tanstack/react-query";

export function getGroupById(id: string) {
  const group: Group = {
    startedAt: "2023-05-24T12:00:00+00:00",
    finishedAt: "2023-05-24T13:00:00+00:00",
    joinedUsers: [
      {
        avatarUrl:
          "https://img.freepik.com/premium-photo/cute-capybara-farm-is-eating_361141-826.jpg?w=1380",
        profileName: "Luca",
        socialId: "xy",
      },
    ],
    location: "Karlsruhe",
    name: "Test-Group",
    poll: {
      id: "3ab37b36-fa7b-4812-858f-ef04895f1f50",
      name: "Test-Poll",
      startedAt: "10:00 Uhr",
      finishedAt: "12:00 Uhr",
      choices: [
        {
          name: "Choice 1",
          votes: [],
        },
        {
          name: "Choice 2",
          votes: [],
        },
        {
          name: "Choice 3",
          votes: [],
        },
      ],
    },
  };

  return group;

  /*  const res = await axiosClient.get("/some-endpoint");
  return res.data;*/
}

export function useGetGroupById(id: string) {
  return useQuery({
    queryKey: ["groups", id],
    queryFn: () => getGroupById(id),
  });
}
