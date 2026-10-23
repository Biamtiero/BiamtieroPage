import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { PORTFOLIO_DATA } from './data/portfolioData';

interface CurvedAboutSlide {
  id: string;
  shortTitle: string;
  subtitle: string;
  heroHeadline: string[];
  ctaLabel: string;
  bgImage: string;
  themeTint: string;
  modalTitle: string;
  modalBody: string;
  modalBullets: string[];
  modalTags: string[];
}

const CURVED_ABOUT_SLIDES: CurvedAboutSlide[] = [
  {
    id: 'about-profile',
    shortTitle: 'Who I Am',
    subtitle: '01 · Profil & Latar Belakang',
    heroHeadline: [
      'Full-Stack Developer.',
      'Building reliable systems &',
      'modern web experiences.',
    ],
    ctaLabel: 'Read full profile',
    bgImage: '/hero-biamtiero.jpg',
    themeTint: 'rgba(10, 12, 18, 0.38)',
    modalTitle: 'Biamtiero Amiral Kalman — Full-Stack Developer',
    modalBody:
      'Saya adalah Full-Stack Developer berbasis di Indonesia yang menggabungkan ketelitian arsitektur backend dengan antarmuka frontend yang bersih, cepat, dan interaktif. Saya senang memecahkan masalah kompleks menjadi produk digital yang mudah digunakan.',
    modalBullets: [
      '3+ Tahun pengalaman merancang & mengembangkan aplikasi web end-to-end',
      '15+ Produk digital & proyek kolaborasi diselesaikan hingga tahap produksi',
      'Pendidikan Sarjana Teknik Informatika / Ilmu Komputer (2020 — 2024)',
    ],
    modalTags: PORTFOLIO_DATA.profile.traits,
  },
  {
    id: 'about-philosophy',
    shortTitle: 'Philosophy',
    subtitle: '02 · Karakter & Cara Kerja',
    heroHeadline: [
      'Precision meets intuition.',
      'Solving complex problems',
      'with clean architecture.',
    ],
    ctaLabel: 'Explore workflow',
    bgImage: '/hero-warrior.jpg',
    themeTint: 'rgba(8, 14, 24, 0.44)',
    modalTitle: 'Filosofi & Pendekatan Rekayasa Perangkat Lunak',
    modalBody:
      'Bagi saya, kode yang baik bukan sekadar fitur yang berjalan hari ini, melainkan fondasi yang tetap rapi, terukur, dan mudah dikembangkan di masa depan.',
    modalBullets: [
      'Teliti dalam membaca akar masalah sebelum menulis baris kode pertama',
      'Mengutamakan Clean Architecture & Type-Safe Development dengan TypeScript',
      'Menjaga keseimbangan antara performa tinggi di sisi server dan kenyamanan visual di sisi pengguna',
    ],
    modalTags: ['Clean Code', 'System Design', 'Problem Solver', 'Performance First'],
  },
  {
    id: 'about-arsenal',
    shortTitle: 'Capabilities',
    subtitle: '03 · Keahlian & Teknologi Utama',
    heroHeadline: [
      'Every surface in sync.',
      'From interactive 3D UI to',
      'scalable cloud backends.',
    ],
    ctaLabel: 'View tech stack',
    bgImage: '/hero-hands.jpg',
    themeTint: 'rgba(6, 12, 22, 0.40)',
    modalTitle: 'Keahlian Teknis & Ekosistem Teknologi',
    modalBody:
      'Menguasai ekosistem pengembangan web modern secara menyeluruh—mulai dari antarmuka interaktif hingga manajemen basis data dan deployment.',
    modalBullets: [
      'Frontend & 3D Web: React 18, Next.js, TypeScript, Tailwind CSS, Three.js / WebGL',
      'Backend & API: Node.js, Express, Python, FastAPI, REST API & WebSockets',
      'Database & DevOps: PostgreSQL, MySQL, Prisma ORM, Redis, Docker, Git & CI/CD',
    ],
    modalTags: [
      'React & Next.js',
      'TypeScript',
      'Three.js / WebGL',
      'Node.js & FastAPI',
      'PostgreSQL & Prisma',
    ],
  },
];

