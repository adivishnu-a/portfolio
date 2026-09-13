import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Arrow } from "./Arrow";
import type { Tone } from "./tone";

interface ActionProps {
  href: string;
  children: ReactNode;
  tone?: Tone;
  /** "back" puts a left arrow before the label. */
  direction?: "forward" | "back";
  className?: string;
}

/**
 * The one link style on the site. The solid fill rises from the bottom edge
 * on hover and focus; the text flips colour while the fill crosses it.
 */
const base =
  "label relative isolate inline-flex min-h-11 items-center gap-2 overflow-hidden border px-4 py-2 transition-colors delay-75 duration-150 ease-out-expo before:absolute before:inset-0 before:-z-10 before:origin-bottom before:scale-y-0 before:transition-transform before:duration-250 before:ease-out-expo before:content-[''] hover:before:scale-y-100 focus-visible:before:scale-y-100 motion-reduce:transition-none motion-reduce:before:transition-none";

const tones: Record<Tone, string> = {
  paper:
    "border-ink text-ink before:bg-ink hover:text-paper focus-visible:text-paper active:border-blue active:before:bg-blue",
  blue: "border-on-blue text-on-blue before:bg-paper hover:text-blue focus-visible:text-blue active:before:bg-blue-tint",
};

export function Action({
  href,
  children,
  tone = "paper",
  direction = "forward",
  className,
}: ActionProps) {
  const isRoute = href.startsWith("/") && !href.endsWith(".pdf");
  const opensNewTab = /^https?:/.test(href) || href.endsWith(".pdf");
  const classes = cn(base, tones[tone], className);
  const content =
    direction === "back" ? (
      <>
        <Arrow kind="back" />
        {children}
      </>
    ) : (
      <>
        {children}
        <Arrow kind={opensNewTab ? "external" : "forward"} />
      </>
    );

  if (isRoute) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      {...(opensNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
    </a>
  );
}
