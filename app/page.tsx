import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { Credentials } from "@/components/sections/Credentials";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Research } from "@/components/sections/Research";
import { Work } from "@/components/sections/Work";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Work />
      <Research />
      <Experience />
      <About />
      <Credentials />
    </main>
  );
}
