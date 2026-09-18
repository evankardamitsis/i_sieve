type Props = { className?: string; size?: number; color?: string };

/** The sieve mark: a mesh disc, noise above it, signal passing through below. */
export function Mark({ className, size = 36, color = "currentColor" }: Props) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      {/* mesh disc */}
      <circle cx="20" cy="17" r="13" stroke={color} strokeWidth="1.6" />
      <g stroke={color} strokeWidth="0.9" opacity="0.55">
        <line x1="7.5" y1="12" x2="32.5" y2="12" />
        <line x1="7" y1="17" x2="33" y2="17" />
        <line x1="7.5" y1="22" x2="32.5" y2="22" />
        <line x1="15" y1="4.9" x2="15" y2="29.1" />
        <line x1="20" y1="4" x2="20" y2="30" />
        <line x1="25" y1="4.9" x2="25" y2="29.1" />
      </g>
      {/* noise caught on the mesh */}
      <g fill={color}>
        <circle cx="12.5" cy="14.5" r="1.6" />
        <circle cx="22.5" cy="9.5" r="1.4" />
        <circle cx="27.5" cy="19.5" r="1.7" />
        <circle cx="17.5" cy="24.5" r="1.3" />
      </g>
      {/* the signal that passes through */}
      <circle cx="20" cy="36" r="2.6" fill="var(--coral)" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <Mark size={30} />
      <span className="display text-[1.35rem] leading-none tracking-tight">
        i‑sieve
        <span className="ml-1.5 font-sans text-[0.62rem] uppercase tracking-[0.18em] text-ink-3 align-middle">
          technologies
        </span>
      </span>
    </span>
  );
}
