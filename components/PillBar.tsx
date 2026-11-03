"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { PRODUCTS, shortTitle } from "@/lib/products";
import { CATEGORIES } from "@/lib/site";

const COLORS = ["#FF2E8A", "#FFC21A", "#2DB84B", "#1F4BFF", "#E3261B", "#FF7A1A", "#8FD3FF", "#6E0F2B"];
const TAGS: [string, string][] = [["Hot sauce", "hot sauce"], ["Chilli oil", "chilli oil"], ["Chips", "chips"], ["Murukku", "murukku"], ["Namkeen", "namkeen"], ["Mithai", "mithai"], ["Chocolate", "chocolate"], ["Coffee", "coffee"], ["Podi", "podi"], ["Cookies", "cookies"]];
type Pill = { label: string; href: string; img?: string };
const PILLS: Pill[] = [
  ...CATEGORIES.map((c) => ({ label: c, href: `/shop?cat=${encodeURIComponent(c)}` })),
  ...TAGS.map(([l, q]) => ({ label: l, href: `/shop?q=${encodeURIComponent(q)}` })),
  ...PRODUCTS.map((p) => ({ label: shortTitle(p.title), href: `/products/${p.handle}`, img: p.cutout })),
];
const ink = (c: string) => (["#FFC21A", "#FF7A1A", "#8FD3FF"].includes(c) ? "#1A0B12" : "#fff");

export default function PillBar() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let paused = false, raf = 0, last = performance.now(), resume: ReturnType<typeof setTimeout> | undefined, pos = el.scrollLeft;
    const pause = () => { paused = true; if (resume) clearTimeout(resume); };
    const later = () => { if (resume) clearTimeout(resume); resume = setTimeout(() => { paused = false; pos = el.scrollLeft; }, 1800); };
    const tick = (t: number) => {
      const dt = Math.min(64, t - last); last = t;
      if (!paused && !document.hidden) {
        const half = el.scrollWidth / 2;
        pos += dt * 0.045; if (pos >= half) pos -= half;
        el.scrollLeft = pos;
      } else pos = el.scrollLeft;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const opts = { passive: true } as AddEventListenerOptions;
    el.addEventListener("mouseenter", pause); el.addEventListener("mouseleave", later);
    el.addEventListener("touchstart", pause, opts); el.addEventListener("touchend", later, opts);
    el.addEventListener("focusin", pause); el.addEventListener("focusout", later);
    el.addEventListener("wheel", () => { pause(); later(); }, opts);
    return () => { cancelAnimationFrame(raf); if (resume) clearTimeout(resume); };
  }, []);
  const row = (dup: boolean) => PILLS.map((p, i) => {
    const c = COLORS[i % COLORS.length];
    return (
      <li key={`${dup}-${p.href}`} aria-hidden={dup || undefined}>
        <Link href={p.href} tabIndex={dup ? -1 : undefined} className="cpill" style={{ background: c, color: ink(c), transform: `rotate(${i % 3 === 0 ? -2 : i % 3 === 1 ? 1.5 : 0}deg)` }}>
          {p.img && <span className="cpill-img"><Image src={p.img} alt="" fill sizes="36px" className="object-contain" /></span>}
          {p.label}
        </Link>
      </li>
    );
  });
  return (
    <nav aria-label="Shop by category and product" className="pillbar">
      <div ref={ref} className="pillbar-scroll">
        <ul className="pillbar-row">{row(false)}{row(true)}</ul>
      </div>
    </nav>
  );
}
