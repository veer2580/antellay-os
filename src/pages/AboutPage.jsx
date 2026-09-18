import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plane, Bot, Ship, Satellite, Radio, Eye, Brain, Box, Crosshair, Play, ArrowRight, CheckCircle2, Layers } from 'lucide-react';

export default function AboutPage() {
  const [activeDomain, setActiveDomain] = useState('AIR');

  const domains = [
    {
      id: 'AIR',
      title: 'AIR',
      icon: Plane,
      tags: 'Autonomous Flight • Drones • Aviation',
      image: '/assets/air_autonomy_fleet.png',
      description: 'Coordinating high-density unmanned aerial fleets, eVTOL urban mobility corridors, and autonomous defense aviation in real-time.',
      metrics: [
        { label: 'Altitude Range', value: '0 - 65,000 FT' },
        { label: 'Control Latency', value: '< 8ms' },
        { label: 'Fleet Density', value: '10,000+ units/sector' },
        { label: 'Protocols', value: 'MAVLink, STANAG 4586, ADS-B' },
      ],
    },
    {
      id: 'LAND',
      title: 'LAND',
      icon: Bot,
      tags: 'Robotics • Logistics • Infrastructure',
      image: '/assets/card_img_land.png',
      description: 'Synchronizing autonomous freight corridors, humanoid factory agents, and heavy industrial automation under a unified telemetry mesh.',
      metrics: [
        { label: 'Asset Types', value: 'AGVs, Humanoids, Heavy Haulers' },
        { label: 'Kinetic Precision', value: 'Sub-millimeter' },
        { label: 'Topology', value: 'Multi-facility distributed mesh' },
        { label: 'Protocols', value: 'ROS 2, OPC-UA, MQTT-SN' },
      ],
    },
    {
      id: 'SEA',
      title: 'SEA',
      icon: Ship,
      tags: 'Maritime • Autonomous Vessels • Ocean Systems',
      image: '/assets/card_img_sea.png',
      description: 'Navigating unmanned surface vessels, undersea acoustic networks, and autonomous port container logistics across international waters.',
      metrics: [
        { label: 'Domain Scope', value: 'Surface & Subsurface' },
        { label: 'Acoustic Relays', value: 'Multi-nodal bathymetric' },
        { label: 'Navigation', value: 'COLREGs compliant autonomy' },
        { label: 'Protocols', value: 'NMEA 2000, AIS, Satellite Link' },
      ],
    },
    {
      id: 'SPACE',
      title: 'SPACE',
      icon: Satellite,
      tags: 'Satellites • Earth Observation • Mission Systems',
      image: '/assets/card_img_space.png',
      description: 'Integrating LEO constellation orbits, optical inter-satellite links, and sovereign space observation into instantaneous terrestrial data streams.',
      metrics: [
        { label: 'Orbital Regimes', value: 'LEO, MEO, GEO, Cislunar' },
        { label: 'ISL Data Rate', value: '100 Gbps Optical' },
        { label: 'Constellation Sync', value: 'Microsecond deterministic' },
        { label: 'Protocols', value: 'CCSDS, SpaceWire, DTN' },
      ],
    },
  ];

  const currentDomainData = domains.find((d) => d.id === activeDomain) || domains[0];

  const pipelineStages = [
    {
      name: 'CONNECT',
      icon: Radio,
      desc: 'APIs • Sensors • IoT • Telemetry • Radar • GIS',
      metric: 'Latency: <12ms',
      telemetry: 'Multi-protocol telemetry handshake established across air-to-ground & satellite downlinks.',
    },
    {
      name: 'UNDERSTAND',
      icon: Eye,
      desc: 'Unified Data • Context • World Model',
      metric: 'Resolution: Sub-meter',
      telemetry: 'Continuous real-time 4D spatiotemporal contextual representation of global assets.',
    },
    {
      name: 'INTELLIGENCE',
      icon: Brain,
      desc: 'AI • Prediction • Anomaly Detection',
      metric: 'Compute: 4.8 TFLOPS/node',
      telemetry: 'Deep neural pattern recognition and predictive deviation algorithms.',
    },
    {
      name: 'SIMULATE',
      icon: Box,
      desc: 'Digital Twin • Scenarios • Risk',
      metric: 'Throughput: 10k Sims/sec',
      telemetry: 'High-fidelity physics and kinetic modeling of autonomous machine trajectories.',
    },
    {
      name: 'DECIDE',
      icon: Crosshair,
      desc: 'Recommendations • Decision Intelligence',
      metric: 'Confidence: 99.7%',
      telemetry: 'Deterministic optimization matrix for conflict-free multi-agent routing.',
    },
    {
      name: 'ACT',
      icon: Play,
      desc: 'Authorized Control • Orchestration • Automation',
      metric: 'Enclave: Zero-Trust HSM',
      telemetry: 'Cryptographically signed command vectors delivered directly to edge actuators.',
    },
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-cyan-400 uppercase font-semibold border border-cyan-500/30 px-3.5 py-1 rounded-full bg-cyan-950/40 inline-block mb-3">
          ABOUT ANTELLAY OS
        </span>
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[0.18em] text-white uppercase mb-4 leading-tight">
          THE INTELLIGENCE LAYER FOR THE AUTONOMOUS WORLD
        </h1>
        <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Antellay OS is the unified operating system and orchestration fabric connecting heterogeneous autonomous machines across four physical domains.
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative w-full mb-16 overflow-hidden border-y border-cyan-500/20 shadow-[0_0_40px_rgba(0,229,255,0.08)]">
        <img src="/assets/about_hero.jpg" alt="Antellay OS — Autonomous drone fleet over smart city" className="w-full h-auto object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent pointer-events-none" />
      </div>

      {/* SECTION: ONE OS. FOUR DOMAINS. */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="font-display text-xl sm:text-2xl font-extrabold tracking-[0.18em] text-white uppercase">
            ONE OS. FOUR DOMAINS.
          </h2>
          <div className="w-16 h-0.5 bg-cyan-400 mx-auto mt-2.5" />
        </div>

        {/* 4 Interactive Domain Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {domains.map((dom) => {
            const Icon = dom.icon;
            const isSelected = activeDomain === dom.id;
            return (
              <button
                key={dom.id}
                onClick={() => setActiveDomain(dom.id)}
                className={`p-4 sm:p-5 rounded-xl border flex flex-col items-center gap-2 transition-all duration-300 ${
                  isSelected
                    ? 'border-cyan-400 bg-cyan-950/60 shadow-[0_0_25px_rgba(0,229,255,0.3)] text-white'
                    : 'border-slate-800 bg-[#040816]/70 hover:border-cyan-500/40 text-slate-400'
                }`}
              >
                <Icon className={`w-5 h-5 ${isSelected ? 'text-cyan-300' : 'text-slate-400'}`} />
                <span className="font-display text-xs sm:text-sm font-bold tracking-widest uppercase">
                  {dom.title}
                </span>
                <span className="font-mono text-[9px] text-cyan-400/80">DOMAIN 0{domains.indexOf(dom) + 1}</span>
              </button>
            );
          })}
        </div>

        {/* Active Domain Feature Box with Live Metrics */}
        <div className="rounded-2xl border border-cyan-500/30 bg-[#040918]/90 p-6 sm:p-8 backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/40">
                ACTIVE FOCUS
              </span>
              <span className="font-mono text-[11px] tracking-wider text-slate-400 uppercase">
                {currentDomainData.tags}
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-extrabold tracking-wider text-white">
              {currentDomainData.title} AUTONOMY
            </h3>

            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
              {currentDomainData.description}
            </p>

            {/* Telemetry Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800">
              {currentDomainData.metrics.map((m) => (
                <div key={m.label} className="p-2.5 rounded-lg border border-slate-800/80 bg-[#02050f]">
                  <span className="font-mono text-[9px] text-slate-400 uppercase block mb-0.5">
                    {m.label}
                  </span>
                  <span className="font-mono text-xs font-bold text-cyan-300">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative rounded-xl overflow-hidden border border-cyan-500/30 shadow-2xl h-72">
            <img
              src={currentDomainData.image}
              alt={currentDomainData.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040918] via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-cyan-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded border border-cyan-500/20">
              <span>ORBITAL TELEMETRY LINK: ENCRYPTED</span>
              <span>STATE: OPERATIONAL</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: FROM DATA TO ACTION */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="font-display text-xl sm:text-2xl font-extrabold tracking-[0.18em] text-white uppercase mb-1.5">
            FROM DATA TO ACTION
          </h2>
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-slate-400 uppercase">
            THE 6-STAGE AUTONOMOUS INTELLIGENCE PIPELINE
          </p>
        </div>

        <div className="space-y-3">
          {pipelineStages.map((st, index) => {
            const Icon = st.icon;
            return (
              <div
                key={st.name}
                className="rounded-xl border border-slate-800 bg-[#040816]/80 p-4 sm:p-5 hover:border-cyan-400/60 hover:bg-[#061228] transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3 sm:w-1/3">
                  <div className="w-9 h-9 rounded-lg border border-cyan-500/30 bg-cyan-950/50 flex items-center justify-center text-cyan-400 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-cyan-400 block tracking-widest">
                      STAGE 0{index + 1}
                    </span>
                    <h4 className="font-display text-sm sm:text-base font-bold tracking-[0.16em] text-white">
                      {st.name}
                    </h4>
                  </div>
                </div>

                <div className="sm:w-1/2">
                  <p className="font-mono text-[11px] sm:text-xs text-cyan-300 tracking-wide font-medium">
                    {st.desc}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5 font-sans">
                    {st.telemetry}
                  </p>
                </div>

                <div className="sm:w-1/4 text-right">
                  <span className="inline-block px-2.5 py-1 rounded border border-slate-700 bg-slate-900/80 font-mono text-[10px] text-slate-300 tracking-wider">
                    {st.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION: WHAT ANTELLAY OS IS (Typographic Manifesto) */}
      <section className="p-8 sm:p-12 rounded-2xl border border-cyan-400/40 bg-gradient-to-b from-[#050e24] to-[#02050f] text-center shadow-[0_0_40px_rgba(0,229,255,0.12)] mb-16">
        <span className="font-mono text-[10px] sm:text-xs text-cyan-400 tracking-widest uppercase block mb-3">
          SYSTEM ESSENCE
        </span>

        <div className="space-y-2.5 font-display text-lg sm:text-2xl md:text-3xl font-extrabold tracking-[0.16em] uppercase mb-6 leading-tight">
          <p className="text-slate-400">ANTELLAY OS IS NOT A MACHINE.</p>
          <p className="text-slate-400">IT IS NOT A ROBOT.</p>
          <p className="text-slate-400">IT IS NOT A SATELLITE.</p>
          <p className="text-cyan-300 glow-text-cyan">
            IT IS THE SOFTWARE LAYER THAT CONNECTS THEM.
          </p>
        </div>

        <div className="pt-6 border-t border-cyan-500/20 flex flex-wrap justify-center gap-4">
          <Link
            to="/architecture"
            className="px-6 py-3 rounded border border-cyan-400 bg-cyan-950/60 hover:bg-cyan-500/20 text-white font-display text-xs tracking-widest uppercase transition-all"
          >
            INSPECT OS ARCHITECTURE
          </Link>
          <Link
            to="/vision"
            className="px-6 py-3 rounded border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-300 font-display text-xs tracking-widest uppercase transition-all"
          >
            READ FOUNDER VISION
          </Link>
        </div>
      </section>
    </div>
  );
}
