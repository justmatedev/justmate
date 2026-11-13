import { MetadataRoute } from "next"
import content from "@/data/projects.json"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://justmate.vercel.app"

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...content.projects.map((project) => ({
      url: `${baseUrl}/projetos/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]
}
