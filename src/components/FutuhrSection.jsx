import React, { useState, useEffect } from 'react';
import { ArrowRight, Globe, Activity, ShieldCheck, Zap, Maximize2, RefreshCw } from 'lucide-react';

export default function FutuhrSection() {
  const [activeSignalIndex, setActiveSignalIndex] = useState(0);
  const [pulseCoords, setPulseCoords] = useState({ lat: '37.7749° N', lon: '122.4194° W', elevation: '412 KM' });

  // Simulated live telemetry rotation
  useEffect(() => {
    const coordsList = [
      { lat: '37.7749° N', lon: '122.4194° W', elevation: '412 KM' },
      { lat: '51.5074° N', lon: '0.1278° W', elevation: '528 KM' },
      { lat: '35.6762° N', lon: '139.6503° E', elevation: '390 KM' },
      { lat: '1.3521° N', lon: '103.8198° E', elevation: '475 KM' },
    ];
    const timer = setInterval(() => {
      setActiveSignalIndex((prev) => (prev + 1) % coordsList.length);
      setPulseCoords(coordsList[(activeSignalIndex + 1) % coordsList.length]);
    }, 4000);
    return () => clearInterval(timer);
  }, [activeSignalIndex]);

  return (
    <section id="futuhr" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#020408] border-b border-cyan-900/30 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 telemetry-grid" />

      {/* Top Futuhr Header with Glowing Globe */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-24 flex flex-col items-center">
        {/* Glowing Planet Globe */}
        <div className="relative w-full max-w-xl h-48 sm:h-64 mb-6 flex items-center justify-center">
          <img
            src="/assets/futuhr_globe.png"
            alt="Futuhr Global Predictive Intelligence"
            className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(0,229,255,0.4)]"
            loading="lazy"
          />
        </div>

        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[0.3em] text-white uppercase mb-4">
          F U T U H R
        </h2>
        <p className="font-mono text-xs sm:text-sm tracking-[0.4em] text-cyan-400 uppercase mb-4">
          FUTURE PREDICTIVE INTELLIGENCE
        </p>
        <p className="font-display text-sm tracking-[0.25em] text-slate-300 uppercase mb-8">
          SEE WHAT COMES NEXT.
        </p>

        <a
          href="#architecture"
          className="group inline-flex items-center gap-3 px-8 py-3 rounded-sm border border-cyan-500/50 bg-cyan-950/40 hover:bg-cyan-500/20 text-white font-display text-xs sm:text-sm tracking-[0.25em] uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,229,255,0.3)]"
        >
          <span>EXPLORE FUTUHR</span>
          <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* 4 Conceptual Narrative Panels from Page 3 */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {/* Panel 1: Everything Leaves a Signal */}
        <div className="rounded-xl border border-cyan-500/20 bg-[#050b18]/80 p-8 flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300">
          <div>
            <span className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase border border-cyan-500/30 px-2 py-0.5 rounded bg-cyan-950/40">
              TELEMETRY EMISSION
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-[0.15em] text-white mt-4 mb-3">
              EVERYTHING LEAVES A SIGNAL.
            </h3>
            <p className="text-sm font-mono text-cyan-300/80 tracking-wider">
              Markets. People. Environment. Technology. Systems.
            </p>
          </div>
          {/* Audio / Topographic wave visualization */}
          <div className="mt-8 pt-6 border-t border-slate-800/80">
            <div className="h-16 flex items-end justify-between gap-1.5 px-2 bg-[#02050e] rounded-lg p-3 border border-slate-800">
              {[40, 65, 30, 85, 45, 95, 70, 40, 80, 60, 90, 50, 75, 35, 90, 60, 85, 40, 70, 95, 60, 80, 45, 90].map(
                (val, idx) => (
                  <div
                    key={idx}
                    className="w-full bg-gradient-to-t from-cyan-600 to-cyan-300 rounded-t-sm"
                    style={{ height: `${val}%`, opacity: 0.3 + (val / 100) * 0.7 }}
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* Panel 2: Signals Become Patterns */}
        <div className="rounded-xl border border-cyan-500/20 bg-[#050b18]/80 p-8 flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300">
          <div>
            <span className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase border border-cyan-500/30 px-2 py-0.5 rounded bg-cyan-950/40">
              STRUCTURAL CONVERGENCE
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-[0.15em] text-white mt-4 mb-3">
              SIGNALS BECOME PATTERNS.
            </h3>
            <p className="text-sm font-sans text-slate-300 leading-relaxed">
              Reveal what remains invisible. By fusing multi-modal telemetry across orbital, atmospheric, and terrestrial streams, macro correlations emerge.
            </p>
          </div>
          {/* Neural Mesh Diagram */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-center">
            <div className="w-full h-16 bg-[#02050e] rounded-lg border border-slate-800 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-around px-6">
                {[1, 2, 3, 4, 5].map((n) => (
                  <div key={n} className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#00e5ff] relative">
                    <div className="absolute -inset-1 rounded-full bg-cyan-400/30 animate-ping" />
                  </div>
                ))}
              </div>
              <svg className="absolute inset-0 w-full h-full stroke-cyan-500/30 stroke-[1]">
                <line x1="15%" y1="50%" x2="35%" y2="50%" />
                <line x1="35%" y1="50%" x2="55%" y2="50%" />
                <line x1="55%" y1="50%" x2="75%" y2="50%" />
                <line x1="75%" y1="50%" x2="90%" y2="50%" />
              </svg>
            </div>
          </div>
        </div>

        {/* Panel 3: From Patterns to Intelligence */}
        <div className="rounded-xl border border-cyan-500/20 bg-[#050b18]/80 p-8 flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300">
          <div>
            <span className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase border border-cyan-500/30 px-2 py-0.5 rounded bg-cyan-950/40">
              SYNTHESIS PIPELINE
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-[0.15em] text-white mt-4 mb-3">
              FROM PATTERNS TO INTELLIGENCE.
            </h3>
            {/* Step Diagram from PDF */}
            <div className="grid grid-cols-3 gap-2 text-center my-6">
              <div className="p-3 rounded-lg border border-slate-800 bg-[#030712]">
                <div className="w-8 h-8 mx-auto mb-2 rounded bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center">
                  <span className="text-[10px] text-cyan-400">:::</span>
                </div>
                <span className="font-mono text-xs text-white tracking-widest uppercase">SIGNAL</span>
              </div>
              <div className="p-3 rounded-lg border border-slate-800 bg-[#030712]">
                <div className="w-8 h-8 mx-auto mb-2 rounded bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center">
                  <span className="text-[10px] text-cyan-400">◇</span>
                </div>
                <span className="font-mono text-xs text-white tracking-widest uppercase">PATTERN</span>
              </div>
              <div className="p-3 rounded-lg border border-cyan-500/40 bg-cyan-950/20 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                <div className="w-8 h-8 mx-auto mb-2 rounded bg-cyan-500/20 border border-cyan-400 flex items-center justify-center">
                  <span className="text-xs text-cyan-300">◈</span>
                </div>
                <span className="font-mono text-xs text-cyan-300 font-bold tracking-widest uppercase">INTELLIGENCE</span>
              </div>
            </div>
          </div>
          <p className="text-xs font-mono text-slate-400 tracking-wide">
            Automated contextual translation from scattered physical telemetry to predictive situational intelligence.
          </p>
        </div>

        {/* Panel 4: The Future is Not One Path */}
        <div className="rounded-xl border border-cyan-500/20 bg-[#050b18]/80 p-8 flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300">
          <div>
            <span className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase border border-cyan-500/30 px-2 py-0.5 rounded bg-cyan-950/40">
              MULTIVARIATE SIMULATION
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-[0.15em] text-white mt-4 mb-3">
              THE FUTURE IS NOT ONE PATH.
            </h3>
            {/* 4 Status Sliders from PDF */}
            <div className="space-y-3.5 my-5">
              {[
                { label: 'POSSIBILITY', percent: '94%' },
                { label: 'PROBABILITY', percent: '78%' },
                { label: 'SCENARIO', percent: '86%' },
                { label: 'CONFIDENCE', percent: '92%' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-[11px] font-mono tracking-widest text-slate-300 mb-1">
                    <span>{item.label}</span>
                    <span className="text-cyan-400 font-bold">{item.percent}</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-600 to-cyan-300 rounded-full shadow-[0_0_8px_#00e5ff]"
                      style={{ width: item.percent }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs font-mono text-slate-400 tracking-wide">
            Branching probability trees calculate parallel future states before physical action is authorized.
          </p>
        </div>
      </div>

      {/* Futuristic Global HUD Dashboard from Page 3 */}
      <div className="relative z-10 max-w-6xl mx-auto mb-20 rounded-2xl border border-cyan-500/30 bg-[#040916]/90 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(0,229,255,0.15)]">
        {/* HUD Top Bar */}
        <div className="flex flex-wrap items-center justify-between pb-6 mb-6 border-b border-cyan-500/20 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-white uppercase font-bold">
              GLOBAL INTELLIGENCE VIEW // ORBITAL TELEMETRY
            </span>
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px] text-slate-400">
            <span>LAT: <strong className="text-cyan-300">{pulseCoords.lat}</strong></span>
            <span>LON: <strong className="text-cyan-300">{pulseCoords.lon}</strong></span>
            <span>ALT: <strong className="text-cyan-300">{pulseCoords.elevation}</strong></span>
          </div>
        </div>

        {/* 3 Columns: CURRENT SIGNALS | 3D GLOBE | FORECAST */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left: CURRENT SIGNALS (Page 3) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs tracking-widest text-cyan-400 font-semibold uppercase">
                ^ CURRENT SIGNALS
              </span>
              <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
            </div>

            {[
              { title: 'Market Shift', status: 'ACTIVE', trend: '+14.2%', points: [30, 45, 60, 50, 75, 80] },
              { title: 'Emerging Pattern', status: 'IDENTIFIED', trend: 'OPTIMAL', points: [20, 30, 50, 70, 65, 90] },
              { title: 'Environmental Change', status: 'STABLE', trend: 'NORMAL', points: [60, 55, 58, 62, 59, 61] },
              { title: 'Global Activity', status: 'SYNCHRONIZED', trend: '99.4%', points: [40, 60, 70, 85, 80, 95] },
            ].map((sig) => (
              <div
                key={sig.title}
                className="p-3.5 rounded-lg border border-slate-800 bg-[#020612] hover:border-cyan-500/40 transition-colors"
              >
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-sans text-slate-200 font-medium">{sig.title}</span>
                  <span className="font-mono text-[10px] text-cyan-400 font-bold px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
                    {sig.trend}
                  </span>
                </div>
                {/* Micro sparkline */}
                <div className="h-6 flex items-end gap-1">
                  {sig.points.map((p, i) => (
                    <div
                      key={i}
                      className="w-full bg-cyan-500/50 rounded-t-sm"
                      style={{ height: `${p}%` }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Center: GLOBAL INTELLIGENCE VIEW (Holographic Globe HUD) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center p-4 min-h-[320px]">
            <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center">
              {/* Radar ring effects */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-cyan-500/10 border-dashed animate-spin" style={{ animationDuration: '30s' }} />
              
              <img
                src="/assets/hud_center_globe.png"
                alt="Global Intelligence HUD telemetry view"
                className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(0,229,255,0.4)] rounded-full"
                loading="lazy"
              />

              {/* Reticle targeting element */}
              <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full border border-cyan-400 flex items-center justify-center animate-ping" />
            </div>

            <div className="font-mono text-[10px] tracking-widest text-slate-400 mt-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>EARTH TELEMETRY MATRIX • REAL-TIME MODEL</span>
            </div>
          </div>

          {/* Right: FORECAST (Page 3) */}
          <div className="lg:col-span-3 space-y-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs tracking-widest text-cyan-400 font-semibold uppercase">
                ^ FORECAST
              </span>
              <span className="font-mono text-[10px] text-slate-400">NEXT 24H</span>
            </div>

            <div className="p-4 rounded-lg border border-slate-800 bg-[#020612]">
              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                Emerging Activity
              </span>
              <div className="h-10 flex items-end gap-1 mb-4">
                {[15, 25, 40, 35, 60, 75, 90, 80, 70, 85, 95, 100].map((v, i) => (
                  <div
                    key={i}
                    className="w-full bg-gradient-to-t from-cyan-600 to-cyan-300 rounded-t-sm"
                    style={{ height: `${v}%` }}
                  />
                ))}
              </div>

              {/* Exact Metrics from PDF Page 3 */}
              <div className="border-t border-slate-800 pt-3 space-y-3">
                <div>
                  <span className="font-mono text-[10px] text-slate-400 tracking-wider block">
                    PROBABILITY
                  </span>
                  <span className="font-display text-3xl font-extrabold text-cyan-300">
                    78%
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-slate-400 tracking-wider block">
                    CONFIDENCE
                  </span>
                  <span className="font-mono text-sm font-bold text-emerald-400 tracking-widest">
                    HIGH
                  </span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded border border-slate-800/80 bg-[#020612]/60 text-center">
              <span className="font-mono text-[10px] text-slate-500 tracking-widest uppercase">
                CONCEPTUAL FORECAST
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* What's Next CTA Panel from Page 3 */}
      <div className="relative z-10 max-w-4xl mx-auto text-center border-t border-slate-800 pt-16 mt-8 flex flex-col items-center">
        <h3 className="font-display text-3xl sm:text-5xl font-extrabold tracking-[0.2em] text-white uppercase mb-3">
          WHAT'S NEXT?
        </h3>
        <p className="font-display text-base sm:text-lg tracking-[0.3em] text-cyan-300 uppercase mb-2">
          F U T U H R
        </p>
        <p className="font-mono text-xs tracking-[0.35em] text-slate-400 uppercase mb-8">
          FUTURE PREDICTIVE INTELLIGENCE
        </p>

        <a
          href="#architecture"
          className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-sm border border-cyan-500/50 bg-cyan-950/40 hover:bg-cyan-500/20 text-white font-display text-xs sm:text-sm tracking-[0.25em] uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,229,255,0.35)]"
        >
          <span>ENTER THE INTELLIGENCE</span>
          <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1.5 transition-transform" />
        </a>

        {/* Section Legal Attribution from Page 3 Footer */}
        <div className="w-full flex flex-wrap items-center justify-between text-xs font-mono text-slate-500 pt-16 mt-12 border-t border-slate-900 gap-4">
          <span className="tracking-widest text-cyan-400">FUTUHR</span>
          <span>© ALL RIGHTS RESERVED.</span>
          <span>
            A ANTELLAY LABS •{' '}
            <a
              href="https://celebso.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Celebso Group - Building the Future Through Technology & Innovation"
              className="text-cyan-400 hover:text-cyan-200 hover:underline transition-colors font-semibold"
            >
              A CELEBSO GROUP
            </a>
            .
          </span>
        </div>
      </div>
    </section>
  );
}
