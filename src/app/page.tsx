import Link from "next/link";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import SentimentBar from "@/components/SentimentBar";
import SentimentField from "@/components/SentimentField";
import { Container, Eyebrow } from "@/components/Section";
import { audiences, caseStudy, channels, steps } from "@/lib/content";

const questions = [
  { q: "How do people react to your advertising?", a: "We can tell you." },
  { q: "What do people really think about your company?", a: "We can tell you." },
  { q: "How would a stranger describe what you do?", a: "We can tell you that too." },
];

const samples = [
  { text: "I love the music on the new XYZ ad. Anyone know what it is?", tags: ["relevant", "positive"] },
  { text: "The new XYZ ad is SO SEXIST!", tags: ["relevant", "negative"] },
  { text: "Hey guys, have u seen the chick in the new XYZ ad? She so looks like Sally!", tags: ["relevant", "neutral"] },
  { text: "Products on sale in the new store include ABC, DEF and XYZ.", tags: ["irrelevant"] },
];

const tagStyle: Record<string, string> = {
  relevant: "border-ink/20 text-ink",
  irrelevant: "border-line text-ink-3 line-through",
  positive: "border-mint/40 bg-mint/10 text-mint",
  negative: "border-coral/40 bg-coral/10 text-coral",
  neutral: "border-blue/30 bg-blue/8 text-blue",
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <SentimentField className="absolute inset-0 h-full w-full" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-paper/70 via-transparent to-paper" />
        <Container className="relative flex min-h-[100svh] flex-col justify-end pb-16 pt-40 md:pb-24">
          <div className="rise">
            <Eyebrow>Sentiment analysis · Total exposure tracking</Eyebrow>
          </div>
          <div className="rise" style={{ animationDelay: "80ms" }}>
            <h1 className="display mt-6 max-w-[14ch] text-[3.4rem] md:text-[6.4rem] lg:text-[8rem]">
              What do people <em>really</em> think?
            </h1>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
            <div className="rise md:col-span-6" style={{ animationDelay: "160ms" }}>
              <p className="max-w-xl text-lg leading-relaxed text-ink-2 md:text-xl">
                i‑sieve crawls the web — news, blogs, forums, social, video and audio — and finds
                exactly what people say about your company, your campaigns and your competitors.
                Then we hand you the data.
              </p>
            </div>
            <div className="rise flex flex-wrap gap-3 md:col-span-6 md:justify-end" style={{ animationDelay: "240ms" }}>
              <Button href="/contact">Start a project</Button>
              <Button href="/how-it-works" variant="ghost">How it works</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Q&A */}
      <section className="border-y border-line">
        <Container className="grid md:grid-cols-3">
          {questions.map((item, i) => (
            <Reveal
              key={item.q}
              delay={i * 100}
              className={`py-12 md:py-16 ${i < 2 ? "md:border-r md:border-line md:pr-10" : ""} ${i > 0 ? "md:pl-10 border-t border-line md:border-t-0" : ""}`}
            >
              <p className="display text-2xl md:text-[1.9rem] leading-tight">{item.q}</p>
              <p className="mt-5 font-mono text-[0.78rem] uppercase tracking-[0.14em] text-blue">— {item.a}</p>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* WHAT WE DO + CLASSIFIER */}
      <section className="py-24 md:py-36">
        <Container className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal><Eyebrow>What we do</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 className="display mt-6 text-4xl md:text-6xl">
                The buzz‑phrase is <em>sentiment analysis</em>. Here’s what that actually means.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 text-lg leading-relaxed text-ink-2">
                We identify relevant comments made by news media and by people in blogs, micro‑blogs,
                online video — in the stream itself and in the comments beneath it — discussion forums
                and public social networks. Sophisticated techniques extract what’s relevant to your
                question and classify it as positive, negative, neutral or balanced. Everything
                irrelevant is discarded.
              </p>
            </Reveal>
            <Reveal delay={240} className="mt-8">
              <Link href="/what-we-do" className="u-link text-ink">Explore the full offering →</Link>
            </Reveal>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={120}>
              <p className="eyebrow mb-4">Live classification · campaign: “XYZ ad”</p>
              <ul className="divide-y divide-line border-y border-line">
                {samples.map((s, i) => (
                  <li key={i} className="grid gap-3 py-5 md:grid-cols-[1fr_auto] md:items-center">
                    <p className={`text-[1.05rem] leading-snug ${s.tags.includes("irrelevant") ? "text-ink-3" : ""}`}>
                      “{s.text}”
                    </p>
                    <div className="flex gap-2">
                      {s.tags.map((t) => (
                        <span key={t} className={`rounded-full border px-2.5 py-1 font-mono text-[0.66rem] uppercase tracking-wider ${tagStyle[t]}`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-ink-3">
                The last one mentions the product but says nothing about the campaign — so it never reaches your report.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CHANNELS */}
      <section className="bg-ink py-24 text-paper md:py-36">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <Reveal><Eyebrow className="text-paper/50">Total exposure tracking</Eyebrow></Reveal>
              <Reveal delay={80}>
                <h2 className="display mt-6 text-4xl md:text-6xl">
                  Every channel your brand appears in. <em>Measured.</em>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={160} className="md:col-span-4 md:col-start-9">
              <p className="text-paper/65 leading-relaxed">
                Buzzsense normalises simple mention counts into meaningful insight: sentiment polarity,
                the paths and patterns of content spreading, and the size of the audience reached.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px bg-paper/15 md:grid-cols-4">
            {channels.map((c, i) => (
              <Reveal key={c.key} delay={i * 90} className="group bg-ink p-8 transition-colors hover:bg-blue-deep md:p-10">
                <span className="font-mono text-[0.7rem] text-paper/40">0{i + 1}</span>
                <h3 className="display mt-6 text-3xl">{c.title}</h3>
                <p className="mt-2 text-sm text-paper/55">{c.tagline}</p>
                <p className="mt-8 text-[0.95rem] leading-relaxed text-paper/80">{c.body}</p>
                <p className="mt-6 border-t border-paper/15 pt-4 text-sm leading-relaxed text-paper/60">
                  <span className="text-coral">Delivers</span> · {c.deliver}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-36">
        <Container>
          <Reveal><Eyebrow>How it works</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-6 max-w-3xl text-4xl md:text-6xl">
              A three‑step process. The web is our database.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 110} className="border-t border-ink pt-6">
                <div className="flex items-baseline justify-between">
                  <span className="display text-5xl text-blue">{s.n}</span>
                  <span className="font-mono text-[0.7rem] uppercase tracking-wider text-ink-3">{s.time}</span>
                </div>
                <h3 className="display mt-6 text-2xl md:text-3xl">{s.title}</h3>
                <p className="mt-4 leading-relaxed text-ink-2">{s.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-12">
            <Button href="/how-it-works" variant="ghost">The buzzfactor, tubefactor and influence</Button>
          </Reveal>
        </Container>
      </section>

      {/* DATA PROMISE */}
      <section className="border-y border-line bg-paper-2 py-24 md:py-32">
        <Container className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <h2 className="display text-4xl md:text-[3.6rem]">
              We don’t just give you a chart. <em>We give you the data.</em>
            </h2>
          </Reveal>
          <div className="md:col-span-5 md:col-start-8">
            <Reveal delay={100}>
              <p className="text-lg leading-relaxed text-ink-2">
                One of i‑sieve’s unique features: we deliver the exact data our classifiers used —
                usually as a spreadsheet. The comment itself, its URL, and a measure of its impact
                we call the <strong className="font-medium text-ink">Buzz Factor</strong>. Captions for
                text, annotated proof images for video.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-ink-2">
                You’re free to analyse it yourself, check our findings and see every comment in its
                original context.
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-6">
              {[
                ["~500k", "resources scanned per project"],
                ["2–7 days", "to train a new category"],
                ["Daily", "reporting once trained"],
              ].map(([v, l]) => (
                <div key={v}>
                  <p className="display text-3xl md:text-4xl">{v}</p>
                  <p className="mt-2 text-xs leading-snug text-ink-3">{l}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* WHO WE WORK FOR */}
      <section className="py-24 md:py-36">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal><Eyebrow>Who we work for</Eyebrow></Reveal>
              <Reveal delay={80}>
                <h2 className="display mt-6 text-4xl md:text-5xl">
                  Anyone with a message to convey, a brand to promote, a policy to implement, or a point of view to popularise.
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <ul className="border-t border-ink">
                {audiences.map((a, i) => (
                  <Reveal key={a.slug} as="li" delay={i * 60} className="border-b border-line">
                    <Link
                      href={`/who-we-work-for#${a.slug}`}
                      className="group flex items-baseline justify-between gap-6 py-6 transition-colors hover:text-blue"
                    >
                      <span className="display text-3xl md:text-4xl">{a.title}</span>
                      <span className="font-mono text-xs text-ink-3 transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CASE STUDY */}
      <section className="bg-ink py-24 text-paper md:py-36">
        <Container className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal><Eyebrow className="text-paper/50">Case study · {caseStudy.when}</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 className="display mt-6 text-4xl md:text-6xl">{caseStudy.title}</h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 leading-relaxed text-paper/70">{caseStudy.context}</p>
            </Reveal>
            <Reveal delay={240} className="mt-10 grid grid-cols-3 gap-4 border-t border-paper/15 pt-6">
              {caseStudy.stats.map((s) => (
                <div key={s.label}>
                  <p className="display text-3xl md:text-4xl">{s.value}</p>
                  <p className="mt-1 text-xs text-paper/50">{s.label}</p>
                </div>
              ))}
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-10">
            <Reveal delay={120}>
              <SentimentBar dark label="All web references" {...caseStudy.web} />
            </Reveal>
            <Reveal delay={200}>
              <SentimentBar dark label="Shell · Twitter" {...caseStudy.shellTwitter} />
            </Reveal>
            <Reveal delay={280}>
              <blockquote className="border-l-2 border-coral pl-6">
                <p className="display text-2xl leading-snug md:text-3xl">“{caseStudy.quotes[0].text}”</p>
                <cite className="mt-4 block font-mono text-xs not-italic text-paper/50">{caseStudy.quotes[0].source}</cite>
              </blockquote>
            </Reveal>
            <Reveal delay={340}>
              <Button href="/about#case-study" variant="light">Read the case study</Button>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-blue py-28 text-paper md:py-44">
        <div className="mesh mesh-fade absolute inset-0 text-paper" aria-hidden />
        <Container className="relative">
          <Reveal>
            <p className="eyebrow text-paper/60">Start here</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-6 max-w-[12ch] text-[3.2rem] leading-[0.95] md:text-[6rem] lg:text-[7.5rem]">
              Find out which half is <em>wasted</em>.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-12 md:items-end">
            <Reveal delay={160} className="md:col-span-6">
              <p className="max-w-xl text-lg leading-relaxed text-paper/85 md:text-xl">
                Send us one question about your brand, campaign or issue. Within two working days
                you’ll have a proposal: how we’d train the system, when the first data lands, and
                what it costs to keep listening.
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-paper/60">
                <li>No obligation</li>
                <li>Answer in 2 working days</li>
                <li>You keep the data</li>
              </ul>
            </Reveal>
            <Reveal delay={240} className="flex flex-col items-start gap-4 md:col-span-5 md:col-start-8 md:items-end">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 rounded-full bg-paper px-8 py-5 text-lg font-medium text-ink transition-all duration-300 hover:bg-white hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] md:text-xl"
              >
                Send us your question
                <span className="inline-block h-2 w-2 rounded-full bg-coral transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
              <a href="mailto:info@isievetech.com" className="u-link text-paper/80 hover:text-paper">
                or email info@isievetech.com
              </a>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
