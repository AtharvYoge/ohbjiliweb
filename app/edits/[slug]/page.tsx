import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { AddAll } from "@/components/AddToCart";
import Divider from "@/components/Divider";
import { EDITS } from "@/lib/site";
import { byHandle, money } from "@/lib/products";

export const dynamicParams = false;
export function generateStaticParams() { return EDITS.map((e) => ({ slug: e.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; return { title: EDITS.find((x) => x.slug === slug)?.title ?? "Edit" }; }

export default async function EditPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = EDITS.find((x) => x.slug === slug);
  if (!e) notFound();
  const ps = e.handles.map(byHandle).filter((p): p is NonNullable<typeof p> => !!p);
  const total = ps.reduce((a, p) => a + Number(p.price), 0);
  const i = EDITS.indexOf(e); const next = EDITS[(i + 1) % EDITS.length];
  return (
    <>
      <section className="hero" style={{ background: e.color, color: e.ink }}>
        <div className="sun" aria-hidden />
        <div className="relative mx-auto grid max-w-[1400px] items-end gap-8 px-4 py-12 md:grid-cols-[1.3fr_1fr] md:px-8 md:py-20">
          <div>
            <p className="in eyebrow">{e.kicker} · The edit</p>
            <h1 className="in font-display text-[clamp(3rem,10vw,8.5rem)] uppercase leading-[.88]" style={{ ["--d" as string]: ".1s" }}>{e.title}</h1>
            <p className="in mt-5 font-serif text-2xl italic" style={{ ["--d" as string]: ".25s" }}>{e.line}</p>
            <div className="in mt-6 flex flex-wrap items-center gap-4" style={{ ["--d" as string]: ".4s" }}><AddAll handles={e.handles} /><span className="font-bold">{ps.length} items · {money(total)}</span></div>
          </div>
          <div className="in flex items-end justify-center" style={{ ["--d" as string]: ".3s" }}>
            {ps.slice(0, 4).map((p, j) => <span key={p.handle} className="relative -mx-3 block h-44 w-1/4 md:h-72" style={{ transform: `rotate(${(j - 1.5) * 5}deg)` }}><Image src={p.cutout} alt="" fill sizes="200px" className="object-contain object-bottom drop-shadow-[6px_8px_0_rgba(0,0,0,.25)]" /></span>)}
          </div>
        </div>
      </section>
      <Divider />
      <section className="mx-auto grid max-w-[1400px] gap-10 px-4 py-14 md:grid-cols-2 md:px-8">
        <div className="space-y-4 font-serif text-2xl leading-snug">{e.story.map((s) => <p key={s}>{s}</p>)}</div>
        <ol className="space-y-3">{e.steps.map((s, j) => <li key={s} className="flex items-center gap-4 rounded-[22px] border-[3px] border-[var(--ink)] bg-white p-4"><span className="grid h-12 w-12 flex-none place-items-center rounded-full font-display text-2xl" style={{ background: e.color, color: e.ink }}>{j + 1}</span><span className="text-lg">{s}</span></li>)}</ol>
      </section>
      <section className="mx-auto max-w-[1400px] px-4 pb-16 md:px-8" aria-labelledby="inedit">
        <h2 id="inedit" className="h2">In this edit.</h2>
        <div className="mt-8 grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">{ps.map((p) => <ProductCard key={p.handle} p={p} />)}</div>
      </section>
      <Link href={`/edits/${next.slug}`} className="band block px-4 py-12 text-center md:py-16" style={{ background: next.color, color: next.ink }}>
        <span className="eyebrow block">Next edit</span><span className="font-display text-[clamp(2.4rem,7vw,5.5rem)] uppercase leading-none">{next.title} →</span>
      </Link>
    </>
  );
}
