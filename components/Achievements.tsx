'use client';

import { useEffect, useRef, useState } from 'react';

interface Achievement {
  title: string;
  description: string;
  year?: string;
}

const achievements: Achievement[] = [
  {
    title: 'Inter IIT Tech Meet 14.0 Gold Medalist ',
    description: 'Part of the team that developed a robust algorithmic trading strategy adapting to market microstructure using feature selection analysis. Designed and evaluated adaptive trading logic emphasizing robustness across market regimes rather than static backtest performance.',
    year: '2025',
  },
  {
    title: 'Technical Writing',
    description: 'Published articles and documentation on systems architecture, performance optimization, and best practices in software engineering.',
    year: '2023-2024',
  },
  {
    title: 'Community Speaker',
    description: 'Presented at tech meetups and conferences on topics including distributed systems, API design, and developer productivity.',
    year: '2023',
  },
  {
    title: 'Hackathon Winner',
    description: 'Led teams to victory in multiple hackathons, building innovative solutions under time constraints with focus on clean architecture.',
    year: '2022-2023',
  },
];

export default function Achievements() {
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
      id="achievements"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20"
    >
      <div
        className={`max-w-4xl w-full space-y-8 md:space-y-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-8 md:mb-12">
          Achievements
        </h2>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative p-4 sm:p-6 rounded-lg border border-zinc-800 bg-zinc-900/20 backdrop-blur-sm 
                         transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] 
                         hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors pr-2">
                  {achievement.title}
                </h3>
                {achievement.year && (
                  <span className="text-xs sm:text-sm text-cyan-400/70 font-medium whitespace-nowrap">
                    {achievement.year}
                  </span>
                )}
              </div>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
