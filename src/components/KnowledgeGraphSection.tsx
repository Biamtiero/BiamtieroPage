import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Network,
  Cpu,
  FolderGit2,
  Briefcase,
  Award,
  Sparkles,
  ExternalLink,
  RotateCcw,
} from 'lucide-react';
import { PORTFOLIO_DATA, GraphNode } from '../data/portfolioData';
import { useSystem } from '../context/SystemContext';
import { soundEngine } from '../utils/soundEngine';

interface SimNode extends GraphNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export const KnowledgeGraphSection: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { setActiveProjectId } = useSystem();
  const [selectedId, setSelectedId] = useState<string>('skill-arch');
  const [filterGroup, setFilterGroup] = useState<'all' | 'skill' | 'project' | 'role' | 'cert'>('all');

  // Initialize force-directed node coordinates deterministically around center
  const initialNodes = useMemo<SimNode[]>(() => {
    const raw = PORTFOLIO_DATA.knowledgeGraph.nodes;
    return raw.map((n, i) => {
      const angle = (i / raw.length) * Math.PI * 2;
      const radius = n.group === 'skill' ? 135 : n.group === 'project' ? 225 : 265;
      return {
        ...n,
        x: 420 + Math.cos(angle) * radius,
        y: 270 + Math.sin(angle) * (radius * 0.78),
        vx: 0,
        vy: 0,
      };
    });
  }, []);

  const [nodes, setNodes] = useState<SimNode[]>(initialNodes);
  const draggingId = useRef<string | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  // Run lightweight spring/repulsion relaxation ticks
  useEffect(() => {
    let frame = 0;
    let rafId: number;
    const links = PORTFOLIO_DATA.knowledgeGraph.links;

    const step = () => {
      frame++;
      if (frame > 180 && !draggingId.current) return;

      setNodes((prev) => {
        const next = prev.map((n) => ({ ...n }));
        const centerX = 420;
        const centerY = 270;

        // Repulsion between all node pairs
        for (let i = 0; i < next.length; i++) {
          for (let j = i + 1; j < next.length; j++) {
            const dx = next[i].x - next[j].x;
            const dy = next[i].y - next[j].y;
            const distSq = dx * dx + dy * dy + 1;
            const dist = Math.sqrt(distSq);
            const minDist = 92;
            if (dist < minDist) {
              const force = ((minDist - dist) / dist) * 0.35;
              next[i].vx += dx * force;
              next[i].vy += dy * force;
              next[j].vx -= dx * force;
              next[j].vy -= dy * force;
            }
          }
        }

        // Spring attraction along links
        for (const link of links) {
          const s = next.find((n) => n.id === link.source);
          const t = next.find((n) => n.id === link.target);
          if (s && t) {
            const dx = t.x - s.x;
            const dy = t.y - s.y;
            const dist = Math.hypot(dx, dy) || 1;
            const targetDist = 155;
            const force = (dist - targetDist) * 0.008;
            const fx = (dx / dist) * force;
            const fy = (dy / dist) * force;
            s.vx += fx;
            s.vy += fy;
            t.vx -= fx;
            t.vy -= fy;
          }
        }

        // Center gravity & boundary clamp
        for (const n of next) {
          if (n.id === draggingId.current) continue;
          n.vx += (centerX - n.x) * 0.004;
          n.vy += (centerY - n.y) * 0.004;
          n.vx *= 0.78;
          n.vy *= 0.78;
          n.x = Math.max(75, Math.min(765, n.x + n.vx));
          n.y = Math.max(52, Math.min(488, n.y + n.vy));
        }

        return next;
      });

      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const selectedNode = useMemo(
    () => nodes.find((n) => n.id === selectedId) ?? nodes[0],
    [nodes, selectedId]
  );

  const connectedLinks = useMemo(() => {
    return PORTFOLIO_DATA.knowledgeGraph.links.filter(
      (l) => l.source === selectedId || l.target === selectedId
    );
  }, [selectedId]);

  const connectedIds = useMemo(() => {
    const set = new Set<string>([selectedId]);
    connectedLinks.forEach((l) => {
      set.add(l.source);
      set.add(l.target);
    });
    return set;
  }, [selectedId, connectedLinks]);

  const handleSvgMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!draggingId.current || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const scaleX = 840 / rect.width;
    const scaleY = 540 / rect.height;
    const x = Math.max(60, Math.min(780, (e.clientX - rect.left) * scaleX));
    const y = Math.max(45, Math.min(495, (e.clientY - rect.top) * scaleY));

    setNodes((prev) =>
      prev.map((n) => (n.id === draggingId.current ? { ...n, x, y, vx: 0, vy: 0 } : n))
    );
  };

  const getGroupStyle = (group: GraphNode['group']) => {
    switch (group) {
      case 'skill':
        return {
          stroke: '#10B981',
          fill: '#064E3B',
          badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
          label: 'Skill Node',
        };
      case 'project':
        return {
          stroke: '#06B6D4',
          fill: '#164E63',
          badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
          label: 'Flagship Project',
        };
      case 'role':
        return {
          stroke: '#F59E0B',
          fill: '#78350F',
          badge: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
          label: 'Career Role',
        };
      case 'cert':
        return {
          stroke: '#A855F7',
          fill: '#581C87',
          badge: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
          label: 'Certification',
        };
    }
  };

  return (
    <section id="section-knowledge-graph" className={compact ? 'py-2' : 'py-16'}>
      {!compact && (
        <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-400">
              <Network className="h-3.5 w-3.5" />
              <span>MODULE 02 // FORCE-DIRECTED NEURAL KNOWLEDGE GRAPH</span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Peta Otak & Ekosistem Keahlian Interaktif
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-400">
              Klik atau tarik (drag) node mana pun untuk menginspeksi relasi langsung antara{' '}
              <span className="text-emerald-400 font-medium">Keahlian (Skills)</span> ↔{' '}
              <span className="text-cyan-400 font-medium">Proyek Produksi</span> ↔{' '}
              <span className="text-amber-400 font-medium">Pengalaman Kerja</span> ↔{' '}
              <span className="text-purple-400 font-medium">Sertifikasi</span>.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {(['all', 'skill', 'project', 'role', 'cert'] as const).map((g) => (
              <button
                key={g}
                onClick={() => {
                  soundEngine.playClick();
                  setFilterGroup(g);
                }}
                className={`rounded-lg border px-3 py-1.5 font-mono text-xs transition ${
                  filterGroup === g
                    ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300 font-semibold'
                    : 'border-white/10 bg-slate-900/70 text-slate-400 hover:text-white'
                }`}
              >
                {g === 'all'
                  ? 'All Nodes (17)'
                  : g === 'skill'
                  ? 'Skills (8)'
                  : g === 'project'
                  ? 'Projects (4)'
                  : g === 'role'
                  ? 'Roles (3)'
                  : 'Certs (2)'}
              </button>
            ))}
            <button
              onClick={() => {
                soundEngine.playClick();
                setNodes(initialNodes);
              }}
              className="flex items-center gap-1 rounded-lg border border-white/10 bg-slate-900/70 px-2.5 py-1.5 font-mono text-xs text-slate-300 hover:border-emerald-500/40"
              title="Reset Graph Layout"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Interactive Force-Directed SVG Canvas */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080C14]/90 lg:col-span-8 surface-card">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 font-mono text-xs text-slate-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /> Skill
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" /> Project
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" /> Career Role
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-purple-400" /> Certification
              </span>
            </div>
            <span className="hidden sm:inline text-emerald-400">
              Drag nodes to rearrange · Click node to inspect
            </span>
          </div>

          <svg
            ref={svgRef}
            viewBox="0 0 840 540"
            className="h-[420px] sm:h-[490px] w-full select-none cursor-grab active:cursor-grabbing"
            onMouseMove={handleSvgMouseMove}
            onMouseUp={() => {
              draggingId.current = null;
            }}
            onMouseLeave={() => {
              draggingId.current = null;
            }}
          >
            <defs>
              <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Subtle Radar Concentric Rings */}
            <circle
              cx="420"
              cy="270"
              r="130"
              fill="none"
              stroke="rgba(148,163,184,0.07)"
              strokeDasharray="4 4"
            />
            <circle
              cx="420"
              cy="270"
              r="230"
              fill="none"
              stroke="rgba(148,163,184,0.06)"
              strokeDasharray="4 4"
            />

            {/* Edges */}
            {PORTFOLIO_DATA.knowledgeGraph.links.map((link, idx) => {
              const s = nodes.find((n) => n.id === link.source);
              const t = nodes.find((n) => n.id === link.target);
              if (!s || !t) return null;

              const isHighlighted =
                link.source === selectedId || link.target === selectedId;

              return (
                <g key={idx}>
                  <line
                    x1={s.x}
                    y1={s.y}
                    x2={t.x}
                    y2={t.y}
                    stroke={isHighlighted ? '#10B981' : 'rgba(148, 163, 184, 0.16)'}
                    strokeWidth={isHighlighted ? 2.2 : 1}
                    strokeDasharray={isHighlighted ? 'none' : '3 3'}
                  />
                  {isHighlighted && (
                    <text
                      x={(s.x + t.x) / 2}
                      y={(s.y + t.y) / 2 - 5}
                      textAnchor="middle"
                      fill="#6EE7B7"
                      fontSize="9"
                      fontFamily="JetBrains Mono, monospace"
                    >
                      {link.relation}
                    </text>
                  )}
                </g>
              );
            })}

            {/* Nodes */}
            {nodes.map((node) => {
              const isSelected = node.id === selectedId;
              const isConnected = connectedIds.has(node.id);
              const matchesFilter = filterGroup === 'all' || node.group === filterGroup;
              const opacity = !matchesFilter ? 0.2 : isConnected ? 1 : 0.42;
              const style = getGroupStyle(node.group);

              return (
                <g
                  key={node.id}
                  transform={`translate(${node.x}, ${node.y})`}
                  style={{ opacity, transition: 'opacity 0.2s ease' }}
                  className="cursor-pointer"
                  data-cursor="drag"
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    draggingId.current = node.id;
                    soundEngine.playClick();
                    setSelectedId(node.id);
                  }}
                >
                  {isSelected && (
                    <circle r="38" fill="url(#nodeGlow)" className="animate-pulse" />
                  )}
                  <circle
                    r={isSelected ? 22 : node.group === 'skill' ? 18 : 15}
                    fill={style.fill}
                    stroke={style.stroke}
                    strokeWidth={isSelected ? 3 : 1.8}
                  />
                  <text
                    y={isSelected ? 34 : 29}
                    textAnchor="middle"
                    fill={isSelected ? '#FFFFFF' : '#CBD5E1'}
                    fontSize={isSelected ? '11.5' : '10'}
                    fontWeight={isSelected ? '700' : '500'}
                    fontFamily="Space Grotesk, sans-serif"
                  >
                    {node.label}
                  </text>
                  <text
                    y="4"
                    textAnchor="middle"
                    fill="#F8FAFC"
                    fontSize="9"
                    fontFamily="JetBrains Mono, monospace"
                  >
                    {node.group === 'skill'
                      ? `${node.yearsOfExp}y`
                      : node.group === 'project'
                      ? 'PRJ'
                      : node.group === 'role'
                      ? 'ROLE'
                      : 'CERT'}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Selected Node Deep Telemetry Inspector */}
        <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0B101B]/95 p-6 lg:col-span-4 surface-card">
          <div>
            <div className="flex items-center justify-between gap-2">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-xs ${
                  getGroupStyle(selectedNode.group).badge
                }`}
              >
                {selectedNode.group === 'skill' && <Cpu className="h-3.5 w-3.5" />}
                {selectedNode.group === 'project' && <FolderGit2 className="h-3.5 w-3.5" />}
                {selectedNode.group === 'role' && <Briefcase className="h-3.5 w-3.5" />}
                {selectedNode.group === 'cert' && <Award className="h-3.5 w-3.5" />}
                <span>{getGroupStyle(selectedNode.group).label}</span>
              </span>
              <span className="font-mono text-xs text-slate-400">ID: {selectedNode.id}</span>
            </div>

            <h3 className="mt-3 font-display text-2xl font-bold text-white">
              {selectedNode.label}
            </h3>

            {/* 3 Mandatory Metrics from Prompt 3B */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-slate-900/70 p-3">
                <div className="font-mono text-[10px] uppercase text-slate-400">
                  Years of Production Exp
                </div>
                <div className="mt-1 font-mono text-lg font-bold text-emerald-400">
                  {selectedNode.yearsOfExp ? `${selectedNode.yearsOfExp}+ Years` : 'Production Verified'}
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-900/70 p-3">
                <div className="font-mono text-[10px] uppercase text-slate-400">
                  Proficiency Depth
                </div>
                <div className="mt-1 font-mono text-sm font-bold text-cyan-300">
                  {selectedNode.proficiencyDepth ?? 'Principal Level'}
                </div>
              </div>
            </div>

            <div className="mt-3 rounded-xl border border-emerald-500/25 bg-emerald-500/5 p-3.5">
              <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                <Sparkles className="h-3 w-3" /> Real-World Production Impact
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-200">
                {selectedNode.realWorldImpact}
              </p>
              <div className="mt-2 font-mono text-xs font-semibold text-emerald-300">
                Telemetry: {selectedNode.metrics}
              </div>
            </div>

            {/* Connected Ecosystem Nodes */}
            <div className="mt-5">
              <div className="mb-2 font-mono text-xs uppercase tracking-wider text-slate-400">
                Connected Ecosystem Nodes ({connectedLinks.length})
              </div>
              <div className="max-h-48 space-y-1.5 overflow-y-auto pr-1">
                {connectedLinks.map((link, i) => {
                  const otherId = link.source === selectedId ? link.target : link.source;
                  const otherNode = nodes.find((n) => n.id === otherId);
                  if (!otherNode) return null;

                  return (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-xs transition hover:border-emerald-500/40"
                    >
                      <button
                        onClick={() => {
                          soundEngine.playClick();
                          setSelectedId(otherNode.id);
                        }}
                        className="flex flex-col text-left"
                      >
                        <span className="font-medium text-white">{otherNode.label}</span>
                        <span className="font-mono text-[10px] text-emerald-400">
                          ↔ {link.relation}
                        </span>
                      </button>

                      {otherNode.group === 'project' && (
                        <button
                          onClick={() => setActiveProjectId(otherNode.id)}
                          className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-2 py-1 font-mono text-[10px] text-cyan-300 hover:bg-cyan-500/20"
                        >
                          Whitepaper ↗
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {selectedNode.group === 'project' && (
            <button
              onClick={() => setActiveProjectId(selectedNode.id)}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 font-mono text-xs font-bold text-slate-950 transition hover:bg-emerald-400"
            >
              <span>Open Full Engineering Whitepaper</span>
              <ExternalLink className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
