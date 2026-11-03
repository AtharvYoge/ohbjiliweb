# Oh Bijli Market — site spec (mobile-first)

**Goal:** investor demo storefront for a contemporary Indian pantry marketplace; real products/prices from ohbijli.myshopify.com, client cart → Shopify cart permalink checkout.
**Audience:** US-born Indian Americans. Voice: American English with natural desi words.
**Brand name:** single constant `BRAND_WORD` in `lib/site.ts` ("Bijli" → swap to "Bijali").

## Look
- Maximalist pop: hot pink #FF2E8A, marigold #FFC21A, chilli #E3261B, parrot #2DB84B, electric blue #1F4BFF, maroon #6E0F2B, cream #FFF4DD, ink #1A0B12. Every section is a full-bleed colour band; every product owns a colour.
- Type: Anton (poster display, uppercase) + Fraunces (soft/wonky italic serif for accents and body). 2 families.
- Surfaces: 3px ink borders, hard offset shadows, rotating sticker badges, SVG truck-art/block-print dividers, sunburst hero.
- Signature: pink hero with the shelf basket + spinning stickers, then the auto-scrolling pill category bar (delli-style) and two tilted Ghia-style marquee bands.

## Motion (fail-safe)
- Hero: CSS blur-rise stagger (.05–.75s), sticker pop. Content visible by default; below-fold `[data-rv]` gets hidden only by JS and revealed by IntersectionObserver, with a 6s safety reveal.
- Marquees: CSS translate loop, pause on hover. Pill bar: JS scrollLeft loop on a native overflow scroller (swipeable), pauses on touch/hover/focus, resumes after 1.8s; static under reduced motion.
- Hovers only on hover-capable devices; :active press states for touch. `prefers-reduced-motion` kills all animation.

## Sections (home)
01 Hero → pill category bar → marquee pair → 02 Discovery doors → 03 The New Chai Table band → values strip → Something for everyone (cutout row) → Grilled Cheese edit band → 04 Meet the Maker (tabs) → 05 Find your next favorite (tabs) → 06 Root → Spark → Bite → Filter Coffee Hour band → Build your own Bijli box → 07 Edits for every occasion (sticky stacked cards) → comparison chart → UGC (labelled sample) → marquee → 08 Newsletter (front-end only) → footer.

## Pages
/shop (category chips, maker filter, sort), /products/[handle] (gallery, qty, add, sticky mobile buy bar, how to enjoy it, related), /edits/[slug] ×7, /makers, /discover-india, /search, 404, cart drawer.

## Content rules
No invented press, awards, stats, ratings, certifications, founder facts or product facts. Product facts only from store descriptions; brand lines quoted and attributed. UGC labelled sample.
