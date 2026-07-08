import Link from "next/link"

const Hero = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="section-glow relative flex min-h-[100svh] items-center justify-center px-4 pb-16 pt-28 sm:px-6 md:pb-24 md:pt-32 lg:px-8"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="mb-6 md:mb-8">
          <img
            src="/icon.svg"
            alt=""
            width={220}
            height={332}
            className="h-auto w-40 object-contain sm:w-48 md:w-56"
          />
        </div>

        <div className="animate-[fade-up_0.7s_ease-out_0.08s_both] space-y-4 md:space-y-5">
          <h1
            id="hero-heading"
            className="text-5xl font-bold tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            JustMate
          </h1>
          <p className="text-sm font-medium tracking-[0.18em] text-primary uppercase">
            Mateus Justino
          </p>
          <p className="mx-auto max-w-xl text-lg leading-snug text-gray-200 sm:text-xl md:text-2xl">
            Apps e interfaces que as pessoas usam de verdade
          </p>
          <p className="mx-auto max-w-lg text-base leading-relaxed text-gray-400">
            Desenvolvimento JavaScript com React Native e React — do app na Play
            Store ao site com identidade forte.
          </p>
        </div>

        <div className="mt-8 flex w-full max-w-md flex-col items-center gap-4 sm:max-w-none sm:flex-row sm:justify-center animate-[fade-up_0.7s_ease-out_0.2s_both]">
          <Link href="#projects" className="btn-primary w-full sm:w-auto">
            Ver projetos
          </Link>
          <Link href="#contact" className="btn-secondary w-full sm:w-auto">
            Falar comigo
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
