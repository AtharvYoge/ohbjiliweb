import Link from "next/link";
import Image from "next/image";
import PageHead from "@/components/PageHead";
import Marquee from "@/components/Marquee";
import Values from "@/components/Values";
import { byHandle, shortTitle } from "@/lib/products";

// Every regional fact below is taken from the product descriptions in the store data.
const MAP = [
  { r: "Kolhapur, Maharashtra", t: "Sankeshwari chilli", d: "The Original builds its heat on the Sankeshwari chilli from Kolhapur District, inspired by vada pav masala.", h: "the-original", c: "var(--chilli)", ink: "#fff" },
  { r: "North-East India", t: "Bhut Jolokia", d: "Smoky Bhoot gets its fiery flavour from the legendary Bhut Jolokia chilli.", h: "smoky-bhoot", c: "var(--maroon)", ink: "#fff" },
  { r: "Kerala", t: "Banana chips in coconut oil", d: "Kerala banana chips made with coconut oil, for tea time and surprise guests.", h: "kerala-banana-chips-made-with-coconut-oil", c: "var(--parrot)", ink: "#fff" },
  { r: "Palakkad memories", t: "Salt banana chips", d: "VS Mani's banana chips come with a story about summer road trips to Palakkad.", h: "salt-banana-chips-65g-x-3-packs", c: "var(--marigold)", ink: "var(--ink)" },
  { r: "Andhra", t: "Spicy murukku", d: "Also known as janthikalu or murukulu, from a place where spice is never optional.", h: "andhra-spicy-murukku-classic-crunch", c: "var(--orange)", ink: "var(--ink)" },
  { r: "Lucknow, by way of Bombay", t: "Karak sohan halwa, reimagined", d: "Bombay Sweet Shop's Choco Butterscotch Barks were inspired by Lucknow's karak sohan halwa.", h: "choco-butterscotch-barks-200g", c: "var(--pink)", ink: "#fff" },
  { r: "South Indian mornings", t: "Filter coffee & podi", d: "Decoction drip-dripping in a brass filter, and podi next to the idlis: VS Mani's two breakfast stories.", h: "gunpowder-idli-molaga-podi-150g-x-2-packs", c: "var(--blue)", ink: "#fff" },
];
export const metadata = { title: "Discover India" };
export default function Discover() {
  return (<>
    <PageHead k="Discover India" t={<>Taste the <em>map.</em></>} d="Food carries a place with it. Here's where the chillies, chips and mithai in our pantry come from, in the makers' own words." bg="var(--marigold)" ink="var(--ink)" />
    <Marquee bg="var(--ink)" color="var(--marigold)" items={MAP.map((m) => m.r)} />
    <section className="mx-auto max-w-[1200px] space-y-6 px-4 py-14 md:px-8 md:py-20">
      {MAP.map((m, i) => { const p = byHandle(m.h)!; return (
        <article key={m.t} className="grid items-center gap-6 overflow-hidden rounded-[30px] border border-[var(--line)] p-6 shadow-[0_30px_60px_-34px_rgba(27,20,32,.55)] md:grid-cols-[1.4fr_1fr] md:p-10" style={{ background: m.c, color: m.ink }} data-rv>
          <div className={i % 2 ? "md:order-2" : ""}>
            <p className="eyebrow">📍 {m.r}</p>
            <h2 className="font-display text-5xl uppercase leading-[.9] md:text-7xl">{m.t}</h2>
            <p className="mt-3 max-w-[46ch] font-serif text-xl">{m.d}</p>
            <Link href={`/products/${p.handle}`} className="btn mt-5">Try {shortTitle(p.title)} →</Link>
          </div>
          <div className="relative h-56 md:h-72"><Image src={p.cutout} alt={p.title} fill sizes="(max-width:768px) 80vw, 30vw" className="object-contain drop-shadow-[0_16px_16px_rgba(20,8,24,.32)]" /></div>
        </article>); })}
    </section>
    <Values />
  </>);
}
