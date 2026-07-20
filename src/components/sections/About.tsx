"use client";

interface Milestone {
  date: string;
  title: string;
  institution: string;
  description: string;
}

export default function About() {
  const milestones: Milestone[] = [
    {
      date: "2024 - Present",
      title: "BSc (Hons) in Software Engineering",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      description: "Focusing heavily on data structures, computer networks, database systems, and object-oriented engineering. Maintaining strong performance across theoretical foundations and project implementations.",
    },
    {
      date: "Early 2025",
      title: "Core Projects Execution",
      institution: "Personal Engineering Portfolio",
      description: "Designed and implemented 'ScanMark' (dynamic time-secured QR attendance platform) and 'HireNear' (MERN stack job marketplace with a competitive bidding engine). Focused on data consistency, clean state machines, and API security.",
    },
    {
      date: "Present - Future",
      title: "Seeking Software Engineering Internship",
      institution: "Industry Placement",
      description: "Actively looking for a challenging internship role to contribute to production environments, build microservices, and collaborate with senior engineering teams.",
    },
  ];

  const profileInfo = [
    { label: "Major", value: "Software Engineering" },
    { label: "Institution", value: "SLIIT (Colombo, LK)" },
    { label: "Core Stack", value: "Java, Spring Boot, React, MongoDB" },
    { label: "Career Goal", value: "Software Engineering Intern" },
  ];

  return (
    <div className="w-full space-y-12">
      {/* Segment Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-borderDefault pb-4 gap-2">
        <div>
          <span className="text-xs font-mono text-neonCyan tracking-widest uppercase block mb-1">// IDENTITY</span>
          <h2 className="text-3xl font-bold tracking-tight text-textPrimary">Profile Summary</h2>
        </div>
        <span className="text-xs font-mono text-textMuted">Student Credentials & Timeline</span>
      </div>

      {/* 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Biography */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-textPrimary leading-snug">
              Bridging the gap between scalable backend systems and high-fidelity frontends.
            </h3>
            <p className="text-sm text-textMuted leading-relaxed">
              I am a Software Engineering Student at the Sri Lanka Institute of Information Technology (SLIIT). My interest lies in building robust backends, optimizing system performances, and designing interactive client interfaces. I enjoy writing clean, typed code and applying structure to complex systems.
            </p>
            <p className="text-sm text-textMuted leading-relaxed">
              Currently, I am looking to apply my training in Java/Spring Boot, React/Next.js, and database architectures (MongoDB, MySQL) within a professional engineering team through a software developer internship.
            </p>
          </div>

          {/* Quick Credentials Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profileInfo.map((info) => (
              <div 
                key={info.label} 
                className="border border-borderDefault bg-spaceCard/20 p-4 rounded-xl space-y-1 hover:border-neonCyan/30 transition-all duration-300"
              >
                <div className="text-[10px] font-mono text-textMuted tracking-wider uppercase">// {info.label}</div>
                <div className="text-sm font-semibold text-textPrimary">{info.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Milestones Timeline */}
        <div className="lg:col-span-6 pl-0 lg:pl-6 relative">
          <div className="space-y-8 relative">
            
            {/* The vertical timeline line structure */}
            <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-gradient-to-b from-neonCyan via-neonPurple to-borderDefault/30" />

            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative pl-8 group">
                
                {/* Node dot with hover transition glow */}
                <div className="absolute left-0 top-1.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 border-neonCyan bg-spaceDark group-hover:border-neonPurple shadow-[0_0_10px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all duration-300 z-10" />

                {/* Content */}
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-neonCyan group-hover:text-neonPurple transition-all duration-300 uppercase tracking-widest block">
                    // {milestone.date}
                  </span>
                  <h4 className="text-base font-bold text-textPrimary transition-colors duration-300 group-hover:text-textPrimary">
                    {milestone.title}
                  </h4>
                  <div className="text-xs text-textMuted font-mono tracking-wide">
                    {milestone.institution}
                  </div>
                  <p className="text-sm text-textMuted leading-relaxed pt-2">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}
