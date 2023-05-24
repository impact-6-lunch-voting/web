import { axiosClient } from "~/lib/axios/client";

export async function addVoteToPoll(
  choiceName: string,
  choiceId: string,
  userId: string,
  pollId: string
) {
  const res = await axiosClient.post(`polls/${pollId}/vote`, {
    voter: userId,
    choices: {
      [choiceId]: 1,
    },
  });
  return res.data;
}
