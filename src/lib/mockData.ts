import { type Group } from "~/lib/types/Group";
import { type User } from "~/lib/types/User";

const user1: User = {
  profileName: "Ash Ketchum",
  avatarUrl:
    "https://static.wikia.nocookie.net/venturiantale/images/0/0e/Ahs_1.png/",
  socialId: "1Qt5J",
};

const user2: User = {
  avatarUrl:
    "https://i.pinimg.com/736x/a4/42/f0/a442f0965f26ef3da71074b4877acd19.jpg",
  profileName: "Brock",
  socialId: "RYi",
};

export const groups: Group[] = [
  {
    name: "Tolle Gruppe!",
    id: "6defe259-f840-491f-a960-2c808c8ffdcf",
    startedAt: "2023-05-24T09:25:26+0000",
    finishedAt: "2023-05-24T10:25:26+0000",
    location: "Stuttgart",
    joinedUsers: [user1],
    poll: {
      id: "d7353f94-0d87-46a3-8329-de23fa789888",
      name: "Coole Poll",
      startedAt: "2023-05-24T09:25:26+0000",
      finishedAt: "2023-05-24T10:25:26+0000",
      choices: [
        {
          name: "Nices Restaurant",
          id: "00fa1a76-d091-40ae-9d14-c7c2f06bd17a",
          votes: [
            {
              value: 1,
              user: user1,
            },
          ],
        },
        {
          name: "Super coole tolle Imbissbude",
          id: "00fa1a76-d091-40ae-9d14-c7c2f06bd17a",
          votes: [
            {
              value: 1,
              user: user1,
            },
            {
              value: 1,
              user: user1,
            },
            {
              value: 1,
              user: user1,
            },
          ],
        },
      ],
    },
  },
  {
    name: "Noch tollere Gruppe!",
    id: "21e9a319-74d5-4c3d-a7f3-3a2cbf7ee93c",
    startedAt: "2023-05-24T10:25:26+0000",
    finishedAt: "2023-05-24T11:25:26+0000",
    location: "Mannheim",
    joinedUsers: [user2],
    poll: {
      id: "8497c6eb-456e-4e81-8fe3-2de45628efde",
      name: "It's polling Time",
      startedAt: "2023-05-24T10:25:26+0000",
      finishedAt: "2023-05-24T11:25:26+0000",
      choices: [
        {
          name: "Überteuerter Schuppen",
          id: "f0a26985-4258-4ddf-8ccf-cf21aa7e6376",
          votes: [
            {
              value: 1,
              user: user2,
            },
            {
              value: 1,
              user: user2,
            },
            {
              value: 1,
              user: user2,
            },
          ],
        },
        {
          name: "Nicer Scheiß",
          id: "358cdf2c-18f9-42eb-9ad7-48e81e325252",
          votes: [
            {
              value: 1,
              user: user2,
            },
            {
              value: 1,
              user: user2,
            },
            {
              value: 1,
              user: user2,
            },
            {
              value: 1,
              user: user2,
            },
          ],
        },
        {
          name: "Yummy yummy",
          id: "1e8d918f-b721-42cd-a6f7-026845747a76",
          votes: [
            {
              value: 1,
              user: user2,
            },
            {
              value: 1,
              user: user2,
            },
            {
              value: 1,
              user: user2,
            },
          ],
        },
      ],
    },
  },
];
