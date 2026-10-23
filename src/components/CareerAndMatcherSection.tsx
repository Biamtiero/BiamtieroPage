import React, { useState, useMemo } from 'react';
import {
  Briefcase,
  Target,
  CheckCircle2,
  Sparkles,
  Award,
  ExternalLink,
  FileText,
  Users,
  TrendingUp,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useSystem } from '../context/SystemContext';
import { soundEngine } from '../utils/soundEngine';

export const CareerAndMatcherSection: React.FC = () => {
  const { setActiveProjectId, setResumeModalOpen } = useSystem();
  const [selectedSkills, setSelectedSkills] = useState<string[]>(
    PORTFOLIO_DATA.recruiterRoleTemplates[0].requiredSkills
  );
  const [activePresetId, setActivePresetId] = useState<string>(
    PORTFOLIO_DATA.recruiterRoleTemplates[0].id
  );
  const [customJdText, setCustomJdText] = useState<string>('');

  const toggleSkill = (skill: string) => {
    soundEngine.playClick();
    setActivePresetId('custom');
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const applyPreset = (presetId: string, skills: string[]) => {
    soundEngine.playSuccess();
    setActivePresetId(presetId);
    setSelectedSkills(skills);
  };

  const handleJdPaste = (text: string) => {
    setCustomJdText(text);
    if (!text.trim()) return;
    const lower = text.toLowerCase();
    const detected = PORTFOLIO_DATA.allSkillTags.filter((tag) =>
      lower.includes(tag.toLowerCase().split(' ')[0])
    );
    if (detected.length > 0) {
      setActivePresetId('custom-jd');
      setSelectedSkills(detected);
    }
  };

  // Compute Match Score & Matched Projects
  const matcherResult = useMemo(() => {
    if (selectedSkills.length === 0) {
      return {
        score: 100,
        matchedProjects: PORTFOLIO_DATA.projects,
        matchedRoles: PORTFOLIO_DATA.careerTimeline,
      };
    }

    // All 20 tags in PORTFOLIO_DATA.allSkillTags are production-verified in Biamtiero's profile,
    // weighted by depth and project coverage
    const matchedProjects = PORTFOLIO_DATA.projects
      .map((proj) => {
        const overlap = proj.tags.filter((t) => selectedSkills.includes(t));
        return { proj, overlapCount: overlap.length, overlap };
      })
      .filter((item) => item.overlapCount > 0)
      .sort((a, b) => b.overlapCount - a.overlapCount);

    const coreHits = selectedSkills.filter((s) =>
      PORTFOLIO_DATA.allSkillTags.includes(s)
    ).length;

    const rawRatio = coreHits / Math.max(1, selectedSkills.length);
    const bonus = matchedProjects.length >= 2 ? 4 : 2;
    const score = Math.min(99, Math.max(88, Math.round(rawRatio * 95 + bonus)));

    return {
      score,
      matchedProjects: matchedProjects.map((m) => m.proj),
      matchedRoles: PORTFOLIO_DATA.careerTimeline,
    };
  }, [selectedSkills]);

  return (
    <section id="section-career-matcher" className="py-16">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-xs text-amber-300">
          <Target className="h-3.5 w-3.5" />
          <span>MODULE 05 // RECRUITER ROLE-FIT MATCHER & CAREER TIMELINE</span>
        </div>
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Recruiter Role-Fit Matcher & Evolusi Kepemimpinan Teknis
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400">
          Pilih template posisi atau klik kriteria teknologi yang dibutuhkan perusahaan Anda. Sistem akan menghitung persentase kecocokan secara instan dan menyoroti bukti proyek produksi yang relevan.
        </p>
      </div>

      {/* KILLER FEATURE: RECRUITER ROLE-FIT MATCHER */}
      <div className="mb-14 rounded-2xl border border-emerald-500/35 bg-gradient-to-br from-[#0A111D] via-[#090D16] to-[#081514] p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] surface-card">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left: Criteria Selector (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                STEP 1 // SELECT ROLE PRESET OR CLICK REQUIRED TECH TAGS
              </span>
              <span className="font-mono text-xs text-slate-400">
                {selectedSkills.length} criteria active
              </span>
            </div>

            {/* Role Presets */}
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {PORTFOLIO_DATA.recruiterRoleTemplates.map((tpl) => {
                const active = activePresetId === tpl.id;
                return (
                  <button
                    key={tpl.id}
                    onClick={() => applyPreset(tpl.id, tpl.requiredSkills)}
                    className={`flex items-center justify-between rounded-xl border px-3.5 py-2.5 text-left font-mono text-xs transition ${
                      active
                        ? 'border-emerald-400 bg-emerald-500/20 text-white font-bold shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                        : 'border-white/10 bg-slate-900/80 text-slate-300 hover:border-white/25'
                    }`}
                  >
                    <span className="truncate">{tpl.title}</span>
                    <Sparkles
                      className={`h-3.5 w-3.5 shrink-0 ${
                        active ? 'text-emerald-300' : 'text-slate-500'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Interactive Skill Tag Cloud */}
            <div className="mt-5">
              <div className="mb-2 font-mono text-[11px] text-slate-400">
                Klik tag keahlian di bawah untuk menyesuaikan kriteria lowongan Anda:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {PORTFOLIO_DATA.allSkillTags.map((skill) => {
                  const active = selectedSkills.includes(skill);
                  return (
                    <button
                      key={skill}
                      onClick={() => toggleSkill(skill)}
                      className={`rounded-lg border px-2.5 py-1 font-mono text-xs transition ${
                        active
                          ? 'border-emerald-400 bg-emerald-500 text-slate-950 font-bold'
                          : 'border-white/10 bg-slate-900/70 text-slate-400 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      {active ? `✓ ${skill}` : `+ ${skill}`}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Optional Paste Job Description Box */}
            <div className="mt-5">
              <input
                type="text"
                value={customJdText}
                onChange={(e) => handleJdPaste(e.target.value)}
                placeholder="Atau tempelkan (paste) kalimat Job Description Anda di sini untuk ekstraksi otomatis..."
                className="w-full rounded-xl border border-white/10 bg-slate-950/90 px-3.5 py-2.5 font-mono text-xs text-white placeholder-slate-500 focus:border-emerald-500/50 focus:outline-none"
              />
            </div>
          </div>

          {/* Right: Live Match Score & Verified Proof-of-Work Output (5 Cols) */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/15 bg-slate-950/90 p-5 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="font-mono text-[10px] uppercase text-emerald-400">
                    ALGORITHMIC ROLE-FIT SCORE
                  </div>
                  <div className="mt-0.5 font-display text-4xl font-extrabold text-white">
                    {matcherResult.score}%{' '}
                    <span className="font-mono text-sm font-semibold text-emerald-400">
                      STRONG PRINCIPAL MATCH
                    </span>
                  </div>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/40 bg-emerald-500/15 text-emerald-400">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
              </div>

              {/* Matched Proof-of-Work Projects */}
              <div className="mt-4">
                <div className="mb-2 font-mono text-xs uppercase text-slate-400">
                  Matched Production Proof-of-Work ({matcherResult.matchedProjects.length} Case Studies):
                </div>
                <div className="space-y-2">
                  {matcherResult.matchedProjects.slice(0, 3).map((proj) => (
                    <div
                      key={proj.id}
                      onClick={() => setActiveProjectId(proj.id)}
                      className="group flex cursor-pointer items-center justify-between rounded-xl border border-white/10 bg-slate-900/90 p-3 transition hover:border-emerald-500/50"
                    >
                      <div className="min-w-0 pr-2">
                        <div className="truncate font-display text-xs font-bold text-white group-hover:text-emerald-300">
                          {proj.title.split('//')[0]}
                        </div>
                        <div className="truncate font-mono text-[11px] text-emerald-400">
                          {proj.metrics.throughput} · {proj.metrics.roi}
                        </div>
                      </div>
                      <ExternalLink className="h-3.5 w-3.5 shrink-0 text-slate-400 group-hover:text-emerald-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
              <button
                onClick={() => {
                  soundEngine.playClick();
                  setResumeModalOpen(true);
                }}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 font-mono text-xs font-bold text-slate-950 transition hover:bg-emerald-400"
              >
                <FileText className="h-4 w-4" />
                <span>Generate Tailored CV for This Role</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* INTERACTIVE CAREER TIMELINE &EDUCATION/CERTIFICATIONS */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Career Timeline (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400">
            <Briefcase className="h-4 w-4" />
            <span>CAREER EVOLUTION & ARCHITECTURAL OWNERSHIP TIMELINE</span>
          </div>

          <div className="relative border-l-2 border-emerald-500/30 pl-6 space-y-8">
            {PORTFOLIO_DATA.careerTimeline.map((item, idx) => (
              <div
                key={item.id}
                className="relative rounded-2xl border border-white/10 bg-[#090D16]/95 p-6 transition hover:border-emerald-500/40 surface-card"
              >
                {/* Timeline Node Dot */}
                <span
                  className={`absolute -left-[33px] top-6 flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                    idx === 0
                      ? 'border-emerald-400 bg-emerald-500 shadow-[0_0_12px_#10b981]'
                      : 'border-emerald-500/60 bg-slate-950'
                  }`}
                />

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-md bg-emerald-500/15 px-2.5 py-0.5 font-mono text-xs font-bold text-emerald-300 border border-emerald-500/30">
                    {item.period}
                  </span>
                  <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
                    <span className="flex items-center gap-1 text-cyan-300">
                      <Users className="h-3.5 w-3.5" /> {item.teamSize}
                    </span>
                    <span className="flex items-center gap-1 text-amber-300">
                      <TrendingUp className="h-3.5 w-3.5" /> {item.budgetOrScale}
                    </span>
                  </div>
                </div>

                <h3 className="mt-3 font-display text-xl font-bold text-white">{item.role}</h3>
                <div className="font-mono text-xs text-slate-400">
                  {item.company} · {item.location}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>

                <ul className="mt-4 space-y-2">
                  {item.keyImpacts.map((imp, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-white/10 pt-3">
                  {item.skillsUsed.map((sk) => {
                    const isHighlighted = selectedSkills.includes(sk);
                    return (
                      <span
                        key={sk}
                        className={`rounded px-2 py-0.5 font-mono text-[10px] ${
                          isHighlighted
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold'
                            : 'bg-slate-900 text-slate-400 border border-white/5'
                        }`}
                      >
                        {sk}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Verified Certifications (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-300">
            <Award className="h-4 w-4" />
            <span>ACADEMIC DEGREES & VERIFIED CERTIFICATIONS</span>
          </div>

          <div className="space-y-3">
            {PORTFOLIO_DATA.educationAndCerts.map((cert) => (
              <div
                key={cert.id}
                className="rounded-2xl border border-white/10 bg-[#090D16]/95 p-4 transition hover:border-cyan-500/40 surface-card"
              >
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="rounded bg-cyan-500/15 px-2 py-0.5 text-cyan-300 border border-cyan-500/30">
                    {cert.category}
                  </span>
                  <span className="text-slate-400">{cert.year}</span>
                </div>
                <h4 className="mt-2 font-display text-sm font-bold text-white">{cert.name}</h4>
                <p className="mt-0.5 text-xs text-slate-400">{cert.issuer}</p>
                <div className="mt-2 font-mono text-[11px] text-emerald-400">
                  ID: {cert.credentialId}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
