'use client';

import { useEffect, useRef, useState } from 'react';

interface Project {
  title: string;
  description: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: 'Real-time Analytics Platform',
    description: 'Built a high-performance analytics system processing millions of events with sub-second query response times. Designed with scalability and real-time insights in mind.',
    tech: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    title: 'Design System & Component Library',
    description: 'Created a comprehensive design system from scratch, enabling consistent UI development across teams. Includes reusable components, documentation, and design tokens.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook'],
  },
  {
    title: 'API Gateway & Microservices Architecture',
    description: 'Architected and implemented a distributed system with service mesh capabilities, authentication, and rate limiting. Reduced latency by 40% and improved system reliability.',
    tech: ['Go', 'Kubernetes', 'gRPC', 'Istio', 'Prometheus'],
  },
  {
    title: 'Developer Tools & CLI',
    description: 'Built developer productivity tools that automate common workflows and improve DX. Adopted by multiple teams and significantly reduced onboarding time.',
    tech: ['Python', 'Rust', 'CLI', 'Git', 'CI/CD'],
  },
  {
    title: 'Experimental Web Project',
    description: 'A playground for exploring new web technologies, performance optimization techniques, and creative coding. Where ideas become experiments.',
    tech: ['Next.js', 'WebGL', 'React', 'TypeScript'],
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
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div
        className={`max-w-5xl w-full space-y-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-lg border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm 
                         transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] 
                         hover:-translate-y-1 cursor-pointer"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-3 py-1 rounded-full bg-zinc-800/50 text-zinc-300 
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
