"use client";
import { useState } from "react";
import { useCart } from "./cart";
export default function AddToCart({ handle, label }: { handle: string; label: string }) {
  const { add } = useCart();
  const [q, setQ] = useState(1);
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="qty !border-[3px] bg-white" role="group" aria-label="Quantity">
        <button onClick={() => setQ(Math.max(1, q - 1))} aria-label="Decrease quantity" className="!h-12 !w-12">−</button>
        <span>{q}</span>
        <button onClick={() => setQ(Math.min(99, q + 1))} aria-label="Increase quantity" className="!h-12 !w-12">+</button>
      </div>
      <button className="btn btn-pink flex-1 justify-center" onClick={() => add(handle, q)}>Add to cart · {label}</button>
    </div>
  );
}
export function AddAll({ handles }: { handles: string[] }) {
  const { addMany } = useCart();
  return <button className="btn" onClick={() => addMany(handles)}>Add the whole edit to bag →</button>;
}
export function StickyBuy({ handle, title, price }: { handle: string; title: string; price: string }) {
  const { add } = useCart();
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex items-center gap-3 border-t-[3px] border-[var(--ink)] bg-[var(--cream)] px-3 py-2.5 md:hidden" style={{ paddingBottom: "max(10px, env(safe-area-inset-bottom))" }}>
      <div className="min-w-0 flex-1"><p className="truncate text-sm font-bold">{title}</p><p className="font-display text-xl leading-none">{price}</p></div>
      <button className="btn btn-pink !min-h-12 !px-5" onClick={() => add(handle)}>Add to cart</button>
    </div>
  );
}
