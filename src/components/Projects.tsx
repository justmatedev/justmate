import { SiGithub, SiGoogleplay } from "react-icons/si"
import { FiExternalLink } from "react-icons/fi"
import Image from "next/image"

type Project = {
  title: string
  type: string
  logo: string
  mockups: string[]
  tags: string[]
  problem: string
  solution: string
  result: string
  links: {
    googlePlay?: string
    website?: string
    github?: string
  }
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Bonsare",
      type: "Web App",
      logo: "/logo/bonsare.svg",
      mockups: ["/mockup/bonsare.png"],
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand"],
      problem:
        "Marcas e criativos precisam de presença web premium alinhada a estratégia visual e conteúdo.",
      solution:
        "Site Next.js/React/TypeScript com tipografia expressiva, design premium e UX imersiva.",
      result: "Site live em bonsare.com.br.",
      links: {
        website: "https://bonsare.com.br",
      },
    },
    {
      title: "Thinkdo",
      type: "Mobile App",
      logo: "/logo/thinkdoapp.svg",
      mockups: [
        "/mockup/thinkdoapp1.png",
        "/mockup/thinkdoapp2.png",
        "/mockup/thinkdoapp3.png",
      ],
      tags: ["React Native", "Expo", "Zustand", "Firebase", "NativeWind"],
      problem:
        "Capturar ideias sem fricção, com dados seguros, sincronizados e disponíveis offline.",
      solution:
        "App React Native/Expo com estado leve (Zustand), Firebase, NativeWind e AsyncStorage para experiência offline-first.",
      result: "App publicado na Google Play; código aberto no GitHub.",
      links: {
        googlePlay:
          "https://play.google.com/store/apps/details?id=com.justmate.thinkdo",
        github: "https://github.com/justmatedev/thinkdo",
      },
    },
    {
      title: "Sinalverde",
      type: "Web App",
      logo: "/logo/sinalverde.svg",
      mockups: ["/mockup/sinalverde.png"],
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
        "Auth.js",
      ],
      problem:
        "Comparar preços de jogos em lojas oficiais no Brasil ainda exige várias abas.",
      solution:
        "App Next.js com catálogo em BRL, melhor preço Steam vs Nuuvem, wishlist e alertas por e-mail.",
      result: "Live em sinalverdebr.vercel.app; repositório público.",
      links: {
        website: "https://sinalverdebr.vercel.app",
        github: "https://github.com/justmatedev/sinalverde",
      },
    },
  ]

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 md:mb-28 text-center md:text-left">
          <h2
            id="projects-heading"
            className="text-3xl md:text-4xl font-bold mb-3 tracking-tight"
          >
            Projetos
          </h2>
          <p className="text-gray-400 max-w-xl md:max-w-none">
            Cases recentes — do problema ao resultado.
          </p>
        </div>

        <div className="space-y-28 md:space-y-36">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`flex flex-col gap-10 md:gap-14 lg:gap-16 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="flex-1 w-full min-w-0">
                {project.mockups.length === 3 ? (
                  <div className="grid grid-cols-3 items-end gap-2 sm:gap-3 md:gap-4">
                    {project.mockups.map((mockup, i) => (
                      <div
                        key={mockup}
                        className={`relative overflow-hidden rounded-xl ${
                          i === 1 ? "z-10 scale-105" : "scale-[0.92] opacity-70"
                        }`}
                      >
                        <Image
                          src={mockup}
                          alt={`Tela ${i + 1} do app ${project.title}`}
                          width={1080}
                          height={1920}
                          className="h-auto w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src={project.mockups[0]}
                      alt={`Interface do projeto ${project.title}`}
                      width={1920}
                      height={1080}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                )}
              </div>

              <div className="flex-1 w-full space-y-7 md:space-y-8">
                <div className="flex items-center gap-3">
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden">
                    <Image
                      src={project.logo}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-primary">{project.type}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-500 tracking-wide">
                  {project.tags.join(" · ")}
                </p>

                <div className="space-y-5 text-gray-400 leading-relaxed">
                  <p>
                    <span className="block text-xs font-medium uppercase tracking-[0.14em] text-gray-200 mb-1.5">
                      Problema
                    </span>
                    {project.problem}
                  </p>
                  <p>
                    <span className="block text-xs font-medium uppercase tracking-[0.14em] text-gray-200 mb-1.5">
                      Solução
                    </span>
                    {project.solution}
                  </p>
                  <p>
                    <span className="block text-xs font-medium uppercase tracking-[0.14em] text-gray-200 mb-1.5">
                      Resultado
                    </span>
                    {project.result}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1">
                  {project.links.googlePlay && (
                    <a
                      href={project.links.googlePlay}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 transition-colors hover:text-primary"
                    >
                      <SiGoogleplay aria-hidden /> Google Play
                    </a>
                  )}
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 transition-colors hover:text-primary"
                    >
                      <FiExternalLink aria-hidden /> Website
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 transition-colors hover:text-primary"
                    >
                      <SiGithub aria-hidden /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
