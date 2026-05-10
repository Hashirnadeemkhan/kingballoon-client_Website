"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Play, Pause, Phone } from "lucide-react";

const allImages = [
  // Balloon Decoration
  { src: "/unnamed.webp",                                       title: "Blue Birthday Balloon Arch",   cat: "Balloon Decoration" },
  { src: "/unnamed (1).jpg",                                    title: "Pink Shimmer Backdrop",        cat: "Balloon Decoration" },
  { src: "/unnamed (2).jpg",                                    title: "Pink Birthday Party Setup",    cat: "Balloon Decoration" },
  { src: "/unnamed (3).jpg",                                    title: "Minnie Mouse Balloon Arch",    cat: "Balloon Decoration" },
  { src: "/unnamed (4).jpg",                                    title: "Spider-Man Balloon Arch",      cat: "Balloon Decoration" },
  { src: "/unnamed (5).jpg",                                    title: "Pink Outdoor Birthday Setup",  cat: "Balloon Decoration" },
  { src: "/unnamed (7).jpg",                                    title: "Floral Daisy Balloon Arch",    cat: "Balloon Decoration" },
  { src: "/unnamed (8).jpg",                                    title: "Purple Glam Backdrop",         cat: "Balloon Decoration" },
  { src: "/unnamed (9).jpg",                                    title: "Boss Baby Party Setup",        cat: "Balloon Decoration" },
  { src: "/unnamed (10).jpg",                                   title: "Blue Neon Ceiling Decor",      cat: "Balloon Decoration" },
  // Inflatable Rentals
  { src: "/WhatsApp Image 2026-05-10 at 12.11.58 AM.jpeg",      title: "Princess Castle",              cat: "Inflatable Rentals" },
  { src: "/WhatsApp Image 2026-05-10 at 12.11.58 AM (1).jpeg",  title: "Dalmatian Bouncer",            cat: "Inflatable Rentals" },
  { src: "/WhatsApp Image 2026-05-10 at 12.11.58 AM (2).jpeg",  title: "Pink & White Castle",          cat: "Inflatable Rentals" },
  { src: "/WhatsApp Image 2026-05-10 at 12.11.59 AM.jpeg",      title: "Unicorn Castle",               cat: "Inflatable Rentals" },
  { src: "/WhatsApp Image 2026-05-10 at 12.11.59 AM (1).jpeg",  title: "Monkey Bouncer",               cat: "Inflatable Rentals" },
  { src: "/WhatsApp Image 2026-05-10 at 12.11.59 AM (2).jpeg",  title: "Spider-Man Castle",            cat: "Inflatable Rentals" },
  { src: "/WhatsApp Image 2026-05-10 at 12.12.00 AM.jpeg",      title: "Disney Cars Combo",            cat: "Inflatable Rentals" },
  { src: "/WhatsApp Image 2026-05-10 at 12.12.00 AM (1).jpeg",  title: "Bugs Bunny Bouncer",           cat: "Inflatable Rentals" },
  { src: "/WhatsApp Image 2026-05-10 at 12.12.01 AM.jpeg",      title: "Dracula Castle",               cat: "Inflatable Rentals" },
  { src: "/WhatsApp Image 2026-05-10 at 12.12.01 AM (1).jpeg",  title: "Minions Combo Slide",          cat: "Inflatable Rentals" },
  { src: "/WhatsApp Image 2026-05-10 at 12.12.01 AM (2).jpeg",  title: "Giant Water Slide",            cat: "Inflatable Rentals" },
  { src: "/WhatsApp Image 2026-05-10 at 12.12.02 AM.jpeg",      title: "Climbing Wall & Slide",        cat: "Inflatable Rentals" },
  { src: "/WhatsApp Image 2026-05-10 at 12.12.02 AM (1).jpeg",  title: "Blue Classic Castle",          cat: "Inflatable Rentals" },
  { src: "/WhatsApp Image 2026-05-10 at 12.12.03 AM.jpeg",      title: "Football Dartboard",           cat: "Inflatable Rentals" },
  { src: "/WhatsApp Image 2026-05-10 at 12.12.03 AM (1).jpeg",  title: "Jungle Safari Combo",          cat: "Inflatable Rentals" },
  { src: "/WhatsApp Image 2026-05-10 at 12.12.04 AM.jpeg",      title: "White Wedding Castle",         cat: "Inflatable Rentals" },
  // Floral & Gifts
  { src: "/2025-02-05.jpg",                                     title: "Valentine's Balloon Bouquet",  cat: "Floral & Gifts" },
  { src: "/unnamed (6).jpg",                                    title: "Heart Balloon & Rose Combo",   cat: "Floral & Gifts" },
  { src: "/unnamed (11).jpg",                                   title: "Fresh Red Rose Bouquet",       cat: "Floral & Gifts" },
  { src: "/unnamed.jpg",                                        title: "Flower Shop Arrangements",     cat: "Floral & Gifts" },
  { src: "/unnamed (12).jpg",                                   title: "Floral Display",               cat: "Floral & Gifts" },
  // Bridal & Special
  { src: "/unnamed (13).jpg",                                   title: "Bride to Be Setup",            cat: "Bridal & Special" },
];

const categories = ["All", "Balloon Decoration", "Inflatable Rentals", "Floral & Gifts", "Bridal & Special"];

