import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  Check,
  Copy,
} from 'lucide-react';
import { PORTFOLIO_DATA, ProjectShowcase } from './data/portfolioData';

interface JesperWorksPageProps {
  onNavigateToSection: (
    targetId: 'beranda' | 'tentang' | 'kontak',
    e?: React.MouseEvent
  ) => void;
}

interface CardScreenRect {
  left: number;
  top: number;
  width: number;
  height: number;
}

// ============================================================================
// AUTHENTIC JESPER LANDBERG (jesperlandberg-2.mp4 / jesperlandberg.com) SHADERS
// - Exact S-curve + Gaussian tail ribbon formula (`sheetShape`, `sheetRoll`, `sheetWind`)
// - Analytical surface normals & trough shading (`sheetShade`)
// - Hover dome dent (`sheetDome`)
// - Card-to-White-Sheet morph (`uSheetP`, `uWhite`) when a project card is clicked
// - Perspective wireframe floor grid with soft card reflections
// ============================================================================

const CARD_VERTEX_SHADER = /* glsl */ `
  uniform float uScrollOffset;
  uniform float uCardBaseX;
  uniform float uTotalWidth;
  uniform float uVelocity;
  uniform float uTime;
  uniform float uHover;
  uniform float uSheetP;     // 1.0 = on 3D S-curve ribbon, 0.0 = flat
  uniform float uWhite;      // 0.0 = artwork card, 1.0 = white pill/sheet
  uniform float uIntroP;     // 0.0 = small horizontal white bar in center, 1.0 = full 3D card on ribbon
  uniform vec2 uIntroBarPos; // Starting center X,Y of the small white boot bar

  varying vec2 vUv;
  varying float vWorldX;
  varying float vWaveZ;
  varying float vSlope;

  #define PI 3.14159265359
  #define SHEET_TAIL 0.38
  #define SHEET_BANK 0.24
  #define SHEET_DIAG -0.042
  #define SHEET_WAVE 0.065

  // Jesper Landberg's exact S-curve with Gaussian tail
  float sheetShape(float q) {
    return sin(PI * q) * exp(-SHEET_TAIL * q * q);
  }

  float sheetShapeSlope(float q) {
    float g = exp(-SHEET_TAIL * q * q);
    return (PI * cos(PI * q) - 2.0 * SHEET_TAIL * q * sin(PI * q)) * g;
  }

  float sheetDome(vec2 uv) {
    vec2 q = uv * 2.0 - 1.0;
    return (1.0 - q.x * q.x) * (1.0 - q.y * q.y);
  }

  void main() {
    vUv = uv;

    // Wrap card center X infinitely within [-uTotalWidth/2, uTotalWidth/2]
    float halfSpan = uTotalWidth * 0.5;
    float wrappedCenterX = mod(uCardBaseX - uScrollOffset + halfSpan, uTotalWidth) - halfSpan;

    // Morph geometry scale from small horizontal pill bar (width 0.14, height 0.032) -> full 3D card (1.0, 1.0)
    vec3 barPos = vec3(
      uIntroBarPos.x + position.x * 0.135,
      uIntroBarPos.y + position.y * 0.032,
      0.0
    );

    vec3 pos = position;
    float worldX = wrappedCenterX + pos.x;
    vWorldX = worldX;

    // Normalized viewport width coordinate q
    float sheetW = 6.2;
    float q = worldX / sheetW;
    float slope = sheetShapeSlope(q);
    vSlope = slope;

    float activeRibbon = uSheetP * uIntroP;

    // 1. Ribbon Roll (sheetWind): roll (y, z) around the ribbon centreline (y=0, z=0)
    float rollAngle = SHEET_BANK * (slope / PI) * activeRibbon;
    // Velocity edge twist on top of resting bank
    float dynVel = clamp(uVelocity, -2.0, 2.0);
    rollAngle += 0.14 * dynVel * smoothstep(0.25, 0.9, abs(q)) * sign(q) * activeRibbon;

    float s = sin(rollAngle);
    float c = cos(rollAngle);
    float wy = pos.y * c;
    float wz = pos.y * s;

    // 2. Primary S-Curve Depth Sweep (sheetZ)
    float depthAmp = 1.18 * (1.0 + 0.22 * abs(dynVel));
    wz += -depthAmp * sheetShape(q) * activeRibbon;

    // 3. Diagonal slope & vertical wave (AFTER the wind, just like Jesper's sheet())
    wy += SHEET_DIAG * worldX * activeRibbon;
    wy += SHEET_WAVE * sheetW * sin(PI * (q * 0.85 + 0.18)) * activeRibbon;

    // 4. Velocity rear-up on the left side during scroll
    float leftMask = 1.0 - smoothstep(-1.0, 0.3, q);
    wy += 0.05 * sheetW * abs(dynVel) * leftMask * activeRibbon;
    wz += 0.08 * sheetW * abs(dynVel) * leftMask * activeRibbon;

    // 5. Hover dome dent (pushes center of hovered card subtly like a tactile membrane)
    float dome = sheetDome(uv);
    wz -= uHover * 0.16 * dome * activeRibbon;

    vWaveZ = wz;

    vec3 landedWorldPos = vec3(worldX, wy, wz);
    vec3 finalWorldPos = mix(barPos, landedWorldPos, uIntroP);
    gl_Position = projectionMatrix * viewMatrix * vec4(finalWorldPos, 1.0);
  }
`;

const CARD_FRAGMENT_SHADER = /* glsl */ `
  uniform sampler2D uTexture;
  uniform float uHover;
  uniform float uSheetP;
  uniform float uWhite;
  uniform float uIntroP;
  uniform float uAlpha;

  varying vec2 vUv;
  varying float vWorldX;
  varying float vWaveZ;
  varying float vSlope;

  float sdRoundedBox(vec2 p, vec2 b, float r) {
    vec2 q = abs(p) - b + r;
    return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
  }

  void main() {
    // Morph aspect & corner radius from a fully-rounded pill bar (uIntroP = 0) to 16:9.5 card (uIntroP = 1)
    vec2 aspect = mix(vec2(4.2, 1.0), vec2(1.72, 1.0), uIntroP);
    vec2 p = (vUv - 0.5) * aspect;
    vec2 halfSize = aspect * 0.5;
    float cornerRadius = mix(0.48, 0.058, uIntroP);

    float d = sdRoundedBox(p, halfSize, cornerRadius);
    float aa = max(fwidth(d), 0.003);
    float mask = 1.0 - smoothstep(-aa, aa, d);
    if (mask < 0.01) discard;

    vec4 texColor = texture2D(uTexture, vUv);

    // Trough shading & analytical specular sheen across the S-curve wave
    float troughShade = clamp(0.88 + vWaveZ * 0.16, 0.58, 1.08);
    float gloss = pow(clamp(1.0 - abs(vSlope) * 0.28, 0.0, 1.0), 4.0) * 0.05 * uSheetP;

    vec3 cardRgb = texColor.rgb * mix(1.0, troughShade, uSheetP) + vec3(gloss);

    // Starts pure white as the 3 boot bars (1.0 - uIntroP), and also turns pure white when clicked into the detail sheet (uWhite)!
    float whiteMix = clamp(max(1.0 - pow(uIntroP, 0.75), uWhite), 0.0, 1.0);
    vec3 finalRgb = mix(cardRgb, vec3(1.0), whiteMix);

    gl_FragColor = vec4(finalRgb, mask * uAlpha);
  }
`;

