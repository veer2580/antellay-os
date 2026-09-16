import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

function AppLayout() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

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
