import { type Group } from "~/lib/types/Group";
import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "../axios/client";

export async function getGroupById(id: string) {
  const res = await axiosClient.get<Group>(`/groups/${id}`);
  return res.data;
}

export function useGetGroupById(id: string) {
  return useQuery({
    queryKey: ["groups", id],
    queryFn: () => getGroupById(id),
  });
}
