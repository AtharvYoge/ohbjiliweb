"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AI from "@/lib/aiImages.json";
import { useCart } from "./cart";
import { byHandle, shortTitle, money } from "@/lib/products";

const L = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
const DISH: Record<string, React.ReactNode> = {
  nachos: <svg viewBox="0 0 64 64" aria-hidden><path {...L} d="M8 46h48l-4 8H12Z"/><path {...L} d="m14 46 8-22 8 22M26 46l10-26 10 26M40 46l7-18 7 18"/><circle cx="34" cy="38" r="2" fill="currentColor"/><circle cx="22" cy="40" r="1.6" fill="currentColor"/></svg>,
  tacos: <svg viewBox="0 0 64 64" aria-hidden><path {...L} d="M8 44a24 24 0 0 1 48 0Z"/><path {...L} d="M14 40c4-6 8-4 12-8s8 0 12-4 8 2 12 8"/><circle cx="24" cy="34" r="1.6" fill="currentColor"/><circle cx="38" cy="30" r="1.6" fill="currentColor"/></svg>,
  grilled: <svg viewBox="0 0 64 64" aria-hidden><path {...L} d="M10 30c0-10 8-16 22-16s22 6 22 16v20H10Z"/><path {...L} d="M10 36h44"/><path {...L} d="M18 36v6a3 3 0 0 0 6 0v-6M34 36v8a3 3 0 0 0 6 0v-8"/></svg>,
  ramen: <svg viewBox="0 0 64 64" aria-hidden><path {...L} d="M8 32h48a24 24 0 0 1-48 0Z"/><path {...L} d="M14 28c4-4 8 4 12 0s8 4 12 0 8 4 12 0"/><path {...L} d="m40 6-6 22M48 8l-9 20"/><circle {...L} cx="22" cy="42" r="4"/></svg>,
  pizza: <svg viewBox="0 0 64 64" aria-hidden><path {...L} d="M32 56 8 14c14-8 34-8 48 0Z"/><path {...L} d="M10 20c14-7 30-7 44 0"/><circle {...L} cx="30" cy="28" r="3"/><circle {...L} cx="38" cy="36" r="2.5"/><circle {...L} cx="28" cy="42" r="2"/></svg>,
  affogato: <svg viewBox="0 0 64 64" aria-hidden><path {...L} d="M14 28h36l-5 26H19Z"/><circle {...L} cx="32" cy="22" r="9"/><path {...L} d="M40 4c-3 4 3 6 0 10M48 6c-3 4 3 6 0 10"/><path {...L} d="M16 38h32"/></svg>,
  popcorn: <svg viewBox="0 0 64 64" aria-hidden><path {...L} d="M14 26h36l-5 32H19Z"/><path {...L} d="M24 26l2 32M40 26l-2 32"/><path {...L} d="M14 26a6 6 0 0 1 6-10 7 7 0 0 1 12-4 7 7 0 0 1 12 4 6 6 0 0 1 6 10"/></svg>,
  icecream: <svg viewBox="0 0 64 64" aria-hidden><path {...L} d="m20 30 12 28 12-28"/><path {...L} d="M18 30a14 14 0 1 1 28 0Z"/><path {...L} d="m24 38 14 0M27 46h10"/><circle cx="28" cy="20" r="1.6" fill="currentColor"/><circle cx="36" cy="24" r="1.6" fill="currentColor"/></svg>,
  toast: <svg viewBox="0 0 64 64" aria-hidden><path {...L} d="M14 54V26a10 10 0 0 1 4-18h28a10 10 0 0 1 4 18v28Z"/><path {...L} d="M22 30c4 4 16 4 20 0"/><circle cx="26" cy="40" r="1.4" fill="currentColor"/><circle cx="34" cy="44" r="1.4" fill="currentColor"/><circle cx="40" cy="38" r="1.4" fill="currentColor"/></svg>,
};
const PHOTO: Record<string, string> = { nachos: "nachos", tacos: "tacos", grilled: "grilled-cheese", ramen: "ramen", pizza: "pizza", affogato: "affogato", popcorn: "popcorn", icecream: "ice-cream", toast: "avocado-toast" };
const hasPhoto = (icon: string) => (AI as string[]).includes(`mm-${PHOTO[icon]}`);
const MS = 4000;
type Pair = { dish: string; icon: keyof typeof DISH; from: string; tile: string; handles: string[]; tip: string };
// Serving ideas only. Every product here is one of the 16 real store products.
const PAIRS: Pair[] = [
  { dish: "Nachos", icon: "nachos", from: "Game night", tile: "#E0401F", handles: ["the-original"], tip: "Shake hot sauce over loaded nachos right before they hit the table." },
  { dish: "Tacos", icon: "tacos", from: "Taco Tuesday", tile: "#0E8A5F", handles: ["smoky-bhoot"], tip: "A few drops per taco. It's built on Bhut Jolokia, so start small." },
  { dish: "Grilled cheese", icon: "grilled", from: "Lazy lunch", tile: "#E8820F", handles: ["kantha-bomb-indian-hot-sauce"], tip: "Drizzle inside before it goes in the pan, or dunk every bite." },
  { dish: "Ramen", icon: "ramen", from: "Late-night bowl", tile: "#00697A", handles: ["guntur-crisp"], tip: "Spoon the crunchy bits over the top of the bowl, oil and all." },
  { dish: "Pizza", icon: "pizza", from: "Friday night", tile: "#D6246E", handles: ["guntur-crisp", "the-original"], tip: "Chilli crisp on the crust, hot sauce on the slice." },
  { dish: "Affogato", icon: "affogato", from: "After dinner", tile: "#3A0F4F", handles: ["easy-filter-coffee-80-20-20ml-x-35-packs-single-serve-sachet"], tip: "Pour hot filter-coffee decoction over a scoop of vanilla." },
  { dish: "Popcorn", icon: "popcorn", from: "Movie night", tile: "#1F3FA0", handles: ["chilli-cheese-bhujia-90g", "peri-peri-potato-salli-90g"], tip: "Toss a handful of each through a big bowl of popcorn." },
  { dish: "Ice cream", icon: "icecream", from: "Dessert", tile: "#7A1240", handles: ["choco-butterscotch-barks-200g"], tip: "Break a bark over a scoop for a crunchy topping." },
  { dish: "Avocado toast", icon: "toast", from: "Brunch", tile: "#0E8A5F", handles: ["gunpowder-idli-molaga-podi-150g-x-2-packs"], tip: "Dust the podi over buttered or avocado toast." },
];

