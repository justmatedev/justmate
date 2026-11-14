import Image from "next/image"
import Link from "next/link"
import { FiArrowRight } from "react-icons/fi"
import content from "@/data/projects.json"
import ProjectLinks from "@/components/ProjectLinks"

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="-scroll-mt-24 py-24 md:-scroll-mt-32 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 md:mb-20">
          <h2 id="projects-heading" className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">{content.sectionTitle}</h2>
          <p className="max-w-2xl text-gray-400">{content.sectionDescription}</p>
        </div>
        <div className="space-y-20 md:space-y-28">
          {content.projects.map((project, index) => {
            const isMobile = project.slug === "thinkdo"
            const screenshots = isMobile ? project.images : project.images.slice(0, 1)
            return (
              <article key={project.slug} aria-labelledby={`${project.slug}-heading`}
                className={`flex flex-col items-center gap-10 md:gap-14 lg:gap-16 ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                <Link href={`/projetos/${project.slug}`} aria-label={`Ver projeto ${project.title}`}
                  className="group order-2 block w-full min-w-0 flex-1 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-primary md:order-none">
                  <div className={isMobile ? "flex items-end justify-center gap-2 sm:gap-3 md:gap-4" : "overflow-hidden rounded-xl"}>
                    {screenshots.map((screenshot) => (
                      <div key={screenshot.src} className={isMobile ? "min-w-0 flex-1 overflow-hidden rounded-xl" : "w-full"}>
                        <Image src={screenshot.src} alt={screenshot.alt} width={screenshot.width} height={screenshot.height}
                          sizes={isMobile ? "(max-width: 767px) 33vw, 16vw" : "(max-width: 767px) 100vw, 50vw"}
                          className="h-auto w-full object-contain transition-transform duration-300 motion-safe:group-hover:scale-[1.02] motion-reduce:transition-none" />
                      </div>
                    ))}
                  </div>
                </Link>
                <div className="order-1 w-full min-w-0 flex-1 space-y-5 md:order-none md:space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="relative h-11 w-11 shrink-0"><Image src={project.logo} alt="" fill className="object-contain" sizes="44px" /></div>
                    <div>
                      <h3 id={`${project.slug}-heading`} className="text-2xl font-bold tracking-tight md:text-3xl">{project.title}</h3>
                      <p className="text-sm font-medium text-primary">{project.type}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-lg leading-relaxed text-gray-100">{project.headline}</p>
                    <p className="leading-relaxed text-gray-400">{project.description}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-400">{project.tags.join(" · ")}</p>
                  <ProjectLinks links={project.links}>
                    <Link href={`/projetos/${project.slug}`} className="btn-primary w-full gap-2 lg:w-auto">Ver projeto <FiArrowRight aria-hidden /><span className="sr-only"> {project.title}</span></Link>
                  </ProjectLinks>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
