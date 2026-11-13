import { FiArrowUpRight } from "react-icons/fi"
import { SiGithub, SiGoogleplay } from "react-icons/si"
import type { ReactNode } from "react"

type ProjectLinksProps = {
  links: { label: string; url: string }[]
  children?: ReactNode
}

export default function ProjectLinks({ links, children }: ProjectLinksProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {children}
      {links.map((link) => (
        <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
          className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-(--color-border) px-3 py-2.5 text-sm font-semibold text-gray-200 transition-all duration-300 motion-safe:hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-4 lg:flex-none motion-reduce:transition-none">
          {link.label === "GitHub" ? <SiGithub aria-hidden /> : link.label === "Google Play" ? <SiGoogleplay aria-hidden /> : <FiArrowUpRight aria-hidden />}
          {link.label.startsWith("Acessar ") ? "Acessar app" : link.label}<span className="sr-only"> (abre em nova aba)</span>
        </a>
      ))}
    </div>
  )
}
