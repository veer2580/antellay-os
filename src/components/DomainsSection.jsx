import React, { useState } from 'react';
import { Plane, Bot, Ship, Satellite, Radio, Eye, Brain, Box, Crosshair, Play } from 'lucide-react';

export default function DomainsSection() {
  const [activeDomain, setActiveDomain] = useState('AIR');

  const domains = [
    {
      id: 'AIR',
      title: 'AIR',
      icon: Plane,
      tags: 'Autonomous Flight • Drones • Aviation',
      image: '/assets/card_img_air.png',
      description: 'Coordinating high-density unmanned aerial fleets, eVTOL urban mobility corridors, and autonomous defense aviation in real-time.',
    },
    {
      id: 'LAND',
      title: 'LAND',
      icon: Bot,
      tags: 'Robotics • Logistics • Infrastructure',
      image: '/assets/card_img_land.png',
      description: 'Synchronizing autonomous freight corridors, humanoid factory agents, and heavy industrial automation under a unified telemetry mesh.',
    },
    {
      id: 'SEA',
      title: 'SEA',
      icon: Ship,
      tags: 'Maritime • Autonomous Vessels • Ocean Systems',
      image: '/assets/card_img_sea.png',
      description: 'Navigating unmanned surface vessels, undersea acoustic networks, and autonomous port container logistics across international waters.',
    },
    {
      id: 'SPACE',
      title: 'SPACE',
      icon: Satellite,
      tags: 'Satellites • Earth Observation • Mission Systems',
      image: '/assets/card_img_space.png',
      description: 'Integrating LEO constellation orbits, optical inter-satellite links, and sovereign space observation into instantaneous terrestrial data streams.',
    },
  ];

  const pipelineStages = [
    {
      name: 'CONNECT',
      icon: Radio,
      desc: 'APIs • Sensors • IoT • Telemetry • Radar • GIS',
      metric: 'Ingestion Latency: <12ms',
      telemetry: 'Multi-protocol telemetry handshake established across air-to-ground & satellite downlinks.',
    },
    {
      name: 'UNDERSTAND',
      icon: Eye,
      desc: 'Unified Data • Context • World Model',
      metric: 'Spatial Resolution: Sub-meter',
      telemetry: 'Continuous real-time 4D spatiotemporal contextual representation of global assets.',
    },
    {
      name: 'INTELLIGENCE',
      icon: Brain,
      desc: 'AI • Prediction • Anomaly Detection',
      metric: 'Inference Velocity: 4.8 TFLOPS/node',
      telemetry: 'Deep neural pattern recognition and predictive deviation algorithms.',
    },
    {
      name: 'SIMULATE',
      icon: Box,
      desc: 'Digital Twin • Scenarios • Risk',
      metric: 'Parallel Scenarios: 10,000/sec',
      telemetry: 'High-fidelity physics and kinetic modeling of autonomous machine trajectories.',
    },
    {
      name: 'DECIDE',
      icon: Crosshair,
      desc: 'Recommendations • Decision Intelligence',
      metric: 'Optimization Confidence: 99.7%',
      telemetry: 'Deterministic optimization matrix for conflict-free multi-agent routing.',
    },
    {
      name: 'ACT',
      icon: Play,
      desc: 'Authorized Control • Orchestration • Automation',
      metric: 'Execution Clearance: Cryptographically Signed',
      telemetry: 'Zero-trust authorization protocol delivering command vectors directly to edge actuators.',
    },
  ];

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#020408] border-b border-cyan-900/30 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20 telemetry-grid" />

      {/* Top Header & Central Diagram Badge */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mb-16 flex flex-col items-center">
        <span className="font-mono text-xs sm:text-sm tracking-[0.3em] text-cyan-400 uppercase font-semibold border border-cyan-500/30 px-4 py-1 rounded-full bg-cyan-950/40 mb-6">
          THE INTELLIGENCE LAYER FOR THE AUTONOMOUS WORLD
        </span>

        {/* Central Radial Hub Diagram */}
        <div className="relative w-full max-w-3xl my-8 p-8 rounded-2xl border border-cyan-500/20 bg-[#040816]/70 backdrop-blur-xl">
          <div className="flex flex-col items-center justify-center">
            {/* Center Core Badge */}
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-2 border-cyan-400/80 bg-[#040a1c] shadow-[0_0_50px_rgba(0,229,255,0.4)] flex flex-col items-center justify-center p-4 relative z-20">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-400 flex items-center justify-center mb-2">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-cyan-300 stroke-2">
                  <polygon points="12,2 22,22 12,17 2,22" />
                </svg>
              </div>
              <span className="font-display text-base sm:text-lg font-extrabold tracking-[0.18em] text-white">
                ANTELLAY OS
              </span>
              <span className="font-mono text-[9px] tracking-widest text-cyan-400 font-bold mt-1 px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40">
                AI INTELLIGENCE
              </span>
            </div>

            {/* 4 Connected Domain Callouts around Central Hub */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mt-8 pt-6 border-t border-cyan-500/20">
              <div className="text-center p-2 rounded bg-[#02050f] border border-cyan-500/20">
                <span className="font-mono text-xs text-cyan-400 tracking-widest font-bold">SPACE</span>
                <p className="text-[11px] text-slate-400 mt-0.5">Satellites & Orbits</p>
              </div>
              <div className="text-center p-2 rounded bg-[#02050f] border border-cyan-500/20">
                <span className="font-mono text-xs text-cyan-400 tracking-widest font-bold">AIR</span>
                <p className="text-[11px] text-slate-400 mt-0.5">Aviation & Drones</p>
              </div>
              <div className="text-center p-2 rounded bg-[#02050f] border border-cyan-500/20">
                <span className="font-mono text-xs text-cyan-400 tracking-widest font-bold">LAND</span>
                <p className="text-[11px] text-slate-400 mt-0.5">Robotics & Vehicles</p>
              </div>
              <div className="text-center p-2 rounded bg-[#02050f] border border-cyan-500/20">
                <span className="font-mono text-xs text-cyan-400 tracking-widest font-bold">SEA</span>
                <p className="text-[11px] text-slate-400 mt-0.5">Maritime Vessels</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section: ONE OS. FOUR DOMAINS. */}
      <div className="relative z-10 max-w-6xl mx-auto mb-28">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-[0.22em] text-white uppercase">
            ONE OS. FOUR DOMAINS.
          </h2>
          <div className="w-24 h-0.5 bg-cyan-400 mx-auto mt-4 shadow-[0_0_10px_#00e5ff]" />
        </div>

        {/* 4 Interactive Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {domains.map((dom) => {
            const Icon = dom.icon;
            const isSelected = activeDomain === dom.id;
            return (
              <div
                key={dom.id}
                onClick={() => setActiveDomain(dom.id)}
                className={`group relative rounded-xl border p-6 sm:p-8 cursor-pointer transition-all duration-300 overflow-hidden ${
                  isSelected
                    ? 'border-cyan-400 bg-[#06122a]/90 shadow-[0_0_35px_rgba(0,229,255,0.25)]'
                    : 'border-slate-800 bg-[#040816]/70 hover:border-cyan-500/50 hover:bg-[#061022]'
                }`}
              >
                {/* Domain Thumbnail Background */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-35 group-hover:opacity-55 transition-opacity overflow-hidden pointer-events-none">
                  <img
                    src={dom.image}
                    alt={dom.title}
                    className="w-full h-full object-cover mix-blend-screen scale-100 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#040816] via-[#040816]/60 to-transparent" />
                </div>

                <div className="relative z-10 max-w-[70%]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg border border-cyan-500/40 bg-cyan-950/60 flex items-center justify-center text-cyan-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-2xl font-bold tracking-[0.18em] text-white group-hover:text-cyan-300 transition-colors">
                      {dom.title}
                    </h3>
                  </div>

                  <p className="font-mono text-xs text-cyan-400/90 font-medium tracking-wide mb-3">
                    {dom.tags}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {dom.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section: FROM DATA TO ACTION */}
      <div className="relative z-10 max-w-5xl mx-auto mb-20">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-[0.22em] text-white uppercase mb-3">
            FROM DATA TO ACTION
          </h2>
          <p className="font-mono text-xs sm:text-sm tracking-[0.3em] text-slate-400 uppercase">
            THE 6-STAGE AUTONOMOUS INTELLIGENCE PIPELINE
          </p>
        </div>

        {/* Vertical Connected Pipeline Cards */}
        <div className="space-y-4">
          {pipelineStages.map((st, index) => {
            const Icon = st.icon;
            return (
              <div
                key={st.name}
                className="group relative rounded-xl border border-slate-800 bg-[#040816]/80 p-5 sm:p-6 hover:border-cyan-400/60 hover:bg-[#061228] transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                {/* Left: Index & Name */}
                <div className="flex items-center gap-4 sm:w-1/3">
                  <div className="w-9 h-9 rounded-lg border border-cyan-500/30 bg-cyan-950/50 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-cyan-400 block tracking-widest">
                      STAGE 0{index + 1}
                    </span>
                    <h4 className="font-display text-lg font-bold tracking-[0.18em] text-white group-hover:text-cyan-300 transition-colors">
                      {st.name}
                    </h4>
                  </div>
                </div>

                {/* Middle: Exact Description from PDF */}
                <div className="sm:w-1/2">
                  <p className="font-mono text-xs text-cyan-300 tracking-wide font-medium">
                    {st.desc}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 font-sans">
                    {st.telemetry}
                  </p>
                </div>

                {/* Right: Technical Metric Badge */}
                <div className="sm:w-1/4 text-right">
                  <span className="inline-block px-2.5 py-1 rounded border border-slate-700 bg-slate-900/60 font-mono text-[10px] text-slate-300 tracking-wider">
                    {st.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Horizon Monumental Callout from Page 4 */}
      <div className="relative z-10 max-w-5xl mx-auto mt-20 pt-16 border-t border-cyan-500/20 text-center">
        <p className="font-mono text-xs sm:text-sm tracking-[0.4em] text-cyan-400 uppercase mb-4">
          AIR. LAND. SEA. SPACE.
        </p>

        <h3 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-[0.22em] text-white uppercase drop-shadow-[0_0_35px_rgba(0,229,255,0.3)] mb-6">
          ONE INTELLIGENCE LAYER.
        </h3>

        <div className="max-w-2xl mx-auto space-y-2 font-display text-sm sm:text-base tracking-[0.25em] text-slate-300 uppercase">
          <p>THE AUTONOMOUS WORLD IS COMING.</p>
          <p className="text-cyan-300 font-bold">ANTELLAY OS IS BEING BUILT TO POWER IT.</p>
        </div>
      </div>
    </section>
  );
}
