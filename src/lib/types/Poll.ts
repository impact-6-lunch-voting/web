import { type Choice } from "~/lib/types/Choice";

export interface Poll {
  id: string;
  name: string;
  choices: Choice[];
  startedAt: string;
  finishedAt: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PollCreate {}
