"use client";
import { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";
import { PRODUCTS, permalink } from "@/lib/products";

type Line = { handle: string; qty: number };
type Ctx = { lines: Line[]; open: boolean; setOpen: (o: boolean) => void; add: (h: string, q?: number, openDrawer?: boolean) => void; addMany: (hs: string[]) => void; setQty: (h: string, q: number) => void; count: number; subtotal: number; checkoutUrl: string; toast: string };
const CartCtx = createContext<Ctx | null>(null);
const KEY = "ohbijli-cart-v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<Line[]>([]);
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [ready, setReady] = useState(false);
  useEffect(() => { try { const s = JSON.parse(localStorage.getItem(KEY) || "[]"); if (Array.isArray(s)) setLines(s.filter((l: Line) => PRODUCTS.some((p) => p.handle === l.handle))); } catch {} setReady(true); }, []);
  useEffect(() => { if (ready) localStorage.setItem(KEY, JSON.stringify(lines)); }, [lines, ready]);
  useEffect(() => { if (!toast) return; const t = setTimeout(() => setToast(""), 2200); return () => clearTimeout(t); }, [toast]);
  const add = useCallback((h: string, q = 1, openDrawer = true) => {
    setLines((ls) => { const f = ls.find((l) => l.handle === h); return f ? ls.map((l) => (l.handle === h ? { ...l, qty: Math.min(99, l.qty + q) } : l)) : [...ls, { handle: h, qty: q }]; });
    setToast("Added to your bag"); if (openDrawer) setOpen(true);
  }, []);
  const addMany = useCallback((hs: string[]) => { hs.forEach((h) => add(h, 1, false)); setOpen(true); }, [add]);
  const setQty = useCallback((h: string, q: number) => setLines((ls) => (q <= 0 ? ls.filter((l) => l.handle !== h) : ls.map((l) => (l.handle === h ? { ...l, qty: Math.min(99, q) } : l)))), []);
  const v = useMemo(() => {
    const full = lines.map((l) => ({ ...l, p: PRODUCTS.find((p) => p.handle === l.handle)! })).filter((l) => l.p);
    return { count: full.reduce((a, l) => a + l.qty, 0), subtotal: full.reduce((a, l) => a + l.qty * Number(l.p.price), 0), checkoutUrl: permalink(full.map((l) => ({ variantId: l.p.variantId, qty: l.qty }))) };
  }, [lines]);
  useEffect(() => { document.documentElement.style.overflow = open ? "hidden" : ""; }, [open]);
  return <CartCtx.Provider value={{ lines, open, setOpen, add, addMany, setQty, toast, ...v }}>{children}</CartCtx.Provider>;
}
export const useCart = () => { const c = useContext(CartCtx); if (!c) throw new Error("no cart"); return c; };
