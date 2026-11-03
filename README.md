# Oh Bijli Market — website (investor demo)

Next.js 15 (App Router) + TypeScript + Tailwind v4. All pages statically generated.

```bash
npm install
npm run build && npm start -p 3001
```

- **Products:** `data/products.json` is a snapshot of https://ohbijli.myshopify.com/products.json (16 products, cross-checked read-only via Shopify Admin). Images are in `public/p/` and cutouts in `public/cut/`.
- **Cart:** client-side (localStorage key `ohbijli-cart-v1`), slide-out drawer. Checkout goes to the Shopify cart permalink `https://ohbijli.myshopify.com/cart/<variantId>:<qty>,...`.
- **Name:** change `BRAND_WORD` in `lib/site.ts` to switch Bijli → Bijali.
- **Newsletter:** front-end only, stores nothing.
- **Demo content:** UGC cards are sample content; edit stories and "how to enjoy it" tips are demo copy. Brand quotes are from the brands' own sites.

## Credits
Product photos, cutouts derived from them, and brand logos belong to Naagin Sauce, Bombay Sweet Shop, VS Mani & Co. and Sweet Karam Coffee, used here for a non-public demo. Icons, dividers and patterns are original SVG.

## Pattern inspiration (v4 Jaipuri layer)
All SVG patterns in `app/globals.css` (butti, jaal, blue-pottery medallion, mehrab arch, peacock-gate fan, cusped border band) are **original drawings**, inspired by (not traced from) these references:
- Sanganeri / Bagru hand block prints — Anokhi Museum of Hand Printing (https://www.anokhi.com/museum), V&A (https://collections.vam.ac.uk/search/?q=sanganer), Wikimedia Commons "Bagru Print.jpg"
- Jaipur blue pottery — Wikimedia Commons "Blue Pottery, Jaipur School of Art.jpg"
- City Palace Pritam Niwas Chowk peacock gate — Wikimedia Commons "Pritam Niwas Chowk (39604635274).jpg"
- Hawa Mahal, Amer Fort jaali, jharokhas, Sheesh Mahal — Wikimedia Commons (various CC BY-SA photos)
- Rajasthani miniature painting borders (Kishangarh, Jaipur, Mewar) — The Met (https://www.metmuseum.org/art/collection/search?q=kishangarh), Wikimedia Commons
No reference images are shipped in this repo.

## AI-generated images
The following are AI-generated (not photographs of real products or places): the New Chai Table image, the Mix & Match dish images, the Jaipuri background art in `public/bg/` (butti fields, peacock fresco, blue-pottery field, miniature border) and the Regional Highlights art (`public/bg/region-*.webp`: Kerala mural/kasavu, Andhra Kalamkari, Mysore painting styles).
