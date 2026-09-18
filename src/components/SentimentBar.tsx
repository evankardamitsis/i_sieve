export default function SentimentBar({
  positive, negative, neutral, label, dark = false,
}: { positive: number; negative: number; neutral: number; label?: string; dark?: boolean }) {
  const muted = dark ? "text-paper/50" : "text-ink-3";
  return (
    <div>
      {label && <p className={`eyebrow mb-3 ${dark ? "text-paper/50" : ""}`}>{label}</p>}
      <div className="flex h-3 w-full overflow-hidden rounded-full">
        <div className="bg-mint" style={{ width: `${positive}%` }} />
        <div className={dark ? "bg-paper/25" : "bg-paper-3"} style={{ width: `${neutral}%` }} />
        <div className="bg-coral" style={{ width: `${negative}%` }} />
      </div>
      <div className={`mt-2 flex justify-between font-mono text-[0.7rem] uppercase tracking-wider ${muted}`}>
        <span><span className="text-mint">●</span> {positive}% positive</span>
        <span>{neutral}% neutral</span>
        <span>{negative}% negative <span className="text-coral">●</span></span>
      </div>
    </div>
  );
}
