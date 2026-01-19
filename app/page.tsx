'use client';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import CompetitiveProgramming from '@/components/CompetitiveProgramming';
import Extracurriculars from '@/components/Extracurriculars';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import { Vortex } from '@/components/ui/vortex';

export default function Home() {
  return (
    <main className="relative text-zinc-100 min-h-screen">
      {/* Fixed Vortex Background */}
      <div className="fixed inset-0 z-0">
        <Vortex
          backgroundColor="transparent"
          className="w-full h-full"
          containerClassName="w-full h-full"
          baseHue={220}
          particleCount={500}
          rangeY={100}
          baseSpeed={0.2}
          rangeSpeed={1.0}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <CompetitiveProgramming />
        <Extracurriculars />
        <Contact />
        <footer className="py-8 sm:py-12 px-4 sm:px-6 text-center text-xs sm:text-sm text-zinc-500 border-t border-zinc-800">
          <p>© {new Date().getFullYear()} Trisham Bepari. Built with intention.</p>
        </footer>
      </div>
    </main>
  );
}