const FLOOR_GRID_VERTEX_SHADER = /* glsl */ `
  varying vec3 vWorldPos;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPos = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

const FLOOR_GRID_FRAGMENT_SHADER = /* glsl */ `
  uniform float uScrollOffset;
  uniform float uFloorAlpha;
  uniform vec3 uActiveAccent;

  varying vec3 vWorldPos;
  varying vec2 vUv;

  void main() {
    if (uFloorAlpha < 0.005) discard;

    vec2 coord = vec2(vWorldPos.x + uScrollOffset * 0.9, vWorldPos.z);

    // Crisp architectural wireframe grid cells (Jesper Landberg floor)
    vec2 grid = abs(fract(coord * 0.48 - 0.5) - 0.5) / fwidth(coord * 0.48);
    float line = min(grid.x, grid.y);
    float gridMask = 1.0 - min(line, 1.0);

    // Distance fade into pitch-black horizon
    float dist = length(vec2(vWorldPos.x * 0.052, (vWorldPos.z + 1.2) * 0.085));
    float fade = pow(clamp(1.0 - dist, 0.0, 1.0), 1.6);

    // Subtle soft reflection pool beneath the S-curve ribbon
    float reflPool = exp(-(vWorldPos.x * vWorldPos.x * 0.045 + (vWorldPos.z + 0.4) * (vWorldPos.z + 0.4) * 0.12));

    vec3 gridCol = mix(vec3(0.20, 0.20, 0.22), vec3(0.34, 0.35, 0.38), reflPool);
    float alpha = (gridMask * 0.52 + reflPool * 0.06) * fade * uFloorAlpha;

    gl_FragColor = vec4(gridCol, clamp(alpha, 0.0, 1.0));
  }
