import Image from "next/image";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import PillBar from "@/components/PillBar";
import Divider, { Ornament } from "@/components/Divider";
import ChaiTable from "@/components/ChaiTable";
import MixMatch from "@/components/MixMatch";
import Values from "@/components/Values";
import Discovery from "@/components/Discovery";
import Regions from "@/components/Regions";
import Compare from "@/components/Compare";
import BuildBox from "@/components/BuildBox";
import Newsletter from "@/components/Newsletter";
import EditBand from "@/components/EditBand";
import Favorites from "@/components/Favorites";
import MeetMaker from "@/components/MeetMaker";
import { EDITS, SITE_NAME, MAKERS } from "@/lib/site";
import { PRODUCTS, byHandle, shortTitle, money } from "@/lib/products";

const DISCOVER = [
  { t: "Start hot", d: "Indian hot sauces, from mellow to Bhut Jolokia.", href: "/shop?cat=Pantry", c: "var(--chilli)", ink: "var(--ivory)", h: "kantha-bomb-indian-hot-sauce" },
  { t: "Start crunchy", d: "Murukku, salli, bhujia, banana chips.", href: "/shop?cat=Snacks", c: "var(--peacock)", ink: "var(--ivory)", h: "andhra-spicy-murukku-classic-crunch" },
  { t: "Start sweet", d: "Mithai and treats with a twist.", href: "/shop?cat=Drinks%20%26%20treats", c: "var(--pink)", ink: "var(--ivory)", h: "indie-bites-54-5-dark-chocolate-kaju-katli" },
  { t: "Start brewing", d: "Filter coffee decoction, in a sachet.", href: "/edits/the-filter-coffee-hour", c: "var(--aubergine)", ink: "var(--ivory)", h: "easy-filter-coffee-80-20-20ml-x-35-packs-single-serve-sachet" },
];
const UGC = [
  { f: "I put my parents on", q: "Dad has been putting Kantha Bomb on his upma. I've created a monster.", c: "#F6A91E" },
  { f: "Brought it to the potluck", q: "Murukku bowl was empty before the biryani landed. Aunties asked for the link.", c: "#D6246E" },
  { f: "Explain it to my non-desi friend", q: "Gunpowder podi is basically everything-bagel seasoning for rice. She gets it now.", c: "#0E8A5F" },
];
const EVERY = ["the-original", "guntur-crisp", "kai-murukku-chakli", "peri-peri-potato-salli-90g", "easy-filter-coffee-80-20-20ml-x-35-packs-single-serve-sachet", "choco-butterscotch-barks-200g", "ghee-mysore-pak-soft", "gunpowder-idli-molaga-podi-150g-x-2-packs"];
const LABEL: Record<string, string> = { "the-original": "Hot sauce", "guntur-crisp": "Chilli crisp", "kai-murukku-chakli": "Murukku", "peri-peri-potato-salli-90g": "Namkeen", "easy-filter-coffee-80-20-20ml-x-35-packs-single-serve-sachet": "Filter coffee", "choco-butterscotch-barks-200g": "Chocolate", "ghee-mysore-pak-soft": "Mithai", "gunpowder-idli-molaga-podi-150g-x-2-packs": "Podi" };

