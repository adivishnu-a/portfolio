import { Action } from "@/components/poster/Action";
import { Container } from "@/components/poster/Container";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-blue bg-blue text-on-blue mt-auto">
      <Container className="py-14 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-8">
          <p className="text-h2 md:text-h1 font-extrabold font-stretch-[112%]">
            {site.name.split(" ").map((word) => (
              <span key={word} className="block">
                {word}
              </span>
            ))}
          </p>
          <ul className="flex flex-wrap gap-3">
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
        </div>
        <p className="border-on-blue/40 text-meta text-on-blue-2 mt-10 border-t pt-5">
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
      </Container>
    </footer>
  );
}
