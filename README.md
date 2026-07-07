# David Arorote — Developer Portfolio

A single-file, responsive personal portfolio for **David Arorote** — Full-Stack Developer & Data Engineer specializing in cloud infrastructure, machine learning, and statistical data analysis.

Layout inspired by [devini.io](https://devini.io/), adapted into a personal portfolio with a dual Three.js 3D background system, full-page particle cloud, and 21st.dev-style premium UI patterns.

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

### 3D Interactive Design
- **Full-page particle cloud** — a fixed WebGL canvas (`#global-canvas`) sits behind every section; 380 glowing particles (160 on mobile) arranged in 6 organic 3D cloud clusters using purple/cyan/lavender/white palette with additive blending. The entire cloud auto-rotates slowly and tilts toward the mouse cursor anywhere on the page
- **Scroll depth parallax** — the camera Y-axis drifts as you scroll, giving the cloud a sense of flying through a galaxy
- **3D card tilt** — all project, skill, and GitHub cards tilt in `perspective(800px) rotateX/rotateY` as the mouse tracks across them, with a deepening purple glow shadow on hover; snaps back smoothly on leave
- **Section heading parallax** — `.section-header` elements shift subtly (±10px / ±6px) with the mouse, reinforcing the layered depth illusion
- **Glass sections** — every section has a semi-transparent `rgba` background (80–88% opacity) so the global particle cloud bleeds through across the whole page

### Interactivity & Animation
- **Hero Three.js neural-network** — 95 particles connected by proximity lines, mouse parallax, theme-aware colors, pauses when tab is hidden
- **Animated skill bars** — grow from 0% on scroll reveal with staggered delays per card
- **Number counters** — hero stats count up from zero with quartic ease-out on load
- **Cursor spotlight** — each card renders a radial glow that follows the mouse pointer (21st.dev pattern)
- **Magnetic CTA button** — primary button subtly attracts toward the cursor on hover
- **Shimmer hero text** — "David" sweeps a purple→cyan→pink gradient animation (21st.dev pattern)
- **Tech marquee** — pauses on hover; fades at edges via CSS mask
- **Scroll reveal** — sections and cards fade/slide up via `IntersectionObserver`
- **Scroll-to-top button** — appears after 500px scroll, smooth returns to top

### Theme & Responsiveness
- **System-aware dark/light mode** — follows OS preference live via `matchMedia`; manual toggle overrides and persists in `localStorage`; global particle cloud background color updates instantly
- **Active nav tracking** — current section highlighted in nav as you scroll
- **Hamburger mobile menu** — animated ×/≡ toggle for screens ≤ 820px
- **Fully responsive** — CSS Grid + Flexbox with breakpoints at 820px and 500px; particle cloud uses fewer particles (160) on mobile for performance

### Security
- **Email obfuscation** — no email address appears in the HTML source; all addresses are split into `data-u` / `data-d` attributes and assembled at runtime by `protectEmails()`, preventing scraper harvest of the `@` symbol

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
├── index.html      ← the entire site (HTML + CSS + JS, ~2150 lines)
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
| Contact details | `<section id="contact">` and `<footer>` → update `data-u` / `data-d` attributes on `.eml` / `.eml-txt` elements |
| FAQ entries | `<section id="faq">` → `.faq-item` elements |
| Tech marquee items | `.tech-marquee-wrap` — edit both halves of the `<span>` list to keep the loop seamless |
| Color theme tokens | `:root` (dark) and `html.light` CSS blocks at top of `<style>` |
| Hero neural-network | `initThreeJS()` — tweak `N` (particles), `LINK_DIST`, speeds, or `applyThemeColors()` |
| Global particle cloud | `initGlobalCloud()` — tweak `N` (default 380/160), cluster positions, particle sizes, rotation speed, or mouse tilt factor |
| Section glass opacity | `#about`, `#skills`, etc. in the glass-section CSS block — adjust the `rgba` alpha (0.80–0.88) |
| Card tilt intensity | `initCardTilt3D()` — change the `dx * 9` / `dy * 6` multipliers |
| Heading parallax depth | `initParallaxLayers()` — change `lx * 10` / `ly * 6` multipliers |
| Marquee speed | `.tech-marquee` → `animation` duration (default `28s`) |
| Spotlight intensity | `.proj-card::after` → `radial-gradient` size (default `180px`) |

---

## 🧩 JavaScript Modules

All JS is inline in a single `<script>` block at the bottom of `index.html`:

| Function / IIFE | Purpose |
|---|---|
| `initThreeJS()` | Three.js neural-network hero animation (95 particles + lines, hero-scoped) |
| `initGlobalCloud()` | Three.js full-page particle cloud (380 particles, fixed canvas, mouse tilt, scroll parallax) |
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

- HTML5 / CSS3 (custom properties, Grid, Flexbox, `backdrop-filter`, CSS masks, `preserve-3d`)
- Vanilla JavaScript — no framework, no build tools, no dependencies
- [Three.js r128](https://threejs.org/) via cdnjs — dual WebGL scenes (hero neural-network + global particle cloud)
- Google Fonts: Inter (weights 300–900) + Fira Code (monospace)
