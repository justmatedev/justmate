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
        { name: "Cursor", src: "/tech/cursor.svg" },
        { name: "Gemini", src: "/tech/gemini.svg" },
        { name: "Antigravity", src: "/tech/antigravity.svg" },
      ],
    },
  ]

  return (
    <section
      id="tech"
      aria-labelledby="tech-heading"
      className="py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:mb-20 text-center md:text-left">
          <h2
            id="tech-heading"
            className="mb-3 text-3xl font-bold tracking-tight md:text-4xl"
          >
            Tecnologias
          </h2>
          <p className="text-gray-400">
            Ferramentas e tecnologias que utilizo para dar vida aos projetos.
          </p>
        </div>

        <div className="divide-y divide-(--color-border)/60">
          {categories.map((category) => (
            <div key={category.title} className="py-8 first:pt-0 last:pb-0 md:py-10">
              <h3 className="mb-5 text-xs font-medium tracking-[0.2em] text-gray-500 uppercase">
                {category.title}
              </h3>
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-4 md:gap-x-8 md:gap-y-5">
                {category.items.map((item) => (
                  <li key={item.name}>
                    <div className="group inline-flex items-center gap-2.5">
                      <span className="relative h-5 w-5 shrink-0 opacity-80 transition-opacity group-hover:opacity-100 md:h-6 md:w-6">
                        <Image
                          src={item.src}
                          alt=""
                          fill
                          className="object-contain"
                        />
                      </span>
                      <span className="text-base font-medium text-gray-300 transition-colors group-hover:text-primary md:text-lg">
                        {item.name}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
