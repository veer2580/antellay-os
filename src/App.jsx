import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ASMRStaticBackground from './components/ui/asmr-background';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import VisionPage from './pages/VisionPage';
import MissionPage from './pages/MissionPage';
import ArchitecturePage from './pages/ArchitecturePage';
import FutuhrPage from './pages/FutuhrPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-[#020408] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 flex flex-col justify-between overflow-x-hidden">

        {/* ── Fixed ASMR Kinetic Particle Background (All Pages — Earth completely removed) */}
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
        <main className="relative z-10 flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/vision" element={<VisionPage />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/architecture" element={<ArchitecturePage />} />
            <Route path="/futuhr" element={<FutuhrPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* ── Footer */}
        <Footer />
      </div>
    </Router>
  );
}
