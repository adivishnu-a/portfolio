import { Band } from "@/components/poster/Band";
import type { Tone } from "@/components/poster/tone";
import type { WorkEntry } from "@/content/types";
import { WorkEntryBlock } from "./WorkEntryBlock";

interface FeaturedBandProps {
  entry: WorkEntry;
  tone: Tone;
  label: string;
  id?: string;
}

/** A single featured entry as its own band. */
export function FeaturedBand({ entry, tone, label, id }: FeaturedBandProps) {
  return (
    <Band id={id} tone={tone} label={label}>
      <WorkEntryBlock entry={entry} tone={tone} />
    </Band>
  );
}
