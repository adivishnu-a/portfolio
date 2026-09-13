import { Arrow } from "@/components/poster/Arrow";
import { Band } from "@/components/poster/Band";
import { roles } from "@/content/experience";
import { formatMonth } from "@/lib/format";

function PlusIcon() {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      className="ease-out-expo transition-transform duration-200 group-open:rotate-45"
    >
      <path d="M10 3v14M3 10h14" />
    </svg>
  );
}

export function Experience() {
  return (
    <Band id="experience" label="Experience">
      <ul className="divide-ink divide-y">
        {roles.map((role) => (
          <li key={`${role.org}-${role.start}`}>
            <details className="group">
              <summary className="grid cursor-pointer list-none grid-cols-4 gap-x-4 gap-y-4 py-8 md:grid-cols-11 md:gap-x-6 [&::-webkit-details-marker]:hidden">
                <span className="tnum text-h3 md:text-h2 col-span-4 font-extrabold font-stretch-[112%] md:col-span-3">
                  <span className="block">{formatMonth(role.start)}</span>
                  <span className="block">{formatMonth(role.end)}</span>
                </span>
                <span className="col-span-3 block md:col-span-7">
                  <h2 className="text-h3 group-hover:text-blue font-bold transition-colors duration-150">
                    {role.role}
                  </h2>
                  <span className="text-lead mt-1 block">
                    {role.org}
                    {role.team ? `, ${role.team}` : null}
                  </span>
                  <span className="label text-ink-2 mt-2 block">
                    {role.location}
                  </span>
                </span>
                <span className="col-span-1 flex justify-end md:col-span-1">
                  <span className="border-ink group-hover:bg-ink group-hover:text-paper inline-flex size-11 items-center justify-center border transition-colors duration-150">
                    <PlusIcon />
                  </span>
                </span>
              </summary>
              <div className="grid grid-cols-4 gap-x-4 pb-10 md:grid-cols-11 md:gap-x-6">
                <div className="col-span-4 md:col-span-7 md:col-start-4">
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
            </details>
          </li>
        ))}
      </ul>
    </Band>
  );
}
