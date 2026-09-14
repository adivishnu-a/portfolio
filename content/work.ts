import type { ArchiveEntry, WorkEntry, WorkKind } from "./types";

export const kindLabel: Record<WorkKind, string> = {
  product: "Product",
  professional: "Professional",
  research: "Research",
};

/**
 * Featured work, in display order. Each entry has a matching MDX body in
 * content/work/<slug>.mdx or content/research/<slug>.mdx.
 * To add the next project, add an object here and a body file. Nothing else.
 */
export const featuredWork: WorkEntry[] = [
  {
    slug: "halflife",
    kind: "product",
    title: "Halflife",
    summary:
      "A free flashcard app with two schedulers: Anki's SM-2 formula and a half-life regression model trained on 12.85 million Duolingo reviews. Every review records what both would do, and the model takes over only when it wins on real data.",
    period: "2026",
    stack: [
      "PyTorch",
      "FastAPI",
      "NumPy",
      "Next.js 16",
      "TypeScript",
      "Neon Postgres",
      "Drizzle ORM",
      "GitHub Actions",
    ],
    links: [
      { label: "Live", href: "https://halflifecards.vercel.app" },
      { label: "Source", href: "https://github.com/adivishnu-a/halflife" },
    ],
    updated: "2026-09-14",
  },
  {
    slug: "darwinbox",
    kind: "professional",
    title: "Darwinbox, Core Engineering",
    summary:
      "Audit trails, access control, provisioning pipelines and localisation for an enterprise HR platform, shipped over eighteen months as an intern and then SDE-1.",
    period: "January 2025 to August 2026",
    stack: [
      "PHP",
      "Node.js",
      "Event-driven architecture",
      "Access control",
      "i18n",
    ],
    links: [{ label: "Company", href: "https://darwinbox.com" }],
    updated: "2026-09-13",
  },
  {
    slug: "mf-compass",
    kind: "product",
    title: "MF Compass",
    summary:
      "Ranks Indian mutual funds by outperformance against their category average instead of raw returns. Free, anonymous, refreshed daily.",
    period: "2025 to 2026",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Neon Postgres",
      "Drizzle ORM",
      "Node.js",
      "GitHub Actions",
    ],
    links: [
      { label: "Live", href: "https://mf-compass.vercel.app" },
      { label: "Source", href: "https://github.com/adivishnu-a/mf-compass" },
    ],
    updated: "2026-09-13",
  },
  {
    slug: "6g-scattering-coefficients",
    kind: "research",
    title: "Predicting optical scattering in heart tissue",
    summary:
      "A Springer chapter comparing four regression models at predicting the near-infrared scattering coefficient of myocardium tissue, for in-vivo nanosensor networks in 6G systems.",
    period: "Published July 2026",
    stack: [
      "Python",
      "scikit-learn",
      "Keras",
      "Regression",
      "Gradient boosting",
      "Neural networks",
    ],
    links: [
      {
        label: "Chapter",
        href: "https://doi.org/10.1007/978-3-032-19042-0_14",
      },
      {
        label: "Book",
        href: "https://link.springer.com/book/10.1007/978-3-032-19042-0",
      },
    ],
    updated: "2026-09-13",
  },
];

export function workHref(entry: WorkEntry): string {
  return entry.kind === "research"
    ? `/research/${entry.slug}`
    : `/work/${entry.slug}`;
}

export function getWork(slug: string, kind?: WorkKind): WorkEntry | undefined {
  return featuredWork.find(
    (entry) => entry.slug === slug && (kind ? entry.kind === kind : true),
  );
}

/** Everything else, newest first. Delete a row to retire it. */
export const archive: ArchiveEntry[] = [
  {
    title: "CampusFusion",
    year: 2025,
    summary:
      "Role-based school ERP with dashboards for administrators, teachers, students and parents.",
    stack: ["Next.js", "MongoDB", "Prisma", "Clerk", "AWS S3"],
    href: "https://github.com/adivishnu-a/CampusFusion",
  },
  {
    title: "iCho",
    year: 2024,
    summary:
      "Head-tracking audio assistant that adjusts volume from where your face is, hands-free.",
    stack: ["Python", "OpenCV", "Mediapipe"],
    href: "https://github.com/adivishnu-a/icho",
  },
  {
    title: "Twitter Sentiment Analysis",
    year: 2024,
    summary:
      "Sentiment extraction and visualisation over Twitter data with Spark and R.",
    stack: ["Apache Spark", "R"],
    href: "https://github.com/adivishnu-a/Twitter-Sentiment-Analysis",
  },
];
