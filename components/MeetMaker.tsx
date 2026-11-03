"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MAKERS } from "@/lib/site";
import { PRODUCTS, shortTitle } from "@/lib/products";
export default function MeetMaker() {
  const [i, setI] = useState(0);
  const m = MAKERS[i];
  const ps = PRODUCTS.filter((p) => p.vendor === m.name);
  return (
    <section aria-labelledby="mm" className="band transition-colors duration-500" style={{ background: m.color, color: m.ink }}>
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
        <p className="eyebrow">04 · Meet the maker</p>
        <h2 id="mm" className="h2" data-rv>Meet the makers.</h2>
        <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Makers">
          {MAKERS.map((x, j) => <button key={x.slug} role="tab" aria-selected={i === j} onClick={() => setI(j)} className={`tab ${i === j ? "on" : ""}`}>{x.name}</button>)}
        </div>
        <div className="mt-10 grid items-center gap-8 md:grid-cols-2" role="tabpanel">
          <div>
            <div className="inline-block rounded-2xl border-[3px] border-[var(--ink)] bg-white p-4"><Image src={m.logo} alt={`${m.name} logo`} width={220} height={110} className="h-16 w-auto object-contain md:h-20" /></div>
            <blockquote className="mt-6 font-serif text-3xl italic leading-tight md:text-5xl">“{m.quote}”</blockquote>
            <p className="mt-2 text-sm font-bold uppercase tracking-wider opacity-85">— {m.name}, {m.source}</p>
            <p className="mt-5 max-w-[50ch] text-lg">{m.blurb}</p>
            <Link href={`/makers#${m.slug}`} className="btn mt-6">Shop {m.name} →</Link>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {ps.map((p) => (
              <li key={p.handle}><Link href={`/products/${p.handle}`} className="block rounded-2xl border-[3px] border-[var(--ink)] bg-[var(--cream)] p-2 text-[var(--ink)] transition-transform hover:-rotate-2 hover:scale-105">
                <span className="relative block aspect-square"><Image src={p.cutout} alt={p.title} fill sizes="160px" className="object-contain" /></span>
                <span className="block pt-1 text-center text-sm font-bold leading-tight">{shortTitle(p.title)}</span>
              </Link></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
