export default function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="border-b border-forest/10 bg-parchment">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold-deep">
          {eyebrow}
        </p>
        <div className="gold-rule mt-4" />
        <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] text-ink md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{intro}</p>
      </div>
    </section>
  );
}
