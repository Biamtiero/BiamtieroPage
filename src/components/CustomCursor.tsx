import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'drag' | 'text'>('default');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on devices with fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let rafId: number;
    let targetX = -100;
    let targetY = -100;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: targetX, y: targetY });
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest('[data-cursor="drag"]')) {
        setCursorType('drag');
      } else if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.closest('[data-cursor="pointer"]')
      ) {
        setCursorType('pointer');
      } else if (target.closest('input') || target.closest('textarea') || target.closest('code')) {
        setCursorType('text');
      } else {
        setCursorType('default');
      }
    };

    const animateTrail = () => {
      setTrail((prev) => ({
        x: prev.x + (targetX - prev.x) * 0.22,
        y: prev.y + (targetY - prev.y) * 0.22,
      }));
      rafId = requestAnimationFrame(animateTrail);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    rafId = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block no-print">
      {/* Precision Inner Dot */}
      <div
        className="fixed h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981] transition-transform duration-75"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${cursorType === 'pointer' ? 1.6 : 1})`,
        }}
      />
      {/* Contextual Outer Ring */}
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-150 flex items-center justify-center ${
          cursorType === 'pointer'
            ? 'h-11 w-11 border-emerald-400/70 bg-emerald-500/10'
            : cursorType === 'drag'
            ? 'h-12 w-12 border-cyan-400/80 bg-cyan-500/15'
            : cursorType === 'text'
            ? 'h-7 w-2 rounded-sm border-amber-400/70 bg-amber-400/20'
            : 'h-7 w-7 border-slate-400/30'
        }`}
        style={{
          left: trail.x,
          top: trail.y,
        }}
      >
        {cursorType === 'drag' && (
          <span className="font-mono text-[8px] tracking-tighter text-cyan-300 uppercase">DRAG</span>
        )}
      </div>
    </div>
  );
};
