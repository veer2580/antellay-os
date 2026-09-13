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
      <div className="text-center max-w-4xl mx-auto mb-20">
        <span className="font-mono text-xs sm:text-sm tracking-[0.35em] text-cyan-400 uppercase font-semibold border border-cyan-500/30 px-4 py-1 rounded-full bg-cyan-950/40 inline-block mb-4">
          OUR VISION
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-[0.18em] text-white uppercase mb-6 leading-tight">
          A WORLD WHERE INTELLIGENCE MOVES WITH THE MACHINES.
        </h1>
        <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
          We envision a future where autonomous machines, infrastructure and intelligent systems operate as one connected physical ecosystem.
        </p>
      </div>

      {/* 3-Column Founder Feature */}
      <section className="mb-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-4 space-y-6">
          <div className="border-l-2 border-cyan-500/60 pl-5">
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white uppercase mb-2">
              THE WORLD CONNECTED OUR COMPUTERS.
            </h3>
            <h4 className="font-display text-lg sm:text-xl font-bold tracking-wider text-cyan-300 uppercase">
              NOW WE WANT TO CONNECT THE PHYSICAL WORLD.
            </h4>
          </div>

          <div className="space-y-3 font-sans text-sm text-slate-300 leading-relaxed">
            <p>Computers transformed information.</p>
            <p>The internet transformed communication.</p>
            <p>Artificial intelligence is transforming intelligence.</p>
            <p className="pt-2 text-white font-medium">
              The next transformation will be physical:
            </p>
            <p className="text-slate-300">
              Machines, infrastructure, data and intelligence working together as one connected ecosystem.
            </p>
            <p className="font-mono text-xs text-cyan-300 font-bold pt-2 tracking-wider">
              This is where ANTELLAY OS begins.
            </p>
          </div>
        </div>

        {/* Founder Portrait */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center">
          <div className="relative group max-w-[340px] w-full">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-b from-cyan-500/30 to-blue-600/10 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
            <div className="relative rounded-2xl border border-cyan-500/40 bg-[#040816] overflow-hidden shadow-2xl">
              <img
                src="/assets/veer_singh_clean.png"
                alt="Veer Singh - Founder & Vision Architect, Antellay OS"
                className="w-full h-auto object-cover filter brightness-105 contrast-105"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#040816] via-[#040816]/70 to-transparent p-4 text-center">
                <span className="font-display text-sm font-bold text-white tracking-widest block">
                  VEER SINGH
                </span>
                <span className="font-mono text-[10px] text-cyan-400 tracking-wider block">
                  FOUNDER & VISION ARCHITECT
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Quote */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl border border-cyan-500/30 bg-[#040818]/90 backdrop-blur-md shadow-[0_0_30px_rgba(0,229,255,0.1)]">
            <span className="font-mono text-xs text-cyan-400 font-bold tracking-widest uppercase block mb-3">
              THE VISION STATEMENT
            </span>

            <blockquote className="font-sans text-sm sm:text-base text-slate-200 italic leading-relaxed mb-4">
              “My vision is to connect the entire physical world through one intelligent operating layer — like Windows for the physical world.”
            </blockquote>

            <div className="space-y-3 font-sans text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-4">
              <p>I don’t want to build just another machine.</p>
              <p className="text-white font-medium">
                I want to build the layer that connects them.
              </p>
              <p>
                A world where machines, systems and intelligence can communicate, understand their environment, predict what comes next and work together.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-cyan-500/20">
              <p className="font-display text-sm font-bold text-white tracking-widest">
                VEER SINGH
              </p>
              <p className="font-mono text-[10px] text-cyan-400 tracking-wider">
                FOUNDER & VISION ARCHITECT • ANTELLAY OS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: FROM ISOLATED MACHINES TO ONE CONNECTED AUTONOMOUS WORLD */}
      <section className="mb-28 p-8 sm:p-12 rounded-2xl border border-cyan-500/25 bg-[#040816]/80 backdrop-blur-md text-center shadow-[0_0_40px_rgba(0,229,255,0.1)]">
        <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-[0.18em] text-white uppercase mb-6">
          FROM ISOLATED MACHINES TO ONE CONNECTED AUTONOMOUS WORLD.
        </h2>

        <div className="space-y-4 max-w-3xl mx-auto text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
          <p>
            The future will not be defined by a single robot, satellite or autonomous vehicle. It will be defined by how millions of intelligent systems communicate, understand their environment and work together.
          </p>
          <p className="text-cyan-300 font-medium">
            Antellay OS is being built to become the intelligence and orchestration layer connecting that future.
          </p>
        </div>
      </section>

      {/* SECTION: FRAGMENTATION ANALYSIS */}
      <section className="mb-28">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[0.18em] text-white uppercase mb-4">
            THE MACHINES ARE GETTING SMARTER.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto mb-10">
            {machineTypes.map((m) => (
              <span
                key={m}
                className="px-3 py-1.5 rounded-lg border border-slate-800 bg-[#030714] font-mono text-xs text-slate-300 tracking-wider"
              >
                {m}
              </span>
            ))}
          </div>

          <div className="inline-block px-4 py-1.5 rounded-full border border-red-500/30 bg-red-950/20 text-red-400 font-mono text-xs tracking-widest uppercase mb-8">
            BUT THE WORLD IS STILL FRAGMENTED.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {fragmentationIssues.map((frag) => (
            <div
              key={frag.title}
              className="p-5 rounded-xl border border-slate-800/80 bg-[#040816]/70 hover:border-red-500/40 transition-colors"
            >
              <span className="font-mono text-xs text-red-400 font-bold block mb-2">
                {frag.title}
              </span>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {frag.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center p-6 rounded-xl border border-cyan-500/30 bg-cyan-950/20 max-w-md mx-auto">
          <p className="font-mono text-xs text-slate-400 tracking-widest uppercase mb-2">
            WHO CONNECTS THEM?
          </p>
          <p className="font-display text-3xl font-extrabold tracking-[0.25em] text-cyan-300">
            ANTELLAY OS.
          </p>
        </div>
      </section>

      {/* SECTION: 3 VALUE PILLARS */}
      <section className="mb-28">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[0.18em] text-white uppercase">
            CORE VALUE PILLARS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-8 rounded-xl border border-slate-800/90 bg-[#040816]/80 hover:border-cyan-500/40 transition-all flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 rounded-xl border border-cyan-500/30 bg-cyan-950/40 flex items-center justify-center text-cyan-400 mb-5 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-lg font-bold tracking-[0.16em] text-white group-hover:text-cyan-300 transition-colors mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION: STRATEGIC ROADMAP MILESTONES */}
      <section className="p-8 sm:p-12 rounded-2xl border border-cyan-500/30 bg-[#040816]/90 backdrop-blur-md mb-16">
        <div className="text-center mb-12">
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase block mb-2">
            STRATEGIC EVOLUTION
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-[0.18em] text-white uppercase">
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
