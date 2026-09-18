import Link from "next/link";
import { Sieve } from "@/components/Brand";
import { Mark } from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Mark size={44} className="text-paper" />
            <p className="display mt-6 max-w-sm text-3xl md:text-4xl">
              Beyond <em>impressions</em>.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">
              Sentiment analysis and total exposure tracking across text, video, audio and print.
              We tell you what people really think — and give you the data to prove it.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <p className="eyebrow mb-4 text-paper/50">Company</p>
            <ul className="space-y-2 text-sm text-paper/85">
              <li><Link className="transition-colors hover:text-paper/60" href="/what-we-do">What we do</Link></li>
              <li><Link className="transition-colors hover:text-paper/60" href="/how-it-works">How it works</Link></li>
              <li><Link className="transition-colors hover:text-paper/60" href="/who-we-work-for">Who we work for</Link></li>
              <li><Link className="transition-colors hover:text-paper/60" href="/about">About</Link></li>
              <li><Link className="transition-colors hover:text-paper/60" href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-4 text-paper/50">Products</p>
            <ul className="space-y-2 text-sm text-paper/85">
              <li><Link className="transition-colors hover:text-paper/60" href="/what-we-do#buzzsense">Buzzsense</Link></li>
              <li><Link className="transition-colors hover:text-paper/60" href="/how-it-works#buzzfactor">Buzzfactor</Link></li>
              <li><Link className="transition-colors hover:text-paper/60" href="/how-it-works#tubefactor">Tubefactor</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-4 text-paper/50">Contact</p>
            <ul className="space-y-2 text-sm text-paper/85">
              <li><a className="transition-colors hover:text-paper/60" href="mailto:info@isievetech.com">info@isievetech.com</a></li>
              <li>
                <a className="transition-colors hover:text-paper/60" href="https://www.linkedin.com/company/i-sieve-technologies" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
            <address className="mt-6 text-xs not-italic leading-relaxed text-paper/50">
              <Sieve /> technologies LIMITED<br />
              1 Francis St, Dundalk<br />
              Louth A91 XK38, Ireland
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-paper/15 pt-6 text-xs text-paper/45 md:flex-row">
          <span>© {new Date().getFullYear()} <Sieve /> technologies LIMITED. All rights reserved.</span>
          <span>Est. 2004 · Spin‑off of NCSR “Demokritos” · Patented 2005</span>
        </div>
      </div>
    </footer>
  );
}
