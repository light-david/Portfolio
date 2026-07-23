# David Arorote — Developer Portfolio

A single-file, zero-dependency personal portfolio for **David Arorote** — Full-Stack Developer & Data Engineer specializing in cloud infrastructure, machine learning, and statistical data analysis.

Layout inspired by [devini.io](https://devini.io/).

---

## ✨ Features

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
- **Full-page particle cloud** — a fixed canvas sits behind every section; 380 glowing particles (160 on mobile) in 6 organic 3D cloud clusters with purple/cyan/lavender/white palette and additive blending. Auto-rotates and tilts toward the cursor anywhere on the page
- **Scroll depth parallax** — camera Y-axis drifts as you scroll, like flying through a galaxy
- **3D card tilt** — all project, skill, and GitHub cards tilt in `perspective(800px) rotateX/rotateY` as the mouse tracks, with a deepening purple glow on hover
- **Section heading parallax** — `.section-header` elements shift subtly (±10px / ±6px) with the mouse for layered depth
- **Glass sections** — semi-transparent `rgba` backgrounds (80–88% opacity) let the global particle cloud bleed through

### Interactivity & Animation
- **Hero Canvas 2D neural-network** — 90 particles connected by proximity lines, mouse parallax, theme-aware colors, pauses when tab is hidden
- **Animated skill bars** — grow from 0% on scroll reveal with staggered delays
- **Number counters** — hero stats count up from zero with quartic ease-out on load
- **Cursor spotlight** — radial glow follows the mouse on every card (21st.dev pattern)
- **Magnetic CTA button** — primary button subtly attracts toward the cursor on hover
- **Shimmer hero text** — "David" sweeps a purple→cyan→pink gradient animation
- **Tech marquee** — pauses on hover; fades at edges via CSS mask
- **Scroll reveal** — sections and cards fade/slide up via `IntersectionObserver`
- **Scroll-to-top button** — appears after 500px scroll, smooth return to top

### Theme & Responsiveness
- **System-aware dark/light mode** — follows OS preference via `matchMedia`; manual toggle persists in `localStorage`; particle cloud updates instantly
- **Active nav tracking** — current section highlighted as you scroll
- **Hamburger mobile menu** — animated ×/≡ toggle for screens ≤ 820px
- **Fully responsive** — CSS Grid + Flexbox with breakpoints at 820px and 500px; cloud uses 160 particles on mobile

### Security
- **Email obfuscation** — no email address appears in the HTML source; addresses are split across `data-u` / `data-d` attributes and assembled at runtime by `protectEmails()`, preventing bot harvesting

### Accessibility (WCAG 2.1 AA)
- Skip-to-content link
- `focus-visible` keyboard ring on all interactive elements
- `role="main"` + `id="main"` on content wrapper
- Form labels linked via `for`/`id` with `autocomplete` attributes
- `aria-expanded` on FAQ buttons
- `aria-label` on icon-only buttons and nav toggle
- Touch targets ≥ 40px

---

## 📁 Project Structure

```
Portfolio/
├── index.html      ← the entire site (HTML + CSS + JS, ~2150 lines, zero dependencies)
├── profile.jpg     ← profile photo (used in hero and GitHub profile cards)
├── .github/
│   └── workflows/
│       └── deploy.yml   ← GitHub Actions → Vercel deployment
├── vercel.json     ← static site config for Vercel
└── README.md
```

---

## 🚀 Getting Started

1. **Add your profile photo.** Save a photo as `profile.jpg` in this folder. A `👤` placeholder shows automatically if the file is missing.
2. **Open `index.html`** directly in any browser — no server, no install, no build tools.
3. **Deploy.** Push to GitHub and the Actions workflow deploys automatically to Vercel.

---

## 🚢 Deployment (GitHub → Vercel)

The workflow in `.github/workflows/deploy.yml` handles everything automatically:

- **Push to `main`** → production deployment goes live
- **Open a Pull Request** → preview URL is posted as a PR comment

### One-time setup — 3 GitHub secrets

Go to your repo → **Settings → Secrets and variables → Actions**, and add:

| Secret | How to get it |
|---|---|
| `VERCEL_TOKEN` | Vercel dashboard → Account Settings → Tokens |
| `VERCEL_ORG_ID` | Run `vercel link` locally → open `.vercel/project.json` → copy `orgId` |
| `VERCEL_PROJECT_ID` | Same `.vercel/project.json` → copy `projectId` |

```bash
# Link this folder to a Vercel project (run once, locally)
npx vercel login
npx vercel link
cat .vercel/project.json   # shows orgId and projectId
```

---

## 🛠️ Customization Guide

| What to change | Where in `index.html` |
|---|---|
| Name, tagline, hero copy | `<section id="hero">` |
| Hero stats (years, projects, domains) | `.hero-stat` elements |
| About Me text & quick facts | `<section id="about">` → `.about-text` / `.fact-row` |
| Skill bars & percentages | `<section id="skills">` → `.skill-row` (`--bar-w` CSS var + `.skill-bar-fill` width) |
| LinkedIn endorsed pills | `.li-pills` |
| Project cards & filter categories | `.proj-card` (`data-cat` = `mine`, `explored`, or `contributed`) |
| Experience timeline | `.tl-item` elements |
| GitHub profile cards | `<section id="github">` |
| Contact details & email | Update `data-u` / `data-d` attributes on `.eml` / `.eml-txt` elements |
| FAQ entries | `.faq-item` elements |
| Color theme tokens | `:root` (dark) and `html.light` CSS blocks |
| Hero neural-network | `initThreeJS()` — tweak `N`, `LINK_DIST`, speeds |
| Global particle cloud | `initGlobalCloud()` — tweak `N` (380/160), cluster positions, rotation speed, mouse tilt |
| Card tilt intensity | `initCardTilt3D()` — change `dx * 9` / `dy * 6` multipliers |
| Heading parallax depth | `initParallaxLayers()` — change `lx * 10` / `ly * 6` multipliers |

---

## 🧩 JavaScript Modules

All JS is inline in a single `<script>` block at the bottom of `index.html`:

| Function / IIFE | Purpose |
|---|---|
| `initThreeJS()` | Canvas 2D neural-network hero animation (90 particles, proximity lines, theme-aware) |
| `initGlobalCloud()` | Canvas 2D 3D particle cloud (380 particles, rotation matrices, perspective, mouse tilt) |
| `initCardTilt3D()` | 3D perspective tilt on cards; skipped on touch devices |
| `initParallaxLayers()` | Mouse-reactive depth shift on `.section-header` elements |
| `initTheme()` | Dark/light mode with OS preference + manual override |
| `toggleFaq(btn)` | FAQ accordion with `aria-expanded` |
| `filterProj(btn, cat)` | Project card category filter |
| `handleForm(e)` | Contact form submit (client-side demo) |
| `initReveal()` | Scroll-reveal via `IntersectionObserver` |
| `initMobileMenu()` | Hamburger nav toggle |
| `initActiveNav()` | Active section tracking in nav |
| `initScrollTop()` | Scroll-to-top button show/hide |
| `initSpotlight()` | Cursor spotlight radial glow on cards |
| `initCounters()` | Animated number counters for hero stats |
| `initMagnetic()` | Magnetic hover effect on primary CTA |
| `protectEmails()` | Assembles obfuscated email addresses from `data-u`/`data-d` at runtime |
| `yearEl` | Dynamic footer year |

---

## 🔗 Key Links

- GitHub (Ops): [github.com/aroroted-ops](https://github.com/aroroted-ops)
- GitHub (Dev): [github.com/light-david](https://github.com/light-david)
- LinkedIn: [linkedin.com/in/david-arorote](https://www.linkedin.com/in/david-arorote)

---

## 🧰 Tech Stack

- **HTML5 / CSS3** — custom properties, Grid, Flexbox, `backdrop-filter`, CSS masks, `preserve-3d`
- **Vanilla JavaScript** — zero frameworks, zero build tools, zero external dependencies
- **Canvas 2D API** (native) — hero neural-network + full-page 3D particle cloud with rotation matrices and perspective projection
- **Google Fonts** — Inter (300–900) + Fira Code via CDN
