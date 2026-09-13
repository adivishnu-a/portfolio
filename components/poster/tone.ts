export type Tone = "paper" | "blue";

export const toneSurface: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  blue: "on-blue bg-blue text-on-blue",
};

export const toneMuted: Record<Tone, string> = {
  paper: "text-ink-2",
  blue: "text-on-blue-2",
};

export const toneRule: Record<Tone, string> = {
  paper: "border-ink",
  blue: "border-on-blue/40",
};
