import { SiGithub } from "react-icons/si"

const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-glow py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-5 text-sm font-medium tracking-[0.18em] text-primary uppercase">
            Contato
          </p>
          <h2
            id="contact-heading"
            className="mb-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl leading-[1.15]"
          >
            Vamos conversar sobre uma vaga.
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-lg leading-relaxed text-gray-400">
            Busco oportunidades em desenvolvimento web e mobile. Se meu
            trabalho fizer sentido para sua equipe, entre em contato.
          </p>
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
            <a
              href="mailto:justmatedev@gmail.com"
              className="text-lg font-medium text-white transition-colors hover:text-primary sm:text-xl"
            >
              justmatedev@gmail.com
            </a>
            <span
              className="hidden text-gray-600 sm:inline"
              aria-hidden
            >
              ·
            </span>
            <a
              href="https://github.com/justmatedev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base font-medium text-gray-400 transition-colors hover:text-primary"
            >
              <SiGithub aria-hidden className="text-lg" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
