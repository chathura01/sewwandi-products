import Image from "next/image";

export default function PackShot({
  src,
  alt,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, 40vw",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-white ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-contain p-4"
        sizes={sizes}
      />
    </div>
  );
}
