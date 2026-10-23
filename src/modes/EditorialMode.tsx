import React from 'react';
import {
  Sparkles,
  Terminal,
  Monitor,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Command,
  FileText,
  Layers,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useSystem } from '../context/SystemContext';
import { soundEngine } from '../utils/soundEngine';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { KnowledgeGraphSection } from '../components/KnowledgeGraphSection';
import { BentoTelemetrySection } from '../components/BentoTelemetrySection';
import { CareerAndMatcherSection } from '../components/CareerAndMatcherSection';
import { DigitalLabSection } from '../components/DigitalLabSection';
import { ConversionAndFooterSection } from '../components/ConversionAndFooterSection';

export const EditorialMode: React.FC = () => {
  const {
    lang,
    setMode,
    setAiTwinOpen,
    setCommandPaletteOpen,
    setResumeModalOpen,
    konamiUnlocked,
  } = useSystem();

  return (
    <div className="relative z-10">
      <main className="mx-auto max-w-[1440px] px-4 sm:px-6">
        {/* HERO SECTION — KINETIC EDITORIAL & ARCHITECTURAL TELEMETRY */}
        <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-20 border-b border-white/10">
          {/* Status & Multi-Paradigm Badge Row */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/35 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-xs text-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.18)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>{PORTFOLIO_DATA.identity.status}</span>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
              <span>{PORTFOLIO_DATA.identity.location}</span>
              <span className="text-emerald-400">•</span>
              <span>{PORTFOLIO_DATA.identity.timezone}</span>
            </div>
          </div>

          {/* Kinetic Hero Headline & Executive Persona */}
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
                {PORTFOLIO_DATA.identity.title}
              </div>

              <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-6xl xl:text-7xl">
                ARCHITECTING{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent">
                  DETERMINISTIC
                </span>{' '}
                SYSTEMS & AUTONOMOUS AI.
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {lang === 'id'
                  ? PORTFOLIO_DATA.identity.taglineId
                  : PORTFOLIO_DATA.identity.taglineEn}
              </p>

              {/* Primary Executive CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    soundEngine.playClick();
                    document
                      .getElementById('section-case-studies')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  onMouseEnter={() => soundEngine.playHover()}
                  className="flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-mono text-xs font-bold text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.4)] transition hover:bg-emerald-400"
                >
                  <Layers className="h-4 w-4" />
                  <span>Explore 4 Engineering Whitepapers</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>

                <button
                  onClick={() => {
                    soundEngine.playClick();
                    setAiTwinOpen(true);
                  }}
                  onMouseEnter={() => soundEngine.playHover()}
                  className="flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-500/15 px-5 py-3 font-mono text-xs font-bold text-cyan-200 transition hover:bg-cyan-500/25"
                >
                  <Sparkles className="h-4 w-4 text-cyan-400" />
                  <span>Ask My AI Digital Twin (Interview Me)</span>
                </button>

                <button
                  onClick={() => setMode('os')}
                  onMouseEnter={() => soundEngine.playHover()}
                  className="flex items-center gap-2 rounded-xl border border-white/15 bg-slate-900/90 px-4 py-3 font-mono text-xs text-slate-200 transition hover:border-emerald-500/50 hover:text-white"
                >
                  <Monitor className="h-4 w-4 text-emerald-400" />
                  <span>Launch Web OS Desktop</span>
                </button>

                <button
                  onClick={() => setMode('tty')}
                  onMouseEnter={() => soundEngine.playHover()}
                  className="flex items-center gap-2 rounded-xl border border-white/15 bg-slate-900/90 px-4 py-3 font-mono text-xs text-slate-200 transition hover:border-amber-500/50 hover:text-amber-300"
                >
                  <Terminal className="h-4 w-4 text-amber-400" />
                  <span>TTY Hacker CLI</span>
                </button>
              </div>
            </div>

            {/* Right: Architectural Principles & Quick Command Card */}
            <div className="rounded-2xl border border-white/15 bg-[#090D16]/95 p-6 lg:col-span-4 surface-card">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-400">
                  <Cpu className="h-4 w-4" />
                  <span>ARCHITECTURAL AXIOMS</span>
                </div>
                <span className="font-mono text-[10px] text-slate-400">
                  {PORTFOLIO_DATA.identity.yearsExperience}
                </span>
              </div>

              <ul className="mt-4 space-y-3">
                {PORTFOLIO_DATA.identity.philosophy.map((phil, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-300">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded bg-emerald-500/20 font-mono text-[10px] font-bold text-emerald-400">
                      0{i + 1}
                    </span>
                    <span>{phil}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 grid grid-cols-2 gap-2 border-t border-white/10 pt-4">
                <button
                  onClick={() => setCommandPaletteOpen(true)}
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-slate-900 py-2 font-mono text-xs text-slate-300 hover:border-emerald-500/40 hover:text-white"
                >
                  <Command className="h-3.5 w-3.5 text-emerald-400" /> Cmd + K
                </button>
                <button
                  onClick={() => setResumeModalOpen(true)}
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-slate-900 py-2 font-mono text-xs text-slate-300 hover:border-emerald-500/40 hover:text-white"
                >
                  <FileText className="h-3.5 w-3.5 text-cyan-400" /> Tailored CV
                </button>
              </div>
            </div>
          </div>

          {/* 4 Live Production Proof-of-Work Telemetry Counters */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PORTFOLIO_DATA.heroStats.map((stat, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#090D16]/90 p-5 transition hover:border-emerald-500/40 surface-card"
              >
                <div className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  {stat.label}
                </div>
                <div className="mt-2 font-display text-3xl font-extrabold text-white">
                  {stat.value}
                </div>
                <div className="mt-1 font-mono text-xs text-emerald-400">{stat.detail}</div>
              </div>
            ))}
          </div>

          {konamiUnlocked && (
            <div className="mt-6 flex items-center justify-between rounded-2xl border border-amber-400/50 bg-amber-500/10 px-5 py-3.5 font-mono text-xs text-amber-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-amber-400" />
                <span>
                  <strong>GOD-MODE OVERRIDE ACTIVE:</strong> Anda telah membuka akses penuh ke Executive Dossier & Priority Architecture Channel (`architect@biamtiero.dev`).
                </span>
              </div>
              <span className="rounded bg-amber-400 px-2 py-0.5 font-bold text-slate-950">
                KONAMI VERIFIED
              </span>
            </div>
          )}
        </section>

        {/* MODULE 03: DEEP-DIVE ENGINEERING CASE STUDIES & INTERACTIVE ARCHITECTURE */}
        <CaseStudiesSection />

        {/* MODULE 02: INTERACTIVE FORCE-DIRECTED KNOWLEDGE GRAPH */}
        <KnowledgeGraphSection />

        {/* MODULE 05: INTERACTIVE CAREER TIMELINE & RECRUITER ROLE-FIT MATCHER */}
        <CareerAndMatcherSection />

        {/* MODULE 04: REAL-TIME TELEMETRY & "/USES" BENTO GRID */}
        <BentoTelemetrySection />

        {/* MODULE 06: DIGITAL LAB / PLAYGROUND (4 LIVE MICRO-APPS) */}
        <DigitalLabSection />

        {/* MODULE 07: SMART CONTACT FUNNEL, CUSTOM RESUME BUILDER & CRYPTO FOOTER */}
        <ConversionAndFooterSection />
      </main>
    </div>
  );
};
