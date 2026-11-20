import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Check, Copy, ArrowUpRight, Sparkles, MapPin, GraduationCap, Code2, Clock } from 'lucide-react';
import { PORTFOLIO_DATA } from './data/portfolioData';

// ============================================================================
// FLUID SPATIAL ABOUT SECTION
// - Real-time 3D Fluid Spatial Prism & Undulating Quantum Core (Three.js)
// - Floating 3D Portrait Monolith (/hero-biamtiero.jpg) with Dynamic Specular Glare
// - Momentum-damped spring physics responding organically to cursor movement
// - Pure personal narrative (no stiff skills lists) & glass-pill aesthetic matching Hero
// ============================================================================

interface SegermanAboutSectionProps {
  revealKey?: number;
  onNavigateHome?: (e?: React.MouseEvent) => void;
  onOpenWorks?: (e: React.MouseEvent) => void;
  onNavigateContact?: (e?: React.MouseEvent) => void;
}

// Shader for the Fluid Undulating Spatial Core
const CORE_VERTEX_SHADER = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vWorldPos;
  uniform float uTime;
  uniform vec3 uMouseWorld;
  uniform float uMouseInfluence;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    
    vec3 pos = position;
    // Harmonic fluid wave displacement
    float wave1 = sin(pos.x * 0.12 + uTime * 1.4) * cos(pos.y * 0.14 + uTime * 1.1);
    float wave2 = cos(pos.z * 0.15 + uTime * 1.6) * sin(pos.y * 0.11 + uTime * 0.9);
    float disp = (wave1 + wave2) * 1.85;

    // Fluid mouse repulsion/attraction
    vec3 worldP = (modelMatrix * vec4(pos, 1.0)).xyz;
    float dist = distance(worldP, uMouseWorld);
    float mouseWave = smoothstep(45.0, 0.0, dist) * uMouseInfluence * 2.2;
    pos += normal * (disp + mouseWave);

    vWorldPos = (modelMatrix * vec4(pos, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const CORE_FRAGMENT_SHADER = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vWorldPos;

  uniform vec3 uBaseColor;
  uniform vec3 uRimColor;
  uniform vec3 uAccentColor;
  uniform float uTime;

  void main() {
    vec3 viewDir = normalize(cameraPosition - vWorldPos);
    vec3 n = normalize(vNormal);

    // Fresnel rim glow
    float fresnel = 1.0 - max(dot(n, viewDir), 0.0);
    float rim = pow(fresnel, 3.2);
    float deepRim = pow(fresnel, 1.4);

    // Internal fluid chromatic shift
    float wavePattern = sin(vWorldPos.y * 0.1 + uTime * 0.8) * 0.5 + 0.5;
    vec3 internalGlow = mix(uBaseColor, uAccentColor, wavePattern * 0.4);

    vec3 finalColor = internalGlow * 0.45 + uRimColor * rim * 1.85 + uAccentColor * deepRim * 0.35;
    float alpha = clamp(0.22 + rim * 0.78, 0.0, 1.0);

    gl_FragColor = vec4(finalColor, alpha);
  }
`;

// Shader for 3D Floating Portrait Monolith with Specular Light Glare
const PORTRAIT_VERTEX_SHADER = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vWorldPos;
  uniform float uCurve;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    
    vec3 pos = position;
    // Gentle natural curvature
    vec2 ndc = (uv - 0.5) * 2.0;
    pos.z -= dot(ndc, ndc) * uCurve;

    vWorldPos = (modelMatrix * vec4(pos, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const PORTRAIT_FRAGMENT_SHADER = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vWorldPos;

  uniform sampler2D tMap;
  uniform vec2 uMouseNorm;
  uniform float uGlare;

  void main() {
    vec2 uv = vUv;
    
    // Subtle chromatic aberration on edges
    vec2 offset = (uv - 0.5) * 0.0035;
    float r = texture2D(tMap, uv + offset).r;
    float g = texture2D(tMap, uv).g;
    float b = texture2D(tMap, uv - offset).b;
    vec3 texColor = vec3(r, g, b);

    // Specular light sweep based on mouse position
    vec2 glarePos = uMouseNorm * 0.5 + 0.5;
    float distToGlare = distance(uv, glarePos);
    float glare = smoothstep(0.42, 0.0, distToGlare) * uGlare;

    // Elegant chamfer vignette
    vec2 d = abs(uv - 0.5) * 2.0;
    float edgeVignette = smoothstep(0.96, 0.75, max(d.x, d.y));

    vec3 finalColor = texColor * edgeVignette + vec3(0.85, 0.95, 1.0) * glare * 0.45;
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

export const SegermanAboutSection: React.FC<SegermanAboutSectionProps> = ({
  revealKey = 0,
  onNavigateHome,
  onOpenWorks,
  onNavigateContact,
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [animCycle, setAnimCycle] = useState<number>(0);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [atmosphere, setAtmosphere] = useState<'sapphire' | 'emerald'>('sapphire');

  // Animation & Physics Tracking
  const stateRef = useRef({
    normX: 0,
    normY: 0,
    targetTiltX: 0,
    targetTiltY: 0,
    currentTiltX: 0,
    currentTiltY: 0,
    coreRotX: 0,
    coreRotY: 0,
    clock: 0,
  });

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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isVisible]);

  // Handle Copy Email with Feedback
  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(PORTFOLIO_DATA.profile.email).catch(() => {});
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  // ============================================================================
  // THREE.JS REAL-TIME 3D FLUID SPATIAL ENGINE
  // ============================================================================
  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;

    let width = section.clientWidth || window.innerWidth;
    let height = section.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020412, 0.007);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 78);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // --- 1. AMBIENT DIGITAL STAR LATTICE ---
    const starCount = 650;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const colorA = new THREE.Color('#38bdf8');
    const colorB = new THREE.Color('#818cf8');
    const colorC = new THREE.Color('#34d399');

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      starPositions[i3] = (Math.random() - 0.5) * 260;
      starPositions[i3 + 1] = (Math.random() - 0.5) * 180;
      starPositions[i3 + 2] = -15 - Math.random() * 120;

      const rnd = Math.random();
      const col = rnd < 0.55 ? colorA : rnd < 0.85 ? colorB : colorC;
      starColors[i3] = col.r;
      starColors[i3 + 1] = col.g;
      starColors[i3 + 2] = col.b;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 1.35,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const starPoints = new THREE.Points(starGeo, starMat);
    scene.add(starPoints);

    // --- 2. FLUID UNDULATING QUANTUM CORE (Torus Knot) ---
    const isSapphire = atmosphere === 'sapphire';
    const coreUniforms = {
      uTime: { value: 0 },
      uMouseWorld: { value: new THREE.Vector3(0, 0, 0) },
      uMouseInfluence: { value: 0 },
      uBaseColor: { value: new THREE.Color('#030b1e') },
      uRimColor: { value: new THREE.Color(isSapphire ? '#38bdf8' : '#34d399') },
      uAccentColor: { value: new THREE.Color(isSapphire ? '#818cf8' : '#2dd4bf') },
    };

    // Smooth Torus Knot with high subdivision for fluid ripple
    const coreGeo = new THREE.TorusKnotGeometry(16, 4.2, 140, 32, 2, 3);
    const coreMat = new THREE.ShaderMaterial({
      vertexShader: CORE_VERTEX_SHADER,
      fragmentShader: CORE_FRAGMENT_SHADER,
      uniforms: coreUniforms,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.set(-20, -5, -8);
    scene.add(coreMesh);

    // Concentric Luminous Orbital Ring around Core
    const ringGeo = new THREE.RingGeometry(24, 24.6, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: isSapphire ? 0x38bdf8 : 0x34d399,
      transparent: true,
      opacity: 0.28,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI * 0.42;
    coreMesh.add(ringMesh);

    // --- 3. 3D FLOATING PORTRAIT MONOLITH (/hero-biamtiero.jpg) ---
    const portraitGroup = new THREE.Group();
    portraitGroup.position.set(22, 4, 10);
    portraitGroup.rotation.set(0.04, -0.28, 0);
    scene.add(portraitGroup);

    // Glass Bevel Backing Plate
    const plateGeo = new THREE.PlaneGeometry(33, 26, 16, 16);
    const plateMat = new THREE.MeshBasicMaterial({
      color: 0x061126,
      transparent: true,
      opacity: 0.72,
      side: THREE.DoubleSide,
    });
    const plateMesh = new THREE.Mesh(plateGeo, plateMat);
    plateMesh.position.z = -0.4;
    portraitGroup.add(plateMesh);

    // Glowing Edge Border Frame
    const frameEdges = new THREE.EdgesGeometry(plateGeo);
    const frameMat = new THREE.LineBasicMaterial({
      color: 0x7dd3fc,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const frameLines = new THREE.LineSegments(frameEdges, frameMat);
    plateMesh.add(frameLines);

    // Portrait Face Shader
    const portraitUniforms = {
      tMap: { value: new THREE.Texture() },
      uCurve: { value: 1.8 },
      uMouseNorm: { value: new THREE.Vector2(0, 0) },
      uGlare: { value: 0.65 },
    };

    const texLoader = new THREE.TextureLoader();
    texLoader.load('/hero-biamtiero.jpg', (tex) => {
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.needsUpdate = true;
      portraitUniforms.tMap.value = tex;
    });

    const portraitGeo = new THREE.PlaneGeometry(32, 25, 48, 36);
    const portraitMat = new THREE.ShaderMaterial({
      vertexShader: PORTRAIT_VERTEX_SHADER,
      fragmentShader: PORTRAIT_FRAGMENT_SHADER,
      uniforms: portraitUniforms,
      side: THREE.DoubleSide,
    });
    const portraitMesh = new THREE.Mesh(portraitGeo, portraitMat);
    portraitGroup.add(portraitMesh);

    // --- POINTER / MOUSE TRACKING ---
    const onPointerMove = (e: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      stateRef.current.normX = (x / width) * 2 - 1;
      stateRef.current.normY = -(y / height) * 2 + 1;

      stateRef.current.targetTiltX = stateRef.current.normY * 0.35;
      stateRef.current.targetTiltY = -stateRef.current.normX * 0.42;
    };

    section.addEventListener('pointermove', onPointerMove);

    const handleResize = () => {
      if (!section) return;
      width = section.clientWidth || window.innerWidth;
      height = section.clientHeight || window.innerHeight;
      camera.aspect = width / height;

      // Responsive camera adjustments
      if (width < 768) {
        camera.position.z = 100;
        portraitGroup.position.set(0, 16, 0);
        portraitGroup.scale.set(0.72, 0.72, 0.72);
        coreMesh.position.set(0, -22, -10);
        coreMesh.scale.set(0.8, 0.8, 0.8);
      } else {
        camera.position.z = 78;
        portraitGroup.position.set(22, 4, 10);
        portraitGroup.scale.set(1, 1, 1);
        coreMesh.position.set(-20, -5, -8);
        coreMesh.scale.set(1, 1, 1);
      }

      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // --- RENDER LOOP ---
    let animId = 0;
    const render = () => {
      stateRef.current.clock += 0.016;
      const t = stateRef.current.clock;

      // Update fluid core uniforms
      coreUniforms.uTime.value = t;
      const mouseVec = new THREE.Vector3(
        stateRef.current.normX * 35,
        stateRef.current.normY * 25,
        0
      );
      coreUniforms.uMouseWorld.value.lerp(mouseVec, 0.08);
      coreUniforms.uMouseInfluence.value = THREE.MathUtils.lerp(
        coreUniforms.uMouseInfluence.value,
        Math.hypot(stateRef.current.normX, stateRef.current.normY),
        0.05
      );

      // Smooth organic rotation for core
      coreMesh.rotation.x = Math.sin(t * 0.35) * 0.2 + stateRef.current.normY * 0.25;
      coreMesh.rotation.y += 0.007;
      coreMesh.rotation.z = Math.cos(t * 0.28) * 0.15;
      ringMesh.rotation.z += 0.004;

      // Smooth spring momentum physics for floating portrait monolith
      stateRef.current.currentTiltX = THREE.MathUtils.lerp(
        stateRef.current.currentTiltX,
        stateRef.current.targetTiltX,
        0.065
      );
      stateRef.current.currentTiltY = THREE.MathUtils.lerp(
        stateRef.current.currentTiltY,
        stateRef.current.targetTiltY,
        0.065
      );

      portraitGroup.rotation.x = stateRef.current.currentTiltX + Math.sin(t * 0.8) * 0.02;
      portraitGroup.rotation.y = -0.28 + stateRef.current.currentTiltY + Math.cos(t * 0.7) * 0.02;
      portraitGroup.position.y = (width < 768 ? 16 : 4) + Math.sin(t * 1.2) * 1.1;

      portraitUniforms.uMouseNorm.value.set(
        stateRef.current.normX,
        stateRef.current.normY
      );

      // Subtle starfield drift
      starPoints.rotation.y = t * 0.018;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      section.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      starGeo.dispose();
      starMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      plateGeo.dispose();
      plateMat.dispose();
      portraitGeo.dispose();
      portraitMat.dispose();
    };
  }, [atmosphere]);

  return (
    <section
      id="tentang"
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#020412] text-white select-none"
    >
      {/* 3D WebGL Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
      />

      {/* Atmospheric Vignette & Gradients */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 75% 35%, rgba(56, 189, 248, 0.08) 0%, transparent 70%), linear-gradient(180deg, rgba(2,4,18,0.92) 0%, rgba(2,4,18,0.3) 25%, rgba(2,4,18,0.3) 75%, rgba(2,4,18,0.96) 100%)',
        }}
      />

      {/* Top Hairline Accent Divider */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/25 to-transparent" />

      {/* ====================================================================
          MAIN CONTENT LAYER (Pure Narrative & Architectural Glass Layout)
      ==================================================================== */}
      <div
        key={`about-stage-${animCycle}`}
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between px-6 py-8 sm:px-10 sm:py-10"
      >
        {/* 1. TOP BAR (Harmonized with Landing Page Navbar) */}
        <div
          className={`flex flex-wrap items-center justify-between gap-4 ${
            isVisible ? 'reveal-fade-active' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.12s' }}
        >
          <div className="flex items-center gap-6 sm:gap-10">
            <a
              href="#beranda"
              onClick={onNavigateHome}
              className="font-display text-base font-bold tracking-tight text-white hover:opacity-80 transition"
            >
              Biamtiero<span className="text-sky-400">.</span>
            </a>
            <a
              href="#beranda"
              onClick={onNavigateHome}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-white/70 hover:text-white transition"
            >
              <span>←</span>
              <span className="underline underline-offset-4">Index</span>
            </a>
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

            <button
              type="button"
              onClick={handleCopyEmail}
              className="glass-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-white/85 hover:text-white hover:bg-white/10 transition cursor-pointer"
              title="Salin email ke clipboard"
            >
              {copiedEmail ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Email disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 opacity-60" />
                  <span>Contact</span>
                </>
              )}
            </button>

            {/* Atmosphere Tone Switcher */}
            <button
              type="button"
              onClick={() => setAtmosphere((prev) => (prev === 'sapphire' ? 'emerald' : 'sapphire'))}
              className="glass-pill inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-white/80 hover:text-white hover:bg-white/10 transition cursor-pointer"
              title="Ganti nuansa pendaran 3D"
            >
              <span
                className={`h-2 w-2 rounded-full transition-colors ${
                  atmosphere === 'sapphire' ? 'bg-sky-400 shadow-[0_0_8px_#38bdf8]' : 'bg-emerald-400 shadow-[0_0_8px_#34d399]'
                }`}
              />
              <span className="hidden md:inline">
                {atmosphere === 'sapphire' ? 'Sapphire Glow' : 'Emerald Glow'}
              </span>
            </button>
          </div>
        </div>

        {/* 2. CENTER SECTION: ARCHITECTURAL DISPLAY HEADLINE & SUBTITLE */}
        <div className="my-auto py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Headline & Story */}
            <div className="lg:col-span-7 space-y-6">
              {/* Section Badge */}
              <div
                className={`glass-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 ${
                  isVisible ? 'reveal-fade-active' : 'opacity-0'
                }`}
                style={{ animationDelay: '0.08s' }}
              >
                <Sparkles className="h-3.5 w-3.5 text-sky-400" />
                <span>01 // ABOUT ME</span>
              </div>

              {/* Display Headline */}
              <div className="overflow-hidden">
                <h2
                  className={`font-display text-[clamp(2.25rem,5vw,4rem)] font-bold tracking-[-0.035em] leading-[1.08] text-white ${
                    isVisible ? 'reveal-title-active' : 'opacity-0'
                  }`}
                  style={{ animationDelay: '0.14s' }}
                >
                  Membangun arsitektur yang tangguh{' '}
                  <span className="font-light text-slate-300">
                    dengan pengalaman digital yang berjiwa.
                  </span>
                </h2>
              </div>

              {/* Pure Personal Story (No Technical Skills List) */}
              <div
                className={`type-prose space-y-4 text-slate-200/90 ${
                  isVisible ? 'reveal-fade-active' : 'opacity-0'
                }`}
                style={{ animationDelay: '0.24s' }}
              >
                <p>
                  Halo, saya <strong className="font-semibold text-white">Biamtiero Amiral Kalman</strong>. 
                  Saya seorang Full-Stack Developer &amp; Creative Technologist asal Indonesia yang mendedikasikan 
                  waktu untuk merancang dan membangun produk digital dari gagasan awal hingga siap beroperasi di skala nyata.
                </p>
                <p className="text-slate-300/80">
                  Saya memandang teknologi bukan sekadar kumpulan kode, melainkan medium pemecahan masalah manusia. 
                  Dari arsitektur backend yang aman dan efisien, hingga interaksi 3D spasial di peramban yang terasa luwes dan responsif — 
                  setiap detail dibangun dengan kehati-hatian, presisi, dan integritas tinggi.
                </p>
              </div>

              {/* Direct Actions */}
              <div
                className={`flex flex-wrap items-center gap-3 pt-2 ${
                  isVisible ? 'reveal-fade-active' : 'opacity-0'
                }`}
                style={{ animationDelay: '0.30s' }}
              >
                <a
                  href="#kontak"
                  onClick={onNavigateContact}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Mulai Diskusi Proyek</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                {onOpenWorks && (
                  <button
                    type="button"
                    onClick={(e) => onOpenWorks(e)}
                    className="glass-pill inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    <span>Lihat Hasil Karya</span>
                    <ArrowUpRight className="h-4 w-4 text-sky-300" />
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: 3D Portrait Space */}
            <div className="lg:col-span-5 pointer-events-none min-h-[140px] lg:min-h-[380px]" />
          </div>
        </div>

        {/* 3. BOTTOM BENTO GRID: PERSONAL SNAPSHOTS & AVAILABILITY (NO SKILLS) */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-white/10 ${
            isVisible ? 'reveal-fade-active' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.36s' }}
        >
          {/* Card 1: Domisili */}
          <div className="glass-pill rounded-2xl p-5 backdrop-blur-md">
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-sky-300/80">
              <MapPin className="h-4 w-4" />
              <span>Domisili</span>
            </div>
            <div className="mt-2.5 text-sm sm:text-base font-semibold text-white">
              Indonesia (UTC+7)
            </div>
            <p className="mt-1 text-xs text-slate-300/70">
              Terbuka untuk remote &amp; kolaborasi global tanpa batas wilayah.
            </p>
          </div>

          {/* Card 2: Latar Belakang */}
          <div className="glass-pill rounded-2xl p-5 backdrop-blur-md">
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-sky-300/80">
              <GraduationCap className="h-4 w-4" />
              <span>Latar Belakang</span>
            </div>
            <div className="mt-2.5 text-sm sm:text-base font-semibold text-white">
              S1 Teknik Informatika
            </div>
            <p className="mt-1 text-xs text-slate-300/70">
              3+ tahun berfokus pada rekayasa web, arsitektur data, dan pengalaman interaktif.
            </p>
          </div>

          {/* Card 3: Prinsip Kerja */}
          <div className="glass-pill rounded-2xl p-5 backdrop-blur-md">
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-sky-300/80">
              <Code2 className="h-4 w-4" />
              <span>Prinsip Karya</span>
            </div>
            <div className="mt-2.5 text-sm sm:text-base font-semibold text-white">
              Presisi &amp; Skalabilitas
            </div>
            <p className="mt-1 text-xs text-slate-300/70">
              Struktur modular, kode bersih, dan performa tinggi yang tahan uji waktu.
            </p>
          </div>

          {/* Card 4: Status Ketersediaan */}
          <div className="glass-pill rounded-2xl p-5 backdrop-blur-md">
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              <Clock className="h-4 w-4" />
              <span>Status Ketersediaan</span>
            </div>
            <div className="mt-2.5 flex items-center gap-2 text-sm sm:text-base font-semibold text-white">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
              <span>Open for Projects — 2026</span>
            </div>
            <p className="mt-1 text-xs text-slate-300/70">
              Siap berkolaborasi untuk mewujudkan ide produk digital Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SegermanAboutSection;
