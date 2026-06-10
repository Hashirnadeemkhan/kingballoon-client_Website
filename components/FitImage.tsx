import Image from "next/image";

/**
 * Shows an image in FULL (no cropping) using object-contain, with a soft
 * blurred copy of the same image filling the frame behind it so there are
 * no empty letterbox bars. Works for any source aspect ratio inside a
 * fixed-size, position:relative parent.
 */
export default function FitImage({
  src,
  alt,
  sizes,
  priority = false,
  zoom = true,
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  zoom?: boolean;
}) {
  return (
    <>
      {/* blurred backdrop — same image, cover, so the frame is never empty */}
      <Image
        src={src}
        alt=""
        aria-hidden
        fill
        sizes={sizes}
        className="object-cover scale-110 blur-2xl opacity-60"
      />
      {/* sharp, fully-visible image */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-contain ${zoom ? "transition-transform duration-700 group-hover:scale-105" : ""}`}
      />
    </>
  );
}
