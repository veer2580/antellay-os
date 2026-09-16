import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Download,
  ExternalLink,
  ArrowLeft,
  ShieldCheck,
  Cpu,
  Globe,
  AlertTriangle,
  Lock,
  Radio,
  Zap,
  CheckCircle2,
  RefreshCw,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';

export default function TermsPage() {
  const sections = [
    {
      id: '01',
      title: '1. Project Status',
      icon: Cpu,
      content:
        'ANTELLAY OS is currently in the concept, research and development stage. The information available on this website describes our vision, planned architecture, research and future capabilities. No specific product, service or technology shown on the website is guaranteed to be commercially available.',
      highlight: 'Concept, research and development stage.',
    },
    {
      id: '02',
      title: '2. Website Information',
      icon: Globe,
      content:
        'All information on this website is provided for general informational and exploratory purposes. Features, technologies, timelines, partnerships and future capabilities may change without prior notice.',
      highlight: 'Informational & exploratory purposes only.',
    },
    {
      id: '03',
      title: '3. No Guarantee',
      icon: AlertTriangle,
      content:
        'ANTELLAY Labs does not guarantee that any proposed feature, system, product, integration or technology described on this website will be developed, launched or made commercially available.',
      highlight: 'No commercial launch guarantee for exploratory systems.',
    },
    {
      id: '04',
      title: '4. Intellectual Property',
      icon: ShieldCheck,
      content:
        'All website content, branding, logos, designs, concepts, text, graphics and intellectual property related to ANTELLAY OS are owned by or licensed to ANTELLAY Labs / Celebso Group, unless otherwise stated. They may not be copied, reproduced or commercially used without prior written permission.',
      highlight: 'Owned by ANTELLAY Labs / Celebso Group.',
    },
    {
      id: '05',
      title: '5. Third-Party Data & Technologies',
      icon: Radio,
      content:
        'Future versions of ANTELLAY OS may interact with third-party data sources, APIs, devices, satellites, sensors or technology platforms. ANTELLAY Labs is not responsible for the availability, accuracy or performance of third-party systems.',
      highlight: 'Third-party APIs, satellites, and telemetry networks.',
    },
    {
      id: '06',
      title: '6. Future Technology Disclaimer',
      icon: Zap,
      content:
        'ANTELLAY OS involves emerging technologies including AI, automation, robotics, data systems and autonomous technologies. Actual performance may vary depending on technology, data, infrastructure and operating conditions.',
      highlight: 'Autonomous AI, robotics & real-time telemetry systems.',
    },
    {
      id: '07',
      title: '7. Website Use',
      icon: CheckCircle2,
      content:
        'You agree not to misuse the website, attempt unauthorized access, interfere with its operation, or use its content for unlawful purposes.',
      highlight: 'Strict adherence to authorized usage standards.',
    },
    {
      id: '08',
      title: '8. Changes',
      icon: RefreshCw,
      content:
        'ANTELLAY Labs may update these Terms & Conditions and the ANTELLAY OS website as the project develops.',
      highlight: 'Dynamic updates as architecture evolves.',
    },
    {
      id: '09',
      title: '9. Contact',
      icon: Mail,
      content:
        'For official legal or exploratory inquiries regarding ANTELLAY OS terms and technologies, contact the headquarters at Jaipur, Rajasthan, India.',
      contactDetails: {
        entity: 'ANTELLAY Labs',
        location: 'Jaipur, Rajasthan, India',
        email: 'space@antellay.com',
      },
    },
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Top Breadcrumb & Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400/80 hover:text-cyan-200 transition-colors uppercase tracking-widest group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>RETURN TO NEXUS</span>
        </Link>

        {/* Action Buttons: Download PDF & View Original PDF */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/terms-and-conditions.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-900/40 font-mono text-xs tracking-wider transition-all shadow-[0_0_15px_rgba(0,229,255,0.15)]"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>VIEW RAW PDF</span>
          </a>

          <a
            href="/terms-and-conditions.pdf"
            download="Terms-and-Conditions-Antellay-OS.pdf"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border border-cyan-400 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 hover:from-cyan-500/30 hover:to-blue-600/30 text-white font-mono text-xs font-semibold tracking-wider transition-all shadow-[0_0_20px_rgba(0,229,255,0.25)] hover:shadow-[0_0_25px_rgba(0,229,255,0.45)]"
          >
            <Download className="w-3.5 h-3.5 text-cyan-300" />
            <span>DOWNLOAD PDF</span>
          </a>
        </div>
      </div>

      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.35em] text-cyan-400 uppercase font-semibold border border-cyan-500/30 px-4 py-1.5 rounded-full bg-cyan-950/50 mb-5 shadow-[0_0_20px_rgba(0,229,255,0.1)]">
          <FileText className="w-3.5 h-3.5 text-cyan-300" />
          <span>LEGAL PROTOCOL & TERMS</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[0.16em] text-white uppercase mb-5 leading-tight">
          TERMS & CONDITIONS
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-slate-400">
          <span className="text-cyan-400 font-medium">LAST UPDATED: 15 SEPTEMBER 2026</span>
          <span>•</span>
          <span className="text-slate-300">ANTELLAY LABS / CELEBSO GROUP</span>
          <span>•</span>
          <span className="inline-flex items-center gap-1 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            PUBLIC ACCESS PROTOCOL (UNLOCKED)
          </span>
        </div>
      </div>

      {/* Preamble / Welcome Box */}
      <div className="relative p-6 sm:p-8 rounded-2xl border border-cyan-500/40 bg-gradient-to-br from-[#040c24]/90 via-[#030718]/90 to-[#020510]/95 backdrop-blur-xl mb-12 shadow-[0_0_35px_rgba(0,229,255,0.08)]">
        <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shrink-0 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-display text-base sm:text-lg font-bold tracking-wider text-white uppercase mb-2">
              Welcome to ANTELLAY OS
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
              Welcome to <span className="text-cyan-300 font-semibold">ANTELLAY OS</span>, a future technology initiative by <span className="text-white font-semibold">ANTELLAY Labs</span>. ANTELLAY OS is being developed as an operating system and intelligence layer for autonomous technologies across land, air, sea, space and robotics.
            </p>
          </div>
        </div>
      </div>

      {/* 9 Numbered Legal Directives */}
      <div className="space-y-6 mb-12">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <div
              key={section.id}
              className="p-6 sm:p-7 rounded-2xl border border-cyan-500/20 bg-[#030716]/80 hover:border-cyan-400/50 hover:bg-[#040a1e]/90 transition-all duration-300 backdrop-blur-md group shadow-sm hover:shadow-[0_0_25px_rgba(0,229,255,0.08)]"
            >
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:text-cyan-300 group-hover:shadow-[0_0_12px_rgba(0,229,255,0.3)] transition-all shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-cyan-200 transition-colors">
                    {section.title}
                  </h3>
                </div>

                <span className="font-mono text-xs text-cyan-400/80 bg-cyan-950/50 border border-cyan-500/30 px-2.5 py-0.5 rounded tracking-widest shrink-0">
                  SECTION {section.id}
                </span>
              </div>

              <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed mb-3 pl-0 sm:pl-12">
                {section.content}
              </p>

              {section.highlight && (
                <div className="pl-0 sm:pl-12">
                  <span className="font-mono text-xs text-slate-400 border-l-2 border-cyan-400/60 pl-3 inline-block">
                    Focus: <span className="text-cyan-300">{section.highlight}</span>
                  </span>
                </div>
              )}

              {section.contactDetails && (
                <div className="mt-4 pl-0 sm:pl-12 pt-4 border-t border-cyan-500/20 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{section.contactDetails.entity} — {section.contactDetails.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <a
                      href={`mailto:${section.contactDetails.email}`}
                      className="text-cyan-300 hover:text-white underline underline-offset-2 transition-colors"
                    >
                      {section.contactDetails.email}
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Acknowledgment Footer Card */}
      <div className="p-6 rounded-2xl border border-emerald-500/30 bg-[#021118]/80 backdrop-blur-md text-center max-w-3xl mx-auto shadow-[0_0_30px_rgba(16,185,129,0.08)]">
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-950/80 border border-emerald-400/40 text-emerald-400 mb-3">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <p className="font-sans text-sm sm:text-base text-slate-200 font-medium mb-1">
          By accessing this website, you acknowledge that you have read and understood these Terms & Conditions.
        </p>
        <p className="font-mono text-xs text-slate-400 tracking-wider">
          ANTELLAY LABS • OPERATING SYSTEM FOR THE AUTONOMOUS WORLD
        </p>

        <div className="mt-5 flex flex-wrap justify-center items-center gap-4">
          <a
            href="/terms-and-conditions.pdf"
            download="Terms-and-Conditions-Antellay-OS.pdf"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-cyan-400 bg-cyan-950/60 hover:bg-cyan-900/60 text-cyan-300 hover:text-white font-mono text-xs font-semibold tracking-wider transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>SAVE OFFLINE COPY (PDF)</span>
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-slate-700 bg-slate-900/60 hover:border-slate-500 text-slate-300 hover:text-white font-mono text-xs tracking-wider transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>CONTACT LEGAL / INQUIRIES</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
