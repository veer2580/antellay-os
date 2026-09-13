import React, { useState } from 'react';
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
} from 'lucide-react';

export default function ArchitectureSection() {
  const [activeLoopNode, setActiveLoopNode] = useState(0);

  // Complete 7-Layer Stack from PDF Page 7
  const architectureLayers = [
    {
      layer: 'LAYER 01',
      title: 'PHYSICAL WORLD',
      color: 'border-slate-700 bg-slate-900/40',
      items: [
        { label: 'Air', icon: Plane },
        { label: 'Land', icon: Bot },
        { label: 'Sea', icon: Ship },
        { label: 'Space', icon: Satellite },
      ],
    },
    {
      layer: 'LAYER 02',
      title: 'CONNECTIVITY & DATA',
      color: 'border-cyan-900/50 bg-[#040c1e]/60',
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
    },
    {
      layer: 'LAYER 03',
      title: 'ANTELLAY OS',
      badge: 'UNIFIED INTELLIGENCE LAYER',
      isHero: true,
      color: 'border-cyan-400 bg-cyan-950/50 shadow-[0_0_25px_rgba(0,229,255,0.25)]',
      items: [{ label: 'CORE OPERATING KERNEL & KINETIC BUS' }],
    },
    {
      layer: 'LAYER 04',
      title: 'WORLD MODEL',
      color: 'border-blue-900/50 bg-[#040a1c]/60',
      items: [
        { label: 'Context' },
        { label: 'Environment' },
        { label: 'Asset State' },
        { label: 'Spatial Intelligence' },
        { label: 'Temporal Intelligence' },
        { label: 'Operational Context' },
      ],
    },
    {
      layer: 'LAYER 05',
      title: 'AI INTELLIGENCE',
      color: 'border-cyan-900/50 bg-[#040c1e]/60',
      items: [
        { label: 'Understand' },
        { label: 'Detect' },
        { label: 'Predict' },
        { label: 'Reason' },
        { label: 'Simulate' },
        { label: 'Recommend' },
      ],
    },
    {
      layer: 'LAYER 06',
      title: 'DECISION ENGINE',
      color: 'border-indigo-900/50 bg-[#05091a]/60',
      items: [
        { label: 'Risk' },
        { label: 'Prioritization' },
        { label: 'Planning' },
        { label: 'Optimization' },
        { label: 'Decision Support' },
      ],
    },
    {
      layer: 'LAYER 07',
      title: 'AUTHORIZED ACTION',
      color: 'border-emerald-900/50 bg-[#030d18]/60',
      items: [
        { label: 'Orchestration' },
        { label: 'Automation' },
        { label: 'Human Approval' },
        { label: 'System Execution' },
      ],
    },
  ];

  // 6-Stage Core Loop from PDF Page 7
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

  // 12 Integration Points from PDF Page 7
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

  return (
    <section id="architecture" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#020408] border-b border-cyan-900/30 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20 telemetry-grid" />

      {/* Top Banner Statement from Page 7 */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-20">
        <p className="font-display text-sm sm:text-base tracking-[0.3em] text-cyan-300 uppercase font-semibold mb-4">
          IT WILL BE POWERED BY MILLIONS OF MACHINES WORKING TOGETHER.
        </p>
      </div>

      {/* 01 THE ARCHITECTURE: FROM MACHINES TO INTELLIGENCE */}
      <div className="relative z-10 max-w-5xl mx-auto mb-28">
        <div className="text-left mb-8 flex items-baseline gap-4">
          <span className="font-mono text-sm text-cyan-400 font-bold tracking-widest px-2.5 py-0.5 rounded border border-cyan-500/30 bg-cyan-950/40">
            01
          </span>
          <div>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block">
              THE ARCHITECTURE
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[0.18em] text-white uppercase">
              FROM MACHINES TO INTELLIGENCE.
            </h3>
          </div>
        </div>

        {/* 7-Layer Architecture Stack */}
        <div className="space-y-3">
          {architectureLayers.map((layer) => (
            <div
              key={layer.layer}
              className={`rounded-xl border p-4 sm:p-5 transition-all duration-300 ${layer.color} ${
                layer.isHero ? 'ring-1 ring-cyan-400/40' : 'hover:border-cyan-500/40'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4 sm:w-1/3">
                  <span className="font-mono text-xs text-cyan-400 font-bold tracking-wider">
                    {layer.layer}
                  </span>
                  <div>
                    <h4 className="font-display text-sm sm:text-base font-bold tracking-wider text-white">
                      {layer.title}
                    </h4>
                    {layer.badge && (
                      <span className="font-mono text-[9px] text-cyan-300 tracking-widest uppercase">
                        {layer.badge}
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
          ))}
        </div>
      </div>

      {/* 02 THE CORE INTELLIGENCE LOOP */}
      <div className="relative z-10 max-w-5xl mx-auto mb-28">
        <div className="text-left mb-10 flex items-baseline gap-4">
          <span className="font-mono text-sm text-cyan-400 font-bold tracking-widest px-2.5 py-0.5 rounded border border-cyan-500/30 bg-cyan-950/40">
            02
          </span>
          <div>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block">
              THE CORE INTELLIGENCE LOOP
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-[0.15em] text-white uppercase">
              CONNECT → UNDERSTAND → PREDICT → SIMULATE → DECIDE → ACT
            </h3>
          </div>
        </div>

        {/* Circular Telemetry Loop Visualization */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {coreLoop.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeLoopNode === idx;
            return (
              <div
                key={item.title}
                onClick={() => setActiveLoopNode(idx)}
                className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'border-cyan-400 bg-cyan-950/30 shadow-[0_0_25px_rgba(0,229,255,0.2)]'
                    : 'border-slate-800 bg-[#040816]/70 hover:border-cyan-500/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-cyan-400 font-bold">
                      STEP 0{idx + 1}
                    </span>
                    <div className="w-8 h-8 rounded-lg border border-cyan-500/30 bg-cyan-950/50 flex items-center justify-center text-cyan-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h4 className="font-display text-lg font-bold tracking-[0.18em] text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 03 THE OS. MULTIPLE DOMAINS. (Page 7) */}
      <div className="relative z-10 max-w-5xl mx-auto mb-28">
        <div className="text-left mb-8 flex items-baseline gap-4">
          <span className="font-mono text-sm text-cyan-400 font-bold tracking-widest px-2.5 py-0.5 rounded border border-cyan-500/30 bg-cyan-950/40">
            03
          </span>
          <div>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block">
              THE OS. MULTIPLE DOMAINS.
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-[0.18em] text-white uppercase">
              ONE INTELLIGENCE LAYER. FOUR PHYSICAL DOMAINS.
            </h3>
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
              className="p-5 rounded-xl border border-slate-800 bg-[#040816] hover:border-cyan-400/50 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-cyan-400 font-bold block mb-1">
                  {d.code}
                </span>
                <span className="font-display text-base font-bold text-white block mb-3">
                  {d.sub}
                </span>
                <ul className="space-y-1.5 font-sans text-xs text-slate-300">
                  {d.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-cyan-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 04 BUILT FOR INTEGRATION (Page 7) */}
      <div className="relative z-10 max-w-5xl mx-auto mb-28">
        <div className="text-left mb-6 flex items-baseline gap-4">
          <span className="font-mono text-sm text-cyan-400 font-bold tracking-widest px-2.5 py-0.5 rounded border border-cyan-500/30 bg-cyan-950/40">
            04
          </span>
          <div>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block">
              BUILT FOR INTEGRATION
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-[0.18em] text-white uppercase">
              DESIGNED TO CONNECT THE SYSTEMS THAT ALREADY EXIST.
            </h3>
          </div>
        </div>

        <p className="text-sm sm:text-base text-slate-300 font-sans max-w-3xl leading-relaxed mb-8">
          Antellay OS is designed as an integration and intelligence layer — allowing heterogeneous machines and systems to share data, context and intelligence through secure, permission-based interfaces.
        </p>

        {/* 12 Integration Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {integrationPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="p-3.5 rounded-lg border border-slate-800/80 bg-[#030714] flex items-center gap-3 hover:border-cyan-400/50 transition-colors"
              >
                <div className="w-7 h-7 rounded bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono text-xs text-slate-200 tracking-wider font-medium">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 05 THE ANTELLAY OS STACK (Page 7) */}
      <div className="relative z-10 max-w-5xl mx-auto mb-28">
        <div className="text-left mb-8 flex items-baseline gap-4">
          <span className="font-mono text-sm text-cyan-400 font-bold tracking-widest px-2.5 py-0.5 rounded border border-cyan-500/30 bg-cyan-950/40">
            05
          </span>
          <div>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block">
              THE ANTELLAY OS STACK
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-[0.18em] text-white uppercase">
              SYSTEM PIPELINE
            </h3>
          </div>
        </div>

        {/* Horizontal Stack Flow */}
        <div className="overflow-x-auto pb-4">
          <div className="flex items-center min-w-[700px] gap-2">
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
                className={`px-3 py-3 rounded-lg border font-mono text-[11px] tracking-wider text-center shrink-0 ${
                  node.isCore
                    ? 'border-cyan-400 bg-cyan-950/60 text-cyan-300 font-bold shadow-[0_0_20px_rgba(0,229,255,0.3)]'
                    : 'border-slate-800 bg-[#040816] text-slate-300'
                }`}
              >
                {node.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 06 OUR PURPOSE (Page 7) */}
      <div className="relative z-10 max-w-5xl mx-auto pt-10 border-t border-slate-800 text-center">
        <div className="inline-flex items-center gap-3 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-4">
          <span>06</span>
          <span>OUR PURPOSE</span>
        </div>
        <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[0.2em] text-white uppercase">
          THE WORLD WILL NOT BE POWERED BY ONE MACHINE.
        </h3>
      </div>
    </section>
  );
}
