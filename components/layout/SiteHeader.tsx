import Link from "next/link";
import { Arrow } from "@/components/poster/Arrow";
import { Container } from "@/components/poster/Container";
import { site } from "@/content/site";

const nav = [
  { label: "Work", href: "/#work" },
  { label: "Research", href: "/#research" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
];

/**
 * Phone: name and Resume on one row, then a four-cell rule-divided nav row
 * that bleeds to the screen edges. Wide: one row, name left, nav and Resume right.
 */
export function SiteHeader() {
  return (
    <header className="border-ink border-b">
      <Container className="grid grid-cols-[1fr_auto] items-center gap-x-6 pt-3 md:flex md:py-3">
        <Link
          href="/"
          className="hover:text-blue inline-flex min-h-11 items-center font-bold tracking-tight md:mr-auto"
        >
          {site.name}
        </Link>
        <a
          href={site.links.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="label hover:text-blue inline-flex min-h-11 items-center gap-1 md:order-2 md:ml-5"
        >
          Resume
          <Arrow kind="external" />
        </a>
        <nav
          aria-label="Primary"
          className="border-ink col-span-2 -mx-5 mt-2 border-t md:order-1 md:col-auto md:mx-0 md:mt-0 md:border-0"
        >
          <ul className="label divide-ink md:text-meta grid grid-cols-4 divide-x text-[0.75rem] md:flex md:gap-x-5 md:divide-x-0">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-blue flex min-h-11 items-center justify-center md:justify-start"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
