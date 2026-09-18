import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Radio, Eye, CheckCircle2, Bot, Database, Cpu, TrendingUp, Target, ShieldCheck, ArrowRight, Play, Check } from 'lucide-react';

export default function MissionPage() {
  const [activeFlowStep, setActiveFlowStep] = useState(2); // Antellay OS active by default

  const missionCapabilities = [
    {
      num: '01',
      title: 'CONNECT',
      desc: 'Bring machines, sensors, data and operational systems together through modern APIs, integrations and intelligent infrastructure.',
      icon: Radio,
      tag: 'INTEROPERABILITY FABRIC',
      protocols: ['REST & gRPC APIs', 'Edge Telemetry Queues', 'Industrial Fieldbuses', 'Satellite Optical Interlinks'],
    },
    {
      num: '02',
      title: 'UNDERSTAND',
      desc: 'Build a unified understanding of the physical world using data, context, AI and world models.',
      icon: Eye,
      tag: '4D SPATIOTEMPORAL MODEL',
      protocols: ['Geospatial Coordinate Fusion', 'Object State Classification', 'Dynamic Weather & Hazard Layers', 'Kinetic Trajectory Inference'],
    },
    {
      num: '03',
      title: 'ACT',
      desc: 'Transform intelligence into predictions, simulations, decisions and authorized actions.',
      icon: CheckCircle2,
      tag: 'ZERO-TRUST KINETIC CONTROL',
      protocols: ['Policy Enclave Authorization', 'Cryptographic Action Signatures', 'Human-in-the-Loop Override', 'Deterministic Edge Command'],
    },
  ];

  const missionFlowSteps = [
    {
      id: 0,
      name: 'MACHINES',
      icon: Bot,
      short: 'Physical Actuators',
      desc: 'Heterogeneous robotics, drones, rovers, naval vessels, and orbital satellites emitting telemetry.',
    },
    {
      id: 1,
      name: 'DATA',
      icon: Database,
      short: 'Streaming Ingestion',
      desc: 'High-throughput raw telemetry buffers, radar point-clouds, optical feeds, and sensory metrics.',
    },
    {
      id: 2,
      name: 'ANTELLAY OS',
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-cyan-400 stroke-white stroke-1">
          <polygon points="12,2 22,22 12,17 2,22" />
        </svg>
      ),
      short: 'Core Intelligence Layer',
      desc: 'The central orchestration kernel synchronizing multi-domain telemetry and protocol translation.',
    },
    {
      id: 3,
      name: 'INTELLIGENCE',
      icon: Cpu,
      short: 'World Understanding',
      desc: 'Deep neural networks converting spatiotemporal observations into living situational awareness.',
    },
    {
      id: 4,
      name: 'PREDICTION',
      icon: TrendingUp,
      short: 'State Simulation',
      desc: 'Anticipatory trajectory calculation and hazard forecasting across multi-agent environments.',
    },
    {
      id: 5,
      name: 'DECISION',
      icon: Target,
      short: 'Optimization Matrix',
      desc: 'Algorithmic conflict resolution, mission routing, and optimal multi-domain resource allocation.',
    },
    {
      id: 6,
      name: 'AUTHORIZED ACTION',
      icon: ShieldCheck,
      short: 'Cryptographic Actuation',
      desc: 'Strict zero-trust permission verification allowing machines to safely execute authorized motion.',
    },
  ];

  const missionScenarios = [
    {
      title: 'Autonomous Port & Maritime Intermodal Transit',
      domain: 'SEA + LAND',
      impact: 'Zero-idle container offloading via autonomous container vessels, cranes, and electric haulers.',
    },
    {
      title: 'Urban Emergency Medical Drone Corridors',
      domain: 'AIR',
      impact: 'Automated deconfliction of priority medical eVTOL flights through crowded metropolitan airspaces.',
    },
    {
      title: 'Resilient Earth Observation Constellation Sync',
      domain: 'SPACE',
      impact: 'Dynamic cross-satellite retasking to monitor environmental events within 90 seconds of detection.',
    },
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-cyan-400 uppercase font-semibold border border-cyan-500/30 px-3.5 py-1 rounded-full bg-cyan-950/40 inline-block mb-3">
          OUR MISSION
        </span>
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[0.18em] text-white uppercase mb-4 leading-tight">
          BUILDING THE INTELLIGENCE LAYER FOR AN AUTONOMOUS WORLD.
        </h1>
        <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Our mission is to connect machines, systems and intelligence across the physical world — enabling them to understand, predict and operate together.
        </p>

        {/* Tactical Domain Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6 font-mono text-[11px] text-slate-300">
          <span className="px-2.5 py-0.5 rounded bg-[#040916] border border-cyan-500/30 text-cyan-300">SPACE</span>
          <span className="px-2.5 py-0.5 rounded bg-[#040916] border border-cyan-500/30 text-cyan-300">AIR</span>
          <span className="px-2.5 py-0.5 rounded bg-[#040916] border border-cyan-500/30 text-cyan-300">LAND</span>
          <span className="px-2.5 py-0.5 rounded bg-[#040916] border border-cyan-500/30 text-cyan-300">SEA</span>
          <span className="px-2.5 py-0.5 rounded bg-[#040916] border border-slate-800">LOGISTICS • INDUSTRIAL SYSTEMS</span>
          <span className="px-2.5 py-0.5 rounded bg-[#040916] border border-slate-800">RADAR • SENSORS • GIS</span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative w-full mb-16 overflow-hidden border-y border-cyan-500/20 shadow-[0_0_40px_rgba(0,229,255,0.08)]">
        <img src="/assets/mission_hero.jpg" alt="Antellay OS — Mission control center" className="w-full h-auto object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent pointer-events-none" />
      </div>

      {/* SECTION: TURNING FRAGMENTED SYSTEMS INTO ONE INTELLIGENT ECOSYSTEM */}
      <section className="mb-20 p-6 sm:p-10 rounded-2xl border border-cyan-500/25 bg-[#040816]/80 backdrop-blur-md text-center shadow-[0_0_35px_rgba(0,229,255,0.08)]">
        <h2 className="font-display text-lg sm:text-xl md:text-2xl font-extrabold tracking-[0.18em] text-white uppercase mb-4">
          TURNING FRAGMENTED SYSTEMS INTO ONE INTELLIGENT ECOSYSTEM.
        </h2>

        <div className="space-y-3 max-w-2xl mx-auto text-slate-300 font-sans text-xs sm:text-sm leading-relaxed">
          <p>
            Today, machines often operate inside isolated platforms, protocols and systems.
          </p>
          <p className="text-cyan-300 font-medium">
            Antellay OS aims to provide a common intelligence and orchestration layer that allows different autonomous systems to connect, share context and make better decisions.
          </p>
        </div>
      </section>

      {/* SECTION: 3 MISSION CAPABILITIES (01 CONNECT, 02 UNDERSTAND, 03 ACT) */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="font-display text-xl sm:text-2xl font-extrabold tracking-[0.18em] text-white uppercase">
            THREE CORE CAPABILITIES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {missionCapabilities.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.num}
                className="rounded-2xl border border-slate-800 bg-[#040916]/80 p-6 sm:p-7 hover:border-cyan-400/60 hover:bg-[#06122a] hover:shadow-[0_0_25px_rgba(0,229,255,0.2)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xl sm:text-2xl font-extrabold text-cyan-400">
                      {card.num}
                    </span>
                    <div className="w-9 h-9 rounded-lg border border-cyan-500/30 bg-cyan-950/50 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="font-mono text-[9px] tracking-widest text-slate-400 uppercase block mb-1.5">
                    {card.tag}
                  </span>

                  <h3 className="font-display text-base sm:text-lg font-bold tracking-[0.15em] text-white mb-2.5">
                    {card.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
                    {card.desc}
                  </p>

                  <div className="border-t border-slate-800 pt-3 space-y-1.5 font-mono text-[11px] text-cyan-300/90">
                    {card.protocols.map((p) => (
                      <div key={p} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-cyan-400" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800 flex items-center justify-between font-mono text-[10px] text-emerald-400">
                  <span>SUBSYSTEM: READY</span>
                  <Check className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION: OUR MISSION FLOW (Interactive 7-Stage Pipeline) */}
      <section className="mb-20 p-6 sm:p-10 rounded-2xl border border-cyan-500/30 bg-[#040816]/90 backdrop-blur-md">
        <div className="text-center mb-10">
          <span className="font-mono text-[10px] sm:text-xs text-cyan-400 tracking-widest uppercase block mb-1.5">
            END-TO-END CYCLE
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-extrabold tracking-[0.18em] text-white uppercase">
            OUR MISSION FLOW
          </h2>
          <p className="font-sans text-xs text-slate-400 mt-1.5">
            Click any stage below to inspect how telemetry converts into authorized action.
          </p>
        </div>

        {/* 7 Interactive Stage Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-6">
          {missionFlowSteps.map((step) => {
            const IconComponent = step.icon;
            const isSelected = activeFlowStep === step.id;
            return (
              <button
                key={step.name}
                onClick={() => setActiveFlowStep(step.id)}
                className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-between ${
                  isSelected
                    ? 'border-cyan-400 bg-cyan-950/60 shadow-[0_0_20px_rgba(0,229,255,0.3)]'
                    : 'border-slate-800 bg-[#02050e] hover:border-cyan-500/40'
                }`}
              >
                <div className="w-8 h-8 rounded-full border border-cyan-500/30 bg-cyan-950/40 flex items-center justify-center text-cyan-400 mb-1.5">
                  <IconComponent className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono text-[8px] text-cyan-400 font-bold block">0{step.id + 1}</span>
                <span className="font-display text-[11px] font-bold text-white tracking-wider block mt-0.5">
                  {step.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Inspector for Selected Step */}
        <div className="p-5 rounded-xl border border-cyan-500/20 bg-[#02050f] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-xl">
            <span className="font-mono text-[11px] text-cyan-400 font-semibold uppercase">
              SELECTED NODE: {missionFlowSteps[activeFlowStep].name} (0{activeFlowStep + 1}/07)
            </span>
            <h4 className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
              {missionFlowSteps[activeFlowStep].short}
            </h4>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              {missionFlowSteps[activeFlowStep].desc}
            </p>
          </div>

          <div className="font-mono text-[11px] text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1.5 rounded self-start sm:self-center">
            FLOW VELOCITY: REAL-TIME
          </div>
        </div>
      </section>

      {/* SECTION: REAL-WORLD MULTI-DOMAIN OPERATIONAL SCENARIOS */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="font-display text-lg sm:text-xl md:text-2xl font-bold tracking-[0.18em] text-white uppercase">
            OPERATIONAL DEPLOYMENT SCENARIOS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {missionScenarios.map((sc) => (
            <div key={sc.title} className="p-6 rounded-xl border border-slate-800 bg-[#030714] flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 mb-3 inline-block">
                  {sc.domain}
                </span>
                <h3 className="font-display text-base font-bold text-white tracking-wide mb-2">
                  {sc.title}
                </h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {sc.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Page Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-slate-800">
        <Link to="/vision" className="font-display text-xs tracking-widest text-slate-400 hover:text-white transition-colors">
          ← BACK TO VISION
        </Link>
        <Link to="/architecture" className="font-display text-xs tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2">
          <span>INSPECT ARCHITECTURE</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
