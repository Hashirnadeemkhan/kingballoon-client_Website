"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Play, Pause, Phone } from "lucide-react";

const images = [
  { src: "/WhatsApp Image 2026-05-10 at 12.11.58 AM.jpeg", title: "Princess Castle", cat: "Bounce Castles" },
  { src: "/WhatsApp Image 2026-05-10 at 12.11.58 AM (1).jpeg", title: "Dalmatian Bouncer", cat: "Bounce Castles" },
  { src: "/WhatsApp Image 2026-05-10 at 12.11.58 AM (2).jpeg", title: "Pink & White Castle", cat: "Bounce Castles" },
  { src: "/WhatsApp Image 2026-05-10 at 12.11.59 AM.jpeg", title: "Unicorn Castle", cat: "Bounce Castles" },
  { src: "/WhatsApp Image 2026-05-10 at 12.11.59 AM (1).jpeg", title: "Monkey Bouncer", cat: "Bounce Castles" },
  { src: "/WhatsApp Image 2026-05-10 at 12.11.59 AM (2).jpeg", title: "Spider-Man Castle", cat: "Bounce Castles" },
  { src: "/WhatsApp Image 2026-05-10 at 12.12.00 AM.jpeg", title: "Disney Cars Combo", cat: "Combo Slides" },
  { src: "/WhatsApp Image 2026-05-10 at 12.12.00 AM (1).jpeg", title: "Bugs Bunny Bouncer", cat: "Bounce Castles" },
  { src: "/WhatsApp Image 2026-05-10 at 12.12.01 AM.jpeg", title: "Dracula Castle", cat: "Bounce Castles" },
  { src: "/WhatsApp Image 2026-05-10 at 12.12.01 AM (1).jpeg", title: "Minions Combo Slide", cat: "Combo Slides" },
  { src: "/WhatsApp Image 2026-05-10 at 12.12.01 AM (2).jpeg", title: "Giant Water Slide", cat: "Water Slides" },
  { src: "/WhatsApp Image 2026-05-10 at 12.12.02 AM.jpeg", title: "Climbing Wall & Slide", cat: "Giant Inflatables" },
  { src: "/WhatsApp Image 2026-05-10 at 12.12.02 AM (1).jpeg", title: "Blue Classic Castle", cat: "Bounce Castles" },
  { src: "/WhatsApp Image 2026-05-10 at 12.12.03 AM.jpeg", title: "Football Dartboard", cat: "Giant Inflatables" },
  { src: "/WhatsApp Image 2026-05-10 at 12.12.03 AM (1).jpeg", title: "Jungle Safari Combo", cat: "Combo Slides" },
  { src: "/WhatsApp Image 2026-05-10 at 12.12.04 AM.jpeg", title: "White Wedding Castle", cat: "Bounce Castles" },
];

const categories = ["All", "Bounce Castles", "Combo Slides", "Water Slides", "Giant Inflatables"];

