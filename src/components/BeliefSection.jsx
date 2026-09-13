import React from 'react';
import { Globe, Layers, Disc } from 'lucide-react';

export default function BeliefSection() {
  return (
    <section id="belief" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#020408] border-b border-cyan-900/30 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20 telemetry-grid" />

      {/* Top 3-Part Belief Triptych Banner (Page 9) */}
      <div className="relative z-10 max-w-6xl mx-auto mb-28 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl border border-slate-800 bg-[#040816]/90 flex items-center gap-4 hover:border-cyan-500/40 transition-colors">
          <div className="w-12 h-12 rounded-lg border border-cyan-500/30 bg-cyan-950/40 flex items-center justify-center text-cyan-400 shrink-0">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <span className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase block mb-1">
              THE BELIEF
            </span>
            <h4 className="font-display text-sm sm:text-base font-bold tracking-wider text-white uppercase">
              THE FUTURE WILL NOT BE ONE MACHINE.
            </h4>
          </div>
        </div>

        <div className="p-6 rounded-xl border border-slate-800 bg-[#040816]/90 flex items-center gap-4 hover:border-cyan-500/40 transition-colors">
          <div className="w-12 h-12 rounded-lg border border-cyan-500/30 bg-cyan-950/40 flex items-center justify-center text-cyan-400 shrink-0">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <span className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase block mb-1">
              SCALE DYNAMICS
            </span>
            <h4 className="font-display text-sm sm:text-base font-bold tracking-wider text-white uppercase">
              IT WILL BE MILLIONS OF MACHINES WORKING TOGETHER.
            </h4>
          </div>
        </div>

        <div className="p-6 rounded-xl border border-slate-800 bg-[#040816]/90 flex items-center gap-4 hover:border-cyan-500/40 transition-colors">
          <div className="w-12 h-12 rounded-lg border border-cyan-500/30 bg-cyan-950/40 flex items-center justify-center text-cyan-400 shrink-0">
            <Disc className="w-6 h-6" />
          </div>
          <div>
            <span className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase block mb-1">
              INFRASTRUCTURE
            </span>
            <h4 className="font-display text-sm sm:text-base font-bold tracking-wider text-white uppercase">
              AND THEY WILL NEED AN OPERATING SYSTEM.
            </h4>
          </div>
        </div>
      </div>

      {/* Founder Statement: WHY WE ARE BUILDING IT (Page 9) */}
      <div className="relative z-10 max-w-5xl mx-auto mb-28 p-8 sm:p-12 rounded-2xl border border-cyan-500/30 bg-[#040918]/90 backdrop-blur-xl flex flex-col md:flex-row items-center gap-8 shadow-[0_0_40px_rgba(0,229,255,0.1)]">
        <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl border border-cyan-500/40 overflow-hidden shrink-0 bg-[#030612] shadow-xl">
          <img
            src="/assets/veer_singh_clean.png"
            alt="Veer Singh"
            className="w-full h-full object-cover filter brightness-105 contrast-105"
            loading="lazy"
          />
        </div>

        <div className="space-y-4">
          <span className="font-mono text-xs text-cyan-400 font-semibold tracking-widest uppercase block">
            WHY WE ARE BUILDING IT
          </span>

          <blockquote className="font-sans text-sm sm:text-base text-slate-200 leading-relaxed italic space-y-2">
            <p>“We believe the next generation of technology will not be defined by a single machine.</p>
            <p>It will be defined by how machines communicate.</p>
            <p>How systems understand their environment.</p>
            <p>How intelligence moves across the physical world.</p>
            <p>And how millions of autonomous systems work together.</p>
            <p className="text-cyan-300 font-semibold not-italic pt-1">
              Antellay OS is our attempt to build that foundation.”
            </p>
          </blockquote>
        </div>
      </div>

      {/* Cosmic Transition Callout: WE ARE NOT BUILDING FOR THE WORLD THAT EXISTS... (Page 9) */}
      <div className="relative z-10 max-w-5xl mx-auto text-center pt-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 font-display text-sm sm:text-lg tracking-[0.2em] uppercase font-bold text-slate-300">
          <span className="text-slate-400">WE ARE NOT BUILDING FOR THE WORLD THAT EXISTS.</span>
          <span className="text-cyan-300 glow-text-cyan">WE ARE BUILDING FOR THE WORLD THAT IS COMING.</span>
        </div>

        {/* Central Horizon Flare & Coming Soon Banner */}
        <div className="relative py-12 px-6 rounded-2xl border border-cyan-400/40 bg-gradient-to-b from-cyan-950/40 to-[#02050f] shadow-[0_0_50px_rgba(0,229,255,0.2)] flex flex-col items-center">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400 flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-cyan-300 stroke-2">
              <polygon points="12,2 22,22 12,17 2,22" />
            </svg>
          </div>

          <h3 className="font-display text-3xl sm:text-5xl font-extrabold tracking-[0.22em] text-white uppercase mb-2">
            ANTELLAY OS
          </h3>

          <p className="font-mono text-xs sm:text-sm tracking-[0.35em] text-cyan-300 uppercase mb-4">
            THE OPERATING SYSTEM FOR THE AUTONOMOUS WORLD.
          </p>

          <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-950/60 font-mono text-[11px] text-cyan-400 tracking-widest uppercase">
            COMING SOON
          </span>
        </div>
      </div>
    </section>
  );
}
