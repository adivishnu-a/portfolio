import { ImageResponse } from "next/og";
import { PosterCard } from "@/components/og/PosterCard";
import { featuredWork, getWork, kindLabel } from "@/content/work";
import { posterFonts } from "@/lib/og-fonts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return featuredWork
    .filter((entry) => entry.kind === "research")
    .map((entry) => ({ slug: entry.slug }));
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getWork(slug);
  if (!entry) return new Response("Not found", { status: 404 });

  return new ImageResponse(
    <PosterCard
      label={kindLabel[entry.kind]}
      title={entry.title}
      description={entry.summary}
      tone={entry.kind === "professional" ? "paper" : "blue"}
    />,
    { ...size, fonts: await posterFonts() },
  );
}
