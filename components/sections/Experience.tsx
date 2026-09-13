import { Band } from "@/components/poster/Band";
import { roles } from "@/content/experience";
import { formatRange, yearOf } from "@/lib/format";

export function Experience() {
  return (
    <Band id="experience" label="Experience">
      <ul className="border-ink border-t">
        {roles.map((role) => (
          <li
            key={`${role.org}-${role.start}`}
            className="border-ink grid grid-cols-4 gap-x-4 gap-y-4 border-b py-10 md:grid-cols-11 md:gap-x-6"
          >
            <div className="col-span-4 md:col-span-3">
              <p className="tnum text-h1 font-extrabold font-stretch-[112%]">
                {yearOf(role.start)}
              </p>
              <p className="tnum text-meta text-ink-2 mt-2">
                {formatRange(role.start, role.end)}
              </p>
            </div>
            <div className="col-span-4 md:col-span-8">
              <h2 className="text-h3 font-bold">{role.role}</h2>
              <p className="text-lead mt-1">
                {role.orgUrl ? (
                  <a
                    href={role.orgUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue"
                  >
                    {role.org}
                  </a>
                ) : (
                  role.org
                )}
                {role.team ? `, ${role.team}` : null}
              </p>
              <p className="label text-ink-2 mt-2">{role.location}</p>
              <ul className="mt-6 max-w-[68ch] list-disc space-y-3 pl-5">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </Band>
  );
}
