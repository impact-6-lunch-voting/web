import { type Vote } from "~/lib/types/Vote";

export interface Choice {
  name: string;
  votes: Vote[];
}
