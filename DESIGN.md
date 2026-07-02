# AlphaMed.Ai — Website Design System & Content Spec

Self-contained design brief for the OneAlphaMed AI marketing site (live at `onealphamed.ai`, repo `abhi020483/onealphamed-ai-website`). Paste this into any Claude design session to iterate on the design with full context.

---

## 1. Brand

**Company:** OneAlphaMed AI (AlphaMed.Ai) — "India's first Gen AI partner for Pharmaceutical & Healthcare companies."
**Tagline on logo:** *Innovations in Healthcare*
**Logo:** ring/"C" play-button mark with a lime→blue gradient + "AlphaMed.Ai" wordmark.
- Source file: `public/Alphamed AI.png` (dark wordmark, for light backgrounds)
- Dark-theme variant: `src/assets/alphamed-lockup-light.png` (wordmark recolored to paper-white; used in nav + footer)
- Icon-only (transparent): `src/assets/alphamed-icon.png` (used by the 3D logo badge)

### Brand gradient (sampled from the logo — the canonical palette)

| Token | Hex | Use |
|---|---|---|
| `--color-lime` | `#86d13f` | gradient start, highlights |
| `--color-green` | `#1ec27a` | primary accent, glows |
| `--color-teal` | `#0aa88f` | secondary accent, HUD labels |
| `--color-blue` | `#2d7fd4` | gradient end, cool accents |
| `--color-blue-deep` | `#1c4a86` | scrollbar, deep shadows |

Signature gradient: `linear-gradient(100deg, lime, teal 45%, blue 100%)` — used for CTAs, `.text-gradient` headlines, stat numbers.

### Dark "void" base

| Token | Hex | Use |
|---|---|---|
| `--color-void` | `#05080c` | page background |
| `--color-void-2` | `#0a1018` | card background |
| `--color-void-3` | `#101a24` | code blocks, deep panels |
| `--color-text` | `#eaf1f4` | headings/body on dark |
| `--color-text-dim` | `rgba(234,241,244,0.62)` | secondary text |
| `--color-line` | `rgba(180,214,224,0.14)` | hairline borders |

---

## 2. Typography

| Role | Font | Notes |
|---|---|---|
| Display / headings | **Unbounded** (Google Fonts, 300–700) | Very wide font — sizes are deliberately tuned DOWN: h1 ≈ 3.4rem, h2 ≈ 2.6rem, card titles 1–1.125rem. Don't scale up. |
| Body | **Exo 2** (300–700 + italic) | Geometric-futuristic but readable at length |
| HUD / labels / data | **Share Tech Mono** (400 only) | ALL-CAPS with wide tracking (`0.15em–0.25em`) for section labels, chips, stats captions |

Section-label pattern: `01 — FLAGSHIP PRODUCT` (mono, uppercase, teal/green/blue by section).

---

## 3. Aesthetic direction

**"Futuristic clinical HUD"** — deep-space dark, gamified interface chrome, real WebGL 3D healthcare objects. Feels like mission control for medicine. Not generic-SaaS, not purple-gradient AI slop.

Layered background stack (back → front):
1. `AuroraBackground` — void base + faint 56px grid + 3 drifting color blobs (green/blue/teal, heavy blur) + scanline texture
2. `Scene3D` — fixed full-viewport WebGL canvas (see §4), opacity 0.8
3. Content sections (`z-10`), transparent, glassmorphic cards (`bg-void-2/60–80` + `backdrop-blur`)
4. `CursorGlow` — 520px radial green/blue glow following the pointer (desktop only)
5. Film grain overlay (SVG turbulence, 4% opacity) + gradient `ScrollProgress` bar at top

---

## 4. 3D system (React Three Fiber)

