import Link from "next/link";
export default function NotFound() {
  return (
    <section className="hero" style={{ background: "var(--chilli)" }}>
      <div className="sun" aria-hidden />
      <div className="relative mx-auto max-w-[900px] px-4 py-24 text-center">
        <p className="font-display text-[clamp(6rem,30vw,16rem)] leading-none text-[var(--marigold)]">404</p>
        <h1 className="font-display text-5xl uppercase">Arre! This shelf is empty.</h1>
        <p className="mt-3 font-serif text-xl italic">The page wandered off. The snacks didn't.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3"><Link href="/" className="btn">Go home</Link><Link href="/shop" className="btn btn-ghost !border-white">Shop all</Link></div>
      </div>
    </section>
  );
}
