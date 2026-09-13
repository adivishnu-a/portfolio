import { Arrow } from "@/components/poster/Arrow";
import { Band } from "@/components/poster/Band";
import { education } from "@/content/experience";
import { certifications, honors } from "@/content/honors";
import { stack } from "@/content/stack";
import { formatMonth } from "@/lib/format";

export function Credentials() {
  return (
    <Band id="record" label="Record">
      <div className="grid gap-y-12 md:grid-cols-11 md:gap-x-6">
        {education.map((item) => (
          <div key={item.school} className="md:col-span-11">
            <h2 className="text-h3 md:text-h2 max-w-[30ch] font-bold">
              {item.degree}
            </h2>
            <p className="text-lead mt-3">
              {item.school}, {item.location}.{" "}
              <span className="tnum">
                {item.start} to {item.end}
              </span>
              .
            </p>
            <p className="text-ink-2 mt-1">{item.details.join(". ")}.</p>
          </div>
        ))}

        <div className="md:col-span-6">
          <h3 className="label">Honors</h3>
          <ul className="mt-5 space-y-6">
            {honors.map((honor) => (
              <li key={honor.title}>
                <p className="font-semibold">
                  {honor.title}{" "}
                  <span className="tnum text-ink-2 font-normal">
                    {honor.year}
                  </span>
                </p>
                <p className="text-ink-2 mt-1">{honor.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4 md:col-start-8">
          <h3 className="label">Certifications</h3>
          <ul className="mt-5 space-y-6">
            {certifications.map((cert) => (
              <li key={cert.name}>
                <p className="font-semibold">{cert.name}</p>
                <p className="text-ink-2 mt-1">
                  {cert.issuer}, {formatMonth(cert.issued)}.
                </p>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-meta hover:text-blue mt-1 inline-flex items-center gap-1 underline"
                >
                  Verify
                  <Arrow kind="external" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-11">
          <h3 className="label">Stack</h3>
          <dl className="divide-ink mt-5 divide-y">
            {stack.map((group) => (
              <div
                key={group.name}
                className="grid grid-cols-4 gap-x-4 gap-y-3 py-5 md:grid-cols-11 md:gap-x-6"
              >
                <dt className="text-lead col-span-4 font-bold md:col-span-3">
                  {group.name}
                </dt>
                <dd className="col-span-4 md:col-span-8">
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border-ink text-body border px-3 py-1.5 font-medium"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Band>
  );
}
