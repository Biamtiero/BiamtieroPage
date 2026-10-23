import React, { useState, useEffect } from 'react';
import {
  Layers,
  Cpu,
  ArrowRight,
  Sliders,
  Code2,
  Scale,
  Play,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  GitBranch,
  X,
  Activity,
  Gauge,
} from 'lucide-react';
import { PORTFOLIO_DATA, ProjectCaseStudy, ArchNode } from '../data/portfolioData';
import { useSystem } from '../context/SystemContext';
import { soundEngine } from '../utils/soundEngine';

export const CaseStudiesSection: React.FC = () => {
  const { activeProjectId, setActiveProjectId } = useSystem();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeTabProject, setActiveTabProject] = useState<ProjectCaseStudy>(
    PORTFOLIO_DATA.projects[0]
  );

  const categories = [
    'ALL',
    'AI Systems',
    'Distributed FinTech',
    'Enterprise HCM & ERP',
    'Developer Infrastructure',
  ];

  const filteredProjects =
    selectedCategory === 'ALL'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === selectedCategory);

  const modalProject = PORTFOLIO_DATA.projects.find((p) => p.id === activeProjectId) || null;

  return (
    <section id="section-case-studies" className="py-16">
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-xs text-cyan-300">
            <Layers className="h-3.5 w-3.5" />
            <span>MODULE 03 // INTERACTIVE ENGINEERING WHITEPAPERS</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Deep-Dive Case Studies & System Architecture
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            Setiap proyek disajikan sebagai dokumentasi arsitektur interaktif: klik komponen sistem untuk melihat rasional teknis, geser slider Before/After, uji coba beban di Telemetry Sandbox, dan pelajari matriks keputusan trade-off.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundEngine.playClick();
                setSelectedCategory(cat);
              }}
              className={`rounded-lg border px-3 py-1.5 font-mono text-xs transition ${
                selectedCategory === cat
                  ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200 font-semibold'
                  : 'border-white/10 bg-slate-900/70 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Selector Cards */}
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {filteredProjects.map((proj) => {
          const isCurrent = activeTabProject.id === proj.id;
          return (
            <div
              key={proj.id}
              onClick={() => {
                soundEngine.playClick();
                setActiveTabProject(proj);
              }}
              data-cursor="pointer"
              className={`group relative flex flex-col justify-between rounded-2xl border p-5 transition-all cursor-pointer surface-card ${
                isCurrent
                  ? 'border-emerald-500/70 bg-gradient-to-b from-emerald-500/10 to-[#0B101C] shadow-[0_0_35px_rgba(16,185,129,0.18)]'
                  : 'border-white/10 bg-[#090D16]/90 hover:border-white/25'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 font-mono text-[10px]">
                  <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-emerald-300">
                    {proj.category}
                  </span>
                  <span className="text-slate-400">{proj.year}</span>
                </div>
                <h3 className="mt-3 font-display text-base font-bold text-white group-hover:text-emerald-300 transition">
                  {proj.title.split('//')[0]}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs text-slate-400">{proj.subtitle}</p>
              </div>

              <div className="mt-4 border-t border-white/10 pt-3">
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="text-emerald-400 font-semibold">{proj.metrics.throughput}</span>
                  <span className="text-cyan-300">{proj.metrics.latency.split(' ')[0]}</span>
                </div>
                <div className="mt-2.5 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-slate-400">
                    {isCurrent ? '● Inspecting Below' : 'Click to Inspect'}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      soundEngine.playClick();
                      setActiveProjectId(proj.id);
                    }}
                    className="inline-flex items-center gap-1 rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-emerald-300 hover:bg-emerald-500/20"
                  >
                    Full Modal ↗
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Whitepaper Deep-Dive Workbench */}
      <WhitepaperWorkbench project={activeTabProject} />

      {/* Fullscreen Modal when triggered from anywhere */}
      {modalProject && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-3 sm:p-6 backdrop-blur-md no-print"
          onClick={() => setActiveProjectId(null)}
        >
          <div
            className="max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-2xl border border-emerald-500/40 bg-[#070A12] p-4 sm:p-6 shadow-2xl surface-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
                <Layers className="h-4 w-4" />
                <span>ENGINEERING WHITEPAPER MODAL // {modalProject.slug.toUpperCase()}</span>
              </div>
              <button
                onClick={() => setActiveProjectId(null)}
                className="flex items-center gap-1 rounded-lg border border-white/15 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300 hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" /> Close (ESC)
              </button>
            </div>
            <WhitepaperWorkbench project={modalProject} />
          </div>
        </div>
      )}
    </section>
  );
};

