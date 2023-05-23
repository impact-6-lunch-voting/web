export type Poll = {
  id?: number;
  uuid: string;
  title: string;
  created_at: string;
};

export async function getPolls(): Promise<Poll[]> {
  try {
    const res = await fetch(
      "https://imp6-lunch-voting.shuttleapp.rs/api/v1/polls"
    );
    if (!res.ok) {
      return [];
    }
    const polls = await res.json();
    return polls as Poll[];
  } catch (error) {
    return [];
  }
}
