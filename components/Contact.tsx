'use client';

import { useEffect, useRef, useState } from 'react';

interface Link {
  label: string;
  href: string;
  external?: boolean;
}

const links: Link[] = [
  { label: 'Email', href: 'mailto:trisham.bepari@outlook.com' },
  { label: 'GitHub', href: 'https://github.com/trishfr41', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/trisham-bepari-7218b02b2/', external: true },
];

export default function Contact() {
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
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20"
    >
      <div
        className={`max-w-3xl w-full space-y-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-8 md:mb-12">
          Contact
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-6 sm:mb-8">
          Always open to interesting conversations, collaborations, or just saying hello.
        </p>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="group relative text-base sm:text-lg text-zinc-300 hover:text-cyan-400 
                       transition-colors duration-200 inline-flex items-center gap-2"
            >
              <span>{link.label}</span>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-cyan-400 
                            group-hover:w-full transition-all duration-300"></div>
              {link.external && (
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
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
