import type { Metadata } from "next";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { Container, PageHero } from "@/components/Section";
import { audiences } from "@/lib/content";

export const metadata: Metadata = {
  title: "Who we work for",
  description: "Ad agencies, media organisations, brand owners, standards bodies and policy makers.",
};

export default function WhoWeWorkFor() {
  return (
    <>
      <PageHero
        eyebrow="Who we work for"
        title={<>A message to convey. A brand to promote. A policy to implement. A point of view to <em>popularise</em>.</>}
        lede="If people are talking about it online, we can measure what they say, how it changes, and who is shaping it."
      />

      <nav className="border-y border-line">
        <Container className="flex flex-wrap gap-x-8 gap-y-2 py-4 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-3">
          {audiences.map((a) => (
            <a key={a.slug} href={`#${a.slug}`} className="hover:text-ink">{a.title}</a>
          ))}
        </Container>
      </nav>

      {audiences.map((a, i) => (
        <section
          key={a.slug}
          id={a.slug}
          className={`scroll-mt-20 border-b border-line ${i % 2 === 1 ? "bg-paper-2" : ""}`}
        >
          <Container className="grid gap-10 py-20 md:grid-cols-12 md:py-28">
            <Reveal className="md:col-span-5">
              <span className="font-mono text-sm text-ink-3">0{i + 1}</span>
              <h2 className="display mt-4 text-4xl md:text-6xl">{a.title}</h2>
              <p className="display mt-8 text-xl leading-snug text-ink-2 md:text-2xl">{a.lede}</p>
            </Reveal>
            <Reveal delay={120} className="md:col-span-6 md:col-start-7 md:pt-12">
              <p className="text-lg leading-relaxed text-ink-2">{a.body}</p>
            </Reveal>
          </Container>
        </section>
      ))}

      <section className="py-24 md:py-32">
        <Container className="text-center">
          <Reveal>
            <h2 className="display mx-auto max-w-3xl text-4xl md:text-6xl">Don’t see yourself here? If people talk about it, we can measure it.</h2>
          </Reveal>
          <Reveal delay={120} className="mt-10 flex justify-center">
            <Button href="/contact">Tell us your question</Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