// Draws a crisp 1600x1000 editorial card texture matching Mathias Adolfsson's curved screen look
function renderAboutSlideTexture(
  slide: CurvedAboutSlide,
  loadedImg: HTMLImageElement | null,
  maxAnisotropy: number
): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1600;
  canvas.height = 1000;
  const ctx = canvas.getContext('2d')!;

  // 1. Base Fill
  ctx.fillStyle = '#0d0f14';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 2. Cover Image
  if (loadedImg && loadedImg.complete && loadedImg.naturalWidth > 0) {
    const imgRatio = loadedImg.naturalWidth / loadedImg.naturalHeight;
    const canvasRatio = canvas.width / canvas.height;
    let drawW = canvas.width;
    let drawH = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (imgRatio > canvasRatio) {
      drawW = canvas.height * imgRatio;
      offsetX = (canvas.width - drawW) / 2;
    } else {
      drawH = canvas.width / imgRatio;
      offsetY = (canvas.height - drawH) / 2;
    }
    ctx.drawImage(loadedImg, offsetX, offsetY, drawW, drawH);
  }

  // 3. Cinematic Overlay so Typography Stands Out Clearly
  ctx.fillStyle = slide.themeTint;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const grad = ctx.createLinearGradient(0, 0, canvas.width * 0.85, canvas.height);
  grad.addColorStop(0, 'rgba(0, 0, 0, 0.64)');
  grad.addColorStop(0.55, 'rgba(0, 0, 0, 0.25)');
  grad.addColorStop(1, 'rgba(0, 0, 0, 0.52)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 4. Bold 3-Line Editorial Headline (Mathias Adolfsson style)
  ctx.fillStyle = '#ffffff';
  ctx.font = '700 82px "Plus Jakarta Sans", "Inter", sans-serif';
  ctx.textBaseline = 'top';

  const startX = 115;
  const startY = 275;
  const lineHeight = 102;

  slide.heroHeadline.forEach((line, idx) => {
    ctx.fillText(line, startX, startY + idx * lineHeight);
  });

  // 5. White Pill CTA Button
  const btnX = startX;
  const btnY = startY + slide.heroHeadline.length * lineHeight + 58;
  const btnW = 310;
  const btnH = 78;
  const radius = 39;

  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.roundRect(btnX, btnY, btnW, btnH, radius);
  ctx.fill();

  ctx.fillStyle = '#09090b';
  ctx.font = '600 25px "Plus Jakarta Sans", "Inter", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(slide.ctaLabel, btnX + btnW / 2, btnY + btnH / 2 + 1);

  ctx.textAlign = 'left';

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.anisotropy = maxAnisotropy;
  texture.needsUpdate = true;
  return texture;
}

function createCurvedScreenGeometry(
  width: number,
  height: number,
  curveRadius: number,
  segmentsW = 64,
  segmentsH = 24
): THREE.BufferGeometry {
  const geo = new THREE.PlaneGeometry(width, height, segmentsW, segmentsH);
  const pos = geo.attributes.position;

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const angle = x / curveRadius;
    const newX = Math.sin(angle) * curveRadius;
    const newZ = (Math.cos(angle) - 1) * curveRadius;
    pos.setXYZ(i, newX, y, newZ);
  }

  geo.computeVertexNormals();
  return geo;
}

