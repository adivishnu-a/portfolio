import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/case-study/CaseStudy";
import { featuredWork, getWork, workHref } from "@/content/work";
import { renderMdx } from "@/lib/mdx";

interface Params {
  slug: string;
}

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return featuredWork
    .filter((entry) => entry.kind === "research")
    .map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getWork(slug, "research");
  if (!entry) return {};
  const href = workHref(entry);
  return {
    title: entry.title,
    description: entry.summary,
    alternates: { canonical: href },
    openGraph: {
      type: "article",
      title: entry.title,
      description: entry.summary,
      url: href,
    },
  };
}

export default async function ResearchPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const entry = getWork(slug, "research");
  if (!entry) notFound();
  const body = await renderMdx("research", slug);
  return <CaseStudy entry={entry}>{body}</CaseStudy>;
}
