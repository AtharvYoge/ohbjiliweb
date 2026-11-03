"use client";
import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CATEGORIES, MAKERS } from "@/lib/site";
import { PRODUCTS, shortTitle } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function ShopGrid({ search = false }: { search?: boolean }) {
  const sp = useSearchParams();
  const [cat, setCat] = useState("All");
  const [maker, setMaker] = useState("All");
  const [sort, setSort] = useState("featured");
  const [q, setQ] = useState("");
  useEffect(() => { const c = sp.get("cat"); if (c && (CATEGORIES as readonly string[]).includes(c)) setCat(c); const m = sp.get("maker"); if (m) setMaker(m); setQ(sp.get("q") || ""); }, [sp]);
  const list = useMemo(() => {
    const t = q.toLowerCase().trim();
    let l = PRODUCTS.filter((p) => (cat === "All" || p.category === cat) && (maker === "All" || p.vendor === maker) && (!t || [p.title, p.vendor, p.category, ...p.tags].join(" ").toLowerCase().includes(t)));
    if (sort === "low") l = [...l].sort((a, b) => +a.price - +b.price);
    if (sort === "high") l = [...l].sort((a, b) => +b.price - +a.price);
    if (sort === "az") l = [...l].sort((a, b) => shortTitle(a.title).localeCompare(shortTitle(b.title)));
    return l;
  }, [cat, maker, sort, q]);
  return (
    <div>
      {search && (
        <div className="mb-6"><label htmlFor="q" className="sr-only">Search products</label>
          <input id="q" type="search" autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Try “hot sauce”, “murukku”, “coffee”…" className="input w-full text-lg" /></div>
      )}
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Category">
        {["All", ...CATEGORIES].map((c) => <button key={c} aria-pressed={cat === c} onClick={() => setCat(c)} className={`chip ${cat === c ? "on" : ""}`}>{c}</button>)}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 font-bold">Maker
          <select value={maker} onChange={(e) => setMaker(e.target.value)} className="chip !py-1"><option>All</option>{MAKERS.map((m) => <option key={m.slug}>{m.name}</option>)}</select></label>
        <label className="flex items-center gap-2 font-bold">Sort
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="chip !py-1"><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option><option value="az">A–Z</option></select></label>
        <span className="ml-auto text-sm font-bold" aria-live="polite">{list.length} product{list.length === 1 ? "" : "s"}</span>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
        {list.map((p) => <ProductCard key={p.handle} p={p} />)}
      </div>
      {list.length === 0 && <p className="py-16 text-center font-display text-4xl uppercase">Nothing yet. Try “chilli”.</p>}
    </div>
  );
}
