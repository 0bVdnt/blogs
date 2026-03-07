---
title: 'Hello World! Welcome to the new blog'
description: 'A brief introduction to this integrated blogging space — how it was built, and what to expect.'
pubDate: 'Jun 20 2025'
tags: ['meta', 'astro', 'introduction']
---

Welcome to the new blog space built directly into my OS portfolio. As a systems enthusiast and full-stack developer, I always wanted a cozy place to share my thoughts, learnings, and experiences.

I built this portfolio to mimic an operating system because I love systems programming. Having the blog integrated as an OS window feels natural. Everything you see here is parsed from Markdown and served via Astro's blazing-fast content collections.

## Why Astro?

Astro ships **zero JavaScript by default**. For a content-heavy blog, that means near-instant page loads. When I do need interactivity — like the animated backgrounds or the theme toggle — Astro lets me opt in selectively with `<script>` tags that hydrate only what's needed.

### The tech stack

- **Framework**: [Astro](https://astro.build) with static output
- **Styling**: Custom CSS with [Catppuccin](https://catppuccin.com/) color tokens
- **Fonts**: JetBrains Mono for headings and code, Inter for body text
- **Content**: Markdown files in GitHub, served via a local JSON API endpoint
- **Deployment**: GitHub Pages with automated CI/CD

### What's next?

Expect deep-dives into:

1. **Systems programming** — OS internals, memory models, concurrency
2. **Web performance** — Core Web Vitals, rendering pipelines, optimization patterns
3. **Project breakdowns** — How I built things, what I learned, what I'd do differently

Stay tuned.

`EOF`