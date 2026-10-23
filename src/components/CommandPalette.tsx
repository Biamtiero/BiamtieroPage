import React, { useState, useEffect, useMemo } from 'react';
import {
  Search,
  Terminal,
  Monitor,
  LayoutGrid,
  Sparkles,
  FolderGit2,
  Cpu,
  FileDown,
  Volume2,
  Sun,
  ShieldAlert,
  ArrowRight,
  Code2,
} from 'lucide-react';
import { useSystem } from '../context/SystemContext';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { soundEngine } from '../utils/soundEngine';

interface CommandItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Navigation & Modes' | 'Engineering Case Studies' | 'System Actions' | 'Skills & Architecture';
  icon: React.ReactNode;
  shortcut?: string;
  action: () => void;
}

export const CommandPalette: React.FC = () => {
  const {
    commandPaletteOpen,
    setCommandPaletteOpen,
    setMode,
    theme,
    setTheme,
    lang,
    setLang,
    soundEnabled,
    toggleSound,
    setAiTwinOpen,
    setActiveProjectId,
    setResumeModalOpen,
    matrixActive,
    setMatrixActive,
    unlockKonami,
  } = useSystem();

  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const downloadJsonDossier = () => {
    const blob = new Blob([JSON.stringify(PORTFOLIO_DATA, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'biamtiero-architect-dossier.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const items: CommandItem[] = useMemo(() => {
    const base: CommandItem[] = [
      {
        id: 'mode-editorial',
        title: 'Switch to Mode 1: Editorial & Immersive Showcase',
        subtitle: 'Kinetic typography, Bento Telemetry, Interactive Graph & Case Studies',
        category: 'Navigation & Modes',
        icon: <LayoutGrid className="h-4 w-4 text-emerald-400" />,
        shortcut: 'M 1',
        action: () => setMode('editorial'),
      },
      {
        id: 'mode-os',
        title: 'Switch to Mode 2: Personal Web OS (Desktop Environment)',
        subtitle: 'Draggable windows, Dock, System Tray, File Explorer & Sticky Notes',
        category: 'Navigation & Modes',
        icon: <Monitor className="h-4 w-4 text-cyan-400" />,
        shortcut: 'M 2',
        action: () => setMode('os'),
      },
      {
        id: 'mode-tty',
        title: 'Switch to Mode 3: Full-Screen Hacker CLI (TTY Terminal)',
        subtitle: 'UNIX shell with ls, cat, neofetch, skills --graph, sudo hire-me',
        category: 'Navigation & Modes',
        icon: <Terminal className="h-4 w-4 text-amber-400" />,
        shortcut: 'M 3',
        action: () => setMode('tty'),
      },
      {
        id: 'act-ai-twin',
        title: 'Ask Biamtiero AI Digital Twin (Interactive Clone)',
        subtitle: 'Simulate technical interview, ask architecture or rate/availability questions',
        category: 'System Actions',
        icon: <Sparkles className="h-4 w-4 text-cyan-400" />,
        shortcut: '⌘ J',
        action: () => setAiTwinOpen(true),
      },
      {
        id: 'act-resume-pdf',
        title: 'Open Custom Tailored Resume Builder (Print / PDF)',
        subtitle: 'Generate role-specific executive CV with @media print precision',
        category: 'System Actions',
        icon: <FileDown className="h-4 w-4 text-emerald-400" />,
        shortcut: 'CV',
        action: () => setResumeModalOpen(true),
      },
      {
        id: 'act-resume-json',
        title: 'Export Full Engineering Dossier as JSON',
        subtitle: 'Download machine-readable portfolio schema (biamtiero-architect-dossier.json)',
        category: 'System Actions',
        icon: <Code2 className="h-4 w-4 text-emerald-400" />,
        shortcut: 'JSON',
        action: downloadJsonDossier,
      },
      {
        id: 'act-theme',
        title: `Cycle Visual Theme (Current: ${theme.toUpperCase()})`,
        subtitle: 'Switch between Dark Obsidian, Light Swiss Editorial, and CRT Phosphor Green',
        category: 'System Actions',
        icon: <Sun className="h-4 w-4 text-amber-400" />,
        action: () => {
          const next = theme === 'dark' ? 'light' : theme === 'light' ? 'crt' : 'dark';
          setTheme(next);
        },
      },
      {
        id: 'act-lang',
        title: `Switch Language ID / EN (Current: ${lang.toUpperCase()})`,
        subtitle: 'Toggle interface language between Bahasa Indonesia and English',
        category: 'System Actions',
        icon: <Sparkles className="h-4 w-4 text-emerald-400" />,
        action: () => setLang(lang === 'id' ? 'en' : 'id'),
      },
      {
        id: 'act-sound',
        title: `${soundEnabled ? 'Mute' : 'Enable'} Web Audio Synthesizer`,
        subtitle: 'Toggle procedural Web Audio API tactile micro-interaction sound effects',
        category: 'System Actions',
        icon: <Volume2 className="h-4 w-4 text-cyan-400" />,
        action: toggleSound,
      },
      {
        id: 'act-matrix',
        title: `${matrixActive ? 'Disable' : 'Activate'} Matrix Digital Rain Shader`,
        subtitle: 'Toggle real-time canvas digital rain background effect',
        category: 'System Actions',
        icon: <Terminal className="h-4 w-4 text-green-400" />,
        action: () => setMatrixActive((v) => !v),
      },
      {
        id: 'act-konami',
        title: 'Execute Override: sudo hire-me (Unlock God-Mode Dossier)',
        subtitle: 'Trigger Konami executive priority access & direct architecture channel',
        category: 'System Actions',
        icon: <ShieldAlert className="h-4 w-4 text-amber-400" />,
        action: unlockKonami,
      },
    ];

    const projectItems: CommandItem[] = PORTFOLIO_DATA.projects.map((p) => ({
      id: `cmd-${p.id}`,
      title: `Case Study: ${p.title}`,
      subtitle: `${p.metrics.throughput} · ${p.metrics.roi} · [${p.tags.slice(0, 4).join(', ')}]`,
      category: 'Engineering Case Studies',
      icon: <FolderGit2 className="h-4 w-4 text-emerald-400" />,
      action: () => setActiveProjectId(p.id),
    }));

    const skillItems: CommandItem[] = PORTFOLIO_DATA.knowledgeGraph.nodes
      .filter((n) => n.group === 'skill')
      .map((s) => ({
        id: `cmd-${s.id}`,
        title: `Skill Node: ${s.label} (${s.yearsOfExp} yrs · ${s.proficiencyDepth})`,
        subtitle: s.realWorldImpact,
        category: 'Skills & Architecture',
        icon: <Cpu className="h-4 w-4 text-cyan-400" />,
        action: () => {
          setMode('editorial');
          setTimeout(() => {
            document.getElementById('section-knowledge-graph')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        },
      }));

    return [...base, ...projectItems, ...skillItems];
  }, [theme, lang, soundEnabled, matrixActive]);

  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [items, query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query, commandPaletteOpen]);

  useEffect(() => {
    if (!commandPaletteOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        soundEngine.playHover();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        soundEngine.playHover();
        setSelectedIndex((prev) => (prev - 1 + Math.max(1, filtered.length)) % Math.max(1, filtered.length));
      } else if (e.key === 'Enter' && filtered[selectedIndex]) {
        e.preventDefault();
        soundEngine.playSuccess();
        filtered[selectedIndex].action();
        setCommandPaletteOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [commandPaletteOpen, filtered, selectedIndex, setCommandPaletteOpen]);

  if (!commandPaletteOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/75 px-4 pt-16 backdrop-blur-md no-print"
      onClick={() => setCommandPaletteOpen(false)}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-2xl border border-emerald-500/30 bg-[#0B0F19] shadow-[0_25px_70px_rgba(0,0,0,0.85)] surface-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Header */}
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3.5">
          <Search className="h-5 w-5 text-emerald-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => {
              soundEngine.playKeystroke();
              setQuery(e.target.value);
            }}
            placeholder="Ketik proyek, skill (Rust, GraphRAG, Go), mode (Web OS, TTY), atau aksi..."
            className="w-full bg-transparent font-mono text-sm text-white placeholder-slate-400 focus:outline-none"
          />
          <kbd className="rounded border border-white/15 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-slate-400">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[62vh] overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="py-12 text-center font-mono text-sm text-slate-400">
              Tidak ditemukan hasil untuk "{query}". Coba tanya langsung ke AI Digital Twin!
            </div>
          ) : (
            filtered.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  onClick={() => {
                    soundEngine.playSuccess();
                    item.action();
                    setCommandPaletteOpen(false);
                  }}
                  className={`flex w-full items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-left transition ${
                    isSelected
                      ? 'bg-emerald-500/15 border border-emerald-500/40 text-white'
                      : 'border border-transparent text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="mt-0.5 rounded-lg border border-white/10 bg-slate-900 p-2">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="truncate font-medium text-sm text-white">
                          {item.title}
                        </span>
                        <span className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-slate-400">
                          {item.category}
                        </span>
                      </div>
                      <p className="truncate font-mono text-xs text-slate-400 mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {item.shortcut && (
                      <kbd className="rounded border border-white/10 bg-slate-900 px-2 py-0.5 font-mono text-[10px] text-emerald-300">
                        {item.shortcut}
                      </kbd>
                    )}
                    <ArrowRight
                      className={`h-4 w-4 transition-transform ${
                        isSelected ? 'translate-x-0.5 text-emerald-400' : 'text-slate-600'
                      }`}
                    />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer Telemetry */}
        <div className="flex items-center justify-between border-t border-white/10 bg-slate-950/80 px-4 py-2 font-mono text-[11px] text-slate-400">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Execute</span>
            <span>ESC Close</span>
          </div>
          <span className="text-emerald-400">
            {filtered.length} indexed nodes ready · Sub-1ms fuzzy match
          </span>
        </div>
      </div>
    </div>
  );
};
