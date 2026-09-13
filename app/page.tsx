import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { Archive } from "@/components/sections/Archive";
import { Credentials } from "@/components/sections/Credentials";
import { Experience } from "@/components/sections/Experience";
import { FeaturedBand } from "@/components/sections/FeaturedBand";
import { Hero } from "@/components/sections/Hero";
import { Research } from "@/components/sections/Research";
import { getWork } from "@/content/work";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const darwinbox = getWork("darwinbox", "professional");
  const mfCompass = getWork("mf-compass", "product");

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
      {mfCompass ? (
        <FeaturedBand entry={mfCompass} tone="blue" label="Work" />
      ) : null}
      <Archive />
      <Research />
      <About />
      <Credentials />
    </main>
  );
}
