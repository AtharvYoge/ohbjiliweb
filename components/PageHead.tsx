export default function PageHead({ k, t, d, bg = "var(--pink)", ink = "#fff" }: { k: string; t: React.ReactNode; d?: string; bg?: string; ink?: string }) {
  return (
    <section className="hero" style={{ background: bg, color: ink }}>
      <div className="sun" aria-hidden />
      <div className="relative mx-auto max-w-[1400px] px-4 py-12 md:px-8 md:py-16">
        <p className="in eyebrow">{k}</p>
        <h1 className="in h1 !text-[clamp(2.8rem,9vw,7rem)]" style={{ ["--d" as string]: ".1s" }}>{t}</h1>
        {d && <p className="in mt-4 max-w-[52ch] text-lg md:text-xl" style={{ ["--d" as string]: ".25s" }}>{d}</p>}
      </div>
    </section>
  );
}