const slideshowPool = [
  { src: "/unnamed.webp",                                      label: "Blue Birthday Balloon Arch"   },
  { src: "/unnamed (1).jpg",                                   label: "Pink Shimmer Backdrop"        },
  { src: "/unnamed (2).jpg",                                   label: "Pink Birthday Party Setup"    },
  { src: "/unnamed (3).jpg",                                   label: "Minnie Mouse Balloon Arch"    },
  { src: "/WhatsApp Image 2026-05-10 at 12.11.59 AM.jpeg",     label: "Unicorn Bounce Castle"        },
  { src: "/unnamed (13).jpg",                                  label: "Bride to Be Setup"            },
  { src: "/unnamed (7).jpg",                                   label: "Floral Daisy Balloon Arch"    },
  { src: "/unnamed (9).jpg",                                   label: "Boss Baby Party Setup"        },
  { src: "/WhatsApp Image 2026-05-10 at 12.12.02 AM.jpeg",     label: "Giant Climbing Wall"          },
  { src: "/unnamed (5).jpg",                                   label: "Pink Outdoor Birthday Setup"  },
];

export default function GalleryContent() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [slideshowIdx, setSlideshowIdx] = useState(0);
  const [playing, setPlaying] = useState(true);

  const filtered = activeFilter === "All" ? allImages : allImages.filter((img) => img.cat === activeFilter);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setSlideshowIdx((i) => (i + 1) % slideshowPool.length), 3500);
    return () => clearInterval(t);
  }, [playing]);

  const prevSlide = useCallback(() => setSlideshowIdx((i) => (i - 1 + slideshowPool.length) % slideshowPool.length), []);
  const nextSlide = useCallback(() => setSlideshowIdx((i) => (i + 1) % slideshowPool.length), []);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setLightboxIdx((i) => i !== null ? (i + 1) % filtered.length : null);
      if (e.key === "ArrowLeft")  setLightboxIdx((i) => i !== null ? (i - 1 + filtered.length) % filtered.length : null);
      if (e.key === "Escape")     setLightboxIdx(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIdx, filtered.length]);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/unnamed (1).jpg" alt="King Balloon gallery" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-king-dark" />
        </div>
        <div className="relative z-10 text-center px-4 pt-28 pb-16 max-w-4xl mx-auto">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase block mb-4">Our Portfolio</span>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-5">
            The <span className="text-gold-gradient">Gallery</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto leading-relaxed">
            {allImages.length}+ photos across 4 categories — click any image to view full size.
          </p>
        </div>
      </section>

      {/* ── FEATURED SLIDESHOW ── */}
      <section className="relative bg-black">
        <div className="relative h-[70vh] overflow-hidden">
          {slideshowPool.map((slide, i) => (
            <div key={slide.src} className="absolute inset-0 transition-opacity duration-1000" style={{ opacity: i === slideshowIdx ? 1 : 0 }}>
              <Image src={slide.src} alt={slide.label} fill className="object-cover" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
            </div>
          ))}

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-center w-full px-4">
            <p className="text-white text-2xl font-extrabold drop-shadow-lg">{slideshowPool[slideshowIdx].label}</p>
          </div>

          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 hover:bg-gold/80 border border-white/20 flex items-center justify-center text-white transition-all">
            <ChevronLeft size={22} />
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 hover:bg-gold/80 border border-white/20 flex items-center justify-center text-white transition-all">
            <ChevronRight size={22} />
          </button>
          <button onClick={() => setPlaying((p) => !p)} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:text-gold transition-colors">
            {playing ? <Pause size={17} /> : <Play size={17} />}
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
            {slideshowPool.map((_, i) => (
              <button key={i} onClick={() => setSlideshowIdx(i)}
                className={`h-1 rounded-full transition-all duration-300 ${i === slideshowIdx ? "w-6 bg-gold" : "w-2 bg-white/30"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER GRID ── */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-8">
            Browse <span className="text-gold-gradient">All Work</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveFilter(cat); setLightboxIdx(null); }}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeFilter === cat
                    ? "bg-gold text-king-dark border-gold shadow-lg shadow-gold/20"
                    : "border-king-border text-gray-400 hover:border-gold hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="text-gray-600 text-sm mt-4">{filtered.length} photos</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filtered.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="group relative overflow-hidden rounded-xl cursor-pointer border border-king-border hover:border-gold/50 transition-all duration-500 hover:-translate-y-1"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                  <span className="text-gold text-[10px] font-bold tracking-wide mb-0.5">{img.cat}</span>
                  <p className="text-white font-semibold text-xs leading-tight">{img.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightboxIdx !== null && (
        <div className="fixed inset-0 z-50 bg-black/97 flex items-center justify-center p-4" onClick={() => setLightboxIdx(null)}>
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[75vh] rounded-2xl overflow-hidden">
              <Image
                src={filtered[lightboxIdx].src}
                alt={filtered[lightboxIdx].title}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <div className="text-center mt-4">
              <span className="text-gold text-xs font-bold tracking-widest uppercase">{filtered[lightboxIdx].cat}</span>
              <p className="text-white font-bold text-xl mt-1">{filtered[lightboxIdx].title}</p>
              <p className="text-gray-600 text-xs mt-1">{lightboxIdx + 1} / {filtered.length}</p>
            </div>
            <button onClick={() => setLightboxIdx((i) => i !== null ? (i - 1 + filtered.length) % filtered.length : null)} className="absolute left-0 top-1/3 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 hover:bg-gold/80 border border-white/20 flex items-center justify-center text-white transition-all">
              <ChevronLeft size={22} />
            </button>
            <button onClick={() => setLightboxIdx((i) => i !== null ? (i + 1) % filtered.length : null)} className="absolute right-0 top-1/3 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 hover:bg-gold/80 border border-white/20 flex items-center justify-center text-white transition-all">
              <ChevronRight size={22} />
            </button>
            <button onClick={() => setLightboxIdx(null)} className="absolute -top-5 -right-2 w-10 h-10 rounded-full bg-king-card border border-king-border flex items-center justify-center text-gray-400 hover:text-white transition-colors">
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
        <p className="text-gray-400 mb-8 max-w-lg mx-auto text-sm">
          Call us to check availability and get a custom quote for your event date.
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
