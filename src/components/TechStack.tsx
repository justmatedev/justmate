import Image from "next/image"

const TechStack = () => {
  const categories = [
    {
      title: "Fundamentos",
      items: [
        { name: "JavaScript", src: "/tech/javascript.svg" },
        { name: "TypeScript", src: "/tech/typescript.svg" },
        { name: "HTML", src: "/tech/HTML5.svg" },
        { name: "CSS", src: "/tech/CSS3.svg" },
      ],
    },
    {
      title: "Desenvolvimento Mobile",
      items: [
        { name: "React Native", src: "/tech/reactnative.svg" },
        { name: "Expo", src: "/tech/expo.svg" },
        { name: "React Navigation", src: "/tech/reactnavigation.svg" },
        { name: "Firebase", src: "/tech/firebase.svg" },
        { name: "AsyncStorage", src: "/tech/asyncstorage.svg" },
      ],
    },
    {
      title: "Desenvolvimento Web",
      items: [
        { name: "React", src: "/tech/react.svg" },
        { name: "Next.js", src: "/tech/nextjs.svg" },
        { name: "Tailwind CSS", src: "/tech/tailwindcss.svg" },
        { name: "Zustand", src: "/tech/zustand.svg" },
      ],
    },
    {
      title: "Ferramentas",
      items: [
        { name: "GitHub", src: "/tech/github.svg" },
        { name: "npm", src: "/tech/npm.svg" },
        { name: "Gemini", src: "/tech/gemini.svg" },
        { name: "Antigravity", src: "/tech/antigravity.svg" },
      ],
    },
  ]

  return (
    <section
      id="tech"
      aria-labelledby="tech-heading"
      className="py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="tech-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Tecnologias
          </h2>
          <p className="text-gray-400">
            Ferramentas e tecnologias que utilizo para dar vida aos projetos.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center md:text-left border-l-4 border-primary pl-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center justify-center p-6 bg-(--color-surface-1) border border-(--color-border) rounded-xl transition-all duration-300 hover:bg-(--color-surface-2) hover:border-primary/30 hover:-translate-y-2 hover:shadow-lg group cursor-pointer"
                  >
                    <div className="relative w-12 h-12 mb-4 transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,225,90,0)] group-hover:drop-shadow-[0_0_20px_rgba(255,225,90,0.3)]">
                      <Image
                        src={item.src}
                        alt={`Ícone da linguagem de programação ou ferramenta ${item.name}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="font-medium text-gray-500 group-hover:text-primary transition-colors text-center duration-300">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
