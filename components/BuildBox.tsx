"use client";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "./cart";
import { PRODUCTS, shortTitle, money, inkOn } from "@/lib/products";
import { CATEGORIES } from "@/lib/site";

export default function BuildBox() {
  const { addMany } = useCart();
  const [cat, setCat] = useState<string>("All");
  const [sel, setSel] = useState<string[]>([]);
  const list = PRODUCTS.filter((p) => cat === "All" || p.category === cat);
  const total = sel.reduce((a, h) => a + Number(PRODUCTS.find((p) => p.handle === h)!.price), 0);
  const toggle = (h: string) => setSel((s) => (s.includes(h) ? s.filter((x) => x !== h) : [...s, h]));
  return (
    <section id="build-box" aria-labelledby="bb" className="scroll-mt-28 bg-[var(--blue)] py-16 text-white md:py-24">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Build your own</p>
            <h2 id="bb" className="h2" data-rv>Build your own <span className="text-[var(--marigold)]">Bijli box.</span></h2>
            <p className="mt-2 max-w-[48ch] text-white/85">Tap the flavours you want. Mix makers. We'll drop the whole lot in your bag.</p>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter box items">
            {["All", ...CATEGORIES].map((c) => <button key={c} onClick={() => setCat(c)} className={`chip chip-dark ${cat === c ? "on" : ""}`} aria-pressed={cat === c}>{c}</button>)}
          </div>
        </div>
        <ul className="stack mt-10" aria-label="Box items">
          {list.map((p, i) => { const on = sel.includes(p.handle); return (
            <li key={p.handle} className="stack-li" style={{ zIndex: on ? 50 : i, ["--r" as string]: `${(i % 2 ? 1 : -1) * (1 + (i % 3))}deg` }}>
              <button className={`scard ${on ? "on" : ""}`} style={{ background: p.color, color: inkOn(p.color) }} onClick={() => toggle(p.handle)} aria-pressed={on} aria-label={`${on ? "Remove" : "Add"} ${shortTitle(p.title)}, ${money(p.price)}`}>
                <span className="scard-check" aria-hidden>{on ? "✓" : "+"}</span>
                <span className="relative block h-[62%] w-full"><Image src={p.cutout} alt="" fill sizes="220px" className="object-contain drop-shadow-[0_10px_14px_rgba(0,0,0,.35)]" /></span>
                <span className="mt-auto block font-display text-xl uppercase leading-none md:text-2xl">{shortTitle(p.title)}</span>
                <span className="block text-sm font-bold">{money(p.price)}</span>
              </button>
            </li>); })}
        </ul>
        <div className="boxbar" aria-live="polite">
          <div className="flex items-center gap-3">
            <span className="boxcount">{sel.length}</span>
            <div><p className="font-display text-2xl uppercase leading-none">{sel.length ? `${sel.length} in your box` : "Your box is empty"}</p><p className="text-sm opacity-80">{sel.length ? `${money(total)} subtotal` : "Pick 3 or more for a proper haul"}</p></div>
          </div>
          <div className="flex gap-2">
            {sel.length > 0 && <button className="btn btn-ghost" onClick={() => setSel([])}>Clear</button>}
            <button className="btn" disabled={!sel.length} onClick={() => { addMany(sel); setSel([]); }}>Add box to bag →</button>
          </div>
        </div>
      </div>
    </section>
  );
}
