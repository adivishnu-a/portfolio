import { Action } from "@/components/poster/Action";
import { Band } from "@/components/poster/Band";
import { Meta } from "@/components/poster/Meta";
import { capstone, patent, publication } from "@/content/research";
import { featuredWork, workHref } from "@/content/work";
import { formatDate } from "@/lib/format";

export function Research() {
  const entry = featuredWork.find((item) => item.kind === "research");
  if (!entry) return null;

  return (
    <Band id="research" tone="blue" label="Research">
      <div className="grid gap-y-10 md:grid-cols-12 md:gap-x-6">
        <div className="md:col-span-7">
          <h3 className="text-h2 md:text-h1 font-extrabold font-stretch-[112%]">
            {entry.title}
          </h3>
          <p className="text-lead mt-6 max-w-[44ch]">{publication.summary}</p>
          <ul className="mt-8 flex flex-wrap gap-3">
            <li>
              <Action href={workHref(entry)} tone="blue">
                Chapter summary
              </Action>
            </li>
            <li>
              <Action href={publication.url} tone="blue">
                Springer
              </Action>
            </li>
          </ul>
        </div>
        <Meta
          tone="blue"
          className="md:col-span-3 md:col-start-10"
          items={[
            {
              term: "Published in",
              value: `${publication.book}, chapter ${publication.chapter}. ${publication.publisher}, ${formatDate(publication.published)}.`,
            },
            { term: "Authors", value: publication.authors.join(", ") },
            {
              term: "DOI",
              value: (
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80"
                >
                  {publication.doi}
                </a>
              ),
            },
            {
              term: "Patent application",
              value: `${patent.number}, ${patent.office}. ${patent.status}.`,
            },
          ]}
        />
      </div>

      <div className="border-on-blue/40 mt-16 grid gap-y-8 border-t pt-10 md:grid-cols-12 md:gap-x-6">
        <div className="md:col-span-7">
          <p className="label text-on-blue-2">{capstone.note}</p>
          <h4 className="text-h3 mt-3 max-w-[30ch] font-bold">
            {capstone.title}
          </h4>
          <p className="mt-4 max-w-[60ch]">{capstone.summary}</p>
        </div>
        <Meta
          tone="blue"
          className="md:col-span-3 md:col-start-10"
          items={[
            { term: "Year", value: String(capstone.year) },
            { term: "Institution", value: capstone.institution },
            { term: "Guide", value: capstone.guide },
            { term: "Team", value: capstone.team.join(", ") },
          ]}
        />
      </div>
    </Band>
  );
}
