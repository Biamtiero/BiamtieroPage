import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  Mail,
  ChevronDown,
} from 'lucide-react';
import { PORTFOLIO_DATA } from './data/portfolioData';
import { SegermanAboutSection } from './SegermanAboutSection';
import { ContactSection } from './ContactSection';
import { JesperWorksPage } from './JesperWorksPage';

export function App() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Separate Page State: 'main' (Beranda + About + Contact) vs 'works' (Dedicated Jesper Landberg 3D Works Page)
  const [activePage, setActivePage] = useState<'main' | 'works'>('main');
  const [heroRevealKey, setHeroRevealKey] = useState<number>(0);
  const [aboutRevealKey, setAboutRevealKey] = useState<number>(0);
  const [contactRevealKey, setContactRevealKey] = useState<number>(0);
  const [worksBootKey, setWorksBootKey] = useState<number>(0);
  const [hoveredBtn, setHoveredBtn] = useState<'about' | 'works' | 'contact' | null>(null);

  useEffect(() => {
    if (activePage !== 'main') return;
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = true;
    vid.defaultMuted = true;
    vid.play().catch(() => {
      // Retry on first user interaction if browser policy blocks initial autoplay
    });
  }, [activePage, heroRevealKey]);

  // ============================================================================
  // DESTINATION-DRIVEN NAVIGATION
  // Each button directly triggers the authentic 3D / visual choreography of its
  // destination page (Segerman 3D Planet Orbital Flight for About, Jesper 3-Bar
  // to 3D S-Curve Ribbon Flight for Works, 3D Horizon Unfold for Contact, and
  // Cinema Frame Expand for Home) — with zero artificial 2D overlays blocking the view!
  // ============================================================================
  const triggerSectionTransition = (
    targetId: 'beranda' | 'tentang' | 'kontak',
    e?: React.MouseEvent
  ) => {
    if (e) e.preventDefault();

    const triggerTargetChoreography = (fromOtherPage: boolean) => {
      const el = document.getElementById(targetId);
      if (el) {
        window.scrollTo({
          top: el.offsetTop,
          behavior: (fromOtherPage ? 'instant' : 'smooth') as ScrollBehavior,
        });
      }
      if (targetId === 'beranda') {
        setHeroRevealKey((k) => k + 1);
      } else if (targetId === 'tentang') {
        setAboutRevealKey((k) => k + 1);
      } else if (targetId === 'kontak') {
        setContactRevealKey((k) => k + 1);
      }
    };

    if (activePage !== 'main') {
      setActivePage('main');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          triggerTargetChoreography(true);
        });
      });
    } else {
      triggerTargetChoreography(false);
    }
  };

  // Navigate to the Dedicated Separate Works Page (Triggers Jesper Landberg's 3 White Pill Bars -> 3D S-Curve Ribbon Flight!)
  const triggerWorksPageTransition = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    setWorksBootKey((k) => k + 1);
    setActivePage('works');
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#020412] text-white select-none">
      {/* ====================================================================
          DEDICATED SEPARATE PAGE FOR PROJECTS / HASIL KARYA
          (Jesper Landberg jesperlandberg-2.mp4: 3 White Pill Bars -> 3D S-Curve Wave Ribbon & Grid Floor)
      ==================================================================== */}
      {activePage === 'works' ? (
        <JesperWorksPage
          key={`works-boot-${worksBootKey}`}
          onNavigateToSection={(targetId, e) => triggerSectionTransition(targetId, e)}
        />
      ) : (
        <>
          {/* ================================================================
              STEP 1: FULLSCREEN UHD VIDEO HERO LANDING PAGE
          ================================================================ */}
          <section
            id="beranda"
            className="relative flex h-screen w-screen flex-col justify-between overflow-hidden bg-black"
          >
            {/* 1. FULLSCREEN UHD BACKGROUND VIDEO (/hero-video.mp4) WITH CINEMA FRAME EXPAND */}
            <div
              key={`hero-frame-${heroRevealKey}`}
              className={`absolute inset-0 z-0 overflow-hidden bg-black ${
                heroRevealKey > 0 ? 'hero-frame-enter' : ''
              }`}
            >
              <video
                ref={videoRef}
                src="/hero-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="h-full w-full object-cover object-center"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>

              {/* Subtle Center & Vertical Vignette so Centered Text Remains Crisp & Video Stays Clear */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.55) 100%), linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.0) 25%, rgba(0,0,0,0.0) 75%, rgba(2,4,18,0.98) 100%)',
                }}
              />
            </div>

            {/* 2. TOP MINIMALIST GLASS NAVBAR */}
            <header
              key={`hero-top-${heroRevealKey}`}
              className={`relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-10 ${
                heroRevealKey > 0 ? 'hero-topbar-enter' : ''
              }`}
            >
              <a
                href="#beranda"
                onClick={(e) => triggerSectionTransition('beranda', e)}
                className="font-display text-lg font-bold tracking-tight text-white drop-shadow-sm hover:opacity-80 transition"
              >
                Biamtiero<span className="text-sky-400">.</span>
              </a>

              <nav className="glass-pill hidden md:flex items-center gap-7 rounded-full px-6 py-2.5 text-xs font-medium tracking-wide text-slate-200">
                <a
                  href="#beranda"
                  onClick={(e) => triggerSectionTransition('beranda', e)}
                  className="text-white font-semibold"
                >
                  Home
                </a>
                <a
                  href="#tentang"
                  onClick={(e) => triggerSectionTransition('tentang', e)}
                  className="hover:text-white transition"
                >
                  About
                </a>
                <a
                  href="#works"
                  onClick={(e) => triggerWorksPageTransition(e)}
                  className="hover:text-white transition"
                >
                  Projects
                </a>
                <a
                  href="#kontak"
                  onClick={(e) => triggerSectionTransition('kontak', e)}
                  className="hover:text-white transition"
                >
                  Contact
                </a>
              </nav>

              <a
                href="#kontak"
                onClick={(e) => triggerSectionTransition('kontak', e)}
                className="glass-pill group inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-white hover:bg-white/15 transition"
              >
                <span>Let&apos;s Talk</span>
                <span className="jesper-arrow-box text-sky-300">
                  <ArrowUpRight className="jesper-arrow-primary h-3.5 w-3.5" />
                  <ArrowUpRight className="jesper-arrow-secondary h-3.5 w-3.5" />
                </span>
              </a>
            </header>

            {/* 3. CENTERED HERO CONTENT */}
            <div
              key={`hero-center-${heroRevealKey}`}
              className={`relative z-20 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 text-center sm:px-10 ${
                heroRevealKey > 0 ? 'hero-center-enter' : ''
              }`}
            >
              {/* Role Badge */}
              <div className="glass-pill inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-slate-100">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
                <span>{PORTFOLIO_DATA.profile.role}</span>
              </div>

              {/* Name & Headline */}
              <h1 className="mt-5 font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.06] text-white drop-shadow-lg">
                Biamtiero{' '}
                <span className="font-light text-slate-200">Amiral Kalman</span>
              </h1>

              <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-slate-200/90 drop-shadow">
                Membangun aplikasi web modern dengan arsitektur yang tangguh,
                performa cepat, dan pengalaman digital yang berkarakter.
              </p>

              {/* Primary & Secondary Actions — Each Button Embodies Its Target Page's Reference! */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                {/* 1. TENTANG SAYA — References Raphael Segerman (segerman.mp4) Eclipse & 3D Planet Orbit */}
                <a
                  href="#tentang"
                  onMouseEnter={() => setHoveredBtn('about')}
                  onMouseLeave={() => setHoveredBtn(null)}
                  onClick={(e) => triggerSectionTransition('tentang', e)}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all duration-300 hover:bg-slate-100 hover:scale-[1.03] active:scale-[0.98]"
                >
                  {/* Segerman Eclipse Crescent Icon that shifts phase on hover */}
                  <svg
                    viewBox="-2 -2 104 104"
                    className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45"
                    aria-hidden="true"
                  >
                    <mask id="hero-segerman-eclipse">
                      <rect x="-2" y="-2" width="104" height="104" fill="#fff" />
                      <circle
                        cx={hoveredBtn === 'about' ? '38' : '65'}
                        cy="34"
                        r="34"
                        fill="#000"
                        className="transition-all duration-500"
                      />
                    </mask>
                    <circle
                      cx="50"
                      cy="50"
                      r="48"
                      fill="#020412"
                      mask="url(#hero-segerman-eclipse)"
                    />
                  </svg>
                  <span>Tentang Saya</span>
                  <span className="jesper-arrow-box">
                    <ArrowUpRight className="jesper-arrow-primary h-4 w-4" />
                    <ArrowUpRight className="jesper-arrow-secondary h-4 w-4" />
                  </span>
                </a>

                {/* 2. HASIL KARYA — References Jesper Landberg (jesperlandberg-2.mp4) 3 White Bars -> 3D S-Curve Ribbon */}
                <a
                  href="#works"
                  onMouseEnter={() => setHoveredBtn('works')}
                  onMouseLeave={() => setHoveredBtn(null)}
                  onClick={(e) => triggerWorksPageTransition(e)}
                  className="glass-pill group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-xs sm:text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-[1.03] active:scale-[0.98]"
                >
                  {/* Jesper Landberg 3 Pill Bars that morph into 3D S-Curve Cards on hover */}
                  <span className="inline-flex items-center gap-[3px]">
                    <span
                      className={`h-2.5 w-1.5 rounded-[2px] bg-current transition-all duration-300 ${
                        hoveredBtn === 'works'
                          ? '-translate-y-[2px] -rotate-6 scale-y-110'
                          : 'scale-y-50'
                      }`}
                    />
                    <span
                      className={`h-2.5 w-1.5 rounded-[2px] bg-current transition-all duration-300 ${
                        hoveredBtn === 'works'
                          ? 'scale-y-125'
                          : 'scale-y-50'
                      }`}
                    />
                    <span
                      className={`h-2.5 w-1.5 rounded-[2px] bg-current transition-all duration-300 ${
                        hoveredBtn === 'works'
                          ? 'translate-y-[2px] rotate-6 scale-y-110'
                          : 'scale-y-50'
                      }`}
                    />
                  </span>
                  <span>Hasil Karya</span>
                  <span className="jesper-arrow-box">
                    <ArrowUpRight className="jesper-arrow-primary h-4 w-4" />
                    <ArrowUpRight className="jesper-arrow-secondary h-4 w-4" />
                  </span>
                </a>

                {/* 3. HUBUNGI SAYA — References Contact Horizon & Direct Connection */}
                <a
                  href="#kontak"
                  onMouseEnter={() => setHoveredBtn('contact')}
                  onMouseLeave={() => setHoveredBtn(null)}
                  onClick={(e) => triggerSectionTransition('kontak', e)}
                  className="glass-pill group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-xs sm:text-sm font-medium text-white transition-all duration-300 hover:bg-white/15 hover:scale-[1.03] active:scale-[0.98]"
                >
                  <span className="h-2 w-2 rounded-full bg-sky-300 transition-transform duration-300 group-hover:scale-125 group-hover:bg-emerald-400" />
                  <span>Hubungi Saya</span>
                  <span className="jesper-arrow-box">
                    <ArrowUpRight className="jesper-arrow-primary h-4 w-4" />
                    <ArrowUpRight className="jesper-arrow-secondary h-4 w-4" />
                  </span>
                </a>
              </div>
            </div>

            {/* 4. BOTTOM BAR (Social Media Logo Icons & Scroll Indicator) */}
            <footer className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 pb-7 sm:px-10">
              <div className="flex items-center gap-3">
                <a
                  href={PORTFOLIO_DATA.profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-pill flex h-9 w-9 items-center justify-center rounded-full text-slate-200 hover:text-white hover:bg-white/15 transition"
                  title="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-pill flex h-9 w-9 items-center justify-center rounded-full text-slate-200 hover:text-white hover:bg-white/15 transition"
                  title="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.profile.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-pill flex h-9 w-9 items-center justify-center rounded-full text-slate-200 hover:text-white hover:bg-white/15 transition"
                  title="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#kontak"
                  onClick={(e) => triggerSectionTransition('kontak', e)}
                  className="glass-pill flex h-9 w-9 items-center justify-center rounded-full text-slate-200 hover:text-white hover:bg-white/15 transition"
                  title="Contact"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>

              <a
                href="#tentang"
                onClick={(e) => triggerSectionTransition('tentang', e)}
                className="glass-pill hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-slate-200 hover:text-white transition"
              >
                <span>Scroll Down</span>
                <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
              </a>
            </footer>
          </section>

          {/* ================================================================
              STEP 2: HALAMAN ABOUT ME — RAPHAEL SEGERMAN (segerman.mp4 / segerman.dev)
          ================================================================ */}
          <SegermanAboutSection
            revealKey={aboutRevealKey}
            onNavigateHome={(e) => triggerSectionTransition('beranda', e)}
            onOpenWorks={(e) => triggerWorksPageTransition(e)}
          />

          {/* ================================================================
              STEP 3: HALAMAN CONTACT — MINIMALIST HIGH-IMPACT TYPOGRAPHY
          ================================================================ */}
          <ContactSection
            revealKey={contactRevealKey}
            onNavigate={(targetId, e) => triggerSectionTransition(targetId, e)}
            onOpenWorks={(e) => triggerWorksPageTransition(e)}
          />
        </>
      )}
    </div>
  );
}

export default App;
