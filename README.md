# SANDEEP — THE SERIES

A cinematic, streaming-inspired portfolio for **Sandeep Datta**. Every section is an episode, every project is an Original, and the whole site plays like a series.

> This is a personal portfolio with a fictional streaming-platform look. It is not affiliated with Netflix or any other streaming service and uses none of their logos.

## Run locally

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

Production build:

```bash
npm run build
npm run preview
```

## Updating the content

Most portfolio content lives in `src/data/portfolio.ts`.

| To change… | Edit |
| --- | --- |
| Name, intro, contact links, photo and role | `profile` |
| Projects | `projects` |
| Achievement cards | `achievements` |
| Certifications | `certifications` |
| Skills | `skillCategories`, `skillEvidence` |
| Journey and episodes | `seasons` |
| Top Picks | `topPicks` |
| Opening highlight reel | `introSlides` |

**Important:** achievement and certification cards marked **DRAFT / PLACEHOLDER** are temporary and must be verified or replaced before the portfolio is presented as a factual résumé.

Add your own portrait under `public/assets/`, then update `profile.portrait` in `src/data/portfolio.ts`. Add a real résumé PDF and set `profile.resumePdf` when ready.

## Stack

React 18, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion 11 and Lenis.
