# Luxury Salon Template

A single-page, config-driven website template for high-end salons, nail spas, and beauty studios. **MAISON VELA** ships as the demo brand — swap everything in `config.js` to re-skin for a new client.

## Quick start

**On a phone or tablet (no terminal needed):** open this live preview link in Safari or Chrome:

[Preview MAISON VELA](https://htmlpreview.github.io/?https://raw.githubusercontent.com/stellier7/luxury-salon-template/main/index.html)

Or browse the files on the pull request: [PR #1](https://github.com/stellier7/luxury-salon-template/pull/1)

**On desktop:** open `index.html` directly in any browser — no build step required.

## Customize for a client

Edit **`config.js` only** for a typical re-skin:

| Section | What to change |
|---------|----------------|
| Brand | Name, tagline, hero copy |
| Contact | WhatsApp number, phone, address, hours, Instagram |
| Colors | Hex values in `colors` |
| Services | Three service cards with menu items |
| Ritual | Horizontal experience strip (4 steps) |
| Gallery | Image URLs |
| Atmosphere | Hero photo and visit photo |
| Testimonials | Client quotes |

WhatsApp links (nav, hero, footer, floating button) are wired automatically from `whatsappNumber` and `whatsappDefaultMessage`.

## Structure

```
├── index.html   # Page shell + render logic
├── styles.css   # Typography, layout, animations
└── config.js    # All client-specific content
```

## Features

- Full-viewport hero with drifting type, soft light fields, and a scroll cue
- Scroll-reveal animations with blur and slide (respects `prefers-reduced-motion`)
- Tilt portrait and an auto-scrolling, draggable ritual carousel
- Expandable services accordion
- Parallax masonry gallery with lightbox
- WhatsApp booking from the nav, hero, and contact card

No build step, framework, or dependencies required.
