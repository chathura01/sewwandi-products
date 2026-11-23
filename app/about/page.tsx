import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScenePhoto from "@/components/ScenePhoto";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Sewwandi Products is a Sri Lankan spice brand established in 2003 in Bogolla, Hettipola, Kurunegala District.",
};

const values = [
  {
    title: "Selection first",
    text: "We start with good raw material. Colour, aroma and cleanliness are judged before anything is milled.",
  },
  {
    title: "A local name",
    text: "Every pouch carries the green Sewwandi oval. Shops and families know who made the chilli they are cooking with.",
  },
  {
    title: "Steady quality",
    text: "Whether the pack is 50g for a home or 400g for a busy shop, the spice inside should taste the same.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Two Decades of Bringing Authentic Sri Lankan Flavours."
        intro="Sewwandi Products was established in 2003 in Bogolla, Hettipola. For more than two decades we have prepared Sri Lankan spices for kitchens that care how their curry tastes."
      />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <ScenePhoto
          src="/images/about/story.jpg"
          alt="Sewwandi packs, raw spices, and the packing room beside the paddy fields in Bogolla"
          className="aspect-video rounded-[1.8rem] border border-forest/8"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div>
          <h2 className="font-serif text-4xl text-ink md:text-5xl">Our story</h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            The work began in a village known more for its fields than for
            factories. From Bogolla we built a small, serious spice operation:
            buying selected raw materials, cleaning them, processing them, and
            packing them for shops that serve ordinary Sri Lankan meals.
          </p>
          <p className="mt-4 text-lg leading-8 text-muted">
            That is still the business. The range now includes chilli, turmeric,
            curry powders, whole seeds, kurakkan flour, sago and coffee — but we
            have not left Hettipola, and we have not stopped inspecting what
            comes in before it goes out.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
            What we stand for
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-[1.5rem] border border-forest/8 bg-parchment p-7"
              >
                <h3 className="font-serif text-3xl text-ink">{value.title}</h3>
                <p className="mt-4 leading-7 text-muted">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <div>
          <h2 className="font-serif text-4xl text-ink">Where to find us</h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            {site.address.line1}
            <br />
            {site.address.district}, {site.address.province}
            <br />
            {site.address.country}
          </p>
          <p className="mt-5 text-muted">
            Registration no. {site.registration}. Visitors and trade partners are
            welcome during working hours. For supply, hotels, catering or
            overseas requests, please write to us.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-forest px-7 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-white hover:bg-cinnamon"
          >
            Contact us
          </Link>
        </div>
        <ScenePhoto
          src="/images/about/place.jpg"
          alt="The road to Bogolla, Hettipola, in Kurunegala District"
          className="aspect-video rounded-[1.8rem] border border-forest/8"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </section>
    </>
  );
}
