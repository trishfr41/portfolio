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
    title: 'Mentorship Program',
    role: 'Technical Mentor',
    description: 'Mentoring junior developers and engineering students, focusing on practical problem-solving, code quality, and career growth. Helping others navigate the early stages of their technical journey.',
    period: '2023-Present',
  },
  {
    title: 'Tech Community Organizer',
    role: 'Event Coordinator',
    description: 'Organizing local tech meetups and study groups, bringing together developers to share knowledge, discuss emerging technologies, and build a stronger community.',
    period: '2022-Present',
  },
  {
    title: 'Volunteer Coding Instructor',
    description: 'Teaching programming fundamentals to underrepresented groups, making technology education more accessible and inclusive. Creating curriculum and hands-on workshops.',
    period: '2023',
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
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div
        className={`max-w-4xl w-full space-y-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12">
          Extracurriculars
        </h2>
        <div className="space-y-8">
          {extracurriculars.map((activity, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-lg border border-zinc-800 bg-zinc-900/20 backdrop-blur-sm 
                         transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] 
                         hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {activity.title}
                  </h3>
                  {activity.role && (
                    <p className="text-sm text-cyan-400/80 mt-1">{activity.role}</p>
                  )}
                </div>
                {activity.period && (
                  <span className="text-sm text-cyan-400/70 font-medium">
                    {activity.period}
                  </span>
                )}
              </div>
              <p className="text-zinc-400 leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
