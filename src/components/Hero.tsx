import Image from "next/image"

const Hero = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1
            id="hero-heading"
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-2"
          >
            JustMate
          </h1>
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-gray-200 via-gray-400 to-gray-600 mb-4 pb-2">
            Desenvolvedor JavaScript
          </h2>
          <h3 className="text-xl md:text-2xl text-primary/90 font-semibold tracking-wide">
            React Native & React
          </h3>

          <p className="text-lg text-gray-400/90 max-w-2xl leading-relaxed mt-6">
            Olá! Sou Mateus Justino, o desenvolvedor por trás do JustMate. Minha
            paixão é transformar ideias em experiências digitais limpas e
            funcionais. Minha expertise é focada no ecossistema JavaScript,
            utilizando ReactJS para construir interfaces web ricas e React
            Native para criar aplicativos multiplataforma.
          </p>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-(--color-surface-1) border border-(--color-border) shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] hover:-translate-y-2 hover:border-primary/50 transition-all duration-500 overflow-hidden flex items-center justify-center group p-8">
            <Image
              src="/icon.svg"
              alt="Logotipo em formato de rosto minimalista do JustMate - Mateus Justino, Desenvolvedor JavaScript"
              width={150}
              height={150}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
