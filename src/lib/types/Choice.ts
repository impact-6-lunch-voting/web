import { type Vote } from "~/lib/types/Vote";

export interface Choice {
  id: string;
  name: string;
  votes: Vote[];
}
