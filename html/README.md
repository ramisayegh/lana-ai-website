# Lana AI — static HTML version

A framework-free conversion of the Next.js site. No Node, no build step — just open the files or drop the folder on any static host (Netlify, Vercel, GitHub Pages, S3, cPanel, etc.).

## Files

| File | Purpose |
|---|---|
| `index.html` | Landing page (hero, problem, features, how it works, message samples, why Lana, pricing, FAQ, final CTA, footer) |
| `checkout.html` | Checkout / lead form with success state |
| `main.js` | Nav scroll background, mobile menu, FAQ accordion, footer year, checkout submit |
| `hero.jpg` | Hero background image (swap this file to change the hero) |

## How it's styled

- **Tailwind** is loaded via the Play CDN (`<script src="https://cdn.tailwindcss.com">`), with the theme config and the custom component classes (`glass-card`, `section-label`, `glow-frame`, `hud-corners`, `neon-grid-floor`, etc.) inlined in a `<style type="text/tailwindcss">` block in each page's `<head>`.
- **Fonts** (Inter, Space Grotesk, JetBrains Mono) load from Google Fonts.

This means the pages need an internet connection to fetch Tailwind + fonts. That's fine for a normal hosted site.

## Going to production (optional)

The Tailwind Play CDN prints a console warning that it's meant for development. For a production site you can compile a real stylesheet once and swap the CDN script for it:

```bash
npx tailwindcss -i input.css -o styles.css --minify
```

…where `input.css` contains the `@tailwind` directives plus the custom CSS from the `<style type="text/tailwindcss">` block. Then replace the CDN `<script>` and the inline `<style>`/config with `<link rel="stylesheet" href="styles.css">`.

## Editing content

All copy and markup is inline in the two HTML files — edit them directly. The checkout form currently just shows a success message on submit (no backend); wire `main.js`'s submit handler to your email/CRM/Stripe when ready.
