// Swap the spelling here (e.g. "Bijali") and it updates everywhere.
export const BRAND_WORD = "Bijli";
export const SITE_NAME = `Oh ${BRAND_WORD} Market`;
export const SHOP_DOMAIN = "ohbijli.myshopify.com";

export const POP = {
  pink: "#9E2F5C", marigold: "#E3A33A", chilli: "#B8402A", parrot: "#1F6B4A",
  blue: "#0B5E63", maroon: "#3D1A4A", cream: "#F6EFE2", ink: "#1B1420", orange: "#C98A2B",
};

export const CATEGORIES = ["Snacks", "Pantry", "Drinks & treats"] as const;
export type Category = (typeof CATEGORIES)[number];

export type Maker = { slug: string; name: string; color: string; ink: string; logo: string; quote: string; source: string; blurb: string };
export const MAKERS: Maker[] = [
  { slug: "naagin-sauce", name: "Naagin Sauce", color: POP.chilli, ink: "#fff", logo: "/brand/naagin-sauce-logo.png",
    quote: "the first truly Indian hot sauce, made for Indian taste buds", source: "naaginsauce.com",
    blurb: "Indian hot sauces and a crispy chilli oil: The Original (Sankeshwari chilli), Smoky Bhoot (Bhut Jolokia), Kantha Bomb (Kanthari) and Guntur Crisp." },
  { slug: "bombay-sweet-shop", name: "Bombay Sweet Shop", color: POP.pink, ink: "#fff", logo: "/brand/bombay-sweet-shop-logo.png",
    quote: "Indian sweets and savouries that are anything but boring", source: "bombaysweetshop.com",
    blurb: "Mithai and namkeen with a twist: chocolate kaju katli, butterscotch barks, peri peri salli and chilli cheese bhujia." },
  { slug: "vs-mani-co", name: "VS Mani & Co.", color: POP.blue, ink: "#fff", logo: "/brand/vs-mani-logo.png",
    quote: "authentic South Indian filter coffee, instant coffee and wholesome snacks", source: "vsmani.com",
    blurb: "Filter coffee decoction in single-serve sachets, gunpowder podi and salted banana chips." },
  { slug: "sweet-karam-coffee", name: "Sweet Karam Coffee", color: POP.parrot, ink: "#fff", logo: "/brand/sweet-karam-coffee-logo.png",
    quote: "Experience South India", source: "sweetkaramcoffee.in",
    blurb: "South Indian snacks and sweets: murukku, Kerala banana chips in coconut oil and ghee Mysore pak." },
];
export const vendorSlug = (v: string) => MAKERS.find((m) => m.name === v)?.slug ?? "";

