"use client";

import { useState } from "react";

const S = "//";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"IDLE" | "TRANSMITTING" | "SUCCESS" | "ERROR">("IDLE");

  // TO ACTIVATE FORMSPREE:
  // Read the environment variable first, then fall back to placeholder
  const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "YOUR_FORMSPREE_ID";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setStatus("TRANSMITTING");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", subject: "", message: "" });
        // Auto-reset state back to idle after display window closes
        setTimeout(() => setStatus("IDLE"), 6000);
      } else {
        setStatus("ERROR");
      }
    } catch (err) {
      console.error("Transmission failed:", err);
      setStatus("ERROR");
    }
  };

  return (
    <div className="w-full space-y-24">
      {/* Main Form container module aligned to image_abc1c3.png */}
      <div className="relative border border-borderDefault bg-[#141619]/40 backdrop-blur-sm rounded-2xl p-6 sm:p-12 overflow-hidden">
        
        {/* Ambient background decoration glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neonPurple/[0.01] pointer-events-none" />

        <div className="max-w-2xl mx-auto space-y-8 relative z-10">
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center justify-center space-x-4 w-full">
              <span className="h-[1px] w-8 sm:w-12 bg-neonPurple/50" />
              <span className="text-xs font-mono text-neonPurple tracking-widest uppercase font-semibold">
                OPEN TO OPPORTUNITIES
              </span>
              <span className="h-[1px] w-8 sm:w-12 bg-neonPurple/50" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-textPrimary">
              Let&apos;s collaborate on something <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">extraordinary.</span>
            </h2>
            <p className="text-sm sm:text-base text-textMuted max-w-xl mx-auto leading-relaxed">
              Currently available for internships, freelance contracts, and collaborative research.
            </p>
          </div>

          {/* Secure interactive multi-line input panel */}
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            {/* Formspree Honeypot Anti-Spam Field */}
            <input type="text" name="_gotcha" tabIndex={-1} className="hidden" />
            
            {/* 1. Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-textPrimary block">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-[#111218] border border-borderDefault rounded-lg text-sm text-textPrimary placeholder:text-textMuted/40 focus:outline-none focus:border-neonCyan focus:ring-1 focus:ring-neonCyan/50 transition-all duration-300"
              />
            </div>

            {/* 2. Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-textPrimary block">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 bg-[#111218] border border-borderDefault rounded-lg text-sm text-textPrimary placeholder:text-textMuted/40 focus:outline-none focus:border-neonCyan focus:ring-1 focus:ring-neonCyan/50 transition-all duration-300"
              />
            </div>

            {/* 3. Subject Field */}
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-semibold text-textPrimary block">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Business Inquiry"
                className="w-full px-4 py-3 bg-[#111218] border border-borderDefault rounded-lg text-sm text-textPrimary placeholder:text-textMuted/40 focus:outline-none focus:border-neonCyan focus:ring-1 focus:ring-neonCyan/50 transition-all duration-300"
              />
            </div>

            {/* 4. Message Area */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-textPrimary block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                required
                className="w-full px-4 py-3 bg-[#111218] border border-borderDefault rounded-lg text-sm text-textPrimary placeholder:text-textMuted/40 focus:outline-none focus:border-neonCyan focus:ring-1 focus:ring-neonCyan/50 transition-all duration-300 resize-none"
              />
            </div>

            {/* Glow Pill Submit Button exactly like image_abc1c3.png */}
            <button
              type="submit"
              disabled={status === "TRANSMITTING"}
              className="w-full h-12 flex items-center justify-center space-x-2 bg-neonCyan hover:bg-cyan-400 text-[#0C0D0E] font-bold text-sm rounded-full cursor-pointer select-none transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none"
            >
              {status === "TRANSMITTING" ? (
                <span>Transmitting Packet...</span>
              ) : status === "SUCCESS" ? (
                <span>Signal Transmitted!</span>
              ) : (
                <>
                  <span>Send Message</span>
                  {/* Custom Paper Plane SVG Icon */}
                  <svg className="w-4 h-4 fill-current transform rotate-45" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </>
              )}
            </button>

            {/* Submission HUD diagnostics responses */}
            {status === "SUCCESS" && (
              <span className="text-xs font-mono text-neonCyan block tracking-wider text-center animate-pulse pt-2">
                {S} System validation active. Secure handshake established.
              </span>
            )}
            {status === "ERROR" && (
              <span className="text-xs font-mono text-rose-500 block tracking-wider text-center pt-2">
                {S} Warning: Packet loss detected. Verify Formspree configuration ID.
              </span>
            )}
          </form>
        </div>
      </div>

      {/* Integrated Flat Modern Social Footer */}
      <footer className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-borderDefault/50 pt-8 pb-4">
        
        {/* Left Side Sign-off */}
        <p className="text-xs text-textMuted font-mono">
          Designed & Engineered by <span className="text-textPrimary">Sujana Dinuwara</span>.
        </p>

        {/* Right Side Social SVG Icons */}
        <div className="flex items-center space-x-6">
          <a 
            href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-textMuted hover:text-neonCyan transition-all duration-300"
            title="GitHub Profile"
          >
            {/* GitHub SVG Icon */}
            <svg width="20" height="20" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
            </svg>
          </a>
          <a 
            href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "#"} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-textMuted hover:text-neonPurple transition-all duration-300"
            title="LinkedIn Profile"
          >
            {/* LinkedIn SVG Icon */}
            <svg width="20" height="20" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a 
            href={process.env.NEXT_PUBLIC_EMAIL_URL ? `mailto:${process.env.NEXT_PUBLIC_EMAIL_URL}` : "#"} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-textMuted hover:text-neonCyan transition-all duration-300"
            title="Send Email"
          >
            {/* Direct Email SVG Icon */}
            <svg width="20" height="20" className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