export default function MixMatch() {
  const { addMany } = useCart();
  const pairs = PAIRS.map((p) => ({ ...p, items: p.handles.map((h) => byHandle(h)).filter(Boolean) as NonNullable<ReturnType<typeof byHandle>>[] })).filter((p) => p.items.length);
  const [i, setI] = useState(0);
  const [added, setAdded] = useState(false);
  const x0 = useRef<number | null>(null);
  const reel = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const [touch, setTouch] = useState(false);
  const [reduced, setReduced] = useState(true);
  const [dir, setDir] = useState(1);
  const touchT = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => { const m = matchMedia("(prefers-reduced-motion: reduce)"); setReduced(m.matches); const f = () => setReduced(m.matches); m.addEventListener("change", f); return () => m.removeEventListener("change", f); }, []);
  const paused = reduced || hover || focus || touch;
  const go = (n: number, d = n > i ? 1 : -1) => {
    const k = (n + pairs.length) % pairs.length; setDir(d); setI(k); setAdded(false);
    const r = reel.current, el = r?.children[k] as HTMLElement | undefined;
    if (r && el) r.scrollTo({ left: el.offsetLeft - (r.clientWidth - el.clientWidth) / 2, behavior: reduced ? "auto" : "smooth" });
  };
  useEffect(() => { if (paused) return; const t = setTimeout(() => go(i + 1, 1), MS); return () => clearTimeout(t); });
  const holdTouch = () => { setTouch(true); clearTimeout(touchT.current); touchT.current = setTimeout(() => setTouch(false), 6000); };
  const p = pairs[i];
  const total = p.items.reduce((a, it) => a + Number(it.price), 0);
  return (
    <section id="mix-match" aria-labelledby="mm" className="relative overflow-hidden bg-[var(--peacock)] py-20 text-[var(--ivory)] md:py-28">
      <picture className="jp"><source media="(min-width:768px)" srcSet="/bg/peacock-fresco-wide-1280.webp" /><img src="/bg/peacock-fresco-wide-720.webp" alt="" className="h-full w-full object-cover opacity-25 mix-blend-luminosity" loading="lazy" decoding="async" /></picture>
      <div className="jp" aria-hidden style={{ background: "linear-gradient(180deg,rgba(0,105,122,.55),rgba(0,105,122,.85))" }} />
      <div className="relative mx-auto max-w-[1200px]">
        <div className="px-5 md:px-8">
          <p className="eyebrow text-[var(--gold-2)]">Mix &amp; match your favourites</p>
          <h2 id="mm" className="h2" data-rv>Your favourite dish, <em className="gold-text">plus a little Bijli.</em></h2>
          <p className="mt-3 max-w-[48ch] opacity-85">Pick a dish you already love. We&apos;ll match it with something from the pantry. Serving ideas only, no rules.</p>
        </div>
        <div ref={reel} className="mm-reel mt-8" role="tablist" aria-label="Pick a dish">
          {pairs.map((d, k) => (
            <button key={d.dish} role="tab" aria-selected={k === i} aria-controls="mm-panel" className="dish" onClick={() => go(k)}>
              {DISH[d.icon]}<span>{d.dish}</span>
            </button>
          ))}
        </div>
        <div className="px-5 md:px-8" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onFocusCapture={() => setFocus(true)} onBlurCapture={() => setFocus(false)} onTouchStartCapture={holdTouch}>
          <div id="mm-panel" aria-roledescription="carousel" role="tabpanel" aria-live={paused ? "polite" : "off"} className="mm-card mt-4"
            onTouchStart={(e) => (x0.current = e.touches[0].clientX)}
            onTouchEnd={(e) => { if (x0.current == null) return; const dx = e.changedTouches[0].clientX - x0.current; x0.current = null; if (Math.abs(dx) > 50) go(i + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1); }}>
            <div key={p.dish} className={`mm-swap ${dir < 0 ? "back" : ""} grid md:grid-cols-[1fr_auto_1fr] md:items-stretch`}>
              <div className="relative flex min-h-[220px] flex-col items-center justify-center gap-3 p-6 text-[var(--ivory)] md:min-h-[360px]" style={{ background: `radial-gradient(90% 80% at 50% 30%, ${p.tile}dd, ${p.tile})` }}>
                {hasPhoto(p.icon) && (<>
                  <Image src={`/ai/mm-${PHOTO[p.icon]}.webp`} alt={`${p.dish}, a serving idea`} fill sizes="(max-width:768px) 100vw, 45vw" className="object-cover" />
                  <span className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 35%, ${p.tile}f2)` }} aria-hidden />
                </>)}
                <span className="relative text-[.68rem] font-bold uppercase tracking-[.22em] text-[var(--gold-2)]">{p.from}</span>
                {!hasPhoto(p.icon) && <span className="block h-24 w-24 text-[var(--gold-2)] md:h-32 md:w-32">{DISH[p.icon]}</span>}
                <span className={`relative font-display text-4xl font-extrabold leading-none tracking-[-.03em] md:text-5xl ${hasPhoto(p.icon) ? "mt-24 md:mt-40" : ""}`}>{p.dish}</span>
              </div>
              <div className="grid place-items-center py-2 md:px-4"><span className="times" aria-hidden>×</span><span className="sr-only">paired with</span></div>
              <div className="flex flex-col p-5 pt-0 md:p-8">
                <div className="flex justify-center gap-3">
                  {p.items.map((it) => (
                    <Link key={it.handle} href={`/products/${it.handle}`} className="w-[46%] max-w-[180px] text-center">
                      <span className="pimg block !aspect-[4/5]" style={{ background: it.color }}>
                        <Image src={it.cutout} alt={it.title} fill sizes="180px" className="object-contain p-4 drop-shadow-[0_14px_14px_rgba(0,0,0,.35)]" />
                      </span>
                      <span className="mt-2 block font-display text-[1.05rem] leading-tight">{shortTitle(it.title)}</span>
                      <span className="text-sm italic opacity-70">{money(it.price)}</span>
                    </Link>
                  ))}
                </div>
                <p className="mt-5 text-center text-lg font-medium leading-snug md:text-xl">&ldquo;{p.tip}&rdquo;</p>
                <div className="mt-6 flex items-center justify-between gap-3">
                  <button className="iconbtn border border-[var(--line)]" onClick={() => go(i - 1)} aria-label="Previous pairing">←</button>
                  <button className="btn flex-1 !px-4 !tracking-[.1em] whitespace-nowrap" onClick={() => { addMany(p.handles.filter((h) => byHandle(h))); setAdded(true); }}>
                    {added ? "Added ✓" : `Add to bag ${money(total)}`}
                  </button>
                  <button className="iconbtn border border-[var(--line)]" onClick={() => go(i + 1)} aria-label="Next pairing">→</button>
                </div>
                <div className="mt-4 flex items-center justify-center gap-1.5" role="group" aria-label="Choose a pairing">
                  {pairs.map((d, k) => (
                    <button key={d.dish} onClick={() => go(k)} aria-label={`Pairing ${k + 1}: ${d.dish}`} aria-current={k === i} className="grid h-11 place-items-center px-0.5">
                      <span className={`mm-dot ${k === i ? "on" : ""} ${paused ? "paused" : ""}`} style={{ ["--ms" as string]: `${MS}ms` }}><b /></span>
                    </button>))}
                </div>
                <p className="text-center text-xs opacity-60">{i + 1} / {pairs.length} · swipe for the next idea</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
