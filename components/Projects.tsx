'use client';

import { useEffect, useRef, useState } from 'react';

interface Project {
  title: string;
  description: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: 'Adaptive Intraday Quantitative Trading Strategy (Hidden-Type Market)',
    description: 'Designed a profitable intraday trading strategy for a hidden-type market, where the underlying market regime was not directly observable. Used momentum oscillators and mean-reversion signals, combined with regime indicators such as the Hurst Exponent, to infer market behaviour from price action. Applied feature selection using Mutual Information to identify informative, non-linear predictors while avoiding redundant signals. Incorporated adaptive risk controls and drawdown-based exits to maintain stability across changing market conditions. Achieved Sharpe 2.6, Calmar 10, and 3% max drawdown, securing Gold at Inter IIT Tech Meet 14.0 (Quant PS – High Prep).',
    tech: ['Python', 'Quantitative Finance'],
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20"
    >
      <div
        className={`max-w-5xl w-full space-y-8 md:space-y-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-8 md:mb-12">
          Projects
        </h2>
        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-4 sm:p-6 rounded-lg border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm 
                         transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] 
                         hover:-translate-y-1 cursor-pointer"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 mb-3 sm:mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-zinc-800/50 text-zinc-300 
                             border border-zinc-700 group-hover:border-cyan-500/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
