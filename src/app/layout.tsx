import type { Metadata } from "next"
import { Google_Sans_Code } from "next/font/google"
import "./globals.css"

const googleSansCode = Google_Sans_Code({
  variable: "--font-google-sans-code",
  subsets: ["latin"],
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://justmate.vercel.app"),
  title: {
    default: "JustMate | Desenvolvedor JavaScript & React Native",
    template: "%s | JustMate",
  },
  description:
    "Portfólio oficial de Mateus Justino (JustMate), Engenheiro de Software especializado em JavaScript, ReactJS, Next.js e React Native. Criando interfaces premium e aplicativos de alta performance.",
  keywords: [
    "Mateus Justino",
    "JustMate",
    "Desenvolvedor Backend",
    "Freelancer",
    "Desenvolvedor Frontend",
    "React Native",
    "ReactJS",
    "JavaScript",
    "TypeScript",
    "Desenvolvedor Mobile",
    "Desenvolvedor Web",
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
    title: "JustMate | Desenvolvedor JavaScript & React Native",
    description:
      "Portfólio de Mateus Justino (JustMate). Especialista em soluções web e mobile modernas com ecossistema JavaScript.",
    siteName: "JustMate Portfolio",
    images: [
      {
        url: "/icon.svg", // Absoluto via metadataBase
        width: 800,
        height: 600,
        alt: "Logo JustMate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JustMate | Desenvolvedor Frontend e Mobile",
    description:
      "Portfólio oficial. Transformando ideias em apps e sites de alta performance.",
    creator: "@justmate",
    images: ["/icon.svg"], // Absoluto via metadataBase
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
    "React.js",
    "React Native",
    "Next.js",
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
