import { site } from "@/content/site";
import { education } from "@/content/experience";
import { stack } from "@/content/stack";

export function absoluteUrl(path: string): string {
  return new URL(path, site.url).toString();
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/#person`,
    name: site.name,
    url: site.url,
    jobTitle: site.title,
    description: site.description,
    email: `mailto:${site.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.city,
      addressCountry: site.location.country,
    },
    alumniOf: education.map((item) => ({
      "@type": "CollegeOrUniversity",
      name: item.school,
    })),
    knowsAbout: stack.flatMap((group) => group.items),
    sameAs: [site.links.github, site.links.linkedin],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "en",
    author: { "@id": `${site.url}/#person` },
  };
}
