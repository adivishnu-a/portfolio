import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { featuredWork, workHref } from "@/content/work";

const homeUpdated = new Date("2026-09-13");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: homeUpdated,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...featuredWork.map((entry) => ({
      url: `${site.url}${workHref(entry)}`,
      lastModified: new Date(entry.updated),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
