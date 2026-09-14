import { Band } from "@/components/poster/Band";
import { featuredWork } from "@/content/work";
import { WorkEntryBlock } from "./WorkEntryBlock";

/** Every product entry, in content order, stacked inside one band. */
export function Projects() {
  const products = featuredWork.filter((entry) => entry.kind === "product");
  if (products.length === 0) return null;

  return (
    <Band id="projects" tone="blue" label="Projects">
      <div className="divide-on-blue/40 divide-y">
        {products.map((entry, index) => (
          <div key={entry.slug} className={index === 0 ? "pb-16" : "pt-16"}>
            <WorkEntryBlock entry={entry} tone="blue" />
          </div>
        ))}
      </div>
    </Band>
  );
}
