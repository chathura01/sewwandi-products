import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Contact Sewwandi Products in Bogolla, Hettipola for retail supply, hotel and catering partnerships, or overseas orders.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Write to the spice house in Bogolla."
        intro="Ask about shop supply in Kurunegala, hotel and catering packs, or spices for family overseas. We read every message."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-20">
        <div>
          <h2 className="font-serif text-4xl text-ink">Visit or call</h2>
          <dl className="mt-8 space-y-6 text-sm">
            <div>
              <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold">
                Address
              </dt>
              <dd className="mt-2 leading-7 text-muted">
                {site.address.line1}
                <br />
                {site.address.district}
                <br />
                {site.address.province}, {site.address.country}
              </dd>
            </div>
            <div>
              <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold">
                Email
              </dt>
              <dd className="mt-2">
                <a href={`mailto:${site.email}`} className="text-ink hover:text-forest">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold">
                Phone
              </dt>
              <dd className="mt-2 leading-7 text-muted">
                {site.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="block hover:text-forest">
                    {phone}
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold">
                Hours
              </dt>
              <dd className="mt-2 text-muted">{site.hours}</dd>
            </div>
            <div>
              <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold">
                Registration
              </dt>
              <dd className="mt-2 text-muted">No. {site.registration}</dd>
            </div>
          </dl>
          <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-forest/10">
            <iframe
              title="Map of Bogolla, Hettipola"
              src="https://maps.google.com/maps?q=Bogolla%20Hettipola%20Sri%20Lanka&z=13&output=embed"
              className="h-64 w-full"
              loading="lazy"
            />
          </div>
        </div>
        <div className="rounded-[1.8rem] border border-forest/8 bg-white p-6 md:p-10">
          <h2 className="font-serif text-4xl text-ink">Send a message</h2>
          <p className="mt-3 text-muted">
            Tell us if you are a shop, a hotel, a caterer, or a family buying
            from abroad.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
