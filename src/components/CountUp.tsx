"use client";
import { useEffect, useRef, useState } from "react";

/** Counts a formatted number ("2,800", "~500k") up from zero when it scrolls into view. */
export default function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [text, setText] = useState(value);
  const m = value.match(/^([^\d]*)([\d,]+)(.*)$/);

  useEffect(() => {
    const el = ref.current;
    if (!el || !m) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const [, prefix, num, suffix] = m;
    const target = parseInt(num.replace(/,/g, ""), 10);
    const hasComma = num.includes(",");
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1400;
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / dur);
        const eased = 1 - Math.pow(1 - p, 4);
        const n = Math.round(target * eased);
        setText(`${prefix}${hasComma ? n.toLocaleString("en-GB") : n}${suffix}`);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      setText(`${prefix}0${suffix}`);
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <span ref={ref} className={`tabular-nums ${className}`}>{text}</span>;
}
