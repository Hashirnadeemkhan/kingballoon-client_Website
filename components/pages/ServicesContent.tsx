"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import FitImage from "@/components/FitImage";
import { Phone, ChevronRight, ChevronLeft, CheckCircle, X } from "lucide-react";
import { categories, categoryById, type CategoryId } from "@/components/data/portfolio";

function useScrollReveal(dep?: unknown) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".section-reveal:not(.visible)").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [dep]);
}

const process = [
  { step: "01", title: "Consult & Plan", desc: "Tell us your theme, date, budget and venue. We suggest the best options." },
  { step: "02", title: "Get a Quote", desc: "We give you a transparent, no-hidden-cost quote within hours." },
  { step: "03", title: "We Deliver & Setup", desc: "Our team arrives on time, sets everything up, and cleans up after." },
];

export default function ServicesContent() {
  const [active, setActive] = useState<CategoryId>(categories[0].id);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  useScrollReveal(active);

  // open the tab requested via ?category=… (links from Home) or #id
  useEffect(() => {
    const url = new URL(window.location.href);
    const requested = categoryById(url.searchParams.get("category") ?? url.hash.slice(1));
    if (requested) setActive(requested.id);
  }, []);

  const selectCategory = (id: CategoryId) => {
    setActive(id);
    setLightboxIdx(null);
    const url = new URL(window.location.href);
    url.searchParams.set("category", id);
    url.hash = "";
    window.history.replaceState(null, "", url.toString());
  };

  const cat = categoryById(active)!;
  const photos = cat.photos;

  const prev = useCallback(() => setLightboxIdx((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null)), [photos.length]);
  const next = useCallback(() => setLightboxIdx((i) => (i !== null ? (i + 1) % photos.length : null)), [photos.length]);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setLightboxIdx(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIdx, next, prev]);

  return (
    <>
      {/* ── HERO (light) ── */}
      <section className="relative bg-cream overflow-hidden">
        <div className="absolute -top-24 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(200,162,75,0.16) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 cream-texture opacity-50 pointer-events-none" />
        <div className="relative z-10 text-center px-4 pt-32 pb-16 max-w-4xl mx-auto">
          <span className="text-gold-dark text-sm font-semibold tracking-widest uppercase block mb-4">Complete Event Solutions</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 text-ink">
            Our <span className="text-gold-gradient">Services</span>
          </h1>
          <p className="text-ink-mute text-lg max-w-2xl mx-auto leading-relaxed">
            Décor, jumping castles, water slides, complete event management &amp; floral gifts —
            all in one place, delivered across Lahore.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS (black band) ── */}
      <section className="on-dark py-14 bg-ink">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((s, i) => (
              <div key={s.step} className="flex items-start gap-5 section-reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <span className="text-5xl font-extrabold text-gold/40 leading-none shrink-0">{s.step}</span>
                <div>
                  <h3 className="font-bold text-base text-white mb-1">{s.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE TABS + SELECTED SERVICE ── */}
      <section id="services" className="py-16 px-4 max-w-7xl mx-auto scroll-mt-24">
        {/* tabs */}
        <div role="tablist" aria-label="Services" className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={active === c.id}
              onClick={() => selectCategory(c.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                active === c.id
                  ? "bg-ink text-white border-ink shadow-soft"
                  : "border-king-border bg-white text-ink-soft hover:border-gold hover:text-gold-dark"
              }`}
            >
              {c.label}
              <span className={`ml-2 text-[11px] ${active === c.id ? "text-gold" : "text-ink-mute"}`}>{c.photos.length}</span>
            </button>
          ))}
        </div>

        {/* category header */}
        <div key={`head-${cat.id}`} className="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-12 items-end mb-10">
          <div>
            <span className="text-gold-dark text-xs font-semibold tracking-widest uppercase">{cat.tagline}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mt-2 mb-3">{cat.label}</h2>
            <p className="text-ink-mute text-sm leading-relaxed max-w-2xl">{cat.desc}</p>
          </div>
          <ul className="grid grid-cols-2 gap-2.5">
            {cat.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-xs text-ink-soft bg-white border border-king-border rounded-xl px-3 py-2.5">
                <CheckCircle size={13} className="text-gold shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* only this service's photos */}
        <div key={`grid-${cat.id}`} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {photos.map((ph, i) => (
            <button
              key={`${ph.src}-${i}`}
              onClick={() => setLightboxIdx(i)}
              className="group text-left bg-white rounded-2xl overflow-hidden border border-king-border hover:border-gold/50 transition-all duration-500 hover:-translate-y-1 shadow-soft hover:shadow-lift animate-fade-in"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-cream-deep">
                <FitImage src={ph.src} alt={`${ph.title} — King Balloon ${cat.label}, Lahore`} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
              </div>
              <p className="px-4 py-3 font-semibold text-xs sm:text-sm text-ink group-hover:text-gold-dark transition-colors leading-snug">
                {ph.title}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightboxIdx !== null && (
        <div className="fixed inset-0 z-50 bg-ink/97 flex items-center justify-center p-4" onClick={() => setLightboxIdx(null)}>
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[75vh] rounded-2xl overflow-hidden">
              <Image src={photos[lightboxIdx].src} alt={photos[lightboxIdx].title} fill className="object-contain" sizes="90vw" />
            </div>
            <div className="text-center mt-4">
              <span className="text-gold text-xs font-bold tracking-widest uppercase">{cat.label}</span>
              <p className="text-white font-bold text-xl mt-1">{photos[lightboxIdx].title}</p>
              <p className="text-white/40 text-xs mt-1">{lightboxIdx + 1} / {photos.length}</p>
            </div>
            <button onClick={prev} aria-label="Previous" className="absolute left-0 top-1/3 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-gold hover:text-ink border border-white/20 flex items-center justify-center text-white transition-all">
              <ChevronLeft size={22} />
            </button>
            <button onClick={next} aria-label="Next" className="absolute right-0 top-1/3 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-gold hover:text-ink border border-white/20 flex items-center justify-center text-white transition-all">
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
          Found What You&apos;re <span className="text-gold-gradient">Looking For?</span>
        </h2>
        <p className="text-ink-mute mb-8 max-w-lg mx-auto text-sm">
          Message us now to check availability and get a custom quote. We book up fast — don&apos;t miss your date!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/923159555528?text=Hello%20King%20Balloon!%20I%20want%20to%20book%20your%20services." target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-ink font-bold px-8 py-4 rounded-full transition-all duration-300 text-base shadow-gold"
          >
            <Phone size={18} /> 0315-9555528
          </a>
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center gap-2 border border-ink/15 text-ink hover:bg-ink hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-base"
          >
            View Gallery <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
