import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_Sinhala, Outfit } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const sinhala = Noto_Sans_Sinhala({
  subsets: ["sinhala"],
  variable: "--font-sinhala",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Sri Lankan Spices since ${site.established}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Sewwandi Products is a Sri Lankan spice brand established in 2003 in Bogolla, Hettipola. Selected raw materials, cleaned, processed and packed for shops across Kurunegala.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} ${sinhala.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-parchment font-sans text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
