"use client";
import Image from "next/image";
import { useState } from "react";
export default function Gallery({ imgs, color, cutout, title }: { imgs: { src: string; alt: string }[]; color: string; cutout: string; title: string }) {
  const all = [{ src: cutout, alt: title, cut: true }, ...imgs.map((i) => ({ ...i, cut: false }))];
  const [i, setI] = useState(0);
  const cur = all[i];
  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-[28px] border-[3px] border-[var(--ink)] shadow-[8px_8px_0_var(--ink)]" style={{ background: cur.cut ? color : "#fff" }}>
        <Image key={cur.src} src={cur.src} alt={cur.alt} fill priority sizes="(max-width:768px) 100vw, 50vw" className={cur.cut ? "object-contain p-8" : "object-contain"} />
      </div>
      <div className="mt-4 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Product images">
        {all.map((m, j) => (
          <button key={m.src} onClick={() => setI(j)} aria-label={`Show image ${j + 1}`} aria-pressed={i === j} className={`relative h-16 w-16 flex-none overflow-hidden rounded-xl border-[3px] ${i === j ? "border-[var(--pink)]" : "border-[var(--ink)]"}`} style={{ background: m.cut ? color : "#fff" }}>
            <Image src={m.src} alt="" fill sizes="64px" className="object-contain" />
          </button>
        ))}
      </div>
    </div>
  );
}
