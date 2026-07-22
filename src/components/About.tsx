import Link from "next/link"

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-glow py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-medium tracking-[0.18em] text-primary uppercase">
            Sobre
          </p>
          <h2
            id="about-heading"
            className="mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl leading-[1.15]"
          >
            Construo produtos no ecossistema JavaScript.
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-gray-400 sm:text-lg">
            <p>
              Sou Mateus Justino — com foco em React/Next.js para web e React
              Native para mobile.
            </p>
            <p className="border-l-2 border-primary/40 pl-5 text-gray-300">
              Gosto de transformar ideias em experiências limpas e utilizáveis:
              interfaces com identidade, apps que abrem rápido e código que dá
              para evoluir.
            </p>
            <p>
              Entre os trabalhos recentes estão projetos web como Bonsare e
              Sinalverde, e o Thinkdo na Play Store.
            </p>
          </div>
          <div className="mt-10">
            <Link href="#contact" className="btn-secondary">
              Vamos conversar
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
