"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useCart } from "./cart";
import { PRODUCTS, shortTitle, money, type Product } from "@/lib/products";

// Product discovery marquee: a slow, infinite row of real store products. Pauses on touch/hover/focus.
function Row({ items, rev = false, dur }: { items: Product[]; rev?: boolean; dur: string }) {
  const { add } = useCart();
  const [hold, setHold] = useState(false);
  const t = useRef<ReturnType<typeof setTimeout> | null>(null);
  const press = () => { if (t.current) clearTimeout(t.current); setHold(true); };
  const release = () => { t.current = setTimeout(() => setHold(false), 2500); };
  const card = (p: Product, k: string, dup: boolean) => (
    <div key={k} className="dqc" style={{ ["--c" as string]: p.color }} aria-hidden={dup || undefined}>
      <Link href={`/products/${p.handle}`} tabIndex={dup ? -1 : undefined} className="block">
        <span className="im"><Image src={p.cutout} alt={dup ? "" : shortTitle(p.title)} fill sizes="190px" className="object-contain drop-shadow-[0_14px_12px_rgba(0,0,0,.35)]" /></span>
        <span className="mt-3 block text-[.6rem] font-bold uppercase tracking-[.18em] text-[var(--gold-2)]">{p.vendor}</span>
        <span className="mt-1 block font-display text-[1rem] leading-tight [text-wrap:balance]">{shortTitle(p.title)}</span>
        <span className="mt-1 block text-sm font-semibold">{money(p.price)}</span>
      </Link>
      <button className="ad" tabIndex={dup ? -1 : undefined} aria-label={`Add ${shortTitle(p.title)} to bag`} onClick={() => add(p.handle, 1)}>+</button>
    </div>
  );
  return (
    <div className={`dq-row ${hold ? "hold" : ""}`} onTouchStart={press} onTouchEnd={release} onPointerDown={press} onPointerUp={release}>
      <div className={`dq-track ${rev ? "rev" : ""}`} style={{ ["--dur" as string]: dur }}>
        {items.map((p) => card(p, p.handle, false))}
        {items.map((p) => card(p, p.handle + "-d", true))}
      </div>
    </div>
  );
}
export default function Discovery() {
  const live = PRODUCTS.filter((p) => p.available !== false);
  const half = Math.ceil(live.length / 2);
  return (
    <section aria-labelledby="dq-h" className="dq py-12 md:py-16">
      <div className="jp dq-bg" aria-hidden />
      <div className="relative mx-auto max-w-[1300px] px-5 md:px-8">
        <p className="eyebrow text-[var(--pink)]">Browse the bazaar</p>
        <h2 id="dq-h" className="h2 !text-[clamp(1.9rem,7.4vw,3.6rem)]">Window-shop <em className="text-[var(--peacock)]">all {live.length}.</em></h2>
        <p className="mt-2 max-w-[44ch] text-[.98rem] opacity-80">Swipe the shelf. Tap a card to open it, or + to drop it in your bag.</p>
      </div>
      <div className="relative mt-6"><Row items={live} dur="90s" /></div>
      <div className="relative mt-2 hidden md:block"><Row items={[...live.slice(half), ...live.slice(0, half)]} rev dur="110s" /></div>
    </section>
  );
}