`Scene3D.jsx` — lazy-loaded, `pointer-events-none`, camera `z=13.5, fov 46`, fog `#05080c` 12→30:
- **2 DNA double-helices** (instanced spheres along helical strands, gradient-colored by height, line rungs every 3rd node; slow Y-rotation + bobbing)
- **3 molecule clusters** (icosahedron core + 5 satellite spheres + connector lines, seeded-random layouts)
- **2 pill capsules** (capsule geometry + thin white torus band, tumbling)
- **2 medical crosses** (two intersecting boxes, teal emissive)
- **~320 additive-blend particles** in brand colors
- **Scroll-driven world rotation:** entire scene group lerps to `scrollProgress × 0.9π` around Y — the world revolves as you read
- **Pointer parallax:** camera lerps toward cursor (window-level listener — canvas can't receive events)
- Respects `prefers-reduced-motion` (scene disabled)

`Logo3D.jsx` — the hero badge: 10 stacked copies of the logo icon offset in Z (fake extrusion), idle 3D spin (16s), pointer-tilt on hover (±26°), two orbiting dashed SVG rings, pulsing radial glow, ground shadow. Also ghosted at 520px behind the CTA section.

`TiltCard.jsx` — reusable pointer-tilt card (max ~6–8°, `preserve-3d`, moving radial glare highlight).

---

## 5. Gamified HUD details

- `.hud-corners` — teal bracket corners on cards; expand + turn lime on hover
- Blinking status chip in hero: `● GEN AI SYSTEMS ONLINE — PHARMA & HEALTHCARE`
- `CountUp.jsx` — stats count up on first scroll into view (`15,000+`, `17+`, `150+`)
- `hero-scan` — a 90px green scan-beam sweeping down the hero every 7s
- Nav underlines animate left→right in the brand gradient; logo scales on hover
- Buttons: pill-shaped, gradient fill, lift + glow shadow on hover, arrow slides

---

## 6. Page structure & live copy

**Nav:** logo lockup · MERLIN AI · ONCONOURISH · ECOSYSTEM · [Request a demo]

**Hero:**
- H1: "Evidence, encoded. **Intelligence,** engineered." (gradient on "Intelligence,")
- Sub: "OneAlphaMed AI is India's first generative AI partner built exclusively for pharmaceutical and healthcare companies — turning trusted medical evidence into products doctors, marketers, and patients actually rely on."
- CTAs: "Meet Merlin AI" (gradient) / "Explore OncoNourish" (outline)
- Stats row: "Mumbai · Gurgaon · Jakarta · Dubai · Amsterdam / WHERE WE OPERATE" · "15,000+ / HCPS ENGAGED ACROSS PROGRAMS"
- Right column: Logo3D badge

**01 — Merlin AI** (flagship): "Merlin AI: one stop, customisable **medical intelligence.**"
- "Power of 4" cards: Generative AI · RAG · Label Info · Air Gap (HIPAA / EU GDPR)
- **MedLink AI · WhatsApp channel:** "Conversational. Contextual. **Emotionally intelligent.**" + WhatsApp phone mockup (Dr Khadilkar's Clinic demo) + comparison table (Standard Chatbots vs MedLink AI)
- MedScan AI callout: prescription scanning + LLM layer

**02 — OncoNourish** (clinician-prescribed · AI-guided): "OncoNourish keeps patients **nourished enough to finish treatment.**"
- Compliance chip: "SUPPORTIVE CARE ONLY — NO TREAT / CURE / ARREST CLAIMS" (hard requirement, keep on every design)
- 4-step flow: Create & intake → Generate → Review & approve → Follow & print
- 6 profile inputs grid · rules-engine YAML sample (`protein_target.rule.yaml`, ESPEN 2021 §4.2) · sample patient chart (Anita K., 1.4 g/kg · 1650 kcal · 2.2 L) · safety guardrails panel

**03 — Ecosystem:** "One healthcare group, six ways to move pharma forward."
- STRATEDIA · EDUVENT · CLINOPS · MEDEXPO · CONNECT · INNOVATION LABS (hud-corner tilt cards)
- Count-up stats: 15,000 HCPs · 17+ countries · 150+ oncologists

**CTA:** "Let's put evidence-grade AI to work for your brand." → `blessy.babychan@onealphamed.com` (all demo requests)

**Footer:** logo lockup · "Mumbai · Gurgaon · Jakarta · Dubai · Amsterdam" · © OneAlphaMed AI. Evidence, encoded.

---

## 7. Constraints & guardrails

- OncoNourish must always carry supportive-care framing; never claim food treats/cures/arrests cancer
- Founding-team section intentionally removed — don't re-add
- ESPEN/ASCO/ICMR references live ONLY inside the OncoNourish product section (removed from company-level stats)
- All copy sourced from real company decks — don't invent stats or client names
- Keep the confidential decks folder (`AlphaMed AI/`) and `.claude/` out of the public repo (already gitignored)

## 8. Tech notes

React 19 + Vite · Tailwind v4 (tokens via `@theme` in `src/index.css`) · Framer Motion (`Reveal.jsx`, viewport-once, cubic-bezier `0.16,1,0.3,1`) · three/@react-three/fiber/@react-three/drei (Scene3D lazy-loaded; main bundle ~110KB gzip) · GitHub Pages deploy on push to `main` (`.github/workflows/deploy.yml`), custom domain via `public/CNAME`.
