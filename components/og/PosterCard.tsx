import { site } from "@/content/site";
import { ogColors } from "@/lib/og";

interface PosterCardProps {
  label: string;
  title: string;
  description: string;
  tone: "blue" | "paper";
}

/** The 1200x630 share card. Same poster as the page: label, big title, one line, address. */
export function PosterCard({
  label,
  title,
  description,
  tone,
}: PosterCardProps) {
  const background = tone === "blue" ? ogColors.blue : ogColors.paper;
  const foreground = tone === "blue" ? ogColors.paper : ogColors.ink;
  const muted = tone === "blue" ? "rgba(255,255,255,0.78)" : "#4a4a50";
  const titleSize = title.length > 34 ? 72 : 96;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "60px 72px",
        background,
        color: foreground,
        fontFamily: "Archivo",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div
          style={{
            fontSize: 24,
            fontWeight: 500,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: muted,
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: titleSize,
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: -2.5,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 48,
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontWeight: 500,
            lineHeight: 1.3,
            maxWidth: 760,
            color: foreground,
          }}
        >
          {description}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            fontSize: 24,
            fontWeight: 500,
            color: muted,
          }}
        >
          <span>{site.name}</span>
          <span>{site.url.replace("https://", "")}</span>
        </div>
      </div>
    </div>
  );
}
