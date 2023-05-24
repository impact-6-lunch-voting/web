import { type User } from "~/lib/types/User";
import { type Poll, type PollCreate } from "~/lib/types/Poll";
import { type DateTime } from "next-auth/providers/kakao";

export interface Group {
  id: string;
  name: string;
  joinedUsers: User[];
  startedAt: string;
  finishedAt: string;
  location: string | null;
  poll: Poll;
}

export interface GroupCreate {
  name: string;
  started_at?: DateTime;
  finished_at?: DateTime;
  location: string;
  poll?: PollCreate[];
}
