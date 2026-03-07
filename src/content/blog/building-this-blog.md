---
title: 'How I Built This Blog'
description: 'A technical breakdown of the architecture, design decisions, and tooling behind this Astro-powered blog.'
pubDate: 'Jun 22 2025'
tags: ['astro', 'web-dev', 'tutorial', 'css']
---

This post walks through the technical decisions behind building this blog — from framework choice to the animated backgrounds.

## Why Static Generation?

For a blog, static generation makes sense:

- **Performance**: Pre-rendered HTML means instant page loads
- **SEO**: Search engines can easily crawl static content
- **Hosting**: Free deployment on GitHub Pages, Netlify, or Vercel
- **Security**: No server-side runtime means minimal attack surface

Astro was the obvious choice — it's built for content sites and ships zero JavaScript by default.

## The Animated Backgrounds

Three canvas-based animations run in the background:

1. **Particle Network** — Floating particles with connection lines
2. **Lorenz Attractor** — The famous chaotic system, rendered as a continuous curve
3. **Torus Knot** — A rotating 3D wireframe mathematical shape

All three respect `prefers-reduced-motion` and use `requestAnimationFrame` for smooth 60fps rendering.

### The Lorenz Attractor

```javascript
// The Lorenz system equations
const dx = sigma * (y - x) * dt;
const dy = (x * (rho - z) - y) * dt;
const dz = (x * y - beta * z) * dt;
```

With the classic parameters (σ=10, ρ=28, β=8/3), the system produces the iconic butterfly-shaped attractor.

## Catppuccin Theming

The color scheme uses [Catppuccin](https://catppuccin.com/), a soothing pastel theme available in four flavors. This blog implements:

- **Mocha** (dark) — Deep purple-blue base with pastel accents
- **Latte** (light) — Warm cream base with vibrant accents

Theme switching persists to `localStorage` and respects system preferences on first visit.

## What I Learned

1. **CSS-only animations are powerful** — The gradient shifts and glows use pure CSS
2. **Astro's island architecture works** — JavaScript only loads where needed
3. **Accessibility matters** — Skip links, focus states, and motion preferences aren't optional

The full source is on [GitHub](https://github.com/0bVdnt/blogs).