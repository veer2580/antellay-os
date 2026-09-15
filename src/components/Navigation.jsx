import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Lock, LogOut, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#020408]/95 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg'
          : 'bg-[#020408]/60 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded border border-cyan-500/40 bg-cyan-950/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all">
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-cyan-400 stroke-white stroke-[0.5]"
            >
              <polygon points="12,2 22,22 12,17 2,22" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display tracking-[0.25em] text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
              ANTELLAY OS
            </span>
            <span className="font-mono text-[9px] tracking-widest text-cyan-400/80">
              x T . T
            </span>
          </div>
        </Link>

        {/* Right Section: Auth Status / Login Action */}
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              {/* User Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-emerald-500/40 bg-emerald-950/40 text-emerald-300 font-mono text-xs tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <User className="w-3.5 h-3.5" />
                <span className="font-bold">{user?.name || 'VEER'}</span>
                <span className="text-[10px] text-emerald-400/70 uppercase hidden sm:inline">(CLEARANCE LVL 4)</span>
              </div>

              {/* Logout / Re-lock Button */}
              <button
                onClick={logout}
                title="Lock confidential pages"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-red-500/30 bg-red-950/30 hover:bg-red-950/60 text-red-300 hover:text-white text-xs font-mono tracking-wider uppercase transition-all duration-200"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>LOCK</span>
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="group relative inline-flex items-center gap-2 px-5 py-2 rounded border border-cyan-500/40 bg-cyan-950/40 hover:bg-cyan-500/20 text-cyan-300 hover:text-white text-xs font-display tracking-[0.25em] uppercase transition-all duration-300 hover:border-cyan-300 hover:shadow-[0_0_25px_rgba(0,229,255,0.35)]"
            >
              <Lock className="w-3.5 h-3.5 text-cyan-400 group-hover:text-white transition-colors" />
              <span>LOGIN</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
