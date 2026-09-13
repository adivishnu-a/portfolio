import Image from "next/image";
import { Action } from "@/components/poster/Action";
import { site } from "@/content/site";

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
          {words.map((word) => (
            <span key={word} className="block">
              {word}
            </span>
          ))}
        </h1>
        <p className="text-h3 mt-8 max-w-[38ch] font-medium">{site.tagline}</p>
        <p className="label text-ink-2 mt-4">{site.status}</p>
        <ul className="mt-10 flex flex-wrap gap-3">
          <li>
            <Action href={site.links.resume}>Resume</Action>
          </li>
          <li>
            <Action href={`mailto:${site.email}`}>Email</Action>
          </li>
          <li>
            <Action href={site.links.github}>GitHub</Action>
          </li>
          <li>
            <Action href={site.links.linkedin}>LinkedIn</Action>
          </li>
        </ul>
      </div>
      <div className="on-blue bg-blue flex items-end justify-center px-8 pt-12 md:col-span-5 md:pt-24">
        <Image
          src={site.photo.src}
          alt={site.photo.alt}
          width={site.photo.width}
          height={site.photo.height}
          priority
          sizes="(min-width: 768px) 34vw, 78vw"
          className="h-auto w-[78%] max-w-[560px]"
        />
      </div>
    </section>
  );
}
