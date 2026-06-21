# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # production build (Next.js static export)
npm run lint     # ESLint via next lint
```

No test runner is configured. Verify UI changes by running `dev` and checking the browser.

## Architecture

Next.js 14 App Router, TypeScript, Tailwind CSS. No backend — the site is fully static.

```
src/
  app/
    layout.tsx          # Root layout: Inter font, global metadata
    globals.css         # Tailwind base + shared CSS utilities (glass-card, section-label, btn-primary, text-gradient)
    page.tsx            # Landing page — imports and sequences all section components
    checkout/
      page.tsx          # 'use client' — standalone checkout form + order summary
  components/           # One file per section, imported by app/page.tsx
    Nav.tsx             # 'use client' — sticky nav with scroll-aware background + mobile menu
    Hero.tsx            # Hero image placeholder (see README for swap instructions)
    Problem.tsx
    Features.tsx
    HowItWorks.tsx
    MessageSamples.tsx  # Pure-CSS phone mockups; conversation data in `scenarios` array
    WhyLana.tsx
    Pricing.tsx
    FAQ.tsx             # 'use client' — accordion, controlled by local useState
    FinalCTA.tsx
    Footer.tsx
```

## Design system

Dark luxury aesthetic. Key conventions:
- **Background**: `bg-[#08080f]` — set on `body` in globals.css
- **Glass cards**: use the `.glass-card` CSS class (`rgba(255,255,255,0.04)` bg, `backdrop-blur`, subtle border)
- **Section badges**: use `.section-label` class
- **Accent colours**: amber (`text-amber-400`, `bg-amber-500`) and cyan (`text-cyan-400`) — amber is primary
- **Gradient text**: use `.text-gradient` class
- **Ambient glows**: positioned `<div>`s with `blur-[100px]` and low-opacity colour backgrounds, always wrapped in `pointer-events-none`
- **Buttons**: `.btn-primary` (amber fill) and `.btn-secondary` (ghost)

## Key content locations

| Content | File | Identifier |
|---|---|---|
| Hero headline + CTA copy | `Hero.tsx` | `<h1>` block |
| Pricing numbers | `Pricing.tsx` + `checkout/page.tsx` | hardcoded `$500` / `$250` |
| Feature cards | `Features.tsx` | `features` array |
| Phone chat samples | `MessageSamples.tsx` | `scenarios` array |
| FAQ items | `FAQ.tsx` | `faqs` array |
| Meta title/description | `app/layout.tsx` | `metadata` export |
| Nav links | `Nav.tsx` | `links` array |

## Hero image

The hero image lives at `public/hero.jpg` and is rendered by `Hero.tsx` via `next/image` (`fill` + `object-cover` inside an `aspect-[4/5]` container). To swap it, replace that file keeping the same name, or change the `src`. Crop framing is controlled by the container aspect ratio and `object-center`.

## Checkout

`src/app/checkout/page.tsx` is a client component with a controlled form. On submit it sets `submitted = true` to show a success state — no real payment or email is sent. Payment integration (Stripe etc.) should replace the `handleSubmit` function.

## Brand

- **Name**: Lana AI &nbsp;|&nbsp; **Domain**: hey-lana.ai &nbsp;|&nbsp; **Parent**: Oner Media Production
- Tone: warm, premium, direct, human — not robotic
- Pricing: $500 one-time setup + $250/month
