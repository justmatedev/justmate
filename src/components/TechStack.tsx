import type { IconType } from "react-icons"
import {
  SiAndroid,
  SiCloudflare,
  SiCloudflareworkers,
  SiExpo,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"

type Technology = {
  name: string
  icon: IconType
  color: string
}

const TechStack = () => {
  const categories: { title: string; items: Technology[] }[] = [
    {
      title: "Web",
      items: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#F3F4F6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      ],
    },
    {
      title: "Mobile",
      items: [
        { name: "React Native", icon: SiReact, color: "#61DAFB" },
        { name: "Expo", icon: SiExpo, color: "#F3F4F6" },
        { name: "Firebase", icon: SiFirebase, color: "#DD2C00" },
        { name: "Widgets Android", icon: SiAndroid, color: "#3DDC84" },
      ],
    },
    {
      title: "Backend e dados",
      items: [
        { name: "Cloudflare Workers", icon: SiCloudflareworkers, color: "#F38020" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "Prisma", icon: SiPrisma, color: "#F3F4F6" },
        { name: "Cloudflare D1", icon: SiCloudflare, color: "#F38020" },
      ],
    },
  ]

  return (
    <section
      id="tech"
      aria-labelledby="tech-heading"
      className="-scroll-mt-16 border-y border-(--color-border) py-16 md:-scroll-mt-20 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-12">
          <h2
            id="tech-heading"
            className="mb-3 text-3xl font-bold tracking-tight md:text-4xl"
          >
            Tecnologias
          </h2>
          <p className="text-gray-400">
            Tecnologias que uso para construir aplicações web e mobile, do frontend às integrações.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3 lg:gap-16">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-5 text-xs font-medium tracking-[0.12em] text-gray-400 uppercase">
                {category.title}
              </h3>
              <ul className="grid gap-4">
                {category.items.map((item) => (
                  <li key={item.name}>
                    <div className="group inline-flex items-center gap-2.5">
                      <span className="relative h-5 w-5 shrink-0 opacity-80 transition-opacity group-hover:opacity-100 md:h-6 md:w-6">
                        <item.icon aria-hidden className="h-full w-full" style={{ color: item.color }} />
                      </span>
                      <span className="text-base font-medium text-gray-300 transition-colors group-hover:text-primary">
                        {item.name}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
