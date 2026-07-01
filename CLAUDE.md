# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/brochure site for Sky Trace Co., Ltd. (MEP, ELV, Telecom System Integration contractor, Yangon, Myanmar). Single-page React app, no router, no backend — a static site deployed to Cloudflare Pages.

## Commands

```
npm run dev       # vite dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
```

No test suite, no linter configured.

## Architecture

- `src/App.jsx` is the entire page. It renders one `<section>` per top-level component (Navbar, Hero, About, Services, Solutions, TSICapabilities, Markets, Projects, Contact, Footer) in a fixed `SECTIONS` order. Navigation is anchor-scrolling via refs (`scrollIntoView`), not routing — `scrollTo(id)` is passed down to Navbar/Hero/Footer.
- Active nav highlighting uses one `IntersectionObserver` per section in `App.jsx`.
- Each section component uses `useSectionReveal()` (`src/components/useSectionReveal.js`) to add a `.section-visible` class via `IntersectionObserver` on scroll-into-view, which drives CSS reveal/trace-line animations in `global.css`.
- Styling: CSS Modules per component (`src/styles/ComponentName.module.css`) plus a shared `src/styles/global.css` with CSS custom properties (colors, spacing, type scale) and shared classes (`.section-container`, `.btn-primary`, `.btn-outline`, `.card`, `.trace-line`). Prefer reusing these shared classes/tokens over introducing new ones.
- `SectionHeader.jsx` and `TraceLine.jsx` are shared presentational components used across sections for consistent headers/underline animation.
- The Contact form (`src/components/Contact.jsx`) posts directly to Formspree via `VITE_FORM_ENDPOINT` (falls back to inert `#` if unset). No client-side form handling/JS submission — it's a plain HTML form POST.
- No backend/API routes — all content is hardcoded in components (contact info, service lists, etc.).

## Deployment

- Cloudflare Pages, deployed via `.github/workflows/deploy.yml` on push/PR to `main`. Requires `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, and `VITE_FORM_ENDPOINT` secrets.
- `_headers` sets security headers including a CSP (`script-src 'self' 'unsafe-inline'`, `connect-src 'self' https://formspree.io`) — any new external resource/script/API domain must be added here or it will be blocked in production.
- `_redirects` does SPA fallback (`/* /index.html 200`), though there's no client-side routing currently.
