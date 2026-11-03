import { notFound } from "next/navigation";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import AddToCart, { StickyBuy } from "@/components/AddToCart";
import ProductCard from "@/components/ProductCard";
import Marquee from "@/components/Marquee";
import { PRODUCTS, byHandle, money, shortTitle, inkOn } from "@/lib/products";
import { EDITS, HOW_TO, MAKERS } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() { return PRODUCTS.map((p) => ({ handle: p.handle })); }
export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }) { const p = byHandle((await params).handle); return { title: p ? shortTitle(p.title) : "Not found" }; }

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const p = byHandle((await params).handle);
  if (!p) notFound();
  const maker = MAKERS.find((m) => m.name === p.vendor);
  const edits = EDITS.filter((e) => e.handles.includes(p.handle));
  const related = [...PRODUCTS.filter((x) => x.handle !== p.handle && x.vendor === p.vendor), ...PRODUCTS.filter((x) => x.handle !== p.handle && x.vendor !== p.vendor && x.category === p.category)].slice(0, 4);
  const ink = inkOn(p.color);
  return (
    <>
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[1400px] px-4 pt-6 text-sm font-bold md:px-8"><Link href="/shop" className="underline">Shop</Link> / <Link href={`/shop?cat=${encodeURIComponent(p.category)}`} className="underline">{p.category}</Link> / {shortTitle(p.title)}</nav>
      <section className="mx-auto grid max-w-[1400px] gap-10 px-4 py-8 md:grid-cols-2 md:px-8 md:py-12">
        <div className="in min-w-0"><Gallery imgs={p.images} color={p.color} cutout={p.cutout} title={p.title} /></div>
        <div className="in min-w-0" style={{ ["--d" as string]: ".15s" }}>
          <Link href={`/makers#${maker?.slug}`} className="inline-block rounded-full border-2 border-[var(--ink)] px-3 py-1 text-sm font-black uppercase tracking-wider" style={{ background: maker?.color, color: maker?.ink }}>{p.vendor}</Link>
          <h1 className="mt-4 font-display text-[clamp(2.6rem,6vw,5rem)] uppercase leading-[.92]">{p.title}</h1>
          <p className="mt-3 font-display text-4xl">{money(p.price)}</p>
          <div className="mt-6"><AddToCart handle={p.handle} label={money(p.price)} /></div>
          <div className="prose-b mt-8 text-lg" dangerouslySetInnerHTML={{ __html: p.descriptionHtml }} />
          <p className="mt-2 text-xs opacity-60">Description from the store listing.</p>
          <ul className="mt-6 flex flex-wrap gap-2">{p.tags.filter((t) => t !== "Oh Bijli Market").map((t) => <li key={t} className="pill !bg-white">{t}</li>)}</ul>
        </div>
      </section>
      <Marquee bg={p.color} color={ink} items={[shortTitle(p.title), p.vendor, p.category, money(p.price)]} />
      <section className="bg-[var(--marigold)] px-4 py-14 md:px-8 md:py-20" aria-labelledby="hte">
        <div className="mx-auto max-w-[1400px]">
          <p className="eyebrow">Ideas, not rules</p>
          <h2 id="hte" className="h2">How to enjoy it.</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">{HOW_TO[p.category].map((h, i) => <li key={h} className="rounded-[24px] border-[3px] border-[var(--ink)] bg-[var(--cream)] p-6"><span className="font-display text-6xl text-[var(--pink)]">0{i + 1}</span><p className="mt-2 font-serif text-xl">{h}</p></li>)}</ol>
          {edits.length > 0 && <p className="mt-8 text-lg font-bold">Featured in: {edits.map((e, i) => <span key={e.slug}>{i ? " · " : ""}<Link className="underline" href={`/edits/${e.slug}`}>{e.title}</Link></span>)}</p>}
        </div>
      </section>
      <section className="px-4 py-14 md:px-8 md:py-20" aria-labelledby="rel">
        <div className="mx-auto max-w-[1400px]">
          <h2 id="rel" className="h2">Goes with.</h2>
          <div className="mt-8 grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">{related.map((r) => <ProductCard key={r.handle} p={r} />)}</div>
        </div>
      </section>
      <div className="h-20 md:hidden" aria-hidden />
      <StickyBuy handle={p.handle} title={shortTitle(p.title)} price={money(p.price)} />
    </>
  );
}
