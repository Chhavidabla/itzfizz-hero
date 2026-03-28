# 🚀 ITZFIZZ — Scroll-Driven Hero Section Animation

A premium, scroll-driven hero section built as a frontend assignment submission. Inspired by the [reference demo](https://paraschaturvedi.github.io/car-scroll-animation), this project recreates and elevates the core interaction patterns with a luxury dark-racing aesthetic, cinematic typography, and buttery-smooth GSAP-powered animations.

---

## 🌐 Live Demo

> **[View Live on GitHub Pages](https://chhavidabla.github.io/itzfizz-hero/)**

---

## 📋 Assignment Overview

| Requirement | Status |
|---|---|
| Hero section occupies full viewport (above the fold) | ✅ |
| Letter-spaced headline — WELCOME ITZFIZZ | ✅ |
| Impact metrics / statistics with descriptions | ✅ |
| Smooth intro animation on page load | ✅ |
| Staggered stats reveal with delay | ✅ |
| Scroll-based animation tied to scroll progress | ✅ |
| Easing / interpolation for natural motion | ✅ |
| Performance-first — transform-only animations | ✅ |
| GSAP used for scroll and intro animations | ✅ |

---

## ✨ Features

### 🎬 Intro Animations (On Page Load)
- Corner bracket decorations snap into place
- Red accent stripe slides in from the top
- Headline letters **stagger up** character by character (two rows)
- Car SVG **flies in** from the right with a slight rotation
- Stats animate in one by one with a **0.14s delay between each**
- Animated progress bars fill to their respective percentages (58%, 23%, 27%, 40%)
- Scroll hint indicator fades in last

### 🖱️ Scroll-Driven Core Animation
- **3× viewport height** scroll section creates a long, immersive scroll journey
- Car moves **left → right** across the screen as scroll progresses
- Car **rotates** (−12° → +12°) proportionally to scroll position
- Car **scales** smoothly via a sine curve (peaks at mid-scroll)
- **4 phase text messages** swap out with fade transitions at each scroll quarter:
  1. *Precision Delivery*
  2. *Smart Routing*
  3. *Real-time Tracking*
  4. *Zero Friction*

### 🎨 Visual Polish
- Custom **top-view SVG car** illustration (no external image dependency)
  - Wheel spokes, DRL headlights, taillights, hood vents, roof cabin, windshields
  - Electric lime accent stripes and ITZFIZZ badge
- **Animated grain noise** overlay for film-like texture
- **Custom cursor** — dot + lagging ring with hover scale effect
- **Scroll progress bar** at the very top of the page
- Idle **floating animation** on the hero car after load
- **Parallax exit** — hero car drifts upward as you scroll away
- Rotating **SVG ring text** in the scroll section
- Decorative grid overlay, glowing background number, glow blob

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic document structure |
| **CSS3** | Layout, variables, keyframe animations, responsive design |
| **Vanilla JavaScript** | Scroll logic, animation orchestration, cursor |
| **GSAP 3** | Timeline-based intro animations, tweening |
| **ScrollTrigger (GSAP plugin)** | Scroll-progress binding, pinning, parallax |

> All dependencies are loaded via CDN — no build tool or package manager required.

---

## 📁 Project Structure

```
itzfizz-hero/
│
├── index.html        # Semantic HTML structure — layout, SVG car, sections
├── style.css         # All styles — CSS variables, animations, keyframes, responsive
├── script.js         # All JavaScript — GSAP timeline, ScrollTrigger, cursor logic
└── README.md         # This file
```

The project follows a clean **separation of concerns** — structure, style, and behaviour are each kept in their own file. `index.html` links to both `style.css` (in the `<head>`) and `script.js` (at the end of `<body>` for optimal load performance).

---

## 🚀 Getting Started

### Run Locally

No installation needed. Just open the file in a browser:

```bash
# Clone the repo
git clone https://github.com/Chhavidabla/itzfizz-hero

# Navigate into the folder
cd itzfizz-hero

# Open in browser (macOS)
open index.html

# Open in browser (Windows)
start index.html

# Or simply drag index.html into any modern browser
```

### Deploy to GitHub Pages

1. Push the repository to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch → main → / (root)**
4. Click **Save** — your site will be live in ~60 seconds.
---

## ⚡ Performance Decisions

| Decision | Reason |
|---|---|
| All animations use `transform` and `opacity` | Avoids layout reflow — runs entirely on the GPU compositor thread |
| `will-change: transform` on animated car elements | Hints the browser to promote elements to their own layer ahead of time |
| `overwrite: 'auto'` on scroll GSAP tweens | Prevents tween pile-up on rapid scrolling |
| `ScrollTrigger.create` with `scrub: false` | Manual `onUpdate` handler gives finer control than scrub for this use case |
| SVG car illustration (no external PNG) | Zero network dependency — renders crisply at any resolution |
| Separated CSS file (`style.css`) | Browser can cache styles independently from HTML |
| `script.js` loaded at end of `<body>` | Ensures DOM is ready before JS runs, no render blocking |

---

## 🎨 Design Decisions

- **Color palette**: Deep black `#080808` base with electric lime `#e5f535` accent and hot red `#ff3e3e` for taillights — inspired by performance car livery
- **Typography**: `Bebas Neue` (display) + `DM Sans` (body) + `Space Mono` (labels) — a trio that balances raw energy with refined legibility
- **Aesthetic direction**: Luxury dark racing — cinematic, editorial, premium — not generic "tech startup"
- **Custom cursor**: Reinforces the premium feel; the lagging ring adds personality without being distracting
- **Grain overlay**: Adds analog warmth and prevents the all-black background from feeling flat

---

## 📸 Preview

```
┌─────────────────────────────────────────────────────────────┐
│  ITZFIZZ                          [Platform] [About] [CTA]  │
│                                                              │
│  W E L C O M E           ╔══════════════════════╗           │
│  I T Z  F I Z Z          ║   [SVG Car — top view]║           │
│                           ╚══════════════════════╝           │
│  58%  23%                                                    │
│  27%  40%                         ↓ scroll                  │
└─────────────────────────────────────────────────────────────┘
```

---

## 📝 Notes

- Tested and working in **Chrome 120+**, **Firefox 121+**, **Safari 17+**, **Edge 120+**
- Fully responsive — adapts to mobile viewports (nav collapses, grid stacks)
- No external images used — the car is a hand-crafted inline SVG
- All three files (`index.html`, `style.css`, `script.js`) must be kept in the **same directory** for links to resolve correctly

---

## 👤 Author

**Chhavi**
Frontend Developer · Assignment Submission

- GitHub: https://github.com/Chhavidabla
- Email: chhavidabla2005@gmail.com

