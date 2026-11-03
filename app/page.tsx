import Image from "next/image";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import PillBar from "@/components/PillBar";
import Divider from "@/components/Divider";
import Values from "@/components/Values";
import Compare from "@/components/Compare";
import BuildBox from "@/components/BuildBox";
import Newsletter from "@/components/Newsletter";
import EditBand from "@/components/EditBand";
import Favorites from "@/components/Favorites";
import MeetMaker from "@/components/MeetMaker";
import { EDITS, SITE_NAME, MAKERS } from "@/lib/site";
import { PRODUCTS, byHandle, shortTitle, money } from "@/lib/products";

const DISCOVER = [
  { t: "Start hot", d: "Indian hot sauces, from mellow to Bhut Jolokia.", href: "/shop?cat=Pantry", c: "var(--chilli)", ink: "#fff", h: "kantha-bomb-indian-hot-sauce" },
  { t: "Start crunchy", d: "Murukku, salli, bhujia, banana chips.", href: "/shop?cat=Snacks", c: "var(--marigold)", ink: "var(--ink)", h: "andhra-spicy-murukku-classic-crunch" },
  { t: "Start sweet", d: "Mithai and treats with a twist.", href: "/shop?cat=Drinks%20%26%20treats", c: "var(--parrot)", ink: "#fff", h: "indie-bites-54-5-dark-chocolate-kaju-katli" },
  { t: "Start brewing", d: "Filter coffee decoction, in a sachet.", href: "/edits/the-filter-coffee-hour", c: "var(--blue)", ink: "#fff", h: "easy-filter-coffee-80-20-20ml-x-35-packs-single-serve-sachet" },
];
const UGC = [
  { f: "I put my parents on", q: "Dad has been putting Kantha Bomb on his upma. I've created a monster.", c: "var(--marigold)" },
  { f: "Brought it to the potluck", q: "Murukku bowl was empty before the biryani landed. Aunties asked for the link.", c: "var(--pink)" },
  { f: "Explain it to my non-desi friend", q: "Gunpowder podi is basically everything-bagel seasoning for rice. She gets it now.", c: "var(--parrot)" },
];
const EVERY = ["the-original", "guntur-crisp", "kai-murukku-chakli", "peri-peri-potato-salli-90g", "easy-filter-coffee-80-20-20ml-x-35-packs-single-serve-sachet", "choco-butterscotch-barks-200g", "ghee-mysore-pak-soft", "gunpowder-idli-molaga-podi-150g-x-2-packs"];
const LABEL: Record<string, string> = { "the-original": "Hot sauce", "guntur-crisp": "Chilli crisp", "kai-murukku-chakli": "Murukku", "peri-peri-potato-salli-90g": "Namkeen", "easy-filter-coffee-80-20-20ml-x-35-packs-single-serve-sachet": "Filter coffee", "choco-butterscotch-barks-200g": "Chocolate", "ghee-mysore-pak-soft": "Mithai", "gunpowder-idli-molaga-podi-150g-x-2-packs": "Podi" };

