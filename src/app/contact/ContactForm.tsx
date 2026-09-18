"use client";
import { useState } from "react";

const interests = ["Ad campaign reaction", "Brand perception", "Media audience", "Compliance monitoring", "Public opinion / policy", "Video / audio exposure"];

export default function ContactForm() {
  const [interest, setInterest] = useState<string[]>([]);
  const toggle = (i: string) => setInterest((v) => (v.includes(i) ? v.filter((x) => x !== i) : [...v, i]));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Project enquiry — ${f.get("org") || f.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${f.get("name")}\nOrganisation: ${f.get("org")}\nEmail: ${f.get("email")}\nInterested in: ${interest.join(", ") || "—"}\n\nThe question we want answered:\n${f.get("question")}`,
    );
    window.location.href = `mailto:info@isievetech.com?subject=${subject}&body=${body}`;
  };

  const field = "field w-full border-b border-line bg-transparent py-3 text-lg outline-none placeholder:text-ink-3";

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="eyebrow">Name</span>
          <input name="name" required className={field} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="eyebrow">Organisation</span>
          <input name="org" className={field} placeholder="Company or agency" />
        </label>
      </div>
      <label className="block">
        <span className="eyebrow">Email</span>
        <input type="email" name="email" required className={field} placeholder="you@company.com" />
      </label>
      <div>
        <span className="eyebrow">I’m interested in</span>
        <div className="mt-3 flex flex-wrap gap-2">
          {interests.map((i) => {
            const on = interest.includes(i);
            return (
              <button
                type="button"
                key={i}
                onClick={() => toggle(i)}
                className={`chip rounded-full border px-3.5 py-1.5 text-sm ${on ? "border-ink bg-ink text-paper" : "border-line text-ink-2 hover:border-ink"}`}
              >
                {i}
              </button>
            );
          })}
        </div>
      </div>
      <label className="block">
        <span className="eyebrow">The question you want answered</span>
        <textarea name="question" required rows={4} className={`${field} resize-none`} placeholder="e.g. How did people react to our spring campaign, and what did they fixate on?" />
      </label>
      <button
        type="submit"
        className="btn group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 font-medium text-paper hover:bg-blue"
      >
        Send enquiry
        <span className="h-1.5 w-1.5 rounded-full bg-[#8fa3ff] transition-transform group-hover:translate-x-1" />
      </button>
      <p className="text-xs text-ink-3">Opens in your email client, addressed to info@isievetech.com.</p>
    </form>
  );
}
