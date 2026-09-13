import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  Repeat,
  Share2,
  Cpu,
  Shield,
  Radio,
  Eye,
  Brain,
  Box,
  Target,
  Play,
  Satellite,
  Plane,
  Bot,
  Ship,
  Database,
  Cloud,
  Network,
  Binary,
  Compass,
  ArrowRight,
  Lock,
  Terminal,
  Zap,
} from 'lucide-react';
import GatewayFlow from '../components/ui/gateway-flow';

export default function ArchitecturePage() {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState(2); // Antellay OS layer
  const [activeLoopStep, setActiveLoopStep] = useState(0);

  const architectureLayers = [
    {
      layer: 'LAYER 01',
      title: 'PHYSICAL WORLD',
      subtitle: 'Air, Land, Sea, Space Hardware',
      color: 'border-slate-700 bg-slate-900/40',
      description: 'Physical machines, autonomous platforms, robotic actuators, and telemetry-emitting sensor suites.',
      items: [
        { label: 'Air', icon: Plane },
        { label: 'Land', icon: Bot },
        { label: 'Sea', icon: Ship },
        { label: 'Space', icon: Satellite },
      ],
      details: 'Connects diverse hardware topologies ranging from micro-drones and industrial robots to deep-sea vessels and orbital constellations.',
    },
    {
      layer: 'LAYER 02',
      title: 'CONNECTIVITY & DATA',
      subtitle: 'Ingestion & Telemetry Pipeline',
      color: 'border-cyan-900/50 bg-[#040c1e]/60',
      description: 'Unified edge gateways, telemetry parsers, protocol bridges, and low-latency message brokers.',
      items: [
        { label: 'APIs' },
        { label: 'SDKs' },
        { label: 'Telemetry' },
        { label: 'IoT' },
        { label: 'Sensors' },
        { label: 'GIS' },
        { label: 'Data Feeds' },
        { label: 'Communication Systems' },
      ],
      details: 'Normalizes disparate serialization formats (Protobuf, DDS, ROS 2, MQTT) into standardized streaming telemetry schemas.',
    },
    {
      layer: 'LAYER 03',
      title: 'ANTELLAY OS',
      badge: 'UNIFIED INTELLIGENCE LAYER',
      subtitle: 'Core Kernel & Orchestration Engine',
      isHero: true,
      color: 'border-cyan-400 bg-cyan-950/60 shadow-[0_0_30px_rgba(0,229,255,0.3)]',
      description: 'The central intelligence operating kernel providing real-time multi-domain synchronization and resource arbitration.',
      items: [
        { label: 'CORE OPERATING KERNEL' },
        { label: 'KINETIC ARBITRATION BUS' },
        { label: 'DYNAMIC COMPUTE MESH' },
        { label: 'MULTI-DOMAIN DISPATCHER' },
      ],
      details: 'Executes high-velocity state reconciliation across edge nodes and cloud clusters with sub-millisecond jitter.',
    },
    {
      layer: 'LAYER 04',
      title: 'WORLD MODEL',
      subtitle: '4D Spatiotemporal Representation',
      color: 'border-blue-900/50 bg-[#040a1c]/60',
      description: 'Living digital representation of the physical environment, dynamic weather, kinetic obstacles, and asset states.',
      items: [
        { label: 'Context' },
        { label: 'Environment' },
        { label: 'Asset State' },
        { label: 'Spatial Intelligence' },
        { label: 'Temporal Intelligence' },
        { label: 'Operational Context' },
      ],
      details: 'Maintains sub-meter spatial precision and multi-second predictive horizons for millions of concurrent agents.',
    },
    {
      layer: 'LAYER 05',
      title: 'AI INTELLIGENCE',
      subtitle: 'Cognitive & Predictive Algorithms',
      color: 'border-cyan-900/50 bg-[#040c1e]/60',
      description: 'Deep neural networks for anomaly detection, trajectory prediction, and multi-agent intent modeling.',
      items: [
        { label: 'Understand' },
        { label: 'Detect' },
        { label: 'Predict' },
        { label: 'Reason' },
        { label: 'Simulate' },
        { label: 'Recommend' },
      ],
      details: 'Continuously processes real-time sensor streams to classify potential hazards and project probabilistic future paths.',
    },
    {
      layer: 'LAYER 06',
      title: 'DECISION ENGINE',
      subtitle: 'Multi-Agent Constraint Solver',
      color: 'border-indigo-900/50 bg-[#05091a]/60',
      description: 'Deterministic optimization matrix resolving airspace contention, convoy routing, and priority scheduling.',
      items: [
        { label: 'Risk' },
        { label: 'Prioritization' },
        { label: 'Planning' },
        { label: 'Optimization' },
        { label: 'Decision Support' },
      ],
      details: 'Generates mathematically proven non-conflicting operational plans adhering to regulatory and safety constraints.',
    },
    {
      layer: 'LAYER 07',
      title: 'AUTHORIZED ACTION',
      subtitle: 'Zero-Trust Execution Layer',
      color: 'border-emerald-900/50 bg-[#030d18]/60',
      description: 'Cryptographic policy enforcement ensuring every physical actuation command is validated, audited, and cleared.',
      items: [
        { label: 'Orchestration' },
        { label: 'Automation' },
        { label: 'Human Approval' },
        { label: 'System Execution' },
      ],
      details: 'Integrates hardware security modules (HSM) and multi-signature authorization keys before commands reach motors or thrusters.',
    },
  ];

  const coreLoop = [
    {
      title: 'CONNECT',
      desc: 'Bring machines, sensors, systems and data together.',
      icon: Radio,
    },
    {
      title: 'UNDERSTAND',
      desc: 'Build contextual understanding of the environment and assets.',
      icon: Eye,
    },
    {
      title: 'PREDICT',
      desc: 'Identify what is likely to happen next.',
      icon: Brain,
    },
    {
      title: 'SIMULATE',
      desc: 'Evaluate possible scenarios before action.',
      icon: Box,
    },
    {
      title: 'DECIDE',
      desc: 'Generate optimized recommendations and decisions.',
      icon: Target,
    },
    {
      title: 'AUTHORIZED ACTION',
      desc: 'Execute through connected systems with appropriate permissions and human oversight.',
      icon: Shield,
    },
  ];

  const integrationPoints = [
    { name: 'APIs', icon: Binary },
    { name: 'SDKs', icon: Box },
    { name: 'Telemetry', icon: Radio },
    { name: 'IoT', icon: Network },
    { name: 'Cloud Systems', icon: Cloud },
    { name: 'Edge Systems', icon: Cpu },
    { name: 'GIS', icon: Compass },
    { name: 'Sensors', icon: Eye },
    { name: 'Robotics Platforms', icon: Bot },
    { name: 'Satellite Data', icon: Satellite },
    { name: 'Industrial Systems', icon: Layers },
    { name: 'Communication Networks', icon: Share2 },
  ];

  const selectedLayer = architectureLayers[selectedLayerIndex];

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <span className="font-mono text-xs sm:text-sm tracking-[0.35em] text-cyan-400 uppercase font-semibold border border-cyan-500/30 px-4 py-1 rounded-full bg-cyan-950/40 inline-block mb-4">
          SYSTEM ARCHITECTURE
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-[0.18em] text-white uppercase mb-6 leading-tight">
          FROM MACHINES TO INTELLIGENCE.
        </h1>
        <p className="font-display text-sm sm:text-base tracking-[0.3em] text-cyan-300 uppercase font-semibold">
          IT WILL BE POWERED BY MILLIONS OF MACHINES WORKING TOGETHER.
        </p>
      </div>

      {/* SECTION 01: 7-LAYER ARCHITECTURE STACK */}
      <section className="mb-28">
        <div className="flex items-baseline gap-4 mb-8">
          <span className="font-mono text-sm text-cyan-400 font-bold tracking-widest px-2.5 py-0.5 rounded border border-cyan-500/30 bg-cyan-950/40">
            01
          </span>
          <div>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block">
              ENTERPRISE OS STACK
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-[0.18em] text-white uppercase">
              THE 7-LAYER INTELLIGENCE FRAMEWORK
            </h2>
          </div>
        </div>

        {/* 7 Interactive Layers */}
        <div className="space-y-3 mb-8">
          {architectureLayers.map((layer, idx) => {
            const isSelected = selectedLayerIndex === idx;
            return (
              <div
                key={layer.layer}
                onClick={() => setSelectedLayerIndex(idx)}
                className={`rounded-xl border p-4 sm:p-5 cursor-pointer transition-all duration-300 ${layer.color} ${
                  isSelected
                    ? 'ring-2 ring-cyan-400 shadow-[0_0_30px_rgba(0,229,255,0.3)] bg-[#051126]'
                    : 'hover:border-cyan-500/50'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4 sm:w-1/3">
                    <span className="font-mono text-xs text-cyan-400 font-bold tracking-wider">
                      {layer.layer}
                    </span>
                    <div>
                      <h3 className="font-display text-sm sm:text-base font-bold tracking-wider text-white">
                        {layer.title}
                      </h3>
                      {layer.badge ? (
                        <span className="font-mono text-[9px] text-cyan-300 tracking-widest uppercase">
                          {layer.badge}
                        </span>
                      ) : (
                        <span className="font-mono text-[10px] text-slate-400 tracking-wider">
                          {layer.subtitle}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 sm:w-2/3">
                    {layer.items.map((it) => (
                      <span
                        key={it.label}
                        className="px-2.5 py-1 rounded bg-[#030612]/90 border border-slate-800 font-mono text-[11px] text-slate-300 tracking-wide hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
                      >
                        {it.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Layer Deep Inspector */}
        <div className="p-6 sm:p-8 rounded-2xl border border-cyan-500/30 bg-[#030718]/90 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-800">
            <div>
              <span className="font-mono text-xs text-cyan-400 font-bold">
                LAYER INSPECTION: {selectedLayer.layer}
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wider">
                {selectedLayer.title}
              </h4>
            </div>
            <span className="font-mono text-xs text-slate-400 px-3 py-1 rounded border border-slate-800 bg-[#02050f]">
              STATUS: VALIDATED KERNEL SPEC
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-200 font-sans leading-relaxed mb-4">
            {selectedLayer.description}
          </p>

          <p className="text-xs sm:text-sm text-cyan-300/90 font-mono leading-relaxed bg-[#02050f] p-4 rounded-lg border border-slate-800">
            TECHNICAL PAYLOAD: {selectedLayer.details}
          </p>
        </div>
      </section>

      {/* SECTION 02: THE CORE INTELLIGENCE LOOP */}
      <section className="mb-28">
        <div className="flex items-baseline gap-4 mb-8">
          <span className="font-mono text-sm text-cyan-400 font-bold tracking-widest px-2.5 py-0.5 rounded border border-cyan-500/30 bg-cyan-950/40">
            02
          </span>
          <div>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block">
              CIRCULAR FEEDBACK
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-[0.15em] text-white uppercase">
              THE CORE INTELLIGENCE LOOP
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {coreLoop.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeLoopStep === idx;
            return (
              <div
                key={item.title}
                onClick={() => setActiveLoopStep(idx)}
                className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'border-cyan-400 bg-cyan-950/40 shadow-[0_0_25px_rgba(0,229,255,0.25)]'
                    : 'border-slate-800 bg-[#040816]/80 hover:border-cyan-500/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-cyan-400 font-bold">
                      STAGE 0{idx + 1}
                    </span>
                    <div className="w-8 h-8 rounded-lg border border-cyan-500/30 bg-cyan-950/50 flex items-center justify-center text-cyan-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold tracking-[0.16em] text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 03: THE OS. MULTIPLE DOMAINS. */}
      <section className="mb-28">
        <div className="flex items-baseline gap-4 mb-8">
          <span className="font-mono text-sm text-cyan-400 font-bold tracking-widest px-2.5 py-0.5 rounded border border-cyan-500/30 bg-cyan-950/40">
            03
          </span>
          <div>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block">
              MULTI-DOMAIN COVERAGE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-[0.18em] text-white uppercase">
              ONE INTELLIGENCE LAYER. FOUR PHYSICAL DOMAINS.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              code: '01 SPACE',
              sub: 'Satellites',
              bullets: ['Orbital systems', 'Earth observation', 'Space infrastructure'],
            },
            {
              code: '02 AIR',
              sub: 'Drones',
              bullets: ['Aircraft', 'Aerial robotics', 'Airspace systems'],
            },
            {
              code: '03 LAND',
              sub: 'Robotics',
              bullets: ['Autonomous vehicles', 'Industrial systems', 'Smart infrastructure'],
            },
            {
              code: '04 SEA',
              sub: 'Autonomous vessels',
              bullets: ['Maritime systems', 'Ocean intelligence', 'Port infrastructure'],
            },
          ].map((d) => (
            <div
              key={d.code}
              className="p-6 rounded-xl border border-slate-800 bg-[#040816] hover:border-cyan-400/50 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-cyan-400 font-bold block mb-1">
                  {d.code}
                </span>
                <h3 className="font-display text-lg font-bold text-white block mb-4">
                  {d.sub}
                </h3>
                <ul className="space-y-2 font-sans text-xs text-slate-300">
                  {d.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 04: BUILT FOR INTEGRATION */}
      <section className="mb-28">
        <div className="flex items-baseline gap-4 mb-6">
          <span className="font-mono text-sm text-cyan-400 font-bold tracking-widest px-2.5 py-0.5 rounded border border-cyan-500/30 bg-cyan-950/40">
            04
          </span>
          <div>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block">
              BUILT FOR INTEGRATION
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-[0.18em] text-white uppercase">
              DESIGNED TO CONNECT THE SYSTEMS THAT ALREADY EXIST.
            </h2>
          </div>
        </div>

        <p className="text-sm sm:text-base text-slate-300 font-sans max-w-3xl leading-relaxed mb-8">
          Antellay OS is designed as an integration and intelligence layer — allowing heterogeneous machines and systems to share data, context and intelligence through secure, permission-based interfaces.
        </p>

        {/* 12 Integration Framework Nodes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {integrationPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="p-4 rounded-lg border border-slate-800/80 bg-[#030714] flex items-center gap-3 hover:border-cyan-400/50 transition-colors"
              >
                <div className="w-8 h-8 rounded bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs text-slate-200 tracking-wider font-medium">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 05: THE ANTELLAY OS STACK */}
      <section className="mb-28">
        <div className="flex items-baseline gap-4 mb-8">
          <span className="font-mono text-sm text-cyan-400 font-bold tracking-widest px-2.5 py-0.5 rounded border border-cyan-500/30 bg-cyan-950/40">
            05
          </span>
          <div>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block">
              THE ANTELLAY OS STACK
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-[0.18em] text-white uppercase">
              SYSTEM PIPELINE
            </h2>
          </div>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex items-center min-w-[750px] gap-2">
            {[
              { label: 'PHYSICAL SYSTEMS' },
              { label: 'DATA & CONNECTIVITY' },
              { label: 'ANTELLAY OS', isCore: true },
              { label: 'WORLD MODEL' },
              { label: 'AI / INTELLIGENCE' },
              { label: 'SIMULATION' },
              { label: 'DECISION ENGINE' },
              { label: 'AUTHORIZED ACTION' },
            ].map((node) => (
              <div
                key={node.label}
                className={`px-4 py-3.5 rounded-lg border font-mono text-xs tracking-wider text-center shrink-0 ${
                  node.isCore
                    ? 'border-cyan-400 bg-cyan-950/70 text-cyan-300 font-bold shadow-[0_0_20px_rgba(0,229,255,0.35)]'
                    : 'border-slate-800 bg-[#040816] text-slate-300'
                }`}
              >
                {node.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 06: OUR PURPOSE */}
      <section className="p-8 sm:p-12 rounded-2xl border border-cyan-500/30 bg-[#040818]/90 text-center mb-16">
        <div className="inline-flex items-center gap-3 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-4">
          <span>06</span>
          <span>OUR PURPOSE</span>
        </div>
        <h3 className="font-display text-3xl sm:text-5xl font-extrabold tracking-[0.2em] text-white uppercase leading-tight">
          THE WORLD WILL NOT BE POWERED BY ONE MACHINE.
        </h3>
        <p className="font-mono text-xs text-cyan-300 tracking-widest mt-4 uppercase">
          IT WILL BE POWERED BY MILLIONS OF MACHINES WORKING TOGETHER.
        </p>
      </section>

      {/* Page Navigation */}
      {/* ═════════════════════════════════════════
          GATEWAY FLOW — Live Intelligence Terminal
          Sourced from 21st.dev: gateway-flow
          ═════════════════════════════════════════ */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <span className="font-mono text-xs tracking-[0.35em] text-cyan-400 uppercase border border-cyan-500/20 px-3 py-1 rounded-full bg-cyan-950/30 inline-flex items-center gap-2 mb-4">
            <Terminal className="w-3 h-3" />
            NEXUS GATEWAY — LIVE TERMINAL
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[0.2em] text-white uppercase mb-3">
            INTELLIGENCE FLOW VISUALIZER
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Real-time Bezier data flow simulation — watch intelligence signals converge from all domains
            toward the Antellay OS core. Click anywhere in the terminal to trigger an expansion wave.
          </p>
        </div>

        {/* GatewayFlow embedded terminal */}
        <div className="relative max-w-5xl mx-auto">
          {/* Terminal chrome frame */}
          <div className="rounded-2xl overflow-hidden border border-cyan-500/20 bg-black shadow-[0_0_60px_rgba(0,229,255,0.08)]">
            {/* Top bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0d14] border-b border-white/5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-3 font-mono text-xs text-slate-500 tracking-widest">ANTELLAY_OS :: NEXUS_GATEWAY_TERMINAL :: v2.4.0</span>
              <div className="ml-auto flex items-center gap-2">
                <span className="inline-flex items-center gap-1 font-mono text-[10px] text-cyan-400">
                  <Zap className="w-2.5 h-2.5" /> UPLINK_ACTIVE
                </span>
              </div>
            </div>
            {/* Gateway Flow iframe */}
            <div className="h-[560px] w-full">
              <GatewayFlow
                className="h-full w-full"
                mode="dark"
                speed={0.85}
                density={1.2}
                opacity={1}
              />
            </div>
          </div>
          {/* Bottom status bar */}
          <div className="flex items-center justify-between mt-3 px-2">
            <span className="font-mono text-[10px] text-slate-600 tracking-widest">BEZIER_PATH_CONVERGENCE :: 80 ACTIVE_ROUTES</span>
            <span className="font-mono text-[10px] text-cyan-600 tracking-widest">CLICK_TO_EXPAND_WAVE</span>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <div className="flex justify-between items-center pt-4 border-t border-white/5 mt-8">
        <Link to="/mission" className="font-display text-xs tracking-widest text-slate-500 hover:text-slate-300 transition-colors">
          ← BACK TO MISSION
        </Link>
        <Link to="/futuhr" className="font-display text-xs tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2">
          <span>EXPLORE FUTUHR &amp; PREDICTION</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