export default function Home() {
  const [chai, grilled, filter, ...rest] = EDITS;
  return (
    <>
      {/* 01 HERO */}
      <section className="hero" aria-labelledby="h1">
        <div className="sun" aria-hidden />
        <div className="relative mx-auto grid max-w-[1400px] items-center gap-10 px-4 pb-14 pt-10 md:grid-cols-[1.15fr_1fr] md:px-8 md:pb-16 md:pt-10">
          <div>
            <p className="in eyebrow text-[var(--marigold)]" style={{ ["--d" as string]: ".05s" }}>⚡ New-wave Indian pantry</p>
            <h1 id="h1" className="h1">
              <span className="in block" style={{ ["--d" as string]: ".15s" }}>The India</span>
              <span className="in block" style={{ ["--d" as string]: ".3s" }}>your <br className="hidden md:block" /><em>parents&apos;&nbsp;pantry</em></span>
              <span className="in block" style={{ ["--d" as string]: ".45s" }}>hasn&apos;t met yet.</span>
            </h1>
            <p className="in mt-5 max-w-[38ch] text-lg md:text-xl" style={{ ["--d" as string]: ".6s" }}>Hot sauces, namkeen, mithai and filter coffee from four new-wave Indian makers. One bag, Shopify checkout.</p>
            <div className="in mt-7 flex flex-wrap gap-3" style={{ ["--d" as string]: ".75s" }}>
              <Link href="/shop" className="btn">Shop the pantry →</Link>
              <Link href="/#build-box" className="btn btn-ghost !border-white text-white">Build a box</Link>
            </div>
          </div>
          <div className="in relative" style={{ ["--d" as string]: ".35s" }}>
            <div className="hero-art">
              <Image src="/img/shelf-mobile.webp" alt="A woven basket packed with Naagin hot sauces, VS Mani coffee, Bombay Sweet Shop sweets and Sweet Karam Coffee snacks" width={1200} height={1400} priority sizes="100vw" className="block aspect-[5/4] h-auto w-full object-cover object-[70%_60%] md:hidden" />
              <Image src="/img/shelf-desktop.webp" alt="A woven basket packed with Naagin hot sauces, VS Mani coffee, Bombay Sweet Shop sweets and Sweet Karam Coffee snacks" width={2400} height={1000} priority sizes="50vw" className="hidden aspect-[5/4] h-auto w-full object-cover object-[80%_50%] md:block" />
            </div>
            <span className="badge in-pop -left-3 -top-5 md:-left-8" style={{ ["--d" as string]: ".9s" }}>16 new-wave finds</span>
            <span className="badge b2 in-pop -bottom-6 right-3" style={{ ["--d" as string]: "1.05s" }}>Every item under $10</span>
          </div>
        </div>
      </section>
      <PillBar />
      <div className="relative overflow-hidden pb-4 pt-2">
        <Marquee bg="var(--marigold)" color="var(--ink)" tilt={-1.5} items={["Hot sauce with a passport", "Mithai, remixed", "Filter coffee hour", "Murukku > chips", "4 makers", "1 bag"]} />
        <Marquee bg="var(--ink)" color="var(--cream)" tilt={1} reverse items={["Naagin Sauce", "Bombay Sweet Shop", "VS Mani & Co.", "Sweet Karam Coffee"]} />
      </div>

      {/* 02 DISCOVERY */}
      <section aria-labelledby="disc" className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <p className="eyebrow text-[var(--pink)]">02 · Start with a discovery</p>
          <h2 id="disc" className="h2" data-rv>Pick a door. <span className="font-serif normal-case italic text-[var(--blue)]">Any door.</span></h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DISCOVER.map((d, i) => { const p = byHandle(d.h)!; return (
              <Link key={d.t} href={d.href} className="dcard" style={{ background: d.c, color: d.ink, transform: `rotate(${i % 2 ? 1 : -1}deg)` }} data-rv>
                <span className="relative z-[1] font-display text-5xl uppercase leading-none">{d.t}</span>
                <span className="relative z-[1] mt-2 max-w-[60%] text-lg">{d.d}</span>
                <span className="mt-4 text-sm font-black uppercase tracking-wider">Explore →</span>
                <span className="dimg"><Image src={p.cutout} alt="" fill sizes="200px" className="object-contain object-bottom" /></span>
              </Link>); })}
          </div>
        </div>
      </section>

      {/* 03 THE NEW CHAI TABLE */}
      <Divider a="#FF2E8A" b="#2DB84B" />
      <EditBand e={chai} big />
      <Values />

      {/* Something for everyone */}
      <section aria-labelledby="sfe" className="bg-[var(--cream)] px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1400px] text-center">
          <h2 id="sfe" className="h2" data-rv>Something for <span className="font-serif normal-case italic text-[var(--chilli)]">everyone.</span></h2>
          <ul className="cut-row mt-8 justify-start lg:justify-center">
            {EVERY.map((h) => { const p = byHandle(h)!; return (
              <li key={h} className="cut"><Link href={`/products/${h}`}>
                <div className="ci"><Image src={p.cutout} alt={p.title} fill sizes="200px" className="object-contain object-bottom" /></div>
                <p className="mt-3 inline-block rounded-full border-2 border-[var(--ink)] bg-white px-3 py-1 font-display text-lg uppercase">{LABEL[h]}</p>
              </Link></li>); })}
          </ul>
        </div>
      </section>

      <EditBand e={grilled} />
      <MeetMaker />
      <Favorites />

      {/* 06 ROOT SPARK BITE */}
      <section aria-labelledby="rsb" className="band bg-[var(--maroon)] text-[var(--cream)]">
        <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
          <p className="eyebrow text-[var(--marigold)]">06 · Root → Spark → Bite</p>
          <h2 id="rsb" className="h2" data-rv>Where it&apos;s from. <br className="hidden md:block" />Who made it. <span className="text-[var(--marigold)]">How you eat it.</span></h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { k: "Root", t: "The Kanthari chilli", d: "Kantha Bomb is built on the Kanthari, which Naagin calls “the tastiest chilli you've probably never tried.”", c: "var(--parrot)" },
              { k: "Spark", t: "Naagin bottles it", d: "Naagin Sauce turns regional Indian chillies into hot sauces made for Indian taste buds.", c: "var(--pink)" },
              { k: "Bite", t: "Your grilled cheese", d: "Drizzle it on a grilled cheese, eggs or pizza. Start small, then go big.", c: "var(--marigold)" },
            ].map((s, i) => (
              <li key={s.k} className="rounded-[26px] border-[3px] border-[var(--cream)] p-6" style={{ background: s.c, color: "var(--ink)" }} data-rv>
                <span className="font-display text-7xl uppercase leading-none md:text-8xl">{i + 1}. {s.k}</span>
                <h3 className="mt-3 font-serif text-2xl font-bold italic">{s.t}</h3>
                <p className="mt-2 text-lg">{s.d}</p>
              </li>))}
          </ol>
          <Link href="/products/kantha-bomb-indian-hot-sauce" className="btn mt-8">Meet Kantha Bomb · {money(byHandle("kantha-bomb-indian-hot-sauce")!.price)}</Link>
        </div>
      </section>

      <EditBand e={filter} />
      <BuildBox />

      {/* MORE EDITS: sticky stacked cards */}
      <section aria-labelledby="more" className="bg-[var(--cream)] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <p className="eyebrow text-[var(--blue)]">07 · How to enjoy it</p>
          <h2 id="more" className="h2" data-rv>Edits for every <span className="font-serif normal-case italic text-[var(--pink)]">occasion.</span></h2>
          <div className="mt-10 space-y-6">
            {rest.map((e, i) => (
              <Link key={e.slug} href={`/edits/${e.slug}`} className="stk block rounded-[30px] border-[3px] border-[var(--ink)] p-6 shadow-[8px_8px_0_var(--ink)] md:p-10" style={{ background: e.color, color: e.ink, top: `${110 + i * 18}px` }}>
                <div className="grid items-center gap-6 md:grid-cols-[1.4fr_1fr]">
                  <div>
                    <p className="eyebrow">{e.kicker}</p>
                    <h3 className="font-display text-5xl uppercase leading-[.9] md:text-7xl">{e.title}</h3>
                    <p className="mt-3 font-serif text-xl italic">{e.line}</p>
                    <span className="btn mt-5">Open the edit →</span>
                  </div>
                  <div className="flex items-end justify-center gap-1">
                    {e.handles.slice(0, 3).map((h, j) => { const p = byHandle(h)!; return <span key={h} className="relative block h-36 w-1/3 md:h-52" style={{ transform: `rotate(${(j - 1) * 6}deg)` }}><Image src={p.cutout} alt={shortTitle(p.title)} fill sizes="160px" className="object-contain object-bottom" /></span>; })}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Compare name={SITE_NAME} />

      {/* UGC */}
      <section aria-labelledby="ugc" className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="eyebrow text-[var(--parrot)]">From the group chat</p>
              <h2 id="ugc" className="h2" data-rv>Overheard.</h2>
            </div>
            <span className="demo-tag">Sample content · not real customers</span>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {UGC.map((u, i) => (
              <figure key={u.f} className="ugc" style={{ background: u.c, transform: `rotate(${(i - 1) * 1.2}deg)` }} data-rv>
                <span className="demo-tag">Sample</span>
                <figcaption className="mt-3 font-display text-3xl uppercase leading-none">“{u.f}”</figcaption>
                <blockquote className="mt-3 font-serif text-xl italic">{u.q}</blockquote>
                <p className="mt-4 text-sm font-bold">— Demo post</p>
              </figure>))}
          </div>
        </div>
      </section>

      <Marquee bg="var(--chilli)" color="#fff" items={MAKERS.map((m) => m.name).concat(["Prices from the live store", `${PRODUCTS.length} products`])} />
      <Newsletter />
    </>
  );
}
