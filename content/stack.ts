import type { StackGroup } from "./types";

/**
 * Only things Adi has shipped with and would answer questions on.
 * Spring Boot is deliberately absent.
 */
export const stack: StackGroup[] = [
  {
    name: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "PHP", "SQL"],
  },
  {
    name: "Backend",
    items: [
      "Node.js",
      "Express",
      "REST API design",
      "Event-driven architecture",
      "ACID transactions and concurrency control",
      "Zod",
    ],
  },
  { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  {
    name: "Data",
    items: ["PostgreSQL", "Drizzle ORM", "Prisma", "Redis", "MongoDB", "MySQL"],
  },
  {
    name: "Machine learning",
    items: ["scikit-learn", "Keras", "pandas", "NumPy"],
  },
  {
    name: "Infrastructure and tooling",
    items: ["GitHub Actions", "Docker", "Vitest", "Vercel", "AWS"],
  },
];
