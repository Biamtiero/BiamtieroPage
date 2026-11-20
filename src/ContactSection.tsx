import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ArrowUpRight, Check, Copy, Mail, ArrowUp, Sparkles, Send, Globe, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from './data/portfolioData';

// ============================================================================
// 3D KINETIC SIGNAL BEACON & QUANTUM WAVE CONTACT SECTION
// - Real-time Three.js Canvas: Undulating harmonic particle wave & orbital beacon
// - Dynamic ripple on mouse move and energy shockwave pulse on button hover
// - Architectural glass-pill layout harmonized with Landing Page aesthetic
// ============================================================================

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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [animCycle, setAnimCycle] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [jakartaTime, setJakartaTime] = useState<string>('');

  // 3D Engine State
  const engineRef = useRef({
    clock: 0,
    normX: 0,
    normY: 0,
    camX: 0,
    camY: 0,
    pulseEnergy: 0,
    targetPulseEnergy: 0,
    rippleOrigin: new THREE.Vector2(0, 0),
  });

  // Live WIB (Asia/Jakarta, UTC+7) Clock
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

  // Entrance triggers
  useEffect(() => {
    if (revealKey > 0) {
      setIsVisible(true);
      setAnimCycle((c) => c + 1);
    }
  }, [revealKey]);

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
      { threshold: 0.18 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isVisible]);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(PORTFOLIO_DATA.profile.email).catch(() => {});
    setCopied(true);
    // Trigger intense 3D pulse wave
    engineRef.current.targetPulseEnergy = 1.0;
    setTimeout(() => setCopied(false), 2400);
  };

  const trigger3DPulse = () => {
    engineRef.current.targetPulseEnergy = 0.85;
  };

  // ============================================================================
  // THREE.JS REAL-TIME 3D QUANTUM WAVE & SIGNAL BEACON ENGINE
  // ============================================================================
  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;

    let width = section.clientWidth || window.innerWidth;
    let height = section.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020412, 0.009);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 22, 60);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // --- 1. HARMONIC 3D UNDULATING PARTICLE WAVE GRID ---
    const gridX = 70;
    const gridZ = 70;
    const particleCount = gridX * gridZ;
    const spacing = 2.4;

    const waveGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const basePositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colDeep = new THREE.Color('#0e2a47');
    const colCyan = new THREE.Color('#38bdf8');
    const colTeal = new THREE.Color('#2dd4bf');
    const colGlow = new THREE.Color('#ffffff');

    let idx = 0;
    for (let ix = 0; ix < gridX; ix++) {
      for (let iz = 0; iz < gridZ; iz++) {
        const x = (ix - gridX / 2) * spacing;
        const z = (iz - gridZ / 2) * spacing;
        const y = 0;

        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;

        basePositions[idx * 3] = x;
        basePositions[idx * 3 + 1] = y;
        basePositions[idx * 3 + 2] = z;

        colors[idx * 3] = colDeep.r;
        colors[idx * 3 + 1] = colDeep.g;
        colors[idx * 3 + 2] = colDeep.b;
        idx++;
      }
    }

    waveGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    waveGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const waveMat = new THREE.PointsMaterial({
      size: 1.6,
      vertexColors: true,
      transparent: true,
      opacity: 0.78,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const waveMesh = new THREE.Points(waveGeo, waveMat);
    waveMesh.position.set(0, -12, -8);
    waveMesh.rotation.x = -0.22;
    scene.add(waveMesh);

    // --- 2. KINETIC ORBITAL SIGNAL BEACON RINGS ---
    const beaconGroup = new THREE.Group();
    beaconGroup.position.set(0, 4, -20);
    scene.add(beaconGroup);

    const ring1Geo = new THREE.TorusGeometry(18, 0.22, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ringMat1);
    ring1.rotation.x = Math.PI * 0.45;
    beaconGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(26, 0.16, 16, 120);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x2dd4bf,
      transparent: true,
      opacity: 0.32,
      blending: THREE.AdditiveBlending,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ringMat2);
    ring2.rotation.y = Math.PI * 0.25;
    beaconGroup.add(ring2);

    // Central Radiant Beacon Glow Sphere
    const beaconSphereGeo = new THREE.SphereGeometry(3.5, 32, 32);
    const beaconSphereMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });
    const beaconSphere = new THREE.Mesh(beaconSphereGeo, beaconSphereMat);
    beaconGroup.add(beaconSphere);

    // --- POINTER / MOUSE TRACKING ---
    const onPointerMove = (e: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      engineRef.current.normX = (x / width) * 2 - 1;
      engineRef.current.normY = -(y / height) * 2 + 1;

      // Ripple origin in 3D ground coordinates
      engineRef.current.rippleOrigin.set(
        engineRef.current.normX * 30,
        -engineRef.current.normY * 30
      );
    };

    section.addEventListener('pointermove', onPointerMove);

    const handleResize = () => {
      if (!section) return;
      width = section.clientWidth || window.innerWidth;
      height = section.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // --- RENDER LOOP ---
    let animId = 0;
    const render = () => {
      engineRef.current.clock += 0.018;
      const t = engineRef.current.clock;

      // Decay pulse energy
      engineRef.current.pulseEnergy = THREE.MathUtils.lerp(
        engineRef.current.pulseEnergy,
        engineRef.current.targetPulseEnergy,
        0.12
      );
      engineRef.current.targetPulseEnergy = THREE.MathUtils.lerp(
        engineRef.current.targetPulseEnergy,
        0,
        0.04
      );

      // Camera smooth parallax
      engineRef.current.camX = THREE.MathUtils.lerp(
        engineRef.current.camX,
        engineRef.current.normX * 12,
        0.05
      );
      engineRef.current.camY = THREE.MathUtils.lerp(
        engineRef.current.camY,
        22 + engineRef.current.normY * 6,
        0.05
      );
      camera.position.x = engineRef.current.camX;
      camera.position.y = engineRef.current.camY;
      camera.lookAt(0, -2, -10);

      // Animate Harmonic Wave Grid
      const posAttr = waveGeo.attributes.position as THREE.BufferAttribute;
      const colAttr = waveGeo.attributes.color as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;
      const colArray = colAttr.array as Float32Array;

      const pEnergy = engineRef.current.pulseEnergy;
      const rOrigin = engineRef.current.rippleOrigin;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const bx = basePositions[i3];
        const bz = basePositions[i3 + 2];

        // Harmonic waves
        const wave1 = Math.sin(bx * 0.07 + t * 1.6) * Math.cos(bz * 0.07 + t * 1.3);
        const wave2 = Math.cos((bx + bz) * 0.05 + t * 1.2) * 2.2;

        // Interactive mouse ripple
        const dx = bx - rOrigin.x;
        const dz = bz - rOrigin.y;
        const distToMouse = Math.hypot(dx, dz);
        const mouseRipple = Math.sin(distToMouse * 0.25 - t * 3.5) * Math.exp(-distToMouse * 0.05) * 2.8;

        // Pulse shockwave from center beacon
        const distToCenter = Math.hypot(bx, bz);
        const pulseWave = Math.sin(distToCenter * 0.2 - t * 5.0) * Math.exp(-distToCenter * 0.035) * (pEnergy * 9.5);

        const newY = wave1 * 3.2 + wave2 + mouseRipple + pulseWave;
        posArray[i3 + 1] = newY;

        // Dynamic Color calculation based on wave height & pulse
        const heightFactor = THREE.MathUtils.clamp((newY + 6.0) / 12.0, 0, 1);
        const activeCol = pEnergy > 0.05 ? colTeal : colCyan;
        const targetR = THREE.MathUtils.lerp(colDeep.r, activeCol.r, heightFactor) + pEnergy * 0.4;
        const targetG = THREE.MathUtils.lerp(colDeep.g, activeCol.g, heightFactor) + pEnergy * 0.6;
        const targetB = THREE.MathUtils.lerp(colDeep.b, activeCol.b, heightFactor) + pEnergy * 0.8;

        colArray[i3] = targetR;
        colArray[i3 + 1] = targetG;
        colArray[i3 + 2] = targetB;
      }

      posAttr.needsUpdate = true;
      colAttr.needsUpdate = true;

      // Animate Beacon Rings
      ring1.rotation.z += 0.006;
      ring1.rotation.y = Math.sin(t * 0.6) * 0.35;
      ring2.rotation.z -= 0.004;
      ring2.rotation.x = Math.PI * 0.35 + Math.cos(t * 0.5) * 0.25;

      const sphereScale = 1 + Math.sin(t * 2.2) * 0.12 + pEnergy * 0.8;
      beaconSphere.scale.set(sphereScale, sphereScale, sphereScale);

      renderer.render(scene, camera);
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      section.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      waveGeo.dispose();
      waveMat.dispose();
      ring1Geo.dispose();
      ringMat1.dispose();
      ring2Geo.dispose();
      ringMat2.dispose();
      beaconSphereGeo.dispose();
      beaconSphereMat.dispose();
    };
  }, []);

  const socialLinks = [
    { label: 'GitHub', href: PORTFOLIO_DATA.profile.github },
    { label: 'LinkedIn', href: PORTFOLIO_DATA.profile.linkedin },
    { label: 'Instagram', href: PORTFOLIO_DATA.profile.instagram },
  ];

  return (
    <section
      id="kontak"
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#020412] text-white select-none"
    >
      {/* Three.js 3D WebGL Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
      />

      {/* Atmospheric Horizon Gradient */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse 90% 50% at 50% 100%, rgba(14, 165, 233, 0.14) 0%, rgba(2, 4, 18, 0) 75%), linear-gradient(180deg, rgba(2,4,18,0.92) 0%, rgba(2,4,18,0.3) 25%, rgba(2,4,18,0.3) 70%, rgba(2,4,18,0.98) 100%)',
        }}
      />

      {/* Subtle Top Divider */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/25 to-transparent" />

      {/* ====================================================================
          MAIN CONTENT LAYER (Futuristic Glass-Pill Layout)
      ==================================================================== */}
      <div
        key={`contact-stage-${animCycle}`}
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between px-6 py-8 sm:px-10 sm:py-10"
      >
        {/* 1. TOP HEADER BAR */}
        <div
          className={`flex flex-wrap items-center justify-between gap-4 ${
            isVisible ? 'reveal-fade-active' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.12s' }}
        >
          <div className="flex items-center gap-4 sm:gap-8">
            <span className="glass-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
              <Sparkles className="h-3.5 w-3.5 text-sky-400" />
              <span>02 // CONTACT</span>
            </span>

            <span className="hidden sm:inline-flex items-center gap-2 text-xs font-medium text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
              <span>{jakartaTime || 'Asia/Jakarta (UTC+7)'}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 text-xs font-medium">
            {onOpenWorks && (
              <button
                type="button"
                onClick={(e) => onOpenWorks(e)}
                className="glass-pill inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sky-300 hover:text-white hover:bg-white/10 transition cursor-pointer"
              >
                <span>Projects</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            )}
            <a
              href="#tentang"
              onClick={(e) => onNavigate?.('tentang', e)}
              className="glass-pill inline-flex items-center rounded-full px-4 py-2 text-slate-200 hover:text-white hover:bg-white/10 transition"
            >
              About
            </a>
            <a
              href="#beranda"
              onClick={(e) => onNavigate?.('beranda', e)}
              className="glass-pill inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-slate-200 hover:text-white hover:bg-white/10 transition"
            >
              <span>←</span>
              <span>Home</span>
            </a>
          </div>
        </div>

        {/* 2. CENTER STAGE: HIGH-IMPACT STATEMENT & INTERACTIVE EMAIL HUB */}
        <div className="my-auto py-12 lg:py-16">
          <div className="max-w-4xl space-y-6">
            {/* Section Tag */}
            <div
              className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400 ${
                isVisible ? 'reveal-fade-active' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.08s' }}
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span>Terbuka untuk Kolaborasi Baru</span>
            </div>

            {/* Giant Architectural Headline */}
            <div className="overflow-hidden space-y-1">
              <h2
                className={`font-display text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-[-0.035em] leading-[1.04] text-white ${
                  isVisible ? 'reveal-title-active' : 'opacity-0'
                }`}
                style={{ animationDelay: '0.14s' }}
              >
                LET&apos;S BUILD SOMETHING
              </h2>
              <h2
                className={`font-display text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-[-0.035em] leading-[1.04] text-sky-300 ${
                  isVisible ? 'reveal-title-active' : 'opacity-0'
                }`}
                style={{ animationDelay: '0.22s' }}
              >
                EXTRAORDINARY.
              </h2>
            </div>

            {/* Descriptive Subtitle */}
            <p
              className={`type-prose text-slate-300/90 ${
                isVisible ? 'reveal-fade-active' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.30s' }}
            >
              Punya konsep produk digital, proyek aplikasi web, arsitektur sistem berskala tinggi, 
              atau sekadar ingin bertukar gagasan kreatif? Pintu komunikasi selalu terbuka.
            </p>

            {/* Interactive Contact Action Hub */}
            <div
              className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 ${
                isVisible ? 'reveal-fade-active' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.38s' }}
            >
              {/* Click-to-Copy Interactive Email Pill with 3D Wave Pulse */}
              <button
                type="button"
                onClick={handleCopyEmail}
                onMouseEnter={trigger3DPulse}
                className="glass-pill group relative flex items-center justify-between gap-6 rounded-full px-6 py-4 sm:px-7 sm:py-4.5 backdrop-blur-md transition-all duration-300 hover:border-sky-400/50 hover:bg-white/10 active:scale-[0.99] cursor-pointer"
                title="Klik untuk menyalin email dan memicu sinyal 3D"
              >
                <div className="flex items-center gap-3.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sky-300 group-hover:bg-sky-400/25 group-hover:text-white transition">
                    {copied ? (
                      <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </span>
                  <div className="text-left">
                    <span className="block text-[11px] font-medium uppercase tracking-wider text-slate-400">
                      {copied ? 'Tersalin ke Clipboard!' : 'Klik untuk Salin Email'}
                    </span>
                    <span className="text-base sm:text-xl font-semibold tracking-tight text-white">
                      {PORTFOLIO_DATA.profile.email}
                    </span>
                  </div>
                </div>

                <span className="hidden sm:inline-flex h-2.5 w-2.5 rounded-full bg-sky-400/60 transition-transform group-hover:scale-125 group-hover:bg-sky-300" />
              </button>

              {/* Direct Mailto Button */}
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                onMouseEnter={trigger3DPulse}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm sm:text-base font-semibold text-slate-950 shadow-[0_0_30px_rgba(255,255,255,0.22)] transition-all duration-300 hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send className="h-4 w-4 text-slate-950" />
                <span>Kirim Email Langsung</span>
                <span className="jesper-arrow-box">
                  <ArrowUpRight className="jesper-arrow-primary h-4 w-4" />
                  <ArrowUpRight className="jesper-arrow-secondary h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* 3. BOTTOM FOOTER & SOCIAL PILLS */}
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10 ${
            isVisible ? 'reveal-fade-active' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.46s' }}
        >
          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={trigger3DPulse}
                className="glass-pill inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium text-slate-200 hover:text-white hover:bg-white/10 transition"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="h-3 w-3 text-sky-400" />
              </a>
            ))}
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-6 text-xs text-slate-400">
            <span>© 2026 Biamtiero Amiral Kalman</span>
            <button
              type="button"
              onClick={(e) => onNavigate?.('beranda', e)}
              className="glass-pill inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-slate-200 hover:text-white hover:bg-white/10 transition cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
