import React, { useEffect, useRef } from 'react';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  Mail,
  ChevronDown,
} from 'lucide-react';
import { PORTFOLIO_DATA } from './data/portfolioData';
import { CurvedWorksCarousel3D } from './CurvedWorksCarousel3D';

export function App() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = true;
    vid.defaultMuted = true;
    vid.play().catch(() => {
      // Retry on first user interaction if browser policy blocks initial autoplay
    });
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black text-white select-none">
      {/* ====================================================================
          STEP 1: FULLSCREEN UHD VIDEO HERO LANDING PAGE (EXACT ORIGINAL DESIGN)
      ==================================================================== */}
      <section
        id="beranda"
        className="relative flex h-screen w-screen flex-col justify-between overflow-hidden"
      >
        {/* 1. FULLSCREEN UHD BACKGROUND VIDEO (/hero-video.mp4) */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
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
                'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.55) 100%), linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.0) 25%, rgba(0,0,0,0.0) 75%, rgba(0,0,0,0.98) 100%)',
            }}
          />
        </div>

        {/* 2. TOP MINIMALIST GLASS NAVBAR */}
        <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
          <a
            href="#beranda"
            className="font-display text-lg font-bold tracking-tight text-white drop-shadow-sm"
          >
            Biamtiero<span className="text-sky-400">.</span>
          </a>

          <nav className="glass-pill hidden md:flex items-center gap-7 rounded-full px-6 py-2.5 text-xs font-medium tracking-wide text-slate-200">
            <a href="#beranda" className="text-white font-semibold">
              Home
            </a>
            <a href="#tentang" className="hover:text-white transition">
              About
            </a>
            <a href="#tentang" className="hover:text-white transition">
              Skills
            </a>
            <a href="#proyek" className="hover:text-white transition">
              Projects
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className="hover:text-white transition"
            >
              Contact
            </a>
          </nav>

          <a
            href={`mailto:${PORTFOLIO_DATA.profile.email}`}
            className="glass-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-white hover:bg-white/15 transition"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-sky-300" />
          </a>
        </header>

        {/* 3. CENTERED HERO CONTENT */}
        <div className="relative z-20 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 text-center sm:px-10">
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

          {/* Primary & Secondary Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#tentang"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(255,255,255,0.25)] transition hover:bg-slate-200"
            >
              <span>Tentang Saya</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className="glass-pill inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs sm:text-sm font-medium text-white transition hover:bg-white/15"
            >
              <span>Hubungi Saya</span>
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
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className="glass-pill flex h-9 w-9 items-center justify-center rounded-full text-slate-200 hover:text-white hover:bg-white/15 transition"
              title="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <a
            href="#tentang"
            className="glass-pill hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-slate-200 hover:text-white transition"
          >
            <span>Scroll Down</span>
            <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
          </a>
        </footer>
      </section>

      {/* ====================================================================
          STEP 2: HALAMAN ABOUT ME DENGAN TEMA 3D CURVED CAROUSEL (MATHIAS ADOLFSSON)
      ==================================================================== */}
      <section id="tentang" className="relative h-screen w-screen bg-black">
        {/* Top Minimalist Header Inside About Section */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 z-30 flex items-start justify-between px-7 py-7 sm:px-11">
          <div className="pointer-events-auto leading-snug">
            <div className="text-sm font-medium tracking-tight text-white">
              {PORTFOLIO_DATA.profile.name}
            </div>
            <div className="text-xs font-normal text-neutral-400">
              About &amp; Capabilities
            </div>
          </div>

          <a
            href="#beranda"
            className="pointer-events-auto text-xs font-normal text-neutral-400 hover:text-white transition"
          >
            Back to Top ↑
          </a>
        </div>

        <CurvedWorksCarousel3D />
      </section>
    </div>
  );
}

export default App;