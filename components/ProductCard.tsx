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
        <div className="pimg" style={{ background: `radial-gradient(120% 80% at 50% 0%, ${p.color}cc, ${p.color})` }}>
          <Image src={p.cutout} alt={p.title} fill sizes={sizes} className="object-contain px-5 pb-10 pt-8 drop-shadow-[0_18px_16px_rgba(0,0,0,.35)]" />
          <span className="sticker">{p.category}</span>
        </div>
        <div className="pt-4 text-center">
          <p className="text-[.66rem] font-bold uppercase tracking-[.2em] text-[var(--peacock)]">{p.vendor}</p>
          <h3 className="mt-1 font-display text-[1.2rem] leading-tight md:text-[1.4rem]">{shortTitle(p.title)}</h3>
          <p className="mx-auto mt-1 line-clamp-2 max-w-[30ch] text-[.84rem] leading-snug opacity-70">{oneLine(p)}</p>
          <p className="mt-2 font-display text-lg italic">{money(p.price)}</p>
        </div>
      </Link>
      <button className="addbar mt-auto" onClick={() => add(p.handle)} aria-label={`Add ${shortTitle(p.title)} to bag`}>Add to bag <span className="plus" aria-hidden>+</span></button>
    </article>
  );
}
