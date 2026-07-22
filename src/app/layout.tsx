import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const googleSansCode = localFont({
  src: "../fonts/GoogleSansCode-Variable.ttf",
  variable: "--font-google-sans-code",
  display: "swap",
  weight: "300 800",
  preload: true,
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
  adjustFontFallback: "Arial",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://justmate.vercel.app"),
  title: {
    default: "JustMate | Desenvolvedor Next.js & React",
    template: "%s | JustMate",
  },
  description:
    "Portfólio oficial de Mateus Justino (JustMate), Engenheiro de Software especializado em JavaScript, Next.js, React e React Native. Criando interfaces web premium e aplicativos de alta performance.",
  keywords: [
    "Mateus Justino",
    "JustMate",
    "Desenvolvedor Frontend",
    "Desenvolvedor Web",
    "Next.js",
    "ReactJS",
    "JavaScript",
    "TypeScript",
    "React Native",
    "Desenvolvedor Mobile",
    "Freelancer",
    "Portfólio",
  ],
  authors: [{ name: "Mateus Justino", url: "https://github.com/justmatedev" }],
  creator: "Mateus Justino",
  publisher: "Mateus Justino",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://justmate.vercel.app/",
    title: "JustMate | Desenvolvedor Next.js & React",
    description:
      "Portfólio de Mateus Justino (JustMate). Especialista em soluções web modernas com Next.js — e também mobile com React Native.",
    siteName: "JustMate Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "JustMate | Desenvolvedor Web e Frontend",
    description:
      "Portfólio oficial. Transformando ideias em sites e apps de alta performance.",
    creator: "@justmate",
  },
  alternates: {
    canonical: "https://justmate.vercel.app/",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mateus Justino",
  alternateName: "JustMate",
  url: "https://justmate.vercel.app/",
  image: "https://justmate.vercel.app/icon.svg",
  jobTitle: "Software Engineer",
  sameAs: ["https://github.com/justmatedev", "mailto:justmatedev@gmail.com"],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React.js",
    "React Native",
    "Node.js",
    "Tailwind CSS",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${googleSansCode.variable} antialiased selection:bg-primary/30 selection:text-primary`}
      >
        <div className="fixed inset-0 min-h-screen bg-(image:--background-image-glow) -z-50 pointer-events-none" />
        {children}
      </body>
    </html>
  )
}
