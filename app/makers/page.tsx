import Image from "next/image";
import PageHead from "@/components/PageHead";
import ProductCard from "@/components/ProductCard";
import Divider from "@/components/Divider";
import { MAKERS } from "@/lib/site";
import { PRODUCTS } from "@/lib/products";
export const metadata = { title: "Makers" };
export default function Makers() {
  return (<>
    <PageHead k="The makers" t={<>Four brands. <em>Zero boring.</em></>} d="Every product here comes from one of four contemporary Indian makers. Their lines below are quoted from their own sites." bg="var(--parrot)" />
    {MAKERS.map((m, i) => { const ps = PRODUCTS.filter((p) => p.vendor === m.name); return (
      <section key={m.slug} id={m.slug} className="scroll-mt-28" aria-labelledby={`m-${m.slug}`}>
        <Divider a={i % 2 ? "#FFC21A" : "#FF2E8A"} b={i % 2 ? "#1F4BFF" : "#2DB84B"} />
        <div style={{ background: m.color, color: m.ink }}>
          <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-4 py-14 md:grid-cols-[1fr_1.2fr] md:px-8 md:py-20">
            <div>
              <div className="inline-block rounded-2xl border border-[var(--line)] bg-white p-4"><Image src={m.logo} alt={`${m.name} logo`} width={240} height={120} className="h-16 w-auto object-contain md:h-20" /></div>
              <h2 id={`m-${m.slug}`} className="h2 mt-5" data-rv>{m.name}</h2>
              <blockquote className="mt-4 font-serif text-2xl italic md:text-3xl">“{m.quote}”</blockquote>
              <p className="mt-1 text-sm font-bold uppercase tracking-wider opacity-85">— {m.source}</p>
              <p className="mt-4 max-w-[48ch] text-lg">{m.blurb}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-[var(--ink)] md:gap-4">{ps.slice(0, 4).map((p) => <ProductCard key={p.handle} p={p} />)}</div>
          </div>
          {ps.length > 4 && <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-3 px-4 pb-14 text-[var(--ink)] md:grid-cols-4 md:px-8">{ps.slice(4).map((p) => <ProductCard key={p.handle} p={p} />)}</div>}
        </div>
      </section>); })}
  </>);
}
