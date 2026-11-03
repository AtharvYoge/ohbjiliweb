import { Suspense } from "react";
import ShopGrid from "@/components/ShopGrid";
import PageHead from "@/components/PageHead";
import Marquee from "@/components/Marquee";
export const metadata = { title: "Shop" };
export default function Shop() {
  return (<>
    <PageHead k="Shop · all 16" t={<>The whole <em>pantry.</em></>} d="Snacks, sauces, mithai and coffee from Naagin Sauce, Bombay Sweet Shop, VS Mani & Co. and Sweet Karam Coffee." />
    <Marquee bg="var(--marigold)" color="var(--ink)" items={["Snacks", "Pantry", "Drinks & treats", "Every item under $10"]} />
    <section className="mx-auto max-w-[1400px] px-4 py-10 md:px-8"><Suspense><ShopGrid /></Suspense></section>
  </>);
}
