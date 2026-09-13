const monthYear = new Intl.DateTimeFormat("en", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

const longDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

/** "2025-07" to "July 2025"; "2025" stays "2025". */
export function formatMonth(value: string): string {
  const [year, month] = value.split("-").map(Number);
  if (!month) return String(year);
  return monthYear.format(new Date(Date.UTC(year, month - 1, 1)));
}

export function formatRange(start: string, end: string): string {
  return `${formatMonth(start)} to ${formatMonth(end)}`;
}

/** "2026-07-17" to "17 July 2026". */
export function formatDate(iso: string): string {
  return longDate.format(new Date(`${iso}T00:00:00Z`));
}

export function yearOf(value: string): string {
  return value.slice(0, 4);
}
