"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      // hide when scrolling down past the hero, show on any upward scroll
      setHidden(y > 320 && y > lastY.current + 4);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[transform,background-color,border-color] duration-500 ${
        scrolled || open ? "bg-paper/85 backdrop-blur-md border-b border-line/60" : "bg-transparent border-b border-transparent"
      } ${hidden && !open ? "header-hidden" : ""}`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" aria-label="i-sieve home" className="logo-link">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active = path.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`nav-link text-[0.92rem] transition-colors ${active ? "text-ink" : "text-ink-2 hover:text-ink"}`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="btn rounded-full bg-ink px-4 py-2 text-[0.88rem] font-medium text-paper hover:bg-blue"
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
          <span className={`h-px w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      <div
        className={`grid overflow-hidden border-line bg-paper transition-[grid-template-rows,border-color] duration-500 md:hidden ${
          open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr] border-t border-transparent"
        }`}
      >
        <div className="min-h-0">
          <div className="px-6 pb-8 pt-4">
            {[...links, { href: "/contact", label: "Talk to us" }].map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
                className={`display block py-3 text-3xl transition-[opacity,transform] duration-500 ${
                  l.href === "/contact" ? "text-blue" : ""
                } ${open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"}`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
