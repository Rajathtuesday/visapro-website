# visapro-website

Static site for **Escape Tour and Travels**, a visa consultancy.

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

## Before going live

- **Domain**: every canonical/OG/sitemap URL uses `https://escapetour.in/`, inferred from the real `info@escapetour.in` / `yogi@escapetour.in` addresses. Confirm this is actually where the site will be hosted before shipping (if it turns out the site lives elsewhere, find-and-replace `escapetour.in` across every `.html` file plus `robots.txt` and `sitemap.xml`).
- **Email**: `info@escapetour.in` is shown on `contact.html` and in the JSON-LD schema. `yogi@escapetour.in` also exists but isn't displayed anywhere yet. Add it if it should be public-facing too (e.g. a direct line), or keep it internal-only.
- **No real business address, hours, or team names are on the site.** Deliberately, nothing here is invented. Once real details exist, add them to `about.html` and `contact.html`, and add the address to the `TravelAgency` JSON-LD block in `index.html`. That's what actually unlocks local Google/Maps SEO, and it can't be faked.
- **Contact form** (`contact.html`) has no backend. It builds a pre-filled WhatsApp message on submit (WhatsApp CTAs are the site's primary channel throughout), with `info@escapetour.in` also shown as a direct alternative. If a real CRM/inbox workflow exists later, the form can post there instead (Formspree is a zero-backend option).

## Local preview

```
python -m http.server 8000
```
then open `http://localhost:8000/`.
