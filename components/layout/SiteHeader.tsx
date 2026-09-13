import Link from "next/link";
import { Container } from "@/components/poster/Container";
import { Arrow } from "@/components/poster/Arrow";
import { site } from "@/content/site";

const nav = [
  { label: "Work", href: "/#work" },
  { label: "Research", href: "/#research" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
];

export function SiteHeader() {
  return (
    <header className="border-ink border-b">
      <Container className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-3">
        <Link
          href="/"
          className="hover:text-blue inline-flex min-h-11 items-center font-bold tracking-tight"
        >
          {site.name}
        </Link>
        <nav aria-label="Primary">
          <ul className="label flex flex-wrap gap-x-5">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-blue inline-flex min-h-11 items-center"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue inline-flex min-h-11 items-center gap-1"
              >
                Resume
                <Arrow kind="external" />
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
