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
    description: 'Maintained and contributed to several open source projects, focusing on developer tooling and infrastructure improvements.',
    year: '2024',
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
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div
        className={`max-w-4xl w-full space-y-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12">
          Achievements
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-lg border border-zinc-800 bg-zinc-900/20 backdrop-blur-sm 
                         transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] 
                         hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {achievement.title}
                </h3>
                {achievement.year && (
                  <span className="text-sm text-cyan-400/70 font-medium">
                    {achievement.year}
                  </span>
                )}
              </div>
              <p className="text-zinc-400 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
