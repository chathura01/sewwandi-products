import Link from "next/link";
import Logo from "@/components/Logo";
import { navItems, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-forest/10 bg-forest text-parchment">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 md:px-8">
        <div>
          <Logo light />
          <p className="font-sinhala mt-5 text-sm text-parchment/70">{site.sinhala}</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-parchment/70">
            Sri Lankan spices since {site.established}.
          </p>
        </div>
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">
            Visit
          </p>
          <div className="gold-rule mt-3" />
          <nav className="mt-6 flex flex-col gap-3 text-sm text-parchment/80">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-parchment">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">
            Bogolla, Hettipola
          </p>
          <div className="gold-rule mt-3" />
          <p className="mt-6 text-sm leading-7 text-parchment/80">
            {site.address.line1}
            <br />
            {site.address.district}
            <br />
            {site.address.country}
          </p>
          <p className="mt-4 text-sm leading-7 text-parchment/80">
            <a href={`mailto:${site.email}`} className="hover:text-parchment">
              {site.email}
            </a>
            <br />
            {site.phones.join(" · ")}
          </p>
        </div>
      </div>
      <div className="border-t border-parchment/10">
        <p className="mx-auto max-w-7xl px-5 py-5 text-xs tracking-wide text-parchment/45 md:px-8">
          © 2026 {site.name}. All rights reserved. Reg. No. {site.registration}.
        </p>
      </div>
    </footer>
  );
}
