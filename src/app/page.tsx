import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-spaceDark text-textPrimary overflow-x-hidden font-sans select-none selection:bg-neonCyan/30 selection:text-neonCyan">
      
      {/* Decorative background visual ambient glows matching original design */}
      <div className="absolute top-[-10%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-neonPurple/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-neonCyan/5 blur-[150px] pointer-events-none" />

      {/* Embedded Sticky Navigation Header */}
      <Navbar />

      {/* Single-Page Scroll Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 space-y-36 pb-20">
        
        {/* 1. Hero Presentational Area */}
        <section id="home" className="pt-32 sm:pt-40 scroll-mt-24">
          <Hero />
        </section>

        {/* 2. About Me & Academic Timeline */}
        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        {/* 3. Projects Showcase Grid */}
        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>

        {/* 4. Skills Radar List */}
        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>

        {/* 5. Collaborate and Footer segment */}
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>

      </div>
    </main>
  );
}