import { Band } from "@/components/poster/Band";
import { about } from "@/content/about";

export function About() {
  return (
    <Band id="about" label="About">
      <div className="text-lead max-w-[60ch] space-y-6">
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Band>
  );
}
