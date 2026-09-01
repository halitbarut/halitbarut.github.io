# halitbarut.github.io

Personal portfolio website of **Mehmet Halit Barut**, built with React, TypeScript, and Vite. Deployed on GitHub Pages.

## Features

- Sections: Hero, About, Experience, Education, Skills, Projects, Contact
- Mouse-reactive parallax tilt on the hero name heading
- Animated ambient orbs and background grid
- Multilingual support: English, Turkish, German (i18next)
- Contact form via EmailJS
- SEO with react-helmet-async
- Fully responsive, dark-themed UI with Tailwind CSS
- Smooth animations with Framer Motion
- Respects `prefers-reduced-motion`

## Tech Stack

| Category | Library |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Routing | React Router v7 |
| i18n | i18next + react-i18next |
| Forms | React Hook Form + Zod |
| Email | EmailJS |
| Icons | Lucide React |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Lint with ESLint |

## Environment Variables

Copy `.env.example` to `.env` and fill in your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

## Internationalization

Locale files live in `public/locales/{en,tr,de}/`. Add or edit keys there to update content without touching component code.

## Deployment

Automatically deployed to GitHub Pages via the workflow in `.github/`. The `dist/` output is served at `https://halitbarut.github.io`.
