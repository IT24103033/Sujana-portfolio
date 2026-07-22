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
            
            {/* ScanMark Dynamic QR Verification HUD Visual Mockup */}
            <div className="w-full h-48 rounded-xl bg-[#12141c] border border-white/5 flex items-center justify-between p-6 overflow-hidden relative group-hover:border-neonCyan/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-neonCyan/5 via-transparent to-neonPurple/5 opacity-60" />
              
              {/* Left HUD Log Detail */}
              <div className="hidden sm:flex flex-col justify-between h-full z-10 font-mono text-[10px] space-y-2">
                <div className="space-y-1">
                  <span className="text-neonCyan block">// SESSION SYNC</span>
                  <span className="text-textMuted block">ID: #SM-8924</span>
                </div>
                <div className="space-y-1">
                  <span className="text-textMuted block">MODE: TIME-SECURED</span>
                  <span className="text-neonCyan/80 block">PROXY: PREVENTED</span>
                </div>
              </div>

              {/* Center Target Scanning Module */}
              <div className="relative w-28 h-28 border border-white/10 p-2 flex items-center justify-center rounded-xl bg-spaceDark/60 backdrop-blur-md mx-auto sm:mx-0 z-10 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                {/* Target Corners */}
                <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-neonCyan" />
                <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-neonCyan" />
                <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-neonCyan" />
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-neonCyan" />
                
                {/* Scanning Laser Line */}
                <div className="absolute top-1/4 left-0 w-full h-0.5 bg-neonCyan shadow-[0_0_12px_#06B6D4] animate-pulse" />

                {/* Inner Scanning Radar Ring */}
                <div className="w-20 h-20 rounded-full border border-dashed border-neonCyan/40 flex flex-col items-center justify-center gap-1">
                  <svg className="w-6 h-6 text-neonCyan animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v1m0 14v1m8-8h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  </svg>
                  <span className="text-[9px] font-mono text-neonCyan font-bold tracking-widest">VERIFIED</span>
                </div>
              </div>

              {/* Right HUD Session Stats */}
              <div className="hidden sm:flex flex-col justify-between h-full z-10 text-right font-mono text-[10px]">
                <div className="space-y-1">
                  <span className="text-textMuted block">STAMP</span>
                  <span className="text-textPrimary font-semibold block">09:41:02 AM</span>
                </div>
                <div className="space-y-1">
                  <span className="text-neonCyan block">MODULE</span>
                  <span className="text-textMuted block">SLIIT_CS3040</span>
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
            
            {/* HireNear Location Bidding Marketplace Visual Mockup */}
            <div className="w-full h-48 rounded-xl bg-[#12141c] border border-white/5 flex flex-col justify-between p-4 relative overflow-hidden group-hover:border-neonPurple/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-neonPurple/10 via-transparent to-neonCyan/5 opacity-60" />
              
              {/* Header Status Tag */}
              <div className="flex items-center justify-between font-mono text-[10px] z-10">
                <span className="text-neonPurple font-bold flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-neonPurple animate-pulse shadow-[0_0_8px_#A855F7]" />
                  <span>BIDDING ENGINE ACTIVE</span>
                </span>
                <span className="text-textMuted border border-white/10 px-2 py-0.5 rounded bg-spaceDark/40">RADIAL: 2.5 KM</span>
              </div>
              
              {/* Marketplace Map Radar Node & Bid Card */}
              <div className="flex items-center justify-between gap-3 z-10 my-auto">
                {/* Active Bid Transaction Card */}
                <div className="flex-1 bg-spaceDark/80 border border-neonPurple/30 rounded-lg p-2.5 space-y-1.5 shadow-glowPurple">
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="text-textMuted">OFFER #482</span>
                    <span className="text-neonPurple font-bold">$45.00/HR</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded overflow-hidden">
                    <div className="w-4/5 h-full bg-neonPurple rounded shadow-[0_0_8px_#A855F7]" />
                  </div>
                  <div className="text-[9px] font-mono text-neonCyan flex justify-between">
                    <span>STATE: MATCHED</span>
                    <span>DISTANCE: 1.2KM</span>
                  </div>
                </div>

                {/* Location Radar Node Graphic */}
                <div className="w-12 h-12 rounded-full border border-neonPurple/40 bg-neonPurple/5 flex items-center justify-center relative shrink-0">
                  <div className="absolute inset-0 rounded-full border border-dashed border-neonPurple/30 animate-[spin_20s_linear_infinite]" />
                  <svg className="w-5 h-5 text-neonPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>

              {/* Bottom Transaction Footer */}
              <div className="flex items-center justify-between text-[9px] font-mono text-textMuted z-10 pt-1 border-t border-white/5">
                <span>ASYNC OFFER MATCHING</span>
                <span className="text-neonPurple font-semibold">AGREEMENT SECURED</span>
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
        
        {/* QRGate Attendance System (Full 3-col width)
        <div className="lg:col-span-3 flex flex-col md:flex-row justify-between border border-borderDefault bg-spaceCard/40 rounded-2xl p-6 hover:border-neonCyan/40 hover:shadow-glowCyan transition-all duration-300 group gap-6">
          
          <div className="w-full md:w-1/3 h-52 rounded-xl bg-[#1b1c26] border border-white/5 flex flex-col items-center justify-center p-4 relative overflow-hidden shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#12121A] to-transparent opacity-60" />
            
            <div className="relative w-28 h-28 border border-white/10 p-2 flex items-center justify-center rounded-lg">
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neonCyan" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neonCyan" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-neonCyan" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neonCyan" />
              
              <div className="absolute top-1/4 left-0 w-full h-0.5 bg-neonCyan shadow-[0_0_8px_#06B6D4] animate-bounce" />

              <div className="w-20 h-20 rounded-full border border-dashed border-white/20 flex items-center justify-center">
                <span className="text-[10px] font-mono text-neonCyan animate-pulse">VALIDATED</span>
              </div>
            </div>

            <div className="mt-4 text-center">
              <span className="text-[10px] font-mono text-textMuted block">SECURITY SECURE PIN: #E8492</span>
            </div>
          </div>

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
        */}
      </div>
    </div>
  );
}