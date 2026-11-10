import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PackShot from "@/components/PackShot";
import { getProduct, products } from "@/lib/products";

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) {
    return { title: "Product" };
  }
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) {
    notFound();
  }

  const related = products
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
      <Link
        href="/products"
        className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-cinnamon hover:text-forest"
      >
        ← All products
      </Link>
      <div className="mt-8 grid items-start gap-12 lg:grid-cols-2">
        <PackShot
          src={product.image}
          alt={`${product.name} pack`}
          priority
          className="aspect-square rounded-[2rem] border border-forest/8"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold">
            {product.category}
          </p>
          <p className="font-sinhala mt-4 text-lg text-cinnamon">{product.sinhala}</p>
          <h1 className="mt-2 font-serif text-5xl text-ink md:text-6xl">{product.name}</h1>
          <p className="mt-6 text-lg leading-8 text-muted">{product.description}</p>
          <dl className="mt-10 grid gap-8">
            <div>
              <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
                Ingredients
              </dt>
              <dd className="mt-3 text-muted">{product.ingredients.join(", ")}</dd>
            </div>
            <div>
              <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
                Available quantities
              </dt>
              <dd className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className={`rounded-full px-4 py-1.5 text-sm ${
                      size === product.shownSize
                        ? "bg-forest text-white"
                        : "border border-ink/10 text-ink"
                    }`}
                  >
                    {size}
                  </span>
                ))}
              </dd>
              <p className="mt-3 text-sm text-muted">
                Pack shown: {product.shownSize}. Extra sizes are available for shops and bulk
                orders.
              </p>
            </div>
            <div>
              <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
                Availability
              </dt>
              <dd className="mt-3 font-medium text-forest">{product.availability}</dd>
            </div>
          </dl>
          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-forest px-7 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-white hover:bg-cinnamon"
          >
            Order or enquire
          </Link>
        </div>
      </div>
      {related.length ? (
        <div className="mt-20">
          <h2 className="font-serif text-3xl text-ink">More in {product.category.toLowerCase()}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className="overflow-hidden rounded-[1.4rem] border border-forest/8 bg-white"
              >
                <PackShot
                  src={item.image}
                  alt={item.name}
                  className="aspect-square"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <p className="px-5 py-4 font-serif text-xl text-ink">{item.name}</p>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
