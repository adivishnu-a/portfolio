import { Arrow } from "@/components/poster/Arrow";
import { Band } from "@/components/poster/Band";
import { archive } from "@/content/work";

export function Archive() {
  return (
    <Band id="archive" label="More projects">
      <h3 className="text-h2 font-extrabold font-stretch-[112%]">
        Everything else
      </h3>
      <ul className="divide-ink mt-10 divide-y">
        {archive.map((item) => (
          <li
            key={item.title}
            className="grid grid-cols-4 gap-x-4 gap-y-3 py-6 md:grid-cols-12 md:gap-x-6"
          >
            <p className="tnum text-meta text-ink-2 col-span-1 md:pt-1.5">
              {item.year}
            </p>
            <h4 className="text-h3 col-span-3 font-semibold">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue"
              >
                {item.title}
                <Arrow kind="external" className="ml-2 inline-block" />
              </a>
            </h4>
            <p className="col-span-4 md:col-span-5 md:pt-1">{item.summary}</p>
            <p className="text-meta text-ink-2 col-span-4 md:col-span-3 md:pt-1.5">
              {item.stack.join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </Band>
  );
}
