"use client";

export default function Projects() {
  const getLinkProps = (url: string) => {
    return url.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
  };

  const scanmarkRepo = process.env.NEXT_PUBLIC_SCANMARK_REPO || "#";
  const hirenearRepo = process.env.NEXT_PUBLIC_HIRENEAR_REPO || "#";
  const hireneardesktopDemo = process.env.NEXT_PUBLIC_HIRENEAR_DESKTOP_DEMO || "#";
  const hirenearmobileDemo = process.env.NEXT_PUBLIC_HIRENEAR_MOBILE_DEMO || "#";
  const qrGateCase = process.env.NEXT_PUBLIC_QRGATE_CASE || "#";


  return (
    <div className="w-full space-y-12">
      {/* Segment Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-borderDefault pb-4 gap-2">
        <div>
          <span className="text-xs font-mono text-neonCyan tracking-widest uppercase block mb-1">// SELECTED WORK</span>
          <h2 className="text-3xl font-bold tracking-tight text-textPrimary">Project Showcase</h2>
        </div>
        <span className="text-xs font-mono text-textMuted">3 case studies</span>
      </div>

      {/* Asymmetric CSS Project Grid matching Figma design */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* NovaMart E-Commerce (2/3 width) */}
        <div className="lg:col-span-2 flex flex-col justify-between border border-borderDefault bg-spaceCard/40 rounded-2xl p-6 hover:border-neonCyan/40 hover:shadow-glowCyan transition-all duration-300 group">
          <div className="space-y-6">
            
            {/* Visual Block Representation Mockup */}
            <div className="w-full h-48 rounded-xl bg-[#1b1c26] border border-white/5 flex items-center justify-center p-6 gap-3 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-neonPurple/5 to-transparent opacity-50" />
              <div className="w-1/3 h-28 bg-[#25273c] rounded-lg border border-white/5 flex flex-col justify-between p-3">
                <div className="w-8 h-2 bg-neonCyan/40 rounded" />
                <div className="space-y-1">
                  <div className="w-full h-1.5 bg-white/10 rounded" />
                  <div className="w-3/4 h-1.5 bg-white/10 rounded" />
                </div>
              </div>
              <div className="w-1/3 h-32 bg-neonPurple/10 border border-neonPurple/20 rounded-lg flex flex-col justify-between p-3 shadow-glowPurple animate-pulse">
                <div className="w-8 h-2 bg-neonPurple/40 rounded" />
                <div className="space-y-1">
                  <div className="w-full h-1.5 bg-neonPurple/20 rounded" />
                  <div className="w-3/4 h-1.5 bg-neonPurple/20 rounded" />
                </div>
              </div>
              <div className="w-1/3 h-28 bg-[#25273c] rounded-lg border border-white/5 flex flex-col justify-between p-3">
                <div className="w-8 h-2 bg-neonCyan/40 rounded" />
                <div className="space-y-1">
                  <div className="w-full h-1.5 bg-white/10 rounded" />
                  <div className="w-3/4 h-1.5 bg-white/10 rounded" />
                </div>
              </div>
            </div>

            {/* Info Layout */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-textPrimary group-hover:text-neonCyan transition-all duration-200">ScanMark</h3>
                <span className="text-[10px] font-mono border border-neonCyan/30 text-neonCyan bg-neonCyan/5 px-2 py-0.5 rounded">QR Based Attendance Management System</span>
              </div>
              <p className="text-sm text-textMuted leading-relaxed">
                A secure academic tracking platform engineered to eliminate proxy attendance through time-sensitive dynamic QR scanning. 
                It features robust user authentication, automated session tracking, and an integrated real-time notification engine. Personally 
                designed and implemented the central Module Management subsystem to cleanly coordinate complex course schedules and prevent 
                timetable collisions.
              </p>
            </div>
          </div>

          {/* Badges and action links */}
          <div className="mt-6 space-y-4">
            <div className="flex flex-wrap gap-2">
              {["Java", "Spring Boot", "React.js", "MongoDB", "Expo"].map((tech) => (
                <span key={tech} className="text-[10px] font-mono bg-white/[0.02] border border-white/10 text-textMuted px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 border-t border-borderDefault/50">
              <a href={scanmarkRepo} {...getLinkProps(scanmarkRepo)} className="text-xs font-mono text-neonCyan hover:underline">// GitHub Repository</a>
            </div>
          </div>
        </div>

        {/* SoundFlow Music App (1/3 width) */}
        <div className="flex flex-col justify-between border border-borderDefault bg-spaceCard/40 rounded-2xl p-6 hover:border-neonPurple/40 hover:shadow-glowPurple transition-all duration-300 group">
          <div className="space-y-6">
            
            {/* Visual Waveform/Audio Visualizer Mockup */}
            <div className="w-full h-48 rounded-xl bg-[#1b1c26] border border-white/5 flex flex-col justify-between p-4 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-neonPurple">TRACK_03.MP3</span>
                <span className="text-[10px] font-mono text-textMuted">3:42</span>
              </div>
              
              {/* Animated/Static custom waveform visual */}
              <div className="flex justify-between items-end h-20 px-2 gap-0.5">
                {[30, 50, 40, 80, 60, 90, 75, 45, 35, 60, 80, 50, 40, 70, 95, 65, 40, 30, 55, 75, 45].map((h, i) => (
                  <div 
                    key={i} 
                    style={{ height: `${h}%` }} 
                    className={`w-1 rounded-t ${i > 5 && i < 15 ? 'bg-neonPurple' : 'bg-white/10'}`} 
                  />
                ))}
              </div>

              {/* Progress Slider bar visual */}
              <div className="w-full h-1 bg-white/10 rounded relative">
                <div className="absolute top-0 left-0 w-3/5 h-full bg-neonPurple rounded shadow-[0_0_8px_#A855F7]" />
                <div className="absolute top-1/2 left-3/5 w-2 h-2 rounded-full bg-textPrimary -translate-y-1/2 -translate-x-1/2" />
              </div>
            </div>

            {/* Info Layout */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-textPrimary group-hover:text-neonPurple transition-all duration-200">HireNear</h3>
                <span className="text-[10px] font-mono border border-neonPurple/30 text-neonPurple bg-neonPurple/5 px-2 py-0.5 rounded">MERN STACK</span>
              </div>
              <p className="text-sm text-textMuted leading-relaxed">
                A location-aware marketplace platform connecting clients with nearby freelance labor. Personally designed and implemented the 
                central Competitive Bidding Engine, orchestrating transaction states, database validations, and asynchronous offer structures 
                to secure seamless service agreements.
              </p>
            </div>
          </div>

          {/* Badges and action links */}
          <div className="mt-6 space-y-4">
            <div className="flex flex-wrap gap-2">
              {["MongoDB", "Express", "React", "Node.js", "React Native", "Expo"].map((tech) => (
                <span key={tech} className="text-[10px] font-mono bg-white/[0.02] border border-white/10 text-textMuted px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="pt-2 border-t border-borderDefault/50">
              <a href={hirenearRepo} {...getLinkProps(hirenearRepo)} className="text-xs font-mono text-neonPurple hover:underline block">// GitHub Repository</a>
              <a href={hireneardesktopDemo} {...getLinkProps(hireneardesktopDemo)} className="text-xs font-mono text-neonPurple hover:underline block">// Desktop Demo</a>
              <a href={hirenearmobileDemo} {...getLinkProps(hirenearmobileDemo)} className="text-xs font-mono text-neonPurple hover:underline block">// Mobile Demo</a>
            </div>
          </div>
        </div>

        {/* QRGate Attendance System (Full 3-col width) */}
        <div className="lg:col-span-3 flex flex-col md:flex-row justify-between border border-borderDefault bg-spaceCard/40 rounded-2xl p-6 hover:border-neonCyan/40 hover:shadow-glowCyan transition-all duration-300 group gap-6">
          
          {/* Left Block Visual Mockup */}
          <div className="w-full md:w-1/3 h-52 rounded-xl bg-[#1b1c26] border border-white/5 flex flex-col items-center justify-center p-4 relative overflow-hidden shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#12121A] to-transparent opacity-60" />
            
            {/* Visual QR Scanning Interface */}
            <div className="relative w-28 h-28 border border-white/10 p-2 flex items-center justify-center rounded-lg">
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neonCyan" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neonCyan" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-neonCyan" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neonCyan" />
              
              {/* Inner scanning laser line */}
              <div className="absolute top-1/4 left-0 w-full h-0.5 bg-neonCyan shadow-[0_0_8px_#06B6D4] animate-bounce" />

              {/* Dotted target circle */}
              <div className="w-20 h-20 rounded-full border border-dashed border-white/20 flex items-center justify-center">
                <span className="text-[10px] font-mono text-neonCyan animate-pulse">VALIDATED</span>
              </div>
            </div>

            <div className="mt-4 text-center">
              <span className="text-[10px] font-mono text-textMuted block">SECURITY SECURE PIN: #E8492</span>
            </div>
          </div>

          {/* Right Block Details & Info Layout */}
          <div className="flex flex-col justify-between flex-grow">
            <div className="space-y-4">
              <div className="flex flex-wrap justify-between items-center gap-2">
                <h3 className="text-xl font-bold text-textPrimary group-hover:text-neonCyan transition-all duration-200">QRGate</h3>
                <span className="text-[10px] font-mono border border-neonCyan/30 text-neonCyan bg-neonCyan/5 px-2 py-0.5 rounded">SYSTEM VALIDATION</span>
              </div>
              <p className="text-sm text-textMuted leading-relaxed">
                Cryptographically secured attendance framework incorporating dynamic, single-use, timed QR coordinate streams. Built with dynamic location verification algorithms, robust security models, and automated reporting systems.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex flex-wrap gap-2">
                {["System Design", "QR Cryptography", "React Native", "Secure APIs"].map((tech) => (
                  <span key={tech} className="text-[10px] font-mono bg-white/[0.02] border border-white/10 text-textMuted px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="pt-2 border-t border-borderDefault/50">
                <a href={qrGateCase} {...getLinkProps(qrGateCase)} className="text-xs font-mono text-neonCyan hover:underline block">// Technical Case Study</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}