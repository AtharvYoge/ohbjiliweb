import Image from "next/image";
import Link from "next/link";
import { type Edit } from "@/lib/site";
import { byHandle, shortTitle, money } from "@/lib/products";

export default function EditBand({ e, big = false }: { e: Edit; big?: boolean }) {
  const ps = e.handles.map(byHandle).filter(Boolean);
  return (
    <section className="band" style={{ background: e.color, color: e.ink }} aria-labelledby={`eb-${e.slug}`}>
      <div className={`mx-auto max-w-[1400px] px-4 md:px-8 ${big ? "py-16 md:py-24" : "py-12 md:py-16"}`}>
        <div className="grid items-end gap-6 md:grid-cols-[1.1fr_1fr]">
          <div data-rv>
            <p className="eyebrow">{e.kicker} · The edit</p>
            <h2 id={`eb-${e.slug}`} className="font-display uppercase leading-[.88]" style={{ fontSize: big ? "clamp(3.2rem,11vw,9.5rem)" : "clamp(2.4rem,7vw,5.6rem)" }}>{e.title}</h2>
          </div>
          <div data-rv>
            <p className="font-serif text-xl italic md:text-2xl">{e.line}</p>
            <Link href={`/edits/${e.slug}`} className="btn mt-5">See the edit →</Link>
          </div>
        </div>
        <ul className="cut-row mt-8" aria-label={`${e.title} products`}>
          {ps.map((p) => p && (
            <li key={p.handle} className="cut">
              <Link href={`/products/${p.handle}`}>
                <div className="ci"><Image src={p.cutout} alt={p.title} fill sizes="200px" className="object-contain object-bottom drop-shadow-[8px_10px_0_rgba(0,0,0,.25)]" /></div>
                <p className="mt-3 text-sm font-bold leading-tight md:text-base">{shortTitle(p.title)}</p>
                <p className="text-sm">{money(p.price)}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
