import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Shield, Layers, Eye, Cpu, Compass, Globe, Sparkles } from 'lucide-react';

export default function HomePage() {
  const narrativePillars = [
    { title: 'SIGNALS.', desc: 'Multi-domain dimensional telemetry emission.' },
    { title: 'PATTERNS.', desc: 'Structural convergence across disparate machines.' },
    { title: 'INTELLIGENCE.', desc: 'Autonomous situational models and world simulation.' },
    { title: 'POSSIBILITY.', desc: 'Dynamic parallel scenario extrapolation.' },
    { title: 'WHAT’S NEXT?', desc: 'Predictive velocity and authorized orchestration.' },
  ];

  const gatewaySections = [
    {
      title: 'ABOUT ANTELLAY OS',
      sub: 'ONE OS. FOUR DOMAINS.',
      desc: 'Connects Air, Land, Sea, and Space into a unified autonomous operational fabric. The software layer connecting physical machines.',
      link: '/about',
      badge: 'DOMAINS & DATA PIPELINE',
      icon: Compass,
      gradient: 'from-cyan-500/20 via-blue-900/10 to-transparent',
    },
    {
      title: 'OUR VISION',
      sub: 'INTELLIGENCE MOVES WITH MACHINES',
      desc: 'From isolated machines to one connected autonomous world. Featuring Founder & Vision Architect Veer Singh’s architectural manifesto.',
      link: '/vision',
      badge: 'FOUNDER & PURPOSE',
      icon: Eye,
      gradient: 'from-blue-500/20 via-indigo-900/10 to-transparent',
    },
    {
      title: 'OUR MISSION',
      sub: 'THE AUTONOMOUS WORLD OPERATING LAYER',
      desc: '01 CONNECT, 02 UNDERSTAND, 03 ACT. Turning fragmented hardware into one synchronized global ecosystem.',
      link: '/mission',
      badge: '7-STAGE MISSION FLOW',
      icon: Shield,
      gradient: 'from-emerald-500/20 via-cyan-900/10 to-transparent',
    },
    {
      title: 'SYSTEM ARCHITECTURE',
      sub: 'MILLIONS OF MACHINES WORKING TOGETHER',
      desc: 'Comprehensive 7-Layer enterprise operating stack, the Core Intelligence Loop, and 12-point heterogeneous integration matrix.',
      link: '/architecture',
      badge: 'ENTERPRISE STACK',
      icon: Layers,
      gradient: 'from-cyan-500/20 via-sky-900/10 to-transparent',
    },
    {
      title: 'FUTUHR & WHNxT.TODAY',
      sub: 'FUTURE PREDICTIVE INTELLIGENCE',
      desc: 'Explore real-time signal analysis, global HUD telemetry, and parallel future probability simulations.',
      link: '/futuhr',
      badge: 'PREDICTIVE HUD',
      icon: Cpu,
      gradient: 'from-purple-500/20 via-cyan-900/10 to-transparent',
    },
    {
      title: 'GET IN TOUCH',
      sub: 'START A CONVERSATION',
      desc: 'Connect directly with Veer Singh & Antellay OS leadership, or schedule a private executive technical consultation.',
      link: '/contact',
      badge: 'COLLABORATE & BUILD',
      icon: Globe,
      gradient: 'from-cyan-500/20 via-blue-900/10 to-transparent',
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex flex-col justify-between items-center text-center pt-32 pb-16 px-4">
        {/* Top Brand Mark */}
        <div className="relative z-10 pt-4">
          <div className="inline-flex items-center gap-2 font-display text-base md:text-xl font-light tracking-[0.4em] text-white/90 uppercase hover:text-cyan-300 transition-colors">
            <span>x</span>
            <span className="font-mono text-cyan-400 font-bold">T</span>
            <span>.</span>
            <span className="font-mono text-cyan-400 font-bold">T</span>
          </div>
        </div>

        {/* Central Brand Emblem & Action */}
        <div className="relative z-10 flex flex-col items-center justify-center my-auto py-8">
          <div className="relative mb-6 group cursor-pointer">
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl group-hover:bg-cyan-400/40 transition-all duration-500" />
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl border border-cyan-500/40 bg-[#040814]/70 backdrop-blur-md flex items-center justify-center shadow-[0_0_40px_rgba(0,229,255,0.3)] group-hover:border-cyan-300 transition-all duration-500">
              <svg
                viewBox="0 0 40 40"
                className="w-12 h-12 md:w-16 md:h-16 fill-none stroke-white stroke-[2] drop-shadow-[0_0_15px_rgba(0,229,255,0.8)]"
              >
                <polygon points="20,4 36,36 20,28 4,36" fill="rgba(0,229,255,0.18)" />
              </svg>
            </div>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-[0.22em] text-white uppercase drop-shadow-[0_0_35px_rgba(255,255,255,0.3)] mb-4">
            ANTELLAY OS
          </h1>

          <p className="font-mono text-xs sm:text-sm tracking-[0.35em] text-cyan-300 uppercase max-w-xl mb-10">
            THE OPERATING SYSTEM FOR THE AUTONOMOUS WORLD
          </p>

          <Link
            to="/about"
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-sm border border-cyan-500/50 bg-[#050b18]/80 hover:bg-cyan-950/80 text-slate-100 font-display tracking-[0.25em] text-xs sm:text-sm uppercase transition-all duration-300 hover:border-cyan-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] backdrop-blur-md"
          >
            <span>ENTER THE FUTURE</span>
            <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1.5 transition-transform" />
            <span className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>

        {/* Live Orbit Status Ribbon */}
        <div className="relative z-10 w-full max-w-4xl flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-slate-400 px-6 py-3 rounded-xl border border-cyan-500/20 bg-[#030612]/70 backdrop-blur-md">
          <div className="flex items-center gap-2 text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>GLOBAL KINETIC MESH</span>
          </div>
          <div>CORE: <strong className="text-white font-bold">ACTIVE</strong></div>
          <div>DOMAINS: <strong className="text-white font-bold">AIR • LAND • SEA • SPACE</strong></div>
          <div className="text-cyan-400">STATUS: SYNCHRONIZED</div>
        </div>
      </section>

      {/* Narrative Progression Strip */}
      <section className="relative z-10 py-16 px-4 border-y border-cyan-900/30 bg-[#020408]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {narrativePillars.map((item, idx) => (
              <div
                key={item.title}
                className="p-4 rounded-lg border border-slate-800/80 bg-[#030714]/80 hover:border-cyan-500/40 transition-colors"
              >
                <span className="font-mono text-[10px] text-cyan-400 font-bold block mb-1">
                  STAGE 0{idx + 1}
                </span>
                <h3 className="font-display text-base font-bold tracking-wider text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gateway Portal Cards Section: Direct individual page access */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-cyan-400 tracking-[0.3em] uppercase font-semibold border border-cyan-500/30 px-4 py-1 rounded-full bg-cyan-950/40 inline-block mb-4">
            SYSTEM ARCHITECTURE & EXPLORATION
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-[0.18em] text-white uppercase">
            EXPLORE THE ECOSYSTEM
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-4">
            Select a dedicated domain below to inspect detailed architecture, telemetry pipelines, mission flows, and strategic vision.
          </p>
        </div>

        {/* 6 Gateway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gatewaySections.map((sec) => {
            const IconComponent = sec.icon;
            return (
              <Link
                key={sec.title}
                to={sec.link}
                className="group relative rounded-2xl border border-slate-800 bg-[#040816]/80 p-8 flex flex-col justify-between hover:border-cyan-400/60 hover:bg-[#061228] hover:shadow-[0_0_35px_rgba(0,229,255,0.2)] transition-all duration-300 overflow-hidden"
              >
                {/* Subtle gradient glow */}
                <div className={`absolute -right-12 -top-12 w-44 h-44 rounded-full bg-gradient-to-br ${sec.gradient} blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none`} />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase border border-cyan-500/30 px-2 py-0.5 rounded bg-cyan-950/40">
                      {sec.badge}
                    </span>
                    <div className="w-10 h-10 rounded-lg border border-cyan-500/30 bg-cyan-950/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold tracking-[0.16em] text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {sec.title}
                  </h3>
                  <p className="font-mono text-xs text-cyan-400/90 font-medium tracking-wide mb-3">
                    {sec.sub}
                  </p>
                  <p className="text-sm text-slate-300 font-sans leading-relaxed">
                    {sec.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between font-display text-xs tracking-widest text-cyan-300 group-hover:text-white transition-colors">
                  <span>ENTER SECTION</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Monumental Closing Vision Callout */}
      <section className="relative z-10 py-24 px-4 text-center border-t border-cyan-900/30 bg-gradient-to-b from-transparent to-[#020408]">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="font-mono text-xs sm:text-sm tracking-[0.35em] text-cyan-400 uppercase">
            AIR • LAND • SEA • SPACE
          </p>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-[0.18em] text-white uppercase drop-shadow-[0_0_30px_rgba(0,229,255,0.3)]">
            ONE INTELLIGENCE LAYER.
          </h2>
          <p className="font-display text-base sm:text-xl tracking-[0.25em] text-slate-300 uppercase">
            THE AUTONOMOUS WORLD IS COMING. ANTELLAY OS IS BEING BUILT TO POWER IT.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link
              to="/architecture"
              className="px-6 py-3 rounded border border-cyan-500/50 bg-cyan-950/40 hover:bg-cyan-500/20 text-white font-display text-xs tracking-widest uppercase transition-all"
            >
              VIEW ARCHITECTURE
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded border border-slate-700 bg-slate-900/40 hover:bg-slate-800 text-slate-200 font-display text-xs tracking-widest uppercase transition-all"
            >
              START A CONVERSATION
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
