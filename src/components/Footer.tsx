const Footer = () => {
  return (
    <footer className="border-t border-(--color-border) py-10 md:py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 sm:flex-row sm:px-6 lg:px-8">
        <a
          href="#home"
          className="text-lg font-bold tracking-tighter text-white transition-colors hover:text-primary"
        >
          JustMate
        </a>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} · Feito por Mateus Justino
        </p>
      </div>
    </footer>
  )
}

export default Footer
