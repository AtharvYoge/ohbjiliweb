import { Suspense } from "react";
import ShopGrid from "@/components/ShopGrid";
import PageHead from "@/components/PageHead";
export const metadata = { title: "Search" };
export default function Search() {
  return (<>
    <PageHead k="Search" t={<>What are you <em>craving?</em></>} bg="var(--blue)" />
    <section className="mx-auto max-w-[1400px] px-4 py-10 md:px-8"><Suspense><ShopGrid search /></Suspense></section>
  </>);
}
