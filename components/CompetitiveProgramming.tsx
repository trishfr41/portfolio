'use client';

import { useEffect, useRef, useState } from 'react';

interface Platform {
  name: string;
  href: string;
  username: string;
  badge?: string;
}

const platforms: Platform[] = [
  {
    name: 'Codeforces',
    href: 'https://codeforces.com/profile/trishfr',
    username: 'trishfr',
    badge: 'Specialist',
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/u/trishfr/',
    username: 'trishfr',
  },
];

export default function CompetitiveProgramming() {
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
      id="competitive-programming"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20"
    >
      <div
        className={`max-w-4xl w-full space-y-8 md:space-y-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-8 md:mb-12">
          Competitive Programming
        </h2>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 sm:p-6 rounded-lg border border-zinc-800 bg-zinc-900/20 backdrop-blur-sm 
                         transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] 
                         hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                  {platform.name}
                  <svg
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </h3>
                {platform.badge && (
                  <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-medium">
                    {platform.badge}
                  </span>
                )}
              </div>
              <p className="text-sm sm:text-base text-zinc-400">
                @{platform.username}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
