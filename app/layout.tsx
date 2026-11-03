import type { Metadata, Viewport } from "next";
import { Anton, Fraunces } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Reveal from "@/components/Reveal";
import { SITE_NAME } from "@/lib/site";

const display = Anton({ weight: "400", subsets: ["latin"], variable: "--f-display", display: "swap" });
const serif = Fraunces({ subsets: ["latin"], variable: "--f-serif", display: "swap", axes: ["SOFT", "WONK", "opsz"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: { default: `${SITE_NAME} · New-wave Indian pantry`, template: `%s · ${SITE_NAME}` },
  description: "The India your parents' pantry hasn't met yet. Hot sauces, snacks, mithai and filter coffee from new-wave Indian makers.",
  robots: { index: false, follow: false },
};
export const viewport: Viewport = { themeColor: "#FF2E8A" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className={`${display.variable} ${serif.variable}`}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <CartProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <CartDrawer />
          <Reveal />
        </CartProvider>
      </body>
    </html>
  );
}
