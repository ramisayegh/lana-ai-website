# Lana AI — Website

Landing page for **hey-lana.ai**, built with Next.js 14 + Tailwind CSS.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint check
```

---

## How to swap the hero image

The current hero image is `public/hero.jpg`. To replace it:

1. Drop a new image into `public/hero.jpg` (overwrite, keep the same name) — landscape or portrait both work; it's cropped to a 4:5 portrait card.
2. To change the crop/framing, edit the `aspect-[4/5]` ratio or `object-center` on the `<Image>` wrapper in [`src/components/Hero.tsx`](src/components/Hero.tsx).

---

## Quick edits

| What to change | Where |
|---|---|
| Pricing ($500 / $250) | `src/components/Pricing.tsx` and `src/app/checkout/page.tsx` |
| "By Oner Media Production" badge | `src/components/Hero.tsx` — the `section-label` div |
| Hero headline / subheadline | `src/components/Hero.tsx` |
| Feature cards | `src/components/Features.tsx` — the `features` array |
| Phone mockup conversations | `src/components/MessageSamples.tsx` — the `scenarios` array |
| FAQ answers | `src/components/FAQ.tsx` — the `faqs` array |
| Footer contact / domain | `src/components/Footer.tsx` |
| Nav links | `src/components/Nav.tsx` — the `links` array |
| Meta title & description | `src/app/layout.tsx` — the `metadata` export |
| Accent colours | `src/app/globals.css` — swap `amber` → any Tailwind colour |

---

## Pages

- `/` — Main landing page
- `/checkout` — Request / order form (payment placeholder; connect Stripe or similar later)

---

## Connecting payment

The checkout form currently shows a success message on submit. To wire up real payments:

1. Replace the `handleSubmit` function in `src/app/checkout/page.tsx` with your Stripe Checkout or payment intent call.
2. Remove the "Payment coming soon" placeholder card and insert your Stripe `<Elements>` or hosted checkout redirect.
