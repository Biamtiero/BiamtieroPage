import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Check, Copy, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from './data/portfolioData';

// ============================================================================
// RAPHAEL SEGERMAN (segerman.mp4) COSMIC 3D ABOUT SECTION
// - Pure Dark Cosmic Experience (No jarring/absurd white mode)
// - Real-time 3D Procedural Terrain Planet with Fresnel Atmospheric Rim Glow
// - Real-time 3D Curved Floating Portrait Lens (/hero-biamtiero.jpg) with Mouse Parallax
// - Purely "Tentang Saya" (No skills list) & Effortless Reading Comfort
// ============================================================================

const PLANET_VERTEX_SHADER = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vWorldPos;

  uniform float uTime;
  uniform float uTerrainScale;
  uniform float uTerrainHeight;
  uniform vec3 uMouseWorld;
  uniform float uMouseRadius;
  uniform float uMouseStrength;

  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

  float snoise(vec3 v){
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 1.0/7.0;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  float terrain(vec3 p) {
    float n = 0.0;
    float amp = 1.0;
    float freq = 1.0;
    for (int i = 0; i < 4; i++) {
      n += snoise(p * freq + uTime * 0.08) * amp;
      freq *= 1.65;
      amp *= 0.5;
    }
    return n;
  }

  void main() {
    vUv = uv;
    vec3 n = normalize(normal);
    float t = terrain(n * uTerrainScale);

    vec3 worldPos = (modelMatrix * vec4(position, 1.0)).xyz;
    float mouseDist = distance(normalize(worldPos), normalize(uMouseWorld));
    float mouseInfluence = smoothstep(uMouseRadius, 0.0, mouseDist);

    float disp = t * uTerrainHeight + mouseInfluence * uMouseStrength;
    vec3 newPos = position + n * disp;

    float eps = 0.02;
    vec3 tangent = normalize(cross(n, vec3(0.0, 1.0, 0.001)));
    vec3 bitangent = normalize(cross(n, tangent));
    float tR = terrain((n + tangent * eps) * uTerrainScale) * uTerrainHeight;
    float tU = terrain((n + bitangent * eps) * uTerrainScale) * uTerrainHeight;
    vec3 dP = normalize(n - tangent * (tR - t * uTerrainHeight) * 0.35 - bitangent * (tU - t * uTerrainHeight) * 0.35);

    vNormal = normalize(normalMatrix * dP);
    vWorldPos = (modelMatrix * vec4(newPos, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
  }
`;

const PLANET_FRAGMENT_SHADER = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vWorldPos;

  uniform vec3 uBodyColor;
  uniform vec3 uLightColor;
  uniform vec3 uDarkColor;
  uniform float uRimPow;
  uniform float uGlowPow;
  uniform float uGlowStr;
  uniform float uRimStr;
  uniform float uGlowBiasX;
  uniform float uGlowBiasY;

  void main() {
    vec3 viewDir = normalize(cameraPosition - vWorldPos);
    vec3 n = normalize(vNormal);

    float NdotV = max(dot(n, viewDir), 0.0);
    float fresnel = 1.0 - NdotV;

    float rim = pow(fresnel, uRimPow);
    float glow = pow(fresnel, uGlowPow);

    vec3 biasedNormal = normalize(n + vec3(uGlowBiasX, uGlowBiasY, 0.0));
    float biasedNdotV = max(dot(biasedNormal, viewDir), 0.0);
    float biasGlow = pow(1.0 - biasedNdotV, 5.5);

    float warmth = n.y * 0.5 + 0.5;
    vec3 rimColor = mix(uDarkColor, uLightColor, smoothstep(0.25, 0.95, warmth));

    vec3 corona = rimColor * glow * uGlowStr;
    corona += rimColor * rim * uRimStr;
    corona += uLightColor * biasGlow * 1.35;

    vec3 lightDir = normalize(vec3(0.65, 0.45, 0.6));
    float diff = max(dot(n, lightDir), 0.0);
    vec3 surface = uBodyColor + mix(uDarkColor, uLightColor, 0.5) * diff * 0.22;

    vec3 col = surface + corona;
    gl_FragColor = vec4(col, 1.0);
  }
`;

const PORTRAIT_VERTEX_SHADER = `
  varying vec2 vUv;
  uniform float uCurveStrength;

  void main() {
    vUv = uv;
    vec3 pos = position;
    vec2 ndc = (uv - 0.5) * 2.0;
    float r2 = dot(ndc, ndc);
    pos.z -= r2 * uCurveStrength;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const PORTRAIT_FRAGMENT_SHADER = `
  varying vec2 vUv;
  uniform sampler2D tMap;

  void main() {
    vec2 uv = vUv;
    vec2 d = uv - 0.5;
    float dist = length(d);
    float shift = dist * 0.003;

    float r = texture2D(tMap, uv + d * shift).r;
    float g = texture2D(tMap, uv).g;
    float b = texture2D(tMap, uv - d * shift).b;

    vec3 col = vec3(r, g, b);
    // Subtle contrast & clarity boost
    col = pow(col, vec3(0.96)) * 1.04;

    // Soft vignette at extreme edges
    float vig = smoothstep(0.98, 0.42, dist);
    col = mix(col * vec3(0.7, 0.85, 1.1), col, vig);

    gl_FragColor = vec4(col, 1.0);
  }
`;

interface SegermanAboutSectionProps {
  revealKey?: number;
  onNavigateHome?: (e: React.MouseEvent) => void;
  onOpenWorks?: (e: React.MouseEvent) => void;
}

export const SegermanAboutSection: React.FC<SegermanAboutSectionProps> = ({
  revealKey = 0,
  onNavigateHome,
  onOpenWorks,
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const backCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [animCycle, setAnimCycle] = useState<number>(0);
  const [atmosphere, setAtmosphere] = useState<'sapphire' | 'aurora'>('sapphire');

  const stateRef = useRef<{
    normX: number;
    normY: number;
    entryBoost: number;
    atmosphere: 'sapphire' | 'aurora';
  }>({
    normX: 0,
    normY: 0,
    entryBoost: 0,
    atmosphere: 'sapphire',
  });

  useEffect(() => {
    stateRef.current.atmosphere = atmosphere;
  }, [atmosphere]);

  // Trigger choreographed entrance when revealKey increments (clicked from Hero)
  useEffect(() => {
    if (revealKey > 0) {
      setIsVisible(true);
      setAnimCycle((c) => c + 1);
      stateRef.current.entryBoost = 1.0;
    }
  }, [revealKey]);

  // Trigger entrance when user scrolls into the About section
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            setAnimCycle((c) => c + 1);
            stateRef.current.entryBoost = 1.0;
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isVisible]);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(PORTFOLIO_DATA.profile.email).catch(() => {});
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  useEffect(() => {
    const section = sectionRef.current;
    const backCanvas = backCanvasRef.current;
    if (!section || !backCanvas) return;

    let width = section.clientWidth || window.innerWidth;
    let height = section.clientHeight || window.innerHeight;

    const renderer = new THREE.WebGLRenderer({
      canvas: backCanvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x020412, 1);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020412, 0.0042);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 0, 110);

    // --- A. Starfield & Cosmic Dust Particles ---
    const starCount = 1600;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const coldStar = new THREE.Color('#93c5fd');
    const warmStar = new THREE.Color('#fde68a');
    const cyanDust = new THREE.Color('#38bdf8');

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      starPositions[i3] = (Math.random() - 0.5) * 340;
      starPositions[i3 + 1] = (Math.random() - 0.5) * 220;
      starPositions[i3 + 2] = -20 - Math.random() * 140;

      const mixFactor = Math.random();
      const c = mixFactor < 0.72 ? coldStar : mixFactor < 0.9 ? warmStar : cyanDust;
      starColors[i3] = c.r;
      starColors[i3 + 1] = c.g;
      starColors[i3 + 2] = c.b;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 1.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const starPoints = new THREE.Points(starGeo, starMat);
    scene.add(starPoints);

    // --- B. 3D Procedural Terrain Planet (Segerman Info.js style) ---
    const planetUniforms = {
      uTime: { value: 0 },
      uTerrainScale: { value: 3.9 },
      uTerrainHeight: { value: 1.15 },
      uMouseWorld: { value: new THREE.Vector3(0, 0, 100) },
      uMouseRadius: { value: 0.85 },
      uMouseStrength: { value: 2.2 },
      uBodyColor: { value: new THREE.Color('#010510') },
      uLightColor: { value: new THREE.Color('#81aeca') },
      uDarkColor: { value: new THREE.Color('#2c5aa0') },
      uRimPow: { value: 3.8 },
      uGlowPow: { value: 1.65 },
      uGlowStr: { value: 0.88 },
      uRimStr: { value: 1.18 },
      uGlowBiasX: { value: 0.55 },
      uGlowBiasY: { value: 0.15 },
    };

    const planetGeo = new THREE.SphereGeometry(46, 96, 96);
    const planetMat = new THREE.ShaderMaterial({
      vertexShader: PLANET_VERTEX_SHADER,
      fragmentShader: PLANET_FRAGMENT_SHADER,
      uniforms: planetUniforms,
    });
    const planetMesh = new THREE.Mesh(planetGeo, planetMat);
    planetMesh.position.set(-28, -24, -18);
    scene.add(planetMesh);

    // Atmospheric Outer Halo behind Planet
    const haloGeo = new THREE.PlaneGeometry(170, 170);
    const haloCanvas = document.createElement('canvas');
    haloCanvas.width = 256;
    haloCanvas.height = 256;
    const hCtx = haloCanvas.getContext('2d')!;
    const grad = hCtx.createRadialGradient(128, 128, 18, 128, 128, 128);
    grad.addColorStop(0, 'rgba(129, 174, 202, 0.44)');
    grad.addColorStop(0.45, 'rgba(67, 110, 177, 0.18)');
    grad.addColorStop(1, 'rgba(2, 4, 18, 0)');
    hCtx.fillStyle = grad;
    hCtx.fillRect(0, 0, 256, 256);

    const haloTex = new THREE.CanvasTexture(haloCanvas);
    const haloMat = new THREE.MeshBasicMaterial({
      map: haloTex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    haloMesh.position.set(-24, -20, -32);
    scene.add(haloMesh);

    // --- C. Curved 3D Floating Portrait Mesh (/hero-biamtiero.jpg) ---
    const portraitGroup = new THREE.Group();
    portraitGroup.position.set(27, 8, 12);
    portraitGroup.rotation.set(0.018, -0.36, 0);
    scene.add(portraitGroup);

    const portraitUniforms = {
      tMap: { value: new THREE.Texture() },
      uCurveStrength: { value: 3.2 },
    };

    const texLoader = new THREE.TextureLoader();
    texLoader.load('/hero-biamtiero.jpg', (tex) => {
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.needsUpdate = true;
      portraitUniforms.tMap.value = tex;
    });

    // Portrait aspect ratio so suit & face look natural and sharp in 3D space
    const portraitGeo = new THREE.PlaneGeometry(38, 28, 48, 32);
    const portraitMat = new THREE.ShaderMaterial({
      vertexShader: PORTRAIT_VERTEX_SHADER,
      fragmentShader: PORTRAIT_FRAGMENT_SHADER,
      uniforms: portraitUniforms,
      side: THREE.DoubleSide,
    });
    const portraitMesh = new THREE.Mesh(portraitGeo, portraitMat);
    portraitGroup.add(portraitMesh);

    const onPointerMove = (e: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      stateRef.current.normX = (x / width) * 2 - 1;
      stateRef.current.normY = -(y / height) * 2 + 1;
    };

    section.addEventListener('pointermove', onPointerMove);

    const handleResize = () => {
      if (!section) return;
      width = section.clientWidth || window.innerWidth;
      height = section.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      if (width < 900) {
        portraitGroup.position.set(0, 5, 2);
        portraitGroup.rotation.set(0, -0.14, 0);
        planetMesh.position.set(-10, -28, -25);
      } else {
        portraitGroup.position.set(27, 8, 12);
        portraitGroup.rotation.set(0.018, -0.36, 0);
        planetMesh.position.set(-28, -24, -18);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const raycaster = new THREE.Raycaster();
    const mouseN = new THREE.Vector2();

    const targetLightSapphire = new THREE.Color('#81aeca');
    const targetDarkSapphire = new THREE.Color('#2c5aa0');
    const targetLightAurora = new THREE.Color('#6ee7b7');
    const targetDarkAurora = new THREE.Color('#0284c7');

    let rafId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const state = stateRef.current;

      // Smooth exponential decay of entry flight (Segerman Le.animate() 2.3s orbital sweep)
      state.entryBoost *= 0.945;
      const flight = state.entryBoost; // 1.0 at click -> 0.0 at rest

      // Smoothly interpolate planet corona colors based on atmosphere toggle
      const isAurora = state.atmosphere === 'aurora';
      planetUniforms.uLightColor.value.lerp(
        isAurora ? targetLightAurora : targetLightSapphire,
        0.05
      );
      planetUniforms.uDarkColor.value.lerp(
        isAurora ? targetDarkAurora : targetDarkSapphire,
        0.05
      );

      planetUniforms.uTime.value = elapsed;
      // Surges procedural terrain mountains during orbital flight (3.1 -> 1.15)
      planetUniforms.uTerrainHeight.value = 1.15 + flight * 1.95;

      // 3D Planet Orbital Sweep across space (from right-side Home orbit to left-side About orbit)
      const restPlanetX = width < 900 ? -10 : -28;
      const restPlanetY = width < 900 ? -28 : -24;
      const restPlanetZ = width < 900 ? -25 : -18;
      planetMesh.position.set(
        restPlanetX + flight * 72,
        restPlanetY + flight * 14,
        restPlanetZ - flight * 22
      );
      const planetScale = 1.0 - flight * 0.28;
      planetMesh.scale.setScalar(planetScale);

      planetMesh.rotation.y =
        elapsed * 0.065 + state.normX * 0.18 + flight * 1.35;
      planetMesh.rotation.x = state.normY * 0.1 + flight * 0.25;

      starPoints.rotation.y = elapsed * 0.01 + flight * 0.32;
      starPoints.rotation.x = elapsed * 0.005;

      // 3D Curved Portrait Lens Flight & Curvature Un-warp (uCurveStrength: 9.2 -> 3.2)
      const restPortraitX = width < 900 ? 0 : 27;
      const restPortraitY = width < 900 ? 5 : 8;
      const restPortraitZ = width < 900 ? 2 : 12;
      portraitGroup.position.set(
        restPortraitX + flight * 18,
        restPortraitY - flight * 22,
        restPortraitZ - flight * 34
      );
      portraitUniforms.uCurveStrength.value = 3.2 + flight * 6.0;

      // Smooth 3D lens tilt on Biamtiero's portrait following cursor
      const targetRotY =
        (width < 900 ? -0.14 : -0.36) - state.normX * 0.12 - flight * 0.45;
      const targetRotX = 0.018 - state.normY * 0.065 + flight * 0.18;
      portraitGroup.rotation.y += (targetRotY - portraitGroup.rotation.y) * 0.065;
      portraitGroup.rotation.x += (targetRotX - portraitGroup.rotation.x) * 0.065;

      // Interactive terrain bulge when cursor passes over the 3D planet
      mouseN.set(state.normX, state.normY);
      raycaster.setFromCamera(mouseN, camera);
      const hits = raycaster.intersectObject(planetMesh);
      if (hits.length > 0) {
        planetUniforms.uMouseWorld.value.lerp(hits[0].point, 0.12);
      }

      renderer.render(scene, camera);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      section.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section
      id="tentang"
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#020412] text-white select-none"
    >
      {/* ====================================================================
          REAL-TIME WEBGL COSMIC UNIVERSE, 3D PLANET & CURVED 3D PORTRAIT LENS
      ==================================================================== */}
      <canvas
        ref={backCanvasRef}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      />

      {/* Soft Reading Gradient Overlay so Left-Side Typography is 100% Crisp & Comfortable */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(90deg, rgba(2,4,18,0.82) 0%, rgba(2,4,18,0.48) 52%, rgba(2,4,18,0.12) 100%), linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(2,4,18,0.0) 20%, rgba(2,4,18,0.0) 78%, rgba(2,4,18,0.85) 100%)',
        }}
      />

      {/* ====================================================================
          MAIN CONTENT OVERLAY (PURELY ABOUT ME — ZERO SKILLS LIST)
      ==================================================================== */}
      <div
        key={`cosmic-${animCycle}`}
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col justify-between px-6 py-8 sm:px-12 sm:py-10"
      >
        {/* 1. TOP BAR (Segerman Layout: Name + Index Left, Contact + Atmosphere Toggle Right) */}
        <div
          className={`flex items-center justify-between ${
            isVisible ? 'reveal-fade-active' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.15s' }}
        >
          <div className="flex items-center gap-12 sm:gap-24">
            <a
              href="#beranda"
              onClick={onNavigateHome}
              className="text-[15px] font-medium tracking-[-0.01em] text-white hover:opacity-75 transition"
            >
              {PORTFOLIO_DATA.profile.name}
            </a>
            <a
              href="#beranda"
              onClick={onNavigateHome}
              className="hidden sm:inline-flex items-center gap-2 text-[15px] font-medium text-white/75 hover:text-white transition"
            >
              <span>←</span>
              <span className="underline underline-offset-4">Index</span>
            </a>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            {onOpenWorks && (
              <button
                type="button"
                onClick={(e) => onOpenWorks(e)}
                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-sky-300/95 hover:text-white transition cursor-pointer"
              >
                <span>Projects</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            )}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 text-[14px] font-medium text-white/85 hover:text-white transition cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Email copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 opacity-60" />
                  <span>Contact</span>
                </>
              )}
            </button>

            {/* Segerman Eclipse Button: Switches Cosmic Corona Atmosphere (Sapphire vs Aurora) */}
            <button
              type="button"
              onClick={() =>
                setAtmosphere((prev) => (prev === 'sapphire' ? 'aurora' : 'sapphire'))
              }
              title="Ubah warna atmosfer planet (Sapphire / Aurora)"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md transition hover:border-sky-300/40 hover:bg-white/10 cursor-pointer"
            >
              <svg
                viewBox="-2 -2 104 104"
                className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45"
                aria-hidden="true"
              >
                <mask id="segerman-eclipse-mask">
                  <rect x="-2" y="-2" width="104" height="104" fill="#fff" />
                  <circle
                    cx={atmosphere === 'sapphire' ? '65' : '38'}
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
                  fill="#ffffff"
                  mask="url(#segerman-eclipse-mask)"
                />
              </svg>
              <span className="hidden sm:inline">
                {atmosphere === 'sapphire' ? 'Sapphire Orbit' : 'Aurora Orbit'}
              </span>
            </button>
          </div>
        </div>

        {/* 2. MIDDLE ROW: GIANT UPPERCASE DISPLAY TITLE ("ABOUT") + 3D PORTRAIT CAPTION */}
        <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-8 pb-6">
          <div className="lg:col-span-7 pointer-events-none">
            <div className="overflow-hidden pb-2">
              <h2
                className={`font-display uppercase tracking-[-0.02em] text-white select-none ${
                  isVisible ? 'reveal-title-active' : 'opacity-0'
                }`}
                style={{
                  fontSize: 'clamp(4.2rem, 11vw, 12.2rem)',
                  lineHeight: 0.84,
                  fontWeight: 800,
                  animationDelay: '0.08s',
                }}
              >
                ABOUT
              </h2>
            </div>
            <p
              className={`mt-5 max-w-md text-[17px] sm:text-[19px] font-medium leading-[1.48] text-sky-200/90 ${
                isVisible ? 'reveal-fade-active' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.22s' }}
            >
              Mengubah kompleksitas menjadi pengalaman digital yang presisi, tenang, dan manusiawi.
            </p>
          </div>

          {/* Right side houses the floating 3D Curved Portrait Mesh rendered in WebGL */}
          <div className="lg:col-span-5 pointer-events-none" />
        </div>

        {/* 3. BOTTOM ROW: COMFORTABLE PERSONAL BIO (LEFT) + PERSONAL PROFILE INFO (RIGHT, NO SKILLS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pt-4">
          {/* Left: Pure Personal Story in Clean, Comfortable Typography */}
          <div className="lg:col-span-7 space-y-5 max-w-[620px]">
            <p
              className={`text-[17px] sm:text-[19px] font-normal leading-[1.72] text-white/95 drop-shadow-sm ${
                isVisible ? 'reveal-fade-active' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.28s' }}
            >
              Halo, saya <strong className="font-semibold text-sky-300">Biamtiero Amiral Kalman</strong>. Saya seorang pengembang perangkat lunak berbasis di Indonesia yang senang merancang dan membangun produk digital dari nol hingga siap digunakan banyak orang.
            </p>
            <p
              className={`text-[17px] sm:text-[19px] font-normal leading-[1.72] text-white/80 drop-shadow-sm ${
                isVisible ? 'reveal-fade-active' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.38s' }}
            >
              Bagi saya, teknologi yang baik adalah teknologi yang terasa sederhana dan nyaman saat digunakan. Saya selalu memulai setiap pekerjaan dengan memahami masalah secara menyeluruh, lalu menyusun solusi yang bersih, terstruktur, dan tahan uji waktu.
            </p>
          </div>

          {/* Right: Personal Profile Metadata Only (No Skills / Tech Stack) */}
          <div
            className={`lg:col-span-5 flex flex-col justify-between gap-8 ${
              isVisible ? 'reveal-fade-active' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.46s' }}
          >
            <div className="grid grid-cols-2 gap-8 text-[15px] leading-[1.6]">
              <div>
                <div className="mb-1.5 text-white/45 font-medium">Domisili</div>
                <div className="text-white/95 font-semibold">Indonesia (UTC+7)</div>
                <div className="text-white/75">Remote &amp; Kolaborasi Global</div>
              </div>
              <div>
                <div className="mb-1.5 text-white/45 font-medium">Latar Belakang</div>
                <div className="text-white/95 font-semibold">S1 Teknik Informatika</div>
                <div className="text-white/75">3+ Tahun Berkarya</div>
              </div>
            </div>

            <div className="flex flex-wrap items-end justify-between gap-6 pt-4 border-t border-white/15 text-[14px]">
              <div className="flex flex-wrap items-end gap-10 sm:gap-14">
                <div>
                  <div className="mb-1 text-white/45 font-medium">Contact</div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="font-medium text-white hover:text-sky-300 transition cursor-pointer"
                  >
                    {PORTFOLIO_DATA.profile.email}
                  </button>
                </div>
                <div>
                  <div className="mb-1 text-white/45 font-medium">Status</div>
                  <div className="inline-flex items-center gap-2 font-medium text-white">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                    <span>Open for Projects — 2026</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-medium text-white/70">
                <a
                  href={PORTFOLIO_DATA.profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-0.5 hover:text-white transition"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
                <a
                  href={PORTFOLIO_DATA.profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-0.5 hover:text-white transition"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
                <span>© 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
