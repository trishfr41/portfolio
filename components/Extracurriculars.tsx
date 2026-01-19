'use client';

import { useEffect, useRef, useState } from 'react';

interface Activity {
  title: string;
  role?: string;
  description: string;
  period?: string;
}

const extracurriculars: Activity[] = [
  {
    title: 'Coding Club, IIT Dharwad',
    role: 'Junior Secretary',
    description: 'Served as Secretary of the Junior Coding Club, coordinating coding sessions, workshops, and peer-learning initiatives. Facilitated student engagement in competitive programming and problem-solving through structured activities and collaboration..',
    period: '2025-Present',
  },
  {
    title: 'Summer School at IIYM Kansas',
    description: 'Attended a 2-week intensive summer school program at the International Institute of Young Musicians, Kansas, exploring advanced musical concepts and collaborative performance.',
    period: '2018',
  },
  {
    title: 'Personal Projects & Experiments',
    description: 'Constantly tinkering with new technologies, building side projects that explore creative applications of code. These experiments often become learning opportunities and sometimes evolve into full projects.',
    period: 'Ongoing',
  },
];

export default function Extracurriculars() {
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
      id="extracurriculars"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20"
    >
      <div
        className={`max-w-4xl w-full space-y-8 md:space-y-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-8 md:mb-12">
          Extracurriculars
        </h2>
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {extracurriculars.map((activity, index) => (
            <div
              key={index}
              className="group relative p-4 sm:p-6 rounded-lg border border-zinc-800 bg-zinc-900/20 backdrop-blur-sm 
                         transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] 
                         hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors pr-2">
                    {activity.title}
                  </h3>
                  {activity.role && (
                    <p className="text-xs sm:text-sm text-cyan-400/80 mt-1">{activity.role}</p>
                  )}
                </div>
                {activity.period && (
                  <span className="text-xs sm:text-sm text-cyan-400/70 font-medium whitespace-nowrap">
                    {activity.period}
                  </span>
                )}
              </div>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
