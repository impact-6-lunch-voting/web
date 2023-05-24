import { type User } from "~/lib/types/User";
import { type Poll } from "~/lib/types/Poll";

export interface Group {
  id: string;
  name: string;
  joinedUsers: User[];
  startedAt: string;
  finishedAt: string;
  location: string | null;
  poll: Poll;
}
