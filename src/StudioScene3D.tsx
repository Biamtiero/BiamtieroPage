import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export interface ConstellationSceneProps {
  activeSection: number;
  activeSkillIdx: number;
  activeProjectIdx: number;
  activeExpIdx: number;
  typingPulse: number;
  nexusTriggered: boolean;
  onTriggerNexus: () => void;
}

// Soft radial warm amber-gold starlight texture matching the Shipcraft theme
function createAmberStarlightTexture(): THREE.Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;
  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255, 250, 240, 1)');
  grad.addColorStop(0.22, 'rgba(245, 185, 115, 0.92)');
  grad.addColorStop(0.55, 'rgba(217, 138, 60, 0.36)');
  grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(canvas);
}

export const StudioScene3D: React.FC<ConstellationSceneProps> = ({
  activeSection,
  activeSkillIdx,
  activeProjectIdx,
  activeExpIdx,
  typingPulse,
  nexusTriggered,
  onTriggerNexus,
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  const stateRef = useRef({
    activeSection,
    activeSkillIdx,
    activeProjectIdx,
    activeExpIdx,
    typingPulse,
    nexusTriggered,
    lastTypingPulse: typingPulse,
    pulseBoost: 0,
  });

  useEffect(() => {
    const s = stateRef.current;
    if (s.lastTypingPulse !== typingPulse) {
      s.pulseBoost = 1.0;
      s.lastTypingPulse = typingPulse;
    }
    s.activeSection = activeSection;
    s.activeSkillIdx = activeSkillIdx;
    s.activeProjectIdx = activeProjectIdx;
    s.activeExpIdx = activeExpIdx;
    s.nexusTriggered = nexusTriggered;
  }, [
    activeSection,
    activeSkillIdx,
    activeProjectIdx,
    activeExpIdx,
    typingPulse,
    nexusTriggered,
  ]);

  const triggerRef = useRef(onTriggerNexus);
  useEffect(() => {
    triggerRef.current = onTriggerNexus;
  }, [onTriggerNexus]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const starTex = createAmberStarlightTexture();

    // ========================================================================
    // MORPHING 3D CONSTELLATION PLEXUS SYSTEM (210 VERTICES + WIREFRAME MESH)
    // ========================================================================
    const NODE_COUNT = 210;
    const currentPositions = new Float32Array(NODE_COUNT * 3);
    const targetFormations: Float32Array[] = [
      new Float32Array(NODE_COUNT * 3), // Formation 0: Hero Hand-Touch Energy Bridge
      new Float32Array(NODE_COUNT * 3), // Formation 1: Skill Architecture Sphere
      new Float32Array(NODE_COUNT * 3), // Formation 2: Project Holographic Torus Portal
      new Float32Array(NODE_COUNT * 3), // Formation 3: Contact Signal Helix
    ];

    for (let i = 0; i < NODE_COUNT; i++) {
      const t = i / NODE_COUNT;
      if (i < 42) {
        // Dense cluster right at the fingertip touch nexus
        const r = Math.pow(Math.random(), 2) * 0.85;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        targetFormations[0][i * 3] = r * Math.sin(phi) * Math.cos(theta);
        targetFormations[0][i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
        targetFormations[0][i * 3 + 2] = r * Math.cos(phi) * 0.5;
      } else {
        // Left & Right hand constellation streams tapering toward center
        const side = i % 2 === 0 ? -1 : 1;
        const dist = 0.3 + Math.random() * 4.5;
        const spreadY = (Math.random() - 0.5) * (0.4 + dist * 0.36);
        const spreadZ = (Math.random() - 0.5) * 1.1;
        targetFormations[0][i * 3] = side * dist;
        targetFormations[0][i * 3 + 1] = spreadY;
        targetFormations[0][i * 3 + 2] = spreadZ;
      }

      currentPositions[i * 3] = targetFormations[0][i * 3];
      currentPositions[i * 3 + 1] = targetFormations[0][i * 3 + 1];
      currentPositions[i * 3 + 2] = targetFormations[0][i * 3 + 2];

      // Formation 1 (Skills): Geodesic Constellation Sphere + Orbital Ring
      const phi = Math.acos(1 - (2 * (i + 0.5)) / NODE_COUNT);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const radius = i % 5 === 0 ? 2.3 : 1.6;
      targetFormations[1][i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      targetFormations[1][i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      targetFormations[1][i * 3 + 2] = radius * Math.cos(phi);

      // Formation 2 (Projects): 3D Geometric Diamond / Portal Frame
      const ringAngle = t * Math.PI * 2 * 3;
      const torusR = 1.7 + Math.cos(ringAngle * 3) * 0.46;
      targetFormations[2][i * 3] = Math.cos(ringAngle) * torusR;
      targetFormations[2][i * 3 + 1] = Math.sin(ringAngle) * torusR;
      targetFormations[2][i * 3 + 2] = Math.sin(ringAngle * 3) * 0.82;

      // Formation 3 (Experience & Contact): Double-Helix Signal DNA
      const helixAngle = t * Math.PI * 6;
      const strand = i % 2 === 0 ? 1 : -1;
      targetFormations[3][i * 3] = Math.cos(helixAngle) * 1.4 * strand;
      targetFormations[3][i * 3 + 1] = (t - 0.5) * 4.2;
      targetFormations[3][i * 3 + 2] = Math.sin(helixAngle) * 1.4 * strand;
    }

    const constellationGroup = new THREE.Group();
    scene.add(constellationGroup);

    // 1. Warm Amber-Gold Starlight Points
    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(currentPositions, 3)
    );
    const pointsMat = new THREE.PointsMaterial({
      size: 0.22,
      map: starTex,
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      color: 0xf6c177,
    });
    const pointsMesh = new THREE.Points(pointsGeo, pointsMat);
    constellationGroup.add(pointsMesh);

    // 2. Dynamic Copper-Amber Plexus Wireframe Lines
    const maxLines = 850;
    const linePositions = new Float32Array(maxLines * 6);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(linePositions, 3)
    );
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xd98a3c,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
    });
    const lineSegments = new THREE.LineSegments(lineGeo, lineMat);
    constellationGroup.add(lineSegments);

    // 3. Inner Wireframe Core
    const coreWireGeo = new THREE.IcosahedronGeometry(1.12, 1);
    const coreWireMat = new THREE.MeshBasicMaterial({
      color: 0xe59849,
      wireframe: true,
      transparent: true,
      opacity: 0.0,
      blending: THREE.AdditiveBlending,
    });
    const coreWireMesh = new THREE.Mesh(coreWireGeo, coreWireMat);
    constellationGroup.add(coreWireMesh);

    // 4. Central Fingertip Spark Sprite
    const sparkMat = new THREE.SpriteMaterial({
      map: starTex,
      color: 0xffedd5,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
    });
    const centralSpark = new THREE.Sprite(sparkMat);
    centralSpark.scale.set(1.5, 1.5, 1);
    constellationGroup.add(centralSpark);

    let mouseNormX = 0;
    let mouseNormY = 0;
    let isDragging = false;
    let dragDist = 0;
    let prevX = 0;
    let prevY = 0;
    let userRotY = 0;
    let userRotX = 0;

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      mouseNormX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseNormY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (isDragging) {
        const dx = e.clientX - prevX;
        const dy = e.clientY - prevY;
        dragDist += Math.hypot(dx, dy);
        userRotY += dx * 0.01;
        userRotX = Math.max(-0.6, Math.min(0.6, userRotX + dy * 0.008));
        prevX = e.clientX;
        prevY = e.clientY;
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      dragDist = 0;
      prevX = e.clientX;
      prevY = e.clientY;
    };

    const onPointerUp = () => {
      if (isDragging && dragDist < 6) {
        triggerRef.current();
      }
      isDragging = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener('pointermove', onPointerMove);
    dom.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    let rafId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const dt = Math.min(clock.getDelta(), 0.05);
      const elapsed = clock.getElapsedTime();
      const s = stateRef.current;

      if (s.pulseBoost > 0.01) {
        s.pulseBoost = Math.max(0, s.pulseBoost - dt * 2.5);
      }

      const activeForm =
        targetFormations[s.activeSection] || targetFormations[0];

      const cursorWorldX = mouseNormX * 3.2;
      const cursorWorldY = mouseNormY * 2.2;

      for (let i = 0; i < NODE_COUNT; i++) {
        let tx = activeForm[i * 3];
        let ty = activeForm[i * 3 + 1];
        let tz = activeForm[i * 3 + 2];

        if (s.activeSection === 1) {
          const modeMultiplier = 1 + s.activeSkillIdx * 0.14;
          const angleOffset = s.activeSkillIdx * 0.8;
          const rx = tx * Math.cos(angleOffset) - tz * Math.sin(angleOffset);
          const rz = tx * Math.sin(angleOffset) + tz * Math.cos(angleOffset);
          tx = rx * modeMultiplier;
          tz = rz * modeMultiplier;
        }

        if (s.activeSection === 2) {
          const projWave = Math.sin(i * 0.2 + s.activeProjectIdx * 2.1) * 0.35;
          tx += projWave;
          ty += Math.cos(i * 0.15 + s.activeProjectIdx) * 0.25;
        }

        const wave = Math.sin(elapsed * 1.6 + i * 0.15) * 0.05;
        tx += wave;
        ty += Math.cos(elapsed * 1.4 + i * 0.12) * 0.05;

        const dx = cursorWorldX - tx;
        const dy = cursorWorldY - ty;
        const d = Math.hypot(dx, dy);
        if (d < 1.8) {
          const pull = (1 - d / 1.8) * 0.28;
          tx += dx * pull;
          ty += dy * pull;
        }

        currentPositions[i * 3] += (tx - currentPositions[i * 3]) * 0.07;
        currentPositions[i * 3 + 1] +=
          (ty - currentPositions[i * 3 + 1]) * 0.07;
        currentPositions[i * 3 + 2] +=
          (tz - currentPositions[i * 3 + 2]) * 0.07;
      }
      pointsGeo.attributes.position.needsUpdate = true;

      let lineIdx = 0;
      const maxConnectDist = s.activeSection === 0 ? 0.9 : 1.04;
      for (let i = 0; i < NODE_COUNT; i++) {
        const x1 = currentPositions[i * 3];
        const y1 = currentPositions[i * 3 + 1];
        const z1 = currentPositions[i * 3 + 2];

        for (let j = i + 1; j < NODE_COUNT; j++) {
          if (lineIdx >= maxLines) break;
          const x2 = currentPositions[j * 3];
          const y2 = currentPositions[j * 3 + 1];
          const z2 = currentPositions[j * 3 + 2];

          const distSq =
            (x1 - x2) * (x1 - x2) +
            (y1 - y2) * (y1 - y2) +
            (z1 - z2) * (z1 - z2);

          if (distSq < maxConnectDist * maxConnectDist) {
            linePositions[lineIdx * 6] = x1;
            linePositions[lineIdx * 6 + 1] = y1;
            linePositions[lineIdx * 6 + 2] = z1;
            linePositions[lineIdx * 6 + 3] = x2;
            linePositions[lineIdx * 6 + 4] = y2;
            linePositions[lineIdx * 6 + 5] = z2;
            lineIdx++;
          }
        }
      }
      lineGeo.setDrawRange(0, lineIdx * 2);
      lineGeo.attributes.position.needsUpdate = true;

      if (s.activeSection === 0) {
        constellationGroup.rotation.y +=
          (mouseNormX * 0.16 - constellationGroup.rotation.y) * 0.06;
        constellationGroup.rotation.x +=
          (-mouseNormY * 0.12 - constellationGroup.rotation.x) * 0.06;
        coreWireMat.opacity += (0.0 - coreWireMat.opacity) * 0.1;
      } else {
        userRotY += dt * (0.2 + s.pulseBoost * 1.4);
        constellationGroup.rotation.y +=
          (userRotY + mouseNormX * 0.32 - constellationGroup.rotation.y) * 0.08;
        constellationGroup.rotation.x +=
          (userRotX - mouseNormY * 0.22 - constellationGroup.rotation.x) * 0.08;
        coreWireMat.opacity += (0.18 - coreWireMat.opacity) * 0.08;
        coreWireMesh.rotation.y -= dt * 0.38;
      }

      const sparkScale =
        (s.activeSection === 0 ? 1.45 : 1.8) +
        Math.sin(elapsed * 4.2) * 0.22 +
        s.pulseBoost * 0.85;
      centralSpark.scale.set(sparkScale, sparkScale, 1);

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      dom.removeEventListener('pointermove', onPointerMove);
      dom.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', onResize);
      starTex.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="h-full w-full cursor-pointer"
      title="Gerakkan kursor atau klik untuk berinteraksi dengan konstelasi 3D"
    />
  );
};