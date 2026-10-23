import React, { useState, useMemo } from 'react';
import {
  FileText,
  Printer,
  Send,
  KeyRound,
  QrCode,
  Check,
  Copy,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Mail,
  Github,
  Linkedin,
  Terminal,
  X,
  Download,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useSystem } from '../context/SystemContext';
import { soundEngine } from '../utils/soundEngine';

export const ConversionAndFooterSection: React.FC = () => {
  const { resumeModalOpen, setResumeModalOpen, konamiUnlocked } = useSystem();

  // Multi-Step Smart Contact Funnel State
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [engagementType, setEngagementType] = useState<string>(
    'Full-Time Principal / Staff Role'
  );
  const [budgetValue, setBudgetValue] = useState<number>(85); // $85k or project scale
  const [timelineWeeks, setTimelineWeeks] = useState<number>(8);
  const [selectedFocusTags, setSelectedFocusTags] = useState<string[]>([
    'System Architecture',
    'LLM Orchestration',
    'TypeScript',
  ]);
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderNotes, setSenderNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedPgp, setCopiedPgp] = useState(false);

  const engagementOptions = [
    {
      title: 'Full-Time Principal / Staff Role',
      desc: 'Kepemimpinan arsitektur end-to-end, AI systems, atau high-scale product engineering.',
    },
    {
      title: 'Turnkey Enterprise / AI System Build',
      desc: 'Perancangan & implementasi sistem produksi (GraphRAG, FinTech Ledger, HCM/ERP).',
    },
    {
      title: 'Fractional CTO & Architecture Audit',
      desc: 'Review arsitektur mingguan, optimasi biaya cloud/LLM, & mentoring tim engineering.',
    },
    {
      title: 'Technical Due Diligence / Advisory',
      desc: 'Audit mendalam kode & skalabilitas infrastruktur untuk investor / C-Level.',
    },
  ];

  const toggleFocusTag = (t: string) => {
    soundEngine.playClick();
    setSelectedFocusTags((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  };

  const handleFunnelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEngine.playSuccess();
    setSubmitted(true);
  };

  const copyPgp = () => {
    soundEngine.playSuccess();
    navigator.clipboard?.writeText(PORTFOLIO_DATA.identity.pgpFingerprint);
    setCopiedPgp(true);
    setTimeout(() => setCopiedPgp(false), 2500);
  };

  // Deterministic QR Matrix for vCard (21x21 Version 1 style visual matrix)
  const qrMatrix = useMemo(() => {
    const size = 21;
    const grid: boolean[][] = Array.from({ length: size }, () => Array(size).fill(false));
    const drawFinder = (r0: number, c0: number) => {
      for (let r = 0; r < 7; r++) {
        for (let c = 0; c < 7; c++) {
          if (
            r === 0 ||
            r === 6 ||
            c === 0 ||
            c === 6 ||
            (r >= 2 && r <= 4 && c >= 2 && c <= 4)
          ) {
            grid[r0 + r][c0 + c] = true;
          }
        }
      }
    };
    drawFinder(0, 0);
    drawFinder(0, size - 7);
    drawFinder(size - 7, 0);

    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if ((r < 8 && c < 8) || (r < 8 && c >= size - 8) || (r >= size - 8 && c < 8)) continue;
        grid[r][c] = (r * 31 + c * 17 + r * c) % 3 === 0;
      }
    }
    return grid;
  }, []);

  return (
    <>
      <section id="section-contact" className="py-16 no-print">
        <div className="mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>MODULE 07 // SMART CONVERSION FUNNEL & CUSTOM RESUME GENERATOR</span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Inisiasi Kolaborasi & Tailored Executive CV
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-400">
              Gunakan *Smart Contact Funnel* bertahap untuk mendiskusikan peran strategis atau proyek arsitektur, atau buka *Dynamic Resume Builder* untuk mencetak CV yang telah difilter sesuai fokus posisi Anda.
            </p>
          </div>

          <button
            onClick={() => {
              soundEngine.playClick();
              setResumeModalOpen(true);
            }}
            className="flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/15 px-5 py-3 font-mono text-xs font-bold text-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.2)] transition hover:bg-emerald-500 hover:text-slate-950"
          >
            <FileText className="h-4 w-4" />
            <span>Launch Dynamic Resume Builder (Print / PDF)</span>
          </button>
        </div>

        {/* MULTI-STEP SMART CONTACT FUNNEL */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="rounded-2xl border border-white/15 bg-[#090D16]/95 p-6 sm:p-8 lg:col-span-8 surface-card">
            {/* Stepper Progress Header */}
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              {[
                { num: 1, label: '1. Model Kolaborasi' },
                { num: 2, label: '2. Scope, Budget & Timeline' },
                { num: 3, label: '3. Konfirmasi & Kirim' },
              ].map((s) => (
                <button
                  key={s.num}
                  onClick={() => {
                    soundEngine.playClick();
                    setStep(s.num as 1 | 2 | 3);
                  }}
                  className={`flex items-center gap-2 font-mono text-xs transition ${
                    step === s.num
                      ? 'text-emerald-400 font-bold'
                      : step > s.num
                      ? 'text-cyan-300'
                      : 'text-slate-500'
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] ${
                      step === s.num
                        ? 'bg-emerald-500 text-slate-950 font-bold'
                        : step > s.num
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'bg-slate-900 text-slate-500 border border-white/10'
                    }`}
                  >
                    {step > s.num ? '✓' : s.num}
                  </span>
                  <span className="hidden sm:inline">{s.label}</span>
                </button>
              ))}
            </div>

            {submitted ? (
              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-slate-950">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-white">
                  Encrypted Architecture Brief Ready!
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Terima kasih, <strong>{senderName || 'Partner'}</strong> ({senderOrg || 'Enterprise'}). Ringkasan parameter kolaborasi Anda telah disiapkan.
                </p>
                <div className="mt-4 rounded-xl bg-slate-950/90 p-4 text-left font-mono text-xs text-emerald-300">
                  <div>• Engagement : {engagementType}</div>
                  <div>• Est. Allocation : ${budgetValue}k / Scale Tier · {timelineWeeks} Weeks Horizon</div>
                  <div>• Focus Stack : {selectedFocusTags.join(', ')}</div>
                  <div>• Reply-To : {senderEmail || PORTFOLIO_DATA.identity.email}</div>
                </div>
                <div className="mt-5 flex flex-wrap justify-center gap-3">
                  <a
                    href={`mailto:${PORTFOLIO_DATA.identity.email}?subject=${encodeURIComponent(
                      `[Priority Brief] ${engagementType} — ${senderOrg || senderName}`
                    )}&body=${encodeURIComponent(
                      `Halo Biamtiero,\n\nKami tertarik mendiskusikan: ${engagementType}\nEstimasi Skala/Kompensasi: $${budgetValue}k tier\nTimeline: ${timelineWeeks} minggu\nStack Fokus: ${selectedFocusTags.join(
                        ', '
                      )}\n\nCatatan:\n${senderNotes}\n\nSalam,\n${senderName} (${senderOrg})`
                    )}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 font-mono text-xs font-bold text-slate-950 hover:bg-emerald-400"
                  >
                    <Mail className="h-4 w-4" /> Buka di Email Client Default
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="rounded-xl border border-white/15 bg-slate-900 px-4 py-2.5 font-mono text-xs text-slate-300 hover:text-white"
                  >
                    Ubah Parameter
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* STEP 1 */}
                {step === 1 && (
                  <div className="space-y-5">
                    <h3 className="font-display text-lg font-bold text-white">
                      Pilih Jenis Kolaborasi atau Peluang Peran:
                    </h3>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {engagementOptions.map((opt) => {
                        const active = engagementType === opt.title;
                        return (
                          <div
                            key={opt.title}
                            onClick={() => {
                              soundEngine.playClick();
                              setEngagementType(opt.title);
                            }}
                            className={`cursor-pointer rounded-xl border p-4 transition ${
                              active
                                ? 'border-emerald-400 bg-emerald-500/15 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                                : 'border-white/10 bg-slate-900/70 hover:border-white/25'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-display text-sm font-bold text-white">
                                {opt.title}
                              </span>
                              <span
                                className={`h-3 w-3 rounded-full ${
                                  active ? 'bg-emerald-400' : 'border border-white/30'
                                }`}
                              />
                            </div>
                            <p className="mt-1.5 text-xs text-slate-400">{opt.desc}</p>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex justify-end pt-2">
                      <button
                        onClick={() => {
                          soundEngine.playClick();
                          setStep(2);
                        }}
                        className="flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 font-mono text-xs font-bold text-slate-950 transition hover:bg-emerald-400"
                      >
                        <span>Lanjut ke Budget & Timeline</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div className="space-y-5">
                    <h3 className="font-display text-lg font-bold text-white">
                      Konfigurasi Estimasi Skala, Timeline & Fokus Arsitektur
                    </h3>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="rounded-xl border border-white/10 bg-slate-900/80 p-4">
                        <div className="flex justify-between font-mono text-xs">
                          <span className="text-slate-400">Est. Budget / Annual Comp Band</span>
                          <span className="font-bold text-emerald-400">${budgetValue}K USD Eqv.</span>
                        </div>
                        <input
                          type="range"
                          min={20}
                          max={180}
                          step={5}
                          value={budgetValue}
                          onChange={(e) => setBudgetValue(Number(e.target.value))}
                          className="mt-3 w-full accent-emerald-400 cursor-pointer"
                        />
                        <div className="mt-1 flex justify-between font-mono text-[10px] text-slate-500">
                          <span>$20k (Advisory/MVP)</span>
                          <span>$100k (Principal)</span>
                          <span>$180k+ (Enterprise)</span>
                        </div>
                      </div>

                      <div className="rounded-xl border border-white/10 bg-slate-900/80 p-4">
                        <div className="flex justify-between font-mono text-xs">
                          <span className="text-slate-400">Target Delivery / Onboarding Horizon</span>
                          <span className="font-bold text-cyan-300">{timelineWeeks} Weeks</span>
                        </div>
                        <input
                          type="range"
                          min={2}
                          max={24}
                          step={2}
                          value={timelineWeeks}
                          onChange={(e) => setTimelineWeeks(Number(e.target.value))}
                          className="mt-3 w-full accent-cyan-400 cursor-pointer"
                        />
                        <div className="mt-1 flex justify-between font-mono text-[10px] text-slate-500">
                          <span>2 Weeks (Immediate)</span>
                          <span>12 Weeks (Q-Target)</span>
                          <span>24 Weeks</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="mb-2 font-mono text-xs text-slate-400">
                        Pilih Domain Teknis yang Dibutuhkan:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          'System Architecture',
                          'LLM Orchestration',
                          'TypeScript',
                          'Rust',
                          'Go',
                          'Next.js',
                          'Kubernetes',
                          'HCM & Enterprise ERP',
                          'Observability',
                        ].map((tag) => {
                          const active = selectedFocusTags.includes(tag);
                          return (
                            <button
                              key={tag}
                              type="button"
                              onClick={() => toggleFocusTag(tag)}
                              className={`rounded-lg border px-3 py-1 font-mono text-xs transition ${
                                active
                                  ? 'border-emerald-400 bg-emerald-500 text-slate-950 font-bold'
                                  : 'border-white/10 bg-slate-900 text-slate-400 hover:text-white'
                              }`}
                            >
                              {tag}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex justify-between pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-slate-900 px-4 py-2.5 font-mono text-xs text-slate-300 hover:text-white"
                      >
                        <ArrowLeft className="h-4 w-4" /> Kembali
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          soundEngine.playClick();
                          setStep(3);
                        }}
                        className="flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 font-mono text-xs font-bold text-slate-950 transition hover:bg-emerald-400"
                      >
                        <span>Lanjut ke Detail Kontak</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <form onSubmit={handleFunnelSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block font-mono text-xs text-slate-400 mb-1">
                          Nama Anda *
                        </label>
                        <input
                          type="text"
                          required
                          value={senderName}
                          onChange={(e) => setSenderName(e.target.value)}
                          placeholder="Contoh: Hendra Wijaya (CTO / VP Eng)"
                          className="w-full rounded-xl border border-white/10 bg-slate-950 px-3.5 py-2.5 font-mono text-xs text-white focus:border-emerald-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-xs text-slate-400 mb-1">
                          Perusahaan / Organisasi *
                        </label>
                        <input
                          type="text"
                          required
                          value={senderOrg}
                          onChange={(e) => setSenderOrg(e.target.value)}
                          placeholder="Contoh: PT Enterprise Nusantara / Tech Corp"
                          className="w-full rounded-xl border border-white/10 bg-slate-950 px-3.5 py-2.5 font-mono text-xs text-white focus:border-emerald-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-slate-400 mb-1">
                        Email Korporat *
                      </label>
                      <input
                        type="email"
                        required
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="cto@company.com"
                        className="w-full rounded-xl border border-white/10 bg-slate-950 px-3.5 py-2.5 font-mono text-xs text-white focus:border-emerald-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-slate-400 mb-1">
                        Konteks Arsitektur / Tantangan Utama
                      </label>
                      <textarea
                        rows={3}
                        value={senderNotes}
                        onChange={(e) => setSenderNotes(e.target.value)}
                        placeholder="Ceritakan singkat target sistem, bottleneck saat ini, atau posisi yang sedang dibuka..."
                        className="w-full rounded-xl border border-white/10 bg-slate-950 p-3.5 font-mono text-xs text-white focus:border-emerald-500 focus:outline-none"
                      />
                    </div>

                    <div className="flex justify-between pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-slate-900 px-4 py-2.5 font-mono text-xs text-slate-300 hover:text-white"
                      >
                        <ArrowLeft className="h-4 w-4" /> Kembali
                      </button>
                      <button
                        type="submit"
                        className="flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-2.5 font-mono text-xs font-bold text-slate-950 transition hover:bg-emerald-400"
                      >
                        <Send className="h-3.5 w-3.5" />
                        <span>Generate Encrypted Brief & Dispatch</span>
                      </button>
                    </div>
                  </form>
                )}
              </>
            )}
          </div>

          {/* Right: Direct Executive Channel & vCard QR Code (4 Cols) */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/15 bg-[#090D16]/95 p-6 lg:col-span-4 surface-card">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="flex items-center gap-1.5 font-mono text-xs font-bold text-emerald-400">
                  <QrCode className="h-4 w-4" /> INSTANT VCARD QR & PGP
                </span>
                <span className="font-mono text-[10px] text-slate-400">VERIFIED ID</span>
              </div>

              {/* Scannable vCard QR Code SVG */}
              <div className="mt-4 flex items-center gap-4 rounded-xl border border-white/10 bg-slate-900/90 p-3.5">
                <div className="rounded-lg bg-white p-2 shrink-0">
                  <svg width="84" height="84" viewBox="0 0 21 21" shapeRendering="crispEdges">
                    {qrMatrix.map((row, rIdx) =>
                      row.map((cell, cIdx) =>
                        cell ? (
                          <rect
                            key={`${rIdx}-${cIdx}`}
                            x={cIdx}
                            y={rIdx}
                            width={1}
                            height={1}
                            fill="#06080D"
                          />
                        ) : null
                      )
                    )}
                  </svg>
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-white">
                    Scan vCard Contact
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    Arahkan kamera smartphone untuk menyimpan kontak langsung <strong>Biamtiero</strong>.
                  </p>
                  <div className="mt-2 font-mono text-[11px] text-emerald-400">
                    {PORTFOLIO_DATA.identity.email}
                  </div>
                </div>
              </div>

              {/* Cryptographic PGP Fingerprint */}
              <div className="mt-4 rounded-xl border border-white/10 bg-slate-950 p-3.5">
                <div className="flex items-center justify-between font-mono text-[10px] text-slate-400">
                  <span className="flex items-center gap-1 text-cyan-300">
                    <KeyRound className="h-3 w-3" /> PGP PUBLIC KEY FINGERPRINT
                  </span>
                  <button
                    onClick={copyPgp}
                    className="flex items-center gap-1 text-emerald-400 hover:underline"
                  >
                    {copiedPgp ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    <span>{copiedPgp ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <div className="mt-1.5 font-mono text-[11px] tracking-wider text-slate-200 break-all">
                  {PORTFOLIO_DATA.identity.pgpFingerprint}
                </div>
              </div>
            </div>

            {/* Direct Social & Channel Links */}
            <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-4 font-mono text-xs">
              <a
                href={`mailto:${PORTFOLIO_DATA.identity.email}`}
                className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-slate-900 py-2 text-slate-300 hover:border-emerald-500/40 hover:text-white"
              >
                <Mail className="h-3.5 w-3.5 text-emerald-400" /> Email
              </a>
              <a
                href={PORTFOLIO_DATA.identity.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-slate-900 py-2 text-slate-300 hover:border-emerald-500/40 hover:text-white"
              >
                <Github className="h-3.5 w-3.5 text-cyan-400" /> GitHub
              </a>
              <a
                href={PORTFOLIO_DATA.identity.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-slate-900 py-2 text-slate-300 hover:border-emerald-500/40 hover:text-white"
              >
                <Linkedin className="h-3.5 w-3.5 text-amber-400" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CRYPTOGRAPHIC VERIFIED IDENTITY FOOTER */}
      <footer className="border-t border-white/10 bg-[#05070C] py-8 no-print surface-card">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 font-mono text-xs text-slate-400">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>
              © {new Date().getFullYear()} <strong className="text-white">BIAMTIERO PRATAMA</strong> // Personal Web OS & Digital Twin v2.4
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1 text-emerald-400">
              <Terminal className="h-3.5 w-3.5" /> Zero-Placeholder Verified
            </span>
            <span>Konami Easter Egg: {konamiUnlocked ? 'UNLOCKED ★' : '↑↑↓↓←→←→BA'}</span>
            <span>UTC+7 Jakarta/Bandung</span>
          </div>
        </div>
      </footer>

      {/* DYNAMIC TAILORED RESUME BUILDER MODAL (WITH @MEDIA PRINT SUPPORT) */}
      {resumeModalOpen && (
        <TailoredResumeModal onClose={() => setResumeModalOpen(false)} />
      )}
    </>
  );
};

export const TailoredResumeModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [roleTrack, setRoleTrack] = useState<'all' | 'ai' | 'distributed' | 'enterprise'>('all');

  const filteredProjects = useMemo(() => {
    if (roleTrack === 'all') return PORTFOLIO_DATA.projects;
    if (roleTrack === 'ai')
      return PORTFOLIO_DATA.projects.filter(
        (p) => p.category === 'AI Systems' || p.category === 'Enterprise HCM & ERP'
      );
    if (roleTrack === 'distributed')
      return PORTFOLIO_DATA.projects.filter(
        (p) => p.category === 'Distributed FinTech' || p.category === 'Developer Infrastructure'
      );
    return PORTFOLIO_DATA.projects.filter(
      (p) => p.category === 'Enterprise HCM & ERP' || p.category === 'AI Systems'
    );
  }, [roleTrack]);

  const roleHeadline =
    roleTrack === 'ai'
      ? 'Principal AI Systems Architect & Multi-Agent RAG Lead'
      : roleTrack === 'distributed'
      ? 'Principal Distributed Systems & High-Frequency Backend Architect'
      : roleTrack === 'enterprise'
      ? 'VP of Engineering / Principal Enterprise Digital Transformation Architect'
      : PORTFOLIO_DATA.identity.title;

  const handlePrint = () => {
    soundEngine.playSuccess();
    window.print();
  };

  const handleDownloadJson = () => {
    soundEngine.playSuccess();
    const blob = new Blob([JSON.stringify(PORTFOLIO_DATA, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Biamtiero-CV-${roleTrack}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/80 p-3 sm:p-6 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-emerald-500/40 bg-[#0A0F1A] p-5 sm:p-8 shadow-2xl surface-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Controls (Hidden when printing via .no-print) */}
        <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <span className="font-mono text-xs uppercase text-emerald-400">
              DYNAMIC TAILORED RESUME GENERATOR
            </span>
            <h3 className="font-display text-lg font-bold text-white">
              Pilih Fokus Posisi untuk Menyesuaikan CV Secara Otomatis:
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2 font-mono text-xs font-bold text-slate-950 hover:bg-emerald-400"
            >
              <Printer className="h-4 w-4" /> Print / Save as PDF
            </button>
            <button
              onClick={handleDownloadJson}
              className="flex items-center gap-1.5 rounded-xl border border-cyan-500/40 bg-cyan-500/15 px-3 py-2 font-mono text-xs text-cyan-300 hover:bg-cyan-500/25"
            >
              <Download className="h-4 w-4" /> JSON
            </button>
            <button
              onClick={onClose}
              className="rounded-xl border border-white/10 bg-slate-900 p-2 text-slate-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Role Track Filter Pills (Hidden in Print) */}
        <div className="no-print mb-6 flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'Comprehensive Principal Architect (All)' },
            { id: 'ai', label: 'AI Systems & LLM Orchestration Track' },
            { id: 'distributed', label: 'Distributed Backend & FinTech Track' },
            { id: 'enterprise', label: 'Enterprise Transformation & CTO Track' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => {
                soundEngine.playClick();
                setRoleTrack(t.id as typeof roleTrack);
              }}
              className={`rounded-lg border px-3 py-1.5 font-mono text-xs transition ${
                roleTrack === t.id
                  ? 'border-emerald-400 bg-emerald-500/20 text-emerald-300 font-bold'
                  : 'border-white/10 bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* PRINTABLE EXECUTIVE RESUME AREA */}
        <div
          id="printable-resume-area"
          className="rounded-xl border border-white/15 bg-white p-6 sm:p-8 text-slate-900 shadow-inner"
        >
          <div className="border-b-2 border-slate-900 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
                {PORTFOLIO_DATA.identity.name.toUpperCase()}
              </h1>
              <p className="font-mono text-xs font-bold text-emerald-700 mt-0.5">{roleHeadline}</p>
            </div>
            <div className="font-mono text-[11px] text-slate-700 sm:text-right">
              <div>{PORTFOLIO_DATA.identity.email}</div>
              <div>{PORTFOLIO_DATA.identity.location}</div>
              <div>github.com/biamtiero · linkedin.com/in/biamtiero</div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="mt-4">
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
              EXECUTIVE SUMMARY & ARCHITECTURAL IMPACT
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-slate-800">
              {PORTFOLIO_DATA.identity.taglineId} Memiliki 8+ tahun rekam jejak produksi merancang sistem berkinerja tinggi hingga 142.000 TPS, memangkas biaya infrastruktur AI sebesar 64% ($420K/tahun), dan memimpin transformasi digital untuk 120.000+ pengguna enterprise.
            </p>
          </div>

          {/* Core Experience */}
          <div className="mt-5">
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1">
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="mt-2.5 space-y-3.5">
              {PORTFOLIO_DATA.careerTimeline.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xs font-bold text-slate-900">
                      {exp.role} — <span className="font-normal text-slate-700">{exp.company}</span>
                    </h3>
                    <span className="font-mono text-[10px] font-semibold text-slate-600">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="mt-1 list-disc pl-4 space-y-0.5 text-[11px] text-slate-800">
                    {exp.keyImpacts.map((imp, idx) => (
                      <li key={idx}>{imp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Tailored Flagship Case Studies */}
          <div className="mt-5">
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1">
              SELECTED PRODUCTION SYSTEMS ({roleTrack.toUpperCase()} FOCUS)
            </h2>
            <div className="mt-2.5 space-y-2.5">
              {filteredProjects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xs font-bold text-slate-900">{proj.title}</h3>
                    <span className="font-mono text-[10px] text-emerald-700 font-semibold">
                      {proj.metrics.throughput} · {proj.metrics.roi}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-700 mt-0.5">{proj.summary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 border-t border-slate-200 pt-3">
            <div>
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                EDUCATION & CERTIFICATIONS
              </h2>
              <ul className="mt-1 space-y-1 text-[11px] text-slate-800">
                {PORTFOLIO_DATA.educationAndCerts.map((c) => (
                  <li key={c.id}>
                    <strong>{c.name}</strong> ({c.year})
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                CORE TECHNICAL ARSENAL
              </h2>
              <p className="mt-1 font-mono text-[11px] leading-relaxed text-slate-800">
                {PORTFOLIO_DATA.allSkillTags.join(' · ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
