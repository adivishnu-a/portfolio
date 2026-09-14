import type { StackGroup } from "./types";

/**
 * A signal, not an inventory: what matters for a backend engineer moving
 * into machine learning. Spring Boot is deliberately absent.
 */
export const stack: StackGroup[] = [
  {
    name: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "PHP"],
  },
  {
    name: "Backend",
    items: [
      "Node.js",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "REST API design",
      "Event-driven architecture",
      "ACID transactions and concurrency control",
    ],
  },
  { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  {
    name: "Machine learning",
    items: ["PyTorch", "scikit-learn", "pandas", "NumPy"],
  },
  {
    name: "Infrastructure",
    items: ["GitHub Actions", "Vercel", "AWS"],
  },
];
