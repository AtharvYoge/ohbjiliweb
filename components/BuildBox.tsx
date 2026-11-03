"use client";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "./cart";
import { PRODUCTS, shortTitle, money } from "@/lib/products";
import { CATEGORIES } from "@/lib/site";

const SLOTS = 6;
export default function BuildBox() {
  const { addMany } = useCart();
  const [cat, setCat] = useState<string>("All");
  const [sel, setSel] = useState<string[]>([]);
  const list = PRODUCTS.filter((p) => cat === "All" || p.category === cat);
  const total = sel.reduce((a, h) => a + Number(PRODUCTS.find((p) => p.handle === h)!.price), 0);
  const toggle = (h: string) => setSel((s) => (s.includes(h) ? s.filter((x) => x !== h) : s.length >= SLOTS ? s : [...s, h]));
  return (
    <section id="build-box" aria-labelledby="bb" className="relative scroll-mt-24 bg-[var(--ink)] py-20 text-[var(--ivory)] md:py-28">
      <div className="jaal" aria-hidden />
      <div className="relative mx-auto max-w-[1300px] px-5 md:px-8">
        <p className="eyebrow text-[var(--gold-2)]">Build your own</p>
        <h2 id="bb" className="h2" data-rv>Fill your <em className="gold-text">Bijli dabba.</em></h2>
        <p className="mt-3 max-w-[46ch] opacity-80">Six compartments, four makers. Tap to fill, tap again to swap. The whole dabba goes into your bag in one go.</p>
        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,420px)_1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="dabba" aria-live="polite" aria-label={`${sel.length} of ${SLOTS} compartments filled`}>
              <div className="slots">
                {Array.from({ length: SLOTS }).map((_, i) => { const h = sel[i]; const p = h && PRODUCTS.find((x) => x.handle === h);
                  return (
                    <div key={h || `e${i}`} className={`slot ${p ? "full" : ""}`}>
                      {p ? (<>
                        <Image src={p.cutout} alt={shortTitle(p.title)} fill sizes="120px" className="object-contain p-3 drop-shadow-[0_10px_10px_rgba(0,0,0,.4)]" />
                        <button onClick={() => toggle(p.handle)} aria-label={`Remove ${shortTitle(p.title)}`}>✕</button>
                      </>) : <span className="text-2xl">{i + 1}</span>}
                    </div>); })}
              </div>
            </div>
            <div className="boxbar mt-4 hidden lg:flex">
              <div className="flex items-center gap-3">
                <span className="boxcount">{sel.length}</span>
                <div><p className="font-display text-xl leading-none">{sel.length ? `${sel.length} of ${SLOTS} filled` : "Your dabba is empty"}</p><p className="text-sm opacity-75">{sel.length ? `${money(total)} subtotal` : "Pick three or more"}</p></div>
              </div>
              <div className="flex gap-2">
                {sel.length > 0 && <button className="btn btn-ghost !min-h-11 !px-4" onClick={() => setSel([])}>Clear</button>}
                <button className="btn btn-gold !min-h-11 !px-5" disabled={!sel.length} onClick={() => { addMany(sel); setSel([]); }}>Add dabba</button>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-5 flex flex-wrap gap-2" role="group" aria-label="Filter">
              {["All", ...CATEGORIES].map((c) => <button key={c} onClick={() => setCat(c)} className={`chip chip-dark ${cat === c ? "on" : ""}`} aria-pressed={cat === c}>{c}</button>)}
            </div>
            <ul className="tray">
              {list.map((p) => { const on = sel.includes(p.handle); const full = !on && sel.length >= SLOTS; return (
                <li key={p.handle}>
                  <button className="tile w-full" aria-pressed={on} disabled={full} onClick={() => toggle(p.handle)} aria-label={`${on ? "Remove" : "Add"} ${shortTitle(p.title)}, ${money(p.price)}`} style={{ opacity: full ? 0.45 : 1 }}>
                    <span className="tick" aria-hidden>{on ? "✓" : "+"}</span>
                    <span className="relative block h-28 w-full rounded-[999px_999px_12px_12px]" style={{ background: p.color }}><Image src={p.cutout} alt="" fill sizes="160px" className="object-contain p-3" /></span>
                    <span className="font-display text-[1.05rem] leading-tight">{shortTitle(p.title)}</span>
                    <span className="text-sm italic opacity-80">{money(p.price)}</span>
                  </button>
                </li>); })}
            </ul>
          </div>
        </div>
            <div className="boxbar mt-6 lg:hidden">
          <div className="flex items-center gap-3">
            <span className="boxcount">{sel.length}</span>
            <div><p className="font-display text-xl leading-none">{sel.length ? `${sel.length} of ${SLOTS} filled` : "Your dabba is empty"}</p><p className="text-sm opacity-75">{sel.length ? `${money(total)} subtotal` : "Pick three or more"}</p></div>
          </div>
          <div className="flex gap-2">
            {sel.length > 0 && <button className="btn btn-ghost !min-h-11 !px-4" onClick={() => setSel([])}>Clear</button>}
            <button className="btn btn-gold !min-h-11 !px-5" disabled={!sel.length} onClick={() => { addMany(sel); setSel([]); }}>Add dabba</button>
          </div>
        </div>
      </div>
    </section>
  );
}
