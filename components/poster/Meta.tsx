import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { toneMuted, type Tone } from "./tone";

export interface MetaItem {
  term: string;
  value: ReactNode;
}

export function Meta({
  items,
  tone = "paper",
  className,
}: {
  items: MetaItem[];
  tone?: Tone;
  className?: string;
}) {
  return (
    <dl className={cn("text-meta grid gap-5", className)}>
      {items.map((item) => (
        <div key={item.term}>
          <dt className={cn("label", toneMuted[tone])}>{item.term}</dt>
          <dd className="text-body mt-1">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
