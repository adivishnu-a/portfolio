import { Action } from "@/components/poster/Action";
import { Meta } from "@/components/poster/Meta";
import type { Tone } from "@/components/poster/tone";
import type { WorkEntry } from "@/content/types";
import { workHref } from "@/content/work";

interface WorkEntryBlockProps {
  entry: WorkEntry;
  tone: Tone;
}

/** One featured entry inside a band: title, one sentence, actions, meta. */
export function WorkEntryBlock({ entry, tone }: WorkEntryBlockProps) {
  return (
    <div className="grid gap-y-10 md:grid-cols-12 md:gap-x-6">
      <div className="md:col-span-7">
        <h3 className="text-h2 md:text-h1 font-extrabold font-stretch-[112%]">
          {entry.title}
        </h3>
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
        className="md:col-span-3 md:col-start-10"
        items={[
          { term: "Period", value: entry.period },
          { term: "Stack", value: entry.stack.join(", ") },
        ]}
      />
    </div>
  );
}