export default function GalleryContent() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [slideshowIdx, setSlideshowIdx] = useState(0);
  const [playing, setPlaying] = useState(true);

  const filtered = activeFilter === "All" ? images : images.filter((i) => i.cat === activeFilter);

  // Auto-advance slideshow
  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setSlideshowIdx((i) => (i + 1) % images.length), 3500);
    return () => clearInterval(t);
  }, [playing]);

  const prevSlide = useCallback(() => setSlideshowIdx((i) => (i - 1 + images.length) % images.length), []);
  const nextSlide = useCallback(() => setSlideshowIdx((i) => (i + 1) % images.length), []);

  // Lightbox keyboard nav
  useEffect(() => {
    if (lightboxIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setLightboxIdx((i) => i !== null ? (i + 1) % filtered.length : null);
      if (e.key === "ArrowLeft") setLightboxIdx((i) => i !== null ? (i - 1 + filtered.length) % filtered.length : null);
      if (e.key === "Escape") setLightboxIdx(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIdx, filtered.length]);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/WhatsApp Image 2026-05-10 at 12.12.01 AM (1).jpeg"
            alt="Gallery hero"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-king-dark" />
        </div>
        <div className="relative z-10 text-center px-4 pt-28 pb-16 max-w-4xl mx-auto">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase block mb-4">
            Our Collection
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6">
            The <span className="text-gold-gradient">Gallery</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto leading-relaxed">
            Explore our full fleet of 16 premium inflatables — click any image to view up close.
          </p>
        </div>
      </section>

      {/* ── FEATURED SLIDESHOW ── */}
      <section className="relative bg-black">
        <div className="relative h-[70vh] overflow-hidden">
          {images.map((img, i) => (
            <div
              key={img.src}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ opacity: i === slideshowIdx ? 1 : 0 }}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
            </div>
          ))}

          {/* Slide info */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-center">
            <span className="inline-block bg-gold text-king-dark text-xs font-bold px-3 py-1 rounded-full mb-3">
              {images[slideshowIdx].cat}
            </span>
            <p className="text-white text-2xl font-extrabold">{images[slideshowIdx].title}</p>
          </div>

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 hover:bg-gold/80 border border-white/20 flex items-center justify-center text-white transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 hover:bg-gold/80 border border-white/20 flex items-center justify-center text-white transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
          <button
            onClick={() => setPlaying((p) => !p)}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:text-gold transition-colors"
          >
            {playing ? <Pause size={18} /> : <Play size={18} />}
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideshowIdx(i)}
                className={`h-1 rounded-full transition-all duration-300 ${i === slideshowIdx ? "w-6 bg-gold" : "w-2 bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER GRID ── */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-8">
            Browse <span className="text-gold-gradient">All Inflatables</span>
          </h2>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeFilter === cat
                    ? "bg-gold text-king-dark border-gold"
                    : "border-king-border text-gray-400 hover:border-gold hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((img, i) => (
            <div
              key={img.src}
              className="group relative overflow-hidden rounded-xl cursor-pointer border border-king-border hover:border-gold/50 transition-all duration-500"
              onClick={() => setLightboxIdx(i)}
            >
              <div className="relative aspect-square">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-gold text-xs font-semibold">{img.cat}</span>
                  <p className="text-white font-bold text-sm mt-1">{img.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-8">
          Showing {filtered.length} of {images.length} inflatables
        </p>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightboxIdx(null)}
        >
          <div
            className="relative max-w-5xl w-full mx-4 max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[80vh] rounded-2xl overflow-hidden">
              <Image
                src={filtered[lightboxIdx].src}
                alt={filtered[lightboxIdx].title}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <div className="text-center mt-4">
              <span className="text-gold text-xs font-semibold">{filtered[lightboxIdx].cat}</span>
              <p className="text-white font-bold text-xl mt-1">{filtered[lightboxIdx].title}</p>
            </div>

            {/* Nav arrows */}
            <button
              onClick={() => setLightboxIdx((i) => i !== null ? (i - 1 + filtered.length) % filtered.length : null)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 hover:bg-gold/80 border border-white/20 flex items-center justify-center text-white transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => setLightboxIdx((i) => i !== null ? (i + 1) % filtered.length : null)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 hover:bg-gold/80 border border-white/20 flex items-center justify-center text-white transition-all"
            >
              <ChevronRight size={24} />
            </button>

            {/* Close */}
            <button
              onClick={() => setLightboxIdx(null)}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-king-card border border-king-border flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      {/* ── CTA ── */}
      <section className="py-16 px-4 text-center border-t border-king-border bg-king-card">
        <h2 className="text-3xl font-extrabold mb-4">
          See Something You <span className="text-gold-gradient">Love?</span>
        </h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Call us to check availability for your event date and get an instant quote.
        </p>
        <a
          href="tel:03159555528"
          className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-king-dark font-bold px-8 py-4 rounded-full transition-all duration-300 text-base shadow-lg shadow-gold/20 hover:scale-105"
        >
          <Phone size={18} /> Book Now: 0315-9555528
        </a>
      </section>
    </>
  );
}
