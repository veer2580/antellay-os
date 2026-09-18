import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ASMRStaticBackground from './components/ui/asmr-background';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LockedPageGate from './components/LockedPageGate';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import VisionPage from './pages/VisionPage';
import MissionPage from './pages/MissionPage';
import ArchitecturePage from './pages/ArchitecturePage';
import FutuhrPage from './pages/FutuhrPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import LoginPage from './pages/LoginPage';

import WhnxtLandingPage from './pages/WhnxtLandingPage';

function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoginPage = location.pathname === '/login';

  const [hasEntered, setHasEntered] = React.useState(() => {
    if (typeof window === 'undefined') return false;
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('portal') === 'true' || window.location.pathname === '/portal') {
      return false;
    }
    // If accessing any deep sub-page directly (/about, /mission, /architecture, etc.), enter directly
    if (window.location.pathname !== '/' && window.location.pathname !== '/portal') {
      return true;
    }
    return sessionStorage.getItem('whnxt_entered') === 'true';
  });

  React.useEffect(() => {
    const handleOpenPortal = () => {
      sessionStorage.removeItem('whnxt_entered');
      setHasEntered(false);
      navigate('/?portal=true');
    };
    window.addEventListener('open-whnxt-portal', handleOpenPortal);
    return () => window.removeEventListener('open-whnxt-portal', handleOpenPortal);
  }, [navigate]);

  React.useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.get('portal') === 'true' || location.pathname === '/portal') {
      setHasEntered(false);
    }
  }, [location]);

  const handleEnterWebsite = (targetRoute = '/') => {
    sessionStorage.setItem('whnxt_entered', 'true');
    setHasEntered(true);
    if (targetRoute && targetRoute !== location.pathname) {
      navigate(targetRoute);
    } else if (location.search.includes('portal=true')) {
      navigate('/');
    }
  };

  if (!hasEntered) {
    return <WhnxtLandingPage onEnter={handleEnterWebsite} />;
  }

  if (isLoginPage) {
    return <LoginPage />;
  }

  return (
    <div className="relative min-h-screen bg-[#020408] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 flex flex-col justify-between overflow-x-clip">

      {/* ── Fixed ASMR Kinetic Particle Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <ASMRStaticBackground
          particleCount={1000}
          showOverlay={false}
          className="w-full h-full"
        />
      </div>

      {/* ── Navigation */}
      <Navigation />

      {/* ── Page Content */}
      <main className="relative z-10 flex-grow pb-8 sm:pb-12">
        <Routes>
          {/* Public Pages: Always clear & unblurred (No lock gate) */}
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />

          {/* Protected Pages: Blurred and locked behind authentication gate */}
          <Route
            path="/about"
            element={
              <LockedPageGate pageName="About & Operational Domains">
                <AboutPage />
              </LockedPageGate>
            }
          />
          <Route
            path="/vision"
            element={
              <LockedPageGate pageName="Founder Vision & Blueprint">
                <VisionPage />
              </LockedPageGate>
            }
          />
          <Route
            path="/mission"
            element={
              <LockedPageGate pageName="Mission Control & Multi-Domain Pipeline">
                <MissionPage />
              </LockedPageGate>
            }
          />
          <Route
            path="/architecture"
            element={
              <LockedPageGate pageName="Enterprise Stack & System Architecture">
                <ArchitecturePage />
              </LockedPageGate>
            }
          />
          <Route
            path="/futuhr"
            element={
              <LockedPageGate pageName="Futuhr & Predictive HUD Telemetry">
                <FutuhrPage />
              </LockedPageGate>
            }
          />

          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* ── Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <AppLayout />
      </Router>
    </AuthProvider>
  );
}
