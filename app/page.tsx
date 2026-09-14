import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { Archive } from "@/components/sections/Archive";
import { Credentials } from "@/components/sections/Credentials";
import { Experience } from "@/components/sections/Experience";
import { FeaturedBand } from "@/components/sections/FeaturedBand";
import { Hero } from "@/components/sections/Hero";
import { Research } from "@/components/sections/Research";
import { featuredWork, getWork } from "@/content/work";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const darwinbox = getWork("darwinbox", "professional");
  const products = featuredWork.filter((entry) => entry.kind === "product");

  return (
    <main id="main">
      <Hero />
      {darwinbox ? (
        <FeaturedBand
          entry={darwinbox}
          tone="blue"
          label="Professional"
          id="work"
        />
      ) : null}
      <Experience />
      {products.map((entry, index) => (
        <FeaturedBand
          key={entry.slug}
          entry={entry}
          tone={index % 2 === 0 ? "blue" : "paper"}
          label={index === 0 ? "Work" : "Product"}
        />
      ))}
      <Archive />
      <Research />
      <About />
      <Credentials />
    </main>
  );
}
