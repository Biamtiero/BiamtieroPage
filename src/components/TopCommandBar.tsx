import React from 'react';
import {
  Sparkles,
  Monitor,
  Terminal,
  LayoutGrid,
  Command,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  Tv,
  FileText,
  Globe,
  ShieldCheck,
} from 'lucide-react';
import { useSystem, UIMode, ThemeMode } from '../context/SystemContext';
import { soundEngine } from '../utils/soundEngine';

export const TopCommandBar: React.FC = () => {
  const {
    mode,
    setMode,
    theme,
    setTheme,
    lang,
    setLang,
    soundEnabled,
    toggleSound,
    setCommandPaletteOpen,
    setAiTwinOpen,
    setResumeModalOpen,
    konamiUnlocked,
  } = useSystem();

  const modes: { id: UIMode; label: string; short: string; icon: React.ReactNode }[] = [
    {
      id: 'editorial',
      label: lang === 'id' ? '1. Editorial Showcase' : '1. Editorial Showcase',
      short: 'Editorial',
      icon: <LayoutGrid className="h-3.5 w-3.5" />,
    },
    {
      id: 'os',
      label: lang === 'id' ? '2. Personal Web OS' : '2. Personal Web OS',
      short: 'Web OS',
      icon: <Monitor className="h-3.5 w-3.5" />,
    },
    {
      id: 'tty',
      label: lang === 'id' ? '3. TTY Hacker CLI' : '3. TTY Hacker CLI',
      short: 'TTY CLI',
      icon: <Terminal className="h-3.5 w-3.5" />,
    },
  ];

  const cycleTheme = () => {
    const order: ThemeMode[] = ['dark', 'light', 'crt'];
    const next = order[(order.indexOf(theme) + 1) % order.length];
    setTheme(next);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06080D]/85 backdrop-blur-xl no-print surface-card">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-2 px-3 py-2.5 sm:px-6">
        {/* Brand Identity & Live Status */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMode('editorial')}
            onMouseEnter={() => soundEngine.playHover()}
            className="group flex items-center gap-2.5 text-left focus:outline-none"
          >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-500/40 bg-emerald-500/10 font-mono text-xs font-bold text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-transform group-hover:scale-105">
              BT
              <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-sm font-bold tracking-tight text-white">
                  BIAMTIERO
                </span>
                <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.2 font-mono text-[10px] text-emerald-400">
                  OS v2.4
                </span>
                {konamiUnlocked && (
                  <span className="flex items-center gap-1 rounded bg-amber-500/20 px-1.5 py-0.5 font-mono text-[10px] text-amber-300 border border-amber-400/40">
                    <ShieldCheck className="h-3 w-3" /> GOD-MODE
                  </span>
                )}
              </div>
              <p className="hidden font-mono text-[10px] text-slate-400 xl:block">
                Principal Full-Stack & AI Systems Architect
              </p>
            </div>
          </button>
        </div>

        {/* Multi-Paradigm View Switcher (Core Requirement #2) */}
        <div
          className="flex items-center rounded-xl border border-white/10 bg-slate-900/90 p-1 shadow-inner"
          role="tablist"
          aria-label="Multi-Paradigm View Switcher"
        >
          {modes.map((m) => {
            const active = mode === m.id;
            return (
              <button
                key={m.id}
                role="tab"
                aria-selected={active}
                onMouseEnter={() => soundEngine.playHover()}
                onClick={() => setMode(m.id)}
                className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 font-mono text-xs font-medium transition-all duration-200 ${
                  active
                    ? 'bg-emerald-500 text-slate-950 font-semibold shadow-[0_0_20px_rgba(16,185,129,0.45)]'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {m.icon}
                <span className="hidden md:inline">{m.label}</span>
                <span className="md:hidden">{m.short}</span>
              </button>
            );
          })}
        </div>

        {/* Action & Utility Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* AI Digital Twin Trigger */}
          <button
            onClick={() => {
              soundEngine.playClick();
              setAiTwinOpen(true);
            }}
            onMouseEnter={() => soundEngine.playHover()}
            className="flex items-center gap-1.5 rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-2.5 py-1.5 font-mono text-xs font-medium text-cyan-300 transition hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            title="Ask My AI Digital Twin (Ctrl+J)"
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span className="hidden sm:inline">AI Twin</span>
          </button>

          {/* Dynamic Resume Generator Trigger */}
          <button
            onClick={() => {
              soundEngine.playClick();
              setResumeModalOpen(true);
            }}
            onMouseEnter={() => soundEngine.playHover()}
            className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-900/70 px-2.5 py-1.5 font-mono text-xs text-slate-200 transition hover:border-emerald-500/40 hover:text-emerald-300"
            title="Custom Tailored Resume Builder"
          >
            <FileText className="h-3.5 w-3.5 text-emerald-400" />
            <span className="hidden lg:inline">CV Builder</span>
          </button>

          {/* Global Command Palette (Cmd/Ctrl + K) */}
          <button
            onClick={() => {
              soundEngine.playClick();
              setCommandPaletteOpen(true);
            }}
            onMouseEnter={() => soundEngine.playHover()}
            className="flex items-center gap-2 rounded-lg border border-white/15 bg-slate-900/80 px-2.5 py-1.5 font-mono text-xs text-slate-300 transition hover:border-emerald-500/50 hover:text-white"
            title="Open Command Center (Ctrl+K / Cmd+K)"
          >
            <Command className="h-3.5 w-3.5 text-emerald-400" />
            <span className="hidden xl:inline">Command</span>
            <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-300">
              ⌘K
            </kbd>
          </button>

          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
            className="flex items-center gap-1 rounded-lg border border-white/10 bg-slate-900/70 px-2 py-1.5 font-mono text-xs text-slate-300 hover:border-white/25 hover:text-white"
            title="Switch Language (ID / EN)"
          >
            <Globe className="h-3.5 w-3.5 text-slate-400" />
            <span>{lang.toUpperCase()}</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={cycleTheme}
            className="flex items-center gap-1 rounded-lg border border-white/10 bg-slate-900/70 p-1.5 text-slate-300 hover:border-emerald-500/40 hover:text-emerald-300"
            title={`Current Theme: ${theme.toUpperCase()} (Click to switch Dark / Light / CRT)`}
          >
            {theme === 'dark' && <Moon className="h-3.5 w-3.5 text-emerald-400" />}
            {theme === 'light' && <Sun className="h-3.5 w-3.5 text-amber-500" />}
            {theme === 'crt' && <Tv className="h-3.5 w-3.5 text-green-400" />}
          </button>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className={`rounded-lg border p-1.5 transition ${
              soundEnabled
                ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                : 'border-white/10 bg-slate-900/70 text-slate-500'
            }`}
            title={soundEnabled ? 'Web Audio Synth: ON' : 'Web Audio Synth: MUTED'}
          >
            {soundEnabled ? <Volume2 className="h-3.5 w-3.5" /> : <VolumeX className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>
    </header>
  );
};