export type Edit = { slug: string; title: string; kicker: string; color: string; ink: string; line: string; story: string[]; handles: string[]; steps: string[] };
export const EDITS: Edit[] = [
  { slug: "the-new-chai-table", title: "The New Chai Table", kicker: "Edit 01", color: POP.marigold, ink: POP.ink,
    line: "Four o'clock, kettle on, and a plate that isn't the same old biscuit tin.",
    story: ["Chai time is the most democratic meal in a desi house. Everyone shows up, nobody RSVPs.", "This edit swaps in crunchy, spicy and sweet bites from new-wave makers so the plate gets as much attention as the cup."],
    handles: ["kai-murukku-chakli", "kerala-banana-chips-made-with-coconut-oil", "chilli-cheese-bhujia-90g", "ghee-mysore-pak-soft", "chocolate-butter-cookies"],
    steps: ["Brew your chai the way your house does it.", "Go one savoury, one spicy, one sweet.", "Set it out in steel katoris for full effect."] },
  { slug: "grilled-cheese-meet-naagin", title: "Grilled Cheese, Meet Naagin", kicker: "Edit 02", color: POP.chilli, ink: "#fff",
    line: "Your diner order, but make it Sankeshwari.",
    story: ["The grilled cheese is the most American sandwich there is. A drizzle of Indian hot sauce is the most desi move there is.", "Pick a bottle, pick a heat level, and go."],
    handles: ["the-original", "kantha-bomb-indian-hot-sauce", "smoky-bhoot", "guntur-crisp"],
    steps: ["Butter the bread, load the cheese.", "Griddle until golden.", "Drizzle or dunk. Repeat."] },
  { slug: "the-filter-coffee-hour", title: "The Filter Coffee Hour", kicker: "Edit 03", color: POP.blue, ink: "#fff",
    line: "Decoction energy, no brass filter required.",
    story: ["South Indian filter coffee is a ritual: strong decoction, hot milk, the pour back and forth.", "VS Mani & Co. packs the decoction into single-serve sachets. Add something to dunk."],
    handles: ["easy-filter-coffee-80-20-20ml-x-35-packs-single-serve-sachet", "chocolate-butter-cookies", "salt-banana-chips-65g-x-3-packs"],
    steps: ["Empty a sachet into a cup.", "Top with hot milk and sugar to taste.", "Pour between two cups for froth."] },
  { slug: "before-your-next-desi-potluck", title: "Before Your Next Desi Potluck", kicker: "Edit 04", color: POP.parrot, ink: "#fff",
    line: "Show up with something the aunties haven't seen.",
    story: ["Every potluck has a chip bowl. Yours can have murukku, salli and bhujia instead.", "Easy to carry, easy to share, zero cooking."],
    handles: ["andhra-spicy-murukku-classic-crunch", "peri-peri-potato-salli-90g", "chilli-cheese-bhujia-90g", "indie-bites-54-5-dark-chocolate-kaju-katli"],
    steps: ["Pour into one big bowl or three small ones.", "Put the kaju katli out last.", "Bring extra. Someone will ask."] },
  { slug: "desi-game-day", title: "Desi Game Day", kicker: "Edit 05", color: POP.orange, ink: POP.ink,
    line: "Wings, but the hot sauce has a passport.",
    story: ["Game day is snacks and sauces. Swap in Indian hot sauces for the wings and namkeen for the bowl.", "Cricket, football, whatever is on: the table is the same."],
    handles: ["smoky-bhoot", "the-original", "peri-peri-potato-salli-90g", "andhra-spicy-murukku-classic-crunch"],
    steps: ["Toss wings or fries in hot sauce.", "Snack bowls on every surface.", "Keep water nearby for Smoky Bhoot."] },
  { slug: "things-your-mom-will-ask-where-you-got", title: "Things Your Mom Will Ask Where You Got", kicker: "Edit 06", color: POP.pink, ink: "#fff",
    line: "The flex is bringing mithai she hasn't tried.",
    story: ["Bring these home and watch the questions start.", "Mithai and sweets that feel familiar and new at the same time."],
    handles: ["indie-bites-54-5-dark-chocolate-kaju-katli", "choco-butterscotch-barks-200g", "ghee-mysore-pak-soft", "gunpowder-idli-molaga-podi-150g-x-2-packs"],
    steps: ["Bring a box when you visit.", "Act casual.", "Send her the link later."] },
  { slug: "first-semester-survival-kit", title: "First Semester Survival Kit", kicker: "Edit 07", color: POP.maroon, ink: "#fff",
    line: "Dorm food, upgraded from home.",
    story: ["Dining hall rice needs gunpowder podi. Late-night ramen needs chilli crisp. Finals need coffee.", "A care package that makes a dorm room smell like home."],
    handles: ["gunpowder-idli-molaga-podi-150g-x-2-packs", "guntur-crisp", "easy-filter-coffee-80-20-20ml-x-35-packs-single-serve-sachet", "salt-banana-chips-65g-x-3-packs"],
    steps: ["Mix podi with ghee or oil, eat with rice.", "Spoon chilli crisp onto noodles.", "Sachet coffee before the 9am."] },
];

export const HOW_TO: Record<Category, string[]> = {
  Snacks: ["Pour into a bowl next to your chai or coffee.", "Set out at a potluck or game day spread.", "Pack a handful for the commute."],
  Pantry: ["Drizzle on eggs, grilled cheese, pizza or noodles.", "Stir into rice or dips.", "Start small and taste: heat levels vary."],
  "Drinks & treats": ["Pair with filter coffee or chai.", "Bring as a host gift.", "Plate a few after dinner."],
};
