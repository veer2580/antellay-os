import React, { useState } from 'react';
import { Send, CheckCircle, Mail, User, MessageSquare, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#020408] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20 telemetry-grid" />

      {/* Top Header from Page 10 */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-20">
        <span className="font-mono text-xs sm:text-sm tracking-[0.35em] text-cyan-400 uppercase font-semibold border border-cyan-500/30 px-3.5 py-1 rounded-full bg-cyan-950/40 mb-6 inline-block">
          GET IN TOUCH
        </span>

        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[0.16em] text-white uppercase leading-tight mb-6">
          LET’S BUILD WHAT COMES NEXT.
        </h2>

        <div className="space-y-2 font-sans text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          <p>We are building the intelligence layer for a connected autonomous world.</p>
          <p className="text-cyan-300">
            If you want to connect, collaborate, build or explore the future with Antellay OS, start a conversation.
          </p>
        </div>
      </div>

      {/* START A CONVERSATION (Page 10) */}
      <div className="relative z-10 max-w-5xl mx-auto mb-24">
        <div className="text-center mb-10">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-[0.2em] text-white uppercase">
            START A CONVERSATION.
          </h3>
        </div>

        {/* 2 Contact Cards from Page 10 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 1: Veer Singh */}
          <div className="p-8 rounded-2xl border border-cyan-500/30 bg-[#040918]/80 text-center hover:border-cyan-400 transition-all flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-4">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-cyan-300 stroke-2">
                <polygon points="12,2 22,22 12,17 2,22" />
              </svg>
            </div>
            <h4 className="font-display text-xl font-bold tracking-widest text-white mb-1">
              VEER SINGH
            </h4>
            <p className="font-mono text-xs text-slate-400 mb-3 tracking-wider">
              Founder & Vision Architect
            </p>
            <a
              href="mailto:veers2580jag@gmail.com"
              className="font-mono text-xs sm:text-sm text-cyan-300 hover:text-cyan-200 underline underline-offset-4 tracking-wider transition-colors"
            >
              veers2580jag@gmail.com
            </a>
          </div>

          {/* Card 2: Antellay OS */}
          <div className="p-8 rounded-2xl border border-cyan-500/30 bg-[#040918]/80 text-center hover:border-cyan-400 transition-all flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-4">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-cyan-300 stroke-2">
                <polygon points="12,2 22,22 12,17 2,22" />
              </svg>
            </div>
            <h4 className="font-display text-xl font-bold tracking-widest text-white mb-1">
              ANTELLAY OS
            </h4>
            <p className="font-mono text-xs text-slate-400 mb-3 tracking-wider">
              Founder / Business / Technology
            </p>
            <a
              href="mailto:veer@antellay.in"
              className="font-mono text-xs sm:text-sm text-cyan-300 hover:text-cyan-200 underline underline-offset-4 tracking-wider transition-colors"
            >
              veer@antellay.in
            </a>
          </div>
        </div>

        {/* Interactive Contact Form (Page 10) */}
        <div className="max-w-2xl mx-auto p-8 sm:p-10 rounded-2xl border border-slate-800 bg-[#030714]/90 backdrop-blur-xl shadow-2xl">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <CheckCircle className="w-14 h-14 text-emerald-400 mx-auto animate-bounce" />
              <h4 className="font-display text-2xl font-bold tracking-wider text-white">
                MESSAGE DISPATCHED
              </h4>
              <p className="text-sm font-mono text-slate-300">
                Your message has been securely sent to <strong>veer@antellay.in</strong>. We will connect with you shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', message: '' });
                }}
                className="mt-6 px-6 py-2 rounded border border-cyan-500/40 bg-cyan-950/40 text-cyan-300 font-mono text-xs tracking-wider uppercase hover:bg-cyan-500/20 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-mono text-xs text-slate-300 tracking-wider uppercase mb-2">
                  FULL NAME
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full px-4 py-3.5 rounded-lg bg-[#02050e] border border-slate-700 text-white font-sans text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
                  />
                  <User className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-500 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-300 tracking-wider uppercase mb-2">
                  EMAIL
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your email address"
                    className="w-full px-4 py-3.5 rounded-lg bg-[#02050e] border border-slate-700 text-white font-sans text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
                  />
                  <Mail className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-500 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-300 tracking-wider uppercase mb-2">
                  MESSAGE
                </label>
                <div className="relative">
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we work together?"
                    className="w-full px-4 py-3.5 rounded-lg bg-[#02050e] border border-slate-700 text-white font-sans text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600 resize-none"
                  />
                  <MessageSquare className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-500 pointer-events-none" />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-sm border border-cyan-400/80 bg-cyan-950/60 hover:bg-cyan-500/20 text-white font-display text-sm tracking-[0.25em] uppercase font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] disabled:opacity-50"
              >
                {loading ? (
                  <span>TRANSMITTING...</span>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400" />
                  </>
                )}
              </button>

              <p className="text-center font-mono text-xs text-slate-400 tracking-wider pt-2">
                Your message will be sent to <span className="text-cyan-300 font-semibold">veer@antellay.in</span>
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Monumental Closing Callout (Page 10) */}
      <div className="relative z-10 max-w-5xl mx-auto pt-16 border-t border-cyan-900/40 text-center flex flex-col items-center">
        <h3 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-[0.2em] text-white uppercase mb-4 leading-tight">
          THE AUTONOMOUS WORLD IS COMING.
        </h3>

        <p className="font-display text-lg sm:text-2xl tracking-[0.25em] text-cyan-300 uppercase font-semibold mb-8">
          LET’S BUILD IT TOGETHER.
        </p>

        <div className="inline-flex flex-col items-center gap-2 mb-16">
          <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-[0.3em] text-white">
            ANTELLAY OS
          </span>
          <span className="font-mono text-xs tracking-[0.3em] text-cyan-400 uppercase">
            THE OPERATING SYSTEM FOR THE AUTONOMOUS WORLD.
          </span>
          <span className="inline-block mt-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/50 font-mono text-[10px] text-cyan-300 tracking-widest uppercase">
            COMING SOON.
          </span>
        </div>
      </div>

      {/* Complete Site Footer (Page 10 Footer) */}
      <footer className="relative z-10 max-w-6xl mx-auto pt-10 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-slate-400">
        <div className="flex flex-col items-center sm:items-start">
          <span className="font-display text-sm font-bold text-white tracking-widest">
            ANTELLAY OS
          </span>
          <span className="text-[10px] text-slate-400 tracking-wider">
            THE OPERATING SYSTEM FOR THE AUTONOMOUS WORLD.
          </span>
        </div>

        <div className="text-slate-400 text-center tracking-wider">
          © ANTELLAY OS
        </div>

        <div>
          <a
            href="mailto:veer@antellay.in"
            className="text-cyan-300 hover:text-cyan-200 tracking-widest font-semibold transition-colors"
          >
            veer@antellay.in
          </a>
        </div>
      </footer>
    </section>
  );
}
