import { useQuery } from "@tanstack/react-query";
import { groups } from "~/lib/mockData";

export async function getGroups() {
  return groups;
  /* const res = await axiosClient.get<Group[]>("/groups");
  return res.data;*/
}

export function useGetGroups() {
  return useQuery({
    queryKey: ["groups"],
    queryFn: getGroups,
  });
}
