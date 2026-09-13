import type { ReactNode } from "react";

/** Vertical running label along the left margin on wide screens. */
export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="label col-span-4 md:col-span-1 md:rotate-180 md:self-start md:justify-self-start md:[writing-mode:vertical-rl]">
      {children}
    </p>
  );
}
