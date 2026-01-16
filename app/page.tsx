import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import Extracurriculars from '@/components/Extracurriculars';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <main className="relative text-zinc-100 min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <Extracurriculars />
      <Contact />
      <footer className="py-12 px-6 text-center text-sm text-zinc-500 border-t border-zinc-800">
        <p>© {new Date().getFullYear()} Trisham Bepari. Built with intention.</p>
      </footer>
    </main>
  );
}
