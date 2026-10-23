import React, { useState, useEffect, useMemo } from 'react';
import {
  Activity,
  Cpu,
  Clock,
  CloudRain,
  BookOpen,
  Terminal,
  GitCommit,
  Flame,
  Sparkles,
  Laptop,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { soundEngine } from '../utils/soundEngine';

export const BentoTelemetrySection: React.FC = () => {
  const [wibTime, setWibTime] = useState<string>('');
  const [activeUsesCat, setActiveUsesCat] = useState<string>('ALL');
  const [hoveredCommitInfo, setHoveredCommitInfo] = useState<string>(
    '3,482 production commits & architectural RFCs in the last 12 months'
  );

  // Live UTC+7 WIB Clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(now);
      setWibTime(formatted);
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  // Deterministic 36 weeks x 7 days contribution heatmap
  const heatmapWeeks = useMemo(() => {
    const weeks: number[][] = [];
    for (let w = 0; w < 36; w++) {
      const days: number[] = [];
      for (let d = 0; d < 7; d++) {
        const seed = (w * 13 + d * 7 + 19) % 17;
        const level = seed > 12 ? 4 : seed > 8 ? 3 : seed > 4 ? 2 : seed > 1 ? 1 : 0;
        days.push(level);
      }
      weeks.push(days);
    }
    return weeks;
  }, []);

  const usesCategories = [
    'ALL',
    'Hardware & Workstation',
    'Core IDE & Terminal',
    'Architecture & AI Stack',
    'Mental Models',
  ];

  const filteredUses =
    activeUsesCat === 'ALL'
      ? PORTFOLIO_DATA.usesStack
      : PORTFOLIO_DATA.usesStack.filter((u) => u.category === activeUsesCat);

  const productiveHours = [
    { label: '06–09', pct: 45, note: 'Architecture Reading & RFC Review' },
    { label: '09–13', pct: 96, note: 'Deep Work: Core Systems & Coding' },
    { label: '13–17', pct: 84, note: 'Squad Sync, Design Review & PRs' },
    { label: '17–20', pct: 52, note: 'Gym, Recovery & Family' },
    { label: '20–24', pct: 92, note: 'Flow State: Rust / AI Research / Shaders' },
  ];

  return (
    <section id="section-telemetry" className="py-16">
      <div className="mb-8">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-400">
          <Activity className="h-3.5 w-3.5" />
          <span>MODULE 04 // REAL-TIME TELEMETRY & "/USES" BENTO DASHBOARD</span>
        </div>
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Live Engineering Telemetry, Workstation & Mental Models
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400">
          Transparansi penuh atas ritme produktivitas harian, distribusi bahasa pemrograman produksi, spesifikasi workstation <code className="text-emerald-300">/uses</code>, serta riset yang sedang dipelajari.
        </p>
      </div>

      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        {/* Card 1: Contribution Heatmap & Language Telemetry (8 Cols) */}
        <div className="rounded-2xl border border-white/10 bg-[#090D16]/95 p-6 lg:col-span-8 surface-card">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <GitCommit className="h-4 w-4 text-emerald-400" />
              <h3 className="font-display text-base font-bold text-white">
                Engineering Activity & Commit Velocity Heatmap
              </h3>
            </div>
            <span className="font-mono text-xs text-emerald-400">{hoveredCommitInfo}</span>
          </div>

          {/* Heatmap Grid */}
          <div className="mt-4 overflow-x-auto pb-2">
            <div className="flex gap-1.5 min-w-[580px]">
              {heatmapWeeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {week.map((lvl, dIdx) => {
                    const colors = [
                      'bg-slate-900 border-white/5',
                      'bg-emerald-950 border-emerald-800/40',
                      'bg-emerald-700/60 border-emerald-500/40',
                      'bg-emerald-500/80 border-emerald-400/50',
                      'bg-emerald-400 border-emerald-200 shadow-[0_0_8px_#10b981]',
                    ];
                    const commits = lvl === 0 ? 0 : lvl * 4 + ((wIdx + dIdx) % 5);
                    return (
                      <div
                        key={dIdx}
                        onMouseEnter={() => {
                          soundEngine.playHover();
                          setHoveredCommitInfo(
                            `Week ${wIdx + 1}, Day ${dIdx + 1}: ${commits} commits & architecture reviews`
                          );
                        }}
                        className={`h-3 w-3 rounded-[3px] border transition-transform hover:scale-125 ${colors[lvl]}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Polyglot Language Distribution + Productive Hours */}
          <div className="mt-6 grid grid-cols-1 gap-6 border-t border-white/10 pt-5 md:grid-cols-2">
            {/* Languages */}
            <div>
              <div className="mb-2.5 flex items-center justify-between font-mono text-xs text-slate-400">
                <span>PRODUCTION CODEBASE DISTRIBUTION</span>
                <span className="text-cyan-300">Polyglot Stack</span>
              </div>
              <div className="flex h-3 w-full overflow-hidden rounded-full bg-slate-900">
                <div className="h-full bg-emerald-400" style={{ width: '41%' }} title="TypeScript 41%" />
                <div className="h-full bg-cyan-400" style={{ width: '24%' }} title="Rust 24%" />
                <div className="h-full bg-amber-400" style={{ width: '21%' }} title="Go 21%" />
                <div className="h-full bg-purple-400" style={{ width: '14%' }} title="Python/AI 14%" />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 font-mono text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span>TypeScript / React (41%)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  <span>Rust Systems (24%)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span>Go Microservices (21%)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="h-2.5 w-2.5 rounded-full bg-purple-400" />
                  <span>Python / AI RAG (14%)</span>
                </div>
              </div>
            </div>

            {/* Circadian Deep-Work Rhythm */}
            <div>
              <div className="mb-2.5 flex items-center justify-between font-mono text-xs text-slate-400">
                <span>DEEP-WORK CIRCADIAN RHYTHM (WIB)</span>
                <span className="text-emerald-400">Peak Flow</span>
              </div>
              <div className="space-y-1.5">
                {productiveHours.map((slot) => (
                  <div key={slot.label} className="flex items-center gap-2 font-mono text-[11px]">
                    <span className="w-12 text-slate-400">{slot.label}</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-900">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400"
                        style={{ width: `${slot.pct}%` }}
                      />
                    </div>
                    <span className="w-40 truncate text-[10px] text-slate-400">{slot.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Live Environment, Clock & Now Reading Widget (4 Cols) */}
        <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#090D16]/95 p-6 lg:col-span-4 surface-card">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-300">
                <Clock className="h-4 w-4 text-emerald-400" />
                <span>LIVE ENVIRONMENT WIDGET</span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-0.5 font-mono text-[10px] text-emerald-400 border border-emerald-500/30">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                ONLINE
              </span>
            </div>

            {/* Real-Time Clock & Weather */}
            <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/80 p-4">
              <div>
                <div className="font-mono text-[10px] uppercase text-slate-400">
                  {PORTFOLIO_DATA.identity.location}
                </div>
                <div className="mt-1 font-mono text-2xl font-bold tracking-wider text-white">
                  {wibTime || '14:55:00'} <span className="text-xs text-emerald-400">WIB</span>
                </div>
                <div className="mt-0.5 font-mono text-[11px] text-slate-400">
                  UTC+7 · Latency to SG-1: 11.2ms
                </div>
              </div>
              <div className="text-right font-mono">
                <div className="inline-flex items-center gap-1 text-cyan-300 text-sm font-bold">
                  <CloudRain className="h-4 w-4" /> 24°C
                </div>
                <div className="text-[10px] text-slate-400">Tropical Highland Mist</div>
                <div className="mt-1 text-[10px] text-emerald-400">Coffee: V60 Ethiopia</div>
              </div>
            </div>

            {/* Current Deep Work Status */}
            <div className="mt-3 rounded-xl border border-emerald-500/25 bg-emerald-500/5 p-3">
              <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-emerald-400">
                <Flame className="h-3.5 w-3.5" /> Current Status
              </div>
              <div className="mt-1 font-mono text-xs font-medium text-white">
                {PORTFOLIO_DATA.identity.currentModeStatus}
              </div>
            </div>

            {/* Reading & Research List */}
            <div className="mt-5">
              <div className="mb-2.5 flex items-center gap-1.5 font-mono text-xs uppercase text-slate-400">
                <BookOpen className="h-3.5 w-3.5 text-cyan-400" />
                <span>Active Reading & Systems Research</span>
              </div>
              <div className="space-y-2.5">
                {PORTFOLIO_DATA.readingAndResearch.map((book, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/10 bg-slate-900/70 p-2.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-medium text-xs text-white line-clamp-1">
                        {book.title}
                      </span>
                      <span className="font-mono text-[10px] text-emerald-400 shrink-0">
                        {book.progress}%
                      </span>
                    </div>
                    <p className="mt-0.5 font-mono text-[10px] text-slate-400">{book.status}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: "/uses" Hardware, Dotfiles & Mental Models Blueprint (12 Cols) */}
        <div className="rounded-2xl border border-white/10 bg-[#090D16]/95 p-6 lg:col-span-12 surface-card">
          <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2.5">
              <Laptop className="h-5 w-5 text-emerald-400" />
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  <code className="text-emerald-400">/uses</code> — Workstation Blueprint, IDE Setup & Engineering Mental Models
                </h3>
                <p className="text-xs text-slate-400">
                  Perangkat keras, konfigurasi terminal/dotfiles, dan kerangka berpikir yang menopang kecepatan eksekusi saya sehari-hari.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {usesCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    soundEngine.playClick();
                    setActiveUsesCat(cat);
                  }}
                  className={`rounded-lg border px-2.5 py-1 font-mono text-xs transition ${
                    activeUsesCat === cat
                      ? 'border-emerald-400 bg-emerald-500/20 text-emerald-300 font-semibold'
                      : 'border-white/10 bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredUses.map((u, i) => (
              <div
                key={i}
                className="flex flex-col justify-between rounded-xl border border-white/10 bg-slate-900/75 p-4 transition hover:border-emerald-500/40"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] text-emerald-400">
                    <span>{u.category.toUpperCase()}</span>
                    <Sparkles className="h-3 w-3" />
                  </div>
                  <h4 className="mt-1.5 font-display text-base font-bold text-white">{u.name}</h4>
                  <p className="mt-1 font-mono text-xs text-cyan-300">{u.spec}</p>
                </div>
                <p className="mt-3 border-t border-white/10 pt-2.5 text-xs leading-relaxed text-slate-300">
                  {u.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
