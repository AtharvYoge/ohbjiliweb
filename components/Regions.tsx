"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "./cart";
import { byHandle, shortTitle, money } from "@/lib/products";

// Only regions stated in the products' own store descriptions/titles. Products with no stated region are left out.
const REGIONS = [
  { r: "Kerala", art: "/bg/region-kerala.webp", style: "Kerala mural & kasavu", note: "“The classic flavours of Kerala”, in Sweet Karam Coffee's words, made with pure coconut oil.", h: ["kerala-banana-chips-made-with-coconut-oil"] },
  { r: "Andhra Pradesh", art: "/bg/region-andhra.webp", style: "Kalamkari", note: "Naagin's chilli crisp is built on Guntur chillies. Andhra murukku is also known as janthikalu.", h: ["guntur-crisp", "andhra-spicy-murukku-classic-crunch"] },
  { r: "Mysore", art: "/bg/region-karnataka.webp", style: "Mysore painting", note: "Ghee Mysore pak, made by Sweet Karam Coffee from gram flour, sugar and pure ghee.", h: ["ghee-mysore-pak-soft"] },
];
export default function Regions() {
  const { add } = useCart();
  return (
    <section id="regions" aria-labelledby="rg-h" className="relative overflow-hidden bg-[var(--aubergine)] py-16 text-[var(--ivory)] md:py-24">
      <div className="jp" aria-hidden style={{ backgroundImage: "var(--pt-jaal-gold)", backgroundSize: "80px 80px", opacity: 0.1 }} />
      <div className="relative mx-auto max-w-[1300px]">
        <div className="px-5 md:px-8">
          <p className="eyebrow text-[var(--gold-2)]">Regional highlights</p>
          <h2 id="rg-h" className="h2 !text-[clamp(1.9rem,7.6vw,4rem)]">Taste it <em className="gold-text">where it&apos;s from.</em></h2>
          <p className="mt-2 max-w-[46ch] opacity-85">Each card wears its home region&apos;s art. Swipe through.</p>
        </div>
        <ul className="rg-row mt-8 md:justify-center">
          {REGIONS.map((g) => (
            <li key={g.r} className="rg">
              <span className="rg-art" style={{ backgroundImage: `url(${g.art})` }} aria-hidden />
              <p className="text-[.62rem] font-bold uppercase tracking-[.22em] text-[var(--gold-2)]">{g.style} · AI art</p>
              <h3 className="font-display text-[2.1rem] leading-none">{g.r}</h3>
              <p className="mt-2 text-[.95rem] leading-snug opacity-95">{g.note}</p>
              <div className="mt-4 space-y-2">
                {g.h.map((h) => { const p = byHandle(h)!; return (
                  <div key={h} className="rg-p">
                    <Link href={`/products/${h}`} className="relative h-14 w-14 flex-none"><Image src={p.cutout} alt="" fill sizes="56px" className="object-contain" /></Link>
                    <Link href={`/products/${h}`} className="min-w-0 flex-1"><span className="block truncate text-sm font-semibold">{shortTitle(p.title)}</span><span className="text-xs opacity-70">{p.vendor} · {money(p.price)}</span></Link>
                    <button onClick={() => add(h, 1)} aria-label={`Add ${shortTitle(p.title)} to bag`} className="grid h-11 w-11 flex-none place-items-center rounded-full bg-[var(--aubergine)] text-lg text-[var(--gold-2)]">+</button>
                  </div>); })}
              </div>
            </li>))}
        </ul>
      </div>
    </section>
  );
}
