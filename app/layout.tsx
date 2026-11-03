import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Reveal from "@/components/Reveal";
import { SITE_NAME } from "@/lib/site";

const display = Bodoni_Moda({ subsets: ["latin"], variable: "--f-display", display: "swap", style: ["normal", "italic"], axes: ["opsz"] });
const sans = Hanken_Grotesk({ subsets: ["latin"], variable: "--f-sans", display: "swap" });

export const metadata: Metadata = {
  title: { default: `${SITE_NAME} · New-wave Indian pantry`, template: `%s · ${SITE_NAME}` },
  description: "The India your parents' pantry hasn't met yet. Hot sauces, snacks, mithai and filter coffee from new-wave Indian makers.",
  robots: { index: false, follow: false },
};
export const viewport: Viewport = { themeColor: "#3D1A4A" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <CartProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <CartDrawer />
          <Reveal />
          <div className="grain" aria-hidden />
        </CartProvider>
      </body>
    </html>
  );
}
