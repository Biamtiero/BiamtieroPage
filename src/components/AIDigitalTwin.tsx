import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  X,
  Send,
  Cpu,
  CheckCircle2,
  Terminal,
  Briefcase,
  DollarSign,
  Layers,
  MessageSquareCode,
  ExternalLink,
} from 'lucide-react';
import { useSystem } from '../context/SystemContext';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { soundEngine } from '../utils/soundEngine';

interface ChatMessage {
  id: string;
  sender: 'user' | 'twin';
  text: string;
  citations?: string[];
  actionProjectSlug?: string;
  timestamp: string;
}

const SUGGESTED_PROMPTS = [
  {
    label: 'Mengapa saya harus merekrut Biamtiero?',
    icon: <Briefcase className="h-3.5 w-3.5 text-emerald-400" />,
    query: 'Mengapa saya harus merekrut Biamtiero untuk posisi Principal / Staff / Lead?',
  },
  {
    label: 'Jelaskan proyek paling kompleks yang pernah dibangun',
    icon: <Layers className="h-3.5 w-3.5 text-cyan-400" />,
    query: 'Jelaskan proyek paling kompleks yang pernah Biamtiero bangun beserta arsitekturnya.',
  },
  {
    label: 'Simulasikan wawancara teknis System Design',
    icon: <MessageSquareCode className="h-3.5 w-3.5 text-amber-400" />,
    query: 'Simulasikan wawancara teknis: Bagaimana Biamtiero merancang sistem 100.000 TPS tanpa deadlock?',
  },
  {
    label: 'Ekspektasi Gaji / Rate & Ketersediaan',
    icon: <DollarSign className="h-3.5 w-3.5 text-emerald-400" />,
    query: 'Berapa ekspektasi gaji / rate konsultasi Biamtiero dan kapan ketersediaannya?',
  },
];

