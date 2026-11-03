export default function Marquee({ items, bg, color, reverse = false, tilt = 0 }: { items: string[]; bg: string; color: string; reverse?: boolean; tilt?: number }) {
  const row = items.map((t, i) => <span key={i} className="mq-item">{t}<span aria-hidden className="mq-dot">◆</span></span>);
  return (
    <div className="mq" style={{ background: bg, color, transform: tilt ? "none" : undefined }} aria-label={items.join(", ")} role="marquee">
      <div className={`mq-track ${reverse ? "rev" : ""}`} aria-hidden>{row}{row}{row}{row}</div>
    </div>
  );
}
