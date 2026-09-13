import type { StackGroup } from "./types";

export const stack: StackGroup[] = [
  {
    name: "Languages",
    items: ["TypeScript", "JavaScript", "Java", "Python", "SQL"],
  },
  {
    name: "Backend",
    items: [
      "Node.js",
      "Express",
      "REST API design",
      "Event-driven architecture",
      "ACID transactions and concurrency control",
    ],
  },
  { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  {
    name: "Data",
    items: ["PostgreSQL", "Neon", "Drizzle ORM", "Redis", "MongoDB", "MySQL"],
  },
  {
    name: "Machine learning",
    items: ["scikit-learn", "Keras", "pandas", "NumPy"],
  },
  {
    name: "Infrastructure",
    items: ["Vercel", "GitHub Actions", "Docker", "AWS"],
  },
];
