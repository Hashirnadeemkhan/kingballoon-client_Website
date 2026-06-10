"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ChevronRight, Phone, CheckCircle, Sparkles, Crown } from "lucide-react";
import FitImage from "@/components/FitImage";

const heroSlides = [
  { src: "/WhatsApp Image 2026-06-02 at 6.38.35 PM.jpeg", label: "Black & Silver Luxe Setup" },
  { src: "/WhatsApp Image 2026-06-02 at 6.38.22 PM.jpeg", label: "Gold & Black Glam Backdrop" },
  { src: "/WhatsApp Image 2026-06-02 at 6.38.31 PM.jpeg", label: "Rose Gold Balloon Garland" },
  { src: "/WhatsApp Image 2026-06-02 at 6.38.06 PM.jpeg", label: "Pink Unicorn Garden Theme" },
  { src: "/WhatsApp Image 2026-06-02 at 6.38.40 PM.jpeg", label: "Silver Shimmer Backdrop" },
  { src: "/WhatsApp Image 2026-06-02 at 6.37.42 PM.jpeg", label: "Grand Entrance Arch" },
];

const services = [
  {
    title: "Balloon Décor & Backdrops",
    desc: "Elegant balloon garlands, shimmer walls, neon signs & custom themed backdrops that make every event picture-perfect.",
    img: "/WhatsApp Image 2026-06-02 at 6.38.31 PM.jpeg",
    tag: "Most Popular",
  },
  {
    title: "Themed Bounce Castles",
    desc: "16+ characters — unicorns, Minions, Spider-Man & more. Safe, CE-certified inflatables delivered to your door.",
    img: "/WhatsApp Image 2026-05-10 at 12.11.59 AM.jpeg",
    tag: "Kids Favourite",
  },
  {
    title: "Floral & Gift Packages",
    desc: "Fresh flower bouquets, balloon & rose combos, and curated gift hampers for birthdays, Eid, and Valentine's Day.",
    img: "/2025-02-05.jpg",
    tag: "Same-Day Delivery",
  },
  {
    title: "Premium Event Styling",
    desc: "Elegant cane furniture, table styling, candy carts & full venue dressing for bridal showers and upscale events.",
    img: "/third.jpeg",
    tag: "Premium",
  },
  {
    title: "Water Slides & Combos",
    desc: "Giant inflatable water slides with pools plus bounce-and-slide combos — the ultimate summer party fun.",
    img: "/WhatsApp Image 2026-06-02 at 6.37.47 PM.jpeg",
    tag: "Summer Fun",
  },
  {
    title: "Themed Sequin Walls",
    desc: "Sparkling sequin shimmer walls and character backdrops — from K-Pop to gaming themes, built for the photos.",
    img: "/WhatsApp Image 2026-06-02 at 6.38.33 PM.jpeg",
    tag: "Trending",
  },
];

const stats = [
  { value: "500+", label: "Events Done" },
  { value: "30+", label: "Services Offered" },
  { value: "5★", label: "Google Rating" },
  { value: "10+", label: "Years Experience" },
];

const galleryPreview = [
  { src: "/WhatsApp Image 2026-06-02 at 6.38.14 PM.jpeg", alt: "Unicorn & butterfly themed backdrop" },
  { src: "/WhatsApp Image 2026-06-02 at 6.37.40 PM.jpeg", alt: "Lion King first birthday stage" },
  { src: "/WhatsApp Image 2026-06-02 at 6.37.50 PM.jpeg", alt: "Under the sea themed birthday setup" },
  { src: "/WhatsApp Image 2026-06-02 at 6.38.02 PM.jpeg", alt: "Gaming theme birthday backdrop" },
  { src: "/WhatsApp Image 2026-06-02 at 6.38.33 PM.jpeg", alt: "K-Pop themed sequin wall setup" },
  { src: "/WhatsApp Image 2026-06-02 at 6.37.47 PM.jpeg", alt: "Giant inflatable water slide" },
  { src: "/WhatsApp Image 2026-06-02 at 6.38.25 PM.jpeg", alt: "Blush and white birthday arch" },
];

