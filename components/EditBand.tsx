import Image from "next/image";
import Link from "next/link";
import { type Edit } from "@/lib/site";
import { byHandle, shortTitle, money } from "@/lib/products";
import { Ornament } from "./Divider";

export default function EditBand({ e, big = false, noReveal = false }: { e: Edit; big?: boolean; noReveal?: boolean }) {
  const ps = e.handles.map(byHandle).filter(Boolean);
  const rv = noReveal ? {} : { "data-rv": true };
  return (
    <section className="band" style={{ background: e.color, color: e.ink }} aria-labelledby={`eb-${e.slug}`}>
      <div className="jaal" aria-hidden style={{ opacity: 0.1 }} />
      <div className={`relative mx-auto max-w-[1300px] px-5 md:px-8 ${big ? "py-20 md:py-28" : "py-16 md:py-20"}`}>
        <div className="grid items-end gap-6 md:grid-cols-[1.2fr_1fr]">
          <div {...rv}>
            <p className="eyebrow">{e.kicker} · The edit</p>
            <h2 id={`eb-${e.slug}`} className="font-display leading-[.92] tracking-[-.035em]" style={{ fontSize: big ? "clamp(3.2rem,12vw,8.5rem)" : "clamp(2.4rem,8vw,5.2rem)" }}>{e.title}</h2>
          </div>
          <div {...rv}>
            <Ornament className="mb-3 h-4 w-24 opacity-80" />
            <p className="font-serif text-xl leading-snug md:text-2xl">{e.line}</p>
            <Link href={`/edits/${e.slug}`} className="btn mt-6">See the edit →</Link>
          </div>
        </div>
        <ul className="cut-row mt-10" aria-label={`${e.title} products`}>
          {ps.map((p) => p && (
            <li key={p.handle} className="cut">
              <Link href={`/products/${p.handle}`}>
                <div className="ci"><Image src={p.cutout} alt={p.title} fill sizes="200px" className="object-contain object-bottom drop-shadow-[0_16px_16px_rgba(20,8,24,.32)]" /></div>
                <p className="mt-3 font-display text-base leading-tight md:text-lg">{shortTitle(p.title)}</p>
                <p className="text-sm italic opacity-80">{money(p.price)}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
