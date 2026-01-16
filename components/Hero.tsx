'use client';
import { LayoutTextFlip } from '@/components/ui/layout-text-flip';
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-4xl w-full space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
          Trisham Bepari
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 font-light max-w-2xl">
          {/* Builder · Engineer · Problem-solver */}
          <LayoutTextFlip
          text="I am a   "
          words={["Builder", "Problem-Solver", "Developer", "Thinker"]}
          duration={2500}
          />
        </p>
        
        <div className="pt-6 sm:pt-8">
          <div className="h-px w-20 sm:w-24 bg-gradient-to-r from-cyan-500 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
