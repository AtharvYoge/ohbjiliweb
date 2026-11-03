"use client";
import Image from "next/image";
import { useState } from "react";
export default function Gallery({ imgs, color, cutout, title }: { imgs: { src: string; alt: string }[]; color: string; cutout: string; title: string }) {
  const all = [{ src: cutout, alt: title, cut: true }, ...imgs.map((i) => ({ ...i, cut: false }))];
  const [i, setI] = useState(0);
  const cur = all[i];
  return (
    <div>
      <div className="relative aspect-[4/5] mx-auto max-w-[520px] overflow-hidden rounded-[999px_999px_28px_28px] shadow-[inset_0_0_0_1px_rgba(201,162,74,.7)] shadow-[0_30px_60px_-34px_rgba(27,20,32,.55)]" style={{ background: cur.cut ? color : "#fff" }}>
        <Image key={cur.src} src={cur.src} alt={cur.alt} fill priority sizes="(max-width:768px) 100vw, 50vw" className={cur.cut ? "object-contain p-8" : "object-contain"} />
      </div>
      <div className="mt-4 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Product images">
        {all.map((m, j) => (
          <button key={m.src} onClick={() => setI(j)} aria-label={`Show image ${j + 1}`} aria-pressed={i === j} className={`relative h-16 w-16 flex-none overflow-hidden rounded-xl border ${i === j ? "border-[var(--gold)] ring-2 ring-[var(--gold)]" : "border-[var(--line)]"}`} style={{ background: m.cut ? color : "#fff" }}>
            <Image src={m.src} alt="" fill sizes="64px" className="object-contain" />
          </button>
        ))}
      </div>
    </div>
  );
}
