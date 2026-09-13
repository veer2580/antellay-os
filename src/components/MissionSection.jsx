import React from 'react';
import { Radio, Eye, CheckCircle2, Bot, Database, Cpu, TrendingUp, Target, ShieldCheck, ChevronRight } from 'lucide-react';

export default function MissionSection() {
  const missionCards = [
    {
      num: '01',
      title: 'CONNECT',
      desc: 'Bring machines, sensors, data and operational systems together through modern APIs, integrations and intelligent infrastructure.',
      icon: Radio,
      tag: 'INTEROPERABILITY BUS',
    },
    {
      num: '02',
      title: 'UNDERSTAND',
      desc: 'Build a unified understanding of the physical world using data, context, AI and world models.',
      icon: Eye,
      tag: 'SPATIOTEMPORAL WORLD MODEL',
    },
    {
      num: '03',
      title: 'ACT',
      desc: 'Transform intelligence into predictions, simulations, decisions and authorized actions.',
      icon: CheckCircle2,
      tag: 'CRYPTOGRAPHIC ZERO-TRUST',
    },
  ];

  const missionFlowSteps = [
    { name: 'MACHINES', icon: Bot, desc: 'Hardware & Actuators' },
    { name: 'DATA', icon: Database, desc: 'Telemetry & Feeds' },
    { name: 'ANTELLAY OS', icon: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-cyan-400 stroke-white stroke-1">
        <polygon points="12,2 22,22 12,17 2,22" />
      </svg>
    ), desc: 'Core Intelligence Layer' },
    { name: 'INTELLIGENCE', icon: Cpu, desc: 'Neural World Model' },
    { name: 'PREDICTION', icon: TrendingUp, desc: 'Trajectory Simulation' },
    { name: 'DECISION', icon: Target, desc: 'Constraint Optimization' },
    { name: 'AUTHORIZED ACTION', icon: ShieldCheck, desc: 'Policy-Governed Control' },
  ];

  return (
    <section id="mission" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#020408] border-b border-cyan-900/30 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20 telemetry-grid" />

      {/* Top Header & Mission Statement (Page 6) */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-20">
        <span className="font-mono text-xs sm:text-sm tracking-[0.35em] text-cyan-400 uppercase font-semibold border border-cyan-500/30 px-3.5 py-1 rounded-full bg-cyan-950/40 mb-6 inline-block">
          OUR MISSION
        </span>

        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-[0.18em] text-white uppercase mt-4 mb-6 leading-tight">
          BUILDING THE INTELLIGENCE LAYER FOR AN AUTONOMOUS WORLD.
        </h2>

        <p className="font-sans text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Our mission is to connect machines, systems and intelligence across the physical world — enabling them to understand, predict and operate together.
        </p>

        {/* Tactical Sub-Labels around Mission */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 font-mono text-xs text-slate-400">
          <span className="px-3 py-1 rounded bg-[#050b18] border border-cyan-500/20 text-cyan-300">SPACE</span>
          <span className="px-3 py-1 rounded bg-[#050b18] border border-cyan-500/20 text-cyan-300">AIR</span>
          <span className="px-3 py-1 rounded bg-[#050b18] border border-cyan-500/20 text-cyan-300">LAND</span>
          <span className="px-3 py-1 rounded bg-[#050b18] border border-cyan-500/20 text-cyan-300">SEA</span>
          <span className="px-3 py-1 rounded bg-[#050b18] border border-slate-800">LOGISTICS • INDUSTRIAL SYSTEMS</span>
          <span className="px-3 py-1 rounded bg-[#050b18] border border-slate-800">RADAR • SENSORS • GIS</span>
        </div>
      </div>

      {/* Section 2: Turning Fragmented Systems into One Intelligent Ecosystem (Page 6) */}
      <div className="relative z-10 max-w-4xl mx-auto mb-20 p-8 sm:p-12 rounded-2xl border border-cyan-500/25 bg-[#040816]/80 backdrop-blur-md text-center shadow-[0_0_40px_rgba(0,229,255,0.1)]">
        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[0.18em] text-white uppercase mb-6">
          TURNING FRAGMENTED SYSTEMS INTO ONE INTELLIGENT ECOSYSTEM.
        </h3>

        <div className="space-y-4 max-w-2xl mx-auto text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
          <p>
            Today, machines often operate inside isolated platforms, protocols and systems.
          </p>
          <p className="text-cyan-300 font-medium">
            Antellay OS aims to provide a common intelligence and orchestration layer that allows different autonomous systems to connect, share context and make better decisions.
          </p>
        </div>
      </div>

      {/* Section 3: 3 Mission Capability Cards (01 CONNECT, 02 UNDERSTAND, 03 ACT) (Page 6) */}
      <div className="relative z-10 max-w-6xl mx-auto mb-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        {missionCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.num}
              className="group rounded-xl border border-slate-800 bg-[#040916]/80 p-8 hover:border-cyan-400/60 hover:bg-[#06122a] hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-3xl font-extrabold text-cyan-400/90 group-hover:text-cyan-300 transition-colors">
                    {card.num}
                  </span>
                  <div className="w-10 h-10 rounded-lg border border-cyan-500/30 bg-cyan-950/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase block mb-2">
                  {card.tag}
                </span>

                <h4 className="font-display text-2xl font-bold tracking-[0.18em] text-white group-hover:text-cyan-300 transition-colors mb-4">
                  {card.title}
                </h4>

                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center gap-2 font-mono text-[11px] text-cyan-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>ACTIVE CAPABILITY</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Section 4: INTELLIGENCE WITHOUT BORDERS (Page 6) */}
      <div className="relative z-10 max-w-6xl mx-auto mb-28">
        <div className="text-center mb-10">
          <h3 className="font-display text-2xl sm:text-4xl font-extrabold tracking-[0.2em] text-white uppercase">
            INTELLIGENCE WITHOUT BORDERS.
          </h3>
          <p className="font-mono text-xs text-slate-400 tracking-widest uppercase mt-2">
            CROSS-DOMAIN AUTONOMOUS ORCHESTRATION
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'AIR', sub: 'Autonomous Flight', img: '/assets/domain_air.png' },
            { name: 'LAND', sub: 'Robotics & Infrastructure', img: '/assets/domain_land.png' },
            { name: 'SEA', sub: 'Maritime Systems', img: '/assets/domain_sea.png' },
            { name: 'SPACE', sub: 'Satellite & Mission Systems', img: '/assets/domain_space.png' },
          ].map((item) => (
            <div
              key={item.name}
              className="rounded-xl border border-slate-800 bg-[#040816] overflow-hidden hover:border-cyan-400/50 transition-all group"
            >
              <div className="h-36 overflow-hidden relative">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040816] to-transparent" />
              </div>
              <div className="p-4 text-center">
                <span className="font-display text-lg font-bold tracking-widest text-white block">
                  {item.name}
                </span>
                <span className="font-mono text-xs text-cyan-400/90 block mt-1">
                  {item.sub}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Convergence Box */}
        <div className="flex flex-col items-center mt-6">
          <div className="h-6 w-[1px] bg-cyan-400" />
          <div className="px-8 py-2.5 rounded-lg border border-cyan-400/70 bg-[#040c1e] text-cyan-300 font-display text-sm tracking-[0.25em] font-bold shadow-[0_0_20px_rgba(0,229,255,0.3)]">
            ANTELLAY OS
          </div>
        </div>
      </div>

      {/* Section 5: OUR MISSION FLOW (7-Stage Pipeline from Page 6) */}
      <div className="relative z-10 max-w-6xl mx-auto pt-10 border-t border-slate-800">
        <div className="text-center mb-12">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-[0.2em] text-white uppercase mb-2">
            OUR MISSION FLOW
          </h3>
          <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            END-TO-END AUTONOMOUS CYCLE
          </p>
        </div>

        {/* 7 Horizontal Connected Step Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {missionFlowSteps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.name}
                className="rounded-xl border border-slate-800 bg-[#030714] p-4 text-center hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all flex flex-col items-center justify-between"
              >
                <div className="w-10 h-10 rounded-full border border-cyan-500/30 bg-cyan-950/40 flex items-center justify-center text-cyan-400 mb-3">
                  <IconComponent className="w-5 h-5" />
                </div>

                <div>
                  <span className="font-mono text-[9px] text-cyan-400/80 block mb-1">
                    0{idx + 1}
                  </span>
                  <span className="font-display text-xs font-bold tracking-wider text-white block">
                    {step.name}
                  </span>
                  <span className="font-sans text-[10px] text-slate-400 block mt-1">
                    {step.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
