import { cn } from "@/lib/cn";

export type ArrowKind = "forward" | "back" | "external";

const paths: Record<ArrowKind, string> = {
  forward: "M2 8h12M9 3l5 5-5 5",
  back: "M14 8H2M7 3 2 8l5 5",
  external: "M4 12 12 4M6 4h6v6",
};

export function Arrow({
  kind = "forward",
  className,
}: {
  kind?: ArrowKind;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      className={cn("shrink-0", className)}
    >
      <path d={paths[kind]} />
    </svg>
  );
}
