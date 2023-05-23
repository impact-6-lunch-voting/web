import { axiosClient } from "~/lib/axios/client";
import { type Poll } from "~/lib/types/Poll";

export async function getPolls() {
  const res = await axiosClient.get<Poll[]>("/polls");
  return res.data;
}
