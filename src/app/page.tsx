import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import About from "@/components/About"
import TechStack from "@/components/TechStack"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
