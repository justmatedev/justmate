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
  const heroImages = isMobile ? project.images : project.images.slice(0, 1)
  const additionalImages = isMobile ? [] : project.images.slice(1)

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
          <p className="mt-10 text-sm text-gray-400 md:mt-12">Selecione uma imagem para abrir em tamanho original.</p>
          <div className={`mt-4 ${isMobile ? "mx-auto flex max-w-4xl items-start justify-center gap-3 sm:gap-6" : "overflow-hidden rounded-xl border border-(--color-border)"}`}>
            {heroImages.map((screenshot) => (
              <a key={screenshot.src} href={screenshot.src} target="_blank" rel="noopener noreferrer"
                aria-label={`${screenshot.alt} Abrir imagem em nova aba.`}
                className={`block cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${isMobile ? "w-1/3 min-w-0 overflow-hidden rounded-xl" : "w-full"}`}>
                <Image src={screenshot.src} alt={screenshot.alt} width={screenshot.width} height={screenshot.height}
                  sizes={isMobile ? "(max-width: 767px) 33vw, 280px" : "(max-width: 1279px) 100vw, 1216px"}
                  preload className="h-auto w-full" />
              </a>
            ))}
          </div>
        </section>
        <section aria-label="Resumo do projeto" className="mt-12 border-t border-(--color-border) pt-8 md:mt-16">
          <dl className="grid gap-8 md:grid-cols-3 md:gap-12">
            <div><dt className="mb-3 font-mono text-sm font-medium text-primary">Problema</dt><dd className="leading-relaxed text-gray-300">{project.problem}</dd></div>
            <div><dt className="mb-3 font-mono text-sm font-medium text-primary">Minha contribuição</dt><dd className="leading-relaxed text-gray-300">{project.development}</dd></div>
            <div><dt className="mb-3 font-mono text-sm font-medium text-primary">Entrega</dt><dd className="leading-relaxed text-gray-300">{project.result}</dd></div>
          </dl>
        </section>
        <div className="mt-16 grid gap-12 border-t border-(--color-border) pt-12 md:mt-24 md:grid-cols-[1fr_2fr] md:gap-16 md:pt-16">
          <aside aria-label="Tecnologias do projeto">
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
            {additionalImages.map((screenshot) => (
              <section key={screenshot.src} aria-label="Imagem complementar">
                {screenshot.kind === "illustration" && <h2 className="mb-5 text-xl font-semibold tracking-tight md:text-2xl">Exemplo ilustrativo de registro</h2>}
                <a href={screenshot.src} target="_blank" rel="noopener noreferrer" aria-label={`${screenshot.alt} Abrir imagem em nova aba.`} className="block cursor-zoom-in rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                  <Image src={screenshot.src} alt={screenshot.alt} width={screenshot.width} height={screenshot.height} sizes="(max-width: 767px) 100vw, 640px" className="h-auto w-full rounded-xl" />
                </a>
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
