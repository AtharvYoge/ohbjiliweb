import { Ornament } from "./Divider";
const ROWS: [string, boolean, boolean][] = [
  ["New-wave Indian makers, side by side", true, false],
  ["Edits for real moments: chai, potluck, game day", true, false],
  ["Serving ideas on every product", true, false],
  ["Mix brands in one build-your-own dabba", true, false],
  ["Organised by region and craving, not just aisle", true, false],
  ["The classics you grew up with", false, true],
];
const Yes = () => <svg viewBox="0 0 24 24" className="mx-auto h-6 w-6" role="img" aria-label="Yes"><path d="M12 2 22 12 12 22 2 12Z" fill="#00697A"/><path d="m8 12 3 3 5-6" fill="none" stroke="#F5D98A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const No = () => <svg viewBox="0 0 24 24" className="mx-auto h-6 w-6" role="img" aria-label="No"><path d="M7 12h10" stroke="#D6246E" strokeWidth="1.6" strokeLinecap="round"/></svg>;
export default function Compare({ name }: { name: string }) {
  return (
    <section aria-labelledby="cmp" className="relative bg-[var(--aubergine)] px-5 py-20 text-[var(--ivory)] md:py-28">
      <div className="jaal" aria-hidden />
      <div className="relative mx-auto max-w-[920px]">
        <p className="eyebrow text-[var(--gold-2)]">The ledger</p>
        <h2 id="cmp" className="h2" data-rv>What sets us <em className="gold-text">apart.</em></h2>
        <p className="mt-4 max-w-[52ch] opacity-85">We love the classics. They&apos;re still in the steel dabbas at home. This is the other half of the pantry.</p>
        <div className="cmp mt-10" data-rv>
          <table className="w-full">
            <thead><tr><th scope="col" className="sr-only">Feature</th><th scope="col" className="bg-[rgba(201,162,74,.16)]">{name}</th><th scope="col" className="opacity-70">Typical grocery aisle</th></tr></thead>
            <tbody>{ROWS.map(([r, a, b]) => <tr key={r}><th scope="row">{r}</th><td className="bg-[rgba(201,162,74,.08)]">{a ? <Yes /> : <No />}</td><td>{b ? <Yes /> : <No />}</td></tr>)}</tbody>
          </table>
          <Ornament className="mx-auto my-4 h-4 w-28 text-[var(--gold)]" />
        </div>
      </div>
    </section>
  );
}
