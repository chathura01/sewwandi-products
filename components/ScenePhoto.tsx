import Image from "next/image";

export default function ScenePhoto({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  position = "object-center",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  position?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-forest/5 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={`object-cover ${position}`}
        sizes={sizes}
      />
    </div>
  );
}
