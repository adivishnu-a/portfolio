import type { ReactNode } from "react";
import Link from "next/link";
import { Action } from "@/components/poster/Action";
import { Arrow } from "@/components/poster/Arrow";
import { Band } from "@/components/poster/Band";
import { Container } from "@/components/poster/Container";
import { Meta } from "@/components/poster/Meta";
import type { Tone } from "@/components/poster/tone";
import { featuredWork, kindLabel, workHref } from "@/content/work";
import type { WorkEntry } from "@/content/types";

/** Where the link above the title returns to, per kind of entry. */
const backLink: Record<WorkEntry["kind"], { href: string; label: string }> = {
  professional: { href: "/#work", label: "All work" },
  product: { href: "/#projects", label: "All projects" },
  research: { href: "/#research", label: "Research" },
};

const toneByKind: Record<WorkEntry["kind"], Tone> = {
  product: "blue",
  professional: "paper",
  research: "blue",
};

export function CaseStudy({
  entry,
  children,
}: {
  entry: WorkEntry;
  children: ReactNode;
}) {
  const tone = toneByKind[entry.kind];
  const index = featuredWork.findIndex((item) => item.slug === entry.slug);
  const previous = featuredWork[index - 1];
  const next = featuredWork[index + 1];

  return (
    <main id="main">
      <Band tone={tone} label={kindLabel[entry.kind]} labelAs="p">
        <Link
          href={backLink[entry.kind].href}
          className="label mb-6 inline-flex min-h-11 items-center gap-2 underline-offset-4 hover:underline"
        >
          <Arrow kind="back" />
          {backLink[entry.kind].label}
        </Link>
        <div className="grid gap-y-10 md:grid-cols-12 md:gap-x-6">
          <div className="md:col-span-7">
            <h1 className="text-h2 md:text-h1 font-extrabold font-stretch-[112%]">
              {entry.title}
            </h1>
            <p className="text-lead mt-6 max-w-[44ch]">{entry.summary}</p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {entry.links.map((link) => (
                <li key={link.href}>
                  <Action href={link.href} tone={tone}>
                    {link.label}
                  </Action>
                </li>
              ))}
            </ul>
          </div>
          <Meta
            tone={tone}
            className="md:col-span-3 md:col-start-10"
            items={[
              { term: "Period", value: entry.period },
              { term: "Stack", value: entry.stack.join(", ") },
            ]}
          />
        </div>
      </Band>

      <Container>
        <article className="inset-col py-16 md:py-24 [&>h2:first-child]:mt-0">
          {children}
        </article>
      </Container>

      <nav aria-label="More featured work" className="border-ink border-t">
        <Container className="inset-col flex flex-wrap items-center justify-between gap-4 py-8">
          {previous ? (
            <Action href={workHref(previous)} direction="back">
              Previous: {previous.title}
            </Action>
          ) : (
            <span />
          )}
          {next ? (
            <Action href={workHref(next)}>Next: {next.title}</Action>
          ) : (
            <span />
          )}
        </Container>
      </nav>
    </main>
  );
}
