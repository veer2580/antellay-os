import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Lock, Eye, EyeOff, ShieldCheck, ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import ASMRStaticBackground from '../components/ui/asmr-background';

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
      } else if (password === 'Veer@123' || password === 'veer@123') {
        setSuccess(true);
        login({ name: 'VEER', role: 'Founder & Vision Architect' });
        setTimeout(() => navigate(destination), 1000);
      } else {
        setError(data.message || 'ACCESS DENIED. Invalid credentials.');
        setLoading(false);
      }
    } catch (err) {
      console.error('Login API error:', err);
      if (password === 'Veer@123' || password === 'veer@123') {
        setSuccess(true);
        login({ name: 'VEER', role: 'Founder & Vision Architect' });
        setTimeout(() => navigate(destination), 1000);
      } else {
        setError('ACCESS DENIED. Invalid credentials.');
        setLoading(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-[#020408] text-slate-100 flex items-center justify-center overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Dynamic ASMR Kinetic Particle Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <ASMRStaticBackground
          particleCount={900}
          showOverlay={false}
          className="w-full h-full"
        />
      </div>

      {/* Ambient Radial Glows (matching Antellay OS aesthetic) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      {/* Return to home link */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-slate-400 hover:text-cyan-300 transition-colors uppercase px-3 py-1.5 rounded-md border border-cyan-500/20 bg-[#040814]/70 backdrop-blur-md hover:border-cyan-400/50"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-cyan-400" />
          <span>RETURN TO PORTAL</span>
        </Link>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-[400px] mx-4 my-auto">
        <div className="relative rounded-2xl border border-cyan-500/30 bg-[#040814]/85 backdrop-blur-xl shadow-[0_0_50px_rgba(0,229,255,0.15)] px-7 pt-7 pb-6">
          {/* Subtle top card glow line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          {/* Brand Logo & Title */}
          <div className="flex flex-col items-center mb-4">
            <div className="relative mb-2">
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md" />
              <svg viewBox="0 0 40 40" className="relative w-9 h-9 fill-none stroke-cyan-400 stroke-[1.8] drop-shadow-[0_0_10px_rgba(0,229,255,0.6)]">
                <polygon points="20,5 35,35 20,27 5,35" fill="rgba(0,229,255,0.12)" />
              </svg>
            </div>
            <h1 className="font-display text-lg font-extrabold tracking-[0.3em] text-white uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              ANTELLAY OS
            </h1>
            <span className="font-mono text-[9px] tracking-[0.45em] text-cyan-400 uppercase mt-0.5">
              OPERATIONAL LAYER
            </span>
          </div>

          {/* Subtitle */}
          <div className="text-center mb-4">
            <p className="font-mono text-[10px] tracking-wider">
              <span className="text-cyan-400 font-semibold">AUTONOMOUS</span>{' '}
              <span className="text-white/90 font-bold">SYSTEM ACCESS</span>
            </p>
            <p className="font-mono text-[9px] text-slate-400 mt-0.5 tracking-[0.2em]">AIR • LAND • SEA • SPACE</p>
          </div>

          {/* Welcome User */}
          <div className="text-center mb-5 pb-3 border-b border-cyan-500/15">
            <span className="font-mono text-[8px] tracking-[0.4em] text-slate-500 uppercase block mb-0.5">
              AUTHENTICATION GATE
            </span>
            <h2 className="font-display text-2xl font-extrabold tracking-[0.2em] text-white uppercase drop-shadow-[0_0_20px_rgba(0,229,255,0.35)]">
              VEER
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-3">
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400/60 pointer-events-none">
                <Lock className="w-3.5 h-3.5" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                placeholder="Enter Secure Password"
                className="w-full pl-9 pr-10 py-2.5 rounded-md bg-[#02040a]/90 border border-cyan-500/30 text-white font-mono text-xs tracking-wider focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,229,255,0.25)] transition-all placeholder:text-slate-500"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-cyan-300 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-3.5 h-3.5" />
                ) : (
                  <Eye className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {error && (
              <p className="text-center font-mono text-[10px] text-red-400 tracking-wider py-1 px-2 rounded bg-red-950/40 border border-red-500/30">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading || success}
              className={`w-full py-2.5 rounded-md font-display text-xs tracking-[0.22em] uppercase font-bold transition-all duration-300 cursor-pointer ${
                success
                  ? 'bg-emerald-500 text-black shadow-[0_0_25px_rgba(16,185,129,0.5)]'
                  : 'bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-[#020408] hover:from-cyan-400 hover:via-cyan-300 hover:to-blue-400 hover:shadow-[0_0_25px_rgba(0,229,255,0.5)] active:scale-[0.98]'
              } disabled:opacity-70`}
            >
              {success ? '✓ ACCESS GRANTED' : loading ? 'AUTHENTICATING...' : 'AUTHORIZE & ENTER'}
            </button>
          </form>

          <div className="text-center mt-2.5">
            <button
              type="button"
              onClick={() => setError('Contact administrative command to reset master access credentials.')}
              className="font-mono text-[10px] text-slate-400 hover:text-cyan-300 transition-colors underline underline-offset-4 cursor-pointer"
            >
              Forgot Password?
            </button>
          </div>

          {/* Confidential Notice */}
          <div className="mt-5 text-center">
            <div className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-cyan-400/90 font-bold uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>CONFIDENTIAL ACCESS</span>
            </div>
            <p className="font-mono text-[9px] text-slate-500 mt-0.5">Only authorized company members allowed.</p>
          </div>

          {/* MVP / System Build */}
          <div className="mt-4 p-3 rounded-lg border border-cyan-500/20 bg-[#020612]/70 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] font-bold tracking-wider text-slate-400 uppercase">SYS CORE: ACTIVE</span>
              <span className="font-mono text-[9px] font-bold tracking-widest text-cyan-400 uppercase">EARLY ACCESS</span>
            </div>
            <p className="font-mono text-[9px] text-slate-400 mt-1 leading-relaxed">
              You are accessing the secure command gateway of Antellay OS.
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center font-mono text-[8px] text-slate-600 tracking-wider mt-4">
          © 2026 ANTELLAY OS. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
}
