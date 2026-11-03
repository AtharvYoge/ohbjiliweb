import Link from "next/link";
import { SITE_NAME, MAKERS, EDITS } from "@/lib/site";
import Divider from "./Divider";
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--ink)] text-[var(--cream)]">
      <div className="jp" aria-hidden style={{ backgroundImage: "var(--pt-jaal-gold)", backgroundSize: "80px 80px", opacity: .07 }} />
      <div className="jp" aria-hidden style={{ top: "auto", height: 220, backgroundImage: "var(--pt-peacock-gold)", backgroundSize: "140px 100px", backgroundRepeat: "repeat-x", backgroundPosition: "bottom", opacity: .12 }} />
      <Divider a="#FF2E8A" b="#FFC21A" c="#1A0B12" />
      <span className="jp-band" aria-hidden style={{ opacity: .55 }} />
      <div className="relative mx-auto grid max-w-[1400px] gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-1">
          <p className="font-display text-4xl uppercase leading-none text-[var(--marigold)]">⚡ {SITE_NAME}</p>
          <p className="mt-3 font-serif text-lg italic">The India your parents' pantry hasn't met yet.</p>
        </div>
        <nav aria-label="Shop"><h3 className="fhead">Shop</h3><ul className="space-y-2"><li><Link href="/shop">All products</Link></li><li><Link href="/#build-box">Build a box</Link></li><li><Link href="/search">Search</Link></li></ul></nav>
        <nav aria-label="Edits"><h3 className="fhead">Edits</h3><ul className="space-y-2">{EDITS.slice(0, 5).map((e) => <li key={e.slug}><Link href={`/edits/${e.slug}`}>{e.title}</Link></li>)}</ul></nav>
        <nav aria-label="Makers"><h3 className="fhead">Makers</h3><ul className="space-y-2">{MAKERS.map((m) => <li key={m.slug}><Link href={`/makers#${m.slug}`}>{m.name}</Link></li>)}<li><Link href="/discover-india">Discover India</Link></li></ul></nav>
      </div>
      <p className="relative border-t border-white/15 px-4 py-5 text-center text-xs opacity-70">© {new Date().getFullYear()} {SITE_NAME}. Investor demo. Product names and images belong to their brands. Checkout runs on Shopify.</p>
    </footer>
  );
}
