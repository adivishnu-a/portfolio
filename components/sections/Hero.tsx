import type { CSSProperties } from "react";
import Image from "next/image";
import { Action } from "@/components/poster/Action";
import { site } from "@/content/site";

type IndexedStyle = CSSProperties & { "--i": number };

const indexed = (index: number): IndexedStyle => ({ "--i": index });

const actions = [
  { label: "Resume", href: site.links.resume },
  { label: "Email", href: `mailto:${site.email}` },
  { label: "GitHub", href: site.links.github },
  { label: "LinkedIn", href: site.links.linkedin },
];

export function Hero() {
  const words = site.name.split(" ");

  return (
    <section
      aria-labelledby="hero-heading"
      className="border-ink grid border-b md:grid-cols-12"
    >
      <div className="px-5 pt-14 pb-16 md:col-span-7 md:px-8 md:pt-24 md:pb-24">
        <h1
          id="hero-heading"
          className="text-display font-extrabold font-stretch-[112%]"
        >
          {words.map((word, index) => (
            <span key={word} className="hero-line block" style={indexed(index)}>
              {word}
            </span>
          ))}
        </h1>
        <p
          className="hero-fade text-h3 mt-8 max-w-[38ch] font-medium"
          style={indexed(0)}
        >
          {site.tagline}
        </p>
        <p className="hero-fade label text-ink-2 mt-4" style={indexed(1)}>
          {site.status}
        </p>
        <ul className="hero-fade mt-10 flex flex-wrap gap-3" style={indexed(2)}>
          {actions.map((action) => (
            <li key={action.href}>
              <Action href={action.href}>{action.label}</Action>
            </li>
          ))}
        </ul>
      </div>
      <div className="hero-field on-blue bg-blue flex aspect-[4/5] p-5 md:col-span-5 md:aspect-auto md:p-8">
        <div className="relative min-h-0 flex-1">
          <Image
            src={site.photo.src}
            alt={site.photo.alt}
            fill
            priority
            sizes="(min-width: 768px) 42vw, 100vw"
            className="object-cover object-[50%_30%]"
          />
        </div>
      </div>
    </section>
  );
}
