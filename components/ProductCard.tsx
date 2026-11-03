"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "./cart";
import { type Product, shortTitle, money, oneLine } from "@/lib/products";

export default function ProductCard({ p, sizes = "(max-width:768px) 50vw, 25vw" }: { p: Product; sizes?: string }) {
  const { add } = useCart();
  return (
    <article className="pcard">
      <Link href={`/products/${p.handle}`} className="block">
        <div className="pimg" style={{ background: p.color }}>
          <span className="sticker">{p.category}</span>
          <Image src={p.cutout} alt={p.title} fill sizes={sizes} className="object-contain p-5 transition-transform duration-500" />
        </div>
        <div className="px-3 pt-3">
          <p className="text-xs font-bold uppercase tracking-wider opacity-70">{p.vendor}</p>
          <h3 className="mt-0.5 font-serif text-lg leading-tight md:text-xl">{shortTitle(p.title)}</h3>
          <p className="mt-1 line-clamp-2 text-sm opacity-80">{oneLine(p)}</p>
        </div>
      </Link>
      <div className="mt-auto px-3 pb-3 pt-2 font-bold">{money(p.price)}</div>
      <button className="addbar" onClick={() => add(p.handle)} aria-label={`Add ${shortTitle(p.title)} to bag`}>Add to cart +</button>
    </article>
  );
}