const videos = [
  "/WhatsApp Video 2026-06-02 at 6.38.17 PM.mp4",
  "/WhatsApp Video 2026-06-02 at 6.38.18 PM.mp4",
  "/WhatsApp Video 2026-06-02 at 6.38.20 PM.mp4",
  "/WhatsApp Video 2026-06-02 at 6.38.21 PM.mp4",
];

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".section-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function HomeContent() {
  const [heroIdx, setHeroIdx] = useState(0);
  useScrollReveal();

  useEffect(() => {
    const t = setInterval(() => setHeroIdx((i) => (i + 1) % heroSlides.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* ── HERO (split: content left, sliding images right) ── */}
      <section className="relative overflow-hidden bg-cream">
        {/* decorative gold glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(200,162,75,0.18) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(22,19,16,0.06) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 cream-texture opacity-60 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-32 pb-16 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT — content */}
            <div className="text-center lg:text-left animate-slide-right">
              <div className="inline-flex items-center gap-2 border border-gold/40 bg-gold/10 text-gold-dark text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase">
                <Sparkles size={12} />
                Lahore&apos;s Complete Event Decoration Company
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] mb-6 text-ink">
                Every Celebration,{" "}
                <span className="text-gold-gradient">Perfectly Decorated</span>
              </h1>

              <p className="text-ink-mute text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                From elegant balloon backdrops &amp; bounce castles to fresh flower bouquets &amp;
                bridal setups — King Balloon makes your moments unforgettable.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="https://wa.me/923159555528?text=Hello%20King%20Balloon!%20I%20want%20to%20book%20your%20services." target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-ink font-bold px-8 py-4 rounded-full transition-all duration-300 text-base shadow-gold hover:scale-105"
                >
                  <Phone size={18} />
                  WhatsApp to Book
                </a>
                <Link
                  href="/services"
                  className="flex items-center justify-center gap-2 border border-ink/15 hover:border-gold text-ink hover:text-gold-dark px-8 py-4 rounded-full transition-all duration-300 text-base bg-white/60"
                >
                  Explore Services <ChevronRight size={18} />
                </Link>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-ink-soft">
                {["Balloon Décor", "Bounce Castles", "Floral & Gifts", "Bridal Setups"].map((t) => (
                  <span key={t} className="flex items-center gap-2">
                    <CheckCircle size={15} className="text-gold" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT — sliding image carousel */}
            <div className="relative animate-fade-in">
              <div className="relative rounded-[2rem] overflow-hidden shadow-lift ring-1 ring-king-border bg-white p-2">
                <div className="relative rounded-[1.6rem] overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                  {/* sliding track */}
                  <div
                    className="flex h-full transition-transform duration-700 ease-out"
                    style={{ width: `${heroSlides.length * 100}%`, transform: `translateX(-${heroIdx * (100 / heroSlides.length)}%)` }}
                  >
                    {heroSlides.map((slide, i) => (
                      <div key={slide.src} className="relative h-full group" style={{ width: `${100 / heroSlides.length}%` }}>
                        <FitImage
                          src={slide.src}
                          alt={`King Balloon — ${slide.label}`}
                          priority={i === 0}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          zoom={false}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                        <div className="absolute bottom-5 left-5 right-5">
                          <span className="inline-block bg-ink/70 backdrop-blur-sm text-white text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full">
                            {slide.label}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setHeroIdx(i)}
                      aria-label={`Show slide ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === heroIdx ? "w-7 bg-gold" : "w-2 bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* floating badge */}
              <div className="absolute -top-5 -left-5 hidden sm:flex items-center gap-3 bg-white border border-king-border rounded-2xl px-4 py-3 shadow-soft">
                <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center">
                  <Crown size={20} className="text-gold-dark" />
                </div>
                <div>
                  <p className="text-ink font-extrabold text-lg leading-none">500+</p>
                  <p className="text-ink-mute text-xs mt-0.5">Events Decorated</p>
                </div>
              </div>

              {/* floating rating badge */}
              <div className="absolute -bottom-5 -right-3 hidden sm:flex items-center gap-2 bg-ink text-white rounded-2xl px-4 py-3 shadow-lift">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-gold" fill="currentColor" />)}
                </div>
                <p className="text-xs font-semibold">5.0 Rated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS (black band) ── */}
      <section className="on-dark bg-ink py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-x divide-white/10">
            {stats.map((s) => (
              <div key={s.label} className="text-center section-reveal">
                <p className="text-4xl font-extrabold text-gold-gradient mb-1">{s.value}</p>
                <p className="text-white/55 text-sm tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16 section-reveal">
          <span className="text-gold-dark text-sm font-semibold tracking-widest uppercase">What We Offer</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-4 text-ink">
            Our <span className="text-gold-gradient">Services</span>
          </h2>
          <p className="text-ink-mute max-w-xl mx-auto text-sm">
            From intimate birthday setups to large corporate events — we handle decoration, entertainment, and gifting all under one roof.
          </p>
          <div className="gold-divider w-24 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative bg-white rounded-2xl overflow-hidden border border-king-border hover:border-gold/50 transition-all duration-500 hover:-translate-y-1.5 shadow-soft hover:shadow-lift section-reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-gold text-ink text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide shadow-sm">
                  {s.tag}
                </span>
              </div>

              <div className="relative h-56 overflow-hidden bg-cream-deep">
                <FitImage
                  src={s.img}
                  alt={s.title}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-ink mb-2 group-hover:text-gold-dark transition-colors">
                  {s.title}
                </h3>
                <p className="text-ink-mute text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-gold-dark text-xs font-semibold tracking-wide hover:gap-2 transition-all duration-200"
                >
                  Learn More <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-ink/15 text-ink hover:bg-ink hover:text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 text-sm tracking-wide"
          >
            View All Services <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── DECORATION SHOWCASE ── */}
      <section className="py-24 bg-cream-deep border-y border-king-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="section-reveal order-2 lg:order-1">
              <span className="text-gold-dark text-sm font-semibold tracking-widest uppercase">Balloon Artistry</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-6 text-ink">
                Setups That <span className="text-gold-gradient">Stop the Scroll</span>
              </h2>
              <p className="text-ink-mute leading-relaxed mb-6 text-[15px]">
                Our decoration team creates breathtaking party setups — from sleek black, gold &amp;
                silver glam backdrops to dreamy pastel themes. Every setup is custom-designed to match
                your colour palette, theme, and venue.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Elegant balloon garlands, arches & ceiling installs",
                  "Custom name neon signs & themed character backdrops",
                  "Sequin shimmer walls & photo-booth corners",
                  "Outdoor garden setups with fresh flowers",
                  "Complete venue styling & furniture dressing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink-soft text-sm">
                    <Star size={14} className="text-gold mt-1 shrink-0" fill="currentColor" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/923159555528?text=Hello%20King%20Balloon!%20I%20want%20to%20book%20your%20services." target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-ink font-bold px-7 py-3 rounded-full transition-all duration-300 text-sm shadow-gold"
              >
                <Phone size={15} /> WhatsApp for a Quote
              </a>
            </div>

            {/* Image collage */}
            <div className="order-1 lg:order-2 section-reveal">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-soft bg-cream-deep">
                  <FitImage src="/WhatsApp Image 2026-06-02 at 6.38.35 PM.jpeg" alt="Black and silver luxe balloon setup" sizes="25vw" zoom={false} />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden mt-6 shadow-soft bg-cream-deep">
                  <FitImage src="/WhatsApp Image 2026-06-02 at 6.38.40 PM.jpeg" alt="Silver shimmer happy birthday backdrop" sizes="25vw" zoom={false} />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-soft bg-cream-deep">
                  <FitImage src="/WhatsApp Image 2026-06-02 at 6.38.31 PM.jpeg" alt="Rose gold balloon garland setup" sizes="25vw" zoom={false} />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden mt-3 shadow-soft bg-cream-deep">
                  <FitImage src="/WhatsApp Image 2026-06-02 at 6.38.22 PM.jpeg" alt="Gold and black glam backdrop" sizes="25vw" zoom={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED EVENT COLLAGE (4-image combo) ── */}
      <section className="py-24 px-4 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* LEFT — aesthetic 4-image collage */}
          <div className="relative section-reveal order-1 px-2 sm:px-4">
            {/* layered gold + ink frame accents */}
            <div className="absolute -inset-3 sm:-inset-5 rounded-[2.4rem] border border-gold/30 rotate-2 hidden sm:block pointer-events-none" />
            <div className="absolute -inset-3 sm:-inset-5 rounded-[2.4rem] border border-ink/10 -rotate-2 hidden sm:block pointer-events-none" />

            <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
              {/* column 1 (offset down) */}
              <div className="space-y-3 sm:space-y-4 sm:pt-12">
                <div className="group relative h-56 sm:h-72 rounded-[1.5rem] overflow-hidden shadow-lift ring-1 ring-king-border -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image src="/first.jpeg" alt="Pink themed birthday party with candy cart and kids furniture" fill className="object-cover" sizes="(max-width:1024px) 50vw, 25vw" />
                </div>
                <div className="group relative h-40 sm:h-52 rounded-[1.5rem] overflow-hidden shadow-soft ring-1 ring-king-border rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image src="/third.jpeg" alt="Elegant white cane furniture pink event styling" fill className="object-cover" sizes="(max-width:1024px) 50vw, 25vw" />
                </div>
              </div>
              {/* column 2 */}
              <div className="space-y-3 sm:space-y-4">
                <div className="group relative h-40 sm:h-52 rounded-[1.5rem] overflow-hidden shadow-soft ring-1 ring-king-border rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image src="/second.jpeg" alt="Pink unicorn garden birthday backdrop" fill className="object-cover" sizes="(max-width:1024px) 50vw, 25vw" />
                </div>
                <div className="group relative h-56 sm:h-72 rounded-[1.5rem] overflow-hidden shadow-lift ring-1 ring-king-border -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image src="/fourth.jpeg" alt="Pink draped stage with chandelier event setup" fill className="object-cover" sizes="(max-width:1024px) 50vw, 25vw" />
                </div>
              </div>
            </div>

            {/* center crown medallion tying the four together */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden sm:flex">
              <div className="w-16 h-16 rounded-full bg-cream border border-gold/40 shadow-lift flex items-center justify-center">
                <Crown size={26} className="text-gold-dark" />
              </div>
            </div>

            {/* floating label chip */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-10 bg-ink text-white text-xs font-semibold tracking-wide px-4 py-2 rounded-full shadow-lift whitespace-nowrap">
              One Theme · Fully Coordinated
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="section-reveal order-2 text-center lg:text-left">
            <span className="text-gold-dark text-sm font-semibold tracking-widest uppercase">Real Celebrations</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-6 text-ink leading-[1.1]">
              We Style the <span className="text-gold-gradient">Whole Venue</span>
            </h2>
            <p className="text-ink-mute leading-relaxed mb-7 text-[15px] max-w-xl mx-auto lg:mx-0">
              It&apos;s never just balloons. From themed backdrops and candy carts to elegant cane
              furniture, fresh florals and draped stages — King Balloon transforms your entire
              space into one coordinated, picture-perfect celebration.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-8 justify-center lg:justify-start">
              {["Themed Backdrops", "Candy Carts", "Cane Furniture", "Floral Styling", "Draped Stages", "Kids Setups"].map((t) => (
                <span key={t} className="text-xs font-semibold text-ink-soft bg-white border border-king-border rounded-full px-3.5 py-1.5">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/923159555528?text=Hello%20King%20Balloon!%20I%20want%20to%20book%20your%20services." target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-ink font-bold px-8 py-4 rounded-full transition-all duration-300 text-sm shadow-gold hover:scale-105"
              >
                <Phone size={16} /> Plan My Event
              </a>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center gap-2 border border-ink/15 text-ink hover:bg-ink hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-sm"
              >
                See More Setups <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO SHOWCASE (black band) ── */}
      <section className="on-dark bg-ink py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14 section-reveal">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">Watch Us Work</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-4 text-white">
              Our Setups in <span className="text-gold-gradient">Motion</span>
            </h2>
            <p className="text-white/55 max-w-xl mx-auto text-sm">
              A few real moments from recent King Balloon events around Lahore.
            </p>
            <div className="gold-divider w-24 mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {videos.map((src, i) => (
              <div
                key={src}
                className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[9/16] bg-black section-reveal shadow-lift"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <video
                  src={src}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-gold/15 rounded-2xl pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY TEASER ── */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-14 section-reveal">
          <span className="text-gold-dark text-sm font-semibold tracking-widest uppercase">Our Work</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-4 text-ink">
            A Glimpse of the <span className="text-gold-gradient">Magic</span>
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>

        {/* bento mosaic — varied tile sizes */}
        <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[140px] sm:auto-rows-[155px] grid-flow-dense gap-3 sm:gap-4">
          {galleryPreview.map((img, i) => {
            const spans = [
              "col-span-2 row-span-2",
              "row-span-1",
              "row-span-2",
              "row-span-1",
              "col-span-2 row-span-1",
              "row-span-2",
              "row-span-1",
            ];
            return (
              <div
                key={img.src}
                className={`relative overflow-hidden rounded-2xl group section-reveal border border-king-border hover:border-gold/40 transition-all duration-500 shadow-soft bg-cream-deep ${spans[i % spans.length]}`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <FitImage
                  src={img.src}
                  alt={img.alt}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  zoom={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-xs font-medium tracking-wide">{img.alt}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-ink font-bold px-8 py-3.5 rounded-full transition-all duration-300 text-sm tracking-wide shadow-gold"
          >
            View Full Gallery <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-cream-deep border-y border-king-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative section-reveal">
              <div className="relative h-[480px] rounded-2xl overflow-hidden border border-king-border shadow-soft bg-cream-deep">
                <FitImage
                  src="/WhatsApp Image 2026-06-02 at 6.38.39 PM.jpeg"
                  alt="King Balloon blush and white elegant birthday backdrop"
                  sizes="50vw"
                  zoom={false}
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white border border-king-border rounded-2xl p-5 shadow-lift">
                <p className="text-3xl font-extrabold text-gold-gradient">500+</p>
                <p className="text-ink-mute text-sm mt-0.5">Happy Clients</p>
              </div>
              <div className="absolute -top-5 -left-5 bg-ink rounded-2xl p-4 shadow-lift on-dark">
                <p className="text-2xl font-extrabold text-gold-gradient">10+</p>
                <p className="text-white/55 text-xs mt-0.5">Years in Business</p>
              </div>
            </div>

            <div className="section-reveal">
              <span className="text-gold-dark text-sm font-semibold tracking-widest uppercase">Why King Balloon</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-6 text-ink">
                The <span className="text-gold-gradient">Royal</span> Difference
              </h2>
              <p className="text-ink-mute leading-relaxed mb-8 text-[15px]">
                Lahore&apos;s most trusted event decoration company. We combine creative balloon art,
                fresh floral arrangements, and premium inflatables — all in one place, delivered with
                professionalism and care.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "One-Stop Shop", desc: "Décor, inflatables & flowers — all from one team" },
                  { title: "Custom Designs", desc: "Every setup is uniquely designed for your event" },
                  { title: "On-Time Delivery", desc: "We arrive, setup, and clean up — you just enjoy" },
                  { title: "Safe Equipment", desc: "CE-certified inflatables, clean & well-maintained" },
                  { title: "All Budgets", desc: "Affordable packages without compromising quality" },
                  { title: "7 Days a Week", desc: "Available daily 9 AM – 9 PM across Lahore" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-king-border">
                    <CheckCircle size={16} className="text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-ink text-sm font-semibold">{item.title}</p>
                      <p className="text-ink-mute text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/923159555528?text=Hello%20King%20Balloon!%20I%20want%20to%20book%20your%20services." target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ink hover:bg-ink-soft text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-sm shadow-soft"
              >
                <Phone size={16} /> WhatsApp: 0315-9555528
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER (black + gold) ── */}
      <section className="on-dark relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/WhatsApp Image 2026-06-02 at 6.38.22 PM.jpeg"
            alt="King Balloon gold and black event decoration setup"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/85" />
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(200,162,75,0.18) 0%, transparent 70%)" }} />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase block mb-4">Ready to Celebrate?</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white">
            Let&apos;s Make Your Event <span className="text-gold-gradient">Unforgettable</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Call us today to discuss your event, check availability, and get a custom quote.
            We serve Lahore 7 days a week.
          </p>
          <a
            href="https://wa.me/923159555528?text=Hello%20King%20Balloon!%20I%20want%20to%20book%20your%20services." target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-ink font-extrabold px-10 py-5 rounded-full text-lg transition-all duration-300 shadow-gold hover:scale-105"
          >
            <Phone size={22} />
            0315-9555528
          </a>
        </div>
      </section>
    </>
  );
}
