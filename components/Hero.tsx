'use client';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
          Trisham Bepari
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl">
          Builder · Engineer · Problem-solver
        </p>
        <div className="pt-8">
          <div className="h-px w-24 bg-gradient-to-r from-cyan-500 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
