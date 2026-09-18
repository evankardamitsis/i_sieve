import { Brandify } from "./Brand";
export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1400px] px-6 md:px-10 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${className}`}>
      <span className="dot-pulse inline-block h-1.5 w-1.5 rounded-full bg-coral" />
      {children}
    </p>
  );
}

export function PageHero({
  eyebrow, title, lede,
}: { eyebrow: string; title: React.ReactNode; lede?: string }) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
      <div className="mesh mesh-fade absolute inset-0 text-ink" aria-hidden />
      <Container className="relative">
        <div className="rise"><Eyebrow><Brandify>{eyebrow}</Brandify></Eyebrow></div>
        <h1 style={{ animationDelay: "80ms" }} className="rise display mt-6 max-w-5xl text-[2.9rem] md:text-[5rem] lg:text-[6.2rem]">{title}</h1>
        {lede && <p style={{ animationDelay: "160ms" }} className="rise mt-8 max-w-2xl text-lg leading-relaxed text-ink-2 md:text-xl"><Brandify>{lede}</Brandify></p>}
      </Container>
    </section>
  );
}
