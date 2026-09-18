import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { Container, PageHero } from "@/components/Section";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us the question you want answered. i-sieve technologies, Dundalk, Ireland.",
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Tell us the <em>question</em>.</>}
        lede="We’ll come back with how we’d train the system for it, how long that takes, and what ongoing monitoring would cost."
      />
      <section className="border-t border-line py-20 md:py-28">
        <Container className="grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow mb-4">Email</p>
            <a href="mailto:info@isievetech.com" className="display u-link text-2xl md:text-3xl">info@isievetech.com</a>
            <p className="eyebrow mb-4 mt-12">Office</p>
            <address className="not-italic leading-relaxed text-ink-2">
              i‑sieve technologies LIMITED<br />1 Francis St, Dundalk<br />Louth A91 XK38<br />Ireland
            </address>
            <p className="eyebrow mb-4 mt-12">Elsewhere</p>
            <a className="u-link" href="https://www.linkedin.com/company/isievetech" target="_blank" rel="noreferrer">LinkedIn</a>
          </Reveal>
          <Reveal delay={120} className="md:col-span-7 md:col-start-6">
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
