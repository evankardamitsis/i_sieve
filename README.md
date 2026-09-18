# i‑sieve technologies — website

Marketing site for i‑sieve technologies LIMITED (sentiment analysis & total exposure tracking).

- **Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4
- **Fonts:** Fraunces (display) · Figtree (body) · JetBrains Mono (labels) via `next/font`
- **Content:** all copy lives in `src/lib/content.ts` (channels, process steps, audiences, case study)

## Run

```bash
npm install
npm run dev
```

## Structure

- `src/app/` — routes: `/`, `/what-we-do`, `/how-it-works`, `/who-we-work-for`, `/about`, `/contact`
- `src/components/` — `Logo` (new sieve mark + wordmark), `Nav`, `Footer`, `Reveal`, `SentimentField`, `SentimentBar`, `Section`, `Button`
- `src/app/globals.css` — design tokens (paper / ink / blue / coral / mint), display type, grain, mesh
- `public/legacy-logo.png` — the previous logo, kept for reference

## Contact form

The form builds a `mailto:` to info@isievetech.com. Swap `ContactForm.tsx`'s `onSubmit` for a server action / Resend / Formspree when a backend is available.
