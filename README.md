# David Arorote — Developer Portfolio

A personal portfolio for **David Arorote** — Full-Stack Developer & Data Engineer specializing in cloud infrastructure, machine learning, and statistical data analysis.

This repository contains **two complete, independent portfolio implementations** in the same directory:

| Implementation | File | Tech |
|---|---|---|
| **Vanilla (static)** | `index.html` | HTML + CSS + Vanilla JS, zero dependencies |
| **Next.js app** | `app/`, `components/` | Next.js 14, TypeScript, Tailwind, Framer Motion, R3F |

Layout inspired by [devini.io](https://devini.io/).

---

## ✨ Features (both implementations)

### Core Sections
- **Hero** — full-viewport intro with Canvas 2D neural-network animation, animated number counters, profile photo, and dual CTAs
- **Tech Marquee** — infinite scrolling ticker of 22 technologies between hero and About
- **About** — personal bio and quick-fact rows (Location, Focus, Email, LinkedIn, Status)
- **Skills** — 4 categorized skill cards with animated progress bars + LinkedIn-endorsed skill pills
- **Projects** — filterable cards (Mine / Explored / Contributed) linking to both GitHub profiles
- **Experience** — vertical career timeline with role badges
- **GitHub** — profile cards for `@aroroted-ops` and `@light-david` with repo links
- **Contact** — contact channels + accessible demo contact form
- **FAQ** — smooth accordion with SVG chevrons and `aria-expanded` support

### 3D Interactive Design
- **Full-page particle cloud** — a fixed canvas (`#global-canvas`) sits behind every section; 380 glowing particles (160 on mobile) arranged in 6 organic 3D cloud clusters using purple/cyan/lavender/white palette with additive blending. The entire cloud auto-rotates slowly and tilts toward the mouse cursor anywhere on the page
- **Scroll depth parallax** — the camera Y-axis drifts as you scroll, giving the cloud a sense of flying through a galaxy
- **3D card tilt** — all project, skill, and GitHub cards tilt in `perspective(800px) rotateX/rotateY` as the mouse tracks across them, with a deepening purple glow shadow on hover; snaps back smoothly on leave
- **Section heading parallax** — `.section-header` elements shift subtly (±10px / ±6px) with the mouse, reinforcing the layered depth illusion
- **Glass sections** — every section has a semi-transparent `rgba` background (80–88% opacity) so the global particle cloud bleeds through across the whole page

### Interactivity & Animation
- **Hero Canvas 2D neural-network** — 90 particles connected by proximity lines, mouse parallax, theme-aware colors, pauses when tab is hidden
- **Animated skill bars** — grow from 0% on scroll reveal with staggered delays per card
- **Number counters** — hero stats count up from zero with quartic ease-out on load
- **Cursor spotlight** — each card renders a radial glow that follows the mouse pointer (21st.dev pattern)
- **Magnetic CTA button** — primary button subtly attracts toward the cursor on hover
- **Shimmer hero text** — "David" sweeps a purple→cyan→pink gradient animation
- **Tech marquee** — pauses on hover; fades at edges via CSS mask
- **Scroll reveal** — sections and cards fade/slide up via `IntersectionObserver`
- **Scroll-to-top button** — appears after 500px scroll, smooth returns to top

### Theme & Responsiveness
- **System-aware dark/light mode** — follows OS preference live via `matchMedia`; manual toggle overrides and persists in `localStorage`; global particle cloud background color updates instantly
- **Active nav tracking** — current section highlighted in nav as you scroll
- **Hamburger mobile menu** — animated ×/≡ toggle for screens ≤ 820px
- **Fully responsive** — CSS Grid + Flexbox with breakpoints at 820px and 500px; particle cloud uses fewer particles (160) on mobile for performance

### Security
- **Email obfuscation** — no email address appears in the HTML source; all addresses are split into `data-u` / `data-d` attributes and assembled at runtime by `protectEmails()`, preventing scraper harvest

### Accessibility (WCAG 2.1 AA)
- Skip-to-content link
- `focus-visible` keyboard ring on all interactive elements
- `role="main"` + `id="main"` on content wrapper
- Form labels linked to inputs via `for`/`id` with `autocomplete` attributes
- `aria-expanded` on FAQ buttons
- `aria-label` on icon-only buttons and nav toggle
- Touch targets ≥ 40px on all interactive elements

---

## 📁 Project Structure

```
Portfolio/
├── index.html              ← Vanilla portfolio (HTML + CSS + JS, ~2150 lines, zero deps)
├── profile.jpg             ← Profile photo (used by index.html)
├── public/
│   └── profile.jpg         ← Same photo, required by Next.js (served at /profile.jpg)
├── app/
│   ├── layout.tsx          ← Root layout, metadata, fonts (Inter + Fira Code)
│   ├── page.tsx            ← Page assembly — all section components
│   └── globals.css         ← Tailwind base + custom design-system utilities
├── components/
│   ├── main/
│   │   ├── Hero.tsx        ← Hero section (R3F counter, rotating rings, email obfuscation)
│   │   ├── About.tsx
│   │   ├── Skills.tsx      ← Framer Motion animated skill bars
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── GitHub.tsx
│   │   ├── Contact.tsx     ← Contact form + obfuscated email channels
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   └── sub/
│       └── StarBackground.tsx  ← React Three Fiber star field + wireframe icosahedra
├── constants/
│   └── index.ts            ← Central data (skills, projects, experience, repos, FAQ)
├── lib/
│   ├── motion.ts           ← Framer Motion variant presets
│   └── utils.ts            ← cn() helper (clsx + tailwind-merge)
├── tailwind.config.ts      ← Custom color tokens (deep-space, accent, accent-cyan, …)
├── next.config.js          ← Transpiles three/@react-three packages; GitHub image domains
├── package.json
└── README.md               ← This file
```

---

## 🚀 Getting Started

### Vanilla version (index.html)
1. **Add your profile photo.** Save a photo as `profile.jpg` in this folder.
2. **Open `index.html`** directly in any browser — no server, no build tools, no dependencies.
3. **Optional: deploy.** Works out-of-the-box on GitHub Pages, Netlify, or any static host.

### Next.js version
```bash
npm install          # install dependencies (run once)
npm run dev          # start dev server at http://localhost:3000
npm run build        # production build
npm start            # serve production build
```

> **Note:** Make sure `profile.jpg` exists in both the root directory (for `index.html`) and the `public/` folder (for the Next.js app).

---

## 🛠️ Customization Guide (index.html)

| What to change | Where in `index.html` |
|---|---|
| Name, tagline, hero copy | `<section id="hero">` |
| Hero stats (years, projects, domains) | `.hero-stat` elements in `#hero` |
| About Me text & quick facts | `<section id="about">` → `.about-text` and `.fact-row` |
| Skill bars & percentages | `<section id="skills">` → `.skill-row` (update `--bar-w` and `width` on `.skill-bar-fill`) |
| Project cards & filter categories | `<section id="projects">` → `.proj-card` (`data-cat` = `mine`, `explored`, or `contributed`) |
| Experience timeline | `<section id="experience">` → `.tl-item` elements |
| GitHub profile cards | `<section id="github">` |
| Contact details | `<section id="contact">` and `<footer>` → update `data-u` / `data-d` attributes on `.eml` / `.eml-txt` |
| FAQ entries | `<section id="faq">` → `.faq-item` elements |
| Color theme tokens | `:root` (dark) and `html.light` CSS blocks at top of `<style>` |
| Hero neural-network | `initThreeJS()` — tweak `N`, `LINK_DIST`, speeds, or `applyThemeColors()` |
| Global particle cloud | `initGlobalCloud()` — tweak `N` (default 380/160), cluster positions, speeds, mouse tilt factor |
| Card tilt intensity | `initCardTilt3D()` — change the `dx * 9` / `dy * 6` multipliers |
| Heading parallax depth | `initParallaxLayers()` — change `lx * 10` / `ly * 6` multipliers |

### Customization (Next.js app)
All portfolio content lives in `constants/index.ts` — edit that single file to update skills, projects, experience, repos, and FAQ items across the entire Next.js app.

---

## 🧩 JavaScript Modules (index.html)

All JS is inline in a single `<script>` block at the bottom of `index.html`:

| Function / IIFE | Purpose |
|---|---|
| `initThreeJS()` | Canvas 2D neural-network hero animation (90 particles + proximity lines, hero-scoped, theme-aware) |
| `initGlobalCloud()` | Canvas 2D 3D particle cloud (380 particles, full-page fixed canvas, 3D rotation matrices, perspective projection, mouse tilt, scroll parallax) |
| `initCardTilt3D()` | 3D perspective rotateX/Y tilt on all cards; skipped on touch devices |
| `initParallaxLayers()` | Mouse-reactive depth shift on `.section-header` elements; skipped on touch devices |
| `initTheme()` | Dark/light mode with OS preference + manual override |
| `toggleFaq(btn)` | FAQ accordion with `aria-expanded` |
| `filterProj(btn, cat)` | Project card category filter |
| `handleForm(e)` | Contact form submit (client-side demo) |
| `initReveal()` | Scroll-reveal via `IntersectionObserver` |
| `initMobileMenu()` | Hamburger nav toggle |
| `initActiveNav()` | Active section tracking in nav |
| `initScrollTop()` | Scroll-to-top button show/hide |
| `initSpotlight()` | 21st.dev cursor spotlight (radial glow follows mouse on cards) |
| `initCounters()` | Animated number counters for hero stats |
| `initMagnetic()` | Magnetic hover effect on primary CTA |
| `protectEmails()` | Assembles obfuscated email addresses from `data-u`/`data-d` attributes at runtime |
| `yearEl` | Dynamic footer year |

---

## 🔗 Key Links

- GitHub (Ops): [github.com/aroroted-ops](https://github.com/aroroted-ops)
- GitHub (Dev): [github.com/light-david](https://github.com/light-david)
- LinkedIn: [linkedin.com/in/david-arorote](https://www.linkedin.com/in/david-arorote)

---

## 🧰 Tech Stack

### Vanilla portfolio (index.html)
- HTML5 / CSS3 (custom properties, Grid, Flexbox, `backdrop-filter`, CSS masks, `preserve-3d`)
- Vanilla JavaScript — zero external dependencies, zero build tools
- Canvas 2D API (native) — hero neural-network + full-page 3D particle cloud with rotation matrices and perspective projection
- Google Fonts: Inter (weights 300–900) + Fira Code (monospace) via CDN

### Next.js portfolio
- [Next.js 14](https://nextjs.org/) with App Router, TypeScript
- [Tailwind CSS](https://tailwindcss.com/) with custom design tokens
- [Framer Motion](https://www.framer.com/motion/) — scroll-driven and entrance animations
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [Three.js](https://threejs.org/) — `StarBackground` 3D star field
- [react-icons](https://react-icons.github.io/react-icons/) — icon library
- [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) — class utilities
