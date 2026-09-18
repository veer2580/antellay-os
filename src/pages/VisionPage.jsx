import React from 'react';
import { Link } from 'react-router-dom';
import { Network, Radar, Cpu, Quote, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function VisionPage() {
  const machineTypes = [
    'SATELLITES',
    'DRONES',
    'ROBOTS',
    'AUTONOMOUS VEHICLES',
    'SHIPS',
    'FACTORIES',
    'SENSORS',
    'CITIES',
  ];

  const fragmentationIssues = [
    {
      title: 'DIFFERENT PLATFORMS',
      desc: 'Each system runs on its own isolated platform.',
    },
    {
      title: 'DIFFERENT PROTOCOLS',
      desc: 'Systems cannot speak the same operational language.',
    },
    {
      title: 'DIFFERENT DATA',
      desc: 'Data remains segregated, incompatible and unusable.',
    },
    {
      title: 'DIFFERENT SYSTEMS',
      desc: 'No unified view. No unified control. No unified intelligence.',
    },
  ];

  const pillars = [
    {
      title: 'EVERY MACHINE CONNECTED.',
      icon: Network,
      desc: 'Universal inter-protocol communication bus bridging legacy mechanical hardware and next-generation autonomous robotics.',
    },
    {
      title: 'EVERY SYSTEM AWARE.',
      icon: Radar,
      desc: 'Continuously updated 4D world model providing global situational perception, mutual positioning, and collective hazard avoidance.',
    },
    {
      title: 'EVERY DECISION INTELLIGENT.',
      icon: Cpu,
      desc: 'High-throughput predictive simulations calculating optimal multi-agent coordination vectors prior to physical execution.',
    },
  ];

  const roadmapMilestones = [
    {
      phase: 'PHASE 01',
      title: 'UNIFIED TELEMETRY KERNEL',
      desc: 'Establish multi-domain protocol translation across Air, Land, Sea, and Space machines.',
      status: 'OPERATIONAL',
    },
    {
      phase: 'PHASE 02',
      title: 'DISTRIBUTED 4D WORLD MODEL',
      desc: 'Global contextual environment representation with sub-second asset synchronization.',
      status: 'DEPLOYING',
    },
    {
      phase: 'PHASE 03',
      title: 'PREDICTIVE DECISION ENGINE',
      desc: 'Massive parallel scenario simulation for conflict-free multi-agent autonomous trajectory planning.',
      status: 'IN VALIDATION',
    },
    {
      phase: 'PHASE 04',
      title: 'ZERO-TRUST KINETIC GOVERNANCE',
      desc: 'Cryptographic authorized actuation granting audited command rights to edge systems.',
      status: 'HORIZON',
    },
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-cyan-400 uppercase font-semibold border border-cyan-500/30 px-3.5 py-1 rounded-full bg-cyan-950/40 inline-block mb-3">
          OUR VISION
        </span>
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[0.18em] text-white uppercase mb-4 leading-tight">
          A WORLD WHERE INTELLIGENCE MOVES WITH THE MACHINES.
        </h1>
        <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
          We envision a future where autonomous machines, infrastructure and intelligent systems operate as one connected physical ecosystem.
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative w-full mb-16 overflow-hidden border-y border-cyan-500/20 shadow-[0_0_40px_rgba(0,229,255,0.08)]">
        <img src="/assets/vision_hero.jpg" alt="Antellay OS — Global machine intelligence network" className="w-full h-auto object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 3-Column Founder Feature */}
      <section className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-4 space-y-5">
          <div className="border-l-2 border-cyan-500/60 pl-4">
            <h3 className="font-display text-base sm:text-lg font-bold tracking-wider text-white uppercase mb-1.5">
              THE WORLD CONNECTED OUR COMPUTERS.
            </h3>
            <h4 className="font-display text-sm sm:text-base font-bold tracking-wider text-cyan-300 uppercase">
              NOW WE WANT TO CONNECT THE PHYSICAL WORLD.
            </h4>
          </div>

          <div className="space-y-2.5 font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
            <p>Computers transformed information.</p>
            <p>The internet transformed communication.</p>
            <p>Artificial intelligence is transforming intelligence.</p>
            <p className="pt-1.5 text-white font-medium">
              The next transformation will be physical:
            </p>
            <p className="text-slate-300">
              Machines, infrastructure, data and intelligence working together as one connected ecosystem.
            </p>
            <p className="font-mono text-[11px] sm:text-xs text-cyan-300 font-bold pt-1.5 tracking-wider">
              This is where ANTELLAY OS begins.
            </p>
          </div>
        </div>

        {/* Founder Portrait */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center">
          <div className="relative group max-w-[320px] w-full">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-b from-cyan-500/30 to-blue-600/10 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
            <div className="relative rounded-2xl border border-cyan-500/40 bg-[#040816] overflow-hidden shadow-2xl">
              <img
                src="/assets/veer_singh_clean.png"
                alt="Veer Singh - Founder & Vision Architect, Antellay OS"
                className="w-full h-auto object-cover filter brightness-105 contrast-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Founder Bio Details */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-5 rounded-xl border border-cyan-500/30 bg-[#040816]/90 backdrop-blur-md">
            <span className="font-mono text-[10px] text-cyan-400 font-bold tracking-widest uppercase block mb-1">
              FOUNDER PROFILE
            </span>
            <h3 className="font-display text-base sm:text-lg font-bold tracking-wider text-white">
              VEER SINGH
            </h3>
            <p className="font-mono text-[11px] text-slate-400 mb-2.5">
              Founder &amp; Vision Architect, Antellay OS
            </p>
            <p className="font-sans text-xs text-slate-300 leading-relaxed">
              Leading the architectural design and strategic mission to build the universal intelligence layer for autonomous systems worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: FROM ISOLATED MACHINES TO ONE CONNECTED AUTONOMOUS WORLD */}
      <section className="mb-20 p-6 sm:p-10 rounded-2xl border border-cyan-500/25 bg-[#040816]/80 backdrop-blur-md text-center shadow-[0_0_35px_rgba(0,229,255,0.08)]">
        <h2 className="font-display text-lg sm:text-xl md:text-2xl font-extrabold tracking-[0.18em] text-white uppercase mb-4">
          FROM ISOLATED MACHINES TO ONE CONNECTED AUTONOMOUS WORLD.
        </h2>

        <div className="space-y-3 max-w-2xl mx-auto text-slate-300 font-sans text-xs sm:text-sm leading-relaxed">
          <p>
            The future will not be defined by a single robot, satellite or autonomous vehicle. It will be defined by how millions of intelligent systems communicate, understand their environment and work together.
          </p>
          <p className="text-cyan-300 font-medium">
            Antellay OS is being built to become the intelligence and orchestration layer connecting that future.
          </p>
        </div>
      </section>

      {/* SECTION: FRAGMENTATION ANALYSIS */}
      <section className="mb-20">
        <div className="text-center mb-8">
          <h2 className="font-display text-lg sm:text-xl md:text-2xl font-bold tracking-[0.18em] text-white uppercase mb-3">
            THE MACHINES ARE GETTING SMARTER.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto mb-6">
            {machineTypes.map((m) => (
              <span
                key={m}
                className="px-2.5 py-1 rounded-lg border border-slate-800 bg-[#030714] font-mono text-[11px] text-slate-300 tracking-wider"
              >
                {m}
              </span>
            ))}
          </div>

          <div className="inline-block px-3.5 py-1 rounded-full border border-red-500/30 bg-red-950/20 text-red-400 font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-6">
            BUT THE WORLD IS STILL FRAGMENTED.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {fragmentationIssues.map((frag) => (
            <div
              key={frag.title}
              className="p-4 rounded-xl border border-slate-800/80 bg-[#040816]/70 hover:border-red-500/40 transition-colors"
            >
              <span className="font-mono text-[11px] text-red-400 font-bold block mb-1.5">
                {frag.title}
              </span>
              <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                {frag.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center p-5 rounded-xl border border-cyan-500/30 bg-cyan-950/20 max-w-xs mx-auto">
          <p className="font-mono text-[10px] text-slate-400 tracking-widest uppercase mb-1">
            WHO CONNECTS THEM?
          </p>
          <p className="font-display text-xl sm:text-2xl font-extrabold tracking-[0.22em] text-cyan-300">
            ANTELLAY OS.
          </p>
        </div>
      </section>

      {/* SECTION: 3 VALUE PILLARS */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="font-display text-xl sm:text-2xl font-extrabold tracking-[0.18em] text-white uppercase">
            CORE VALUE PILLARS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 sm:p-7 rounded-xl border border-slate-800/90 bg-[#040816]/80 hover:border-cyan-500/40 transition-all flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-xl border border-cyan-500/30 bg-cyan-950/40 flex items-center justify-center text-cyan-400 mb-4 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold tracking-[0.15em] text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION: STRATEGIC ROADMAP MILESTONES */}
      <section className="p-6 sm:p-10 rounded-2xl border border-cyan-500/30 bg-[#040816]/90 backdrop-blur-md mb-16">
        <div className="text-center mb-10">
          <span className="font-mono text-[10px] sm:text-xs text-cyan-400 tracking-widest uppercase block mb-1.5">
            STRATEGIC EVOLUTION
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-extrabold tracking-[0.18em] text-white uppercase">
            AUTONOMOUS INTEGRATION ROADMAP
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapMilestones.map((m) => (
            <div key={m.phase} className="p-5 rounded-xl border border-slate-800 bg-[#02050f] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-cyan-400 font-bold">{m.phase}</span>
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-cyan-950/50 border border-cyan-500/30 text-cyan-300">
                    {m.status}
                  </span>
                </div>
                <h4 className="font-display text-sm font-bold text-white tracking-wider mb-2">
                  {m.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Next Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-slate-800">
        <Link to="/about" className="font-display text-xs tracking-widest text-slate-400 hover:text-white transition-colors">
          ← BACK TO ABOUT
        </Link>
        <Link to="/mission" className="font-display text-xs tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2">
          <span>EXPLORE OUR MISSION</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
