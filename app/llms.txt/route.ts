import { site } from "@/content/site";
import { featuredWork, archive, workHref } from "@/content/work";
import { roles, education } from "@/content/experience";
import { capstone, publication, patent } from "@/content/research";
import { formatRange } from "@/lib/format";

export const dynamic = "force-static";

/** llms.txt: a plain-text summary of the site for language-model crawlers. */
export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `- Site: ${site.url}`,
    `- Resume: ${site.url}${site.links.resume}`,
    `- GitHub: ${site.links.github}`,
    `- LinkedIn: ${site.links.linkedin}`,
    `- Email: ${site.email}`,
    "",
    "## Featured work",
    "",
    ...featuredWork.map(
      (entry) =>
        `- [${entry.title}](${site.url}${workHref(entry)}): ${entry.summary}`,
    ),
    "",
    "## Other projects",
    "",
    ...archive.map(
      (entry) =>
        `- [${entry.title}](${entry.href}) (${entry.year}): ${entry.summary}`,
    ),
    "",
    "## Experience",
    "",
    ...roles.map(
      (role) =>
        `- ${role.role}, ${role.org}, ${formatRange(role.start, role.end)}`,
    ),
    "",
    "## Education",
    "",
    ...education.map(
      (item) =>
        `- ${item.degree}, ${item.school}, ${item.start} to ${item.end}. ${item.details.join(". ")}.`,
    ),
    "",
    "## Research",
    "",
    `- Book chapter: "${publication.title}", chapter ${publication.chapter} in "${publication.book}", ${publication.publisher}, ${publication.published}. DOI ${publication.doi}. ${publication.url}`,
    `- Patent application ${patent.number}, ${patent.office}. ${patent.status}.`,
    `- ${capstone.note}: "${capstone.title}", ${capstone.institution}, ${capstone.year}. ${capstone.summary}`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