export default function Home() {
  const [, grilled, ...rest] = EDITS;
  const words = (t: string, d0: number, g = false) => t.split(" ").map((w, i) => <span key={i} className={`word ${g ? "gold-text shimmer" : ""}`} style={{ ["--d" as string]: `${d0 + i * 0.08}s` }}>{w}&nbsp;</span>);
  return (
    <>
      {/* HERO: the signature. An arched jharokha unveils the pantry inside a turning zari-gold ring. */}
      <section className="hero" aria-labelledby="h1">
        <div className="jp jp-img hero-bg" aria-hidden />
        <div className="jp hero-veil" aria-hidden />
        <div className="sun" aria-hidden style={{ opacity: .45 }} />
        <svg className="zdraw top-3" viewBox="0 0 1400 24" preserveAspectRatio="none" aria-hidden><path d="M0 12 Q 35 0 70 12 T 140 12 T 210 12 T 280 12 T 350 12 T 420 12 T 490 12 T 560 12 T 630 12 T 700 12 T 770 12 T 840 12 T 910 12 T 980 12 T 1050 12 T 1120 12 T 1190 12 T 1260 12 T 1330 12 T 1400 12" fill="none" stroke="#E8CF8A" strokeWidth="1.5" vectorEffect="non-scaling-stroke" /></svg>
        <div className="doors" aria-hidden><span className="door" /><span className="door r" /></div>
        <div className="relative mx-auto grid max-w-[1300px] items-center gap-12 px-5 pb-16 pt-10 md:grid-cols-[1.15fr_1fr] md:px-8 md:pb-20 md:pt-14">
          <div>
            <p className="in eyebrow text-[var(--gold-2)]" style={{ ["--d" as string]: ".05s" }}>A new-wave Indian pantry</p>
            <h1 id="h1" className="h1">
              <span className="block">{words("The India your", 0.15)}</span>
              <em className="block">{words("parents' pantry", 0.4, true)}</em>
              <span className="block">{words("hasn't met yet.", 0.6)}</span>
            </h1>
            <p className="in mt-6 max-w-[40ch] text-[1.06rem] opacity-90 md:text-lg" style={{ ["--d" as string]: ".85s" }}>Hot sauces, namkeen, mithai and filter coffee from four new-wave Indian makers. One bag, one Shopify checkout.</p>
            <div className="in mt-8 flex flex-wrap gap-3" style={{ ["--d" as string]: "1s" }}>
              <Link href="/shop" className="btn btn-gold">Shop the pantry</Link>
              <Link href="/#mix-match" className="btn btn-ghost text-[var(--ivory)]">Mix &amp; match</Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[460px]">
            <div className="hero-mehrab" aria-hidden />
            <div className="arch-ring in" style={{ ["--d" as string]: ".2s" }}>
              <div className="arch arch-in hero-art aspect-[4/5]">
                <Image src="/img/shelf-mobile.webp" alt="A woven basket packed with Naagin hot sauces, VS Mani coffee, Bombay Sweet Shop sweets and Sweet Karam Coffee snacks" fill priority sizes="(max-width:768px) 90vw, 460px" className="object-cover object-[70%_60%]" />
              </div>
            </div>
            <span className="badge in-pop -left-2 top-[18%] md:-left-10" style={{ ["--d" as string]: "1.2s" }}>16 new-wave finds</span>
            <span className="badge b2 in-pop -bottom-5 -right-1 md:-right-8" style={{ ["--d" as string]: "1.35s" }}>Every item under $10</span>
          </div>
        </div>
        <Divider />
      </section>

      <PillBar />
      <Discovery />
      <Marquee bg="var(--aubergine)" color="var(--gold-2)" items={["Hot sauce with a passport", "Mithai, remixed", "The filter coffee hour", "Murukku for the table", "Four makers", "One bag"]} />

      <ChaiTable />
      <Regions />

      {/* DISCOVERY: arched doors */}
      <section aria-labelledby="disc" className="relative px-5 py-20 md:px-8 md:py-28">
        <div className="jp" aria-hidden style={{ backgroundImage: "var(--pt-jaal-peacock)", backgroundSize: "80px 80px", opacity: .07 }} />
        <div className="relative mx-auto max-w-[1300px]">
          <div className="text-center">
            <p className="eyebrow justify-center text-[var(--pink)]">Start with a discovery</p>
            <h2 id="disc" className="h2" data-rv>Pick a door. <em className="text-[var(--peacock)]">Any door.</em></h2>
            <Ornament className="mx-auto mt-4 h-4 w-28 text-[var(--gold)]" />
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {DISCOVER.map((d) => { const p = byHandle(d.h)!; return (
              <Link key={d.t} href={d.href} className="dcard !min-h-[300px] !p-4 text-center md:!min-h-[420px] md:!p-6" style={{ background: `radial-gradient(90% 60% at 50% 20%, rgba(255,255,255,.18), transparent), ${d.c}`, color: d.ink }} data-rv>
                <span className="dimg"><Image src={p.cutout} alt="" fill sizes="200px" className="object-contain object-bottom drop-shadow-[0_14px_14px_rgba(0,0,0,.35)]" /></span>
                <span className="font-display text-[1.7rem] italic leading-none md:text-4xl">{d.t}</span>
                <span className="mt-2 text-[.82rem] leading-snug opacity-85 md:text-base">{d.d}</span>
                <span className="mt-3 text-[.66rem] font-bold uppercase tracking-[.22em] text-[var(--gold-2)]">Explore →</span>
              </Link>); })}
          </div>
        </div>
      </section>

      <MixMatch />
      <Values />

      {/* Something for everyone */}
      <section aria-labelledby="sfe" className="relative bg-[var(--pink)] text-[var(--ivory)] px-5 py-20 md:px-8 md:py-24">
        <div className="jp" aria-hidden style={{ backgroundImage: "var(--pt-butti-gold)", backgroundSize: "60px 60px", opacity: .16 }} />
        <div className="relative mx-auto max-w-[1300px] text-center">
          <p className="eyebrow justify-center text-[var(--gold-2)]">The whole pantry</p>
          <h2 id="sfe" className="h2" data-rv>Something for <em className="text-[var(--marigold)]">everyone.</em></h2>
          <ul className="cut-row mt-10 justify-start lg:justify-center">
            {EVERY.map((h) => { const p = byHandle(h)!; return (
              <li key={h} className="cut"><Link href={`/products/${h}`}>
                <div className="ci"><Image src={p.cutout} alt={p.title} fill sizes="200px" className="object-contain object-bottom drop-shadow-[0_16px_16px_rgba(20,8,24,.25)]" /></div>
                <p className="mt-3 font-display text-lg italic">{LABEL[h]}</p>
              </Link></li>); })}
          </ul>
        </div>
      </section>

      <EditBand e={grilled} />
      <MeetMaker />
      <Favorites />

      {/* ROOT → SPARK → BITE */}
      <section aria-labelledby="rsb" className="band bg-[var(--aubergine)] text-[var(--ivory)]">
        <div className="jaal" aria-hidden />
        <div className="relative mx-auto max-w-[1300px] px-5 py-20 md:px-8 md:py-28">
          <p className="eyebrow text-[var(--gold-2)]">Root · Spark · Bite</p>
          <h2 id="rsb" className="h2" data-rv>Where it&apos;s from. Who made it. <em className="gold-text">How you eat it.</em></h2>
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { k: "Root", t: "The Kanthari chilli", d: "Kantha Bomb is built on the Kanthari, which Naagin calls “the tastiest chilli you've probably never tried.”", c: "var(--peacock)" },
              { k: "Spark", t: "Naagin bottles it", d: "Naagin Sauce turns regional Indian chillies into hot sauces made for Indian taste buds.", c: "var(--pink)" },
              { k: "Bite", t: "Your grilled cheese", d: "Drizzle it on a grilled cheese, eggs or pizza. Start small, then go big.", c: "var(--chilli)" },
            ].map((s, i) => (
              <li key={s.k} className="rounded-[999px_999px_22px_22px] px-6 pb-8 pt-14 text-center shadow-[inset_0_0_0_1px_rgba(232,207,138,.55)]" style={{ background: s.c }} data-rv>
                <span className="font-display text-sm uppercase tracking-[.3em] text-[var(--gold-2)]">{["I", "II", "III"][i]}</span>
                <span className="mt-2 block font-display text-6xl italic leading-none">{s.k}</span>
                <h3 className="mt-4 text-[.72rem] font-bold uppercase tracking-[.2em]">{s.t}</h3>
                <p className="mx-auto mt-2 max-w-[30ch] opacity-90">{s.d}</p>
              </li>))}
          </ol>
          <Link href="/products/kantha-bomb-indian-hot-sauce" className="btn btn-gold mt-10">Meet Kantha Bomb · {money(byHandle("kantha-bomb-indian-hot-sauce")!.price)}</Link>
        </div>
      </section>

      <BuildBox />

      {/* MORE EDITS: sticky stacked cards */}
      <section aria-labelledby="more" className="bg-[var(--ivory)] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1100px]">
          <p className="eyebrow text-[var(--peacock)]">How to enjoy it</p>
          <h2 id="more" className="h2" data-rv>Edits for every <em className="text-[var(--pink)]">occasion.</em></h2>
          <div className="mt-12 space-y-6">
            {rest.map((e, i) => (
              <Link key={e.slug} href={`/edits/${e.slug}`} className="stk relative block overflow-hidden rounded-[30px] p-6 shadow-[0_30px_60px_-34px_rgba(27,20,32,.55)] md:p-10" style={{ background: e.color, color: e.ink, top: `${96 + i * 16}px`, boxShadow: "inset 0 0 0 1px rgba(232,207,138,.55), 0 30px 60px -34px rgba(27,20,32,.55)" }}>
                <div className="grid items-center gap-6 md:grid-cols-[1.4fr_1fr]">
                  <div>
                    <p className="eyebrow">{e.kicker}</p>
                    <h3 className="font-display text-[2.6rem] leading-[.95] tracking-[-.03em] md:text-6xl">{e.title}</h3>
                    <p className="mt-3 font-serif text-lg md:text-xl">{e.line}</p>
                    <span className="mt-5 inline-block text-[.72rem] font-bold uppercase tracking-[.2em]">Open the edit →</span>
                  </div>
                  <div className="flex items-end justify-center gap-1">
                    {e.handles.slice(0, 3).map((h, j) => { const p = byHandle(h)!; return <span key={h} className="relative block h-32 w-1/3 md:h-48" style={{ transform: `translateY(${j === 1 ? -10 : 0}px)` }}><Image src={p.cutout} alt={shortTitle(p.title)} fill sizes="160px" className="object-contain object-bottom drop-shadow-[0_14px_12px_rgba(0,0,0,.3)]" /></span>; })}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Compare name={SITE_NAME} />

      {/* UGC (sample) */}
      <section aria-labelledby="ugc" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1300px]">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="eyebrow text-[var(--pink)]">From the group chat</p>
              <h2 id="ugc" className="h2" data-rv>Overheard.</h2>
            </div>
            <span className="demo-tag">Sample content · not real customers</span>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {UGC.map((u) => (
              <figure key={u.f} className="ugc" style={{ background: u.c, color: u.c === "#F6A91E" ? "var(--ink)" : "var(--ivory)" }} data-rv>
                <span className="demo-tag">Sample</span>
                <figcaption className="mt-4 font-display text-2xl italic leading-tight">&ldquo;{u.f}&rdquo;</figcaption>
                <blockquote className="mt-3 text-[1.02rem]">{u.q}</blockquote>
                <p className="mt-4 text-[.68rem] font-bold uppercase tracking-[.2em] opacity-70">Demo post</p>
              </figure>))}
          </div>
        </div>
      </section>

      <Marquee bg="var(--peacock)" color="var(--gold-2)" items={MAKERS.map((m) => m.name).concat(["Prices from the live store", `${PRODUCTS.length} products`])} />
      <Newsletter />
    </>
  );
}
