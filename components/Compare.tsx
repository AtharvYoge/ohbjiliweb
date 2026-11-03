const ROWS: [string, boolean, boolean][] = [
  ["New-wave Indian makers, side by side", true, false],
  ["Curated edits for real moments (chai, potluck, game day)", true, false],
  ["How-to-eat-it ideas on every product", true, false],
  ["Mix brands in one build-your-own box", true, false],
  ["Organised by region and craving, not just by aisle", true, false],
  ["The classics you grew up with", false, true],
];
const Yes = () => <svg viewBox="0 0 32 32" className="mx-auto h-8 w-8" role="img" aria-label="Yes"><circle cx="16" cy="16" r="14" fill="#2DB84B" stroke="#1A0B12" strokeWidth="2.5"/><path d="m10 16 4 4 8-9" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const No = () => <svg viewBox="0 0 32 32" className="mx-auto h-8 w-8" role="img" aria-label="No"><circle cx="16" cy="16" r="14" fill="#fff" stroke="#1A0B12" strokeWidth="2.5"/><path d="m11 11 10 10M21 11 11 21" stroke="#E3261B" strokeWidth="3.4" strokeLinecap="round"/></svg>;
export default function Compare({ name }: { name: string }) {
  return (
    <section aria-labelledby="cmp" className="bg-[var(--pink)] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-[980px]">
        <p className="eyebrow text-white">What sets us apart</p>
        <h2 id="cmp" className="h2 text-white" data-rv>Not your parents' grocery run.</h2>
        <p className="mt-3 max-w-[56ch] text-white/90">We love the classics. They're still on our shelves at home. This is the other half of the pantry.</p>
        <div className="cmp mt-8" data-rv>
          <table className="w-full">
            <thead><tr><th scope="col" className="sr-only">Feature</th><th scope="col" className="bg-[var(--marigold)]">{name}</th><th scope="col">Typical grocery aisle</th></tr></thead>
            <tbody>{ROWS.map(([r, a, b]) => <tr key={r}><th scope="row">{r}</th><td className="bg-[#FFF0BF]">{a ? <Yes /> : <No />}</td><td>{b ? <Yes /> : <No />}</td></tr>)}</tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
