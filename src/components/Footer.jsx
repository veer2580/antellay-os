import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-[#020408]/90 backdrop-blur-md pt-14 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Subtitle */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link to="/" className="flex items-center gap-3 mb-2 group">
            <div className="w-7 h-7 rounded border border-cyan-500/40 bg-cyan-950/40 flex items-center justify-center text-cyan-400">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-cyan-400 stroke-white stroke-[0.5]">
                <polygon points="12,2 22,22 12,17 2,22" />
              </svg>
            </div>
            <span className="font-display tracking-[0.25em] text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
              ANTELLAY OS
            </span>
          </Link>
          <span className="font-mono text-[11px] text-slate-400 tracking-wider">
            THE OPERATING SYSTEM FOR THE AUTONOMOUS WORLD.
          </span>
          <span className="font-mono text-[10px] text-cyan-400/80 tracking-widest uppercase mt-1">
            A ANTELLAY LABS • A CELEBSO GROUP
          </span>
        </div>

        {/* Navigation Page Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 font-display text-xs tracking-[0.2em] text-slate-300">
          <Link to="/" className="hover:text-cyan-300 transition-colors">
            HOME
          </Link>
          <Link to="/about" className="hover:text-cyan-300 transition-colors">
            ABOUT
          </Link>
          <Link to="/vision" className="hover:text-cyan-300 transition-colors">
            VISION
          </Link>
          <Link to="/mission" className="hover:text-cyan-300 transition-colors">
            MISSION
          </Link>
          <Link to="/architecture" className="hover:text-cyan-300 transition-colors">
            ARCHITECTURE
          </Link>
          <Link to="/futuhr" className="hover:text-cyan-300 transition-colors">
            FUTUHR
          </Link>
          <Link to="/contact" className="hover:text-cyan-300 transition-colors">
            CONTACT
          </Link>
        </nav>

        {/* Legal & Direct Email */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right font-mono text-xs text-slate-400 space-y-1">
          <p>© 2026 Futuhr. All rights reserved.</p>
          <a
            href="mailto:veer@antellay.in"
            className="text-cyan-300 hover:text-cyan-200 tracking-wider underline underline-offset-4 transition-colors"
          >
            veer@antellay.in
          </a>
        </div>
      </div>
    </footer>
  );
}
