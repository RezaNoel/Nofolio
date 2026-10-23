# Nofolio

Personal site for Reza Tavangar — full-stack software developer in Yerevan.

Live: https://rezanoel.github.io/Nofolio

YouTube: https://www.youtube.com/@chibodeh

## Run locally

Node 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

For GitHub Pages the site lives at `/Nofolio`:

```bash
set NEXT_PUBLIC_BASE_PATH=/Nofolio
npm run build
```

Edit copy in `src/data/site.ts`. Replace `public/resume.pdf` with the designed resume.
