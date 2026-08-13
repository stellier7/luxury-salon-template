# Luxury Salon Template

A single-page, config-driven website template for high-end salons, nail spas, and beauty studios. **MAISON VELA** ships as the demo brand — swap everything in `config.js` to re-skin for a new client.

## Quick start

Open `index.html` in a browser, or serve locally:

```bash
python3 -m http.server 8080
```

Then visit [http://localhost:8080](http://localhost:8080).

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
| Testimonials | Client quotes |

WhatsApp links (nav, hero, footer, floating button) are wired automatically from `whatsappNumber` and `whatsappDefaultMessage`.

## Structure

```
├── index.html   # Page shell + render logic
├── styles.css   # Typography, layout, animations
└── config.js    # All client-specific content
```

## Features

- Full-viewport hero with parallax
- Scroll-reveal animations (respects `prefers-reduced-motion`)
- Horizontal ritual timeline with snap scrolling
- Masonry-style gallery grid
- Mobile navigation overlay
- Persistent WhatsApp booking CTA

No build step, framework, or dependencies required.
