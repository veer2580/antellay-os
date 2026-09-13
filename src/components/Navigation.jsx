import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', to: '/' },
    { label: 'ABOUT', to: '/about' },
    { label: 'VISION', to: '/vision' },
    { label: 'MISSION', to: '/mission' },
    { label: 'ARCHITECTURE', to: '/architecture' },
    { label: 'FUTUHR', to: '/futuhr' },
    { label: 'CONTACT', to: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#020408]/90 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg'
          : 'bg-transparent py-5'
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

        {/* Desktop NavLinks */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `font-display tracking-[0.2em] text-xs transition-all duration-200 relative py-1 ${
                  isActive
                    ? 'text-cyan-300 font-bold after:w-full after:bg-cyan-400 shadow-sm'
                    : 'text-slate-300 hover:text-cyan-300 after:w-0 hover:after:w-full after:bg-cyan-400'
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all after:duration-300`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Status Badge & Connect CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/20 text-emerald-400 text-[10px] font-mono tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>ORBITAL_ACTIVE</span>
          </div>

          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 px-4 py-1.5 rounded border border-cyan-500/40 bg-cyan-950/40 hover:bg-cyan-500/20 text-cyan-300 text-xs font-display tracking-widest transition-all duration-300 hover:border-cyan-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]"
          >
            <span>CONNECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-cyan-400 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#040814]/95 border-b border-cyan-500/25 backdrop-blur-2xl px-6 py-6 transition-all">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `font-display tracking-[0.2em] text-sm py-2.5 border-b border-slate-800/60 transition-colors ${
                    isActive ? 'text-cyan-300 font-bold pl-2 border-cyan-500/40' : 'text-slate-200 hover:text-cyan-300'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-3 flex items-center justify-between">
              <span className="font-mono text-xs text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                ORBITAL_ACTIVE
              </span>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-1.5 rounded border border-cyan-500/40 bg-cyan-950/40 text-cyan-300 text-xs font-display tracking-widest"
              >
                CONNECT
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
