"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "./cart";
import Bolt from "./Logo";
import { SITE_NAME, CATEGORIES, EDITS, MAKERS } from "@/lib/site";
import { PRODUCTS, shortTitle, money } from "@/lib/products";


export default function Header() {
  const { count, setOpen } = useCart();
  const [menu, setMenu] = useState(false);
  const [sec, setSec] = useState<string>("shop");
  const [chip, setChip] = useState<string>("All");
  const path = usePathname();
  useEffect(() => setMenu(false), [path]);
  useEffect(() => { document.body.style.overflow = menu ? "hidden" : ""; }, [menu]);
  const list = PRODUCTS.filter((p) => chip === "All" || p.category === chip);
  return (
    <>
      <div className="announce" role="note"><span>New-wave Indian pantry · Prices from the live store · Checkout on Shopify</span></div>
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color:rgba(251,246,236,.86)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center gap-1.5 px-3 md:gap-4 md:h-20 md:px-8">
          <button className="iconbtn md:hidden" onClick={() => setMenu(true)} aria-label="Open menu" aria-expanded={menu}>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden><path d="M3 6h18M3 12h18M3 18h12" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/></svg>
          </button>
          <Link href="/" className="logo" aria-label={`${SITE_NAME} home`}>
            <Bolt />{SITE_NAME.split(" ")[0]}&nbsp;<i>{SITE_NAME.split(" ")[1]}</i>&nbsp;{SITE_NAME.split(" ").slice(2).join(" ")}
          </Link>
          <nav aria-label="Main" className="ml-auto hidden items-center gap-1 md:flex">
            {[["/shop", "Shop"], ["/discover-india", "Discover India"], ["/makers", "Makers"], ["/search", "Search"]].map(([h, l]) => (
              <Link key={h} href={h} className={`navlink ${path === h ? "on" : ""}`}>{l}</Link>
            ))}
          </nav>
          <Link href="/search" className="iconbtn ml-auto md:hidden" aria-label="Search">
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="2.6"/><path d="m15.5 15.5 5 5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/></svg>
          </Link>
          <button className="cartbtn" onClick={() => setOpen(true)} aria-label={`Open bag, ${count} items`}>
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden><path d="M5 8h14l-1.2 12H6.2L5 8Zm4 0V6a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round"/></svg>
            <span className="hidden sm:inline">Bag</span><b>{count}</b>
          </button>
        </div>
      </header>

      <div className={`mmenu ${menu ? "on" : ""}`} role="dialog" aria-modal="true" aria-label="Menu" inert={!menu}>
        <div className="flex h-16 items-center justify-between border-b border-[rgba(232,207,138,.35)] px-4">
          <span className="logo text-[var(--ivory)]"><Bolt />{SITE_NAME}</span>
          <button className="iconbtn" onClick={() => setMenu(false)} aria-label="Close menu">✕</button>
        </div>
        <div className="relative overflow-y-auto pb-10">
          <button className="acc" aria-expanded={sec === "shop"} onClick={() => setSec(sec === "shop" ? "" : "shop")}><small>I</small>Shop <span>{sec === "shop" ? "−" : "+"}</span></button>
          {sec === "shop" && (
            <div className="pb-5">
              <div className="flex flex-wrap gap-2 px-4">
                {["All", ...CATEGORIES].map((c) => <button key={c} onClick={() => setChip(c)} className={`chip ${chip === c ? "on" : ""}`}>{c}</button>)}
              </div>
              <div className="mscroll !px-5 [scroll-padding-inline:20px]">
                {list.map((p) => (
                  <Link key={p.handle} href={`/products/${p.handle}`} className="mcard">
                    <div className="relative aspect-square rounded-2xl" style={{ background: p.color }}><Image src={p.cutout} alt={p.title} fill sizes="140px" className="object-contain p-3" /></div>
                    <span className="mt-2 block font-display text-base leading-tight">{shortTitle(p.title)}</span>
                    <span className="text-sm">{money(p.price)}</span>
                  </Link>
                ))}
              </div>
              <Link href="/shop" className="ml-5 text-sm font-semibold uppercase tracking-[.18em] text-[var(--gold-2)]">Shop all 16 →</Link>
            </div>
          )}
          <button className="acc" aria-expanded={sec === "edits"} onClick={() => setSec(sec === "edits" ? "" : "edits")}><small>II</small>Edits <span>{sec === "edits" ? "−" : "+"}</span></button>
          {sec === "edits" && <ul className="px-4 pb-4">{EDITS.map((e) => <li key={e.slug}><Link className="block py-2 text-lg" href={`/edits/${e.slug}`}>{e.title}</Link></li>)}</ul>}
          <button className="acc" aria-expanded={sec === "makers"} onClick={() => setSec(sec === "makers" ? "" : "makers")}><small>III</small>Makers <span>{sec === "makers" ? "−" : "+"}</span></button>
          {sec === "makers" && <ul className="px-4 pb-4">{MAKERS.map((m) => <li key={m.slug}><Link className="block py-2 text-lg" href={`/makers#${m.slug}`}>{m.name}</Link></li>)}</ul>}
          <div className="mt-8 space-y-1 px-5">
            {[["/discover-india", "Discover India"], ["/#build-box", "Build your box"], ["/search", "Search"], ["/#newsletter", "Newsletter"]].map(([h, l]) => (
              <Link key={h} href={h} onClick={() => setMenu(false)} className="block py-1 font-serif text-4xl leading-tight text-[var(--gold-2)]">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
