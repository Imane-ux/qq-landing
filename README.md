# QalbQuest — Astro

A static Astro port of the QalbQuest landing page (https://heart-align-quest.lovable.app/).

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in ./dist
```

Deploy `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).

## Structure

```
public/images/          logo + app screenshots
src/styles/global.css   design system: oklch tokens, gold gradients, custom utilities
src/layouts/Layout.astro  <head>, SEO/OG meta, Google Fonts
src/pages/index.astro   page composition
src/components/         Header, Hero, BigIdea, Journey, Pricing, AppShowcase,
                        Reviews, Gifts, Faq, Download, Footer
```

## Notes

- Styling is Tailwind CSS v4 via `@tailwindcss/vite` — no `tailwind.config.js`; everything
  lives in `src/styles/global.css`.
- Custom utilities: `tracking-luxury`, `btn-gold`, `btn-gold-hover`, `text-gold-gradient`,
  `card-luxury`, `gold-hairline`.
- The FAQ was a React accordion; it is rebuilt with native `<details>` plus a small
  inline script so only one answer stays open. No framework runtime is shipped.
- Update `site` in `astro.config.mjs` to your real domain so canonical and OG URLs resolve.
