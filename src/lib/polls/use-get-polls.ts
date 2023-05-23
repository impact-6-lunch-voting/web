import { useQuery } from "@tanstack/react-query";
import { getPolls } from "~/lib/polls/get-polls";

export function useGetPolls() {
  return useQuery({
    queryKey: ["polls"],
    queryFn: getPolls,
  });
}
