import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <TechStack />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
