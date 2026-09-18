"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "./Logo";

const links = [
  { href: "/what-we-do", label: "What we do" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/who-we-work-for", label: "Who we work for" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled || open ? "bg-paper/85 backdrop-blur-md border-b border-line/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" aria-label="i-sieve technologies home">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[0.92rem] transition-colors ${
                path.startsWith(l.href) ? "text-ink" : "text-ink-2 hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-ink px-4 py-2 text-[0.88rem] font-medium text-paper transition-colors hover:bg-blue"
          >
            Talk to us
          </Link>
        </nav>

        <button
          className="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper px-6 pb-8 pt-4 md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="display block py-3 text-3xl">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="display block py-3 text-3xl text-blue">
            Talk to us
          </Link>
        </div>
      )}
    </header>
  );
}
