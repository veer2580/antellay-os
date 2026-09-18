import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Activity, ArrowRight, Sparkles, Sliders, ShieldCheck, Zap, Globe, RefreshCw, Wind, MousePointer } from 'lucide-react';

export default function FutuhrPage() {
  const [pulseCoords, setPulseCoords] = useState({ lat: '37.7749° N', lon: '122.4194° W', elevation: '412 KM' });
  const [simProbability, setSimProbability] = useState(78);
  const [marketWeight, setMarketWeight] = useState(65);
  const [envWeight, setEnvWeight] = useState(80);
  const [kineticWeight, setKineticWeight] = useState(75);

  useEffect(() => {
    // Dynamic calculation of composite probability based on slider inputs
    const calculated = Math.min(99, Math.max(50, Math.round((marketWeight * 0.3) + (envWeight * 0.3) + (kineticWeight * 0.4))));
    setSimProbability(calculated);
  }, [marketWeight, envWeight, kineticWeight]);

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-cyan-400 uppercase font-semibold border border-cyan-500/30 px-3.5 py-1 rounded-full bg-cyan-950/40 inline-block mb-3">
          PREDICTIVE INTELLIGENCE
        </span>
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[0.25em] text-white uppercase mb-3 leading-tight">
          F U T U H R
        </h1>
        <p className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-cyan-400 uppercase mb-3">
          FUTURE PREDICTIVE INTELLIGENCE
        </p>
        <p className="font-display text-xs tracking-[0.2em] text-slate-300 uppercase">
          SEE WHAT COMES NEXT.
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative w-full mb-16 overflow-hidden border-y border-cyan-500/20 shadow-[0_0_40px_rgba(0,229,255,0.08)]">
        <img src="/assets/futuhr_hero.jpg" alt="Antellay OS — Predictive intelligence neural network" className="w-full h-auto object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent pointer-events-none" />
      </div>

      {/* SECTION: 4 CONCEPTUAL PANELS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {/* Panel 1 */}
        <div className="rounded-2xl border border-cyan-500/20 bg-[#050b18]/80 p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-400/50 transition-all">
          <div>
            <span className="font-mono text-[9px] text-cyan-400 tracking-widest uppercase border border-cyan-500/30 px-2 py-0.5 rounded bg-cyan-950/40">
              TELEMETRY EMISSION
            </span>
            <h3 className="font-display text-base sm:text-lg font-bold tracking-[0.15em] text-white mt-3 mb-2">
              EVERYTHING LEAVES A SIGNAL.
            </h3>
            <p className="text-xs font-mono text-cyan-300/80 tracking-wider">
              Markets. People. Environment. Technology. Systems.
            </p>
          </div>
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

        {/* Panel 2 */}
        <div className="rounded-2xl border border-cyan-500/20 bg-[#050b18]/80 p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-400/50 transition-all">
          <div>
            <span className="font-mono text-[9px] text-cyan-400 tracking-widest uppercase border border-cyan-500/30 px-2 py-0.5 rounded bg-cyan-950/40">
              STRUCTURAL CONVERGENCE
            </span>
            <h3 className="font-display text-base sm:text-lg font-bold tracking-[0.15em] text-white mt-3 mb-2">
              SIGNALS BECOME PATTERNS.
            </h3>
            <p className="text-xs font-sans text-slate-300 leading-relaxed">
              Reveal what remains invisible. Multi-modal observations coalesce into observable vectors across physical operations.
            </p>
          </div>
          <div className="mt-6 pt-5 border-t border-slate-800/80">
            <div className="h-14 bg-[#02050e] rounded-lg border border-slate-800 relative flex items-center justify-around px-6">
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#00e5ff] relative">
                  <div className="absolute -inset-1 rounded-full bg-cyan-400/30 animate-ping" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Panel 3 */}
        <div className="rounded-2xl border border-cyan-500/20 bg-[#050b18]/80 p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-400/50 transition-all">
          <div>
            <span className="font-mono text-[9px] text-cyan-400 tracking-widest uppercase border border-cyan-500/30 px-2 py-0.5 rounded bg-cyan-950/40">
              SYNTHESIS PIPELINE
            </span>
            <h3 className="font-display text-base sm:text-lg font-bold tracking-[0.15em] text-white mt-3 mb-2">
              FROM PATTERNS TO INTELLIGENCE.
            </h3>
            <div className="grid grid-cols-3 gap-2 text-center my-4">
              <div className="p-2.5 rounded-lg border border-slate-800 bg-[#030712]">
                <span className="text-[10px] text-cyan-400 block mb-0.5">:::</span>
                <span className="font-mono text-[11px] text-white tracking-widest uppercase">SIGNAL</span>
              </div>
              <div className="p-2.5 rounded-lg border border-slate-800 bg-[#030712]">
                <span className="text-[10px] text-cyan-400 block mb-0.5">◇</span>
                <span className="font-mono text-[11px] text-white tracking-widest uppercase">PATTERN</span>
              </div>
              <div className="p-2.5 rounded-lg border border-cyan-500/40 bg-cyan-950/20 shadow-[0_0_12px_rgba(0,229,255,0.2)]">
                <span className="text-[11px] text-cyan-300 block mb-0.5">◈</span>
                <span className="font-mono text-[11px] text-cyan-300 font-bold tracking-widest uppercase">INTELLIGENCE</span>
              </div>
            </div>
          </div>
          <p className="text-[11px] font-mono text-slate-400 tracking-wide">
            Dynamic contextual transformation from telemetry noise to actionable operational certainty.
          </p>
        </div>

        {/* Panel 4 */}
        <div className="rounded-2xl border border-cyan-500/20 bg-[#050b18]/80 p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-400/50 transition-all">
          <div>
            <span className="font-mono text-[9px] text-cyan-400 tracking-widest uppercase border border-cyan-500/30 px-2 py-0.5 rounded bg-cyan-950/40">
              PROBABILISTIC DYNAMICS
            </span>
            <h3 className="font-display text-base sm:text-lg font-bold tracking-[0.15em] text-white mt-3 mb-2">
              THE FUTURE IS NOT ONE PATH.
            </h3>
            <div className="space-y-3 my-5">
              {[
                { label: 'POSSIBILITY', percent: '94%' },
                { label: 'PROBABILITY', percent: `${simProbability}%` },
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
            Parallel scenario trees simulating outcomes to de-risk physical autonomous operations.
          </p>
        </div>
      </div>

      {/* SECTION: GLOBAL INTELLIGENCE HUD (From Page 3) */}
      <section className="mb-28 rounded-2xl border border-cyan-500/30 bg-[#040916]/90 p-6 sm:p-10 backdrop-blur-xl shadow-[0_0_50px_rgba(0,229,255,0.15)]">
        <div className="flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-cyan-500/20 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-white uppercase font-bold">
              GLOBAL INTELLIGENCE VIEW // LIVE MATRIX
            </span>
          </div>
          <div className="flex items-center gap-6 font-mono text-xs text-slate-400">
            <span>LAT: <strong className="text-cyan-300">{pulseCoords.lat}</strong></span>
            <span>LON: <strong className="text-cyan-300">{pulseCoords.lon}</strong></span>
            <span>ALT: <strong className="text-cyan-300">{pulseCoords.elevation}</strong></span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Signals */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-mono text-xs tracking-widest text-cyan-400 font-semibold uppercase block">
              ^ CURRENT SIGNALS
            </span>

            {[
              { title: 'Market Shift', status: 'ACTIVE', trend: '+14.2%', points: [30, 45, 60, 50, 75, 80] },
              { title: 'Emerging Pattern', status: 'IDENTIFIED', trend: 'OPTIMAL', points: [20, 30, 50, 70, 65, 90] },
              { title: 'Environmental Change', status: 'STABLE', trend: 'NORMAL', points: [60, 55, 58, 62, 59, 61] },
              { title: 'Global Activity', status: 'SYNCHRONIZED', trend: '99.4%', points: [40, 60, 70, 85, 80, 95] },
            ].map((sig) => (
              <div
                key={sig.title}
                className="p-4 rounded-xl border border-slate-800 bg-[#020612] hover:border-cyan-500/40 transition-colors"
              >
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-sans text-slate-200 font-medium">{sig.title}</span>
                  <span className="font-mono text-[10px] text-cyan-400 font-bold px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
                    {sig.trend}
                  </span>
                </div>
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

          {/* Center: Globe View */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center p-4 min-h-[320px]">
            <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-pulse" />
              <img
                src="/assets/hud_center_globe.png"
                alt="Global Intelligence HUD telemetry view"
                className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(0,229,255,0.4)] rounded-full"
                loading="lazy"
              />
            </div>
            <span className="font-mono text-[10px] tracking-widest text-slate-400 mt-4">
              TELEMETRY RESOLUTION: SUB-SECOND
            </span>
          </div>

          {/* Right: Forecast */}
          <div className="lg:col-span-3 space-y-5">
            <span className="font-mono text-xs tracking-widest text-cyan-400 font-semibold uppercase block">
              ^ FORECAST MATRIX
            </span>

            <div className="p-5 rounded-xl border border-slate-800 bg-[#020612]">
              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mb-2">
                Emerging Activity
              </span>
              <div className="h-10 flex items-end gap-1 mb-6">
                {[15, 25, 40, 35, 60, 75, 90, 80, 70, 85, 95, 100].map((v, i) => (
                  <div
                    key={i}
                    className="w-full bg-gradient-to-t from-cyan-600 to-cyan-300 rounded-t-sm"
                    style={{ height: `${v}%` }}
                  />
                ))}
              </div>

              <div className="border-t border-slate-800 pt-3 space-y-2">
                <div>
                  <span className="font-mono text-[9px] text-slate-400 tracking-wider block">
                    PROBABILITY
                  </span>
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-cyan-300">
                    {simProbability}%
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[9px] text-slate-400 tracking-wider block">
                    CONFIDENCE
                  </span>
                  <span className="font-mono text-xs font-bold text-emerald-400 tracking-widest">
                    HIGH
                  </span>
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded border border-slate-800 bg-[#020612]/60 text-center font-mono text-[9px] text-slate-500 uppercase tracking-widest">
              CONCEPTUAL FORECAST
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: INTERACTIVE SCENARIO SIMULATOR */}
      <section className="mb-16 p-6 sm:p-8 rounded-2xl border border-slate-800 bg-[#030714]">
        <div className="flex items-center gap-2.5 mb-4">
          <Sliders className="w-4 h-4 text-cyan-400" />
          <h3 className="font-display text-base sm:text-lg font-bold tracking-wider text-white uppercase">
            LIVE SIGNAL CALIBRATION SIMULATOR
          </h3>
        </div>
        <p className="text-xs text-slate-300 font-sans mb-6">
          Adjust multi-domain signal intensities below to observe real-time recalculation of the composite probability forecast.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
              <span>MARKET ACTIVITY WEIGHT</span>
              <span className="text-cyan-400 font-bold">{marketWeight}%</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={marketWeight}
              onChange={(e) => setMarketWeight(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
              <span>ENVIRONMENTAL CORRELATION</span>
              <span className="text-cyan-400 font-bold">{envWeight}%</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={envWeight}
              onChange={(e) => setEnvWeight(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
              <span>KINETIC ASSET TELEMETRY</span>
              <span className="text-cyan-400 font-bold">{kineticWeight}%</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={kineticWeight}
              onChange={(e) => setKineticWeight(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════
          KINETIC PARTICLE FIELD — Site-wide ASMR background
          ═════════════════════════════════════ */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-cyan-400 uppercase border border-cyan-500/20 px-3 py-1 rounded-full bg-cyan-950/30 inline-flex items-center gap-2 mb-3">
            <Wind className="w-3 h-3" />
            ATMOSPHERIC KINETIC INTERFACE
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-extrabold tracking-[0.18em] text-white uppercase mb-2.5">
            PARTICLE FIELD SIMULATION
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed flex items-center justify-center gap-2">
            <MousePointer className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0" />
            Move your cursor anywhere on the page to activate the magnetic vortex.
            Glass-shard particles throughout the background respond with friction-glow and orbital swirl physics.
          </p>
        </div>

        {/* Glassmorphic "window" into the global particle field */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-cyan-500/15 shadow-[0_0_50px_rgba(0,229,255,0.06)]" style={{ height: '320px' }}>
          {/* Semi-transparent glass so the global background shows through */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />

          {/* Framed sensor readout overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
            <div className="px-10 py-6 border border-white/[0.07] bg-black/25 backdrop-blur-sm rounded-sm text-center">
              <p className="font-mono text-white/25 tracking-[0.6em] uppercase text-xs mb-3">FUTUHR SENSOR FIELD — LIVE</p>
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-3" />
              <p className="font-mono text-[10px] text-cyan-500/40 tracking-[0.5em] uppercase mb-1">
                MOVE CURSOR ANYWHERE TO ACTIVATE VORTEX
              </p>
              <p className="font-mono text-[9px] text-white/10 tracking-widest uppercase">
                1,100 GLASS-SHARD PARTICLES · MAGNETIC RADIUS 220px
              </p>
            </div>
          </div>

          {/* Corner scan indicators */}
          <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-cyan-500/30" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-cyan-500/30" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-cyan-500/30" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-cyan-500/30" />
        </div>
      </section>

      {/* Bottom Navigation */}
      <div className="flex justify-between items-center pt-4 border-t border-white/5 mt-8">
        <Link to="/architecture" className="font-display text-xs tracking-widest text-slate-500 hover:text-slate-300 transition-colors">
          ← BACK TO ARCHITECTURE
        </Link>
        <Link to="/contact" className="font-display text-xs tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2">
          <span>START A CONVERSATION</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
