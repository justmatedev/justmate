import { SiGithub, SiGoogleplay } from "react-icons/si"
import { FiExternalLink } from "react-icons/fi"
import Image from "next/image"

const Projects = () => {
  const projects = [
    {
      title: "Thinkdo",
      description:
        "Um aplicativo mobile de anotações focado em simplicidade e performance. O objetivo é oferecer uma experiência de captura de ideias livre de distrações, garantindo que os dados do usuário estejam sempre seguros, sincronizados com a nuvem e disponíveis até mesmo offline.",
      tags: [
        "React Native",
        "Expo",
        "Zustand",
        "Firebase",
        "NativeWind",
        "React Navigation",
        "AsyncStorage",
      ],
      links: {
        googlePlay:
          "https://play.google.com/store/apps/details?id=com.justmate.thinkdo",
        github: "https://github.com/justmatedev/thinkdo",
      },
      type: "Mobile App",
      bgColor: "bg-gray-900",
      logo: "/logo/thinkdoapp.svg",
      mockups: [
        "/mockup/thinkdoapp1.png",
        "/mockup/thinkdoapp2.png",
        "/mockup/thinkdoapp3.png",
      ],
    },
    {
      title: "Thinkdo - Landing Page",
      description:
        "Uma landing page moderna, estática e responsiva para o aplicativo Thinkdo. O site serve como a principal vitrine digital do app, apresentando seus recursos de forma clara e objetiva, com o objetivo principal de direcionar os usuários para o download na Google Play Store.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React-Icons"],
      links: {
        website: "https://thinkdo.vercel.app/",
        github: "https://github.com/justmatedev/thinkdo-webpage",
      },
      type: "Web App",
      bgColor: "bg-gray-900",
      logo: "/logo/thinkdoweb.svg",
      mockups: ["/mockup/thinkdoweb.png"],
    },
    {
      title: "Zine",
      description:
        "O seu guia definitivo para descobrir filmes, séries e coleções curadas. Descubra os lançamentos mais populares, os filmes em alta e os clássicos mais bem avaliados do cinema e da TV mundial.",
      tags: ["Next.js", "React", "Tailwind CSS", "TMDB API", "Firebase"],
      links: {
        website: "https://zine-watch.vercel.app",
        github: "https://github.com/justmatedev/zine",
      },
      type: "Web App",
      bgColor: "bg-gray-900",
      logo: "/logo/zine.svg",
      mockups: ["/mockup/zine.png"],
    },
  ]

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="projects-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Projetos
          </h2>
          <p className="text-gray-400">
            Alguns dos trabalhos que desenvolvi recentemente.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center`}
            >
              <div className="flex-1 w-full">
                {project.mockups.length == 3 ? (
                  <div className="grid grid-cols-3 gap-4">
                    {project.mockups.map((mockup, i) => (
                      <div
                        key={i}
                        className={`relative rounded-xl overflow-hidden shadow-lg border border-(--color-border) flex bg-(--color-surface-1) hover:-translate-y-2 hover:border-primary/30 transition-all ${i === 1 ? "scale-110 z-10 hover:z-20" : "scale-95 opacity-80 hover:opacity-100 hover:scale-100"}`}
                      >
                        <Image
                          src={mockup}
                          alt={`Capturas de tela detalhadas do projeto ${project.title} - Visualização ${i + 1}`}
                          width={1080}
                          height={1920}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    className={
                      "rounded-xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,1)] border border-(--color-border) flex bg-(--color-surface-1) hover:-translate-y-2 hover:border-primary/30 transition-all group"
                    }
                  >
                    <Image
                      src={project.mockups[0]}
                      alt={`Apresentação visual da interface do projeto ${project.title}`}
                      width={1920}
                      height={1080}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
              </div>

              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-xl flex items-center justify-center text-xs font-bold overflow-hidden relative">
                    <Image
                      src={project.logo}
                      alt={`Logotipo oficial do projeto independente ${project.title}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <span className="text-primary font-medium text-sm">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-(--color-surface-2) border border-(--color-border) rounded-full text-xs font-medium text-gray-300 shadow-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-6 pt-4">
                  {project.links.googlePlay && (
                    <a
                      href={project.links.googlePlay}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors font-medium"
                    >
                      <SiGoogleplay /> Google Play
                    </a>
                  )}
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors font-medium"
                    >
                      <FiExternalLink /> Website
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors font-medium"
                    >
                      <SiGithub /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