function generateTwinResponse(input: string): {
  reply: string;
  citations: string[];
  actionProjectId?: string;
} {
  const q = input.toLowerCase();

  if (q.includes('rekrut') || q.includes('hire') || q.includes('mengapa') || q.includes('why')) {
    return {
      reply: `Ada 3 alasan utama mengapa perusahaan teknologi & enterprise memilih **Biamtiero**:\n\n1. **End-to-End Principal Execution (Dari Kernel ke Pixel):** Biamtiero tidak hanya menggambar diagram arsitektur, tetapi menulis Rust/Go berkinerja tinggi di backend (142K TPS, <18ms P99) sekaligus merancang antarmuka React/TypeScript/WebGL kelas Awwwards (100/100 Lighthouse).\n2. **Proven Commercial & Cost ROI:** Pada proyek **AetherNexus**, ia memangkas biaya inferensi LLM sebesar **64% ($420K/tahun)** melalui semantic caching & hybrid GraphRAG. Pada **OmniWork HCM**, ia mempercepat komputasi payroll 120.000 karyawan dari **6 hari menjadi 14 menit**.\n3. **Force Multiplier untuk Tim Engineering:** Berpengalaman membimbing 45+ engineer lintas 4 squad, menurunkan insiden produksi P1 sebesar 82% melalui standar RFC, observability eBPF, dan automated testing.`,
      citations: ['AetherNexus ($420K/yr Saved)', 'HyperionCore (142K TPS)', 'OmniWork HCM (120K Staff)'],
      actionProjectId: 'proj-aether-ai',
    };
  }

  if (q.includes('kompleks') || q.includes('complex') || q.includes('proyek') || q.includes('project') || q.includes('aether')) {
    return {
      reply: `Dua sistem paling kompleks yang pernah dirancang dan dibangun langsung oleh Biamtiero adalah:\n\n• **AetherNexus (Multi-Agent Enterprise Orchestrator):** Mengatasi masalah halusinasi (turun dari 14.2% ke 0.38%) dan latensi LLM (TTFT 310ms) menggunakan **Edge SSE Multiplexer di Rust**, **ONNX Complexity Router**, dan **Hybrid Vector + Graph Store (Qdrant + PostgreSQL Apache AGE)**.\n\n• **HyperionCore (142,000 TPS Financial Settlement Engine):** Menggantikan database SQL row-locking tradisional dengan **Single-Writer Partitioned Ring Buffer (pola LMAX)** di Rust + Kafka transactional outbox, menghasilkan jaminan **zero balance drift** pada volume transaksi $4.2 Miliar+/tahun.`,
      citations: ['Architecture: Rust Axum + Qdrant + LMAX Sequencer', 'SLA: 99.999% Uptime'],
      actionProjectId: 'proj-hyperion-ledger',
    };
  }

  if (q.includes('wawancara') || q.includes('interview') || q.includes('simulasi') || q.includes('100.000') || q.includes('deadlock') || q.includes('system design')) {
    return {
      reply: `**[SIMULASI WAWANCARA SYSTEM DESIGN — BIAMTIERO]**\n\n**Pertanyaan:** *"Bagaimana Anda merancang ledger/sistem transaksi 100K+ TPS tanpa mengalami database lock contention pada akun populer (hot account)?"*\n\n**Jawaban Arsitektural Biamtiero:**\n1. **Hindari Distributed 2-Phase Commit & 'SELECT FOR UPDATE' di Jalur Kritis:** Row-level lock pada akun merchant besar akan membuat antrean mengular (Little's Law: L = λW).\n2. **Deterministic Partitioned Sequencer (LMAX Pattern):** Hash 'account_id' ke partisi in-memory state machine di Rust. Setiap partisi memproses mutasi secara **single-threaded sequential** di RAM (< 0.8ms) tanpa mutex lock.\n3. **Strict Double-Entry Invariant (i128 minor units):** Validasi sum(debit) + sum(credit) == 0 sebelum menulis ke **Append-Only Write-Ahead Log (Kafka/Redpanda)**.\n4. **CQRS Read Projections:** Pisahkan jalur baca ke PostgreSQL/ClickHouse secara asinkron (< 10ms lag).`,
      citations: ['Little’s Law (L = λW)', 'LMAX Disruptor Pattern', 'HyperionCore Sequencer'],
      actionProjectId: 'proj-hyperion-ledger',
    };
  }

  if (q.includes('gaji') || q.includes('rate') || q.includes('salary') || q.includes('kompensasi') || q.includes('ketersediaan') || q.includes('available') || q.includes('kontak')) {
    return {
      reply: `**Transparansi Kompensasi & Ketersediaan Biamtiero:**\n\n• **Status Saat Ini:** ${PORTFOLIO_DATA.identity.status}\n• **Ekspektasi Kompensasi:** ${PORTFOLIO_DATA.identity.compensationExpectation}\n• **Notice Period:** ${PORTFOLIO_DATA.identity.noticePeriod}\n• **Model Kolaborasi:** Full-Time Principal/Staff Engineer, Fractional CTO / AI Advisor, atau Fixed-Scope Enterprise Turnkey Architecture.\n• **Kontak Langsung:** \`${PORTFOLIO_DATA.identity.email}\` (atau gunakan **Smart Contact Funnel** di bagian bawah halaman untuk estimasi budget & timeline interaktif).`,
      citations: ['Verified Identity Dossier', 'UTC+7 (WIB) Flexible Overlap'],
    };
  }

  return {
    reply: `Berdasarkan **Knowledge Graph Biamtiero (v2.4)**:\n\nBiamtiero memiliki **8+ tahun pengalaman produksi** dengan spesialisasi pada **TypeScript/React/Next.js, Rust, Go, Python, LLM Orchestration (GraphRAG), dan Distributed Data Mesh (PostgreSQL, Kafka, Qdrant, Kubernetes)**.\n\nApakah Anda ingin saya menampilkan **studi kasus arsitektur mendalam**, menghitung **kecocokan profil (Role-Fit Score)** dengan lowongan Anda, atau menjelaskan **trade-off teknis** pada proyek FinTech/AI/HCM?`,
    citations: ['Knowledge Graph: 17 Connected Nodes', 'Zero-Placeholder Policy Verified'],
    actionProjectId: 'proj-aether-ai',
  };
}

