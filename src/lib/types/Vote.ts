import { type Choice } from "~/lib/types/Choice";
import { type Poll } from "~/lib/types/Poll";
import { type User } from "~/lib/types/User";

export interface Vote {
  value: number;
  poll: Poll;
  choice: Choice;
  user: User;
}
