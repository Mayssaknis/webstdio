import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/projets", priority: 0.8 },
    { path: "/tarifs", priority: 0.9 },
    { path: "/a-propos", priority: 0.6 },
    { path: "/contact", priority: 0.9 },
  ] as const;

  return routes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  }));
}