import Image from "next/image";
import Link from "next/link";

export default function Logo({
  light = false,
  compact = false,
}: {
  light?: boolean;
  compact?: boolean;
}) {
  const forest = "#233D32";
  const gold = "#C49A52";

  if (compact) {
    return (
      <Link
        href="/"
        aria-label="Sewwandi Products"
        className="group flex items-center"
      >
        <Image
          src="/sewwandi-logo.png"
          alt="Sewwandi Products"
          width={1527}
          height={676}
          className="h-10 w-auto sm:h-12"
          priority
        />
      </Link>
    );
  }

  return (
    <Link href="/" className="group flex items-center gap-3">
      <svg
        viewBox="0 0 48 48"
        className="h-11 w-11 shrink-0"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="24" fill={light ? "transparent" : forest} />
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke={light ? gold : "#F5F0E6"}
          strokeWidth="1.4"
        />
        <path
          d="M24 12c1.8 4.6 2.4 8.2 1.6 12.4-1.4 7.2-6.8 10.6-6.8 10.6s.4-5.6 3.2-9.4c1.6-2.2 3.6-3.6 5.6-4.2-1.2 3.4-.6 7.2 1.4 10.4 1.4 2.2 3.6 4 3.6 4s-1.8-8.4-4.2-13.8C27.2 17.2 25.6 14.2 24 12Z"
          fill={gold}
        />
      </svg>
      <span className="leading-none">
        <span
          className={`block font-serif text-[1.35rem] font-semibold tracking-[0.04em] ${
            light ? "text-parchment" : "text-ink"
          }`}
        >
          Sewwandi
        </span>
        {!compact ? (
          <span
            className={`mt-1 block text-[0.62rem] font-medium uppercase tracking-[0.28em] ${
              light ? "text-parchment/70" : "text-cinnamon"
            }`}
          >
            Products · Est. 2003
          </span>
        ) : null}
      </span>
    </Link>
  );
}
