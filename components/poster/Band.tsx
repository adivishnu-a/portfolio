import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";
import { toneRule, toneSurface, type Tone } from "./tone";

interface BandProps {
  id?: string;
  tone?: Tone;
  label?: string;
  children: ReactNode;
  className?: string;
}

/** One horizontal band of the poster. Bands stack; each owns its colour. */
export function Band({
  id,
  tone = "paper",
  label,
  children,
  className,
}: BandProps) {
  return (
    <section
      id={id}
      className={cn(toneSurface[tone], "border-t", toneRule[tone], className)}
    >
      <Container>
        <div className="grid grid-cols-4 gap-x-4 gap-y-8 py-20 md:grid-cols-12 md:gap-x-6 md:py-32">
          {label ? <SectionLabel>{label}</SectionLabel> : null}
          <div
            className={cn(
              "col-span-4",
              label ? "md:col-span-11 md:col-start-2" : "md:col-span-12",
            )}
          >
            <Reveal>{children}</Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
