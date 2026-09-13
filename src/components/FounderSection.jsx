import React from 'react';
import { Quote, Sparkles, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function FounderSection() {
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
      desc: 'Each system runs on its own platform.',
    },
    {
      title: 'DIFFERENT PROTOCOLS',
      desc: 'Systems cannot speak the same language.',
    },
    {
      title: 'DIFFERENT DATA',
      desc: 'Data is isolated, incompatible and unusable.',
    },
    {
      title: 'DIFFERENT SYSTEMS',
      desc: 'No unified view. No unified control. No unified intelligence.',
    },
  ];

  return (
    <section id="founder" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#020408] border-b border-cyan-900/30 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20 telemetry-grid" />

      {/* Top Header from Page 8 */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-20">
        <p className="font-mono text-xs sm:text-sm tracking-[0.35em] text-cyan-400 uppercase font-semibold mb-4">
          EVERY GREAT TECHNOLOGY STARTS WITH A QUESTION.
        </p>

        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-[0.16em] text-white uppercase leading-tight">
          WHAT IF THE WHOLE WORLD COULD CONNECT?
        </h2>
      </div>

      {/* 3-Column Founder Feature (Page 8) */}
      <div className="relative z-10 max-w-6xl mx-auto mb-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Historical Evolution */}
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

        {/* Center Column: Veer Singh Portrait */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center">
          <div className="relative group max-w-[340px] w-full">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-b from-cyan-500/30 to-blue-600/10 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
            <div className="relative rounded-2xl border border-cyan-500/30 bg-[#040816] overflow-hidden shadow-2xl">
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

        {/* Right Column: The Vision & Quote */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-xl border border-cyan-500/30 bg-[#040818]/90 backdrop-blur-md shadow-[0_0_30px_rgba(0,229,255,0.1)]">
            <span className="font-mono text-xs text-cyan-400 font-bold tracking-widest uppercase block mb-3">
              THE VISION
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
      </div>

      {/* Fragmentation Section (Page 8) */}
      <div className="relative z-10 max-w-5xl mx-auto mb-28">
        <div className="text-center mb-8">
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-[0.18em] text-white uppercase mb-4">
            THE MACHINES ARE GETTING SMARTER.
          </h3>

          {/* 8 Machine Types Tags */}
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

          <div className="inline-block px-4 py-1.5 rounded-full border border-red-500/30 bg-red-950/20 text-red-400 font-mono text-xs tracking-widest uppercase mb-6">
            BUT THE WORLD IS STILL FRAGMENTED.
          </div>
        </div>

        {/* 4 Fragmentation Cards */}
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

        {/* Question & Resolution */}
        <div className="text-center p-6 rounded-xl border border-cyan-500/30 bg-cyan-950/20">
          <p className="font-mono text-xs text-slate-400 tracking-widest uppercase mb-2">
            WHO CONNECTS THEM?
          </p>
          <p className="font-display text-3xl font-extrabold tracking-[0.25em] text-cyan-300">
            ANTELLAY OS.
          </p>
        </div>
      </div>

      {/* THE BIG IDEA Arc (Page 8) */}
      <div className="relative z-10 max-w-5xl mx-auto mb-28 p-8 rounded-2xl border border-cyan-500/30 bg-[#040816]/80 text-center">
        <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase block mb-2">
          THE BIG IDEA
        </span>
        <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-[0.18em] text-white uppercase mb-8">
          ONE INTELLIGENCE LAYER OVER THE EARTH
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-lg bg-[#02050f] border border-slate-800 text-left">
            <span className="font-mono text-xs text-cyan-400 font-bold block">SPACE</span>
            <p className="text-xs text-slate-300 mt-1">Satellites, orbital systems, Earth observation.</p>
          </div>
          <div className="p-4 rounded-lg bg-[#02050f] border border-slate-800 text-left">
            <span className="font-mono text-xs text-cyan-400 font-bold block">AIR</span>
            <p className="text-xs text-slate-300 mt-1">Drones, aircraft and aerial autonomous systems.</p>
          </div>
          <div className="p-4 rounded-lg bg-[#02050f] border border-slate-800 text-left">
            <span className="font-mono text-xs text-cyan-400 font-bold block">LAND</span>
            <p className="text-xs text-slate-300 mt-1">Robots, autonomous vehicles and industrial systems.</p>
          </div>
          <div className="p-4 rounded-lg bg-[#02050f] border border-slate-800 text-left">
            <span className="font-mono text-xs text-cyan-400 font-bold block">SEA</span>
            <p className="text-xs text-slate-300 mt-1">Autonomous vessels and maritime infrastructure.</p>
          </div>
        </div>

        <div className="inline-block px-8 py-3 rounded-xl border border-cyan-400 bg-cyan-950/60 shadow-[0_0_30px_rgba(0,229,255,0.3)]">
          <span className="font-display text-base font-extrabold tracking-[0.2em] text-white block">
            ANTELLAY OS
          </span>
          <span className="font-mono text-[10px] text-cyan-300 tracking-widest block mt-0.5">
            THE INTELLIGENCE LAYER FOR THE PHYSICAL WORLD.
          </span>
        </div>
      </div>

      {/* WHAT ANTELLAY OS IS (Page 8) */}
      <div className="relative z-10 max-w-5xl mx-auto mb-28 p-8 sm:p-12 rounded-2xl border border-cyan-500/40 bg-gradient-to-b from-[#050e24] to-[#02050f] shadow-[0_0_50px_rgba(0,229,255,0.15)]">
        <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase block mb-4">
          WHAT ANTELLAY OS IS
        </span>

        <div className="space-y-2 font-display text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-[0.15em] text-white uppercase mb-8 leading-tight">
          <p className="text-slate-400">ANTELLAY OS IS NOT A MACHINE.</p>
          <p className="text-slate-400">IT IS NOT A ROBOT.</p>
          <p className="text-slate-400">IT IS NOT A SATELLITE.</p>
          <p className="text-cyan-300 glow-text-cyan">
            IT IS THE SOFTWARE LAYER THAT CONNECTS THEM.
          </p>
        </div>

        {/* 8-Node System Architecture Pipeline */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-cyan-500/20 pt-8">
          {[
            'MACHINES',
            'DATA',
            'ANTELLAY OS',
            'WORLD MODEL',
            'INTELLIGENCE',
            'PREDICTION',
            'SIMULATION',
            'DECISION',
            'AUTHORIZED ACTION',
          ].map((item, idx) => (
            <div
              key={item}
              className="p-3 rounded bg-[#030714] border border-slate-800 text-center font-mono text-xs text-slate-300"
            >
              <span className="text-[9px] text-cyan-400 block">NODE 0{idx + 1}</span>
              <span className="font-bold text-white">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* THE VISION & THE FUTURE (Bottom of Page 8) */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-8 border-t border-slate-800">
        <div className="p-8 rounded-xl border border-slate-800 bg-[#040816]">
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase block mb-3">
            THE VISION
          </span>
          <h3 className="font-display text-2xl font-bold tracking-wider text-white uppercase mb-4">
            ONE WORLD. ONE INTELLIGENCE LAYER. ONE CONNECTED ECOSYSTEM.
          </h3>
          <div className="space-y-2 font-sans text-xs sm:text-sm text-slate-300">
            <p>We envision a world where intelligent machines do not operate as isolated systems.</p>
            <p className="text-cyan-300 font-medium">They communicate.</p>
            <p>They share context.</p>
            <p>They understand their environment.</p>
            <p>They predict.</p>
            <p>They simulate.</p>
            <p>They make better decisions.</p>
            <p className="text-emerald-400 font-medium">And, where authorized, they act.</p>
          </div>
        </div>

        <div className="p-8 rounded-xl border border-slate-800 bg-[#040816]">
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase block mb-3">
            THE FUTURE
          </span>
          <h3 className="font-display text-2xl font-bold tracking-wider text-white uppercase mb-4">
            A WORLD WHERE INTELLIGENCE MOVES WITH THE MACHINES.
          </h3>
          <div className="rounded-lg overflow-hidden border border-slate-800">
            <img
              src="/assets/panoramic_world.png"
              alt="Autonomous Future World"
              className="w-full h-44 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