`;

// ============================================================================
// HIGH-RES CANVAS TEXTURE GENERATOR FOR 3D STRIP CARDS
// Matches Jesper Landberg (`jesper2.webp`):
// - Rich editorial visual artwork filling the card
// - Bottom-Left: Crisp Project Title (`NexaFlow`, `Lumina Commerce`, etc.)
// - Bottom-Right: Solid Black Circular Right-Arrow Badge (`→`)
// ============================================================================
const CARD_BACKDROP_IMAGES = [
  '/hero-warrior.jpg',
  '/hero-hands.jpg',
  '/hero-biamtiero.jpg',
];

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function renderCardCanvasTexture(
  project: ProjectShowcase,
  index: number,
  bgImage?: HTMLImageElement
): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  const W = 1600;
  const H = 930;
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  const shortTitle = project.title.split('—')[0].trim();
  const subtitle = project.title.split('—')[1]?.trim() || project.category;

  // Editorial Art Direction Palettes (Warm Gold/Sand like Casa Di Solare, Crisp Studio Light like The Lookback, Deep Sapphire, etc.)
  const editorialThemes: {
    bg0: string;
    bg1: string;
    bg2: string;
    serifTitle: boolean;
    lightTheme?: boolean;
  }[] = [
    { bg0: '#1c1510', bg1: '#5c3d28', bg2: '#120d0a', serifTitle: true },
    { bg0: '#d8dadf', bg1: '#b8bcc4', bg2: '#8c9099', serifTitle: false, lightTheme: true },
    { bg0: '#091526', bg1: '#16325c', bg2: '#050b14', serifTitle: true },
    { bg0: '#1f1124', bg1: '#4a1d54', bg2: '#0d0710', serifTitle: false },
    { bg0: '#0d211d', bg1: '#19473e', bg2: '#06110f', serifTitle: true },
    { bg0: '#21180b', bg1: '#523916', bg2: '#120c05', serifTitle: false },
  ];
  const theme = editorialThemes[index % editorialThemes.length];

  const baseGrad = ctx.createLinearGradient(0, 0, W, H);
  baseGrad.addColorStop(0, theme.bg0);
  baseGrad.addColorStop(0.55, theme.bg1);
  baseGrad.addColorStop(1, theme.bg2);
  ctx.fillStyle = baseGrad;
  ctx.fillRect(0, 0, W, H);

  if (bgImage && bgImage.complete && bgImage.naturalWidth > 0) {
    ctx.save();
    ctx.globalAlpha = theme.lightTheme ? 0.22 : 0.42;
    const imgAspect = bgImage.naturalWidth / bgImage.naturalHeight;
    const canvasAspect = W / H;
    let drawW = W;
    let drawH = H;
    if (imgAspect > canvasAspect) {
      drawH = H;
      drawW = H * imgAspect;
    } else {
      drawW = W;
      drawH = W / imgAspect;
    }
    ctx.drawImage(bgImage, (W - drawW) * 0.5, (H - drawH) * 0.5, drawW, drawH);
    ctx.restore();
  }

  // Top miniature website header bar inside card (just like Casa Di Solare's "Intro  Weights  Test  Story" in jesper2.webp!)
  ctx.save();
  const topTextCol = theme.lightTheme ? 'rgba(15,15,18,0.72)' : 'rgba(255,255,255,0.72)';
  ctx.fillStyle = project.accentHex;
  ctx.beginPath();
  ctx.arc(54, 48, 7, 0, Math.PI * 2);
  ctx.fill();

  ctx.font = '500 18px Inter, sans-serif';
  ctx.fillStyle = topTextCol;
  ctx.fillText('Overview', 72, 54);
  ctx.fillStyle = theme.lightTheme ? 'rgba(15,15,18,0.45)' : 'rgba(255,255,255,0.45)';
  ctx.fillText('Architecture', 180, 54);
  ctx.fillText('Stack', 312, 54);
  ctx.fillText('Live Demo', 395, 54);

  // Center top brand caption inside card
  ctx.font = '500 20px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.fillStyle = topTextCol;
  ctx.fillText(shortTitle.toUpperCase(), W * 0.5, 54);

  // Top-right miniature pill inside card
  drawRoundedRect(ctx, W - 210, 30, 165, 36, 18);
  ctx.fillStyle = theme.lightTheme ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.12)';
  ctx.fill();
  ctx.font = '500 15px Inter, sans-serif';
  ctx.fillStyle = topTextCol;
  ctx.fillText(`${project.category.split(' ')[0]} · ${project.year}`, W - 127, 53);
  ctx.restore();

  // Center Monumental Editorial Display Artwork & Typography (like "Solare" + golden sphere in jesper2.webp)
  ctx.save();
  // Glowing architectural orb / centerpiece behind display typography
  const orbX = W * 0.5;
  const orbY = H * 0.56;
  const orbGrad = ctx.createRadialGradient(orbX - 30, orbY - 30, 15, orbX, orbY, 175);
  orbGrad.addColorStop(0, '#fde68a');
  orbGrad.addColorStop(0.55, project.accentHex);
  orbGrad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = orbGrad;
  ctx.beginPath();
  ctx.arc(orbX, orbY, 175, 0, Math.PI * 2);
  ctx.fill();

  // Architectural ring basin below orb
  ctx.strokeStyle = theme.lightTheme ? 'rgba(0,0,0,0.16)' : 'rgba(255,255,255,0.22)';
  ctx.lineWidth = 18;
  ctx.beginPath();
  ctx.ellipse(orbX, orbY + 115, 340, 68, 0, 0, Math.PI * 2);
  ctx.stroke();

  // Giant Center Display Wordmark
  ctx.textAlign = 'center';
  ctx.font = theme.serifTitle
    ? 'italic 400 215px "Instrument Serif", Georgia, serif'
    : '800 155px Syne, Inter, sans-serif';
  ctx.fillStyle = theme.lightTheme ? '#111318' : 'rgba(245, 242, 235, 0.92)';
  ctx.fillText(shortTitle, W * 0.5, H * 0.54);

  ctx.font = '400 24px Inter, sans-serif';
  ctx.fillStyle = theme.lightTheme ? 'rgba(17,19,24,0.68)' : 'rgba(255,255,255,0.72)';
  ctx.fillText(subtitle, W * 0.5, H * 0.62);
  ctx.restore();

  // Subtle Bottom Gradient so Bottom-Left Title & Bottom-Right Arrow Button Pop Cleanly
  const botGrad = ctx.createLinearGradient(0, H * 0.68, 0, H);
  botGrad.addColorStop(0, 'rgba(0,0,0,0)');
  botGrad.addColorStop(1, 'rgba(0,0,0,0.65)');
  ctx.fillStyle = botGrad;
  ctx.fillRect(0, H * 0.68, W, H * 0.32);

  // ==========================================================================
  // BOTTOM-LEFT PROJECT TITLE & BOTTOM-RIGHT BLACK CIRCLE ARROW (→)
  // Exact match to jesper2.webp!
  // ==========================================================================
  ctx.save();
  ctx.textAlign = 'left';
  ctx.font = '500 42px Inter, sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(shortTitle, 52, H - 46);

  // Bottom-Right Solid Black Circle with Crisp White Right Arrow (→)
  const btnX = W - 68;
  const btnY = H - 58;
  const btnR = 28;

  ctx.beginPath();
  ctx.arc(btnX, btnY, btnR, 0, Math.PI * 2);
  ctx.fillStyle = '#000000';
  ctx.fill();

  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2.6;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(btnX - 8, btnY);
  ctx.lineTo(btnX + 8, btnY);
  ctx.moveTo(btnX + 2, btnY - 6);
  ctx.lineTo(btnX + 8, btnY);
  ctx.lineTo(btnX + 2, btnY + 6);
  ctx.stroke();
  ctx.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.anisotropy = 4;
  texture.needsUpdate = true;
  return texture;
}

export const JesperWorksPage: React.FC<JesperWorksPageProps> = ({
  onNavigateToSection,
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const sheetScrollRef = useRef<HTMLDivElement | null>(null);
  const projects = PORTFOLIO_DATA.projects;

  // 'featured' = 3D S-Curve Wave Ribbon | 'full' = Full Archive Index
  const [viewMode, setViewMode] = useState<'featured' | 'full'>('featured');
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // ==========================================================================
  // JESPER LANDBERG WHITE DETAIL SHEET STATE (WHEN A PROJECT IS CLICKED!)
  // ==========================================================================
  const [openedProjectIndex, setOpenedProjectIndex] = useState<number | null>(null);
  const [sheetPhase, setSheetPhase] = useState<'closed' | 'opening' | 'open' | 'closing'>('closed');
  const [cardOriginRect, setCardOriginRect] = useState<CardScreenRect | null>(null);
  const [sheetScrollProgress, setSheetScrollProgress] = useState<number>(0);
  const [sheetScrollVel, setSheetScrollVel] = useState<number>(0);
  const [neighborHover, setNeighborHover] = useState<'prev' | 'next' | null>(null);
  const [slideDirection, setSlideDirection] = useState<'none' | 'prev' | 'next'>('none');

  // Jesper Landberg Top-Right "PROFILE" Overlay State (in-page bio overlay)
  const [profileOverlayOpen, setProfileOverlayOpen] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  // Full Archive Hover State
  const [hoveredArchiveIdx, setHoveredArchiveIdx] = useState<number>(0);

  const SPACING = 4.65;

  // Shared mutable state for 60fps Three.js loop
  const glStateRef = useRef({
    currentScroll: 0,
    targetScroll: 0,
    velocity: 0,
    isDragging: false,
    dragStartX: 0,
    dragStartScroll: 0,
    pointerDownPos: { x: 0, y: 0 },
    hoveredCardIndex: -1,
    activeCardIndex: 0,
    sheetOpenTarget: 0, // 0 = 3D strip, 1 = project detail sheet open
    sheetOpenCurrent: 0,
    clickedCardIndex: -1,
    getCardScreenRect: null as ((idx: number) => CardScreenRect) | null,
  });

  // Open a project using Jesper Landberg's Card-to-White-Sheet Flight Morph!
  const openProjectSheet = (idx: number) => {
    const state = glStateRef.current;
    state.clickedCardIndex = idx;
    state.sheetOpenTarget = 1;

    // Measure the clicked 3D card's exact screen bounding box so the White Sheet flies out from it
    const rect = state.getCardScreenRect
      ? state.getCardScreenRect(idx)
      : {
          left: window.innerWidth * 0.2,
          top: window.innerHeight * 0.22,
          width: window.innerWidth * 0.6,
          height: window.innerHeight * 0.56,
        };

    setCardOriginRect(rect);
    setSlideDirection('none');
    setOpenedProjectIndex(idx);
    setSheetScrollProgress(0);
    setSheetPhase('opening');

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setSheetPhase('open');
      });
    });
  };

  // Close the White Detail Sheet and fly it back into the 3D S-Curve Ribbon!
  const closeProjectSheet = () => {
    if (sheetPhase === 'closed' || sheetPhase === 'closing') return;
    const state = glStateRef.current;

    // Re-center the 3D carousel on the project we were viewing so it lands right in the middle
    if (openedProjectIndex !== null) {
      scrollToCardIndex(openedProjectIndex, true);
      if (state.getCardScreenRect) {
        setCardOriginRect(state.getCardScreenRect(openedProjectIndex));
      }
    }

    state.sheetOpenTarget = 0;
    setSheetPhase('closing');
    setNeighborHover(null);

    setTimeout(() => {
      setSheetPhase('closed');
      setOpenedProjectIndex(null);
      state.clickedCardIndex = -1;
    }, 680);
  };

  // Switch directly to Previous / Next project when clicking the peeking Left/Right Related Sheets!
  const switchToRelatedProject = (dir: 'prev' | 'next') => {
    if (openedProjectIndex === null) return;
    const total = projects.length;
    const nextIdx =
      dir === 'prev'
        ? (openedProjectIndex - 1 + total) % total
        : (openedProjectIndex + 1) % total;

    setSlideDirection(dir);
    setNeighborHover(null);
    setOpenedProjectIndex(nextIdx);
    setSheetScrollProgress(0);
    scrollToCardIndex(nextIdx, true);

    if (sheetScrollRef.current) {
      sheetScrollRef.current.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  };

  const scrollToCardIndex = (targetIdx: number, instant = false) => {
    const state = glStateRef.current;
    const total = projects.length;
    const totalSpan = total * SPACING;

    const desiredBase = targetIdx * SPACING;
    const currentMod = ((state.targetScroll % totalSpan) + totalSpan) % totalSpan;
    let delta = desiredBase - currentMod;
    if (delta > totalSpan * 0.5) delta -= totalSpan;
    if (delta < -totalSpan * 0.5) delta += totalSpan;

    state.targetScroll += delta;
    if (instant) {
      state.currentScroll = state.targetScroll;
    } else {
      state.velocity += Math.sign(delta) * 1.25;
    }
  };

  // Handle scrolling inside the White Detail Sheet's Right Column Showcase Stack
  const lastScrollTopRef = useRef<number>(0);
  const handleSheetScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const maxScroll = Math.max(1, el.scrollHeight - el.clientHeight);
    const prog = Math.min(1, Math.max(0, el.scrollTop / maxScroll));
    const delta = el.scrollTop - lastScrollTopRef.current;
    lastScrollTopRef.current = el.scrollTop;

    setSheetScrollProgress(prog);
    setSheetScrollVel(Math.max(-18, Math.min(18, delta * 0.35)));
  };

  // Decay scroll velocity bow smoothly
  useEffect(() => {
    if (Math.abs(sheetScrollVel) < 0.1) return;
    const t = setTimeout(() => setSheetScrollVel((v) => v * 0.7), 32);
    return () => clearTimeout(t);
  }, [sheetScrollVel]);

  // ==========================================================================
  // THREE.JS WEBGL 3D SCENE (S-CURVE RIBBON + PERSPECTIVE FLOOR GRID)
  // ==========================================================================
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#000000');

    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0, 0.08, 7.8);
    camera.lookAt(0, -0.05, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 1. 3D PERSPECTIVE WIREFRAME FLOOR GRID
    const floorUniforms = {
      uScrollOffset: { value: 0 },
      uFloorAlpha: { value: 1 },
      uActiveAccent: { value: new THREE.Color(projects[0].accentHex) },
    };

    const floorGeo = new THREE.PlaneGeometry(60, 38, 1, 1);
    const floorMat = new THREE.ShaderMaterial({
      vertexShader: FLOOR_GRID_VERTEX_SHADER,
      fragmentShader: FLOOR_GRID_FRAGMENT_SHADER,
      uniforms: floorUniforms,
      transparent: true,
      depthWrite: false,
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI * 0.5;
    floorMesh.position.set(0, -1.95, -1.0);
    scene.add(floorMesh);

    // 2. 3D S-CURVE FLOATING PROJECT CARDS
    const totalCards = projects.length;
    const totalWidth = totalCards * SPACING;
    const CARD_W = 4.15;
    const CARD_H = 2.42;
    const cardGeo = new THREE.PlaneGeometry(CARD_W, CARD_H, 64, 32);

    const cardMaterials: THREE.ShaderMaterial[] = [];

    projects.forEach((proj, idx) => {
      const initialTex = renderCardCanvasTexture(proj, idx);
      // Determine starting boot bar slot (-1 = left bar, 0 = middle bar, +1 = right bar)
      const slotOffset =
        idx === totalCards - 1 ? -1 : idx === 0 ? 0 : idx === 1 ? 1 : idx - 1;

      const mat = new THREE.ShaderMaterial({
        vertexShader: CARD_VERTEX_SHADER,
        fragmentShader: CARD_FRAGMENT_SHADER,
        uniforms: {
          uTexture: { value: initialTex },
          uScrollOffset: { value: 0 },
          uCardBaseX: { value: idx * SPACING },
          uTotalWidth: { value: totalWidth },
          uVelocity: { value: 0 },
          uTime: { value: 0 },
          uHover: { value: 0 },
          uSheetP: { value: 1.0 },
          uWhite: { value: 0.0 },
          uIntroP: { value: 0.0 },
          uIntroBarPos: { value: new THREE.Vector2(slotOffset * 0.68, 0.0) },
          uAlpha: { value: 1.0 },
        },
        transparent: true,
        side: THREE.DoubleSide,
      });

      const mesh = new THREE.Mesh(cardGeo, mat);
      mesh.frustumCulled = false;
      scene.add(mesh);
      cardMaterials.push(mat);
    });

    // Enrich card textures with photographic backdrops
    CARD_BACKDROP_IMAGES.forEach((src, imgIdx) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        projects.forEach((proj, pIdx) => {
          if (pIdx % CARD_BACKDROP_IMAGES.length === imgIdx && cardMaterials[pIdx]) {
            const oldTex = cardMaterials[pIdx].uniforms.uTexture.value as THREE.Texture;
            const enrichedTex = renderCardCanvasTexture(proj, pIdx, img);
            cardMaterials[pIdx].uniforms.uTexture.value = enrichedTex;
            oldTex.dispose();
          }
        });
      };
      img.src = src;
    });

    const getWrappedCardX = (cardIdx: number, scroll: number) => {
      const halfSpan = totalWidth * 0.5;
      const raw = cardIdx * SPACING - scroll + halfSpan;
      const mod = ((raw % totalWidth) + totalWidth) % totalWidth;
      return mod - halfSpan;
    };

    // Compute exact screen-space bounding rectangle of any 3D card for the FLIP transition
    const computeCardScreenRect = (cardIdx: number): CardScreenRect => {
      const scroll = glStateRef.current.currentScroll;
      const worldX = getWrappedCardX(cardIdx, scroll);
      const q = worldX / 6.2;
      const waveZ = -1.18 * Math.sin(Math.PI * q) * Math.exp(-0.38 * q * q);
      const waveY = -0.042 * worldX + 0.065 * 6.2 * Math.sin(Math.PI * (q * 0.85 + 0.18));

      const topLeft = new THREE.Vector3(
        worldX - CARD_W * 0.5,
        waveY + CARD_H * 0.5,
        waveZ
      ).project(camera);
      const botRight = new THREE.Vector3(
        worldX + CARD_W * 0.5,
        waveY - CARD_H * 0.5,
        waveZ
      ).project(camera);

      const left = ((topLeft.x + 1) * 0.5) * width;
      const right = ((botRight.x + 1) * 0.5) * width;
      const top = ((-topLeft.y + 1) * 0.5) * height;
      const bottom = ((-botRight.y + 1) * 0.5) * height;

      return {
        left,
        top,
        width: Math.max(240, Math.abs(right - left)),
        height: Math.max(150, Math.abs(bottom - top)),
      };
    };

    glStateRef.current.getCardScreenRect = computeCardScreenRect;

    const findCardAtPointer = (clientX: number, clientY: number): number => {
      for (let i = 0; i < totalCards; i++) {
        const r = computeCardScreenRect(i);
        if (
          clientX >= r.left &&
          clientX <= r.left + r.width &&
          clientY >= r.top &&
          clientY <= r.top + r.height
        ) {
          return i;
        }
      }
      return -1;
    };

    const onWheel = (e: WheelEvent) => {
      if (glStateRef.current.sheetOpenTarget > 0.5) return;
      e.preventDefault();
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      glStateRef.current.targetScroll += delta * 0.0046;
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== 0 || glStateRef.current.sheetOpenTarget > 0.5) return;
      const state = glStateRef.current;
      state.isDragging = true;
      state.dragStartX = e.clientX;
      state.dragStartScroll = state.targetScroll;
      state.pointerDownPos = { x: e.clientX, y: e.clientY };
      container.style.cursor = 'grabbing';
    };

    const onPointerMove = (e: PointerEvent) => {
      const state = glStateRef.current;
      if (state.sheetOpenTarget > 0.5) return;
      if (state.isDragging) {
        const dx = e.clientX - state.dragStartX;
        state.targetScroll = state.dragStartScroll - dx * 0.011;
      } else {
        const hitIdx = findCardAtPointer(e.clientX, e.clientY);
        state.hoveredCardIndex = hitIdx;
        container.style.cursor = hitIdx !== -1 ? 'pointer' : 'grab';
      }
    };

    const onPointerUp = (e: PointerEvent) => {
      const state = glStateRef.current;
      if (!state.isDragging) return;
      state.isDragging = false;
      container.style.cursor = state.hoveredCardIndex !== -1 ? 'pointer' : 'grab';

      const moveDist = Math.hypot(
        e.clientX - state.pointerDownPos.x,
        e.clientY - state.pointerDownPos.y
      );

      // Clicking any 3D project card morphs it directly into Jesper Landberg's White Detail Sheet!
      if (moveDist < 8 && state.sheetOpenTarget < 0.5) {
        const clickedIdx = findCardAtPointer(e.clientX, e.clientY);
        if (clickedIdx !== -1) {
          openProjectSheet(clickedIdx);
        }
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (glStateRef.current.sheetOpenTarget > 0.5) {
          closeProjectSheet();
        } else {
          setProfileOverlayOpen(false);
        }
      } else if (glStateRef.current.sheetOpenTarget < 0.5) {
        if (e.key === 'ArrowRight') {
          glStateRef.current.targetScroll += SPACING;
        } else if (e.key === 'ArrowLeft') {
          glStateRef.current.targetScroll -= SPACING;
        }
      }
    };

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.position.z = width < 768 ? 9.8 : 7.8;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    handleResize();
    const domEl = renderer.domElement;
    domEl.addEventListener('wheel', onWheel, { passive: false });
    domEl.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', handleResize);

    let rafId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const state = glStateRef.current;

      const prevScroll = state.currentScroll;
      state.currentScroll += (state.targetScroll - state.currentScroll) * 0.085;
      const instantVel = (state.currentScroll - prevScroll) * 14.0;
      state.velocity += (instantVel - state.velocity) * 0.15;

      // Smoothly interpolate sheetOpenCurrent (0 = 3D strip, 1 = White Detail Sheet open)
      state.sheetOpenCurrent +=
        (state.sheetOpenTarget - state.sheetOpenCurrent) * 0.11;

      // Find card closest to center
      let closestIdx = 0;
      let minAbsX = Infinity;
      for (let i = 0; i < totalCards; i++) {
        const wx = Math.abs(getWrappedCardX(i, state.currentScroll));
        if (wx < minAbsX) {
          minAbsX = wx;
          closestIdx = i;
        }
      }
      if (closestIdx !== state.activeCardIndex) {
        state.activeCardIndex = closestIdx;
        setActiveIndex(closestIdx);
      }

      // Floor grid fades in after boot bars expand, and fades out when a project sheet opens
      const groundIntro = Math.min(1.0, Math.max(0.0, (elapsed - 0.35) / 0.9));
      floorUniforms.uScrollOffset.value = state.currentScroll;
      floorUniforms.uFloorAlpha.value =
        groundIntro * (1.0 - state.sheetOpenCurrent);

      for (let i = 0; i < totalCards; i++) {
        const mat = cardMaterials[i];
        mat.uniforms.uScrollOffset.value = state.currentScroll;
        mat.uniforms.uVelocity.value = state.velocity * (1.0 - state.sheetOpenCurrent);
        mat.uniforms.uTime.value = elapsed;

        // Jesper Landberg 3-Bar Boot Choreography:
        // Cards start as 3 small white horizontal pill bars in center and fly/expand onto the 3D ribbon
        const bootOrder =
          i === totalCards - 1 ? 0 : i === 0 ? 1 : i === 1 ? 2 : 3;
        const bootDelay = 0.16 + bootOrder * 0.085;
        const rawIntro = Math.min(
          1.0,
          Math.max(0.0, (elapsed - bootDelay) / 1.05)
        );
        const easedIntro =
          rawIntro === 1.0 ? 1.0 : 1.0 - Math.pow(2.0, -10.0 * rawIntro);
        mat.uniforms.uIntroP.value = easedIntro;

        const targetHover =
          state.hoveredCardIndex === i && state.sheetOpenTarget < 0.5 ? 1.0 : 0.0;
        mat.uniforms.uHover.value +=
          (targetHover - mat.uniforms.uHover.value) * 0.12;

        // Unbend ribbon & whiten clicked card as it morphs into the White Sheet
        mat.uniforms.uSheetP.value = 1.0 - state.sheetOpenCurrent;
        const isClicked = state.clickedCardIndex === i;
        mat.uniforms.uWhite.value = isClicked ? state.sheetOpenCurrent : 0.0;
        const barFade = bootOrder <= 2 ? 1.0 : easedIntro;
        mat.uniforms.uAlpha.value =
          barFade *
          (isClicked
            ? 1.0 - state.sheetOpenCurrent * 0.85
            : 1.0 - state.sheetOpenCurrent);
      }

      renderer.render(scene, camera);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      domEl.removeEventListener('wheel', onWheel);
      domEl.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', handleResize);
      cardGeo.dispose();
      floorGeo.dispose();
      floorMat.dispose();
      cardMaterials.forEach((m) => {
        (m.uniforms.uTexture.value as THREE.Texture)?.dispose();
        m.dispose();
      });
      renderer.dispose();
    };
  }, [projects]);

  const currentDetailProject =
    openedProjectIndex !== null ? projects[openedProjectIndex] : null;
  const prevProject =
    openedProjectIndex !== null
      ? projects[(openedProjectIndex - 1 + projects.length) % projects.length]
      : null;
  const nextProject =
    openedProjectIndex !== null
      ? projects[(openedProjectIndex + 1) % projects.length]
      : null;

  const isSheetExpanded = sheetPhase === 'open';

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white select-none">
      {/* ====================================================================
          1. WEBGL 3D S-CURVE WAVE RIBBON & PERSPECTIVE FLOOR GRID
      ==================================================================== */}
      <div
        ref={mountRef}
        className={`absolute inset-0 z-0 h-full w-full transition-opacity duration-500 ${
          viewMode === 'featured'
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-15 pointer-events-none'
        }`}
      />

      {/* ====================================================================
          2. JESPER LANDBERG WHITE DETAIL SHEET (`data-gl="sheet"`) +
             LEFT & RIGHT PEEKING RELATED SHEETS (`data-gl="related"`)
             Appears when any project card is clicked!
      ==================================================================== */}
      {sheetPhase !== 'closed' && currentDetailProject && (
        <main className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
          {/* LEFT PEEKING RELATED PROJECT SHEET (`data-gl="related"`, bg-white opacity-30) */}
          {prevProject && (
            <div
              onMouseEnter={() => setNeighborHover('prev')}
              onMouseLeave={() => setNeighborHover(null)}
              onClick={() => switchToRelatedProject('prev')}
              title={`Previous project: ${prevProject.title.split('—')[0].trim()}`}
              className={`pointer-events-auto fixed inset-y-16 sm:inset-y-24 left-0 w-[75vw] rounded-[18px] sm:rounded-[20px] bg-white cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                isSheetExpanded
                  ? neighborHover === 'prev'
                    ? '-translate-x-[calc(100%-2.6rem)] sm:-translate-x-[calc(100%-3.4rem)] opacity-60'
                    : '-translate-x-[calc(100%-1.5rem)] sm:-translate-x-[calc(100%-2.2rem)] opacity-30'
                  : '-translate-x-[120%] opacity-0'
              }`}
            />
          )}

          {/* RIGHT PEEKING RELATED PROJECT SHEET (`data-gl="related"`, bg-white opacity-30) */}
          {nextProject && (
            <div
              onMouseEnter={() => setNeighborHover('next')}
              onMouseLeave={() => setNeighborHover(null)}
              onClick={() => switchToRelatedProject('next')}
              title={`Next project: ${nextProject.title.split('—')[0].trim()}`}
              className={`pointer-events-auto fixed inset-y-16 sm:inset-y-24 right-0 w-[75vw] rounded-[18px] sm:rounded-[20px] bg-white cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                isSheetExpanded
                  ? neighborHover === 'next'
                    ? 'translate-x-[calc(100%-2.6rem)] sm:translate-x-[calc(100%-3.4rem)] opacity-60'
                    : 'translate-x-[calc(100%-1.5rem)] sm:translate-x-[calc(100%-2.2rem)] opacity-30'
                  : 'translate-x-[120%] opacity-0'
              }`}
            />
          )}

          {/* CENTER WHITE DETAIL SHEET (`data-gl="sheet"`, Morphing from Clicked 3D Card Rect -> Full Viewport Sheet) */}
          <div
            style={
              isSheetExpanded
                ? {
                    left: window.innerWidth < 640 ? '16px' : '52px',
                    top: window.innerWidth < 640 ? '16px' : '20px',
                    width:
                      window.innerWidth < 640
                        ? 'calc(100vw - 32px)'
                        : 'calc(100vw - 104px)',
                    height:
                      window.innerWidth < 640
                        ? 'calc(100vh - 32px)'
                        : 'calc(100vh - 40px)',
                    borderRadius: '20px',
                  }
                : {
                    left: `${cardOriginRect?.left ?? window.innerWidth * 0.2}px`,
                    top: `${cardOriginRect?.top ?? window.innerHeight * 0.22}px`,
                    width: `${cardOriginRect?.width ?? window.innerWidth * 0.6}px`,
                    height: `${cardOriginRect?.height ?? window.innerHeight * 0.56}px`,
                    borderRadius: '18px',
                  }
            }
            className="pointer-events-auto fixed overflow-hidden bg-white text-black shadow-[0_30px_120px_rgba(0,0,0,0.85)] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
          >
            {/* Inner Two-Column Layout (Left: Title, Description, Pills | Right: Scrollable Media Stack) */}
            <div
              key={currentDetailProject.id}
              className={`flex h-full w-full flex-col lg:flex-row lg:items-start gap-y-8 lg:gap-x-16 xl:gap-x-24 px-5 pt-7 lg:pt-11 lg:pl-11 lg:pr-28 transition-opacity duration-500 ${
                isSheetExpanded ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* LEFT COLUMN: Project Title, Editorial Description, Black External Link Circle & #eee Pills */}
              <div className="flex flex-col items-start lg:flex-1 shrink-0 lg:sticky lg:top-0">
                {/* Project Title (Flies/rises into place in crisp black, tracking -0.05em) */}
                <div className="overflow-hidden pb-1">
                  <h1 className="reveal-title-active font-sans text-[34px] sm:text-[46px] font-normal leading-none tracking-[-0.05em] text-black">
                    {currentDetailProject.title.split('—')[0].trim()}
                  </h1>
                </div>

                {/* Subtitle & Editorial Description */}
                <div
                  className="reveal-fade-active mt-4 sm:mt-5 max-w-[38rem] text-[14px] sm:text-[16px] leading-[1.52] tracking-[-0.025em] text-black/85 space-y-3"
                  style={{ animationDelay: '0.08s' }}
                >
                  <p className="font-medium text-black">
                    {currentDetailProject.title.split('—')[1]?.trim() ||
                      currentDetailProject.category}
                  </p>
                  <p>{currentDetailProject.summary}</p>
                  <ul className="pt-2 space-y-1.5 text-[13px] sm:text-[14px] text-black/70">
                    {currentDetailProject.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black/45 shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* JESPER LANDBERG PILL ROW (`mt-30 s:mt-45 flex items-start gap-12`) */}
                <div
                  className="reveal-fade-active mt-7 sm:mt-10 flex flex-wrap items-center gap-2.5"
                  style={{ animationDelay: '0.16s' }}
                >
                  {/* 1. Black Circular Visit Button (↗) */}
                  <a
                    href={currentDetailProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${currentDetailProject.title}`}
                    className="group relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 hover:scale-110"
                  >
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  {/* 2. Grey Rounded Pills (`bg-[#eee] text-black`) for Tech Stack, Category & Year */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {currentDetailProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex h-9 items-center rounded-full bg-[#eeeeee] px-4 text-xs font-medium tracking-[-0.01em] text-black transition-colors duration-300 hover:bg-black hover:text-white"
                      >
                        {tech}
                      </span>
                    ))}

                    <span className="inline-flex h-9 items-center rounded-full bg-[#eeeeee] px-4 text-xs font-semibold text-black">
                      {currentDetailProject.year}
                    </span>

                    <a
                      href={currentDetailProject.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-9 items-center gap-1.5 rounded-full bg-[#eeeeee] px-4 text-xs font-medium text-black transition-colors duration-300 hover:bg-black hover:text-white"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>Source</span>
                    </a>
                  </div>

                  {/* 3. Golden Spinning 3D Star / Award Emblem (`text-[#d9a441]`) */}
                  <div
                    className="ml-1 inline-flex items-center gap-1.5 text-xs font-semibold text-[#d9a441]"
                    title="Featured Engineering Showcase"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 animate-spin"
                      style={{ animationDuration: '9s' }}
                      fill="currentColor"
                    >
                      <path d="M12 1L14.8 8.5L22.5 9.2L16.5 14.2L18.5 21.8L12 17.5L5.5 21.8L7.5 14.2L1.5 9.2L9.2 8.5L12 1Z" />
                    </svg>
                  </div>
                </div>

                {/* Prev / Next Quick Switcher at Bottom-Left of Sheet */}
                <div
                  className="reveal-fade-active hidden lg:flex items-center gap-4 mt-12 pt-6 border-t border-black/10 text-xs font-medium text-black/50"
                  style={{ animationDelay: '0.24s' }}
                >
                  <button
                    type="button"
                    onClick={() => switchToRelatedProject('prev')}
                    className="hover:text-black transition cursor-pointer"
                  >
                    ← Prev: {prevProject?.title.split('—')[0].trim()}
                  </button>
                  <span>·</span>
                  <button
                    type="button"
                    onClick={() => switchToRelatedProject('next')}
                    className="hover:text-black transition cursor-pointer"
                  >
                    Next: {nextProject?.title.split('—')[0].trim()} →
                  </button>
                </div>
              </div>

              {/* RIGHT COLUMN: Scrollable Stack of Large Project Showcase Screens (`data-gl="simple"`) */}
              <div
                ref={sheetScrollRef}
                onScroll={handleSheetScroll}
                className="flex h-full w-full lg:w-[56%] shrink-0 flex-col items-center gap-y-7 sm:gap-y-11 overflow-y-auto pb-20 pr-1"
                style={{ scrollbarWidth: 'none' }}
              >
                {/* SHOWCASE SCREEN 1: Main Product Interface (`aspect-ratio: 2048 / 1204`) */}
                <div
                  style={{
                    transform: `perspective(1000px) rotateX(${sheetScrollVel * 0.25}deg)`,
                    transition: 'transform 0.15s ease-out',
                  }}
                  className="relative w-full flex-none overflow-hidden rounded-[14px] border border-black/10 bg-[#0b101d] aspect-[2048/1204] shadow-lg"
                >
                  <img
                    src={
                      CARD_BACKDROP_IMAGES[
                        (openedProjectIndex ?? 0) % CARD_BACKDROP_IMAGES.length
                      ]
                    }
                    alt={currentDetailProject.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-40"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(circle at 70% 30%, ${currentDetailProject.accentHex}44, rgba(8,12,24,0.88) 75%)`,
                    }}
                  />
                  <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-10 text-white">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-mono uppercase tracking-widest text-white/90 backdrop-blur-md">
                        01 / Main Interface — {currentDetailProject.code}
                      </span>
                      <span className="font-mono text-xs text-white/60">
                        {currentDetailProject.year}
                      </span>
                    </div>

                    <div>
                      <div className="font-serif-editorial italic text-4xl sm:text-6xl text-white">
                        {currentDetailProject.title.split('—')[0].trim()}
                      </div>
                      <p className="mt-2 max-w-md text-xs sm:text-sm text-white/75">
                        {currentDetailProject.summary}
                      </p>
                    </div>
                  </div>
                </div>

                {/* SHOWCASE SCREEN 2: System Architecture & Interactive Telemetry (`aspect-ratio: 1280 / 596`) */}
                <div
                  style={{
                    transform: `perspective(1000px) rotateX(${sheetScrollVel * 0.25}deg)`,
                    transition: 'transform 0.15s ease-out',
                  }}
                  className="relative w-full flex-none overflow-hidden rounded-[14px] border border-black/10 bg-[#090d16] aspect-[1280/596] p-6 sm:p-9 text-white shadow-lg flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-white/55">
                      02 / Architecture &amp; Performance Highlights
                    </span>
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: currentDetailProject.accentHex }}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-auto py-3">
                    {currentDetailProject.highlights.map((hl, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
                      >
                        <div
                          className="font-mono text-[11px] font-bold uppercase"
                          style={{ color: currentDetailProject.accentHex }}
                        >
                          Key Metric 0{i + 1}
                        </div>
                        <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-white/90">
                          {hl}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SHOWCASE SCREEN 3: Full Tech Stack & Live Deployment (`aspect-ratio: 1280 / 644`) */}
                <div
                  style={{
                    transform: `perspective(1000px) rotateX(${sheetScrollVel * 0.25}deg)`,
                    transition: 'transform 0.15s ease-out',
                  }}
                  className="relative w-full flex-none overflow-hidden rounded-[14px] border border-black/10 bg-[#f5f5f7] aspect-[1280/644] p-6 sm:p-10 text-black shadow-sm flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between border-b border-black/10 pb-3">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-black/50">
                      03 / Production Stack &amp; Repository
                    </span>
                    <span className="font-mono text-xs font-semibold text-black/60">
                      {currentDetailProject.category}
                    </span>
                  </div>

                  <div className="my-auto">
                    <div className="text-xs font-semibold uppercase tracking-wider text-black/45 mb-3">
                      Built With
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentDetailProject.techStack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-black/15 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-black shadow-2xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-black/10">
                    <a
                      href={currentDetailProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-xs font-semibold text-white hover:opacity-85 transition"
                    >
                      <span>Buka Live Demo</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={currentDetailProject.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-black hover:underline"
                    >
                      <Github className="h-4 w-4" />
                      <span>Lihat Kode Sumber di GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ================================================================
                TOP-RIGHT BLACK CIRCULAR CLOSE BUTTON (`×`) WITH LIVE SCROLL RING
                (Exact match to Jesper Landberg's `!top-30 !right-30 !size-45 bg-black text-white`)
            ================================================================ */}
            <button
              type="button"
              onClick={closeProjectSheet}
              aria-label="Close project"
              className="group absolute top-5 right-5 sm:top-7 sm:right-7 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              {/* Circular Scroll Progress Ring around the Close Button */}
              <svg
                className="pointer-events-none absolute -inset-1.5 h-14 w-14 -rotate-90"
                viewBox="0 0 56 56"
              >
                <circle
                  cx="28"
                  cy="28"
                  r="24"
                  fill="none"
                  stroke="rgba(0,0,0,0.12)"
                  strokeWidth="1.5"
                />
                <circle
                  cx="28"
                  cy="28"
                  r="24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="1.8"
                  strokeDasharray={2 * Math.PI * 24}
                  strokeDashoffset={
                    2 * Math.PI * 24 * (1 - sheetScrollProgress)
                  }
                  strokeLinecap="round"
                  className="transition-all duration-150"
                />
              </svg>

              {/* Crisp Cross (×) Icon */}
              <span className="relative block h-3.5 w-3.5">
                <span className="absolute top-1/2 left-0 h-[1.8px] w-full -translate-y-1/2 rotate-45 bg-white transition-transform duration-300 group-hover:rotate-135" />
                <span className="absolute top-1/2 left-0 h-[1.8px] w-full -translate-y-1/2 -rotate-45 bg-white transition-transform duration-300 group-hover:rotate-45" />
              </span>
            </button>
          </div>
        </main>
      )}

      {/* ====================================================================
          3. MODE: FULL — JESPER LANDBERG FULL ARCHIVE INDEX LIST VIEW
             (Clicking any project row ALSO morphs into the White Detail Sheet!)
      ==================================================================== */}
      {viewMode === 'full' && sheetPhase === 'closed' && (
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1360px] flex-col justify-center px-6 pt-24 pb-24 sm:px-16 overflow-y-auto">
          <div className="divide-y divide-white/12 border-y border-white/12">
            {projects.map((proj, idx) => {
              const isHovered = hoveredArchiveIdx === idx;
              return (
                <div
                  key={proj.id}
                  onMouseEnter={() => setHoveredArchiveIdx(idx)}
                  onClick={() => openProjectSheet(idx)}
                  style={{ animationDelay: `${idx * 0.05}s` }}
                  className="archive-row-enter group flex items-center justify-between py-5 sm:py-6 px-3 cursor-pointer transition-all duration-300 hover:px-6 hover:bg-white/[0.04]"
                >
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className="font-mono text-xs text-white/40">
                      0{idx + 1}
                    </span>
                    <h3
                      className={`text-2xl sm:text-4xl font-normal tracking-[-0.04em] transition-transform duration-300 ${
                        isHovered ? 'translate-x-2 text-white' : 'text-white/80'
                      }`}
                    >
                      {proj.title.split('—')[0].trim()}
                    </h3>
                  </div>

                  <div className="flex items-center gap-6 sm:gap-12">
                    <span className="hidden md:inline text-xs font-medium text-white/50">
                      {proj.category}
                    </span>
                    <span className="font-mono text-xs text-white/45">
                      {proj.year}
                    </span>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white group-hover:bg-white group-hover:text-black transition">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ====================================================================
          4. JESPER LANDBERG CENTER PROFILE OVERLAY (WHEN "PROFILE" IS CLICKED)
      ==================================================================== */}
      {profileOverlayOpen && sheetPhase === 'closed' && (
        <div
          onClick={() => setProfileOverlayOpen(false)}
          className="fixed inset-0 z-30 flex items-center justify-center bg-black/80 backdrop-blur-xl px-6 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-[42rem] text-center text-white"
          >
            <p className="text-[15px] sm:text-[17px] leading-[1.6] tracking-[-0.02em] text-white/95">
              {PORTFOLIO_DATA.profile.name}, {PORTFOLIO_DATA.profile.role} berbasis di{' '}
              {PORTFOLIO_DATA.profile.location}. {PORTFOLIO_DATA.profile.bio}
            </p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
              3+ Tahun Pengalaman — 15+ Produk Digital — Full-Stack &amp; Interactive 3D Web
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-[0.18em]">
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-white transition"
              >
                GitHub
              </a>
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-white transition"
              >
                LinkedIn
              </a>
              <a
                href={PORTFOLIO_DATA.profile.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-white transition"
              >
                Instagram
              </a>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard
                    ?.writeText(PORTFOLIO_DATA.profile.email)
                    .catch(() => {});
                  setCopiedEmail(true);
                  setTimeout(() => setCopiedEmail(false), 2000);
                }}
                className="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          5. JESPER LANDBERG 4-CORNER MINIMALIST HUD OVERLAY
             Exact match to jesper2.webp:
             - Top-Left: BIAMTIERO AMIRAL KALMAN (or ← Back to Home)
             - Top-Right: PROFILE
             - Bottom-Left: FEATURED / FULL
             - Bottom-Right: CONTACT
      ==================================================================== */}
      <div
        className={`pointer-events-none fixed inset-0 z-20 flex flex-col justify-between px-6 py-6 sm:px-14 sm:py-9 transition-opacity duration-400 ${
          sheetPhase !== 'closed' ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* TOP HUD ROW */}
        <div className="flex items-start justify-between">
          <div className="pointer-events-auto flex items-center gap-6">
            <button
              type="button"
              onClick={(e) => onNavigateToSection('beranda', e)}
              className="group inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-white hover:opacity-70 transition cursor-pointer"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
              <span>{PORTFOLIO_DATA.profile.name}</span>
            </button>
          </div>

          <div className="pointer-events-auto flex items-center gap-6">
            <button
              type="button"
              onClick={() => setProfileOverlayOpen((v) => !v)}
              className="text-[12px] font-semibold uppercase tracking-[0.08em] text-white hover:opacity-60 transition cursor-pointer"
            >
              {profileOverlayOpen ? 'Close' : 'Profile'}
            </button>
          </div>
        </div>

        {/* BOTTOM HUD ROW */}
        <div className="flex items-end justify-between">
          {/* Bottom-Left: FEATURED / FULL */}
          <nav
            aria-label="Project views"
            className="pointer-events-auto flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.08em]"
          >
            <button
              type="button"
              onClick={() => {
                setProfileOverlayOpen(false);
                setViewMode('featured');
              }}
              className={`transition-opacity duration-300 cursor-pointer ${
                viewMode === 'featured'
                  ? 'text-white opacity-100'
                  : 'text-white opacity-45 hover:opacity-100'
              }`}
            >
              Featured
            </button>
            <span className="text-white/45">/</span>
            <button
              type="button"
              onClick={() => {
                setProfileOverlayOpen(false);
                setViewMode('full');
              }}
              className={`transition-opacity duration-300 cursor-pointer ${
                viewMode === 'full'
                  ? 'text-white opacity-100'
                  : 'text-white opacity-45 hover:opacity-100'
              }`}
            >
              Full
            </button>
          </nav>

          {/* Bottom-Right: CONTACT */}
          <button
            type="button"
            onClick={(e) => onNavigateToSection('kontak', e)}
            className="pointer-events-auto text-[12px] font-semibold uppercase tracking-[0.08em] text-white hover:opacity-60 transition cursor-pointer"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default JesperWorksPage;
