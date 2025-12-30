import type { Metadata } from "next"
import { Google_Sans_Code } from "next/font/google"
import "./globals.css"

const googleSansCode = Google_Sans_Code({
  variable: "--font-google-sans-code",
  subsets: ["latin"],
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: "JustMate - Desenvolvedor JavaScript",
  description:
    "Portfólio de Mateus Justino (JustMate), desenvolvedor especializado em JavaScript, React Native e ReactJS. Transformando ideias em experiências digitais.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${googleSansCode.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
