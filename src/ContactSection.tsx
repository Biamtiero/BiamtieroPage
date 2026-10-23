import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from './data/portfolioData';

interface ContactSectionProps {
  revealKey?: number;
  onNavigate?: (targetId: 'beranda' | 'tentang' | 'kontak', e?: React.MouseEvent) => void;
  onOpenWorks?: (e: React.MouseEvent) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  revealKey = 0,
  onNavigate,
  onOpenWorks,
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [animCycle, setAnimCycle] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [jakartaTime, setJakartaTime] = useState<string>('');
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: 50, y: 50 });

  // Update live WIB (UTC+7) clock
  useEffect(() => {
    const updateClock = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat('id-ID', {
          timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now);
        setJakartaTime(`${formatted} WIB (UTC+7)`);
      } catch {
        setJakartaTime('UTC+7 · Indonesia');
      }
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  // Trigger entrance animation when navigated via button click
  useEffect(() => {
    if (revealKey > 0) {
      setIsVisible(true);
      setAnimCycle((c) => c + 1);
    }
  }, [revealKey]);

  // Trigger entrance animation when scrolled into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            setAnimCycle((c) => c + 1);
          }
        });
      },
      { threshold: 0.22 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isVisible]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCursorPos({ x, y });
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(PORTFOLIO_DATA.profile.email).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const socialLinks = [
    { label: 'GitHub', href: PORTFOLIO_DATA.profile.github },
    { label: 'LinkedIn', href: PORTFOLIO_DATA.profile.linkedin },
    { label: 'Instagram', href: PORTFOLIO_DATA.profile.instagram },
  ];

  return (
    <section
      id="kontak"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full overflow-hidden bg-[#020412] text-white select-none"
    >
      {/* ====================================================================
          SUBTLE COSMIC HORIZON & CURSOR SPOTLIGHT GLOW
      ==================================================================== */}
      <div
        key={`horizon-${animCycle}`}
        className={`pointer-events-none absolute inset-0 z-0 ${
          isVisible ? 'contact-horizon-active' : 'opacity-0'
        }`}
        style={{
          background: `
            radial-gradient(650px circle at ${cursorPos.x}% ${cursorPos.y}%, rgba(56, 189, 248, 0.09), transparent 70%),
            radial-gradient(ellipse 92% 60% at 50% 106%, rgba(44, 90, 160, 0.36) 0%, rgba(129, 174, 202, 0.12) 45%, rgba(2, 4, 18, 0) 75%)
          `,
        }}
      />

      {/* Subtle Top Hairline Divider with Atmospheric Center Glow */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-300/20 to-transparent" />

      {/* ====================================================================
          MAIN CONTENT CONTAINER
      ==================================================================== */}
      <div
        key={`contact-${animCycle}`}
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col justify-between px-6 py-8 sm:px-12 sm:py-10"
      >
        {/* 1. TOP HEADER BAR */}
        <div
          className={`flex flex-wrap items-center justify-between gap-4 ${
            isVisible ? 'reveal-fade-active' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.12s' }}
        >
          <div className="flex items-center gap-4 sm:gap-8">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300/80">
              02 — Contact
            </span>
            <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-white/25" />
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white/75">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
              <span>Available for new projects</span>
            </span>
          </div>

          <div className="flex items-center gap-8 text-sm font-medium">
            {onOpenWorks && (
              <button
                type="button"
                onClick={(e) => onOpenWorks(e)}
                className="inline-flex items-center gap-1 text-sky-300/95 hover:text-white transition cursor-pointer"
              >
                <span>Projects</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            )}
            <a
              href="#tentang"
              onClick={(e) => onNavigate?.('tentang', e)}
              className="text-white/70 hover:text-white transition"
            >
              About
            </a>
            <a
              href="#beranda"
              onClick={(e) => onNavigate?.('beranda', e)}
              className="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition"
            >
              <span>←</span>
              <span className="underline underline-offset-4">Index</span>
            </a>
          </div>
        </div>

        {/* 2. CENTER STAGE: MASSIVE HIGH-IMPACT TYPOGRAPHY & INTERACTIVE EMAIL ACTIONS */}
        <div className="my-auto py-12 sm:py-16">
          {/* Giant Staggered 3D Headline */}
          <div className="space-y-1 sm:space-y-2">
            <div className="overflow-hidden pb-1">
              <h2
                className={`font-display uppercase tracking-[-0.025em] text-white ${
                  isVisible ? 'contact-headline-3d-active' : 'opacity-0'
                }`}
                style={{
                  fontSize: 'clamp(3.1rem, 9.8vw, 10.8rem)',
                  lineHeight: 0.86,
                  fontWeight: 800,
                  animationDelay: '0.06s',
                }}
              >
                LET&apos;S WORK
              </h2>
            </div>

            <div className="overflow-hidden pb-2">
              <h2
                className={`font-display uppercase tracking-[-0.025em] text-sky-200/95 ${
                  isVisible ? 'contact-headline-3d-active' : 'opacity-0'
                }`}
                style={{
                  fontSize: 'clamp(3.1rem, 9.8vw, 10.8rem)',
                  lineHeight: 0.86,
                  fontWeight: 800,
                  animationDelay: '0.16s',
                }}
              >
                TOGETHER.
              </h2>
            </div>
          </div>

          {/* Short Subtitle & Interactive Email Bar */}
          <div
            className={`mt-8 sm:mt-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8 ${
              isVisible ? 'contact-capsule-active' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.28s' }}
          >
            <p className="max-w-md text-base sm:text-[18px] font-normal leading-[1.65] text-white/75">
              Punya ide produk digital, proyek aplikasi web, atau peluang kolaborasi? Mari berdiskusi langsung tanpa birokrasi yang rumit.
            </p>

            {/* High-Impact Interactive Email Action Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Click-to-Copy Interactive Email Pill */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="group relative inline-flex items-center justify-between sm:justify-start gap-4 rounded-full border border-white/15 bg-white/[0.06] px-6 py-4 sm:px-8 sm:py-5 text-left backdrop-blur-md transition-all duration-300 hover:border-sky-300/45 hover:bg-white/[0.1] active:scale-[0.99] cursor-pointer"
                title="Klik untuk menyalin alamat email"
              >
                <div className="flex items-center gap-3.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sky-300 group-hover:bg-sky-400/20 transition">
                    {copied ? (
                      <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </span>
                  <div>
                    <span className="block text-[11px] font-medium uppercase tracking-widest text-white/45">
                      {copied ? 'Berhasil Disalin ke Clipboard' : 'Klik untuk Salin Email'}
                    </span>
                    <span className="text-base sm:text-xl md:text-2xl font-semibold tracking-tight text-white">
                      {PORTFOLIO_DATA.profile.email}
                    </span>
                  </div>
                </div>
              </button>

              {/* Direct Mailto CTA Button */}
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 sm:py-5 text-sm sm:text-base font-semibold text-[#020412] shadow-[0_0_35px_rgba(255,255,255,0.2)] transition-all duration-300 hover:bg-sky-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="h-4 w-4" />
                <span>Kirim Email</span>
                <span className="jesper-arrow-box">
                  <ArrowUpRight className="jesper-arrow-primary h-4 w-4" />
                  <ArrowUpRight className="jesper-arrow-secondary h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* 3. BOTTOM FOOTER ROW: SOCIAL MEDIA LINKS, LOCAL TIME & BACK TO TOP */}
        <div
          className={`flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 border-t border-white/12 pt-6 text-sm ${
            isVisible ? 'reveal-fade-active' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.44s' }}
        >
          {/* Left: Social Links + Local Time */}
          <div className="flex flex-wrap items-end gap-10 sm:gap-16">
            <div>
              <div className="mb-2 text-xs font-medium uppercase tracking-wider text-white/40">
                Socials
              </div>
              <div className="flex flex-wrap items-center gap-6">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1 text-[15px] font-medium text-white/85 hover:text-sky-300 transition"
                  >
                    <span className="underline-offset-4 group-hover:underline">
                      {item.label}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-2 text-xs font-medium uppercase tracking-wider text-white/40">
                Local Time
              </div>
              <div className="font-mono text-[14px] font-medium text-white/85">
                {jakartaTime || 'Indonesia (UTC+7)'}
              </div>
            </div>
          </div>

          {/* Right: Back to Top + Copyright */}
          <div className="flex w-full sm:w-auto items-center justify-between sm:justify-end gap-8">
            <button
              type="button"
              onClick={(e) => onNavigate?.('beranda', e)}
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/85 hover:border-white/30 hover:bg-white/10 hover:text-white transition cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>

            <span className="text-xs font-medium text-white/50">
              © 2026 {PORTFOLIO_DATA.profile.name}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
