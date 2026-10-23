import React, { useState, useEffect, useRef } from 'react';
import {
  FolderGit2,
  Terminal as TerminalIcon,
  Network,
  FlaskConical,
  Cpu,
  StickyNote,
  Wifi,
  BatteryCharging,
  HardDrive,
  Maximize2,
  Minimize2,
  X,
  ExternalLink,
  FileText,
  Sparkles,
  Plus,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useSystem } from '../context/SystemContext';
import { soundEngine } from '../utils/soundEngine';
import { KnowledgeGraphSection } from '../components/KnowledgeGraphSection';
import { DigitalLabSection } from '../components/DigitalLabSection';
import { TerminalMode } from './TerminalMode';

interface OSWindow {
  id: 'explorer' | 'terminal' | 'graph' | 'lab' | 'sysmon';
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  x: number;
  y: number;
  w: number;
  h: number;
}

export const WebOSMode: React.FC = () => {
  const { setActiveProjectId, setAiTwinOpen, setResumeModalOpen } = useSystem();

  const [windows, setWindows] = useState<OSWindow[]>([
    {
      id: 'explorer',
      title: 'File Explorer — /home/biamtiero/projects',
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
      zIndex: 20,
      x: 40,
      y: 35,
      w: 680,
      h: 450,
    },
    {
      id: 'terminal',
      title: 'Alacritty // zsh — biamtiero@architect-os',
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
      zIndex: 21,
      x: 490,
      y: 110,
      w: 650,
      h: 430,
    },
    {
      id: 'graph',
      title: 'Neural Knowledge Graph Visualizer',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 18,
      x: 90,
      y: 55,
      w: 880,
      h: 540,
    },
    {
      id: 'lab',
      title: 'Digital Lab // Live Systems & AI Playground',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 19,
      x: 110,
      y: 65,
      w: 860,
      h: 520,
    },
    {
      id: 'sysmon',
      title: 'Chronos Kernel & Browser Telemetry Monitor',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 17,
      x: 220,
      y: 90,
      w: 540,
      h: 380,
    },
  ]);

  // Interactive Sticky Notes State
  const [stickyNotes, setStickyNotes] = useState([
    {
      id: 'note-1',
      title: '📌 Recruiter Quick Guide',
      text: '• Klik ganda proyek di File Explorer untuk membuka Engineering Whitepaper.\n• Gunakan Dock di bawah untuk membuka Terminal, Knowledge Graph, atau Digital Lab.\n• Tekan Cmd/Ctrl+K kapan saja untuk pencarian global.',
      color: 'border-amber-400/40 bg-amber-500/10 text-amber-100',
    },
    {
      id: 'note-2',
      title: '⚡ Principal SLA & Rate',
      text: `Status: Available for Principal / Advisory\nComp: $95k-$145k/yr | IDR 45-75 Jt/mo\nContact: ${PORTFOLIO_DATA.identity.email}`,
      color: 'border-emerald-400/40 bg-emerald-500/10 text-emerald-100',
    },
  ]);

  // File Explorer internal state
  const [explorerTab, setExplorerTab] = useState<'projects' | 'vfs'>('projects');
  const [selectedVfsFile, setSelectedVfsFile] = useState<string>('/home/biamtiero/README.md');

  // System Tray Telemetry (Clock, Battery API, Memory, Network)
  const [clock, setClock] = useState('');
  const [batteryLevel, setBatteryLevel] = useState<string>('98% AC');
  const [memUsage, setMemUsage] = useState<string>('44.2 MB');
  const [netOnline, setNetOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    const updateTray = () => {
      setClock(
        new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }).format(new Date())
      );
      setNetOnline(navigator.onLine);

      const perf = performance as unknown as {
        memory?: { usedJSHeapSize: number };
      };
      if (perf.memory?.usedJSHeapSize) {
        setMemUsage(`${(perf.memory.usedJSHeapSize / 1048576).toFixed(1)} MB`);
      }
    };
    updateTray();
    const t = setInterval(updateTray, 1000);

    // Web Battery API
    const nav = navigator as unknown as {
      getBattery?: () => Promise<{ level: number; charging: boolean }>;
    };
    if (nav.getBattery) {
      nav
        .getBattery()
        .then((bat) => {
          setBatteryLevel(`${Math.round(bat.level * 100)}%${bat.charging ? ' ⚡' : ''}`);
        })
        .catch(() => {});
    }

    return () => clearInterval(t);
  }, []);

  // Dragging & Resizing refs
  const dragState = useRef<{
    id: OSWindow['id'];
    mode: 'move' | 'resize';
    startX: number;
    startY: number;
    origX: number;
    origY: number;
    origW: number;
    origH: number;
  } | null>(null);

  const focusWindow = (id: OSWindow['id']) => {
    setWindows((prev) => {
      const maxZ = Math.max(...prev.map((w) => w.zIndex), 20);
      return prev.map((w) =>
        w.id === id ? { ...w, isOpen: true, isMinimized: false, zIndex: maxZ + 1 } : w
      );
    });
  };

  const closeWindow = (id: OSWindow['id']) => {
    soundEngine.playClick();
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, isOpen: false } : w)));
  };

  const toggleMaximize = (id: OSWindow['id']) => {
    soundEngine.playClick();
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMaximized: !w.isMaximized } : w))
    );
  };

  const toggleMinimize = (id: OSWindow['id']) => {
    soundEngine.playClick();
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMinimized: !w.isMinimized } : w))
    );
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!dragState.current) return;
      const { id, mode, startX, startY, origX, origY, origW, origH } = dragState.current;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      setWindows((prev) =>
        prev.map((w) => {
          if (w.id !== id) return w;
          if (mode === 'move') {
            return {
              ...w,
              x: Math.max(8, Math.min(window.innerWidth - 180, origX + dx)),
              y: Math.max(8, Math.min(window.innerHeight - 140, origY + dy)),
            };
          } else {
            return {
              ...w,
              w: Math.max(360, origW + dx),
              h: Math.max(260, origH + dy),
            };
          }
        })
      );
    };

    const onMouseUp = () => {
      dragState.current = null;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  const addStickyNote = () => {
    soundEngine.playClick();
    setStickyNotes((prev) => [
      ...prev,
      {
        id: `note-${Date.now()}`,
        title: `📝 Scratch Note #${prev.length + 1}`,
        text: 'Klik di sini untuk menulis catatan wawancara atau evaluasi teknis Anda...',
        color: 'border-cyan-400/40 bg-cyan-500/10 text-cyan-100',
      },
    ]);
  };

  return (
    <div className="relative z-10 flex h-[calc(100vh-57px)] w-full flex-col justify-between overflow-hidden select-none">
      {/* Hyprland / macOS Top Workspace Status Strip */}
      <div className="flex items-center justify-between border-b border-white/10 bg-[#050811]/90 px-4 py-1.5 font-mono text-[11px] text-slate-300 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-emerald-300 border border-emerald-500/30 font-bold">
            HYPRLAND // WEB-OS v2.4
          </span>
          <span className="hidden sm:inline text-slate-400">
            Tip: Drag window headers to move · Drag bottom-right corner to resize
          </span>
        </div>

        {/* System Tray Telemetry (Requirement #2 Mode 2) */}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-emerald-400" title="Network Status">
            <Wifi className="h-3.5 w-3.5" /> {netOnline ? 'ONLINE (10Gbps)' : 'OFFLINE'}
          </span>
          <span className="hidden sm:flex items-center gap-1 text-cyan-300" title="JS Heap Memory">
            <HardDrive className="h-3.5 w-3.5" /> RAM: {memUsage}
          </span>
          <span className="flex items-center gap-1 text-amber-300" title="Browser Battery API">
            <BatteryCharging className="h-3.5 w-3.5" /> {batteryLevel}
          </span>
          <span className="font-bold text-white">{clock} WIB</span>
        </div>
      </div>

      {/* Desktop Surface Area (Icons + Interactive Sticky Notes + Floating Windows) */}
      <div className="relative flex-1 overflow-hidden p-4">
        {/* Desktop Shortcut Icons (Left Column) */}
        <div className="grid w-28 grid-cols-1 gap-3">
          {[
            {
              label: 'Projects Explorer',
              icon: <FolderGit2 className="h-6 w-6 text-emerald-400" />,
              onClick: () => focusWindow('explorer'),
            },
            {
              label: 'TTY Terminal',
              icon: <TerminalIcon className="h-6 w-6 text-amber-400" />,
              onClick: () => focusWindow('terminal'),
            },
            {
              label: 'Brain Graph',
              icon: <Network className="h-6 w-6 text-cyan-400" />,
              onClick: () => focusWindow('graph'),
            },
            {
              label: 'Digital Lab',
              icon: <FlaskConical className="h-6 w-6 text-purple-400" />,
              onClick: () => focusWindow('lab'),
            },
            {
              label: 'Tailored CV',
              icon: <FileText className="h-6 w-6 text-emerald-300" />,
              onClick: () => setResumeModalOpen(true),
            },
          ].map((shortcut, i) => (
            <button
              key={i}
              onClick={() => {
                soundEngine.playClick();
                shortcut.onClick();
              }}
              className="group flex flex-col items-center gap-1.5 rounded-xl border border-transparent p-2 text-center transition hover:border-white/15 hover:bg-white/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/90 shadow-lg group-hover:scale-105 transition">
                {shortcut.icon}
              </div>
              <span className="font-mono text-[11px] font-medium text-slate-200 drop-shadow">
                {shortcut.label}
              </span>
            </button>
          ))}
        </div>

        {/* Interactive Sticky Notes Widget (Right Side of Desktop) */}
        <div className=" hidden lg:flex flex-col gap-3 fixed right-5 top-28 z-10 w-72">
          <div className="flex items-center justify-between font-mono text-[11px] text-slate-400 px-1">
            <span className="flex items-center gap-1">
              <StickyNote className="h-3.5 w-3.5 text-amber-400" /> DESKTOP STICKY NOTES
            </span>
            <button
              onClick={addStickyNote}
              className="flex items-center gap-0.5 rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-white hover:bg-emerald-500 hover:text-slate-950"
            >
              <Plus className="h-3 w-3" /> Note
            </button>
          </div>
          {stickyNotes.map((note, idx) => (
            <div
              key={note.id}
              className={`rounded-2xl border p-3.5 backdrop-blur-md shadow-xl ${note.color}`}
            >
              <div className="flex items-center justify-between font-mono text-xs font-bold">
                <span>{note.title}</span>
                {idx > 1 && (
                  <button
                    onClick={() =>
                      setStickyNotes((prev) => prev.filter((n) => n.id !== note.id))
                    }
                    className="text-slate-400 hover:text-white"
                  >
                    <X className="h-3 w-3" />
                  </button>
                )}
              </div>
              <textarea
                value={note.text}
                onChange={(e) => {
                  const val = e.target.value;
                  setStickyNotes((prev) =>
                    prev.map((n) => (n.id === note.id ? { ...n, text: val } : n))
                  );
                }}
                rows={4}
                className="mt-2 w-full resize-none bg-transparent font-mono text-[11px] leading-relaxed focus:outline-none"
              />
            </div>
          ))}
        </div>

        {/* DRAGGABLE & RESIZABLE OS WINDOWS */}
        {windows.map((win) => {
          if (!win.isOpen || win.isMinimized) return null;

          const style: React.CSSProperties = win.isMaximized
            ? {
                left: 12,
                top: 12,
                width: 'calc(100% - 24px)',
                height: 'calc(100% - 24px)',
                zIndex: win.zIndex,
              }
            : {
                left: win.x,
                top: win.y,
                width: Math.min(win.w, window.innerWidth - 24),
                height: Math.min(win.h, window.innerHeight - 150),
                zIndex: win.zIndex,
              };

          return (
            <div
              key={win.id}
              style={style}
              onMouseDown={() => focusWindow(win.id)}
              className="absolute flex flex-col overflow-hidden rounded-2xl border border-emerald-500/35 bg-[#080C15]/95 shadow-[0_25px_80px_rgba(0,0,0,0.88)] backdrop-blur-xl surface-card"
            >
              {/* Window Title Bar (Draggable) */}
              <div
                data-cursor="drag"
                onMouseDown={(e) => {
                  if (win.isMaximized) return;
                  focusWindow(win.id);
                  dragState.current = {
                    id: win.id,
                    mode: 'move',
                    startX: e.clientX,
                    startY: e.clientY,
                    origX: win.x,
                    origY: win.y,
                    origW: win.w,
                    origH: win.h,
                  };
                }}
                className="flex cursor-move items-center justify-between border-b border-white/10 bg-slate-900/95 px-4 py-2.5"
              >
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      closeWindow(win.id);
                    }}
                    className="h-3 w-3 rounded-full bg-rose-500 hover:bg-rose-400"
                    title="Close Window"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMinimize(win.id);
                    }}
                    className="h-3 w-3 rounded-full bg-amber-400 hover:bg-amber-300"
                    title="Minimize Window"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMaximize(win.id);
                    }}
                    className="h-3 w-3 rounded-full bg-emerald-400 hover:bg-emerald-300"
                    title="Maximize Window"
                  />
                  <span className="ml-2 font-mono text-xs font-bold text-slate-200">
                    {win.title}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-slate-400">
                  <button
                    onClick={() => toggleMinimize(win.id)}
                    className="rounded p-1 hover:bg-white/10 hover:text-white"
                  >
                    <Minimize2 className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => toggleMaximize(win.id)}
                    className="rounded p-1 hover:bg-white/10 hover:text-white"
                  >
                    <Maximize2 className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => closeWindow(win.id)}
                    className="rounded p-1 hover:bg-rose-500/20 hover:text-rose-300"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Window Body Content */}
              <div className="flex-1 overflow-y-auto p-4 select-text">
                {win.id === 'explorer' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setExplorerTab('projects')}
                          className={`rounded-lg px-3 py-1 font-mono text-xs ${
                            explorerTab === 'projects'
                              ? 'bg-emerald-500 text-slate-950 font-bold'
                              : 'bg-slate-900 text-slate-300'
                          }`}
                        >
                          Flagship Whitepapers (4)
                        </button>
                        <button
                          onClick={() => setExplorerTab('vfs')}
                          className={`rounded-lg px-3 py-1 font-mono text-xs ${
                            explorerTab === 'vfs'
                              ? 'bg-emerald-500 text-slate-950 font-bold'
                              : 'bg-slate-900 text-slate-300'
                          }`}
                        >
                          Virtual File System (7 Files)
                        </button>
                      </div>
                      <span className="font-mono text-[11px] text-emerald-400">
                        /home/biamtiero
                      </span>
                    </div>

                    {explorerTab === 'projects' ? (
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {PORTFOLIO_DATA.projects.map((p) => (
                          <div
                            key={p.id}
                            onClick={() => {
                              soundEngine.playClick();
                              setActiveProjectId(p.id);
                            }}
                            className="group cursor-pointer rounded-xl border border-white/10 bg-slate-900/90 p-4 transition hover:border-emerald-400"
                          >
                            <div className="flex items-center justify-between font-mono text-[10px] text-emerald-400">
                              <span>{p.category}</span>
                              <span>{p.year}</span>
                            </div>
                            <h4 className="mt-1.5 font-display text-sm font-bold text-white group-hover:text-emerald-300">
                              {p.title.split('//')[0]}
                            </h4>
                            <p className="mt-1 line-clamp-2 text-xs text-slate-400">
                              {p.summary}
                            </p>
                            <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2 font-mono text-[11px]">
                              <span className="text-cyan-300">{p.metrics.throughput}</span>
                              <span className="inline-flex items-center gap-1 text-emerald-300">
                                Open Whitepaper <ExternalLink className="h-3 w-3" />
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-12">
                        <div className="space-y-1 sm:col-span-5">
                          {Object.keys(PORTFOLIO_DATA.virtualFileSystem).map((path) => (
                            <button
                              key={path}
                              onClick={() => setSelectedVfsFile(path)}
                              className={`w-full truncate rounded-lg px-2.5 py-1.5 text-left font-mono text-xs ${
                                selectedVfsFile === path
                                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                                  : 'text-slate-400 hover:bg-white/5'
                              }`}
                            >
                              {path.replace('/home/biamtiero/', '')}
                            </button>
                          ))}
                        </div>
                        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-slate-950 p-3 font-mono text-xs text-emerald-200 sm:col-span-7">
                          {PORTFOLIO_DATA.virtualFileSystem[selectedVfsFile]}
                        </pre>
                      </div>
                    )}
                  </div>
                )}

                {win.id === 'terminal' && <TerminalMode embedded />}
                {win.id === 'graph' && <KnowledgeGraphSection compact />}
                {win.id === 'lab' && <DigitalLabSection compact />}
                {win.id === 'sysmon' && (
                  <div className="space-y-4 font-mono text-xs">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-white/10 bg-slate-900 p-3">
                        <div className="text-slate-400">BROWSER HEAP MEMORY</div>
                        <div className="mt-1 text-lg font-bold text-emerald-400">{memUsage}</div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-slate-900 p-3">
                        <div className="text-slate-400">BATTERY TELEMETRY</div>
                        <div className="mt-1 text-lg font-bold text-amber-300">{batteryLevel}</div>
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-slate-950 p-4 space-y-2">
                      <div className="text-cyan-300 font-bold">ACTIVE KERNEL DAEMONS</div>
                      <div className="flex justify-between text-slate-300">
                        <span>aether-semantic-router.service</span>
                        <span className="text-emerald-400">RUNNING (0.4% CPU)</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>hyperion-lmax-sequencer.service</span>
                        <span className="text-emerald-400">RUNNING (142K TPS)</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>chronos-ebpf-collector.daemon</span>
                        <span className="text-emerald-400">RUNNING (0.8% CPU)</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom-Right Resize Handle */}
              {!win.isMaximized && (
                <div
                  data-cursor="drag"
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    focusWindow(win.id);
                    dragState.current = {
                      id: win.id,
                      mode: 'resize',
                      startX: e.clientX,
                      startY: e.clientY,
                      origX: win.x,
                      origY: win.y,
                      origW: win.w,
                      origH: win.h,
                    };
                  }}
                  className="absolute bottom-0 right-0 h-5 w-5 cursor-nwse-resize bg-gradient-to-tl from-emerald-500/50 to-transparent"
                  title="Drag to Resize Window"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* macOS / Hyprland Bottom Dock */}
      <div className="mx-auto mb-3 flex items-center gap-2 rounded-2xl border border-white/15 bg-[#070B14]/90 px-4 py-2 shadow-[0_15px_50px_rgba(0,0,0,0.85)] backdrop-blur-xl surface-card">
        {[
          {
            id: 'explorer' as const,
            label: 'File Explorer',
            icon: <FolderGit2 className="h-5 w-5 text-emerald-400" />,
          },
          {
            id: 'terminal' as const,
            label: 'TTY Terminal',
            icon: <TerminalIcon className="h-5 w-5 text-amber-400" />,
          },
          {
            id: 'graph' as const,
            label: 'Knowledge Graph',
            icon: <Network className="h-5 w-5 text-cyan-400" />,
          },
          {
            id: 'lab' as const,
            label: 'Digital Lab',
            icon: <FlaskConical className="h-5 w-5 text-purple-400" />,
          },
          {
            id: 'sysmon' as const,
            label: 'System Monitor',
            icon: <Cpu className="h-5 w-5 text-rose-400" />,
          },
        ].map((app) => {
          const w = windows.find((x) => x.id === app.id);
          const active = w?.isOpen && !w?.isMinimized;
          return (
            <button
              key={app.id}
              onClick={() => {
                soundEngine.playClick();
                focusWindow(app.id);
              }}
              className={`group relative flex flex-col items-center rounded-xl border p-2.5 transition-all hover:-translate-y-1 ${
                active
                  ? 'border-emerald-500/50 bg-emerald-500/15'
                  : 'border-white/10 bg-slate-900/80 hover:border-white/30'
              }`}
              title={app.label}
            >
              {app.icon}
              <span className="mt-1 font-mono text-[10px] text-slate-300">{app.label}</span>
              {w?.isOpen && (
                <span className="absolute -bottom-1 h-1 w-3 rounded-full bg-emerald-400" />
              )}
            </button>
          );
        })}

        <div className="mx-1 h-8 w-px bg-white/10" />

        <button
          onClick={() => {
            soundEngine.playClick();
            setAiTwinOpen(true);
          }}
          className="flex flex-col items-center rounded-xl border border-cyan-500/40 bg-cyan-500/15 p-2.5 transition-all hover:-translate-y-1"
        >
          <Sparkles className="h-5 w-5 text-cyan-300" />
          <span className="mt-1 font-mono text-[10px] text-cyan-200">AI Clone</span>
        </button>
      </div>
    </div>
  );
};
