import type { Metadata } from "next";
import Link from "next/link";
import PackShot from "@/components/PackShot";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Distribution & Partnerships",
  description:
    "Sewwandi Products supplies physical stores in the Kurunegala District, reaches Sri Lankans abroad, and welcomes hotels and catering partners.",
};

const channels = [
  {
    title: "Kurunegala retail shops",
    text: "For now, our physical-store distribution is within the Kurunegala District. Shops in and around Hettipola, Kuliyapitiya, Kurunegala town and neighbouring towns can stock Sewwandi packs for local kitchens.",
    image: "/products/curry-powder.png",
  },
  {
    title: "Sri Lankans living abroad",
    text: "Some Sri Lankans in foreign countries already buy our products because of the quality — the colour of the chilli, the smell of the curry powder, the taste that reminds them of home. We welcome those orders and the families who carry our spices overseas.",
    image: "/products/coffee.png",
  },
  {
    title: "Hotels and catering",
    text: "We will also supply our spices to hotels and catering kitchens. If you cook for guests, events or a restaurant service, Sewwandi can provide consistent packs in the sizes your kitchen needs.",
    image: "/products/roasted-curry-powder.png",
  },
];

export default function DistributionPage() {
  return (
    <>
      <PageHero
        eyebrow="Distribution & partnerships"
        title="Close to home, trusted far away."
        intro="We are a Kurunegala spice house first. Our packs are on local shop shelves today, in suitcases bound overseas, and ready for hotel and catering kitchens that want the same quality."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          {channels.map((channel) => (
            <article
              key={channel.title}
              className="overflow-hidden rounded-[1.7rem] border border-forest/8 bg-white"
            >
              <PackShot
                src={channel.image}
                alt={channel.title}
                className="aspect-square"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="p-7">
                <h2 className="font-serif text-3xl text-ink">{channel.title}</h2>
                <p className="mt-4 text-sm leading-7 text-muted">{channel.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-forest text-parchment">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-8">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
              Partner with us
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl">
              If you like to be a partner with us, get in touch.
            </h2>
            <p className="mt-6 text-lg leading-8 text-parchment/75">
              Retailers in Kurunegala, hoteliers, caterers, and families sending
              spices abroad are welcome. Tell us what you need — product list,
              pack sizes, and how often you want stock — and we will respond.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-gold px-7 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-forest hover:bg-parchment"
            >
              Contact Sewwandi
            </Link>
          </div>
          <PackShot
            src="/products/ginger-mix-coriander.png"
            alt="Ginger Mix Coriander Drink pack"
            className="aspect-square rounded-[1.8rem]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>
    </>
  );
}