export const WhitepaperWorkbench: React.FC<{ project: ProjectCaseStudy }> = ({ project }) => {
  const [selectedArchNode, setSelectedArchNode] = useState<ArchNode>(
    project.architecture.nodes[1] || project.architecture.nodes[0]
  );
  const [sliderPosition, setSliderPosition] = useState<number>(68);
  const [subTab, setSubTab] = useState<'architecture' | 'before-after' | 'code-sandbox' | 'tradeoffs'>(
    'architecture'
  );

  // Stress benchmark state for Live Code & Telemetry Sandbox
  const [isBenchmarking, setIsBenchmarking] = useState(false);
  const [benchResult, setBenchResult] = useState<{
    rps: number;
    p50: string;
    p99: string;
    cpu: string;
    errorRate: string;
  } | null>(null);

  useEffect(() => {
    setSelectedArchNode(project.architecture.nodes[1] || project.architecture.nodes[0]);
    setBenchResult(null);
  }, [project]);

  const runStressBenchmark = () => {
    soundEngine.playClick();
    setIsBenchmarking(true);
    setTimeout(() => {
      soundEngine.playSuccess();
      setIsBenchmarking(false);
      const jitter = (Math.random() * 0.6 - 0.3).toFixed(2);
      setBenchResult({
        rps: project.codeSnippet.benchmarkRps + Math.floor(Math.random() * 420),
        p50: `${(project.codeSnippet.benchmarkBaseP99Ms * 0.38).toFixed(2)} ms`,
        p99: `${(project.codeSnippet.benchmarkBaseP99Ms + Number(jitter)).toFixed(2)} ms`,
        cpu: '24.6% (Zero GC Pause)',
        errorRate: '0.000%',
      });
    }, 650);
  };

  return (
    <div className="rounded-2xl border border-white/15 bg-[#090D16]/95 p-5 sm:p-7 shadow-2xl surface-card">
      {/* Top Executive Summary Bar */}
      <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-start">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="rounded-md bg-emerald-500/15 px-2.5 py-0.5 font-semibold text-emerald-300 border border-emerald-500/30">
              {project.status}
            </span>
            <span className="text-slate-400">{project.role}</span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-300">{project.clientOrOrg}</span>
          </div>
          <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">{project.summary}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded border border-white/10 bg-slate-900 px-2 py-0.5 font-mono text-[11px] text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Key Telemetry Pill Box */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:w-[410px] shrink-0">
          <div className="rounded-xl border border-white/10 bg-slate-900/90 p-3">
            <div className="font-mono text-[10px] text-slate-400">LATENCY</div>
            <div className="mt-1 font-mono text-xs font-bold text-emerald-400">
              {project.metrics.latency}
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-900/90 p-3">
            <div className="font-mono text-[10px] text-slate-400">THROUGHPUT</div>
            <div className="mt-1 font-mono text-xs font-bold text-cyan-300">
              {project.metrics.throughput}
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3">
            <div className="font-mono text-[10px] text-emerald-300">BUSINESS ROI</div>
            <div className="mt-1 font-mono text-xs font-bold text-white">
              {project.metrics.roi}
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Navigation for the 4 Required Whitepaper Views */}
      <div className="my-5 flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              soundEngine.playClick();
              setSubTab('architecture');
            }}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 font-mono text-xs font-medium transition ${
              subTab === 'architecture'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'border border-white/10 bg-slate-900 text-slate-300 hover:text-white'
            }`}
          >
            <Cpu className="h-3.5 w-3.5" />
            <span>1. Interactive Architecture Diagram</span>
          </button>

          <button
            onClick={() => {
              soundEngine.playClick();
              setSubTab('before-after');
            }}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 font-mono text-xs font-medium transition ${
              subTab === 'before-after'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'border border-white/10 bg-slate-900 text-slate-300 hover:text-white'
            }`}
          >
            <Sliders className="h-3.5 w-3.5" />
            <span>2. Before vs. After Slider</span>
          </button>

          <button
            onClick={() => {
              soundEngine.playClick();
              setSubTab('code-sandbox');
            }}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 font-mono text-xs font-medium transition ${
              subTab === 'code-sandbox'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'border border-white/10 bg-slate-900 text-slate-300 hover:text-white'
            }`}
          >
            <Code2 className="h-3.5 w-3.5" />
            <span>3. Live Code & Telemetry Sandbox</span>
          </button>

          <button
            onClick={() => {
              soundEngine.playClick();
              setSubTab('tradeoffs');
            }}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 font-mono text-xs font-medium transition ${
              subTab === 'tradeoffs'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'border border-white/10 bg-slate-900 text-slate-300 hover:text-white'
            }`}
          >
            <Scale className="h-3.5 w-3.5" />
            <span>4. Role & Trade-Off Matrix</span>
          </button>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-slate-900 px-3 py-1.5 text-slate-300 hover:border-emerald-500/40 hover:text-white"
          >
            <GitBranch className="h-3.5 w-3.5 text-emerald-400" /> Source Blueprint
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-cyan-300 hover:bg-cyan-500/20"
          >
            Live Telemetry <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* TAB 1: INTERACTIVE ARCHITECTURE DIAGRAM */}
      {subTab === 'architecture' && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Interactive Pipeline Nodes */}
          <div className="space-y-3 lg:col-span-7">
            <div className="mb-2 flex items-center justify-between font-mono text-xs text-slate-400">
              <span>CLICK ANY SYSTEM NODE TO INSPECT RATIONALE & FAILURE MODES</span>
              <span className="text-emerald-400"> SLA: {project.metrics.uptime}</span>
            </div>

            <div className="space-y-3">
              {project.architecture.nodes.map((node, idx) => {
                const isSelected = selectedArchNode.id === node.id;
                const edgeAfter = project.architecture.edges[idx];
                return (
                  <React.Fragment key={node.id}>
                    <div
                      onClick={() => {
                        soundEngine.playClick();
                        setSelectedArchNode(node);
                      }}
                      className={`cursor-pointer rounded-xl border p-4 transition-all ${
                        isSelected
                          ? 'border-emerald-400 bg-emerald-500/10 shadow-[0_0_25px_rgba(16,185,129,0.2)]'
                          : 'border-white/10 bg-slate-900/70 hover:border-white/30'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/20 font-mono text-xs font-bold text-emerald-300">
                            0{idx + 1}
                          </span>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-display text-sm font-bold text-white">
                                {node.label}
                              </h4>
                              <span className="rounded bg-white/10 px-2 py-0.5 font-mono text-[10px] uppercase text-cyan-300">
                                {node.layer} layer
                              </span>
                            </div>
                            <p className="font-mono text-xs text-emerald-400 mt-0.5">{node.tech}</p>
                          </div>
                        </div>

                        <div className="text-right font-mono text-[11px]">
                          <div className="text-white">{node.latency}</div>
                          <div className="text-slate-400">{node.throughput}</div>
                        </div>
                      </div>
                    </div>

                    {edgeAfter && (
                      <div className="flex items-center justify-center gap-2 py-0.5 font-mono text-[11px] text-slate-400">
                        <ArrowRight className="h-3.5 w-3.5 rotate-90 text-emerald-400" />
                        <span className="rounded-full border border-white/10 bg-slate-950 px-3 py-0.5 text-slate-300">
                          {edgeAfter.protocol}
                        </span>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Deep Technical Rationale Inspector */}
          <div className="flex flex-col justify-between rounded-2xl border border-emerald-500/30 bg-slate-950/90 p-5 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs uppercase text-emerald-400">
                  COMPONENT ARCHITECTURE INSPECTOR
                </span>
                <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] text-emerald-300">
                  {selectedArchNode.layer.toUpperCase()}
                </span>
              </div>

              <h4 className="mt-4 font-display text-xl font-bold text-white">
                {selectedArchNode.label}
              </h4>
              <p className="mt-1 font-mono text-xs text-cyan-300">{selectedArchNode.tech}</p>

              <div className="mt-4 grid grid-cols-2 gap-2.5">
                <div className="rounded-lg border border-white/10 bg-slate-900 p-2.5">
                  <span className="font-mono text-[10px] text-slate-400">NODE LATENCY</span>
                  <div className="font-mono text-sm font-bold text-emerald-400">
                    {selectedArchNode.latency}
                  </div>
                </div>
                <div className="rounded-lg border border-white/10 bg-slate-900 p-2.5">
                  <span className="font-mono text-[10px] text-slate-400">CAPACITY</span>
                  <div className="font-mono text-sm font-bold text-cyan-300">
                    {selectedArchNode.throughput}
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-white">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Mengapa Teknologi Ini Dipilih (Architectural Rationale):</span>
                </div>
                <p className="mt-2 rounded-xl border border-white/10 bg-slate-900/80 p-3.5 text-sm leading-relaxed text-slate-200">
                  {selectedArchNode.rationale}
                </p>
              </div>

              <div className="mt-4">
                <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-amber-300">
                  <AlertTriangle className="h-4 w-4 text-amber-400" />
                  <span>Resilience & Failure Mode Mitigation:</span>
                </div>
                <p className="mt-2 rounded-xl border border-amber-500/25 bg-amber-500/5 p-3.5 text-xs leading-relaxed text-amber-100">
                  {selectedArchNode.failureMode}
                </p>
              </div>
            </div>

            <div className="mt-5 border-t border-white/10 pt-3 flex items-center justify-between font-mono text-[11px] text-slate-400">
              <span>Lighthouse Performance: {project.metrics.lighthouse}/100</span>
              <span className="text-emerald-400">OpenTelemetry Verified</span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: BEFORE VS AFTER INTERACTIVE SLIDER */}
      {subTab === 'before-after' && (
        <div className="space-y-6">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <div>
              <h4 className="font-display text-lg font-bold text-white">
                {project.beforeAfter.metricLabel}
              </h4>
              <p className="text-xs text-slate-400">
                Geser slider interaktif di bawah untuk membandingkan arsitektur lama (Before) dengan dampak solusi baru (After).
              </p>
            </div>
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="text-rose-400">← Legacy ({100 - sliderPosition}%)</span>
              <input
                type="range"
                min={5}
                max={95}
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="h-2 w-40 cursor-pointer accent-emerald-400"
                aria-label="Before vs After Comparison Slider"
              />
              <span className="text-emerald-400">Solution ({sliderPosition}%) →</span>
            </div>
          </div>

          {/* Interactive Split Comparison Viewport */}
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-slate-950 p-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* BEFORE SIDE */}
              <div
                className="rounded-xl border border-rose-500/30 bg-rose-950/15 p-5 transition-opacity"
                style={{ opacity: sliderPosition > 85 ? 0.45 : 1 }}
              >
                <div className="flex items-center justify-between">
                  <span className="rounded bg-rose-500/20 px-2.5 py-0.5 font-mono text-xs font-bold text-rose-300">
                    BEFORE // {project.beforeAfter.beforeTitle}
                  </span>
                  <span className="font-mono text-xs text-rose-400">Bottleneck State</span>
                </div>
                <p className="mt-3 rounded-lg bg-black/40 p-2.5 font-mono text-xs text-rose-200">
                  {project.beforeAfter.visualSummaryBefore}
                </p>
                <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {project.beforeAfter.beforeStats.map((st, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-rose-500/20 bg-slate-900/90 p-3"
                    >
                      <div className="font-mono text-[10px] text-slate-400">{st.label}</div>
                      <div className="mt-0.5 font-mono text-base font-bold text-rose-400">
                        {st.value}
                      </div>
                      <div className="mt-1 text-[11px] text-slate-400">{st.pain}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AFTER SIDE */}
              <div
                className="rounded-xl border border-emerald-500/40 bg-emerald-950/15 p-5 shadow-[0_0_35px_rgba(16,185,129,0.12)] transition-opacity"
                style={{ opacity: sliderPosition < 15 ? 0.45 : 1 }}
              >
                <div className="flex items-center justify-between">
                  <span className="rounded bg-emerald-500/20 px-2.5 py-0.5 font-mono text-xs font-bold text-emerald-300">
                    AFTER // {project.beforeAfter.afterTitle}
                  </span>
                  <span className="font-mono text-xs text-emerald-400">Production Verified</span>
                </div>
                <p className="mt-3 rounded-lg bg-black/40 p-2.5 font-mono text-xs text-emerald-200">
                  {project.beforeAfter.visualSummaryAfter}
                </p>
                <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {project.beforeAfter.afterStats.map((st, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-emerald-500/30 bg-slate-900/90 p-3"
                    >
                      <div className="font-mono text-[10px] text-slate-400">{st.label}</div>
                      <div className="mt-0.5 font-mono text-base font-bold text-emerald-400">
                        {st.value}
                      </div>
                      <div className="mt-1 text-[11px] text-emerald-200/80">{st.gain}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Progress Bar Representing Transformation Weight */}
            <div className="mt-5">
              <div className="flex justify-between font-mono text-[11px] text-slate-400 mb-1">
                <span>Legacy Friction</span>
                <span>Biamtiero Architecture Efficiency ({sliderPosition}% Blend)</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-rose-950">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-150"
                  style={{ width: `${sliderPosition}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: LIVE CODE & TELEMETRY SANDBOX */}
      {subTab === 'code-sandbox' && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8 overflow-hidden rounded-2xl border border-white/15 bg-[#05080F]">
            <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/90 px-4 py-2.5">
              <div className="flex items-center gap-2 font-mono text-xs text-emerald-300">
                <Code2 className="h-4 w-4" />
                <span>{project.codeSnippet.filename}</span>
                <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] uppercase text-slate-300">
                  {project.codeSnippet.language}
                </span>
              </div>
              <button
                onClick={runStressBenchmark}
                disabled={isBenchmarking}
                className="flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-1 font-mono text-xs font-bold text-slate-950 transition hover:bg-emerald-400 disabled:opacity-50"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>
                  {isBenchmarking ? 'Running 10k RPS Load...' : 'Run Live Telemetry Benchmark'}
                </span>
              </button>
            </div>
            <div className="border-b border-white/10 bg-slate-950/60 px-4 py-2 text-xs text-slate-400">
              {project.codeSnippet.description}
            </div>
            <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-emerald-100">
              <code>{project.codeSnippet.code}</code>
            </pre>
          </div>

          {/* Live Telemetry Benchmark Output */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/15 bg-slate-950 p-5 lg:col-span-4">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="flex items-center gap-1.5 font-mono text-xs font-bold text-cyan-300">
                  <Activity className="h-4 w-4 text-emerald-400" />
                  LIVE TELEMETRY SANDBOX
                </span>
                <span className="font-mono text-[10px] text-emerald-400">60 FPS LOCK</span>
              </div>

              <p className="mt-3 text-xs text-slate-400">
                Klik tombol <strong className="text-white">Run Live Telemetry Benchmark</strong> untuk menyimulasikan profil beban produksi pada modul ini.
              </p>

              <div className="mt-4 space-y-2.5">
                <div className="rounded-xl border border-white/10 bg-slate-900 p-3">
                  <div className="font-mono text-[10px] text-slate-400">PEAK THROUGHPUT (RPS)</div>
                  <div className="mt-0.5 font-mono text-lg font-bold text-emerald-400">
                    {benchResult
                      ? `${benchResult.rps.toLocaleString()} req/sec`
                      : `${project.codeSnippet.benchmarkRps.toLocaleString()} req/sec (Baseline)`}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div className="rounded-xl border border-white/10 bg-slate-900 p-3">
                    <div className="font-mono text-[10px] text-slate-400">P50 LATENCY</div>
                    <div className="mt-0.5 font-mono text-sm font-bold text-white">
                      {benchResult
                        ? benchResult.p50
                        : `${(project.codeSnippet.benchmarkBaseP99Ms * 0.38).toFixed(1)} ms`}
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-slate-900 p-3">
                    <div className="font-mono text-[10px] text-slate-400">P99 TAIL LATENCY</div>
                    <div className="mt-0.5 font-mono text-sm font-bold text-cyan-300">
                      {benchResult
                        ? benchResult.p99
                        : `${project.codeSnippet.benchmarkBaseP99Ms} ms`}
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-slate-900 p-3">
                  <div className="font-mono text-[10px] text-slate-400">CPU & MEMORY PROFILE</div>
                  <div className="mt-0.5 font-mono text-xs font-semibold text-amber-300">
                    {benchResult ? benchResult.cpu : 'Deterministic Arena Allocation · 0% Leak'}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Gauge className="h-5 w-5 text-emerald-400" />
                <div>
                  <div className="font-mono text-xs font-bold text-white">
                    Lighthouse Score: {project.metrics.lighthouse}/100
                  </div>
                  <div className="font-mono text-[10px] text-emerald-300">
                    WCAG AAA · Zero Blocking Time
                  </div>
                </div>
              </div>
              <span className="rounded bg-emerald-500 px-2 py-0.5 font-mono text-[10px] font-bold text-slate-950">
                PASS
              </span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: ROLE & DECISION MATRIX (ARCHITECTURAL TRADE-OFFS) */}
      {subTab === 'tradeoffs' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-display text-lg font-bold text-white">
                Architectural Decision Records (ADR) & Engineering Trade-Offs
              </h4>
              <p className="text-xs text-slate-400">
                Setiap arsitektur nyata menuntut kompromi. Berikut adalah keputusan sulit yang saya ambil beserta alasan dan dampaknya.
              </p>
            </div>
            <span className="font-mono text-xs text-emerald-400">Role: {project.role}</span>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {project.tradeOffs.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-slate-900/80 p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-amber-400">
                    <span>ADR-0{i + 1} // KEY ARCHITECTURAL DECISION</span>
                    <span>VERIFIED</span>
                  </div>
                  <h5 className="mt-2 font-display text-base font-bold text-white">
                    {t.decision}
                  </h5>

                  <div className="mt-4 grid grid-cols-2 gap-2.5">
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-2.5">
                      <span className="font-mono text-[10px] text-emerald-300">✓ CHOSEN PATH</span>
                      <div className="mt-0.5 font-mono text-xs font-bold text-white">
                        {t.chosen}
                      </div>
                    </div>
                    <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-2.5">
                      <span className="font-mono text-[10px] text-rose-300">✕ REJECTED PATH</span>
                      <div className="mt-0.5 font-mono text-xs font-bold text-slate-300">
                        {t.rejected}
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-slate-300">
                    <strong className="text-white">Mengapa (Why): </strong>
                    {t.why}
                  </p>
                </div>

                <div className="mt-4 rounded-lg border border-cyan-500/25 bg-cyan-500/10 p-3 font-mono text-xs text-cyan-200">
                  <strong>Trade-Off & Production Impact:</strong> {t.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
