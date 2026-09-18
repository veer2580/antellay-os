import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Shield, Layers, Eye, Cpu, Compass, Globe, Sparkles, Lock, Unlock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function HomePage() {
  const { isAuthenticated } = useAuth();

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
      locked: true,
      gradient: 'from-cyan-500/20 via-blue-900/10 to-transparent',
    },
    {
      title: 'OUR VISION',
      sub: 'INTELLIGENCE MOVES WITH MACHINES',
      desc: 'From isolated machines to one connected autonomous world. Featuring Founder & Vision Architect Veer Singh’s architectural manifesto.',
      link: '/vision',
      badge: 'FOUNDER & PURPOSE',
      icon: Eye,
      locked: true,
      gradient: 'from-blue-500/20 via-indigo-900/10 to-transparent',
    },
    {
      title: 'OUR MISSION',
      sub: 'THE AUTONOMOUS WORLD OPERATING LAYER',
      desc: '01 CONNECT, 02 UNDERSTAND, 03 ACT. Turning fragmented hardware into one synchronized global ecosystem.',
      link: '/mission',
      badge: '7-STAGE MISSION FLOW',
      icon: Shield,
      locked: true,
      gradient: 'from-emerald-500/20 via-cyan-900/10 to-transparent',
    },
    {
      title: 'SYSTEM ARCHITECTURE',
      sub: 'MILLIONS OF MACHINES WORKING TOGETHER',
      desc: 'Comprehensive 7-Layer enterprise operating stack, the Core Intelligence Loop, and 12-point heterogeneous integration matrix.',
      link: '/architecture',
      badge: 'ENTERPRISE STACK',
      icon: Layers,
      locked: true,
      gradient: 'from-cyan-500/20 via-sky-900/10 to-transparent',
    },
    {
      title: 'FUTUHR & WHNxT.TODAY',
      sub: 'FUTURE PREDICTIVE INTELLIGENCE',
      desc: 'Explore real-time signal analysis, global HUD telemetry, and parallel future probability simulations.',
      link: '/futuhr',
      badge: 'PREDICTIVE HUD',
      icon: Cpu,
      locked: true,
      gradient: 'from-purple-500/20 via-cyan-900/10 to-transparent',
    },
    {
      title: 'GET IN TOUCH',
      sub: 'START A CONVERSATION',
      desc: 'Connect directly with Veer Singh & Antellay OS leadership, or schedule a private executive technical consultation.',
      link: '/contact',
      badge: 'COLLABORATE & BUILD',
      icon: Globe,
      locked: false,
      gradient: 'from-cyan-500/20 via-blue-900/10 to-transparent',
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex flex-col justify-between items-center text-center pt-32 pb-16 px-4">
        {/* Central Brand Action */}
        <div className="relative z-10 flex flex-col items-center justify-center my-auto py-8">

          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-[0.22em] text-white uppercase drop-shadow-[0_0_25px_rgba(255,255,255,0.25)] mb-3">
            ANTELLAY OS
          </h1>

          <p className="font-mono text-[11px] sm:text-xs tracking-[0.3em] text-cyan-300 uppercase max-w-xl">
            THE OPERATING SYSTEM FOR THE AUTONOMOUS WORLD
          </p>
        </div>

        {/* Live Orbit Status Ribbon */}
        <div className="relative z-10 w-full max-w-4xl flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] sm:text-[11px] text-slate-400 px-6 py-2.5 rounded-xl border border-cyan-500/20 bg-[#030612]/70 backdrop-blur-md">
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
                <h3 className="font-display text-sm font-bold tracking-wider text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-400 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Orbit Intelligence Visual Showcase Banner */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 pt-16">
        <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_40px_rgba(0,229,255,0.12)] group">
          <img
            src="/assets/contact_hero.jpg"
            alt="Antellay OS — Global Orbital Intelligence & Space Communication Hub"
            className="w-full h-[320px] sm:h-[400px] md:h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/30 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-[10px] text-cyan-400 tracking-[0.25em] uppercase block mb-1">
                AUTONOMOUS ORBITAL FABRIC
              </span>
              <h3 className="font-display text-base sm:text-lg font-bold tracking-wider text-white uppercase">
                SPACE INTELLIGENCE & TELEMETRY RELAY
              </h3>
              <p className="font-sans text-xs text-slate-300 max-w-lg mt-1 hidden sm:block">
                Interconnecting planetary nodes, autonomous drone constellations, and edge robotics across 550km LEO orbits.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-300 bg-cyan-950/80 border border-cyan-500/40 px-3 py-1 rounded-full backdrop-blur-md self-start sm:self-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>LEO SATELLITE MESH • ACTIVE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gateway Portal Cards Section: Direct individual page access */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-mono text-[10px] sm:text-xs text-cyan-400 tracking-[0.3em] uppercase font-semibold border border-cyan-500/30 px-3.5 py-1 rounded-full bg-cyan-950/40 inline-block mb-3">
            SYSTEM ARCHITECTURE & EXPLORATION
          </span>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold tracking-[0.18em] text-white uppercase">
            EXPLORE THE ECOSYSTEM
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mt-3">
            Select a dedicated domain below to inspect detailed architecture, telemetry pipelines, mission flows, and strategic vision.
          </p>
        </div>

        {/* 6 Gateway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gatewaySections.map((sec) => {
            const IconComponent = sec.icon;
            const isCardLocked = sec.locked && !isAuthenticated;

            return (
              <Link
                key={sec.title}
                to={sec.link}
                className={`group relative rounded-2xl border bg-[#040816]/80 p-6 sm:p-7 flex flex-col justify-between hover:bg-[#061228] transition-all duration-300 overflow-hidden ${
                  isCardLocked
                    ? 'border-amber-500/30 hover:border-amber-400/60 hover:shadow-[0_0_35px_rgba(245,158,11,0.2)]'
                    : 'border-slate-800 hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(0,229,255,0.2)]'
                }`}
              >
                {/* Subtle gradient glow */}
                <div className={`absolute -right-12 -top-12 w-44 h-44 rounded-full bg-gradient-to-br ${sec.gradient} blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none`} />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-[9px] sm:text-[10px] text-cyan-400 tracking-widest uppercase border border-cyan-500/30 px-2 py-0.5 rounded bg-cyan-950/40">
                      {sec.badge}
                    </span>
                    <div className={`w-9 h-9 rounded-lg border flex items-center justify-center transition-all ${
                      isCardLocked
                        ? 'border-amber-500/40 bg-amber-950/40 text-amber-400 group-hover:border-amber-300'
                        : 'border-cyan-500/30 bg-cyan-950/40 text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.4)]'
                    }`}>
                      {isCardLocked ? <Lock className="w-4 h-4 text-amber-300" /> : <IconComponent className="w-4 h-4" />}
                    </div>
                  </div>

                  <h3 className="font-display text-base sm:text-lg font-bold tracking-[0.15em] text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                    {sec.title}
                  </h3>
                  <p className="font-mono text-[11px] text-cyan-400/90 font-medium tracking-wide mb-2.5">
                    {sec.sub}
                  </p>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {sec.desc}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between font-display text-[11px] tracking-widest transition-colors">
                  {isCardLocked ? (
                    <>
                      <span className="inline-flex items-center gap-1.5 text-amber-400 group-hover:text-amber-300">
                        <Lock className="w-3 h-3" />
                        <span>AUTHENTICATE TO UNLOCK</span>
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                    </>
                  ) : (
                    <>
                      <span className="text-cyan-300 group-hover:text-white">ENTER SECTION</span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Monumental Closing Vision Callout */}
      <section className="relative z-10 py-20 px-4 text-center border-t border-cyan-900/30 bg-gradient-to-b from-transparent to-[#020408]">
        <div className="max-w-4xl mx-auto space-y-5">
          <p className="font-mono text-[11px] sm:text-xs tracking-[0.3em] text-cyan-400 uppercase">
            AIR • LAND • SEA • SPACE
          </p>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold tracking-[0.18em] text-white uppercase drop-shadow-[0_0_25px_rgba(0,229,255,0.3)]">
            ONE INTELLIGENCE LAYER.
          </h2>
          <p className="font-display text-xs sm:text-sm md:text-base tracking-[0.2em] text-slate-300 uppercase">
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