export const AIDigitalTwin: React.FC = () => {
  const { aiTwinOpen, setAiTwinOpen, setActiveProjectId } = useSystem();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'twin',
      text: `Halo! Saya **AI Digital Twin Biamtiero** (terhubung ke *Vector + Graph Knowledge Base* portofolio ini). Tanyakan apa saja tentang arsitektur sistem yang pernah saya bangun, keputusan *trade-off* teknis, simulasi wawancara *System Design*, hingga ekspektasi kompensasi & ketersediaan.`,
      citations: ['GraphRAG Grounded · 0.38% Hallucination Guard', '8+ Years Production Telemetry'],
      timestamp: 'ONLINE',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, aiTwinOpen]);

  const sendPrompt = (textToSend: string) => {
    if (!textToSend.trim()) return;
    soundEngine.playClick();

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const result = generateTwinResponse(textToSend);
      soundEngine.playSuccess();
      setMessages((prev) => [
        ...prev,
        {
          id: `t-${Date.now()}`,
          sender: 'twin',
          text: result.reply,
          citations: result.citations,
          actionProjectSlug: result.actionProjectId,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setIsTyping(false);
    }, 420);
  };

  return (
    <>
      {/* Floating Quick-Launch Pill (bottom-right) */}
      {!aiTwinOpen && (
        <button
          onClick={() => {
            soundEngine.playClick();
            setAiTwinOpen(true);
          }}
          onMouseEnter={() => soundEngine.playHover()}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-2xl border border-emerald-500/40 bg-[#0A0F1A]/95 px-4 py-3 text-left shadow-[0_15px_40px_rgba(16,185,129,0.28)] backdrop-blur-xl transition-all hover:scale-105 hover:border-emerald-400 no-print surface-card"
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/25 to-cyan-500/25 border border-emerald-400/40">
            <Sparkles className="h-4 w-4 text-emerald-400" />
            <span className="absolute -right-1 -top-1 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </span>
          </div>
          <div className="pr-1">
            <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-white">
              <span>Ask My AI Clone</span>
              <kbd className="rounded bg-white/10 px-1.5 py-0.2 text-[10px] text-emerald-300">⌘J</kbd>
            </div>
            <p className="font-mono text-[10px] text-slate-400">
              Interview Simulator & Career RAG
            </p>
          </div>
        </button>
      )}

      {/* AI Digital Twin Drawer / Modal */}
      {aiTwinOpen && (
        <div className="fixed inset-0 z-[95] flex items-end justify-end bg-black/60 p-0 sm:p-5 backdrop-blur-sm no-print">
          <div className="flex h-[88vh] w-full max-w-xl flex-col overflow-hidden rounded-t-2xl sm:rounded-2xl border border-emerald-500/35 bg-[#080C15] shadow-[0_25px_80px_rgba(0,0,0,0.9)] surface-card">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/90 px-4 py-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-500/40 bg-emerald-500/15 text-emerald-400">
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-sm font-bold text-white">
                      BIAMTIERO // AI DIGITAL TWIN
                    </h3>
                    <span className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 font-mono text-[10px] text-emerald-400 border border-emerald-500/30">
                      <CheckCircle2 className="h-2.5 w-2.5" /> RAG Grounded
                    </span>
                  </div>
                  <p className="font-mono text-[11px] text-slate-400">
                    Knowledge Base: Career · 4 Whitepapers · Trade-Offs · Rate & Availability
                  </p>
                </div>
              </div>
              <button
                onClick={() => setAiTwinOpen(false)}
                className="rounded-lg border border-white/10 p-1.5 text-slate-400 hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Suggested Recruiter Prompts */}
            <div className="border-b border-white/10 bg-slate-950/60 px-4 py-2.5">
              <div className="mb-1.5 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-slate-400">
                <span>Recruiter & CTO Quick Prompts</span>
                <span className="text-emerald-400">TTFT ~18ms</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {SUGGESTED_PROMPTS.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => sendPrompt(p.query)}
                    className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-900/90 px-2.5 py-1 font-mono text-[11px] text-slate-200 transition hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-white"
                  >
                    {p.icon}
                    <span>{p.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 space-y-4 overflow-y-auto p-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${
                    m.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-emerald-500 text-slate-950 font-medium'
                        : 'border border-white/10 bg-slate-900/90 text-slate-200'
                    }`}
                  >
                    <div className="whitespace-pre-line">{m.text}</div>

                    {m.citations && m.citations.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5 border-t border-white/10 pt-2">
                        {m.citations.map((cit, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 rounded bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-300 border border-emerald-500/20"
                          >
                            <Terminal className="h-2.5 w-2.5" /> {cit}
                          </span>
                        ))}
                      </div>
                    )}

                    {m.actionProjectSlug && (
                      <button
                        onClick={() => {
                          setActiveProjectId(m.actionProjectSlug!);
                        }}
                        className="mt-2.5 inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/40 bg-cyan-500/15 px-3 py-1 font-mono text-xs font-medium text-cyan-300 hover:bg-cyan-500/25"
                      >
                        <span>Inspect Interactive Architecture Whitepaper</span>
                        <ExternalLink className="h-3 w-3" />
                      </button>
                    )}
                  </div>
                  <span className="mt-1 px-1 font-mono text-[10px] text-slate-500">
                    {m.sender === 'user' ? 'Recruiter / Visitor' : 'Biamtiero Twin v2.4'} · {m.timestamp}
                  </span>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
                  <span className="inline-block h-2 w-2 animate-ping rounded-full bg-emerald-400" />
                  <span>Synthesizing architectural response from Knowledge Graph...</span>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendPrompt(input);
              }}
              className="flex items-center gap-2 border-t border-white/10 bg-slate-900/90 p-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tanyakan tentang arsitektur, Rust/Go/TS, AI RAG, atau gaji..."
                className="flex-1 rounded-xl border border-white/10 bg-slate-950 px-3.5 py-2.5 font-mono text-xs text-white placeholder-slate-500 focus:border-emerald-500/60 focus:outline-none"
              />
              <button
                type="submit"
                className="flex items-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2.5 font-mono text-xs font-bold text-slate-950 transition hover:bg-emerald-400"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Send</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
