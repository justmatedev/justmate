import Link from "next/link"

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-glow py-20 md:py-24"
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
            O trabalho além da interface.
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-gray-400 sm:text-lg">
            <p>
              Sou Mateus Justino, desenvolvedor web e mobile. Desenvolvi
              sozinho os três produtos deste portfólio, da interface às
              integrações: um bot financeiro, um app de notas e tarefas e um
              comparador de preços de jogos.
            </p>
            <p className="border-l-2 border-primary/40 pl-5 text-gray-300">
              As decisões que mais me interessam aparecem no uso: como
              preservar um rascunho quando o envio falha, evitar um gasto
              duplicado ou avisar sobre uma nova oferta sem repetir alertas.
            </p>
            <p>
              Busco uma oportunidade em desenvolvimento web e mobile para
              levar essa experiência a uma equipe. Nos cases, compartilho
              minhas decisões, a implementação e os limites de cada produto.
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
