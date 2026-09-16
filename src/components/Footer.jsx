import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, FileText, Download } from 'lucide-react';
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
    { name: 'TERMS', path: '/terms', locked: false },
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
            <a
              href="https://celebso.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Celebso Group - Building the Future Through Technology & Innovation"
              className="text-cyan-400 font-semibold hover:text-cyan-200 hover:underline underline-offset-2 transition-all cursor-pointer"
            >
              A CELEBSO GROUP
            </a>
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

        {/* Legal & Action Buttons */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right font-mono text-xs text-slate-300 space-y-2.5">
          {/* Dedicated Unlocked Terms & Conditions Button */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2">
            <Link
              to="/terms"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-cyan-500/50 bg-cyan-950/60 hover:bg-cyan-900/50 text-cyan-300 hover:text-white hover:border-cyan-300 hover:shadow-[0_0_15px_rgba(0,229,255,0.35)] tracking-wider transition-all font-mono text-xs font-semibold group"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>TERMS & CONDITIONS</span>
            </Link>
            <a
              href="/terms-and-conditions.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="Open Official Terms PDF in new tab"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-700/80 bg-[#020714] text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 transition-all text-xs"
            >
              <Download className="w-3 h-3 text-cyan-400" />
              <span>PDF</span>
            </a>
          </div>

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
