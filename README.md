# visapro-website

Static site for **Escape Tour and Travels**, a visa consultancy. **Live** at [escapetour.in](https://escapetour.in) via GitHub Pages (see `CNAME`).

## Structure

7 pages, no build step, no framework: plain HTML/CSS/JS.

- `index.html`: Home
- `about.html`: About Us
- `services-tourist-visit.html`: Tourist & Visit Visa
- `services-study-pr.html`: Student, PR & Immigration
- `services-business.html`: Business & Family Visa
- `reviews-faq.html`: Reviews & FAQ
- `contact.html`: Contact

Shared assets:

- `assets/css/style.css`: one stylesheet for every page
- `assets/js/main.js`: nav/hamburger/FAQ accordion/scroll-fade, shared by every page
- `assets/img/`: stock photos (Unsplash-licensed, via Lorem Picsum, free for commercial/personal use), fixed seeds per filename so re-downloading gives the same image. Swap these for real photos whenever they're available. Every `<img>` tag just needs its `src` changed, no layout changes needed.
- `assets/img/favicon.svg`: paper-plane mark in the site's green (`#1a6b4a`), linked from every page's `<head>`.

## SEO / local search

- **Real business address** is live: `11/84, 8th Main Road, 3rd Block East, Jayanagar, Bangalore, Karnataka 560011` — in the `TravelAgency` JSON-LD `PostalAddress` on `index.html` and `contact.html`, a visible "Visit Us" card + Maps link on `contact.html`, and the footer on every page (NAP consistency).
- `geo.region`/`geo.placename` meta tags added at locality level. No precise lat/long coordinates are set — a lookup only returned neighborhood-level coordinates, not the exact building, and a wrong pin would hurt local SEO more than an absent one. Add real coordinates once available from a verified Google Business Profile listing, or a precise geocode of the exact address.

## Remaining open items

- **Email**: `info@escapetour.in` is shown on `contact.html` and in the JSON-LD schema. `yogi@escapetour.in` also exists but isn't displayed anywhere yet. Add it if it should be public-facing too (e.g. a direct line), or keep it internal-only.
- **Business hours and team names** are still not on the site — deliberately, nothing here is invented. Add to `about.html`/`contact.html` once confirmed.
- **Contact form** (`contact.html`) has no backend. It builds a pre-filled WhatsApp message on submit (WhatsApp CTAs are the site's primary channel throughout), with `info@escapetour.in` also shown as a direct alternative. If a real CRM/inbox workflow exists later, the form can post there instead (Formspree is a zero-backend option).
- **Google Business Profile**: not yet claimed/verified. Doing so is what actually unlocks the Google Maps local pack and lets a precise geo-pin be added above.

## Local preview

```
python -m http.server 8000
```
then open `http://localhost:8000/`.
