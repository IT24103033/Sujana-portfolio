"use client";

export default function Hero() {
  return (
    <div className="w-full space-y-20">
      {/* 2-Column Grid Layout Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Professional pitch text layout */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center space-x-2 tracking-[0.25em] text-xs font-mono text-neonCyan">
            <span className="w-2 h-2 rounded-full bg-neonCyan animate-pulse shadow-[0_0_8px_#06B6D4]" />
            <span>FULL-STACK SOFTWARE ENGINEER</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-textPrimary">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.25)]">Scalable Systems</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan via-cyan-300 to-textPrimary">Clean Interfaces.</span>
          </h1>

          <p className="text-base sm:text-lg text-textMuted leading-relaxed max-w-2xl">
            Software Engineering Student & Full-Stack Developer crafting performant, 
            production-grade systems from hardware-adjacent C to distributed microservices.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-neonCyan text-spaceDark font-semibold text-sm rounded-lg transition-all duration-300 hover:bg-textPrimary hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
            >
              <span>Explore Projects</span>
              <span className="font-mono text-xs font-bold">&gt;</span>
            </a>
            
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center space-x-2 px-6 py-3 border border-borderDefault bg-spaceCard hover:bg-white/[0.04] text-textPrimary hover:border-textMuted hover:scale-[1.02] font-medium text-sm rounded-lg transition-all duration-300"
            >
              <svg className="w-4 h-4 text-textMuted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Right Hand Futuristic Concentric Target Profile Framework */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <div className="relative w-72 h-72 sm:w-85 sm:h-85 flex items-center justify-center">
            
            {/* Outer dotted dashboard ring line */}
            <div className="absolute inset-0 rounded-full border border-dashed border-white/[0.06] animate-[spin_120s_linear_infinite]" />
            
            {/* Mid orbital tracking structure line */}
            <div className="absolute inset-6 rounded-full border border-white/[0.03]" />
            <div className="absolute inset-6 rounded-full border-t border-r border-neonCyan/20 animate-[spin_40s_linear_infinite]" />
            
            {/* Inner dynamic containment profile shield line */}
            <div className="absolute inset-12 rounded-full border border-white/[0.05] shadow-[inset_0_0_20px_rgba(255,255,255,0.01)]" />
            
            {/* The primary color gradient glowing back shadow ring */}
            <div className="absolute inset-16 rounded-full bg-gradient-to-tr from-neonPurple/20 to-neonCyan/20 opacity-40 blur-xl animate-pulse" />

            {/* Core Photo Frame container wrapper with a solid glow ring matching image_abd8ac.jpg */}
            <div className="absolute inset-16 rounded-full border-2 border-neonCyan bg-spaceCard flex items-center justify-center overflow-hidden group shadow-[0_0_30px_rgba(6,182,212,0.55)]">
              {/* Profile image with full opacity as standard */}
              <img 
                src="/profile-photo.png" 
                alt="Sujana Dinuwara Headshot" 
                className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-500 min-b bg-gradient-to-b from-spaceCard to-spaceDark"
                onError={(e) => {
                  // Fallback safe display framework if image path evaluates empty initially
                  e.currentTarget.style.display = "none";
                }}
              />
              {/* Fallback Graphic UI element lines if code finds asset pointer empty */}
              <div className="absolute text-neonCyan/40 font-mono text-[10px] tracking-widest uppercase">Target Secure</div>
            </div>

            {/* Corner Tech crosshairs framing details around box map layout */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/20" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20" />
          </div>
        </div>

      </div>

           

      

      {/* Bottom Segment: Integrated Metrics analytics banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border border-borderDefault py-6 bg-spaceCard/40 backdrop-blur-sm rounded-xl px-8 shadow-glowCyan">
        
        {/* Metric 1 */}
        <div className="space-y-1 md:border-r border-borderDefault md:pr-4">
          <div className="text-[10px] font-mono text-textMuted tracking-widest uppercase">// Projects Built</div>
          <div className="text-xl font-bold text-textPrimary flex items-center space-x-2">
            <span className="text-neonCyan">12+</span>
            <span className="text-xs font-normal text-textMuted font-mono">Deployments</span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="space-y-1 md:border-r border-borderDefault md:px-6">
          <div className="text-[10px] font-mono text-textMuted tracking-widest uppercase">// Core Stack</div>
          <div className="text-xl font-bold text-textPrimary">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-textPrimary to-textMuted">MERN & Spring Boot</span>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="space-y-1 md:pl-6">
          <div className="text-[10px] font-mono text-textMuted tracking-widest uppercase">// Active Learning</div>
          <div className="text-xl font-bold text-textPrimary">
            <span className="text-neonPurple drop-shadow-[0_0_8px_rgba(168,85,247,0.4)] font-semibold">OS Architecture</span>
          </div>
        </div>

      </div>
    </div>
  );
}