import type { Metadata } from "next";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { Sieve, Brandify } from "@/components/Brand";
import SentimentBar from "@/components/SentimentBar";
import CountUp from "@/components/CountUp";
import { Container, Eyebrow, PageHero } from "@/components/Section";
import { caseStudy } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Founded in 2004 by four researchers as a spin-off of NCSR Demokritos, i-sieve technologies specialises in automatic identification and classification of online multimedia content.",
};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About i‑sieve"
        title={<>Born in a research centre. Built for the <em>open web</em>.</>}
        lede="i‑sieve technologies is a technology company specialising in the automatic identification and classification of online multimedia content."
      />

      <section className="border-t border-line py-24 md:py-32">
        <Container className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 space-y-6 text-lg leading-relaxed text-ink-2">
            <Reveal>
              <p>
                Incorporated in late 2004 by four prominent researchers in the field, as a spin‑off of
                NCSR “Demokritos” — the largest public research centre in Greece — <Sieve /> has developed a
                suite of tools specifically targeted at online data identification, collection and semantic
                analysis.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p>
                Our innovative “Method for probabilistic information fusion to filter multilingual,
                semi‑structured and multimedia electronic content” was awarded a patent in May 2005.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <ol className="border-t border-ink">
              {[
                ["2004", "Incorporated as a spin‑off of NCSR “Demokritos”, Athens."],
                ["2005", "Patent awarded for probabilistic information fusion across multilingual, multimedia content."],
                ["2009", "Buzzsense launched: total exposure tracking across text, video, audio and print."],
                ["Today", "i‑sieve technologies LIMITED, Dundalk, Ireland."],
              ].map(([y, t], i) => (
                <Reveal key={y} as="li" delay={i * 80} className="row-hover grid grid-cols-[6rem_1fr] gap-4 border-b border-line py-5">
                  <span className="display text-2xl text-blue">{y}</span>
                  <span className="pt-1 leading-relaxed text-ink-2"><Brandify>{t}</Brandify></span>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Case study */}
      <section id="case-study" className="scroll-mt-20 bg-ink py-24 text-paper md:py-36">
        <Container>
          <Reveal><Eyebrow className="text-paper/50">Case study · {caseStudy.when}</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-6 text-4xl md:text-6xl">{caseStudy.title}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/70">{caseStudy.context}</p>
          </Reveal>

          <div className="mt-16 grid gap-6 border-y border-paper/15 py-8 md:grid-cols-3">
            {caseStudy.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <p className="display text-5xl md:text-6xl"><CountUp value={s.value} /></p>
                <p className="mt-2 text-sm text-paper/60">{s.label}</p>
                {s.note && <p className="text-xs text-paper/40">{s.note}</p>}
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-16 md:grid-cols-2">
            <div className="space-y-10">
              <Reveal><SentimentBar dark label="Web references — all companies" {...caseStudy.web} /></Reveal>
              <Reveal delay={80}><SentimentBar dark label="Web references — Shell" {...caseStudy.shellWeb} /></Reveal>
              <Reveal delay={160}><SentimentBar dark label="Twitter — Shell" {...caseStudy.shellTwitter} /></Reveal>
            </div>
            <Reveal delay={120}>
              <p className="eyebrow mb-4 text-paper/50">Share of company opinions on Twitter (@climatecamp)</p>
              <ul className="space-y-3">
                {caseStudy.twitterShare.map((c, i) => (
                  <li key={c.name} className="grid grid-cols-[6rem_1fr_3rem] items-center gap-4 text-sm">
                    <span>{c.name}</span>
                    <span className="h-2 rounded-full bg-paper/15">
                      <span className="grow block h-2 rounded-full bg-[#8fa3ff]" style={{ width: `${c.pct}%`, "--d": `${150 + i * 90}ms` } as React.CSSProperties} />
                    </span>
                    <span className="text-right font-mono text-xs text-paper/60">{c.pct}%</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-paper/60">
                Where Shell was referenced on Twitter we saw 60% negative and 40% neutral — and 0% positive.
              </p>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {caseStudy.quotes.map((q, i) => (
              <Reveal key={q.source} delay={i * 90} className={`border-l-2 pl-6 ${"border-[#8fa3ff]"}`}>
                <p className="display text-xl leading-snug md:text-2xl">“{q.text}”</p>
                <cite className="mt-4 block font-mono text-xs not-italic text-paper/50">
                  {q.source} · <span className={q.tone === "negative" ? "text-coral" : ""}>{q.tone}</span>
                </cite>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container className="grid gap-10 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-7">
            <h2 className="display text-4xl md:text-6xl">Want to know what they’d say about <em>you</em>?</h2>
          </Reveal>
          <Reveal delay={100} className="md:col-span-4 md:col-start-9 md:justify-self-end">
            <Button href="/contact">Get in touch</Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
