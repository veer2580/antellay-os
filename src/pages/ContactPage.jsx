import React, { useState } from 'react';
import { Send, CheckCircle, Mail, User, MessageSquare, ArrowRight, Calendar, Clock, ShieldCheck, Check } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'PARTNERSHIP',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Private Consultation Scheduler state
  const [selectedDate, setSelectedDate] = useState('2025-06-12');
  const [selectedSlot, setSelectedSlot] = useState('03:00 PM');
  const [consultationBooked, setConsultationBooked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const handleBooking = (e) => {
    e.preventDefault();
    setConsultationBooked(true);
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <span className="font-mono text-xs sm:text-sm tracking-[0.35em] text-cyan-400 uppercase font-semibold border border-cyan-500/30 px-4 py-1 rounded-full bg-cyan-950/40 inline-block mb-4">
          GET IN TOUCH
        </span>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[0.16em] text-white uppercase mb-6 leading-tight">
          LET’S BUILD WHAT COMES NEXT.
        </h1>
        <div className="space-y-2 font-sans text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          <p>We are building the intelligence layer for a connected autonomous world.</p>
          <p className="text-cyan-300">
            If you want to connect, collaborate, build or explore the future with Antellay OS, start a conversation.
          </p>
        </div>
      </div>

      {/* SECTION: 2 DIRECT CONTACT CARDS */}
      <section className="mb-20">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-[0.2em] text-white uppercase">
            START A CONVERSATION.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Card 1: Veer Singh */}
          <div className="p-8 rounded-2xl border border-cyan-500/30 bg-[#040918]/80 text-center hover:border-cyan-400 transition-all flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-4">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-cyan-300 stroke-2">
                <polygon points="12,2 22,22 12,17 2,22" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold tracking-widest text-white mb-1">
              VEER SINGH
            </h3>
            <p className="font-mono text-xs text-slate-400 mb-3 tracking-wider">
              Founder & Vision Architect
            </p>
            <a
              href="mailto:veers2580jag@gmail.com"
              className="font-mono text-sm text-cyan-300 hover:text-cyan-200 underline underline-offset-4 tracking-wider transition-colors"
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
            <h3 className="font-display text-xl font-bold tracking-widest text-white mb-1">
              ANTELLAY OS
            </h3>
            <p className="font-mono text-xs text-slate-400 mb-3 tracking-wider">
              Founder / Business / Technology
            </p>
            <a
              href="mailto:veer@antellay.in"
              className="font-mono text-sm text-cyan-300 hover:text-cyan-200 underline underline-offset-4 tracking-wider transition-colors"
            >
              veer@antellay.in
            </a>
          </div>
        </div>
      </section>

      {/* SECTION: TWO INTERACTIVE FORMS: INQUIRY & PRIVATE CONSULTATION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-28">
        {/* Left: General Inquiry Form */}
        <div className="p-8 sm:p-10 rounded-2xl border border-slate-800 bg-[#030714]/90 backdrop-blur-xl shadow-2xl flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider block mb-2">
              DISPATCH CHANNEL
            </span>
            <h3 className="font-display text-2xl font-bold text-white tracking-wider mb-6">
              SEND DIRECT TRANSMISSION
            </h3>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
                <h4 className="font-display text-2xl font-bold tracking-wider text-white">
                  TRANSMISSION DISPATCHED
                </h4>
                <p className="text-sm font-mono text-slate-300 max-w-md mx-auto">
                  Your message has been securely forwarded to <strong>veer@antellay.in</strong>. A member of our team will respond promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', category: 'PARTNERSHIP', message: '' });
                  }}
                  className="mt-6 px-6 py-2.5 rounded border border-cyan-500/40 bg-cyan-950/40 text-cyan-300 font-mono text-xs tracking-wider uppercase hover:bg-cyan-500/20"
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
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
                      className="w-full px-4 py-3 rounded-lg bg-[#02050e] border border-slate-700 text-white font-sans text-sm focus:outline-none focus:border-cyan-400 transition-all placeholder:text-slate-600"
                    />
                    <User className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-500 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-300 tracking-wider uppercase mb-2">
                    EMAIL ADDRESS
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-lg bg-[#02050e] border border-slate-700 text-white font-sans text-sm focus:outline-none focus:border-cyan-400 transition-all placeholder:text-slate-600"
                    />
                    <Mail className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-500 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-300 tracking-wider uppercase mb-2">
                    FOCUS AREA
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#02050e] border border-slate-700 text-white font-mono text-xs focus:outline-none focus:border-cyan-400 transition-all"
                  >
                    <option value="PARTNERSHIP">ENTERPRISE & STRATEGIC PARTNERSHIP</option>
                    <option value="TECHNOLOGY">HARDWARE / ROBOTICS INTEGRATION</option>
                    <option value="AEROSPACE">DEFENSE & AEROSPACE MISSION</option>
                    <option value="FOUNDER">DIRECT INQUIRY FOR VEER SINGH</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-300 tracking-wider uppercase mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we work together?"
                    className="w-full px-4 py-3 rounded-lg bg-[#02050e] border border-slate-700 text-white font-sans text-sm focus:outline-none focus:border-cyan-400 transition-all placeholder:text-slate-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-sm border border-cyan-400/80 bg-cyan-950/60 hover:bg-cyan-500/20 text-white font-display text-xs sm:text-sm tracking-[0.25em] uppercase font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] disabled:opacity-50"
                >
                  {loading ? 'TRANSMITTING...' : 'SEND MESSAGE'}
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </button>
                <p className="text-center font-mono text-[11px] text-slate-400 tracking-wider">
                  Direct encrypted route to <span className="text-cyan-300">veer@antellay.in</span>
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Right: Private Consultation Scheduler (Added inspired by reference site) */}
        <div className="p-8 sm:p-10 rounded-2xl border border-cyan-500/30 bg-[#040918]/90 backdrop-blur-xl shadow-2xl flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider block mb-2">
              CONFIDENTIAL ENGAGEMENT
            </span>
            <h3 className="font-display text-2xl font-bold text-white tracking-wider mb-2">
              SCHEDULE PRIVATE CONSULTATION
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-300 mb-6">
              Schedule a 30-minute closed-door technical and strategic architectural session with Antellay OS leadership.
            </p>

            {consultationBooked ? (
              <div className="p-6 rounded-xl border border-emerald-500/40 bg-emerald-950/20 text-center space-y-4 my-6">
                <Check className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-display text-xl font-bold text-white tracking-wider">
                  SESSION RESERVED
                </h4>
                <p className="font-mono text-xs text-slate-300">
                  Target Date: <strong className="text-cyan-300">{selectedDate}</strong> at <strong className="text-cyan-300">{selectedSlot}</strong>
                </p>
                <p className="text-xs text-slate-400">
                  A secure calendar invite and cryptographic briefing packet will be dispatched to your email.
                </p>
                <button
                  onClick={() => setConsultationBooked(false)}
                  className="px-4 py-2 rounded border border-slate-700 bg-slate-900 text-xs font-mono text-slate-300 uppercase"
                >
                  Reschedule Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-5">
                <div>
                  <label className="block font-mono text-xs text-slate-300 tracking-wider uppercase mb-2">
                    SELECT PREFERRED DATE
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-[#02050e] border border-slate-700 text-white font-mono text-xs focus:outline-none focus:border-cyan-400"
                    />
                    <Calendar className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-500 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-300 tracking-wider uppercase mb-2">
                    SELECT TIME WINDOW
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['11:00 AM', '03:00 PM', '06:30 PM'].map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-2 px-3 rounded border font-mono text-xs tracking-wider transition-all ${
                          selectedSlot === slot
                            ? 'border-cyan-400 bg-cyan-950/60 text-cyan-300 font-bold'
                            : 'border-slate-800 bg-[#02050e] text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-slate-800 bg-[#02050f] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span>NDA & IP PROTECTION INCLUDED</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Briefings occur via end-to-end encrypted telemetry video conference with Veer Singh.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-sm border border-cyan-400/80 bg-cyan-950/60 hover:bg-cyan-500/20 text-white font-display text-xs sm:text-sm tracking-[0.25em] uppercase font-bold flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]"
                >
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>CONFIRM APPOINTMENT</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Monumental Closing Statement (From Page 10) */}
      <section className="pt-16 border-t border-cyan-900/40 text-center flex flex-col items-center">
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-[0.2em] text-white uppercase mb-4 leading-tight">
          THE AUTONOMOUS WORLD IS COMING.
        </h2>

        <p className="font-display text-lg sm:text-2xl tracking-[0.25em] text-cyan-300 uppercase font-semibold mb-8">
          LET’S BUILD IT TOGETHER.
        </p>

        <div className="inline-flex flex-col items-center gap-2">
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
      </section>
    </div>
  );
}
