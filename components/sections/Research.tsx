import { Action } from "@/components/poster/Action";
import { Band } from "@/components/poster/Band";
import { Meta } from "@/components/poster/Meta";
import { patent, publication } from "@/content/research";
import { formatDate } from "@/lib/format";

export function Research() {
  return (
    <Band id="research" label="Research">
      <h2 className="text-h3 md:text-h2 max-w-[30ch] font-bold">
        {publication.title}
      </h2>
      <p className="text-lead mt-6 max-w-[60ch]">{publication.summary}</p>
      <Meta
        className="border-ink mt-10 border-t pt-6 md:grid-cols-3"
        items={[
          {
            term: "Published in",
            value: `${publication.book}, chapter ${publication.chapter}, pages ${publication.pages}. ${publication.publisher}, ${formatDate(publication.published)}.`,
          },
          { term: "Authors", value: publication.authors.join(", ") },
          {
            term: "DOI",
            value: (
              <a
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue underline"
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
      <ul className="mt-10 flex flex-wrap gap-3">
        <li>
          <Action href="/research/6g-scattering-coefficients">
            Chapter summary
          </Action>
        </li>
        <li>
          <Action href={publication.url}>Springer</Action>
        </li>
      </ul>
    </Band>
  );
}
