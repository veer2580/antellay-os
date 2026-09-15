import React from 'react';
import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Footer() {
  const { isAuthenticated } = useAuth();

  const footerLinks = [
    { name: 'ABOUT', path: '/about', locked: true },
    { name: 'VISION', path: '/vision', locked: true },
    { name: 'MISSION', path: '/mission', locked: true },
    { name: 'ARCHITECTURE', path: '/architecture', locked: true },
    { name: 'FUTUHR', path: '/futuhr', locked: true },
    { name: 'CONTACT', path: '/contact', locked: false },
  ];

  return (
    <footer className="relative z-20 border-t border-cyan-500/30 bg-[#030716]/95 backdrop-blur-xl pt-14 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 shadow-[0_-12px_40px_rgba(0,229,255,0.06)]">
      {/* Top accent glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Subtitle */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link to="/" className="flex items-center gap-3 mb-2 group">
            <div className="w-8 h-8 rounded-lg border border-cyan-500/50 bg-cyan-950/60 flex items-center justify-center text-cyan-400 group-hover:border-cyan-300 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-cyan-400 stroke-white stroke-[0.5]">
                <polygon points="12,2 22,22 12,17 2,22" />
              </svg>
            </div>
            <span className="font-display tracking-[0.25em] text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
              ANTELLAY OS
            </span>
          </Link>
          <span className="font-mono text-xs text-slate-300 tracking-wider">
            THE OPERATING SYSTEM FOR THE AUTONOMOUS WORLD.
          </span>
          <div className="flex items-center gap-2 mt-1.5 font-mono text-[10px] tracking-widest uppercase">
            <span className="text-cyan-400 font-semibold">A ANTELLAY LABS</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">A CELEBSO GROUP</span>
          </div>
        </div>

        {/* Navigation Page Links */}
        <nav className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 font-display text-xs tracking-[0.2em] text-slate-300">
          {footerLinks.map((item) => {
            const isLocked = item.locked && !isAuthenticated;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`inline-flex items-center gap-1.5 hover:text-cyan-300 transition-colors py-1 ${
                  isLocked ? 'text-slate-400' : 'text-slate-200'
                }`}
              >
                <span>{item.name}</span>
                {isLocked && <Lock className="w-3 h-3 text-amber-400/80" />}
              </Link>
            );
          })}
        </nav>

        {/* Legal & Direct Email */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right font-mono text-xs text-slate-300 space-y-2">
          <p className="text-slate-400">© 2026 Futuhr. All rights reserved.</p>
          <a
            href="mailto:veer@antellay.in"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-cyan-500/40 bg-cyan-950/40 text-cyan-300 hover:text-white hover:border-cyan-300 hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] tracking-wider transition-all"
          >
            <span>veer@antellay.in</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