export const CurvedWorksCarousel3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedModalSlide, setSelectedModalSlide] =
    useState<CurvedAboutSlide | null>(null);
  const [arcOffset, setArcOffset] = useState<number>(0);

  const controlRef = useRef<{
    goToIndex: (idx: number) => void;
    next: () => void;
    prev: () => void;
  }>({
    goToIndex: () => {},
    next: () => {},
    prev: () => {},
  });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      36,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 9.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    renderer.setClearColor(0x000000, 1);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();

    const TOTAL_PANELS = 6;
    const RING_RADIUS = 6.6;
    const PANEL_WIDTH = 5.5;
    const PANEL_HEIGHT = 3.45;
    const PANEL_CURVE = 6.2;

    const carouselGroup = new THREE.Group();
    carouselGroup.position.set(0, 0.15, -RING_RADIUS);
    scene.add(carouselGroup);

    const sharedGeo = createCurvedScreenGeometry(
      PANEL_WIDTH,
      PANEL_HEIGHT,
      PANEL_CURVE
    );

    const panelMeshes: THREE.Mesh[] = [];
    const panelMaterials: THREE.MeshBasicMaterial[] = [];

    for (let i = 0; i < TOTAL_PANELS; i++) {
      const slideIdx = i % CURVED_ABOUT_SLIDES.length;
      const slide = CURVED_ABOUT_SLIDES[slideIdx];
      const initialTex = renderAboutSlideTexture(slide, null, maxAnisotropy);

      const mat = new THREE.MeshBasicMaterial({
        map: initialTex,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 1,
      });

      const mesh = new THREE.Mesh(sharedGeo, mat);
      const angle = (i / TOTAL_PANELS) * Math.PI * 2;
      mesh.position.set(
        Math.sin(angle) * RING_RADIUS,
        0,
        Math.cos(angle) * RING_RADIUS
      );
      mesh.rotation.y = angle;
      mesh.userData = { panelIndex: i, slideIdx };

      carouselGroup.add(mesh);
      panelMeshes.push(mesh);
      panelMaterials.push(mat);
    }

    CURVED_ABOUT_SLIDES.forEach((slide, sIdx) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        for (let i = 0; i < TOTAL_PANELS; i++) {
          if (i % CURVED_ABOUT_SLIDES.length === sIdx) {
            const newTex = renderAboutSlideTexture(slide, img, maxAnisotropy);
            const oldTex = panelMaterials[i].map;
            panelMaterials[i].map = newTex;
            panelMaterials[i].needsUpdate = true;
            oldTex?.dispose();
          }
        }
      };
      img.src = slide.bgImage;
    });

    const stepAngle = (Math.PI * 2) / TOTAL_PANELS;
    let targetAngle = 0;
    let currentAngle = 0;
    let currentPanelIdx = 0;

    const snapToNearest = (rawTarget: number) => {
      const snappedIdx = Math.round(rawTarget / stepAngle);
      targetAngle = snappedIdx * stepAngle;
      currentPanelIdx =
        (((-snappedIdx % CURVED_ABOUT_SLIDES.length) +
          CURVED_ABOUT_SLIDES.length) %
          CURVED_ABOUT_SLIDES.length);
      setActiveIndex(currentPanelIdx);
    };

    controlRef.current = {
      goToIndex: (idx: number) => {
        const diff = idx - currentPanelIdx;
        targetAngle -= diff * stepAngle;
        snapToNearest(targetAngle);
      },
      next: () => {
        targetAngle -= stepAngle;
        snapToNearest(targetAngle);
      },
      prev: () => {
        targetAngle += stepAngle;
        snapToNearest(targetAngle);
      },
    };

    let isDown = false;
    let startX = 0;
    let dragMoved = 0;
    let angleAtDown = 0;
    let mouseNormX = 0;
    let mouseNormY = 0;

    const raycaster = new THREE.Raycaster();
    const pointerVec = new THREE.Vector2();

    const onPointerDown = (e: PointerEvent) => {
      isDown = true;
      startX = e.clientX;
      dragMoved = 0;
      angleAtDown = targetAngle;
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      mouseNormX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseNormY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (!isDown) return;
      const dx = e.clientX - startX;
      dragMoved = Math.max(dragMoved, Math.abs(dx));
      targetAngle = angleAtDown + dx * 0.0038;
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!isDown) return;
      isDown = false;

      if (dragMoved < 8) {
        const rect = container.getBoundingClientRect();
        pointerVec.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        pointerVec.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(pointerVec, camera);
        const hits = raycaster.intersectObjects(panelMeshes);
        if (hits.length > 0) {
          const hitMesh = hits[0].object as THREE.Mesh;
          const clickedPanel = hitMesh.userData.panelIndex as number;
          const clickedSlideIdx = hitMesh.userData.slideIdx as number;

          const worldAngle = clickedPanel * stepAngle + currentAngle;
          const normAngle = Math.atan2(
            Math.sin(worldAngle),
            Math.cos(worldAngle)
          );

          if (Math.abs(normAngle) < 0.25) {
            setSelectedModalSlide(CURVED_ABOUT_SLIDES[clickedSlideIdx]);
          } else if (normAngle > 0) {
            controlRef.current.next();
          } else {
            controlRef.current.prev();
          }
          return;
        }
      }

      snapToNearest(targetAngle);
    };

    let wheelTimeout: ReturnType<typeof setTimeout> | null = null;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 4) {
        e.preventDefault();
        targetAngle -= e.deltaX * 0.0018;
        if (wheelTimeout) clearTimeout(wheelTimeout);
        wheelTimeout = setTimeout(() => snapToNearest(targetAngle), 140);
      }
    };

    const dom = renderer.domElement;
    dom.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    dom.addEventListener('wheel', onWheel, { passive: false });

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.fov = w < 768 ? 48 : 36;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    onResize();
    window.addEventListener('resize', onResize);

    let rafId: number;
    const animate = () => {
      currentAngle += (targetAngle - currentAngle) * 0.085;
      carouselGroup.rotation.y = currentAngle;

      camera.position.x += (mouseNormX * 0.22 - camera.position.x) * 0.06;
      camera.position.y += (mouseNormY * 0.14 - camera.position.y) * 0.06;
      camera.lookAt(0, 0.1, 0);

      panelMeshes.forEach((mesh, idx) => {
        const a = idx * stepAngle + currentAngle;
        const cosA = Math.cos(a);
        const mat = panelMaterials[idx];
        if (cosA < -0.1) {
          mesh.visible = false;
        } else {
          mesh.visible = true;
          mat.opacity = Math.max(0, Math.min(1, (cosA + 0.15) * 1.15));
        }
      });

      const normProgress =
        (((-currentAngle / stepAngle) % CURVED_ABOUT_SLIDES.length) +
          CURVED_ABOUT_SLIDES.length) %
        CURVED_ABOUT_SLIDES.length;
      setArcOffset(normProgress / CURVED_ABOUT_SLIDES.length);

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      dom.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      dom.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', onResize);
      sharedGeo.dispose();
      panelMaterials.forEach((m) => {
        m.map?.dispose();
        m.dispose();
      });
      renderer.dispose();
    };
  }, []);

  const activeSlide =
    CURVED_ABOUT_SLIDES[activeIndex] || CURVED_ABOUT_SLIDES[0];

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black select-none">
      {/* 1. THREE.JS 3D CURVED CYLINDRICAL ABOUT STAGE */}
      <div
        ref={mountRef}
        className="h-full w-full cursor-grab active:cursor-grabbing"
        title="Geser ke kiri/kanan atau klik layar untuk membaca profil lengkap"
      />

      {/* 2. SUBTLE LEFT/RIGHT NAVIGATION ARROWS */}
      <button
        onClick={() => controlRef.current.prev()}
        className="group absolute left-4 sm:left-8 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/60 backdrop-blur-md transition hover:border-white/30 hover:text-white"
        aria-label="Sebelumnya"
      >
        <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
      </button>

      <button
        onClick={() => controlRef.current.next()}
        className="group absolute right-4 sm:right-8 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/60 backdrop-blur-md transition hover:border-white/30 hover:text-white"
        aria-label="Selanjutnya"
      >
        <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* 3. BOTTOM CENTER CURVED ARC INDICATOR + ACTIVE CHAPTER TITLE (MATHIAS ADOLFSSON STYLE) */}
      <div className="pointer-events-none absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center">
        <svg
          width="120"
          height="28"
          viewBox="0 0 120 28"
          fill="none"
          className="mb-2 overflow-visible"
        >
          <path
            d="M 10 22 Q 60 2 110 22"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 10 22 Q 60 2 110 22"
            stroke="rgba(255,255,255,0.88)"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeDasharray="36 100"
            strokeDashoffset={-arcOffset * 72}
            fill="none"
          />
        </svg>

        <button
          onClick={() => setSelectedModalSlide(activeSlide)}
          className="pointer-events-auto text-base sm:text-lg font-medium tracking-tight text-white hover:opacity-80 transition"
        >
          {activeSlide.shortTitle}
        </button>

        <div className="pointer-events-auto mt-3 flex items-center gap-2">
          {CURVED_ABOUT_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => controlRef.current.goToIndex(idx)}
              className={`h-1.5 rounded-full transition-all ${
                activeIndex === idx
                  ? 'w-5 bg-white'
                  : 'w-1.5 bg-white/25 hover:bg-white/50'
              }`}
              aria-label={s.shortTitle}
            />
          ))}
        </div>
      </div>

      {/* 4. DETAIL MODAL WHEN CENTER CURVED ABOUT CARD IS CLICKED */}
      {selectedModalSlide && (
        <div
          onClick={() => setSelectedModalSlide(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6 backdrop-blur-xl"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl rounded-2xl border border-white/15 bg-[#0e0e11] p-6 sm:p-8 text-white shadow-2xl"
          >
            <button
              onClick={() => setSelectedModalSlide(null)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-neutral-400 hover:text-white transition"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              {selectedModalSlide.subtitle}
            </div>

            <h3 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              {selectedModalSlide.modalTitle}
            </h3>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-300">
              {selectedModalSlide.modalBody}
            </p>

            <div className="mt-5 space-y-2.5 border-t border-white/10 pt-4">
              {selectedModalSlide.modalBullets.map((hl, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {selectedModalSlide.modalTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
