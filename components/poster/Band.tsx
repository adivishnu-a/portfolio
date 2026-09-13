import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "./Container";
import { toneRule, toneSurface, type Tone } from "./tone";

interface BandProps {
  id?: string;
  tone?: Tone;
  label?: string;
  children: ReactNode;
  className?: string;
}

/**
 * One horizontal band of the poster. Bands stack; each owns its colour.
 * On wide screens the running label sits vertically in the page margin,
 * so content keeps the same inset on both sides.
 */
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
        <div className="relative py-16 md:py-24">
          {label ? (
            <p className="label mb-8 md:absolute md:top-24 md:-left-6 md:mb-0 md:rotate-180 md:[writing-mode:vertical-rl]">
              {label}
            </p>
          ) : null}
          <Reveal>{children}</Reveal>
        </div>
      </Container>
    </section>
  );
}
