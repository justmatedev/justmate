import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProjectLinks from "@/components/ProjectLinks"
import content from "@/data/projects.json"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return content.projects.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = content.projects.find((project) => project.slug === slug)
  if (!project) return { title: "Projeto não encontrado" }
  const url = `/projetos/${project.slug}`
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} | JustMate`, description: project.description, url, type: "website",
      images: [{ url: project.images[0].src, width: project.images[0].width, height: project.images[0].height, alt: project.images[0].alt }],
    },
    twitter: { card: "summary_large_image", title: `${project.title} | JustMate`, description: project.description, images: [project.images[0].src] },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const index = content.projects.findIndex((project) => project.slug === slug)
  const project = content.projects[index]
  if (!project) notFound()
  const next = content.projects[(index + 1) % content.projects.length]
  const isMobile = project.slug === "thinkdo"
  const hasPairedImages = !isMobile && project.images.length === 2

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 md:pt-40 lg:px-8">
        <Link href="/#projects" className="inline-flex min-h-11 items-center gap-2 text-sm text-gray-400 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"><FiArrowLeft aria-hidden /> Todos os projetos</Link>
        <section aria-labelledby="project-title" className="mt-10 motion-safe:animate-fade-up">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
            <div>
              <p className="mb-4 text-sm text-primary">{project.type}</p>
              <div className="flex items-center gap-4">
                <Image src={project.logo} width={44} height={44} alt="" className="h-11 w-11 object-contain" />
                <h1 id="project-title" className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{project.title}</h1>
              </div>
              <p className="mt-5 text-sm text-gray-400">Projeto individual · Desenvolvido por Mateus Justino</p>
            </div>
            <div className="max-w-2xl space-y-5">
              <h2 className="text-2xl leading-snug font-medium tracking-tight md:text-3xl">{project.headline}</h2>
              <p className="text-base leading-relaxed text-gray-400 md:text-lg">{project.description}</p>
              <ProjectLinks links={project.links} />
            </div>
          </div>
          <div className="mt-10 max-w-2xl space-y-4 md:mt-12">
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">A ideia do {project.title}</h2>
            <p className="leading-relaxed text-gray-400">{project.problem}</p>
          </div>
        </section>
        <section aria-labelledby="workflow-heading" className="mt-12 border-t border-(--color-border) pt-10 md:mt-16 md:pt-12">
          <h2 id="workflow-heading" className="text-2xl font-semibold tracking-tight md:text-3xl">Como funciona</h2>
          <ol className="mt-8 grid gap-8 md:grid-cols-3 md:gap-12">
            {project.workflow.map((step, index) => (
              <li key={step.title}>
                <span className="font-mono text-sm text-primary" aria-hidden>{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-400">{step.description}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-sm text-gray-400 md:mt-12">Selecione uma imagem para abrir em tamanho original.</p>
          <div className={`mt-5 ${isMobile
            ? "mx-auto flex max-w-4xl items-start justify-center gap-3 sm:gap-6"
            : hasPairedImages
              ? "mx-auto grid max-w-5xl items-start gap-8 md:grid-cols-[minmax(0,1.47fr)_minmax(0,1fr)] md:gap-6"
              : "mx-auto w-fit max-w-[min(100%,56rem)]"}`}>
            {project.images.map((screenshot) => (
              <div key={screenshot.src} className={isMobile ? "w-1/3 min-w-0" : "min-w-0"}>
                {hasPairedImages && (
                  <h3 className="mb-3 text-sm font-medium text-gray-300">
                    {screenshot.kind === "illustration" ? "Registro pelo Telegram · ilustração" : "Painel web"}
                  </h3>
                )}
                <a href={screenshot.src} target="_blank" rel="noopener noreferrer"
                  aria-label={`${screenshot.alt} Abrir imagem em nova aba.`}
                  className={`group block cursor-zoom-in overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${isMobile ? "" : "border border-(--color-border)"}`}>
                  <Image src={screenshot.src} alt={screenshot.alt} width={screenshot.width} height={screenshot.height}
                    sizes={isMobile
                      ? "(max-width: 767px) 33vw, 280px"
                      : hasPairedImages
                        ? "(max-width: 767px) calc(100vw - 32px), (max-width: 1071px) 60vw, 600px"
                        : "(max-width: 927px) calc(100vw - 32px), 896px"}
                    preload className={isMobile || hasPairedImages
                      ? "h-auto w-full transition-transform duration-300 motion-safe:group-hover:scale-[1.02] motion-reduce:transition-none"
                      : "h-auto max-h-[70svh] w-auto max-w-full object-contain"} />
                </a>
              </div>
            ))}
          </div>
        </section>
        <div className="mt-16 grid gap-12 border-t border-(--color-border) pt-12 md:mt-24 md:grid-cols-[1fr_2fr] md:gap-16 md:pt-16">
          <aside aria-label="Minha contribuição e tecnologias">
            <h2 className="mb-5 text-sm font-medium text-gray-200">Minha contribuição</h2>
            <p className="mb-10 text-sm leading-relaxed text-gray-400">{project.development}</p>
            <h2 className="mb-5 text-sm font-medium text-gray-200">Tecnologias</h2>
            <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm leading-relaxed text-gray-400 md:flex-col">
              {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </aside>
          <div className="max-w-2xl space-y-12 md:space-y-16">
            {project.sections.map((section) => (
              <section key={section.title} aria-label={section.title}>
                <h2 className="mb-5 text-xl font-semibold tracking-tight md:text-2xl">{section.title}</h2>
                <div className="space-y-4 leading-relaxed text-gray-400">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              </section>
            ))}
          </div>
        </div>
        <nav aria-label="Navegação entre projetos" className="mt-20 flex flex-col gap-5 border-t border-(--color-border) pt-10 sm:flex-row sm:items-center sm:justify-between md:mt-28">
          <Link href="/#projects" className="btn-secondary gap-2"><FiArrowLeft aria-hidden /> Voltar aos projetos</Link>
          <Link href={`/projetos/${next.slug}`} className="group inline-flex min-h-11 items-center gap-3 text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Próximo: {next.title} <FiArrowRight aria-hidden className="transition-transform motion-safe:group-hover:translate-x-1 motion-reduce:transition-none" /></Link>
        </nav>
      </main>
      <Footer />
    </>
  )
}
