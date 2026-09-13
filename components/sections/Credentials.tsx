import type { ReactNode } from "react";
import { Arrow } from "@/components/poster/Arrow";
import { Band } from "@/components/poster/Band";
import { education } from "@/content/experience";
import { certifications, honors } from "@/content/honors";
import { stack } from "@/content/stack";
import { formatMonth } from "@/lib/format";

function Row({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-4 py-10 first:pt-0 last:pb-0 md:grid-cols-12 md:gap-x-6">
      <dt className="text-h3 col-span-4 font-bold md:col-span-3">{term}</dt>
      <dd className="col-span-4 md:col-span-9">{children}</dd>
    </div>
  );
}

/** One record, four rows, one list vocabulary: term on the left, entries on the right. */
export function Credentials() {
  return (
    <Band id="record" label="Record">
      <dl className="divide-ink divide-y">
        <Row term="Education">
          {education.map((item) => (
            <div key={item.school}>
              <p className="text-lead font-semibold">{item.degree}</p>
              <p className="mt-1">
                {item.school}, {item.location}.{" "}
                <span className="tnum">
                  {item.start} to {item.end}
                </span>
                .
              </p>
              <p className="text-ink-2 mt-1">{item.details.join(". ")}.</p>
            </div>
          ))}
        </Row>

        <Row term="Honors">
          <ul className="space-y-6">
            {honors.map((honor) => (
              <li key={honor.title}>
                <p className="text-lead font-semibold">
                  {honor.title}{" "}
                  <span className="tnum text-body text-ink-2 font-normal">
                    {honor.year}
                  </span>
                </p>
                <p className="text-ink-2 mt-1">{honor.detail}</p>
              </li>
            ))}
          </ul>
        </Row>

        <Row term="Certifications">
          <ul className="space-y-6">
            {certifications.map((cert) => (
              <li key={cert.name}>
                <p className="text-lead font-semibold">{cert.name}</p>
                <p className="text-ink-2 mt-1">
                  {cert.issuer}, {formatMonth(cert.issued)}.{" "}
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink hover:text-blue inline-flex items-center gap-1 underline"
                  >
                    Verify
                    <Arrow kind="external" />
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </Row>

        <Row term="Stack">
          <div className="space-y-6">
            {stack.map((group) => (
              <div key={group.name}>
                <p className="label text-ink-2">{group.name}</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-ink text-body border px-3 py-1.5 font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Row>
      </dl>
    </Band>
  );
}
