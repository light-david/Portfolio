# David Arorote — Developer Portfolio

A single-file, responsive personal portfolio for **David Arorote** — Full-Stack Developer & Data Engineer specializing in cloud infrastructure, machine learning, and statistical data analysis.

Layout inspired by [devini.io](https://devini.io/), adapted into a personal portfolio with an interactive Three.js hero background and 21st.dev-style premium UI patterns.

---

## ✨ Features

### Core Sections
- **Hero** — full-viewport intro with Three.js neural-network animation, animated number counters, profile photo, and dual CTAs
- **Tech Marquee** — infinite scrolling ticker of 22 technologies between hero and About
- **About** — personal bio and quick-fact rows (Location, Focus, Email, LinkedIn, Status)
- **Skills** — 4 categorized skill cards with animated progress bars + LinkedIn-endorsed skill pills
- **Projects** — filterable cards (Mine / Explored / Contributed) linking to both GitHub profiles
- **Experience** — vertical career timeline with role badges
- **GitHub** — profile cards for `@aroroted-ops` and `@light-david` with repo links
- **Contact** — contact channels + accessible demo contact form
- **FAQ** — smooth accordion with SVG chevrons and `aria-expanded` support

### Interactivity & Animation
- **Three.js neural-network** — 95 particles connected by proximity lines, mouse parallax, theme-aware colors, pauses when tab is hidden
- **Animated skill bars** — grow from 0% on scroll reveal with staggered delays per card
- **Number counters** — hero stats count up from zero with quartic ease-out on load
- **Cursor spotlight** — each card renders a radial glow that follows the mouse pointer (21st.dev pattern)
- **Magnetic CTA button** — primary button subtly attracts toward the cursor on hover
- **Shimmer hero text** — "David" sweeps a purple→cyan→pink gradient animation (21st.dev pattern)
- **Tech marquee** — pauses on hover; fades at edges via CSS mask
- **Scroll reveal** — sections and cards fade/slide up via `IntersectionObserver`
- **Scroll-to-top button** — appears after 500px scroll, smooth returns to top

### Theme & Responsiveness
- **System-aware dark/light mode** — follows OS preference live via `matchMedia`; manual toggle overrides and persists in `localStorage`
- **Active nav tracking** — current section highlighted in nav as you scroll
- **Hamburger mobile menu** — animated ×/≡ toggle for screens ≤ 820px
- **Fully responsive** — CSS Grid + Flexbox with breakpoints at 820px and 500px

### Accessibility (WCAG 2.1 AA)
- Skip-to-content link
- `focus-visible` keyboard ring on all interactive elements
- `role="main"` + `id="main"` on content wrapper
- Form labels linked to inputs via `for`/`id` with `autocomplete` attributes
- `aria-expanded` on FAQ buttons
- `aria-label` on icon-only buttons and nav toggle
- Touch targets ≥ 40px on all interactive elements
- Gradient text maintains readable fallback

### Polish
- Noise texture overlay — subtle fractal grain for organic depth (21st.dev pattern)
- Glowing card borders — accent glow ring on project/GitHub card hover
- Hero photo gradient border using `border-box` background technique
- Radial depth blobs behind hero canvas for layered depth
- CSS card shimmer `::before` gradient on hover
- Dynamic footer year via `new Date().getFullYear()`

---

## 📁 Project Structure

```
Portfolio/
├── index.html      ← the entire site (HTML + CSS + JS, ~1600 lines)
├── profile.jpg     ← your profile photo (add this yourself — see below)
└── README.md       ← this file
```

---

## 🚀 Getting Started

1. **Add your profile photo.** Save a photo as `profile.jpg` in this folder. It appears in the hero frame and both GitHub profile cards. A `👤` placeholder shows automatically if the file is missing.
2. **Open `index.html`** directly in a browser — no server, no build tools, no dependencies to install.
3. **Optional: host it.** Deploy as-is to GitHub Pages, Netlify, Vercel, or any static host.

---

## 🛠️ Customization Guide

| What to change | Where in `index.html` |
|---|---|
| Name, tagline, hero copy | `<section id="hero">` |
| Hero stats (years, projects, domains) | `.hero-stat` elements in `#hero` |
| About Me text & quick facts | `<section id="about">` → `.about-text` and `.fact-row` |
| Skill bars & percentages | `<section id="skills">` → `.skill-row` (update `--bar-w` and `width` on `.skill-bar-fill`) |
| LinkedIn endorsed pills | `<section id="skills">` → `.li-pills` |
| Project cards & filter categories | `<section id="projects">` → `.proj-card` (`data-cat` = `mine`, `explored`, or `contributed`) |
| Experience timeline | `<section id="experience">` → `.tl-item` elements |
| GitHub profile cards | `<section id="github">` |
| Contact details | `<section id="contact">` and `<footer>` |
| FAQ entries | `<section id="faq">` → `.faq-item` elements |
| Tech marquee items | `.tech-marquee-wrap` — edit both halves of the `<span>` list to keep the loop seamless |
| Color theme tokens | `:root` (dark) and `html.light` CSS blocks at top of `<style>` |
| 3D background | `initThreeJS()` — tweak `N` (particles), `LINK_DIST`, speeds, or `applyThemeColors()` |
| Marquee speed | `.tech-marquee` → `animation` duration (default `28s`) |
| Spotlight intensity | `.proj-card::after` → `radial-gradient` size (default `180px`) |

---

## 🧩 JavaScript Modules

All JS is inline in a single `<script>` block at the bottom of `index.html`:

| Function / IIFE | Purpose |
|---|---|
| `initThreeJS()` | Three.js neural-network hero animation |
| `initTheme()` | Dark/light mode with OS preference + manual override |
| `toggleFaq(btn)` | FAQ accordion with `aria-expanded` |
| `filterProj(btn, cat)` | Project card category filter |
| `handleForm(e)` | Contact form submit (client-side demo) |
| `initReveal()` | Scroll-reveal via `IntersectionObserver` |
| `initMobileMenu()` | Hamburger nav toggle |
| `initActiveNav()` | Active section tracking in nav |
| `initScrollTop()` | Scroll-to-top button show/hide |
| `initSpotlight()` | 21st.dev cursor spotlight on cards |
| `initCounters()` | Animated number counters for hero stats |
| `initMagnetic()` | Magnetic hover effect on primary CTA |
| `yearEl` | Dynamic footer year |

---

## 🔗 Key Links

- GitHub (Ops): [github.com/aroroted-ops](https://github.com/aroroted-ops)
- GitHub (Dev): [github.com/light-david](https://github.com/light-david)
- LinkedIn: [linkedin.com/in/david-arorote](https://www.linkedin.com/in/david-arorote)
- Email: aroroted@gmail.com · darorote@gmail.com

---

## 🧰 Tech Stack

- HTML5 / CSS3 (custom properties, Grid, Flexbox, `backdrop-filter`, CSS masks)
- Vanilla JavaScript — no framework, no build tools, no dependencies
- [Three.js r128](https://threejs.org/) via cdnjs — WebGL hero animation
- Google Fonts: Inter (weights 300–900) + Fira Code (monospace)
