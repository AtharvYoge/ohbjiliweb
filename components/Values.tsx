const I = {
  makers: <svg viewBox="0 0 64 64" aria-hidden><path d="M12 50V26l20-14 20 14v24Z" fill="#FF2E8A" stroke="#1A0B12" strokeWidth="3" strokeLinejoin="round"/><path d="M26 50V36h12v14" fill="#FFC21A" stroke="#1A0B12" strokeWidth="3"/><path d="m32 4 3 6 6 1-5 4 2 6-6-3-6 3 2-6-5-4 6-1Z" fill="#fff" stroke="#1A0B12" strokeWidth="2.5" strokeLinejoin="round"/></svg>,
  edit: <svg viewBox="0 0 64 64" aria-hidden><rect x="10" y="10" width="44" height="46" rx="6" fill="#2DB84B" stroke="#1A0B12" strokeWidth="3"/><path d="M19 24h26M19 33h26M19 42h16" stroke="#1A0B12" strokeWidth="3" strokeLinecap="round"/><circle cx="48" cy="46" r="9" fill="#FFC21A" stroke="#1A0B12" strokeWidth="3"/><path d="m44 46 3 3 5-6" fill="none" stroke="#1A0B12" strokeWidth="3" strokeLinecap="round"/></svg>,
  plate: <svg viewBox="0 0 64 64" aria-hidden><ellipse cx="32" cy="40" rx="26" ry="12" fill="#fff" stroke="#1A0B12" strokeWidth="3"/><ellipse cx="32" cy="38" rx="15" ry="6" fill="#E3261B" stroke="#1A0B12" strokeWidth="3"/><path d="M24 22c0-6 6-6 6-12M34 22c0-6 6-6 6-12" fill="none" stroke="#1A0B12" strokeWidth="3" strokeLinecap="round"/></svg>,
  box: <svg viewBox="0 0 64 64" aria-hidden><path d="M8 22 32 12l24 10v26L32 58 8 48Z" fill="#1F4BFF" stroke="#1A0B12" strokeWidth="3" strokeLinejoin="round"/><path d="M8 22l24 10 24-10M32 32v26" fill="none" stroke="#1A0B12" strokeWidth="3"/><path d="M38 6l-4 10h6l-4 10" fill="none" stroke="#FFC21A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
};
const V = [
  { i: I.makers, t: "New-wave makers", d: "Four contemporary Indian brands, one bag." },
  { i: I.edit, t: "Curated edits", d: "Shop by moment, not by aisle." },
  { i: I.plate, t: "How to eat it", d: "Every product comes with ideas." },
  { i: I.box, t: "Build your box", d: "Mix brands, check out once." },
];
export default function Values() {
  return (
    <section aria-label="What we're about" className="border-y-[3px] border-[var(--ink)] bg-[var(--marigold)] py-10 md:py-14">
      <ul className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-4 gap-y-8 px-4 md:grid-cols-4">
        {V.map((v) => (
          <li key={v.t} className="text-center" data-rv>
            <div className="valicon mx-auto h-20 w-20 md:h-24 md:w-24">{v.i}</div>
            <h3 className="mt-3 font-display text-2xl uppercase leading-none md:text-3xl">{v.t}</h3>
            <p className="mx-auto mt-1 max-w-[22ch] text-sm md:text-base">{v.d}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
