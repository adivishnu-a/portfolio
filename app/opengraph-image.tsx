import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { loadGoogleFont, ogColors } from "@/lib/og";

export const alt = `${site.name}, ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [bold, medium] = await Promise.all([
    loadGoogleFont("Archivo", 800),
    loadGoogleFont("Archivo", 500),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background: ogColors.blue,
        color: ogColors.paper,
        fontFamily: "Archivo",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 116,
          fontWeight: 800,
          lineHeight: 0.92,
          letterSpacing: -3.5,
        }}
      >
        {site.name.split(" ").map((word) => (
          <span key={word}>{word}</span>
        ))}
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
            fontSize: 32,
            fontWeight: 500,
            lineHeight: 1.3,
            maxWidth: 820,
          }}
        >
          {site.tagline}
        </div>
        <div style={{ fontSize: 24, fontWeight: 500, opacity: 0.8 }}>
          {site.url.replace("https://", "")}
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Archivo", data: bold, weight: 800, style: "normal" },
        { name: "Archivo", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
