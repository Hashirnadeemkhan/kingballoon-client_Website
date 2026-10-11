"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Play, Pause, Phone } from "lucide-react";
import FitImage from "@/components/FitImage";
import { categories, allPhotos } from "@/components/data/portfolio";

const allImages = allPhotos;

const filters = ["All", ...categories.map((c) => c.label)];

const slideshowPool = [
  { src: "/WhatsApp Image 2026-06-02 at 6.37.40 PM.jpeg", label: "Lion King 1st Birthday Stage" },
  { src: "/portfolio/mehndi-stage-floral-frame.jpg", label: "Mehndi Stage — Floral Frame" },
  { src: "/WhatsApp Image 2026-06-02 at 6.38.38 PM.jpeg", label: "Silver Shimmer Birthday Wall" },
  { src: "/portfolio/unicorn-rainbow-stage.jpg", label: "Unicorn Rainbow Stage" },
  { src: "/WhatsApp Image 2026-06-02 at 6.37.47 PM.jpeg", label: "Giant Water Slide" },
  { src: "/WhatsApp Image 2026-06-07 at 10.22.29 PM.jpeg", label: "Princess Castle Stage Setup" },
  { src: "/portfolio/mehndi-orange-canopy.jpg", label: "Mehndi Orange Canopy" },
  { src: "/WhatsApp Image 2026-06-02 at 6.38.31 PM.jpeg", label: "Rose Gold Round Backdrop" },
  { src: "/portfolio/boss-baby-stage.jpg", label: "Boss Baby Twins Stage" },
  { src: "/WhatsApp Image 2026-05-10 at 12.11.59 AM.jpeg", label: "Unicorn Jumping Castle" },
  { src: "/WhatsApp Image 2026-06-02 at 6.38.39 PM.jpeg", label: "Blush & White Garden Arch" },
  { src: "/WhatsApp Image 2026-06-02 at 6.37.42 PM.jpeg", label: "Grand Entrance Arch" },
];

const videos = [
  "/WhatsApp Video 2026-06-02 at 6.38.17 PM.mp4",
  "/WhatsApp Video 2026-06-02 at 6.38.20 PM.mp4",
  "/WhatsApp Video 2026-06-02 at 6.38.21 PM.mp4",
];

