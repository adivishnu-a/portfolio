"use client";

import type { ReactNode } from "react";
import { useId, useState } from "react";
import { m, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

interface DisclosureProps {
  /** Left column, for example a date range. */
  lead: ReactNode;
  /** Row title. Becomes the accessible name of the toggle. */
  title: string;
  /** Lines under the title in the collapsed row. */
  meta?: ReactNode;
  /** Expanded content. Always in the DOM; hidden and inert while collapsed. */
  children: ReactNode;
}

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * An expandable row. The whole row is clickable through a stretched button
 * inside the heading, so the title keeps its heading semantics and the button
 * announces the row's name. The panel height is animated by Motion, which
 * measures once and tweens pixel values on its own frame loop.
 */
export function Disclosure({ lead, title, meta, children }: DisclosureProps) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const panelId = useId();

  return (
    <div className="group">
      <div className="relative grid grid-cols-4 gap-x-4 gap-y-4 py-8 pr-14 md:grid-cols-12 md:gap-x-6">
        <div className="col-span-4 md:col-span-3">{lead}</div>
        <div className="col-span-4 md:col-span-8">
          <h3 className="text-h3 group-hover:text-blue font-bold transition-colors duration-150">
            <button
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((value) => !value)}
              className="text-left after:absolute after:inset-0 after:content-['']"
            >
              {title}
            </button>
          </h3>
          {meta}
        </div>
        <span
          aria-hidden="true"
          className="border-ink ease-out-expo group-hover:text-paper before:bg-ink before:ease-out-expo pointer-events-none absolute top-8 right-0 isolate inline-flex size-11 items-center justify-center overflow-hidden border transition-colors delay-75 duration-150 before:absolute before:inset-0 before:-z-10 before:origin-bottom before:scale-y-0 before:transition-transform before:duration-250 before:content-[''] group-hover:before:scale-y-100 motion-reduce:transition-none motion-reduce:before:transition-none"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
            className={cn(
              "ease-out-expo transition-transform duration-300",
              open && "rotate-180",
            )}
          >
            <path d="m4 7 6 6 6-6" />
          </svg>
        </span>
      </div>
      <m.div
        id={panelId}
        inert={!open}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                height: { duration: 0.45, ease },
                opacity: {
                  duration: 0.3,
                  ease: "easeOut",
                  delay: open ? 0.08 : 0,
                },
              }
        }
        style={{ overflow: "hidden" }}
      >
        {children}
      </m.div>
    </div>
  );
}
