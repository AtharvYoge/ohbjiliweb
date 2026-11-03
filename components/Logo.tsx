export default function Bolt({ className = "bolt" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 44" className={className} aria-hidden>
      <path d="M20 2c7 6 16 11 16 24a16 16 0 0 1-32 0C4 13 13 8 20 2Z" fill="#3D1A4A" stroke="#C9A24A" strokeWidth="1.6" />
      <path d="M23 12 14 27h6l-2 10 9-15h-6Z" fill="#E3A33A" />
    </svg>
  );
}
