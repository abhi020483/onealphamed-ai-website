# OneAlphaMed AI — Website

Marketing site for [OneAlphaMed AI](https://onealphamed.ai) — India's first Gen AI partner for pharmaceutical & healthcare companies. Showcases Merlin AI, MedLink AI, MedScan AI, and OncoNourish.

## Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (scroll reveals, entrance animations)
- Three.js via React Three Fiber (3D healthcare background scene: DNA helices, molecules, capsules — scroll-driven, mouse-parallax)

## Develop

```sh
npm install
npm run dev     # http://localhost:5173
npm run build   # production build → dist/
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages at the custom domain `onealphamed.ai` (see `public/CNAME`).
