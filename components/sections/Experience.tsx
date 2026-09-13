import { Arrow } from "@/components/poster/Arrow";
import { Band } from "@/components/poster/Band";
import { Disclosure } from "@/components/motion/Disclosure";
import { roles } from "@/content/experience";
import { formatShortMonth } from "@/lib/format";

export function Experience() {
  return (
    <Band id="experience" label="Experience">
      <ul className="divide-ink divide-y">
        {roles.map((role) => (
          <li key={`${role.org}-${role.start}`}>
            <Disclosure
              title={role.role}
              lead={
                <p className="tnum text-h3 md:text-h2 font-extrabold font-stretch-[112%]">
                  <span className="block">{formatShortMonth(role.start)}</span>
                  <span className="block">{formatShortMonth(role.end)}</span>
                </p>
              }
              meta={
                <>
                  <p className="text-lead mt-1">
                    {role.org}
                    {role.team ? `, ${role.team}` : null}
                  </p>
                  <p className="label text-ink-2 mt-2">{role.location}</p>
                </>
              }
            >
              <div className="grid grid-cols-4 gap-x-4 pb-10 md:grid-cols-12 md:gap-x-6">
                <div className="col-span-4 md:col-span-8 md:col-start-4">
                  <ul className="max-w-[68ch] list-disc space-y-3 pl-5">
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  {role.orgUrl ? (
                    <a
                      href={role.orgUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-meta hover:text-blue mt-6 inline-flex items-center gap-1 underline"
                    >
                      {role.org}
                      <Arrow kind="external" />
                    </a>
                  ) : null}
                </div>
              </div>
            </Disclosure>
          </li>
        ))}
      </ul>
    </Band>
  );
}
