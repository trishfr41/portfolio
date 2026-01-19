'use client';

import { useEffect, useRef, useState } from 'react';

interface SkillGroup {
  category: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Go', 'Rust', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Next.js', 'Node.js', 'Express', 'FastAPI', 'gRPC'],
  },
  {
    category: 'Tools & Infrastructure',
    items: ['Docker', 'Kubernetes', 'AWS', 'PostgreSQL', 'Redis', 'Git', 'CI/CD'],
  },
  {
    category: 'Areas of Interest',
    items: ['Machine Learning', 'Deep Learning', 'Artificial Intelligence', 'Neural Networks'],
  },
];

export default function Skills() {
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
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20"
    >
      <div
        className={`max-w-4xl w-full space-y-8 md:space-y-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-8 md:mb-12">
          Skills
        </h2>
        <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="space-y-3 sm:space-y-4"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <h3 className="text-base sm:text-lg font-medium text-cyan-400 mb-2 sm:mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {group.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-md bg-zinc-800/50 text-zinc-300 
                             border border-zinc-700 hover:border-cyan-500/50 hover:text-cyan-400 
                             transition-all duration-200 cursor-default"
                  >
                    {item}
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
