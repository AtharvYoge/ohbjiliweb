"use client";
import { useState } from "react";
import { CATEGORIES } from "@/lib/site";
import { PRODUCTS } from "@/lib/products";
import ProductCard from "./ProductCard";
export default function Favorites() {
  const [c, setC] = useState<string>("Snacks");
  return (
    <section aria-labelledby="fav" className="bg-[var(--cream)] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <p className="eyebrow text-[var(--chilli)]">05 · Find your next favorite</p>
        <h2 id="fav" className="h2" data-rv>Find your next <span className="font-serif normal-case italic text-[var(--pink)]">favorite.</span></h2>
        <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Categories">
          {CATEGORIES.map((x) => <button key={x} role="tab" aria-selected={c === x} className={`tab ${c === x ? "on" : ""}`} onClick={() => setC(x)}>{x}</button>)}
        </div>
        <div role="tabpanel" className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-6">
          {PRODUCTS.filter((p) => p.category === c).map((p) => <ProductCard key={p.handle} p={p} sizes="(max-width:768px) 50vw, 16vw" />)}
        </div>
      </div>
    </section>
  );
}
