import React, { useState, useEffect, useRef, useCallback } from 'react';
import WhnxtSpaceCanvas from '../components/WhnxtSpaceCanvas';
import '../styles/whnxt.css';

export default function WhnxtLandingPage({ onEnter }) {
  const [isEntering, setIsEntering] = useState(false);
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const ss2Ref = useRef(null);
  const scrollIndicatorRef = useRef(null);

  // Scroll-driven animation state
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollProgressRef = useRef(0);

  // Exact 3D parallax tilt logic from wht.nxt/src/main.js
  useEffect(() => {
    const heroTitle = document.getElementById('whnxt-hero-title');
    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;
    let animId;

    const handleMouseMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      targetTiltX = (e.clientX - cx) / cx;
      targetTiltY = (e.clientY - cy) / cy;
    };

    const updateTilt = () => {
      currentTiltX += (targetTiltX - currentTiltX) * 0.05;
      currentTiltY += (targetTiltY - currentTiltY) * 0.05;
      const sp = scrollProgressRef.current;
      const scrollFade = Math.max(0, 1 - sp * 3.0);
      if (heroTitle) {
        heroTitle.style.transform = `perspective(1000px) rotateY(${currentTiltX * 6 * scrollFade}deg) rotateX(${-currentTiltY * 5 * scrollFade}deg) scale(${1 - sp * 0.25})`;
      }
      animId = requestAnimationFrame(updateTilt);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animId = requestAnimationFrame(updateTilt);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  // High-performance throttled scroll tracking (1.15 viewport gap = ~1 to 1.5 page scroll)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const windowH = window.innerHeight;
          // Exact 1.15 viewport gap as requested by user (only 1 - 1.5 page gap)
          const totalGap = windowH * 1.15;
          const progress = Math.min(1, Math.max(0, scrollY / totalGap));
          scrollProgressRef.current = progress;
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEnterClick = (targetPage = '/') => {
    if (isEntering) return;
    setIsEntering(true);
    setTimeout(() => {
      if (onEnter) {
        onEnter(targetPage);
      }
    }, 400);
  };

  // Hero title opacity
  const heroOpacity = Math.max(0, 1 - scrollProgress * 2.8);

  // Mid-section cosmic text animations - smoothly mapped across the 1-1.5 page gap
  // Stage 1: Neural Interface (visible 0.15 - 0.45, peaks at 0.30)
  const stage1Opacity = Math.max(0, 1 - Math.abs(scrollProgress - 0.30) / 0.15);
  // Stage 2: Beyond Intelligence HUD (visible 0.38 - 0.68, peaks at 0.52)
  const stage2Opacity = Math.max(0, 1 - Math.abs(scrollProgress - 0.52) / 0.15);

  // SS2 (Lower Stage: JOURNEY • ABOUT • CONTACT) enters cleanly starting at 0.60, full by 0.92
  const ss2Opacity = Math.max(0, Math.min(1, (scrollProgress - 0.60) / 0.32));
  const ss2TranslateY = Math.max(0, (1 - ss2Opacity) * 50);

  return (
    <div
      ref={containerRef}
      className="theme-space home-page-body"
      style={{
        width: '100%',
        position: 'relative',
        backgroundColor: '#000000',
        opacity: isEntering ? 0 : 1,
        transition: 'opacity 0.4s ease-out',
        pointerEvents: isEntering ? 'none' : 'auto'
      }}
    >
      {/* 3D WebGL Canvas Layer (Procedural Three.js from wht.nxt) */}
      <WhnxtSpaceCanvas />

      {/* Universal Top Header */}
      <header className="universal-header">
        <div className="universal-header-inner">
          <div className="universal-header-left"></div>
          <button
            type="button"
            className="brand-badge"
            id="badge-top"
            aria-label="Return to WHNXT Home"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="badge-glyph">×</span>
            <span className="badge-letter">₸</span>
            <span className="badge-dot">.</span>
            <span className="badge-letter">₸</span>
          </button>
          <div className="universal-header-right"></div>
        </div>
      </header>

      {/* ====== SCROLLABLE JOURNEY CONTAINER (Hero → 1.15 Viewport Gap → SS2) ====== */}
      <div className="site-wrapper home-site-wrapper" style={{ position: 'relative' }}>

        {/* Fixed cosmic stage for Hero & Mid animations - always perfectly centered */}
        <div
          className="whnxt-sticky-stage"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: scrollProgress > 0.65 ? 'none' : 'auto',
            opacity: scrollProgress > 0.95 ? 0 : 1,
            overflow: 'hidden',
            zIndex: 5
          }}
        >
          {/* Center Logo Stage */}
          <div
            className="p1-hero-center"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) translateY(-6vh)',
              opacity: heroOpacity,
              pointerEvents: heroOpacity > 0.1 ? 'auto' : 'none',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              transition: 'none'
            }}
          >
            <h1 className="whnxt-logo-title" id="whnxt-hero-title">
              <span className="inline-flex items-center">
                <span className="char">A</span>
                <span className="char">N</span>
                <span className="char">T</span>
                <span className="char">E</span>
                <span className="char">L</span>
                <span className="char">L</span>
                <span className="char">A</span>
                <span className="char">Y</span>
              </span>
              <span className="title-spacer" style={{ display: 'inline-block', width: 'clamp(1.8rem, 4vw, 3.5rem)' }}></span>
              <span className="inline-flex items-center">
                <span className="char">O</span>
                <span className="char">S</span>
              </span>
            </h1>
          </div>

          {/* Scroll Down Indicator */}
          <div
            ref={scrollIndicatorRef}
            className="whnxt-scroll-indicator"
            style={{
              position: 'absolute',
              bottom: 'clamp(2rem, 5vh, 4rem)',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              opacity: scrollProgress > 0.04 ? 0 : 1,
              transition: 'opacity 0.4s ease, transform 0.4s ease',
              pointerEvents: 'none',
              zIndex: 10
            }}
          >
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.35em',
              color: '#64748b',
              textTransform: 'uppercase'
            }}>
              SCROLL
            </span>
            <div className="scroll-prompt-wrap">
              <svg width="20" height="28" viewBox="0 0 20 28" fill="none" style={{ opacity: 0.5 }}>
                <rect x="1" y="1" width="18" height="26" rx="9" stroke="#64748b" strokeWidth="1.5"/>
                <circle cx="10" cy="8" r="2" fill="#00e5ff" className="scroll-dot-anim"/>
              </svg>
            </div>
          </div>

          {/* Mid Cosmic Journey 1: Neural Interface */}
          <div
            className="whnxt-mid-section"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) translateY(${(0.30 - scrollProgress) * 50}px)`,
              opacity: stage1Opacity,
              pointerEvents: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              transition: 'none'
            }}
          >
            <div className="whnxt-cosmic-line" style={{ marginBottom: '2rem' }}>
              <div style={{
                width: `${Math.min(1, stage1Opacity * 1.5) * 120}px`,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.6), transparent)',
                boxShadow: '0 0 15px rgba(0, 229, 255, 0.3)'
              }}></div>
            </div>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.75rem, 1.2vw, 0.9rem)',
              letterSpacing: '0.35em',
              color: '#94a3b8',
              textTransform: 'uppercase',
              textAlign: 'center',
              textShadow: '0 0 20px rgba(148, 163, 184, 0.3)'
            }}>
              INITIALIZING NEURAL INTERFACE
            </p>
            <div style={{
              display: 'flex',
              gap: '4px',
              marginTop: '1.5rem',
              alignItems: 'center'
            }}>
              {[...Array(5)].map((_, i) => (
                <div key={i} style={{
                  width: '3px',
                  height: `${8 + Math.sin(i * 1.2) * 6}px`,
                  background: 'var(--color-cyan)',
                  borderRadius: '1px',
                  opacity: stage1Opacity > 0.2 ? 0.7 : 0,
                  boxShadow: '0 0 6px var(--color-cyan)',
                  animation: `specDance 1.4s ease-in-out ${i * 0.15}s infinite alternate`
                }}></div>
              ))}
            </div>
          </div>

          {/* Mid Cosmic Journey 2: Beyond Intelligence HUD */}
          <div
            className="whnxt-mid-section"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) translateY(${(0.55 - scrollProgress) * 50}px)`,
              opacity: stage2Opacity,
              pointerEvents: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              transition: 'none'
            }}
          >
            {/* Telemetry HUD */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.6rem',
              padding: '0.45rem 1.4rem',
              background: 'rgba(4, 10, 24, 0.55)',
              border: '1px solid rgba(56, 189, 248, 0.2)',
              borderRadius: '30px',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 0 25px rgba(0, 229, 255, 0.08)',
              marginBottom: '2rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                <div className="hud-pulse-dot"></div>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.16em',
                  color: '#94a3b8',
                  textTransform: 'uppercase'
                }}>
                  SYSTEM <span style={{ color: 'var(--color-cyan)' }}>ONLINE</span>
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                <div className="hud-pulse-dot" style={{ animationDelay: '0.5s' }}></div>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.16em',
                  color: '#94a3b8',
                  textTransform: 'uppercase'
                }}>
                  SECURE <span style={{ color: 'var(--color-cyan)' }}>LINK</span>
                </span>
              </div>
            </div>

            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)',
              letterSpacing: '0.25em',
              color: '#ffffff',
              textTransform: 'uppercase',
              textAlign: 'center',
              textShadow: '0 0 30px rgba(255, 255, 255, 0.35), 0 0 60px rgba(56, 189, 248, 0.2)',
              fontWeight: 300
            }}>
              BEYOND INTELLIGENCE
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.8rem, 1vw, 0.9rem)',
              color: '#64748b',
              letterSpacing: '0.08em',
              marginTop: '1rem',
              textAlign: 'center',
              maxWidth: '400px'
            }}>
              A sovereign operating system engineered for the next frontier
            </p>
          </div>
        </div>

        {/* ================= SECTION 2 (ss2): LOWER STAGE ================= */}
        {/* Exactly 1 to 1.2 page gap: SS2 docks right after the cosmic journey */}
        <section
          ref={ss2Ref}
          className="page-view page-1-view whnxt-ss2-section"
          id="page-1"
          style={{
            minHeight: '100vh',
            marginTop: '120vh',
            opacity: ss2Opacity,
            transform: `translateY(${ss2TranslateY}px)`,
            transition: 'none',
            position: 'relative',
            zIndex: 10,
            pointerEvents: scrollProgress > 0.65 ? 'auto' : 'none'
          }}
        >
          {/* Lower Horizon Stage (CTA, Earth Sunrise Horizon & Footer) */}
          <div className="p1-lower-stage" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            {/* Action Button: ENTER ANTELLAY OS */}
            <div className="p1-action-wrap">
              <button
                type="button"
                onClick={() => handleEnterClick('/')}
                className="btn-enter-whnxt-classic"
                id="btn-enter-whnxt"
              >
                <span className="btn-text-row">
                  <span className="btn-text">ENTER ANTELLAY OS</span>
                  <svg
                    className="btn-arrow"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="4" y1="12" x2="20" y2="12"></line>
                    <polyline points="14 6 20 12 14 18"></polyline>
                  </svg>
                </span>
                <span className="btn-classic-underline"></span>
              </button>
            </div>

            {/* Atmospheric Curved Earth Sunrise Horizon Image & Glow */}
            <div className="p1-sunrise-horizon-wrap">
              <img
                src="/earth-sunrise.jpg"
                alt="Orbital Sunrise Horizon"
                className="p1-sunrise-horizon-img"
              />
              <div className="p1-horizon-lensflare"></div>
            </div>

            {/* Page 1 Bottom Area (Directly below curved horizon) */}
            <footer className="p1-footer">
              <div className="p1-footer-links">
                <button
                  type="button"
                  onClick={() => handleEnterClick('/terms')}
                  className="p1-link"
                >
                  Privacy Policy
                </button>
                <button
                  type="button"
                  onClick={() => handleEnterClick('/terms')}
                  className="p1-link"
                >
                  Terms &amp; Conditions
                </button>
                <button
                  type="button"
                  onClick={() => handleEnterClick('/terms')}
                  className="p1-link"
                >
                  Cookie Policy
                </button>
              </div>

              <div className="p1-social-icons">
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <circle cx="12" cy="12" r="4"></circle>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                {/* X (Twitter) */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="X"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/a-n-t-e-l-l-a-y-space/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="2" width="20" height="20" rx="4" ry="4"></rect>
                    <line x1="8" y1="11" x2="8" y2="17"></line>
                    <line x1="8" y1="8" x2="8.01" y2="8"></line>
                    <path d="M12 17v-3.5a2.5 2.5 0 0 1 5 0V17"></path>
                    <line x1="12" y1="11" x2="12" y2="17"></line>
                  </svg>
                </a>
              </div>

              <div className="p1-copyright">
                <p>© 2026 Futuhr. All rights reserved.</p>
                <p className="sub-colophon">
                  A{' '}
                  <a
                    href="https://antellay.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="colophon-link"
                  >
                    ANTELLAY LABS
                  </a>{' '}
                  • A{' '}
                  <a
                    href="https://celebso.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="colophon-link"
                  >
                    Celebso Group
                  </a>
                </p>
              </div>

              <span className="p1-page-num" aria-hidden="true">1</span>
            </footer>
          </div>
        </section>
      </div>
    </div>
  );
}
