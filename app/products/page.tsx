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
        title="Nineteen packs from the Hettipola spice house."
        intro="Chilli powders, curry blends, whole seeds, kurakkan flour, sago, coffee and a ginger-coriander drink — each pouch packed in Bogolla with Sinhala, English and Tamil on the label."
      />
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <ProductCatalog />
      </section>
    </>
  );
}
