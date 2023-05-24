import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "../axios/client";
import { type Group } from "../types/Group";

export async function getGroups() {
  const res = await axiosClient.get<Group[]>("/groups");
  return res.data;
}

export function useGetGroups() {
  return useQuery({
    queryKey: ["groups"],
    queryFn: () => getGroups(),
  });
}
