export function toLocalizedTime(
  dateInUtc: Date | string | undefined | null,
  timeStyle: "medium" | "short" | "full" | "long" | undefined = "short",
  language: "de" | "en" = "de"
): string | null {
  if (!dateInUtc) {
    return null;
  }
  let date: Date;
  if (typeof dateInUtc === "string") {
    date = new Date(dateInUtc);
  } else {
    date = dateInUtc;
  }

  return new Intl.DateTimeFormat(language, {
    timeStyle,
  }).format(date);
}
