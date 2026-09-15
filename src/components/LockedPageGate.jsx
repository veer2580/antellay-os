import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, ShieldAlert, ArrowLeft, KeyRound } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function LockedPageGate({ children, pageName = 'SYSTEM SPECIFICATIONS' }) {
  const { isAuthenticated } = useAuth();

  // If authenticated, render clear content without any blur
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // If not authenticated:
  // 1. Render FULL scrollable page content with a visible yet redacted blur (blur 14px, opacity 80%)
  // 2. Fixed centered official Restricted Access lock overlay without password field
  // 3. Password input only on /login page
  return (
    <div className="relative w-full">
      {/* 
        Full scrollable page content.
        Higher opacity (80%) and balanced blur (14px) so background imagery, 
        diagrams, and layouts are clearly visible while protecting confidential details.
      */}
      <div 
        aria-hidden="true" 
        className="w-full filter blur-[11px] opacity-95 pointer-events-none select-none transition-all"
      >
        {children}
      </div>

      {/* Very subtle ambient overlay so the background shines through with high visibility */}
      <div className="fixed inset-0 bg-[#020408]/10 pointer-events-none z-30" />

      {/* Fixed Centered Official Restricted Access Card */}
      <div className="fixed inset-0 z-40 pointer-events-none flex items-center justify-center px-4">
        <div className="pointer-events-auto relative w-full max-w-md rounded-2xl border border-cyan-500/40 bg-[#040816]/95 p-8 sm:p-10 shadow-[0_0_90px_rgba(0,229,255,0.3)] backdrop-blur-2xl text-center overflow-hidden">
          {/* Top glowing ambient line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          {/* Official Lock Emblem */}
          <div className="relative mx-auto w-16 h-16 rounded-2xl border border-cyan-500/50 bg-cyan-950/70 flex items-center justify-center text-cyan-400 shadow-[0_0_35px_rgba(0,229,255,0.35)] mb-6">
            <Lock className="w-8 h-8 text-cyan-300 animate-pulse" />
          </div>

          {/* Standard Official Clearance Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-950/50 text-cyan-300 font-mono text-[10px] tracking-[0.25em] uppercase font-bold mb-4">
            <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" />
            <span>CONFIDENTIAL // CLEARANCE LEVEL 4</span>
          </div>

          {/* Standard Official Heading */}
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-[0.18em] text-white uppercase mb-2">
            RESTRICTED ACCESS
          </h2>

          <p className="font-mono text-xs text-cyan-300/90 tracking-wider mb-2">
            SECTION: {pageName.toUpperCase()}
          </p>

          <p className="font-sans text-xs text-slate-300 leading-relaxed max-w-sm mx-auto mb-8">
            This technical documentation contains proprietary Antellay OS machine intelligence and autonomous architecture. Please authenticate with authorized credentials to inspect this section.
          </p>

          {/* Direct CTA: Login to Unlock (Password entered on official Login portal) */}
          <div className="space-y-4">
            <Link
              to="/login"
              state={{ from: window.location.pathname }}
              className="w-full py-3.5 rounded-md border border-cyan-400/80 bg-gradient-to-r from-cyan-950 via-cyan-900 to-cyan-950 hover:bg-cyan-500/20 text-cyan-200 hover:text-white font-display text-xs tracking-[0.25em] uppercase font-bold flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]"
            >
              <KeyRound className="w-4 h-4 text-cyan-400" />
              <span>AUTHENTICATE TO ACCESS</span>
            </Link>

            <div>
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 font-mono text-xs tracking-wider transition-colors pt-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>RETURN TO HOME</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
