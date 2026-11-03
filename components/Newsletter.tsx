"use client";
import { useState } from "react";
export default function Newsletter() {
  const [done, setDone] = useState(false);
  const [err, setErr] = useState("");
  return (
    <section id="newsletter" aria-labelledby="nl" className="scroll-mt-28 bg-[var(--parrot)] px-4 py-16 text-[var(--ink)] md:py-24">
      <div className="mx-auto max-w-[900px] text-center">
        <p className="eyebrow">The Bijli letter</p>
        <h2 id="nl" className="h2" data-rv>New drops. New edits. <span className="font-serif normal-case italic">Zero spam.</span></h2>
        {done ? (
          <p className="mx-auto mt-8 max-w-md rounded-3xl border-[3px] border-[var(--ink)] bg-[var(--marigold)] p-6 font-display text-3xl uppercase" role="status">You're on the list! ⚡<span className="mt-2 block font-sans text-sm normal-case">(Demo: nothing was sent or stored.)</span></p>
        ) : (
          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" noValidate onSubmit={(e) => { e.preventDefault(); const v = (new FormData(e.currentTarget).get("email") as string || "").trim(); if (!/^\S+@\S+\.\S+$/.test(v)) { setErr("That email looks off. Try again?"); return; } setErr(""); setDone(true); }}>
            <label htmlFor="em" className="sr-only">Email address</label>
            <input id="em" name="email" type="email" autoComplete="email" placeholder="you@email.com" className="input flex-1" aria-invalid={!!err} aria-describedby="em-err" />
            <button className="btn !bg-[var(--ink)] !text-white" type="submit">Sign me up</button>
          </form>
        )}
        <p id="em-err" className="mt-2 min-h-6 font-semibold text-[var(--maroon)]">{err}</p>
      </div>
    </section>
  );
}
