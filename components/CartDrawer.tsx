"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "./cart";
import { PRODUCTS, money, shortTitle } from "@/lib/products";

export default function CartDrawer() {
  const { open, setOpen, lines, setQty, subtotal, checkoutUrl, count, toast } = useCart();
  useEffect(() => { const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false); window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k); }, [setOpen]);
  return (
    <>
      <div aria-live="polite" className={`toast ${toast && !open ? "show" : ""}`}>{toast}</div>
      <div className={`scrim ${open ? "on" : ""}`} onClick={() => setOpen(false)} aria-hidden />
      <aside className={`drawer ${open ? "on" : ""}`} role="dialog" aria-modal="true" aria-label="Your bag" aria-hidden={!open} inert={!open}>
        <header className="flex items-center justify-between bg-[var(--aubergine)] px-5 py-4 text-[var(--ivory)]">
          <h2 className="font-display text-3xl uppercase">Your bag ({count})</h2>
          <button className="iconbtn" onClick={() => setOpen(false)} aria-label="Close bag">✕</button>
        </header>
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {lines.length === 0 ? (
            <div className="py-10 text-center">
              <p className="font-display text-4xl uppercase">Bag's empty, yaar.</p>
              <p className="mt-2 opacity-80">Start with a hot sauce. Everyone does.</p>
              <Link href="/shop" onClick={() => setOpen(false)} className="btn mt-6 inline-flex">Shop the pantry</Link>
            </div>
          ) : (
            <ul className="space-y-3">
              {lines.map((l) => { const p = PRODUCTS.find((x) => x.handle === l.handle)!; return (
                <li key={l.handle} className="flex gap-3 rounded-2xl border border-[var(--line)] bg-white p-2">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl" style={{ background: p.color }}>
                    <Image src={p.cutout} alt="" fill sizes="80px" className="object-contain p-1.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold leading-tight">{shortTitle(p.title)}</p>
                    <p className="text-sm opacity-70">{p.vendor}</p>
                    <div className="mt-1 flex items-center justify-between">
                      <div className="qty" role="group" aria-label={`Quantity for ${shortTitle(p.title)}`}>
                        <button onClick={() => setQty(l.handle, l.qty - 1)} aria-label="Decrease">−</button>
                        <span>{l.qty}</span>
                        <button onClick={() => setQty(l.handle, l.qty + 1)} aria-label="Increase">+</button>
                      </div>
                      <span className="font-bold">{money(Number(p.price) * l.qty)}</span>
                    </div>
                  </div>
                </li>); })}
            </ul>
          )}
        </div>
        {lines.length > 0 && (
          <footer className="border-t border-[var(--gold)] bg-[var(--cream)] px-5 py-4">
            <div className="flex justify-between text-lg font-bold"><span>Subtotal</span><span>{money(subtotal)}</span></div>
            <p className="mb-3 text-sm opacity-80">Shipping and taxes are calculated at Shopify checkout.</p>
            <a href={checkoutUrl} className="btn w-full justify-center !bg-[var(--ink)] !text-white">Checkout →</a>
          </footer>
        )}
      </aside>
    </>
  );
}
