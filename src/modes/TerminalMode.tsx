import React, { useState, useRef, useEffect } from 'react';
import {
  Terminal as TerminalIcon,
  Play,
  Sparkles,
  LayoutGrid,
  Monitor,
  Trash2,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useSystem, ThemeMode, UIMode } from '../context/SystemContext';
import { soundEngine } from '../utils/soundEngine';

interface TermHistoryEntry {
  id: string;
  cwd: string;
  command: string;
  output: React.ReactNode;
}

const AVAILABLE_COMMANDS = [
  'help',
  'neofetch',
  'whoami',
  'ls',
  'cd',
  'pwd',
  'cat',
  'tree',
  'skills --graph',
  'open aether',
  'open hyperion',
  'open omniwork',
  'open chronos',
  'matrix',
  'sudo hire-me',
  'theme dark',
  'theme light',
  'theme crt',
  'mode editorial',
  'mode os',
  'clear',
];

export const TerminalMode: React.FC<{ embedded?: boolean }> = ({ embedded = false }) => {
  const {
    setMode,
    setTheme,
    setActiveProjectId,
    setAiTwinOpen,
    setResumeModalOpen,
    setMatrixActive,
    unlockKonami,
  } = useSystem();

  const [cwd, setCwd] = useState<string>('/home/biamtiero');
  const [input, setInput] = useState<string>('');
  const [cmdHistory, setCmdHistory] = useState<string[]>([
    'neofetch',
    'skills --graph',
    'tree',
  ]);
  const [historyCursor, setHistoryCursor] = useState<number>(-1);
  const endRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const renderNeofetch = () => (
    <div className="my-2 grid grid-cols-1 gap-4 font-mono text-xs sm:grid-cols-12">
      <pre className="text-emerald-400 sm:col-span-5 leading-tight select-none">
{`   ____  _______  __  ________
  / __ )/  _/   |/  |/  /_  __/
 / __  |/ // /| / /|_/ / / /   
/ /_/ // // ___ / /  / / / /    
/_____/___/_/  |_/_/  /_/ /_/     
  BIAMTIERO KERNEL v2.4.0-LTS`}
      </pre>
      <div className="space-y-1 text-slate-200 sm:col-span-7">
        <div>
          <span className="text-emerald-400 font-bold">biamtiero</span>@
          <span className="text-cyan-300 font-bold">architect-workstation</span>
        </div>
        <div className="text-slate-500">--------------------------------------------</div>
        <div>
          <span className="text-emerald-400">Role:</span> {PORTFOLIO_DATA.identity.shortRole}
        </div>
        <div>
          <span className="text-emerald-400">Uptime:</span> 8+ Years Production SLA (99.994%)
        </div>
        <div>
          <span className="text-emerald-400">Shell:</span> zsh 5.9 + tmux + neovim + rustc 1.84
        </div>
        <div>
          <span className="text-emerald-400">Peak Load:</span> 142,000 TPS · &lt;18.4ms P99 Latency
        </div>
        <div>
          <span className="text-emerald-400">AI Impact:</span> $420K/yr Saved via Hybrid GraphRAG
        </div>
        <div>
          <span className="text-emerald-400">Location:</span> {PORTFOLIO_DATA.identity.location} ({PORTFOLIO_DATA.identity.timezone})
        </div>
        <div className="pt-1 flex gap-1.5">
          <span className="h-3 w-6 rounded-sm bg-emerald-400 inline-block" />
          <span className="h-3 w-6 rounded-sm bg-cyan-400 inline-block" />
          <span className="h-3 w-6 rounded-sm bg-amber-400 inline-block" />
          <span className="h-3 w-6 rounded-sm bg-purple-400 inline-block" />
          <span className="h-3 w-6 rounded-sm bg-rose-400 inline-block" />
        </div>
      </div>
    </div>
  );

  const [entries, setEntries] = useState<TermHistoryEntry[]>([
    {
      id: 'init-0',
      cwd: '/home/biamtiero',
      command: 'neofetch',
      output: renderNeofetch(),
    },
  ]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [entries]);

  const executeSingleCommand = (rawCmd: string): string | React.ReactNode => {
    const trimmed = rawCmd.trim();
    const parts = trimmed.split(/\s+/);
    const base = parts[0]?.toLowerCase();
    const arg1 = parts[1];

    switch (base) {
      case 'help':
        return `AVAILABLE UNIX & PORTFOLIO COMMANDS:
  neofetch            : Display system & engineering telemetry summary
  whoami              : Print Principal Architect executive biography
  skills --graph      : Render ASCII proficiency & production impact graph
  tree                : Render virtual file system hierarchy
  ls [dir]            : List directory contents (e.g., 'ls', 'ls projects')
  cd <dir>            : Change working directory ('cd projects', 'cd ..')
  cat <file>          : Inspect file contents (e.g., 'cat README.md', 'cat contact.json')
  open <project>      : Open interactive engineering whitepaper ('open aether', 'open hyperion', 'open omniwork', 'open chronos')
  matrix              : Toggle live Matrix Digital Rain shader background
  sudo hire-me        : Unlock God-Mode executive priority channel & CV generator
  theme <name>        : Switch theme ('theme dark', 'theme light', 'theme crt')
  mode <name>         : Switch paradigm ('mode editorial', 'mode os', 'mode tty')
  clear               : Clear terminal scrollback`;

      case 'neofetch':
        return renderNeofetch();

      case 'whoami':
        return `${PORTFOLIO_DATA.identity.name} (@${PORTFOLIO_DATA.identity.handle})
Role       : ${PORTFOLIO_DATA.identity.title}
Philosophy : "${PORTFOLIO_DATA.identity.taglineId}"
Status     : ${PORTFOLIO_DATA.identity.status}
Rate Band  : ${PORTFOLIO_DATA.identity.compensationExpectation}`;

      case 'pwd':
        return cwd;

      case 'tree':
        return `/home/biamtiero
├── README.md
├── contact.json
├── projects/
│   ├── aether-nexus.md
│   ├── hyperion-ledger.md
│   ├── omniwork-hcm.md
│   └── chronos-mesh.md
└── secrets/
    └── .konami_hint`;

      case 'ls': {
        const target = arg1 ? arg1.replace(/\/$/, '') : '';
        if (cwd === '/home/biamtiero' && !target) {
          return 'README.md   contact.json   projects/   secrets/';
        }
        if (target === 'projects' || cwd.endsWith('/projects')) {
          return 'aether-nexus.md   hyperion-ledger.md   omniwork-hcm.md   chronos-mesh.md';
        }
        if (target === 'secrets' || cwd.endsWith('/secrets')) {
          return '.konami_hint';
        }
        return 'README.md   contact.json   projects/   secrets/';
      }

      case 'cd': {
        if (!arg1 || arg1 === '~' || arg1 === '/home/biamtiero') {
          setCwd('/home/biamtiero');
          return 'Changed directory to /home/biamtiero';
        }
        if (arg1 === '..') {
          setCwd('/home/biamtiero');
          return 'Changed directory to /home/biamtiero';
        }
        if (arg1.includes('project')) {
          setCwd('/home/biamtiero/projects');
          return 'Changed directory to /home/biamtiero/projects';
        }
        if (arg1.includes('secret')) {
          setCwd('/home/biamtiero/secrets');
          return 'Changed directory to /home/biamtiero/secrets';
        }
        return `cd: no such directory: ${arg1}`;
      }

      case 'cat': {
        if (!arg1) return 'Usage: cat <filename> (e.g. cat README.md, cat contact.json, cat projects/aether-nexus.md)';
        const normalized = arg1.startsWith('/')
          ? arg1
          : `${cwd}/${arg1}`.replace('/projects/projects/', '/projects/');
        const vfs = PORTFOLIO_DATA.virtualFileSystem;
        const matchKey = Object.keys(vfs).find(
          (k) => k.toLowerCase() === normalized.toLowerCase() || k.toLowerCase().endsWith(arg1.toLowerCase())
        );
        if (matchKey) {
          return vfs[matchKey];
        }
        return `cat: ${arg1}: No such file in virtual filesystem. Try 'tree' to list all files.`;
      }

      case 'skills':
        return `=== BIAMTIERO PRODUCTION PROFICIENCY GRAPH ===
[System Architecture]     ████████████████████ 99% (8 yrs | 142K TPS | SLA 99.994%)
[TypeScript / React / Next]████████████████████ 99% (8 yrs | 100 Lighthouse | WebGL)
[LLM Orchestration & RAG] ███████████████████░ 96% (4 yrs | $420K/yr Saved | 310ms TTFT)
[Rust Systems & Axum]     ██████████████████░░ 92% (4 yrs | Lock-Free Sequencer & eBPF)
[Go Distributed Services] ███████████████████░ 95% (6 yrs | 180K RPS Gateways)
[PostgreSQL / Kafka / DB] ███████████████████░ 96% (8 yrs | CQRS, Citus RLS, Qdrant)
[Kubernetes & Cloud SRE]  ██████████████████░░ 93% (7 yrs | CKA & AWS SAP-C02 Verified)`;

      case 'open': {
        if (!arg1) {
          return 'Usage: open <aether | hyperion | omniwork | chronos | ai | cv>';
        }
        const t = arg1.toLowerCase();
        if (t.includes('aether')) {
          setActiveProjectId('proj-aether-ai');
          return 'Opening AetherNexus Engineering Whitepaper Modal...';
        }
        if (t.includes('hyperion')) {
          setActiveProjectId('proj-hyperion-ledger');
          return 'Opening HyperionCore 142K TPS Ledger Whitepaper Modal...';
        }
        if (t.includes('omni') || t.includes('hcm')) {
          setActiveProjectId('proj-vox-hcm');
          return 'Opening OmniWork Enterprise HCM Whitepaper Modal...';
        }
        if (t.includes('chronos') || t.includes('ebpf')) {
          setActiveProjectId('proj-chronos-edge');
          return 'Opening ChronosMesh eBPF Telemetry Whitepaper Modal...';
        }
        if (t.includes('ai') || t.includes('twin')) {
          setAiTwinOpen(true);
          return 'Launching Biamtiero AI Digital Twin Assistant...';
        }
        if (t.includes('cv') || t.includes('resume')) {
          setResumeModalOpen(true);
          return 'Launching Tailored Resume Builder...';
        }
        return `Unknown target '${arg1}'. Try: open aether | open hyperion | open omniwork | open chronos`;
      }

      case 'matrix':
        setMatrixActive((v) => !v);
        return 'Toggled Matrix Digital Rain Shader overlay.';

      case 'sudo':
        if (trimmed.toLowerCase().includes('hire-me')) {
          unlockKonami();
          setResumeModalOpen(true);
          return `[ROOT ACCESS GRANTED // KONAMI OVERRIDE UNLOCKED]
>>> Priority Executive Dossier & Custom Resume Generator opened!
>>> Direct Principal Architect Channel: ${PORTFOLIO_DATA.identity.email}
>>> PGP Fingerprint: ${PORTFOLIO_DATA.identity.pgpFingerprint}`;
        }
        return `sudo: ${arg1 || ''}: command requires 'sudo hire-me'`;

      case 'theme': {
        const nextTheme = (arg1?.toLowerCase() || 'dark') as ThemeMode;
        if (['dark', 'light', 'crt'].includes(nextTheme)) {
          setTheme(nextTheme);
          return `Switched visual theme to '${nextTheme.toUpperCase()}'.`;
        }
        return 'Usage: theme <dark | light | crt>';
      }

      case 'mode': {
        const nextMode = (arg1?.toLowerCase() || 'editorial') as UIMode;
        if (['editorial', 'os', 'tty'].includes(nextMode)) {
          setMode(nextMode);
          return `Switching UI paradigm to '${nextMode.toUpperCase()}'...`;
        }
        return 'Usage: mode <editorial | os | tty>';
      }

      default:
        return `zsh: command not found: ${base}. Type 'help' to see available commands.`;
    }
  };

  const handleRunCommand = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;
    soundEngine.playClick();

    setCmdHistory((prev) => [trimmed, ...prev]);
    setHistoryCursor(-1);

    if (trimmed.toLowerCase() === 'clear') {
      setEntries([]);
      setInput('');
      return;
    }

    // Support UNIX piping (e.g. `cat README.md | grep Status` or `ls | head`)
    const pipeSegments = trimmed.split('|').map((s) => s.trim());
    let result = executeSingleCommand(pipeSegments[0]);

    if (pipeSegments.length > 1 && typeof result === 'string') {
      const pipeCmd = pipeSegments[1];
      if (pipeCmd.startsWith('grep ')) {
        const pattern = pipeCmd.replace('grep ', '').trim().toLowerCase();
        result = result
          .split('\n')
          .filter((line) => line.toLowerCase().includes(pattern))
          .join('\n') || `(grep: no lines matched '${pattern}')`;
      } else if (pipeCmd.startsWith('head')) {
        result = result.split('\n').slice(0, 5).join('\n');
      }
    }

    setEntries((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}-${Math.random()}`,
        cwd,
        command: trimmed,
        output: result,
      },
    ]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      soundEngine.playHover();
      const q = input.toLowerCase().trim();
      if (!q) return;
      const match = AVAILABLE_COMMANDS.find((c) => c.startsWith(q));
      if (match) {
        setInput(match);
      } else if (q.startsWith('cat ')) {
        const partial = q.replace('cat ', '');
        const files = ['README.md', 'contact.json', 'projects/aether-nexus.md', 'projects/hyperion-ledger.md', 'projects/omniwork-hcm.md', 'projects/chronos-mesh.md'];
        const fMatch = files.find((f) => f.toLowerCase().startsWith(partial));
        if (fMatch) setInput(`cat ${fMatch}`);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const nextIdx = Math.min(historyCursor + 1, cmdHistory.length - 1);
      if (cmdHistory[nextIdx]) {
        setHistoryCursor(nextIdx);
        setInput(cmdHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIdx = historyCursor - 1;
      if (nextIdx < 0) {
        setHistoryCursor(-1);
        setInput('');
      } else {
        setHistoryCursor(nextIdx);
        setInput(cmdHistory[nextIdx]);
      }
    }
  };

  return (
    <div
      className={`relative z-10 ${
        embedded ? 'h-full' : 'mx-auto max-w-[1380px] px-3 py-6 sm:px-6'
      }`}
      onClick={() => inputRef.current?.focus()}
    >
      <div
        className={`flex flex-col overflow-hidden rounded-2xl border border-emerald-500/35 bg-[#04080E]/95 shadow-[0_25px_90px_rgba(0,0,0,0.9)] ${
          embedded ? 'h-full' : 'min-h-[82vh]'
        }`}
      >
        {/* Terminal Top Window Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 bg-slate-900/95 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            <span className="ml-2 flex items-center gap-1.5 font-mono text-xs font-bold text-emerald-400">
              <TerminalIcon className="h-3.5 w-3.5" />
              biamtiero@architect-os:{cwd} (zsh — TTY Mode)
            </span>
          </div>

          {!embedded && (
            <div className="flex items-center gap-2 font-mono text-xs">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setMode('editorial');
                }}
                className="flex items-center gap-1 rounded-lg border border-white/10 bg-slate-800 px-2.5 py-1 text-slate-200 hover:border-emerald-400 hover:text-white"
              >
                <LayoutGrid className="h-3 w-3 text-emerald-400" /> Exit to Editorial
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setMode('os');
                }}
                className="flex items-center gap-1 rounded-lg border border-white/10 bg-slate-800 px-2.5 py-1 text-slate-200 hover:border-cyan-400 hover:text-white"
              >
                <Monitor className="h-3 w-3 text-cyan-400" /> Switch to Web OS
              </button>
            </div>
          )}
        </div>

        {/* One-Click Quick Command Bar for Recruiters & Visitors */}
        <div className="flex flex-wrap items-center gap-1.5 border-b border-white/10 bg-slate-950/90 px-4 py-2 font-mono text-[11px]">
          <span className="text-slate-400 mr-1">Quick Exec:</span>
          {[
            'help',
            'neofetch',
            'skills --graph',
            'tree',
            'cat README.md',
            'open aether',
            'open hyperion',
            'matrix',
            'sudo hire-me',
          ].map((cmd) => (
            <button
              key={cmd}
              onClick={(e) => {
                e.stopPropagation();
                handleRunCommand(cmd);
              }}
              className="flex items-center gap-1 rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-emerald-300 transition hover:bg-emerald-500 hover:text-slate-950"
            >
              <Play className="h-2.5 w-2.5" /> {cmd}
            </button>
          ))}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleRunCommand('clear');
            }}
            className="ml-auto flex items-center gap-1 rounded border border-white/10 bg-white/5 px-2 py-0.5 text-slate-400 hover:text-white"
          >
            <Trash2 className="h-3 w-3" /> clear
          </button>
        </div>

        {/* Terminal Scrollback Area */}
        <div className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-6 font-mono text-xs leading-relaxed">
          <div className="text-slate-400">
            Welcome to <span className="text-emerald-400 font-bold">Biamtiero Personal UNIX Shell (v2.4.0)</span>. Supports <code className="text-cyan-300">Tab</code> auto-completion, <code className="text-cyan-300">↑/↓</code> history, and <code className="text-cyan-300">| grep</code> piping.
          </div>

          {entries.map((entry) => (
            <div key={entry.id} className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">biamtiero@os</span>
                <span className="text-slate-500">:</span>
                <span className="text-cyan-300">{entry.cwd}</span>
                <span className="text-amber-400">$</span>
                <span className="text-white font-semibold">{entry.command}</span>
              </div>
              <div className="whitespace-pre-wrap pl-2 text-slate-200 border-l-2 border-emerald-500/30">
                {entry.output}
              </div>
            </div>
          ))}

          {/* Active Prompt Input Line */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRunCommand(input);
            }}
            className="flex items-center gap-2 pt-2"
          >
            <span className="text-emerald-400 font-bold shrink-0">biamtiero@os</span>
            <span className="text-slate-500">:</span>
            <span className="text-cyan-300 shrink-0">{cwd}</span>
            <span className="text-amber-400 font-bold">$</span>
            <input
              ref={inputRef}
              type="text"
              autoFocus
              value={input}
              onChange={(e) => {
                soundEngine.playKeystroke();
                setInput(e.target.value);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Type a command (help, skills --graph, open aether, sudo hire-me)..."
              className="w-full bg-transparent font-mono text-xs text-white placeholder-slate-600 focus:outline-none"
            />
          </form>

          <div ref={endRef} />
        </div>

        {/* Bottom Status Bar */}
        <div className="flex items-center justify-between border-t border-white/10 bg-slate-950 px-4 py-1.5 font-mono text-[11px] text-slate-400">
          <div className="flex items-center gap-3">
            <span className="rounded bg-emerald-500 px-1.5 py-0.2 font-bold text-slate-950">
              NORMAL
            </span>
            <span>Tab: Auto-Complete</span>
            <span>↑↓: History</span>
            <span>Pipe: cmd | grep keyword</span>
          </div>
          <span className="flex items-center gap-1 text-emerald-400">
            <Sparkles className="h-3 w-3" /> VFS Mounted (7 files)
          </span>
        </div>
      </div>
    </div>
  );
};
