"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import PackShot from "@/components/PackShot";
import { productCategories, products, type ProductCategory } from "@/lib/products";

const filters = ["All", ...productCategories] as const;
type Filter = (typeof filters)[number];

export default function ProductCatalog() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? products
        : products.filter((product) => product.category === (filter as ProductCategory)),
    [filter],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((item) => {
          const active = item === filter;
          return (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
                active
                  ? "bg-forest text-white"
                  : "border border-cinnamon/25 bg-white text-cinnamon hover:border-forest/40 hover:text-forest"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="mt-10 grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
        {visible.map((product) => (
          <article
            key={product.slug}
            className="flex flex-col overflow-hidden rounded-[1.6rem] border border-forest/8 bg-white shadow-[0_18px_40px_-28px_rgba(35,61,50,0.35)]"
          >
            <Link href={`/products/${product.slug}`} className="relative">
              <PackShot
                src={product.image}
                alt={`${product.name} pack`}
                className="aspect-square"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
              <span className="absolute left-4 top-4 rounded-full bg-parchment px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-cinnamon">
                {product.category}
              </span>
            </Link>
            <div className="flex flex-1 flex-col p-6">
              <p className="font-sinhala text-sm text-cinnamon">{product.sinhala}</p>
              <h2 className="mt-1 font-serif text-3xl text-ink">{product.name}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{product.description}</p>
              <p className="mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
                Ingredients
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">{product.ingredients.join(", ")}</p>
              <p className="mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
                Available quantities
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className={`rounded-full px-3 py-1 text-xs ${
                      size === product.shownSize
                        ? "bg-forest text-white"
                        : "border border-ink/10 text-ink"
                    }`}
                  >
                    {size}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex items-center justify-between pt-6">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-forest">
                  {product.availability}
                </span>
                <Link
                  href={`/products/${product.slug}`}
                  className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-cinnamon hover:text-forest"
                >
                  View pack →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