// varied bento tile sizes
function bentoSpan(i: number) {
  const m = i % 7;
  if (m === 0) return "col-span-2 row-span-2";
  if (m === 3) return "sm:row-span-2";
  if (m === 5) return "sm:col-span-2";
  return "";
}

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
      {/* ── HERO (light) ── */}
      <section className="relative bg-cream overflow-hidden">
        <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(200,162,75,0.16) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 cream-texture opacity-50 pointer-events-none" />
        <div className="relative z-10 text-center px-4 pt-32 pb-14 max-w-4xl mx-auto">
          <span className="text-gold-dark text-sm font-semibold tracking-widest uppercase block mb-4">Our Portfolio</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 text-ink">
            The <span className="text-gold-gradient">Gallery</span>
          </h1>
          <p className="text-ink-mute text-lg max-w-xl mx-auto leading-relaxed">
            {allImages.length}+ real setups &amp; event videos — click any image to view it full size.
          </p>
        </div>
      </section>

      {/* ── FEATURED SLIDESHOW ── */}
      <section className="relative bg-ink">
        <div className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
          {slideshowPool.map((slide, i) => (
            <div key={slide.src} className="absolute inset-0 transition-opacity duration-1000" style={{ opacity: i === slideshowIdx ? 1 : 0 }}>
              <FitImage src={slide.src} alt={slide.label} sizes="100vw" priority={i === 0} zoom={false} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/20" />
            </div>
          ))}

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-center w-full px-4">
            <p className="text-white text-2xl font-extrabold drop-shadow-lg">{slideshowPool[slideshowIdx].label}</p>
          </div>

          <button onClick={prevSlide} aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/40 hover:bg-gold border border-white/20 flex items-center justify-center text-white hover:text-ink transition-all">
            <ChevronLeft size={22} />
          </button>
          <button onClick={nextSlide} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/40 hover:bg-gold border border-white/20 flex items-center justify-center text-white hover:text-ink transition-all">
            <ChevronRight size={22} />
          </button>
          <button onClick={() => setPlaying((p) => !p)} aria-label="Play/Pause" className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white hover:text-gold transition-colors">
            {playing ? <Pause size={17} /> : <Play size={17} />}
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
            {slideshowPool.map((_, i) => (
              <button key={i} onClick={() => setSlideshowIdx(i)} aria-label={`Slide ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-300 ${i === slideshowIdx ? "w-6 bg-gold" : "w-2 bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER + BENTO GRID ── */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-8 text-ink">
            Browse <span className="text-gold-gradient">All Work</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveFilter(cat); setLightboxIdx(null); }}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeFilter === cat
                    ? "bg-ink text-white border-ink shadow-soft"
                    : "border-king-border bg-white text-ink-soft hover:border-gold hover:text-gold-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="text-ink-mute text-sm mt-4">{filtered.length} photos</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[150px] sm:auto-rows-[165px] grid-flow-dense gap-3 sm:gap-4">
          {filtered.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer border border-king-border hover:border-gold/50 transition-all duration-500 shadow-soft hover:shadow-lift bg-cream-deep ${bentoSpan(i)}`}
              onClick={() => setLightboxIdx(i)}
            >
              <FitImage
                src={img.src}
                alt={img.title}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                zoom={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <span className="text-gold text-[10px] font-bold tracking-wide mb-0.5">{img.cat}</span>
                <p className="text-white font-semibold text-xs leading-tight">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VIDEO REELS (black band) ── */}
      <section className="on-dark bg-ink py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">Event Reels</span>
            <h2 className="text-4xl font-extrabold mt-3 mb-4 text-white">
              See It in <span className="text-gold-gradient">Motion</span>
            </h2>
            <div className="gold-divider w-24 mx-auto" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {videos.map((src) => (
              <div key={src} className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[9/16] bg-black shadow-lift">
                <video src={src} className="w-full h-full object-cover" autoPlay muted loop playsInline preload="metadata" />
                <div className="absolute inset-0 ring-1 ring-inset ring-gold/15 rounded-2xl pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightboxIdx !== null && (
        <div className="fixed inset-0 z-50 bg-ink/97 flex items-center justify-center p-4" onClick={() => setLightboxIdx(null)}>
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
              <p className="text-white/40 text-xs mt-1">{lightboxIdx + 1} / {filtered.length}</p>
            </div>
            <button onClick={() => setLightboxIdx((i) => i !== null ? (i - 1 + filtered.length) % filtered.length : null)} aria-label="Previous" className="absolute left-0 top-1/3 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-gold hover:text-ink border border-white/20 flex items-center justify-center text-white transition-all">
              <ChevronLeft size={22} />
            </button>
            <button onClick={() => setLightboxIdx((i) => i !== null ? (i + 1) % filtered.length : null)} aria-label="Next" className="absolute right-0 top-1/3 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-gold hover:text-ink border border-white/20 flex items-center justify-center text-white transition-all">
              <ChevronRight size={22} />
            </button>
            <button onClick={() => setLightboxIdx(null)} aria-label="Close" className="absolute -top-5 -right-2 w-10 h-10 rounded-full bg-white border border-king-border flex items-center justify-center text-ink-soft hover:text-ink transition-colors">
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      {/* ── CTA ── */}
      <section className="py-16 px-4 text-center border-t border-king-border bg-cream-deep">
        <h2 className="text-3xl font-extrabold mb-4 text-ink">
          See Something You <span className="text-gold-gradient">Love?</span>
        </h2>
        <p className="text-ink-mute mb-8 max-w-lg mx-auto text-sm">
          Message us to check availability and get a custom quote for your event date.
        </p>
        <a
          href="https://wa.me/923159555528?text=Hello%20King%20Balloon!%20I%20want%20to%20book%20your%20services." target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-ink font-bold px-8 py-4 rounded-full transition-all duration-300 text-base shadow-gold hover:scale-105"
        >
          <Phone size={18} /> WhatsApp: 0315-9555528
        </a>
      </section>
    </>
  );
}
