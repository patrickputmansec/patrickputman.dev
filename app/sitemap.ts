import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.patrickputman.dev",
      lastModified: new Date("2026-03-29"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
