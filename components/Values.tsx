// Four "seals": original line-art icons in gold medallions.
const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
const I = {
  makers: <svg viewBox="0 0 48 48" aria-hidden><path {...S} d="M10 40V22c0-8 6-14 14-14s14 6 14 14v18Z"/><path {...S} d="M18 40V28a6 6 0 0 1 12 0v12M6 40h36"/><path {...S} d="m24 2 1.5 3 3 .5-2.2 2 .6 3L24 9l-2.9 1.5.6-3-2.2-2 3-.5Z"/></svg>,
  edit: <svg viewBox="0 0 48 48" aria-hidden><path {...S} d="M12 6h24v36l-12-7-12 7Z"/><path {...S} d="M18 16h12M18 22h12M18 28h7"/></svg>,
  plate: <svg viewBox="0 0 48 48" aria-hidden><ellipse {...S} cx="24" cy="32" rx="19" ry="8"/><ellipse {...S} cx="24" cy="31" rx="10" ry="4"/><path {...S} d="M18 18c0-4 4-4 4-9M26 18c0-4 4-4 4-9"/></svg>,
  box: <svg viewBox="0 0 48 48" aria-hidden><rect {...S} x="6" y="16" width="36" height="24" rx="3"/><path {...S} d="M6 24h36M18 16v24M30 16v24M10 16l4-8h20l4 8"/></svg>,
};
const V = [
  { i: I.makers, t: "New-wave makers", d: "Four contemporary Indian brands, side by side." },
  { i: I.edit, t: "Curated edits", d: "Shop by moment, not by aisle." },
  { i: I.plate, t: "How to eat it", d: "Every product comes with serving ideas." },
  { i: I.box, t: "One dabba", d: "Mix makers, check out once." },
];
export default function Values() {
  return (
    <section aria-label="What we stand for" className="relative bg-[var(--peacock)] py-14 text-[var(--ivory)] md:py-20">
      <ul className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-4 gap-y-10 px-5 md:grid-cols-4">
        {V.map((v) => (
          <li key={v.t} className="text-center">
            <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-[radial-gradient(circle,#00697A_62%,transparent_63%),var(--gold-grad)] text-[var(--gold-2)] shadow-[0_0_0_1px_rgba(232,207,138,.7),0_0_0_6px_var(--peacock),0_0_0_7px_rgba(232,207,138,.45)] md:h-28 md:w-28">
              <span className="block h-11 w-11 md:h-12 md:w-12">{v.i}</span>
            </div>
            <h3 className="mt-5 font-display text-[1.45rem] leading-none md:text-2xl">{v.t}</h3>
            <p className="mx-auto mt-2 max-w-[22ch] text-sm opacity-80">{v.d}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
