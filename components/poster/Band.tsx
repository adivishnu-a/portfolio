import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "./Container";
import { toneRule, toneSurface, type Tone } from "./tone";

interface BandProps {
  id?: string;
  tone?: Tone;
  label?: string;
  /** The label is the section heading unless the band already carries an h1. */
  labelAs?: "h2" | "p";
  children: ReactNode;
  className?: string;
}

/**
 * One horizontal band of the poster. Bands stack; each owns its colour.
 * On wide screens the running label takes the first of twelve columns and
 * the last column stays empty, so content sits centred with equal insets.
 */
export function Band({
  id,
  tone = "paper",
  label,
  labelAs = "h2",
  children,
  className,
}: BandProps) {
  const LabelTag = labelAs;

  return (
    <section
      id={id}
      className={cn(toneSurface[tone], "border-t", toneRule[tone], className)}
    >
      <Container>
        <div className="grid grid-cols-4 gap-x-4 gap-y-8 py-20 md:grid-cols-12 md:gap-x-6 md:py-32">
          {label ? (
            <LabelTag className="label col-span-4 md:col-span-1 md:rotate-180 md:self-start md:justify-self-start md:[writing-mode:vertical-rl]">
              {label}
            </LabelTag>
          ) : (
            <div className="hidden md:col-span-1 md:block" />
          )}
          <div className="col-span-4 md:col-span-10">
            <Reveal>{children}</Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
