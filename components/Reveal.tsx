"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
// Fail-safe entrances: content is visible by default; JS adds .rv-wait only to below-fold items and reveals them on scroll.
export default function Reveal() {
  const path = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = [...document.querySelectorAll<HTMLElement>("[data-rv]")].filter((e) => e.getBoundingClientRect().top > window.innerHeight);
    els.forEach((e) => e.classList.add("rv-wait"));
    const io = new IntersectionObserver((es) => es.forEach((x) => { if (x.isIntersecting) { x.target.classList.add("rv-in"); io.unobserve(x.target); } }), { rootMargin: "0px 0px -8% 0px" });
    els.forEach((e) => io.observe(e));
    const t = setTimeout(() => els.forEach((e) => e.classList.add("rv-in")), 6000);
    return () => { io.disconnect(); clearTimeout(t); };
  }, [path]);
  return null;
}
