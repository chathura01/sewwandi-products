import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductCatalog from "@/components/ProductCatalog";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Chilli, curry powders, ground spices, whole spices, kurakkan flour and drinks from Sewwandi Products, packed in Bogolla, Hettipola.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our products"
        title="A Taste of Authentic Sri Lanka."
        intro="From aromatic spices and traditional curry blends to wholesome grains and rich coffee, discover carefully crafted flavours inspired by Sri Lankan heritage."
      />
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <ProductCatalog />
      </section>
    </>
  );
}
