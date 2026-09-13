import React from 'react';
import { ArrowDown, ArrowRight, Sparkles, Network, Cpu, Lightbulb, Compass } from 'lucide-react';

export default function SignalsSection() {
  const narrativeSteps = [
    {
      title: 'SIGNALS.',
      subtitle: 'Raw dimensional frequency & telemetry',
      bgImg: '/assets/strip_signals.png',
      icon: Sparkles,
      desc: 'Every system, machine, and movement in the physical world creates an ongoing trail of telemetry.',
    },
    {
      title: 'PATTERNS.',
      subtitle: 'Multi-domain synthesis & correlation',
      bgImg: '/assets/strip_patterns.png',
      icon: Network,
      desc: 'Isolated data points coalesce into observable structural vectors across air, land, sea, and space.',
    },
    {
      title: 'INTELLIGENCE.',
      subtitle: 'Autonomous situational models',
      bgImg: '/assets/strip_intelligence.png',
      icon: Cpu,
      desc: 'Real-time contextual processing interprets complex environments into actionable machine understanding.',
    },
    {
      title: 'POSSIBILITY.',
      subtitle: 'Dynamic multi-future scenarios',
      bgImg: '/assets/strip_possibility.png',
      icon: Lightbulb,
      desc: 'Extrapolating outcomes before physical execution to de-risk autonomous machine operations.',
    },
    {
      title: "WHAT'S NEXT?",
      subtitle: 'Predictive velocity & execution',
      bgImg: '/assets/strip_whats_next.png',
      icon: Compass,
      desc: 'Anticipating physical events and orchestrating authorized interventions before anomalies occur.',
    },
  ];

  return (
    <section id="signals" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#020408] border-b border-cyan-900/30 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20 telemetry-grid" />

      {/* Top Header & Scroll Prompt */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-20 flex flex-col items-center">
        {/* Brand Mark */}
        <div className="inline-flex items-center gap-2 font-display text-sm tracking-[0.4em] text-cyan-400 mb-6 uppercase">
          <span>x</span>
          <span className="font-mono font-bold">T</span>
          <span>.</span>
          <span className="font-mono font-bold">T</span>
        </div>

        {/* Planet Horizon Arc Graphic */}
        <div className="relative w-full max-w-lg h-24 mb-4 flex items-center justify-center">
          <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#00e5ff]" />
          <div className="absolute -top-10 w-48 h-20 bg-cyan-400/20 rounded-full blur-2xl" />
        </div>

        {/* Scroll Indicator from PDF */}
        <div className="flex flex-col items-center gap-2 text-slate-400">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-cyan-300">
            SCROLL
          </span>
          <ArrowDown className="w-4 h-4 text-cyan-400 animate-bounce" />
        </div>
      </div>

      {/* 5-Stage Cinematic Narrative Cards */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        {narrativeSteps.map((step, idx) => {
          const IconComponent = step.icon;
          return (
            <div
              key={step.title}
              className="group relative rounded-xl border border-cyan-500/20 bg-space-900/80 overflow-hidden hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(0,229,255,0.2)] transition-all duration-500"
            >
              {/* Card Background Graphic with parallax feel */}
              <div className="absolute inset-0 opacity-40 group-hover:opacity-75 transition-opacity duration-700">
                <img
                  src={step.bgImg}
                  alt={step.title}
                  className="w-full h-full object-cover mix-blend-screen scale-100 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-space-950 via-space-900/75 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="relative z-10 p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="space-y-2 max-w-xl">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-cyan-400 font-semibold px-2 py-0.5 rounded border border-cyan-500/30 bg-cyan-950/40">
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-xs tracking-widest text-slate-400 uppercase">
                      {step.subtitle}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[0.18em] text-white group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-xl border border-cyan-500/30 bg-[#061226]/80 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all self-end sm:self-center">
                  <IconComponent className="w-6 h-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* WHNxT.TODAY Announcement Card */}
      <div className="relative z-10 max-w-4xl mx-auto mt-16 p-10 rounded-2xl border border-cyan-400/30 bg-gradient-to-b from-[#061226]/90 via-[#040916]/80 to-[#020408] text-center shadow-[0_0_50px_rgba(0,229,255,0.15)]">
        <div className="inline-block px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-[10px] font-mono tracking-widest text-cyan-400 uppercase mb-4">
          PREDICTIVE HORIZON
        </div>

        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-[0.22em] text-white mb-3">
          W H N × T . T O D A Y
        </h2>

        <p className="font-mono text-xs sm:text-sm tracking-[0.35em] text-cyan-300 uppercase mb-8">
          INTELLIGENCE & PREDICTION
        </p>

        <div className="border-t border-slate-800/80 pt-8 mt-4 flex flex-col items-center">
          <p className="font-display text-sm sm:text-base tracking-[0.25em] text-slate-300 uppercase mb-6">
            SEE WHAT COMES NEXT.
          </p>

          <a
            href="#futuhr"
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-sm border border-cyan-500/50 bg-cyan-950/40 hover:bg-cyan-500/20 text-white font-display text-xs sm:text-sm tracking-[0.25em] uppercase transition-all duration-300 hover:border-cyan-300 hover:shadow-[0_0_25px_rgba(0,229,255,0.35)]"
          >
            <span>ENTER WHNXT.TODAY</span>
            <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
