"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null, // uses the viewport
      rootMargin: "-20% 0px -60% 0px", // triggers active state when element covers central screen area
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-borderDefault bg-spaceDark/60 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 h-20 flex items-center justify-between">
        
        {/* Code-style Logo Moniker */}
        <a href="#home" className="text-xl font-bold tracking-wider text-textPrimary hover:text-neonCyan transition-all duration-300 font-mono">
          &lt;SD <span className="text-neonCyan">/</span>&gt;
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium tracking-wide font-mono transition-all duration-300 relative py-1 ${
                activeSection === item.id 
                  ? "text-neonCyan drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" 
                  : "text-textMuted hover:text-textPrimary"
              }`}
            >
              <span className="opacity-40 mr-1">//</span>
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-neonCyan shadow-[0_0_8px_#06B6D4]" />
              )}
            </a>
          ))}
        </nav>

        {/* Hire Me CTA Button - Desktop only */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="px-5 py-2.5 text-xs font-mono tracking-widest text-textPrimary border border-neonPurple/40 bg-neonPurple/5 hover:bg-neonPurple/20 rounded-md transition-all duration-300 shadow-glowPurple hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
          >
            Hire Me
          </a>
        </div>

        {/* Hamburger Menu Toggle - Mobile only */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-textMuted hover:text-textPrimary focus:outline-none transition-all duration-300 cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // Close (X) Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Menu Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu container sliding drawer */}
      <div className={`md:hidden fixed top-20 left-0 w-full border-b border-borderDefault bg-spaceDark/95 backdrop-blur-lg transition-all duration-300 ease-in-out ${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
      }`}>
        <nav className="flex flex-col p-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium tracking-wide font-mono transition-all duration-300 py-2 border-b border-white/[0.02] ${
                activeSection === item.id 
                  ? "text-neonCyan drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" 
                  : "text-textMuted"
              }`}
            >
              <span className="opacity-40 mr-2">//</span>
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="mt-4 w-full text-center py-3 text-xs font-mono tracking-widest text-textPrimary border border-neonPurple/40 bg-neonPurple/5 hover:bg-neonPurple/20 rounded-md transition-all duration-300 shadow-glowPurple"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}