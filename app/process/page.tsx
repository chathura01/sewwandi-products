import type { Metadata } from "next";
import Link from "next/link";
import PackShot from "@/components/PackShot";
import PageHero from "@/components/PageHero";
import { processSteps } from "@/lib/process";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How Sewwandi Products turns selected raw spices into packed goods for retail shops: select, clean, process, pack and deliver.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our process"
        title="From selected raw material to the shop shelf."
        intro="The work is simple, and we keep it that way. We buy good-selected raw materials, clean them, process them, pack them, and deliver them to retail shops."
      />

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <div className="flex flex-wrap items-center gap-3 rounded-[1.6rem] bg-forest px-6 py-5 text-parchment">
          {processSteps.map((step, index) => (
            <p key={step.number} className="flex items-center gap-3 text-sm">
              <span className="font-semibold">{step.title}</span>
              {index < processSteps.length - 1 ? (
                <span className="text-gold" aria-hidden="true">
                  →
                </span>
              ) : null}
            </p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
        <div className="grid gap-16">
          {processSteps.map((step, index) => {
            const reverse = index % 2 === 1;
            return (
              <article
                key={step.number}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
              >
                <PackShot
                  src={step.image}
                  alt={step.title}
                  className={`aspect-square rounded-[1.8rem] border border-forest/8 ${reverse ? "md:order-2" : ""}`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={reverse ? "md:order-1" : ""}>
                  <p className="font-sans text-4xl font-semibold tracking-[0.2em] text-gold">
                    {step.number}
                  </p>
                  <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
                    {step.title}
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-muted">{step.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-forest/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <h2 className="font-serif text-4xl text-ink">Why this order matters</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            Quality is decided before the mill starts. If the raw chilli, turmeric
            or pepper is poor, no grinding will save it. That is why selection
            comes first, cleaning comes second, and packing is only the last
            promise we make to the shop.
          </p>
          <Link
            href="/products"
            className="mt-8 inline-flex text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-forest"
          >
            See the finished spices →
          </Link>
        </div>
      </section>
    </>
  );
}
