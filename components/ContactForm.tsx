"use client";

import { FormEvent, useState } from "react";

const interests = [
  "Retail shop in Kurunegala",
  "Hotel or catering",
  "Overseas order",
  "General enquiry",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-gold/40 bg-parchment px-8 py-12 text-center">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold-deep">
          Thank you
        </p>
        <h3 className="mt-4 font-serif text-3xl text-ink">We will get back to you.</h3>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Your message has been noted. A member of the Sewwandi Products team
          will reply about partnership and supply.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <label className="grid gap-2 text-sm">
        <span className="font-medium text-ink">Name</span>
        <input
          required
          name="name"
          className="rounded-2xl border border-ink/12 bg-parchment px-4 py-3 outline-none ring-gold/40 focus:ring-2"
        />
      </label>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="font-medium text-ink">Email</span>
          <input
            required
            type="email"
            name="email"
            className="rounded-2xl border border-ink/12 bg-parchment px-4 py-3 outline-none ring-gold/40 focus:ring-2"
          />
        </label>
        <label className="grid gap-2 text-sm">
          <span className="font-medium text-ink">Phone</span>
          <input
            name="phone"
            className="rounded-2xl border border-ink/12 bg-parchment px-4 py-3 outline-none ring-gold/40 focus:ring-2"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm">
        <span className="font-medium text-ink">I am interested in</span>
        <select
          name="interest"
          className="rounded-2xl border border-ink/12 bg-parchment px-4 py-3 outline-none ring-gold/40 focus:ring-2"
          defaultValue={interests[0]}
        >
          {interests.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm">
        <span className="font-medium text-ink">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className="resize-y rounded-2xl border border-ink/12 bg-parchment px-4 py-3 outline-none ring-gold/40 focus:ring-2"
          placeholder="Tell us about your shop, hotel, or order."
        />
      </label>
      <button
        type="submit"
        className="mt-2 inline-flex justify-center rounded-full bg-forest px-8 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-cinnamon"
      >
        Send message
      </button>
    </form>
  );
}
