import { type Choice } from "~/lib/types/Choice";

export interface Poll {
  name: string;
  choices: Choice[];
  startedAt: string;
  finishedAt: string;
}
