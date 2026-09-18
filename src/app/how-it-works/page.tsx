import type { Metadata } from "next";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { Sieve } from "@/components/Brand";
import { Container, Eyebrow, PageHero } from "@/components/Section";
import { steps } from "@/lib/content";

export const metadata: Metadata = {
  title: "How it works",
  description: "A three-step process: define the search, collect and analyse, report. Plus the buzzfactor, tubefactor and how we pinpoint influence.",
};

const buzzCues = ["Recency", "Number of viewers", "Author’s reputation", "In‑links", "Number of comments", "Keyword frequency", "PageRank"];
const tubeCues = ["Recency", "Views", "Duration", "Comments", "Votes & ratings", "Channel views", "Subscribers", "Friends"];

export default function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title={<>We <em>teach</em> computers to answer your particular question.</>}
        lede="This may sound like science fiction, but it really is what we do. Our software gives computers the ability to recognise features of text, images and video — and our human team shows them what to look for."
      />

      {/* Steps */}
      <section className="border-t border-line">
        {steps.map((s) => (
          <div key={s.n} className="border-b border-line">
            <Container className="grid gap-8 py-16 md:grid-cols-12 md:py-24">
              <Reveal className="md:col-span-2">
                <span className="display text-6xl text-blue md:text-7xl">{s.n}</span>
              </Reveal>
              <Reveal delay={60} className="md:col-span-3">
                <h2 className="display text-3xl md:text-4xl">{s.title}</h2>
                <p className="mt-3 font-mono text-[0.72rem] uppercase tracking-wider text-ink-3">{s.time}</p>
              </Reveal>
              <Reveal delay={120} className="md:col-span-6 md:col-start-7">
                <p className="text-lg leading-relaxed text-ink-2">{s.body}</p>
              </Reveal>
            </Container>
          </div>
        ))}
      </section>

      {/* Ontology & clusters */}
      <section className="py-24 md:py-36">
        <Container className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal><Eyebrow>Learning, then listening</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 className="display mt-6 text-4xl md:text-5xl">Clusters, and the ones nobody asked for.</h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-6 text-lg leading-relaxed text-ink-2">
            <Reveal delay={100}>
              <p>
                Our team identifies examples of relevant comments that <Sieve /> computers then analyse —
                literally learning how to distinguish relevant from irrelevant, positive from negative,
                interesting from unimportant. Relevant comments are assigned to one or more clusters:
                comments about the music on an ad, comments about the product’s effectiveness, and so on.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>
                Sometimes the system finds resources that are clearly relevant but don’t fit any
                pre‑defined cluster. The team is alerted and can define a new one — even if it isn’t what
                was originally asked.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <blockquote className="rounded-2xl bg-paper-2 p-8">
                <p className="display text-2xl leading-snug md:text-3xl">
                  Work on a painkiller aimed at lower‑back and arthritis pain revealed a huge cluster of
                  women in their mid‑30s using it for menstrual cramps.
                </p>
                <cite className="mt-4 block font-mono text-xs not-italic text-ink-3">Discovered by the ontology — not by the brief.</cite>
              </blockquote>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Buzzfactor / Tubefactor */}
      <section className="bg-ink py-24 text-paper md:py-36">
        <Container>
          <Reveal><Eyebrow className="text-paper/50">Normalising the noise</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-6 max-w-4xl text-4xl md:text-6xl">
              A mention is not an opinion. A view is not an impact.
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-16 md:grid-cols-2">
            <Reveal id="buzzfactor" delay={100} className="scroll-mt-24">
              <h3 className="display text-4xl">The buzzfactor</h3>
              <p className="mt-6 leading-relaxed text-paper/75">
                During collection a huge number of items are identified. Some are mere mentions with no
                opinion; others lie low in obscure corners of the web. We use every reference in building
                overall buzz measures and trends, but we apply the buzzfactor to normalise the data and
                select meaningful samples for deeper analysis. It estimates the size of the audience reached —
                and therefore the message’s influence.
              </p>
              <p className="eyebrow mt-8 text-paper/50">Calculated from</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {buzzCues.map((c) => (
                  <li key={c} className="rounded-full border border-paper/20 px-3 py-1 text-sm text-paper/80">{c}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal id="tubefactor" delay={180} className="scroll-mt-24">
              <h3 className="display text-4xl">The tubefactor</h3>
              <p className="mt-6 leading-relaxed text-paper/75">
                Views alone are not a robust metric for a clip’s impact. While collecting and delivering
                all relevant clips, we apply the tubefactor to normalise the data and quantify their
                influence. It goes one step further: following through on uploaders’ profiles to include a
                contributing factor derived from their channel’s reach.
              </p>
              <p className="eyebrow mt-8 text-paper/50">Calculated from</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {tubeCues.map((c) => (
                  <li key={c} className="rounded-full border border-paper/20 px-3 py-1 text-sm text-paper/80">{c}</li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={240} className="mt-20 grid gap-8 border-t border-paper/15 pt-10 md:grid-cols-12">
            <h3 className="display text-3xl md:col-span-4 md:text-4xl">Pinpointing influence</h3>
            <p className="leading-relaxed text-paper/75 md:col-span-7 md:col-start-6">
              The higher the buzzfactor, the more impactful the resource — helping analysts rank sites,
              identify discussion hotspots for deeper monitoring, and find the power‑users in blogs and forums
              of the domain. The higher the tubefactor, the more impactful the clip. Using graph theory we
              derive special subgraphs — cliques — of these power‑users and obtain a solid group of
              influencers, ready for marketers to engage.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Key features */}
      <section className="py-24 md:py-36">
        <Container>
          <Reveal><Eyebrow>Why our approach holds up</Eyebrow></Reveal>
          <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {[
              ["The web is our database", "Every project starts afresh, which shows in data quality, freshness and relevance. New sources are added as soon as they become available."],
              ["Fine accuracy, with alerts", "The ontology approach allows fine accuracy — and content that passes the ontology but can’t be clustered alerts a human."],
              ["Terms users actually use", "Strengthening the ontology with concepts discussed by users helps marketing teams qualify issues they never knew existed."],
              ["Languages at minimal cost", "Professional services are needed only for the first few days to define the ontology, then for rudimentary checks at delivery."],
              ["Verifiable results", "We deliver the exact data used by our classifiers. Clients can verify results and analyse the data further themselves."],
              ["Low maintenance", "The master ontology is built at startup; keeping it fresh and efficient is mainly a matter of tuning."],
            ].map(([t, b], i) => (
              <Reveal key={t} delay={i * 60} className="bg-paper p-8">
                <h3 className="display text-2xl">{t}</h3>
                <p className="mt-4 leading-relaxed text-ink-2">{b}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-12"><Button href="/contact">Brief us on a category</Button></Reveal>
        </Container>
      </section>
    </>
  );
}
