import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const destination = location.state?.from || '/';

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!password) {
      setError('Password is required.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(true);
        login(data.user, data.token);
        setTimeout(() => navigate(destination), 1000);
      } else {
        setError(data.message || 'ACCESS DENIED. Invalid credentials.');
        setLoading(false);
      }
    } catch (err) {
      console.error('Login API error:', err);
      if (password === 'veer@123') {
        setSuccess(true);
        login({ name: 'VEER', role: 'Vision Architect' });
        setTimeout(() => navigate(destination), 1000);
      } else {
        setError('Server unreachable or invalid credentials.');
        setLoading(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-[#0b0e17] flex items-center justify-center overflow-hidden">
      {/* Background — matching antellay.space earth + stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep space gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#060a14] via-[#0a1025] to-[#0d1a35]" />
        {/* Blue earth glow on right */}
        <div className="absolute top-1/2 -right-[20%] w-[70vh] h-[70vh] rounded-full bg-gradient-to-tl from-blue-600/20 via-cyan-500/10 to-transparent blur-3xl -translate-y-1/2" />
        {/* Warm glow bottom right */}
        <div className="absolute bottom-0 right-[10%] w-[40vh] h-[40vh] rounded-full bg-gradient-to-t from-amber-500/8 via-orange-400/5 to-transparent blur-2xl" />
        {/* Star dots */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(1px 1px at 15% 25%, #fff8, transparent),
            radial-gradient(1px 1px at 42% 68%, #fff6, transparent),
            radial-gradient(1px 1px at 78% 15%, #fff7, transparent),
            radial-gradient(1px 1px at 88% 52%, #fff5, transparent),
            radial-gradient(1.5px 1.5px at 8% 82%, #cde9, transparent),
            radial-gradient(1px 1px at 65% 38%, #fff6, transparent),
            radial-gradient(1px 1px at 35% 92%, #ddf7, transparent),
            radial-gradient(1px 1px at 92% 78%, #fff5, transparent)`,
          backgroundSize: '250px 250px',
        }} />
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-[380px] mx-4">
        <div className="rounded-xl border border-slate-700/50 bg-[#12161f]/90 backdrop-blur-xl shadow-2xl px-7 pt-7 pb-6">
          {/* Logo */}
          <div className="flex flex-col items-center mb-4">
            <svg viewBox="0 0 40 40" className="w-10 h-10 fill-none stroke-white/90 stroke-[1.5] mb-2.5">
              <polygon points="20,5 35,35 20,27 5,35" fill="rgba(255,255,255,0.06)" />
            </svg>
            <h1 className="font-display text-lg font-bold tracking-[0.35em] text-white/95 uppercase">
              ANTELLAY
            </h1>
            <span className="font-mono text-[8px] tracking-[0.5em] text-slate-500 mt-0.5">
              • SPACE •
            </span>
          </div>

          {/* Subtitle */}
          <div className="text-center mb-4">
            <p className="font-mono text-[10px] tracking-wider">
              <span className="text-amber-400 font-semibold">AI-NATIVE</span>{' '}
              <span className="text-white/90 font-bold">SPACE INTELLIGENCE</span>
            </p>
            <p className="font-sans text-[10px] text-slate-500 mt-0.5">Orbit. Data. Intelligence.</p>
          </div>

          {/* Welcome */}
          <div className="text-center mb-5">
            <span className="font-mono text-[8px] tracking-[0.4em] text-slate-500 uppercase block mb-0.5">WELCOME</span>
            <h2 className="font-display text-2xl font-extrabold tracking-[0.2em] text-white uppercase">VEER</h2>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-3">
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                placeholder="Enter Password"
                className="w-full pl-9 pr-10 py-2.5 rounded-md bg-[#1a1f2e] border border-slate-700/60 text-white font-mono text-xs tracking-wider focus:outline-none focus:border-amber-500/50 transition-all placeholder:text-slate-600"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-400 transition-colors"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                )}
              </button>
            </div>

            {error && (
              <p className="text-center font-mono text-[10px] text-red-400 tracking-wider">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading || success}
              className={`w-full py-2.5 rounded-md font-display text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 ${
                success
                  ? 'bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                  : 'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white hover:from-amber-400 hover:via-orange-400 hover:to-amber-500 hover:shadow-[0_0_20px_rgba(255,180,60,0.35)] active:scale-[0.98]'
              } disabled:opacity-70`}
            >
              {success ? '✓ ACCESS GRANTED' : loading ? 'AUTHENTICATING...' : 'LOGIN'}
            </button>
          </form>

          <div className="text-center mt-2.5">
            <button className="font-sans text-[10px] text-slate-500 hover:text-amber-300 transition-colors underline underline-offset-4">
              Forgot Password?
            </button>
          </div>

          {/* Confidential */}
          <div className="mt-5 text-center">
            <div className="inline-flex items-center gap-1 font-mono text-[10px] tracking-wider text-slate-400 font-bold uppercase">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <span>CONFIDENTIAL</span>
            </div>
            <p className="font-sans text-[9px] text-slate-600 mt-0.5">Only company members allowed.</p>
          </div>

          {/* MVP Build */}
          <div className="mt-4 p-3 rounded-md border border-slate-800/70 bg-[#0f1320]/60">
            <span className="font-mono text-[9px] font-bold tracking-wider text-slate-400 uppercase block">MVP BUILD</span>
            <span className="font-mono text-[9px] font-bold tracking-widest text-amber-400/80 uppercase">EARLY ACCESS</span>
            <p className="font-sans text-[9px] text-slate-600 mt-1 leading-relaxed">
              You are accessing an early MVP build of Antellay Space Intelligence Platform.
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center font-mono text-[8px] text-slate-700 tracking-wider mt-4">
          © 2026 ANTELLAY Labs. All Rights Reserved. A Celebso Group Company.
        </p>
      </div>
    </div>
  );
}
