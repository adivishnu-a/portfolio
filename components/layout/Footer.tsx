import { Action } from "@/components/poster/Action";
import { Container } from "@/components/poster/Container";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-blue bg-blue text-on-blue mt-auto">
      <Container className="py-20 md:py-32">
        <p className="text-display font-extrabold font-stretch-[112%]">
          {site.name.split(" ").map((word) => (
            <span key={word} className="block">
              {word}
            </span>
          ))}
        </p>
        <ul className="mt-12 flex flex-wrap gap-3">
          <li>
            <Action href={`mailto:${site.email}`} tone="blue">
              Email
            </Action>
          </li>
          <li>
            <Action href={site.links.linkedin} tone="blue">
              LinkedIn
            </Action>
          </li>
          <li>
            <Action href={site.links.github} tone="blue">
              GitHub
            </Action>
          </li>
          <li>
            <Action href={site.links.resume} tone="blue">
              Resume
            </Action>
          </li>
        </ul>
        <div className="text-meta text-on-blue-2 mt-16 flex flex-wrap items-end justify-between gap-6">
          <p>boh.</p>
          <p>
            Built with Next.js.{" "}
            <a
              href={site.links.source}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-on-blue underline"
            >
              Source on GitHub
            </a>
            . <span className="tnum">{year}</span> {site.name}.
          </p>
        </div>
      </Container>
    </footer>
  );
}
