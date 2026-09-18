type MarkProps = { className?: string; size?: number; color?: string; accent?: string };

/**
 * The sieve mark: a perforated disc built from a dot grid,
 * with one dot (the signal) passing through in the accent colour.
 */
export function Mark({ className, size = 32, color = "currentColor", accent = "var(--blue)" }: MarkProps) {
  const dots: { x: number; y: number }[] = [];
  const step = 6.5;
  const c = 20;
  const r = 14.2;
  for (let i = -2; i <= 2; i++) {
    for (let j = -2; j <= 2; j++) {
      const x = c + i * step;
      const y = c + j * step;
      if (Math.hypot(x - c, y - c) <= r) dots.push({ x, y });
    }
  }
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      {dots.map((d, i) => {
        const isSignal = d.x === c && d.y === c + step * 2;
        return (
          <circle
            key={i}
            className={isSignal ? "signal" : undefined}
            cx={d.x}
            cy={isSignal ? d.y + 4.5 : d.y}
            r={isSignal ? 3.1 : 2.6}
            fill={isSignal ? accent : color}
          />
        );
      })}
    </svg>
  );
}

export function Wordmark({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark size={34} className={light ? "text-paper" : "text-ink"} accent={light ? "#8fa3ff" : "var(--blue)"} />
      <span className="flex items-baseline gap-2">
        <span className={`font-sans text-[1.25rem] font-semibold leading-none tracking-[-0.03em] ${light ? "text-paper" : "text-blue"}`}>
          i‑sieve
        </span>
      </span>
    </span>
  );
}
