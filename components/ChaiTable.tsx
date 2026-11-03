import Image from "next/image";
import Link from "next/link";
import { EDITS } from "@/lib/site";
import { byHandle, shortTitle, money } from "@/lib/products";
import Divider from "./Divider";

// The New Chai Table: a full-width saffron feature band. Not hidden behind a reveal.
export default function ChaiTable() {
  const e = EDITS.find((x) => x.slug === "the-new-chai-table")!;
  const ps = e.handles.map(byHandle).filter(Boolean) as NonNullable<ReturnType<typeof byHandle>>[];
  return (
    <section id="chai-table" aria-labelledby="chai-h" className="relative overflow-hidden text-[var(--ink)]" style={{ background: "radial-gradient(90% 70% at 80% 0%, #F2C25B, #E3A33A 55%, #C98A2B)" }}>
      <Divider a="#3D1A4A" b="#B8402A" c="#E3A33A" />
      <div className="jaal" aria-hidden style={{ opacity: 0.18, filter: "invert(1) sepia(1) saturate(4) hue-rotate(250deg)" }} />
      <div className="relative mx-auto max-w-[1300px] px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-8 md:grid-cols-[1.25fr_1fr]">
          <div>
            <p className="eyebrow text-[var(--aubergine)]">{e.kicker} · Four o&apos;clock</p>
            <h2 id="chai-h" className="font-display leading-[.9] tracking-[-.04em]" style={{ fontSize: "clamp(3.4rem,14vw,9rem)" }}>
              The New <em className="block text-[var(--aubergine)]">Chai Table.</em>
            </h2>
            <p className="mt-5 max-w-[40ch] font-serif text-xl leading-snug md:text-2xl">{e.line}</p>
            <p className="mt-3 max-w-[48ch] text-[.98rem] opacity-85">{e.story[1]}</p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link href={`/edits/${e.slug}`} className="btn">Set the chai table →</Link>
              <span className="text-sm font-semibold">{ps.length} pieces · from {money(Math.min(...ps.map((p) => Number(p.price))))}</span>
            </div>
          </div>
          <svg viewBox="0 0 220 200" className="mx-auto hidden w-full max-w-[340px] text-[var(--aubergine)] md:block" aria-hidden fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M60 80h90v50a45 45 0 0 1-90 0Z" /><path d="M150 92c22 0 22 34 0 34" /><ellipse cx="105" cy="80" rx="45" ry="8" />
            <path d="M40 182h140" /><ellipse cx="105" cy="178" rx="70" ry="10" />
            <path d="M88 60c-6-10 6-14 0-26M106 56c-6-10 6-14 0-26M124 60c-6-10 6-14 0-26" opacity=".7" />
            <path d="M80 110 90 120l-10 10-10-10ZM130 110l10 10-10 10-10-10Z" fill="currentColor" opacity=".35" />
          </svg>
        </div>
        <ul className="cut-row mt-10 md:justify-between" aria-label="On the chai table">
          {ps.map((p) => (
            <li key={p.handle} className="cut">
              <Link href={`/products/${p.handle}`}>
                <div className="ci"><Image src={p.cutout} alt={p.title} fill sizes="200px" className="object-contain object-bottom drop-shadow-[0_18px_14px_rgba(61,26,74,.35)]" /></div>
                <span className="mx-auto mt-2 block h-2 w-3/4 rounded-full bg-[rgba(61,26,74,.18)] blur-[3px]" aria-hidden />
                <p className="mt-2 font-display text-base leading-tight md:text-lg">{shortTitle(p.title)}</p>
                <p className="text-sm italic">{money(p.price)}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Divider a="#3D1A4A" b="#B8402A" c="#E3A33A" />
    </section>
  );
}
