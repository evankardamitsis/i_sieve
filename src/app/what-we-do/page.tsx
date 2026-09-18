import type { Metadata } from "next";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { Container, Eyebrow, PageHero } from "@/components/Section";
import { channels } from "@/lib/content";

export const metadata: Metadata = {
  title: "What we do",
  description: "Buzzsense: sentiment analysis and total brand exposure tracking across online text, video, audio and print.",
};

const sources = ["News portals", "Blogs", "Micro‑blogs", "Discussion forums", "Social networks", "Online video", "Video comments", "Audio streams", "Print (PDF)", "Sports footage", "TV & film"];

export default function WhatWeDo() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title={<>Cutting‑edge systems with an almost <em>magical</em> ability to find out what people are thinking.</>}
        lede="About your company, your services, and about your competitors. We crawl the web, identify what's relevant, classify its sentiment, and hand you everything we found."
      />

      {/* Sources marquee */}
      <div className="marquee-wrap overflow-hidden border-y border-line py-4">
        <div className="marquee flex w-max gap-10 whitespace-nowrap font-mono text-[0.75rem] uppercase tracking-[0.16em] text-ink-3">
          {[...sources, ...sources].map((s, i) => (
            <span key={i} className="flex items-center gap-10">{s}<span className="h-1 w-1 rounded-full bg-coral" /></span>
          ))}
        </div>
      </div>

      {/* Buzzsense */}
      <section id="buzzsense" className="scroll-mt-24 py-24 md:py-36">
        <Container className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal><Eyebrow>Buzzsense</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 className="display mt-6 text-4xl md:text-6xl">Measuring digital exposure.</h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={120}>
              <p className="text-lg leading-relaxed text-ink-2">
                Buzzsense is our online analytics service, providing total brand exposure monitoring to
                advertising agencies, media planners and media companies. It implements innovative,
                scientifically robust metrics — the <strong className="font-medium text-ink">buzzfactor</strong> for
                blogs, chat rooms and forums, the <strong className="font-medium text-ink">tubefactor</strong> for
                YouTube clips.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-ink-2">
                Our methods normalise simple mention measurements into meaningful insight on the sentiment
                polarity of the content, the paths and patterns of content spreading, and the size of the
                audience the content is reaching.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Channels — deep */}
      <section className="border-t border-line">
        {channels.map((c, i) => (
          <div key={c.key} id={c.key} className="scroll-mt-24 border-b border-line">
            <Container className="grid gap-8 py-16 md:grid-cols-12 md:py-24">
              <Reveal className="md:col-span-1">
                <span className="font-mono text-sm text-ink-3">0{i + 1}</span>
              </Reveal>
              <Reveal delay={60} className="md:col-span-4">
                <h3 className="display text-4xl md:text-5xl">{c.title}</h3>
                <p className="mt-3 text-ink-3">{c.tagline}</p>
              </Reveal>
              <Reveal delay={120} className="md:col-span-6 md:col-start-7">
                <p className="text-lg leading-relaxed text-ink-2">{c.body}</p>
                <div className="mt-6 rounded-2xl bg-paper-2 p-6">
                  <p className="eyebrow mb-2">We deliver</p>
                  <p className="leading-relaxed">{c.deliver}</p>
                </div>
              </Reveal>
            </Container>
          </div>
        ))}
      </section>

      {/* Deliverables */}
      <section className="bg-ink py-24 text-paper md:py-36">
        <Container>
          <Reveal><Eyebrow className="text-paper/50">What we deliver</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-6 max-w-3xl text-4xl md:text-6xl">The actual data. Not a summary of it.</h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-paper/15 md:grid-cols-3">
            {[
              ["The comment", "Every relevant comment, verbatim, usually as a spreadsheet. Captions for text; annotated proof images for video and photos."],
              ["Its address", "The URL of each item, so you can see any comment in its original context and check our findings yourself."],
              ["Its impact", "The Buzz Factor: a measure based on who links to the comment, whether it triggers further reaction, and the audience it reached."],
            ].map(([t, b], i) => (
              <Reveal key={t} delay={i * 90} className="card-sweep bg-ink p-8 transition-colors duration-500 hover:bg-blue-deep md:p-10">
                <h3 className="nudge display text-3xl">{t}</h3>
                <p className="mt-6 leading-relaxed text-paper/70">{b}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-12">
            <p className="max-w-2xl text-paper/65">
              Alongside the data we provide our own analysis and conclusions and, where requested,
              graphical representations of public sentiment as expressed online.
            </p>
            <div className="mt-8"><Button href="/contact" variant="light">Start a project</Button></div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
