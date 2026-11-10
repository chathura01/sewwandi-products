"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/Logo";
import { navItems } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-parchment/88 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <Logo compact />
        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.7rem] font-medium uppercase tracking-[0.14em] transition-colors ${
                  active ? "text-forest" : "text-ink/70 hover:text-forest"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/contact"
          className="hidden rounded-full bg-forest px-4 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-cinnamon xl:inline-flex"
        >
          Partner with us
        </Link>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h10" />
            )}
          </svg>
        </button>
      </div>
      {open ? (
        <div className="border-t border-ink/10 bg-cream px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/8 py-2 font-serif text-2xl text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center rounded-full bg-forest px-5 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-white"
            >
              Partner with us
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
