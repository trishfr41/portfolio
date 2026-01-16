'use client';
import { LayoutTextFlip } from '@/components/ui/layout-text-flip';
import { useEffect, useRef, useState } from 'react';

export default function About() {
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
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20"
    >
      <div
        className={`max-w-3xl w-full space-y-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6 sm:mb-8">
          About
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
          
       
          <p>
            I'm driven by curiosity and a deep fascination with how systems work. 
            Whether it's code, architecture, or complex problems, I enjoy breaking 
            things down to their fundamentals and building them back up, better.
          </p>
          <p>
            My approach combines analytical thinking with creative problem-solving. 
            I believe the best solutions emerge when you understand not just what 
            you're building, but why—and how it fits into the larger picture.
          </p>
          <p>
            When I'm not building, I'm learning. The landscape of technology moves 
            fast, and that's exactly what keeps it interesting.
          </p>
        </div>
      </div>
    </section>
  );
}
