import { SiGithub } from "react-icons/si"
import { HiMail } from "react-icons/hi"

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-background border-t border-(--color-border) py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-black mb-2 text-gradient from-gray-200 via-gray-400 to-gray-600 bg-clip-text">
              JustMate
            </h3>
            <p className="text-gray-500 text-sm">
              Construindo o futuro, uma linha de código por vez.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <a
              href="mailto:justmatedev@gmail.com"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-all bg-(--color-surface-1) border border-(--color-border) px-4 py-2 rounded-full hover:bg-(--color-surface-2) hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg shadow-black group"
            >
              <HiMail className="text-lg group-hover:scale-110 transition-transform" />
              justmatedev@gmail.com
            </a>

            <div className="flex items-center gap-6">
              <a
                href="https://github.com/justmatedev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-all bg-(--color-surface-1) border border-(--color-border) px-4 py-2 rounded-full hover:bg-(--color-surface-2) hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg shadow-black group"
              >
                <SiGithub className="text-lg group-hover:scale-110 transition-transform" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-(--color-border) text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} JustMate. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
