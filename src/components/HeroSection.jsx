import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between items-center text-center pt-24 pb-12 px-4 overflow-hidden border-b border-cyan-900/30"
    >
      {/* Subtle Cosmic Ambient Glow (Clean Void — lets ASMR particles shine through) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-b from-cyan-500/10 via-cyan-950/15 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020408] to-transparent" />
      </div>

      {/* Top Brand Mark */}
      <div className="relative z-10 pt-4 md:pt-6">
        <div className="inline-flex items-center gap-2 font-display text-base md:text-xl font-light tracking-[0.4em] text-white/90 uppercase hover:text-cyan-300 transition-colors">
          <span>x</span>
          <span className="font-mono text-cyan-400 font-bold">T</span>
          <span>.</span>
          <span className="font-mono text-cyan-400 font-bold">T</span>
        </div>
      </div>

      {/* Central Hero Branding & Action */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto py-12">
        {/* Delta Navigation Emblem */}
        <div className="relative mb-6 group cursor-pointer">
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl group-hover:bg-cyan-400/40 transition-all duration-500" />
          <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-2xl border border-cyan-500/30 bg-[#040814]/70 backdrop-blur-md flex items-center justify-center shadow-[0_0_35px_rgba(0,229,255,0.25)] group-hover:border-cyan-400 transition-all duration-500">
            <svg
              viewBox="0 0 40 40"
              className="w-10 h-10 md:w-14 md:h-14 fill-none stroke-white stroke-[2] drop-shadow-[0_0_12px_rgba(0,229,255,0.8)]"
            >
              <polygon points="20,4 36,36 20,28 4,36" fill="rgba(0,229,255,0.15)" />
            </svg>
          </div>
        </div>

        {/* Title: ANTELLAY OS */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-[0.22em] text-white uppercase drop-shadow-[0_0_35px_rgba(255,255,255,0.3)] mb-4">
          ANTELLAY OS
        </h1>

        <p className="font-mono text-xs sm:text-sm tracking-[0.3em] text-cyan-300/80 uppercase max-w-xl mb-10">
          The Operating System for the Autonomous World
        </p>

        {/* CTA Button: ENTER THE FUTURE > */}
        <a
          href="#signals"
          className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-sm border border-cyan-500/40 bg-[#050b18]/80 hover:bg-cyan-950/70 text-slate-100 font-display tracking-[0.25em] text-xs sm:text-sm uppercase transition-all duration-300 hover:border-cyan-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] backdrop-blur-md"
        >
          <span>ENTER THE FUTURE</span>
          <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
          <span className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>

      {/* Bottom Navigation, Social Icons & Legal Attributions */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center gap-6 mt-auto pt-8">
        {/* Bottom Horizon Navigation Bar */}
        <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-display tracking-[0.22em] text-slate-300">
          <a href="#about" className="hover:text-cyan-300 transition-colors">
            ABOUT
          </a>
          <a href="#vision" className="hover:text-cyan-300 transition-colors">
            VISION
          </a>
          <a href="#mission" className="hover:text-cyan-300 transition-colors">
            MISSION
          </a>
          <a href="#architecture" className="hover:text-cyan-300 transition-colors">
            ARCHITECTURE
          </a>
          <a href="#contact" className="hover:text-cyan-300 transition-colors">
            CONTACT
          </a>
        </nav>

        {/* Social Links */}
        <div className="flex items-center gap-6 text-slate-400">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full border border-slate-700/60 bg-slate-900/40 flex items-center justify-center hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-currentColor stroke-2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="w-9 h-9 rounded-full border border-slate-700/60 bg-slate-900/40 flex items-center justify-center hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all"
          >
            <span className="font-bold text-xs">𝕏</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-full border border-slate-700/60 bg-slate-900/40 flex items-center justify-center hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-currentColor stroke-2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>

        {/* Legal & Organization */}
        <div className="text-center font-sans text-xs text-slate-400 space-y-1">
          <p className="tracking-wider">© 2026 Futuhr. All rights reserved.</p>
          <p className="font-mono text-[11px] text-cyan-400/80 tracking-widest uppercase">
            <span>A ANTELLAY LABS</span> •{' '}
            <a
              href="https://celebso.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Celebso Group - Building the Future Through Technology & Innovation"
              className="text-cyan-400 hover:text-cyan-200 hover:underline transition-colors font-semibold"
            >
              A CELEBSO GROUP
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
