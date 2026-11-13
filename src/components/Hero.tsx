import Link from "next/link"
import Image from "next/image"

const Hero = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="section-glow relative flex min-h-[100svh] items-center justify-center px-4 pb-16 pt-28 sm:px-6 md:pb-24 md:pt-32 lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <div className="mb-8 flex items-center gap-3 md:mb-10">
          <Image
            src="/icon.svg"
            alt=""
            width={36}
            height={54}
            priority
            className="h-12 w-auto object-contain"
          />
          <span className="font-mono text-lg font-semibold tracking-tight text-primary">JustMate</span>
        </div>

        <div className="space-y-5 motion-safe:animate-[fade-up_0.7s_ease-out_0.08s_both] md:space-y-6">
          <h1
            id="hero-heading"
            className="text-4xl font-bold tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Mateus Justino
          </h1>
          <p className="mx-auto max-w-2xl text-2xl font-medium leading-snug text-gray-200 sm:text-3xl md:text-4xl">
            Desenvolvedor web e mobile.
          </p>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-gray-400 sm:text-xl">
            Crio aplicações com Next.js, React e React Native — da interface
            às integrações que fazem o produto funcionar.
          </p>
        </div>

        <div className="mt-8 flex w-full max-w-md flex-col items-center gap-4 motion-safe:animate-[fade-up_0.7s_ease-out_0.2s_both] sm:max-w-none sm:flex-row sm:justify-center">
          <Link href="#projects" className="btn-primary w-full sm:w-auto">
            Ver projetos
          </Link>
          <Link href="#contact" className="btn-secondary w-full sm:w-auto">
            Falar comigo
          </Link>
        </div>
        <p className="mt-8 text-sm text-gray-400">
          Conheça o bot financeiro, o app Android e o comparador de preços abaixo.
        </p>
      </div>
    </section>
  )
}

export default Hero
