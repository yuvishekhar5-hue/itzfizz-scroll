# Itzfizz – Scroll-Driven Hero (React + GSAP + Tailwind)

A hero section whose car, wheels, headline and statistic cards are driven by scroll progress.

## Stack
React 18 (Vite), GSAP + ScrollTrigger (`@gsap/react`), Tailwind CSS, plain JS.

## Run locally
```bash
npm install
npm run dev
```

## Structure
- `src/components/Hero.jsx` – layout + all GSAP logic (intro + scrubbed scroll timeline)
- `src/components/Car.jsx` – inline SVG sedan
- `src/components/StatCard.jsx` – statistic card

## How the animation works
- **Intro (time-based):** headline letters stagger in, car slides in.
- **Scroll (progress-based):** one ScrollTrigger timeline with `scrub: 1` moves the car, rotates the wheels
  (distance ÷ wheel radius), lights up the headline letters and fades the stat cards in one by one.
- Only `transform` and `opacity` are animated; `prefers-reduced-motion` is respected.

## Deploy to GitHub Pages
1. Push to a repo's `main` branch.
2. Settings → Pages → Source: **GitHub Actions**.
3. The included workflow builds and publishes `dist/`.
