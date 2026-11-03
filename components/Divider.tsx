// Original truck-art / block-print style border, drawn in SVG.
export default function Divider({ a = "#FF2E8A", b = "#FFC21A", c = "#1A0B12" }: { a?: string; b?: string; c?: string }) {
  const id = `d${a.slice(1)}${b.slice(1)}`;
  return (
    <svg className="block h-7 w-full md:h-9" preserveAspectRatio="none" viewBox="0 0 400 36" aria-hidden>
      <defs>
        <pattern id={id} width="40" height="36" patternUnits="userSpaceOnUse">
          <rect width="40" height="36" fill={c} />
          <path d="M0 18 L10 4 L20 18 L10 32Z" fill={a} />
          <path d="M20 18 L30 4 L40 18 L30 32Z" fill={b} />
          <circle cx="10" cy="18" r="3" fill={b} /><circle cx="30" cy="18" r="3" fill={a} />
          <circle cx="20" cy="4" r="2" fill="#fff" /><circle cx="20" cy="32" r="2" fill="#fff" />
        </pattern>
      </defs>
      <rect width="400" height="36" fill={`url(#${id})`} />
    </svg>
  );
}
