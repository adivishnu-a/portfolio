import { Action } from "@/components/poster/Action";
import { Arrow } from "@/components/poster/Arrow";
import { Band } from "@/components/poster/Band";
import { Meta } from "@/components/poster/Meta";
import type { Tone } from "@/components/poster/tone";
import { archive, featuredWork, kindLabel, workHref } from "@/content/work";

export function Work() {
  return (
    <>
      {featuredWork.map((entry, index) => {
        const tone: Tone = index % 2 === 0 ? "blue" : "paper";
        return (
          <Band
            key={entry.slug}
            id={index === 0 ? "work" : undefined}
            tone={tone}
            label={index === 0 ? "Work" : kindLabel[entry.kind]}
          >
            <div className="grid gap-y-10 md:grid-cols-11 md:gap-x-6">
              <div className="md:col-span-7">
                <h2 className="text-h2 md:text-h1 font-extrabold font-stretch-[112%]">
                  {entry.title}
                </h2>
                <p className="text-lead mt-6 max-w-[44ch]">{entry.summary}</p>
                <ul className="mt-8 flex flex-wrap gap-3">
                  <li>
                    <Action href={workHref(entry)} tone={tone}>
                      Case study
                    </Action>
                  </li>
                  {entry.links.map((link) => (
                    <li key={link.href}>
                      <Action href={link.href} tone={tone}>
                        {link.label}
                      </Action>
                    </li>
                  ))}
                </ul>
              </div>
              <Meta
                tone={tone}
                className="md:col-span-3 md:col-start-9"
                items={[
                  { term: "Period", value: entry.period },
                  { term: "Stack", value: entry.stack.join(", ") },
                ]}
              />
            </div>
          </Band>
        );
      })}

      <Band label="More work">
        <h2 className="text-h2 font-extrabold font-stretch-[112%]">
          Everything else
        </h2>
        <ul className="border-ink mt-10 border-t">
          {archive.map((item) => (
            <li
              key={item.title}
              className="border-ink grid grid-cols-4 gap-x-4 gap-y-2 border-b py-5 md:grid-cols-11 md:gap-x-6"
            >
              <p className="tnum text-meta text-ink-2 col-span-1">
                {item.year}
              </p>
              <h3 className="text-h3 col-span-3 font-semibold">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue"
                >
                  {item.title}
                  <Arrow kind="external" className="ml-2 inline-block" />
                </a>
              </h3>
              <p className="col-span-4 md:col-span-5">{item.summary}</p>
              <p className="text-meta text-ink-2 col-span-4 md:col-span-2">
                {item.stack.join(", ")}
              </p>
            </li>
          ))}
        </ul>
      </Band>
    </>
  );
}
