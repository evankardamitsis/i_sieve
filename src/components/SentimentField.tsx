"use client";
import { useEffect, useRef } from "react";

/**
 * Decorative canvas: "mentions" drift upward through a dotted sieve line.
 * Below the line they are grey, unclassified noise; once they pass through
 * they become classified signal (blue = neutral, mint = positive, coral = negative).
 */
export default function SentimentField({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0, h = 0, raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    type P = { x: number; y: number; r: number; v: number; t: number; c: string };
    let pts: P[] = [];
    const colors = ["#1f3fbf", "#1f3fbf", "#3e8e63", "#d9583b"];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.floor((w * h) / 9000);
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 1.2 + Math.random() * 2.2,
        v: 0.12 + Math.random() * 0.35,
        t: Math.random() * Math.PI * 2,
        c: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const sieveY = h * 0.55;
      // sieve line
      ctx.strokeStyle = "rgba(20,20,18,0.18)";
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 6]);
      ctx.beginPath(); ctx.moveTo(0, sieveY); ctx.lineTo(w, sieveY); ctx.stroke();
      ctx.setLineDash([]);

      for (const p of pts) {
        if (!reduce) { p.y -= p.v; p.t += 0.02; }
        if (p.y < -6) { p.y = h + 6; p.x = Math.random() * w; }
        const below = p.y > sieveY;
        const wobble = Math.sin(p.t) * 0.6;
        ctx.beginPath();
        ctx.arc(p.x + wobble, p.y, p.r, 0, Math.PI * 2);
        if (below) {
          ctx.fillStyle = "rgba(20,20,18,0.16)";
        } else {
          ctx.fillStyle = p.c;
          ctx.globalAlpha = 0.85;
        }
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    resize(); draw();
    const ro = new ResizeObserver(() => { resize(); if (reduce) draw(); });
    ro.observe(canvas);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
