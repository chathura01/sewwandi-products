import Link from "next/link";
import PackShot from "@/components/PackShot";
import { processSteps } from "@/lib/process";
import { featuredSlugs, products } from "@/lib/products";
import { site } from "@/lib/site";

const featured = featuredSlugs
  .map((slug) => products.find((product) => product.slug === slug))
  .filter((product) => product != null);

const heroPacks = products.filter((product) =>
  [
    "chilli-powder",
    "turmeric-powder",
    "curry-powder",
    "meat-curry-powder",
    "pepper-powder",
    "kurakkan-flour",
  ].includes(product.slug),
);

export default function HomePage() {
  return (
    <>
      <section className="bg-forest">
        <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
          <div>
            <p className="font-sinhala text-xl text-gold">{site.sinhala}</p>
            <p className="mt-4 text-[0.85rem] font-semibold uppercase tracking-[0.32em] text-gold">
              Sri Lankan spices · Established {site.established}
            </p>
            <h1 className="mt-5 max-w-xl font-serif text-5xl leading-[0.95] text-parchment md:text-7xl">
              The flavour of home, packed spices.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-parchment/78">
              Sewwandi Products is a family spice house in Sri Lanka that established in 2003.
              We buy good-selected raw materials, clean them, process them, pack
              them, and deliver them to retail shops.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-full bg-gold px-7 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-forest hover:bg-parchment"
              >
                Explore our products
              </Link>
              <Link
                href="/process"
                className="rounded-full border border-parchment/35 px-7 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-parchment hover:bg-parchment/10"
              >
                See the process
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {heroPacks.map((product) => (
              <PackShot
                key={product.slug}
                src={product.image}
                alt={product.name}
                priority
                className="aspect-square rounded-[1.2rem]"
                sizes="(max-width: 768px) 33vw, 16vw"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-forest/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4 md:px-8">
          {[
            ["2003", "Established in Sri Lanka"],
            ["Kurunegala", "Distribute to 300+ Physical stores"],
            ["20+ Products", "Chilli, curry, seeds, flour and drinks"],
            ["Trilingual", "Sinhala, English and Tamil on every pouch"],
          ].map(([stat, label]) => (
            <div key={stat}>
              <p className="font-serif text-4xl text-forest">{stat}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <div className="relative">
          <PackShot
            src="/products/chilli-powder.png"
            alt="Sewwandi Chilli Powder pack"
            className="aspect-square rounded-[2rem] border border-forest/8"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute bottom-5 left-5 max-w-[14rem] rounded-3xl bg-cinnamon px-5 py-5 text-parchment md:left-auto md:right-5">
            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-gold">
              From Hettipola
            </p>
            <p className="mt-2 font-serif text-2xl leading-7">
              Made for Sri Lankan kitchens, known for quality abroad.
            </p>
          </div>
        </div>
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
            Who we are
          </p>
          <div className="gold-rule mt-4" />
          <h2 className="mt-6 font-serif text-4xl leading-tight text-ink md:text-6xl">
            A spice brand built on selection, not shortcuts.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Sewwandi Products began in {site.established} in Sri Lanka.
            We are a local processor: we choose the raw material, we clean it, we
            mill and blend it, and we pack it so shops can sell a spice that still
            smells like itself.
          </p>
          <p className="mt-4 text-lg leading-8 text-muted">
            Chilli powder, curry blends, turmeric, kurakkan flour and coffee all
            leave under the same green oval — honest packs for ordinary Sri Lankan
            meals.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-forest"
          >
            Read our story →
          </Link>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
                Our packs
              </p>
              <h2 className="mt-4 font-serif text-4xl text-ink md:text-6xl">
                Spices for the Sri Lankan table.
              </h2>
            </div>
            <Link
              href="/products"
              className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-forest"
            >
              View all products →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`} className="group">
                <PackShot
                  src={product.image}
                  alt={product.name}
                  className="aspect-square rounded-[1.5rem] border border-forest/8"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <h3 className="mt-4 font-serif text-2xl text-ink group-hover:text-forest">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{product.sizes.join(" · ")}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
          How we work
        </p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl text-ink md:text-6xl">
          Selected. Cleaned. Processed. Packed. Delivered.
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="rounded-[1.4rem] border border-forest/10 bg-white p-5"
            >
              <p className="font-sans text-2xl font-semibold tracking-[0.18em] text-gold">
                {step.number}
              </p>
              <h3 className="mt-3 font-serif text-2xl text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{step.summary}</p>
            </div>
          ))}
        </div>
        <Link
          href="/process"
          className="mt-8 inline-flex text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-forest"
        >
          Follow the full process →
        </Link>
      </section>

      <section className="bg-cinnamon">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 md:grid-cols-2 md:px-8">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold">
              Distribution
            </p>
            <h2 className="mt-4 font-serif text-4xl text-parchment md:text-6xl">
              Ready to deliver across Sri Lanka.
            </h2>
          </div>
          <div className="text-parchment/85">
            <p className="text-lg leading-8">
              Physical store supply is currently within the Kurunegala District.
              Sri Lankans living abroad also buy our products because of the
              quality. We are opening the same packs to hotels and catering.
            </p>
            <Link
              href="/distribution"
              className="mt-8 inline-flex rounded-full bg-parchment px-6 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-forest"
            >
              Distribution & partnerships
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
