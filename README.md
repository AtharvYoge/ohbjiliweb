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
