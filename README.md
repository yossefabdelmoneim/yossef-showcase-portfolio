# Youssef Abdelmoniem — Portfolio

A dark/light responsive portfolio for **Youssef Abdelmoniem**, Software & AI Engineer.
Built with React 19, Vite, Tailwind CSS v4, and Framer Motion.

## Features

- Dark / light theme toggle (persisted to `localStorage`, falls back to OS preference)
- Smooth scroll, scroll progress bar, back-to-top button
- Active-section highlighting in the navbar
- Animated hero (rotating roles, pulsing glow, entrance animations)
- Live stats computed from `src/data/`
- Project cards with screenshot support and designed placeholders
- Mobile menu, lazy-loaded images, reduced-motion support

## Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4** (class-based dark mode via `@custom-variant`)
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **JetBrains Mono** (monospace accents)

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview the production build
npm run lint     # oxlint
```

## Project structure

```
src/
  components/   Navbar, ThemeToggle
  sections/     Hero, About, Skills, Experience, Projects,
                Education, Certificates, Activities, Contact
  data/         content for projects, skills, experience, etc.
  hooks/        useActiveSection
```

## Adding content

- **Projects** — edit `src/data/projects.js`; add an `image` field (any path under `public/`) to show a screenshot, otherwise a placeholder is rendered.
- **Resume / certificates / profile** — drop images into `public/images/...`.