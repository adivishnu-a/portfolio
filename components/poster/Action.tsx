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

const base =
  "label inline-flex min-h-11 items-center gap-2 border px-4 py-2 transition-colors duration-150 ease-out-expo";

const tones: Record<Tone, string> = {
  paper:
    "border-ink text-ink hover:bg-ink hover:text-paper active:border-blue active:bg-blue",
  blue: "border-on-blue text-on-blue hover:bg-paper hover:text-blue active:bg-blue-tint",
};

/** The one link style on the site. Route links use next/link; the rest are plain anchors. */
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
