import { type Choice } from "~/lib/types/Choice";
import { type User } from "~/lib/types/User";

export interface Vote {
  value: number;
  choice?: Choice;
  user: User;
}
