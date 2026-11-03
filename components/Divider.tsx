// Original zari / textile border, drawn in SVG (scalloped arches, lozenges and dots).
export default function Divider({ a = "#C9A24A", b = "#0B5E63", c = "#3D1A4A" }: { a?: string; b?: string; c?: string }) {
  const id = `z${a.slice(1)}${b.slice(1)}${c.slice(1)}`;
  return (
    <svg className="zari" preserveAspectRatio="none" viewBox="0 0 480 22" aria-hidden>
      <defs>
        <pattern id={id} width="48" height="22" patternUnits="userSpaceOnUse">
          <rect width="48" height="22" fill={c} />
          <path d="M0 22 C0 10 12 6 24 6 C36 6 48 10 48 22" fill="none" stroke={a} strokeWidth="1.2" />
          <path d="M24 9 28 14 24 19 20 14Z" fill={a} />
          <circle cx="0" cy="14" r="2" fill={b} /><circle cx="48" cy="14" r="2" fill={b} />
          <circle cx="12" cy="3" r="1" fill={a} /><circle cx="36" cy="3" r="1" fill={a} />
        </pattern>
      </defs>
      <rect width="480" height="1" fill={a} />
      <rect y="1" width="480" height="20" fill={`url(#${id})`} />
      <rect y="21" width="480" height="1" fill={a} />
    </svg>
  );
}
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M0 12h44M76 12h44" /><path d="M60 2 70 12 60 22 50 12Z" /><path d="M60 7 65 12 60 17 55 12Z" fill="currentColor" /><circle cx="46" cy="12" r="2" /><circle cx="74" cy="12" r="2" />
    </svg>
  );
}
