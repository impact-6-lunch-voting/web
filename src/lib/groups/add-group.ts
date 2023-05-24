import { axiosClient } from "~/lib/axios/client";
import { type Group, type GroupCreate } from "~/lib/types/Group";

export async function addGroup(groupCreate: GroupCreate) {
  const res = await axiosClient.post<Group>("/groups", groupCreate);
  return res.data;
}
