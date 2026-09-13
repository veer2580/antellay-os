import React from 'react';
import { Network, Radar, Cpu, ArrowDown } from 'lucide-react';

export default function VisionSection() {
  const visionDomains = [
    {
      title: 'SPACE',
      caption: 'Machines beyond Earth.',
      image: '/assets/domain_space.png',
    },
    {
      title: 'AIR',
      caption: 'Intelligence in the skies.',
      image: '/assets/domain_air.png',
    },
    {
      title: 'LAND',
      caption: 'Autonomous systems on the ground.',
      image: '/assets/domain_land.png',
    },
    {
      title: 'SEA',
      caption: 'Intelligence across the oceans.',
      image: '/assets/domain_sea.png',
    },
  ];

  const pillars = [
    {
      title: 'EVERY MACHINE CONNECTED.',
      icon: Network,
      desc: 'Seamless inter-protocol data bus bridging legacy hardware and next-generation autonomous robotics.',
    },
    {
      title: 'EVERY SYSTEM AWARE.',
      icon: Radar,
      desc: 'Shared environmental 4D world models enabling global situational perception and risk pre-emption.',
    },
    {
      title: 'EVERY DECISION INTELLIGENT.',
      icon: Cpu,
      desc: 'Continuous real-time simulations calculating optimal multi-agent execution vectors before actuation.',
    },
  ];

  return (
    <section id="vision" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#020408] border-b border-cyan-900/30 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20 telemetry-grid" />

      {/* Top Vision Statement (Page 5) */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-20">
        <span className="font-mono text-xs sm:text-sm tracking-[0.35em] text-cyan-400 uppercase font-semibold border border-cyan-500/30 px-3.5 py-1 rounded-full bg-cyan-950/40 mb-6 inline-block">
          OUR VISION
        </span>

        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-[0.18em] text-white uppercase mt-4 mb-6 leading-tight">
          A WORLD WHERE INTELLIGENCE MOVES WITH THE MACHINES.
        </h2>

        <p className="font-sans text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          We envision a future where autonomous machines, infrastructure and intelligent systems operate as one connected physical ecosystem.
        </p>
      </div>

      {/* Section 2: From Isolated Machines to One Connected Autonomous World (Page 5) */}
      <div className="relative z-10 max-w-4xl mx-auto mb-24 p-8 sm:p-12 rounded-2xl border border-cyan-500/25 bg-[#040816]/80 backdrop-blur-md text-center shadow-[0_0_40px_rgba(0,229,255,0.1)]">
        <h3 className="font-display text-2xl sm:text-4xl font-extrabold tracking-[0.2em] text-white uppercase mb-6">
          FROM ISOLATED MACHINES TO ONE CONNECTED AUTONOMOUS WORLD.
        </h3>

        <div className="space-y-4 max-w-2xl mx-auto text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
          <p>
            The future will not be defined by a single robot, satellite or autonomous vehicle. It will be defined by how millions of intelligent systems communicate, understand their environment and work together.
          </p>
          <p className="text-cyan-300 font-medium">
            Antellay OS is being built to become the intelligence and orchestration layer connecting that future.
          </p>
        </div>
      </div>

      {/* Section 3: ONE VISION. FOUR DOMAINS. (Page 5) */}
      <div className="relative z-10 max-w-6xl mx-auto mb-28">
        <div className="text-center mb-12">
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[0.2em] text-white uppercase">
            ONE VISION. FOUR DOMAINS.
          </h3>
          <div className="w-20 h-0.5 bg-cyan-400 mx-auto mt-3" />
        </div>

        {/* 4 Converging Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visionDomains.map((vd) => (
            <div
              key={vd.title}
              className="group rounded-xl border border-slate-800 bg-[#040916]/80 overflow-hidden hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(0,229,255,0.2)] transition-all duration-300 flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={vd.image}
                  alt={vd.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040916] via-transparent to-transparent" />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-display text-xl font-bold tracking-[0.18em] text-white group-hover:text-cyan-300 transition-colors">
                    {vd.title}
                  </h4>
                  <p className="font-mono text-xs text-cyan-400/90 mt-1">
                    {vd.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Convergence Connector down to ANTELLAY OS Core */}
        <div className="flex flex-col items-center mt-8">
          <div className="h-8 w-[1px] bg-gradient-to-b from-cyan-400 to-transparent" />
          <div className="px-8 py-3 rounded-xl border border-cyan-400/80 bg-[#050f24] shadow-[0_0_30px_rgba(0,229,255,0.35)]">
            <span className="font-display text-lg font-extrabold tracking-[0.25em] text-white">
              ANTELLAY OS
            </span>
          </div>
        </div>
      </div>

      {/* Section 4: Panoramic Connected Autonomous World (Page 5) */}
      <div className="relative z-10 max-w-6xl mx-auto mb-20">
        <div className="text-center mb-8">
          <h3 className="font-display text-2xl sm:text-4xl font-extrabold tracking-[0.2em] text-white uppercase">
            THE PHYSICAL WORLD WILL BECOME INTELLIGENT.
          </h3>
        </div>

        <div className="relative rounded-2xl border border-cyan-500/30 overflow-hidden shadow-[0_0_45px_rgba(0,229,255,0.15)] bg-[#030612]">
          <img
            src="/assets/panoramic_world.png"
            alt="The physical world will become intelligent - connected autonomous systems"
            className="w-full h-auto max-h-[420px] object-cover filter brightness-95 contrast-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Bottom 3 Value Pillars (Page 5) */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-slate-800">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.title}
              className="p-6 rounded-xl border border-slate-800/90 bg-[#040816]/70 hover:border-cyan-500/40 transition-all flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-xl border border-cyan-500/30 bg-cyan-950/40 flex items-center justify-center text-cyan-400 mb-4 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all">
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="font-display text-base font-bold tracking-[0.18em] text-white group-hover:text-cyan-300 transition-colors mb-2">
                {pillar.title}
              </h4>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
