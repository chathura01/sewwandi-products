export default function PhotoCredits({ credits }: { credits: string[] }) {
  return (
    <p className="mx-auto max-w-7xl px-5 pb-12 text-xs leading-6 text-muted md:px-8">
      Photographs: {credits.join(" · ")}
    </p>
  );
}
