import { cn } from "@/lib/cn";

export function Arrow({
  kind = "forward",
  className,
}: {
  kind?: "forward" | "external";
  className?: string;
}) {
  const d = kind === "external" ? "M4 12 12 4M6 4h6v6" : "M2 8h12M9 3l5 5-5 5";
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
      <path d={d} />
    </svg>
  );
}
