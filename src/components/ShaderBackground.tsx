import React, { useEffect, useRef } from 'react';
import { useSystem } from '../context/SystemContext';

export const ShaderBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme, matrixActive } = useSystem();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let rafId: number;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Cursor & Scroll velocity tracking
    let mouseX = width * 0.5;
    let mouseY = height * 0.35;
    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onScroll = () => {
      const currentY = window.scrollY;
      scrollVelocity = Math.min(Math.abs(currentY - lastScrollY), 60);
      lastScrollY = currentY;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    // Particles for harmonic field
    const particleCount = Math.min(65, Math.floor((width * height) / 24000));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      size: Math.random() * 1.8 + 0.7,
    }));

    // Matrix rain columns
    const columns = Math.floor(width / 18);
    const drops: number[] = Array(columns).fill(1);
    const chars = '01BIAMTIERORUSTGOLANGK8SGRAPHQL∑∆Ωλ';

    let tick = 0;
    const render = () => {
      tick += 0.012;
      scrollVelocity *= 0.92;

      if (matrixActive) {
        ctx.fillStyle = 'rgba(4, 12, 6, 0.14)';
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = '#10b981';
        ctx.font = '13px "JetBrains Mono", monospace';
        for (let i = 0; i < drops.length; i++) {
          const text = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillText(text, i * 18, drops[i] * 18);
          if (drops[i] * 18 > height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
        rafId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Dynamic radial shader glow following cursor
      const isLight = theme === 'light';
      const grad = ctx.createRadialGradient(mouseX, mouseY, 10, mouseX, mouseY, 520);
      if (isLight) {
        grad.addColorStop(0, 'rgba(16, 185, 129, 0.09)');
        grad.addColorStop(0.5, 'rgba(6, 182, 212, 0.04)');
        grad.addColorStop(1, 'rgba(248, 250, 252, 0)');
      } else {
        grad.addColorStop(0, 'rgba(16, 185, 129, 0.11)');
        grad.addColorStop(0.5, 'rgba(6, 182, 212, 0.05)');
        grad.addColorStop(1, 'rgba(6, 8, 13, 0)');
      }
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Update & draw interconnected architectural mesh nodes
      const speedBoost = 1 + scrollVelocity * 0.08;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx * speedBoost;
        p.y += p.vy * speedBoost;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Subtle repulsion/attraction to cursor
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 180) {
          p.x -= (dx / (dist + 1)) * 0.35;
          p.y -= (dy / (dist + 1)) * 0.35;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = isLight ? 'rgba(5, 150, 105, 0.35)' : 'rgba(16, 185, 129, 0.45)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const ldx = p.x - p2.x;
          const ldy = p.y - p2.y;
          const ldist = Math.hypot(ldx, ldy);
          if (ldist < 135) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - ldist / 135) * (isLight ? 0.12 : 0.16);
            ctx.strokeStyle = isLight
              ? `rgba(15, 23, 42, ${alpha})`
              : `rgba(52, 211, 153, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, [theme, matrixActive]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 no-print"
      aria-hidden="true"
    />
  );
};
