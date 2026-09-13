"use client";

import type { ReactNode } from "react";
import { useId, useState } from "react";
import { cn } from "@/lib/cn";

interface DisclosureProps {
  /** Left column, for example a date range. */
  lead: ReactNode;
  /** Row title. Becomes the accessible name of the toggle. */
  title: string;
  /** Lines under the title in the collapsed row. */
  meta?: ReactNode;
  /** Expanded content. */
  children: ReactNode;
}

/**
 * An expandable row. The whole row is clickable through a stretched button
 * inside the heading, so the title keeps its heading semantics and the button
 * announces the row's name. Height animates with a grid-template-rows
 * transition, so nothing is measured.
 */
export function Disclosure({ lead, title, meta, children }: DisclosureProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="group">
      <div className="relative grid grid-cols-4 gap-x-4 gap-y-4 py-8 pr-14 md:grid-cols-12 md:gap-x-6">
        <div className="col-span-4 md:col-span-3">{lead}</div>
        <div className="col-span-4 md:col-span-8">
          <h2 className="text-h3 group-hover:text-blue font-bold transition-colors duration-150">
            <button
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((value) => !value)}
              className="text-left after:absolute after:inset-0 after:content-['']"
            >
              {title}
            </button>
          </h2>
          {meta}
        </div>
        <span
          aria-hidden="true"
          className="border-ink group-hover:bg-ink group-hover:text-paper pointer-events-none absolute top-8 right-0 inline-flex size-11 items-center justify-center border transition-colors duration-150"
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
              "ease-out-expo transition-transform duration-200",
              open && "rotate-180",
            )}
          >
            <path d="m4 7 6 6 6-6" />
          </svg>
        </span>
      </div>
      <div
        id={panelId}
        inert={!open}
        className="ease-out-expo grid transition-[grid-template-rows] duration-300"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div
            className={cn(
              "ease-out-expo transition-opacity duration-200",
              open ? "opacity-100 delay-100" : "opacity-0",
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
