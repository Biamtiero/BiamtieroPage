import React, { useState, useEffect, useRef } from 'react';
import {
  FlaskConical,
  Cpu,
  Calculator,
  Route,
  ServerCrash,
  Waves,
  Play,
  RotateCcw,
  Zap,
  ShieldAlert,
} from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

export const DigitalLabSection: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [activeTool, setActiveTool] = useState<'roi' | 'astar' | 'raft' | 'shader'>('roi');

  // --- MICRO-APP 1: AI TOKEN ECONOMICS & ENTERPRISE ROI CALCULATOR ---
  const [dailyQueries, setDailyQueries] = useState<number>(45000);
  const [avgTokensPerReq, setAvgTokensPerReq] = useState<number>(2800);
  const [semanticCacheHitPct, setSemanticCacheHitPct] = useState<number>(42);
  const [vllmOffloadPct, setVllmOffloadPct] = useState<number>(38);

  const monthlyTokensMillions = (dailyQueries * 30 * avgTokensPerReq) / 1_000_000;
  const naiveFrontierCost = Math.round(monthlyTokensMillions * 10.5); // ~$10.5 blended per 1M tokens
  const remainingFrontierPct = Math.max(5, 100 - semanticCacheHitPct - vllmOffloadPct);
  const optimizedMonthlyCost = Math.round(
    naiveFrontierCost * (remainingFrontierPct / 100) +
      monthlyTokensMillions * (vllmOffloadPct / 100) * 0.95 +
      420 // Redis + Qdrant cluster overhead
  );
  const monthlySavings = Math.max(0, naiveFrontierCost - optimizedMonthlyCost);
  const annualSavings = monthlySavings * 12;

  // --- MICRO-APP 2: A* PATHFINDING & HEURISTIC VISUALIZER ---
  const ROWS = 9;
  const COLS = 16;
  const [walls, setWalls] = useState<Set<string>>(
    () => new Set(['1-4', '2-4', '3-4', '4-4', '5-4', '6-8', '5-8', '4-8', '3-8', '2-11', '3-11', '4-11', '5-11', '6-11'])
  );
  const [visitedCells, setVisitedCells] = useState<Set<string>>(new Set());
  const [shortestPath, setShortestPath] = useState<Set<string>>(new Set());
  const [astarMetrics, setAstarMetrics] = useState({ explored: 0, pathLen: 0, execMs: '0.42' });

  const runAStar = (currentWalls = walls) => {
    const t0 = performance.now();
    const start = [1, 1];
    const goal = [ROWS - 2, COLS - 2];
    const key = (r: number, c: number) => `${r}-${c}`;

    const open: { r: number; c: number; g: number; f: number }[] = [
      { r: start[0], c: start[1], g: 0, f: Math.abs(goal[0] - start[0]) + Math.abs(goal[1] - start[1]) },
    ];
    const cameFrom = new Map<string, string>();
    const gScore = new Map<string, number>([[key(start[0], start[1]), 0]]);
    const visited = new Set<string>();

    while (open.length > 0) {
      open.sort((a, b) => a.f - b.f);
      const curr = open.shift()!;
      const currKey = key(curr.r, curr.c);
      visited.add(currKey);

      if (curr.r === goal[0] && curr.c === goal[1]) {
        const path = new Set<string>();
        let trace: string | undefined = currKey;
        while (trace) {
          path.add(trace);
          trace = cameFrom.get(trace);
        }
        const dt = (performance.now() - t0 + 0.18).toFixed(2);
        setVisitedCells(visited);
        setShortestPath(path);
        setAstarMetrics({ explored: visited.size, pathLen: path.size, execMs: dt });
        return;
      }

      const dirs = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
      ];
      for (const [dr, dc] of dirs) {
        const nr = curr.r + dr;
        const nc = curr.c + dc;
        const nKey = key(nr, nc);
        if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS || currentWalls.has(nKey)) continue;

        const tentativeG = (gScore.get(currKey) ?? Infinity) + 1;
        if (tentativeG < (gScore.get(nKey) ?? Infinity)) {
          cameFrom.set(nKey, currKey);
          gScore.set(nKey, tentativeG);
          const h = Math.abs(goal[0] - nr) + Math.abs(goal[1] - nc);
          if (!open.some((item) => item.r === nr && item.c === nc)) {
            open.push({ r: nr, c: nc, g: tentativeG, f: tentativeG + h });
          }
        }
      }
    }

    setVisitedCells(visited);
    setShortestPath(new Set());
    setAstarMetrics({ explored: visited.size, pathLen: 0, execMs: '0.35' });
  };

  useEffect(() => {
    runAStar(walls);
  }, []);

  const toggleWall = (r: number, c: number) => {
    if ((r === 1 && c === 1) || (r === ROWS - 2 && c === COLS - 2)) return;
    soundEngine.playClick();
    const k = `${r}-${c}`;
    const next = new Set(walls);
    if (next.has(k)) next.delete(k);
    else next.add(k);
    setWalls(next);
    runAStar(next);
  };

  const randomizeMaze = () => {
    soundEngine.playSuccess();
    const next = new Set<string>();
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if ((r === 1 && c === 1) || (r === ROWS - 2 && c === COLS - 2)) continue;
        if (Math.random() < 0.24) next.add(`${r}-${c}`);
      }
    }
    setWalls(next);
    runAStar(next);
  };

  // --- MICRO-APP 3: DISTRIBUTED RAFT CONSENSUS & CHAOS SIMULATOR ---
  const [raftTerm, setRaftTerm] = useState<number>(42);
  const [clusterNodes, setClusterNodes] = useState([
    { id: 'node-01', region: 'ap-southeast-1a', role: 'LEADER', alive: true, latencyMs: 4.2 },
    { id: 'node-02', region: 'ap-southeast-1b', role: 'FOLLOWER', alive: true, latencyMs: 6.1 },
    { id: 'node-03', region: 'ap-southeast-1c', role: 'FOLLOWER', alive: true, latencyMs: 5.8 },
    { id: 'node-04', region: 'ap-northeast-1a', role: 'FOLLOWER', alive: true, latencyMs: 18.4 },
    { id: 'node-05', region: 'eu-central-1a', role: 'FOLLOWER', alive: true, latencyMs: 39.2 },
  ]);
  const [raftLog, setRaftLog] = useState<string[]>([
    '[TERM 42] Quorum healthy (5/5 nodes online). Replicating WAL entries at 142,000 TPS.',
  ]);

  const killCurrentLeader = () => {
    soundEngine.playClick();
    setClusterNodes((prev) => {
      const currentLeader = prev.find((n) => n.role === 'LEADER' && n.alive);
      const next = prev.map((n) =>
        currentLeader && n.id === currentLeader.id ? { ...n, alive: false, role: 'OFFLINE' } : n
      );
      const candidates = next.filter((n) => n.alive);
      if (candidates.length >= 3) {
        const elected = candidates[0];
        elected.role = 'LEADER';
        const nextTerm = raftTerm + 1;
        setRaftTerm(nextTerm);
        setRaftLog((logs) => [
          `[CHAOS INJECT] ${currentLeader?.id} terminated! Heartbeat timeout detected in 120ms.`,
          `[TERM ${nextTerm}] Leader election won by ${elected.id} (${elected.region}). Quorum (${candidates.length}/5) preserved. Zero dropped transactions.`,
          ...logs.slice(0, 4),
        ]);
      } else {
        setRaftLog((logs) => [
          `[CRITICAL] Quorum lost (< 3 nodes alive)! Cluster entered read-only safety lock to prevent split-brain.`,
          ...logs.slice(0, 4),
        ]);
      }
      return [...next];
    });
  };

  const healCluster = () => {
    soundEngine.playSuccess();
    const nextTerm = raftTerm + 1;
    setRaftTerm(nextTerm);
    setClusterNodes([
      { id: 'node-01', region: 'ap-southeast-1a', role: 'LEADER', alive: true, latencyMs: 4.2 },
      { id: 'node-02', region: 'ap-southeast-1b', role: 'FOLLOWER', alive: true, latencyMs: 6.1 },
      { id: 'node-03', region: 'ap-southeast-1c', role: 'FOLLOWER', alive: true, latencyMs: 5.8 },
      { id: 'node-04', region: 'ap-northeast-1a', role: 'FOLLOWER', alive: true, latencyMs: 18.4 },
      { id: 'node-05', region: 'eu-central-1a', role: 'FOLLOWER', alive: true, latencyMs: 39.2 },
    ]);
    setRaftLog((logs) => [
      `[TERM ${nextTerm}] All 5 nodes healed & caught up via Merkle snapshot sync.`,
      ...logs.slice(0, 4),
    ]);
  };

  // --- MICRO-APP 4: HARMONIC WAVE INTERFERENCE & SHADER SANDBOX ---
  const waveCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [waveFreq, setWaveFreq] = useState<number>(3.2);
  const [waveAmp, setWaveAmp] = useState<number>(48);
  const [waveComplexity, setWaveComplexity] = useState<number>(4);

  useEffect(() => {
    if (activeTool !== 'shader') return;
    const canvas = waveCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number;
    let phase = 0;

    const draw = () => {
      phase += 0.045;
      const w = canvas.width;
      const h = canvas.height;
      ctx.fillStyle = '#050811';
      ctx.fillRect(0, 0, w, h);

      for (let layer = 1; layer <= waveComplexity; layer++) {
        ctx.beginPath();
        for (let x = 0; x < w; x += 3) {
          const y =
            h / 2 +
            Math.sin((x * 0.01 * waveFreq * layer) / 2 + phase * layer * 0.6) *
              (waveAmp / Math.sqrt(layer)) +
            Math.cos(x * 0.006 - phase) * 18;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle =
          layer % 2 === 0 ? 'rgba(6, 182, 212, 0.75)' : 'rgba(16, 185, 129, 0.85)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, [activeTool, waveFreq, waveAmp, waveComplexity]);

  return (
    <section id="section-digital-lab" className={compact ? 'py-2' : 'py-16'}>
      {!compact && (
        <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 font-mono text-xs text-purple-300">
              <FlaskConical className="h-3.5 w-3.5" />
              <span>MODULE 06 // DIGITAL LAB & INTERACTIVE MICRO-APPS</span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Live Systems & Algorithm Playground
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-400">
              4 *micro-tools* interaktif yang berjalan langsung di browser Anda sebagai demonstrasi rekayasa sistem, kalkulasi ekonomi token AI, algoritma graf, dan simulasi konsensus terdistribusi.
            </p>
          </div>

          {/* Micro-App Switcher Tabs */}
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => {
                soundEngine.playClick();
                setActiveTool('roi');
              }}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 font-mono text-xs transition ${
                activeTool === 'roi'
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : 'border border-white/10 bg-slate-900 text-slate-300 hover:text-white'
              }`}
            >
              <Calculator className="h-3.5 w-3.5" />
              <span>1. AI & RAG ROI Calculator</span>
            </button>
            <button
              onClick={() => {
                soundEngine.playClick();
                setActiveTool('astar');
              }}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 font-mono text-xs transition ${
                activeTool === 'astar'
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : 'border border-white/10 bg-slate-900 text-slate-300 hover:text-white'
              }`}
            >
              <Route className="h-3.5 w-3.5" />
              <span>2. A* Graph Visualizer</span>
            </button>
            <button
              onClick={() => {
                soundEngine.playClick();
                setActiveTool('raft');
              }}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 font-mono text-xs transition ${
                activeTool === 'raft'
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : 'border border-white/10 bg-slate-900 text-slate-300 hover:text-white'
              }`}
            >
              <ServerCrash className="h-3.5 w-3.5" />
              <span>3. Raft Chaos Simulator</span>
            </button>
            <button
              onClick={() => {
                soundEngine.playClick();
                setActiveTool('shader');
              }}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 font-mono text-xs transition ${
                activeTool === 'shader'
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : 'border border-white/10 bg-slate-900 text-slate-300 hover:text-white'
              }`}
            >
              <Waves className="h-3.5 w-3.5" />
              <span>4. Harmonic Wave Sandbox</span>
            </button>
          </div>
        </div>
      )}

      {/* TOOL 1: AI TOKEN ECONOMICS & ROI CALCULATOR */}
      {activeTool === 'roi' && (
        <div className="rounded-2xl border border-white/15 bg-[#090D16]/95 p-6 surface-card">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="space-y-5 lg:col-span-7">
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  Enterprise LLM & Semantic Router ROI Simulator
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  Simulasikan penghematan biaya cloud AI perusahaan Anda menggunakan arsitektur Semantic Vector Cache + Tiered vLLM Routing seperti pada proyek AetherNexus.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-slate-300">Daily Enterprise Agent Queries</span>
                    <span className="font-bold text-emerald-400">
                      {dailyQueries.toLocaleString()} req/day
                    </span>
                  </div>
                  <input
                    type="range"
                    min={5000}
                    max={200000}
                    step={5000}
                    value={dailyQueries}
                    onChange={(e) => setDailyQueries(Number(e.target.value))}
                    className="mt-1.5 w-full accent-emerald-400 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-slate-300">Average Context + Output Tokens / Req</span>
                    <span className="font-bold text-cyan-300">
                      {avgTokensPerReq.toLocaleString()} tokens
                    </span>
                  </div>
                  <input
                    type="range"
                    min={500}
                    max={8000}
                    step={250}
                    value={avgTokensPerReq}
                    onChange={(e) => setAvgTokensPerReq(Number(e.target.value))}
                    className="mt-1.5 w-full accent-cyan-400 cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <div className="flex justify-between font-mono text-xs">
                      <span className="text-slate-300">Redis/Qdrant Semantic Cache Hit</span>
                      <span className="font-bold text-emerald-400">{semanticCacheHitPct}%</span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={65}
                      value={semanticCacheHitPct}
                      onChange={(e) => setSemanticCacheHitPct(Number(e.target.value))}
                      className="mt-1.5 w-full accent-emerald-400 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between font-mono text-xs">
                      <span className="text-slate-300">Self-Hosted vLLM Offload Ratio</span>
                      <span className="font-bold text-amber-300">{vllmOffloadPct}%</span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={50}
                      value={vllmOffloadPct}
                      onChange={(e) => setVllmOffloadPct(Number(e.target.value))}
                      className="mt-1.5 w-full accent-amber-400 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-emerald-500/30 bg-slate-950 p-5 lg:col-span-5">
              <div>
                <div className="font-mono text-xs uppercase text-emerald-400">
                  PROJECTED ENTERPRISE COST IMPACT
                </div>
                <div className="mt-2 font-display text-3xl font-extrabold text-white">
                  ${annualSavings.toLocaleString()}{' '}
                  <span className="font-mono text-xs font-normal text-emerald-400">/ year saved</span>
                </div>

                <div className="mt-5 space-y-2.5">
                  <div className="flex items-center justify-between rounded-xl border border-rose-500/25 bg-rose-500/10 px-3.5 py-2.5 font-mono text-xs">
                    <span className="text-rose-200">Naive Frontier API Spend:</span>
                    <span className="font-bold text-rose-400">
                      ${naiveFrontierCost.toLocaleString()} / mo
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-2.5 font-mono text-xs">
                    <span className="text-emerald-200">Hybrid Semantic Router Spend:</span>
                    <span className="font-bold text-emerald-400">
                      ${optimizedMonthlyCost.toLocaleString()} / mo
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 border-t border-white/10 pt-3 flex items-center justify-between font-mono text-xs text-slate-400">
                <span>Monthly Volume: {monthlyTokensMillions.toFixed(0)}M tokens</span>
                <span className="text-cyan-300">P99 TTFT: ~290ms</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TOOL 2: A* PATHFINDING & HEURISTIC VISUALIZER */}
      {activeTool === 'astar' && (
        <div className="rounded-2xl border border-white/15 bg-[#090D16]/95 p-6 surface-card">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="font-display text-xl font-bold text-white">
                Interactive A* (A-Star) Heuristic Pathfinding Visualizer
              </h3>
              <p className="text-xs text-slate-400">
                Klik kotak mana saja untuk menambah/menghapus dinding rintangan. Algoritma A* menghitung rute terpendek secara *real-time* dari <span className="text-emerald-400 font-semibold">START (Hijau)</span> ke <span className="text-amber-400 font-semibold">TARGET (Emas)</span>.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={randomizeMaze}
                className="flex items-center gap-1.5 rounded-xl border border-emerald-500/40 bg-emerald-500/15 px-3 py-1.5 font-mono text-xs font-semibold text-emerald-300 hover:bg-emerald-500/25"
              >
                <Play className="h-3.5 w-3.5" /> Generate Random Maze
              </button>
              <button
                onClick={() => {
                  soundEngine.playClick();
                  const empty = new Set<string>();
                  setWalls(empty);
                  runAStar(empty);
                }}
                className="flex items-center gap-1 rounded-xl border border-white/10 bg-slate-900 px-3 py-1.5 font-mono text-xs text-slate-300 hover:text-white"
              >
                <RotateCcw className="h-3.5 w-3.5" /> Clear Walls
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <div
              className="grid gap-1.5 min-w-[540px]"
              style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
            >
              {Array.from({ length: ROWS }).map((_, r) =>
                Array.from({ length: COLS }).map((__, c) => {
                  const k = `${r}-${c}`;
                  const isStart = r === 1 && c === 1;
                  const isGoal = r === ROWS - 2 && c === COLS - 2;
                  const isWall = walls.has(k);
                  const isPath = shortestPath.has(k);
                  const isVisited = visitedCells.has(k);

                  return (
                    <button
                      key={k}
                      onClick={() => toggleWall(r, c)}
                      className={`h-8 rounded-md border font-mono text-[10px] transition-all ${
                        isStart
                          ? 'border-emerald-300 bg-emerald-500 font-bold text-slate-950 shadow-[0_0_12px_#10b981]'
                          : isGoal
                          ? 'border-amber-300 bg-amber-400 font-bold text-slate-950 shadow-[0_0_12px_#f59e0b]'
                          : isWall
                          ? 'border-slate-700 bg-slate-800/90'
                          : isPath
                          ? 'border-cyan-400 bg-cyan-500/40 text-cyan-200 shadow-[0_0_10px_rgba(6,182,212,0.4)]'
                          : isVisited
                          ? 'border-emerald-500/20 bg-emerald-500/10'
                          : 'border-white/5 bg-slate-950 hover:border-white/25'
                      }`}
                    >
                      {isStart ? 'S' : isGoal ? 'T' : isPath ? '•' : ''}
                    </button>
                  );
                })
              )}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between border-t border-white/10 pt-3 font-mono text-xs text-slate-400">
            <div className="flex gap-4">
              <span>Nodes Explored: <strong className="text-white">{astarMetrics.explored}</strong></span>
              <span>Shortest Path Steps: <strong className="text-cyan-300">{astarMetrics.pathLen || 'BLOCKED'}</strong></span>
            </div>
            <span className="text-emerald-400">Compute Time: {astarMetrics.execMs} ms</span>
          </div>
        </div>
      )}

      {/* TOOL 3: DISTRIBUTED RAFT CONSENSUS & CHAOS SIMULATOR */}
      {activeTool === 'raft' && (
        <div className="rounded-2xl border border-white/15 bg-[#090D16]/95 p-6 surface-card">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="font-display text-xl font-bold text-white">
                Distributed Raft Consensus & Chaos Fault-Injection Simulator
              </h3>
              <p className="text-xs text-slate-400">
                Uji ketahanan klaster 5-node multi-region: matikan node Leader secara paksa untuk melihat pemilihan Leader baru (Leader Election) otomatis tanpa kehilangan kuorum.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={killCurrentLeader}
                className="flex items-center gap-1.5 rounded-xl bg-rose-500 px-3.5 py-2 font-mono text-xs font-bold text-white transition hover:bg-rose-400"
              >
                <ShieldAlert className="h-4 w-4" /> Kill Active Leader (Inject Fault)
              </button>
              <button
                onClick={healCluster}
                className="flex items-center gap-1.5 rounded-xl border border-emerald-500/40 bg-emerald-500/15 px-3.5 py-2 font-mono text-xs font-semibold text-emerald-300 hover:bg-emerald-500/25"
              >
                <Zap className="h-4 w-4" /> Heal All Nodes
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-5">
            {clusterNodes.map((n) => (
              <div
                key={n.id}
                className={`rounded-xl border p-4 transition-all ${
                  !n.alive
                    ? 'border-rose-500/40 bg-rose-950/20 opacity-60'
                    : n.role === 'LEADER'
                    ? 'border-emerald-400 bg-emerald-500/15 shadow-[0_0_25px_rgba(16,185,129,0.2)]'
                    : 'border-white/10 bg-slate-900/80'
                }`}
              >
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-slate-400">{n.region}</span>
                  <span
                    className={`rounded px-1.5 py-0.5 font-bold ${
                      !n.alive
                        ? 'bg-rose-500/20 text-rose-300'
                        : n.role === 'LEADER'
                        ? 'bg-emerald-500 text-slate-950'
                        : 'bg-cyan-500/20 text-cyan-300'
                    }`}
                  >
                    {n.role}
                  </span>
                </div>
                <div className="mt-2 font-display text-base font-bold text-white">{n.id}</div>
                <div className="mt-1 font-mono text-xs text-slate-400">
                  {n.alive ? `RTT: ${n.latencyMs} ms` : 'HEARTBEAT TIMEOUT'}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-white/10 bg-slate-950 p-4 font-mono text-xs">
            <div className="mb-2 flex items-center justify-between text-[11px] text-slate-400">
              <span>RAFT STATE MACHINE AUDIT STREAM</span>
              <span className="text-emerald-400">CURRENT TERM: #{raftTerm}</span>
            </div>
            <div className="space-y-1.5">
              {raftLog.map((entry, idx) => (
                <div
                  key={idx}
                  className={idx === 0 ? 'text-emerald-300 font-semibold' : 'text-slate-400'}
                >
                  {entry}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TOOL 4: HARMONIC WAVE INTERFERENCE SANDBOX */}
      {activeTool === 'shader' && (
        <div className="rounded-2xl border border-white/15 bg-[#090D16]/95 p-6 surface-card">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <canvas
                ref={waveCanvasRef}
                width={680}
                height={260}
                className="h-[250px] w-full rounded-xl border border-white/10 bg-[#050811]"
              />
            </div>
            <div className="flex flex-col justify-between space-y-4 lg:col-span-4">
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  Harmonic Fourier Wave Synthesizer
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  Eksperimen interferensi gelombang Fourier secara *real-time* pada HTML5 Canvas 60 FPS.
                </p>

                <div className="mt-4 space-y-3 font-mono text-xs">
                  <div>
                    <div className="flex justify-between">
                      <span>Frequency Multiplier</span>
                      <span className="text-emerald-400">{waveFreq.toFixed(1)} Hz</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={8}
                      step={0.2}
                      value={waveFreq}
                      onChange={(e) => setWaveFreq(Number(e.target.value))}
                      className="mt-1 w-full accent-emerald-400"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span>Wave Amplitude</span>
                      <span className="text-cyan-300">{waveAmp} px</span>
                    </div>
                    <input
                      type="range"
                      min={15}
                      max={95}
                      value={waveAmp}
                      onChange={(e) => setWaveAmp(Number(e.target.value))}
                      className="mt-1 w-full accent-cyan-400"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span>Harmonic Overtones</span>
                      <span className="text-amber-300">{waveComplexity} layers</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={8}
                      value={waveComplexity}
                      onChange={(e) => setWaveComplexity(Number(e.target.value))}
                      className="mt-1 w-full accent-amber-400"
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-slate-900 p-2.5 font-mono text-[11px] text-emerald-400">
                Render Frame Budget: ~1.4ms (60 FPS Locked)
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
