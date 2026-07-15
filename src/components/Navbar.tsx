"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

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

        {/* Hire Me CTA Button */}
        <div>
          <a 
            href="#contact" 
            className="px-5 py-2.5 text-xs font-mono tracking-widest text-textPrimary border border-neonPurple/40 bg-neonPurple/5 hover:bg-neonPurple/20 rounded-md transition-all duration-300 shadow-glowPurple hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}