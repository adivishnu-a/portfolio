export interface Link {
  label: string;
  href: string;
}

export type WorkKind = "product" | "professional" | "research";

export interface WorkEntry {
  slug: string;
  kind: WorkKind;
  title: string;
  /** One sentence. Shown on the home page band and as the page description. */
  summary: string;
  period: string;
  stack: string[];
  links: Link[];
  /** ISO date of the last content change. Feeds the sitemap. */
  updated: string;
}

export interface ArchiveEntry {
  title: string;
  year: number;
  summary: string;
  stack: string[];
  href: string;
}

export interface Role {
  role: string;
  org: string;
  orgUrl?: string;
  team?: string;
  location: string;
  /** YYYY-MM */
  start: string;
  /** YYYY-MM */
  end: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  /** YYYY */
  start: string;
  /** YYYY */
  end: string;
  details: string[];
}

export interface Honor {
  title: string;
  detail: string;
  year: number;
}

export interface Certification {
  name: string;
  issuer: string;
  /** YYYY-MM */
  issued: string;
  verifyUrl: string;
}

export interface StackGroup {
  name: string;
  items: string[];
}

export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}
