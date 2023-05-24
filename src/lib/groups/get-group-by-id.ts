import { type Group } from "~/lib/types/Group";
import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "../axios/client";
import { groups } from "~/lib/mockData";

export async function getGroupById(id: string) {
  return groups.find((group) => group.id === id);
  const res = await axiosClient.get<Group>(`/groups/${id}`);
  return res.data;
}

export function useGetGroupById(id: string) {
  return useQuery({
    queryKey: ["groups", id],
    queryFn: () => getGroupById(id),
  });
}
