"use client";

import { useState, useEffect } from "react";

const S = "//";

interface SkillItem {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  items: SkillItem[];
}

export default function Skills() {
  // Configured default tracking values matching screen video
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [activeLevel, setActiveLevel] = useState<number>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Triggers the progressive fill animation on page load via animation frame
    const timer = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      items: [
        { name: "React", level: 80 },
        { name: "Figma", level: 70 },
        { name: "Tailwind CSS", level: 75 },
        { name: "Next.js", level: 65 },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 80 },
        { name: "Spring Boot", level: 85 },
        { name: "Java", level: 85 },
      ],
    },
    {
      title: "Systems",
      items: [
        { name: "C", level: 70 },
        { name: "Multi-Threading", level: 60 },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Git", level: 90 },
        { name: "IntelliJ IDEA", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Docker", level: 65 },
      ],
    },
  ];

  const handleHover = (name: string, level: number) => {
    setActiveSkill(name);
    setActiveLevel(level);
  };

  const handleLeave = () => {
    setActiveSkill(null);
  };

  return (
    <div className="w-full space-y-12">
      {/* Segment Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-borderDefault pb-4 gap-2">
        <div>
          <span className="text-xs font-mono text-neonPurple tracking-widest uppercase block mb-1">{S} CAPABILITIES</span>
          <h2 className="text-3xl font-bold tracking-tight text-textPrimary">Technical Arsenal</h2>
        </div>
        <span className="text-xs font-mono text-textMuted">Active Proficiency Radar</span>
      </div>

      {/* Main Grid Structure columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category) => (
          <div key={category.title} className="border border-borderDefault bg-spaceCard/20 rounded-xl p-5 space-y-4">
            <h3 className="text-xs font-mono tracking-widest text-textPrimary uppercase opacity-60">
              {category.title}
            </h3>
            <ul className="space-y-3">
              {category.items.map((skill) => (
                <li
                  key={skill.name}
                  onMouseEnter={() => handleHover(skill.name, skill.level)}
                  onMouseLeave={handleLeave}
                  className="flex flex-col gap-1.5 cursor-help py-1 group"
                >
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-textMuted group-hover:text-textPrimary transition-all duration-200">
                      {skill.name}
                    </span>
                    
                    {/* Level Badge shown inline */}
                    <span className="text-[10px] font-mono text-neonCyan opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Horizontal visual meter track */}
                  <div className="w-full h-1 bg-white/[0.04] rounded overflow-hidden">
                    <div 
                      style={{ 
                        width: mounted ? `${skill.level}%` : '0%' 
                      }} 
                      className={`h-full bg-gradient-to-r from-neonCyan to-neonPurple transition-all duration-1000 ease-out ${
                        activeSkill === skill.name ? "brightness-125 shadow-[0_0_8px_rgba(6,182,212,0.8)]" : ""
                      }`}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Floating HUD Proficiency display overlay bar */}
      <div className={`border border-borderDefault bg-spaceCard/80 backdrop-blur-md py-4 px-6 rounded-xl flex items-center justify-between transition-all duration-300 ${
        activeSkill ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
      }`}>
        <div className="flex items-center space-x-3">
          <span className="text-xs font-mono text-textMuted">{S} ACTIVE DIRECTIVE:</span>
          <span className="text-sm font-bold text-textPrimary">{activeSkill}</span>
        </div>
        <div className="flex items-center space-x-4 flex-grow max-w-md ml-6">
          <div className="flex-grow h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
            <div 
              style={{ width: `${activeLevel}%` }} 
              className="h-full bg-neonCyan shadow-[0_0_10px_#06B6D4] transition-all duration-300"
            />
          </div>
          <span className="text-xs font-mono text-neonCyan font-bold min-w-[35px] text-right">{activeLevel}%</span>
        </div>
      </div>
    </div>
  );
}