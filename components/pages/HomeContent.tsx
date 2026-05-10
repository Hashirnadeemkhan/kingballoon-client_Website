"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ChevronRight, Phone, CheckCircle, Sparkles } from "lucide-react";

const heroSlides = [
  { src: "/unnamed.webp",                                        label: "Birthday Balloon Setups" },
  { src: "/unnamed (1).jpg",                                     label: "Shimmer Backdrop Decor" },
  { src: "/WhatsApp Image 2026-05-10 at 12.11.59 AM.jpeg",       label: "Inflatable Bounce Castles" },
  { src: "/unnamed (13).jpg",                                    label: "Bridal & Special Events" },
  { src: "/WhatsApp Image 2026-05-10 at 12.12.02 AM.jpeg",       label: "Giant Climbing Walls" },
  { src: "/unnamed (7).jpg",                                     label: "Outdoor Flower Arches" },
];

const services = [
  {
    title: "Balloon Decoration",
    desc: "Stunning birthday backdrops, themed arches, neon signs & full party setups that make every event Instagram-worthy.",
    img: "/unnamed.webp",
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
    img: "/unnamed (6).jpg",
    tag: "Same-Day Delivery",
  },
  {
    title: "Bridal & Special Events",
    desc: "Bride to Be setups, engagement decoration, and elegant event styling for weddings and mehndi functions.",
    img: "/unnamed (13).jpg",
    tag: "Premium Service",
  },
  {
    title: "Combo & Water Slides",
    desc: "Bounce and slide in one unit! Plus giant water slides perfect for summer events and pool parties.",
    img: "/WhatsApp Image 2026-05-10 at 12.12.01 AM (2).jpeg",
    tag: "Summer Fun",
  },
  {
    title: "Giant Inflatables",
    desc: "Climbing walls, obstacle courses & inflatable football dartboards — perfect for corporate and school events.",
    img: "/WhatsApp Image 2026-05-10 at 12.12.02 AM.jpeg",
    tag: "Corporate Events",
  },
];

const stats = [
  { value: "500+", label: "Events Done" },
  { value: "30+", label: "Services Offered" },
  { value: "5★",  label: "Google Rating" },
  { value: "10+", label: "Years Experience" },
];

const galleryPreview = [
  { src: "/unnamed.webp",                                        alt: "Blue birthday balloon arch setup" },
  { src: "/unnamed (2).jpg",                                     alt: "Pink birthday party balloon decor" },
  { src: "/unnamed (3).jpg",                                     alt: "Minnie Mouse balloon arch" },
  { src: "/WhatsApp Image 2026-05-10 at 12.11.59 AM.jpeg",       alt: "Unicorn bounce castle" },
  { src: "/unnamed (13).jpg",                                    alt: "Bride to Be balloon setup" },
  { src: "/WhatsApp Image 2026-05-10 at 12.12.01 AM (1).jpeg",   alt: "Minions combo inflatable" },
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
    const t = setInterval(() => setHeroIdx((i) => (i + 1) % heroSlides.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-1200"
            style={{ opacity: i === heroIdx ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={`King Balloon — ${slide.label}`}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        ))}

        {/* Layered gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/90 z-10" />

        {/* Decorative radial glow */}
        <div className="absolute inset-0 z-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, transparent 70%)" }} />

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto pt-24 pb-16">
          <div className="inline-flex items-center gap-2 border border-gold/50 bg-gold/10 text-gold text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase backdrop-blur-sm animate-fade-in">
            <Sparkles size={12} />
            Lahore&apos;s Complete Event Decoration Company
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-5 animate-slide-up">
            Every Celebration,{" "}
            <span className="text-gold-shimmer">Perfectly Decorated</span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-3 leading-relaxed animate-fade-in">
            From balloon arches &amp; bounce castles to flower bouquets &amp; bridal setups —
            King Balloon makes your moments magical.
          </p>

          {/* Slide label */}
          <div className="mb-8 h-6">
            <span className="text-gold text-sm font-medium tracking-widest uppercase opacity-80">
              {heroSlides[heroIdx].label}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a
              href="tel:03159555528"
              className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-king-dark font-bold px-8 py-4 rounded-full transition-all duration-300 text-base shadow-xl shadow-gold/30 hover:scale-105"
            >
              <Phone size={18} />
              Book Now — 0315-9555528
            </a>
            <Link
              href="/services"
              className="flex items-center justify-center gap-2 border border-white/40 hover:border-gold text-white hover:text-gold px-8 py-4 rounded-full transition-all duration-300 text-base backdrop-blur-sm"
            >
              Explore Services <ChevronRight size={18} />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-gray-400">
            {["Balloon Decoration", "Bounce Castle Rental", "Floral & Gift Packages", "Bridal Setups"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <CheckCircle size={14} className="text-gold" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIdx(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === heroIdx ? "w-8 bg-gold" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-14 bg-king-card border-y border-king-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center section-reveal">
                <p className="text-4xl font-extrabold text-gold-gradient mb-1">{s.value}</p>
                <p className="text-gray-400 text-sm tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16 section-reveal">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">What We Offer</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-4">
            Our <span className="text-gold-gradient">Services</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            From intimate birthday setups to large corporate events — we handle decoration, entertainment, and gifting all under one roof.
          </p>
          <div className="gold-divider w-24 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative bg-king-card rounded-2xl overflow-hidden border border-king-border hover:border-gold/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/5 section-reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Tag badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-gold text-king-dark text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide">
                  {s.tag}
                </span>
              </div>

              <div className="relative h-56 overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-king-card/90 via-king-card/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-white mb-2 group-hover:text-gold transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-gold text-xs font-semibold tracking-wide hover:gap-2 transition-all duration-200"
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
            className="inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-king-dark px-8 py-3.5 rounded-full font-semibold transition-all duration-300 text-sm tracking-wide"
          >
            View All Services <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── DECORATION SHOWCASE ── */}
      <section className="py-24 bg-king-card border-y border-king-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="section-reveal order-2 lg:order-1">
              <span className="text-gold text-sm font-semibold tracking-widest uppercase">Balloon Art</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-6">
                Setups That <span className="text-gold-gradient">Stop the Scroll</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6 text-[15px]">
                Our balloon decoration team creates breathtaking party setups — from neon-lit
                birthday backdrops to elaborate themed arches. Every setup is custom-designed
                to match your theme, color palette, and venue.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Birthday backdrops with neon lights & balloon arches",
                  "Themed setups — Minnie Mouse, Boss Baby, Bride to Be & more",
                  "Shimmer walls, sequin panels & photo booth areas",
                  "Outdoor garden arches with fresh flowers",
                  "Full venue transformation services",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                    <Star size={14} className="text-gold mt-1 shrink-0" fill="currentColor" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="tel:03159555528"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-king-dark font-bold px-7 py-3 rounded-full transition-all duration-300 text-sm"
              >
                <Phone size={15} /> Get a Custom Quote
              </a>
            </div>

            {/* Image collage */}
            <div className="order-1 lg:order-2 section-reveal">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image src="/unnamed.webp" alt="Blue birthday balloon arch setup" fill className="object-cover" sizes="25vw" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden mt-6">
                  <Image src="/unnamed (1).jpg" alt="Pink shimmer backdrop with balloon arch" fill className="object-cover" sizes="25vw" />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image src="/unnamed (3).jpg" alt="Minnie Mouse balloon arch" fill className="object-cover" sizes="25vw" />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden mt-3">
                  <Image src="/unnamed (13).jpg" alt="Bride to Be balloon setup" fill className="object-cover" sizes="25vw" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY TEASER ── */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-14 section-reveal">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">Our Work</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-4">
            A Glimpse of the <span className="text-gold-gradient">Magic</span>
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {galleryPreview.map((img, i) => (
            <div
              key={img.src}
              className="relative overflow-hidden rounded-xl aspect-square group section-reveal border border-king-border hover:border-gold/40 transition-all duration-500"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-xs font-medium tracking-wide">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-king-dark font-bold px-8 py-3.5 rounded-full transition-all duration-300 text-sm tracking-wide shadow-lg shadow-gold/20"
          >
            View Full Gallery <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-king-card border-y border-king-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative section-reveal">
              <div className="relative h-[480px] rounded-2xl overflow-hidden border border-king-border">
                <Image
                  src="/unnamed (2).jpg"
                  alt="King Balloon birthday party decoration setup"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-king-dark/70 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-king-dark border border-gold/40 rounded-2xl p-5 shadow-2xl">
                <p className="text-3xl font-extrabold text-gold-gradient">500+</p>
                <p className="text-gray-400 text-sm mt-0.5">Happy Clients</p>
              </div>
              <div className="absolute -top-5 -left-5 bg-king-dark border border-gold/40 rounded-2xl p-4 shadow-2xl">
                <p className="text-2xl font-extrabold text-gold-gradient">10+</p>
                <p className="text-gray-400 text-xs mt-0.5">Years in Business</p>
              </div>
            </div>

            <div className="section-reveal">
              <span className="text-gold text-sm font-semibold tracking-widest uppercase">Why King Balloon</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-6">
                The <span className="text-gold-gradient">Royal</span> Difference
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8 text-[15px]">
                Lahore&apos;s most trusted event decoration company. We combine creative balloon art,
                fresh floral arrangements, and premium inflatables — all in one place, delivered with
                professionalism and care.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "One-Stop Shop",     desc: "Decor, inflatables & flowers — all from one team" },
                  { title: "Custom Designs",    desc: "Every setup is uniquely designed for your event" },
                  { title: "On-Time Delivery",  desc: "We arrive, setup, and clean up — you just enjoy" },
                  { title: "Safe Equipment",    desc: "CE-certified inflatables, clean & well-maintained" },
                  { title: "All Budgets",        desc: "Affordable packages without compromising quality" },
                  { title: "7 Days a Week",     desc: "Available daily 9 AM – 9 PM across Lahore" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl bg-king-dark border border-king-border">
                    <CheckCircle size={16} className="text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-white text-sm font-semibold">{item.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="tel:03159555528"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-king-dark font-bold px-8 py-4 rounded-full transition-all duration-300 text-sm shadow-lg shadow-gold/20"
              >
                <Phone size={16} /> Call Now: 0315-9555528
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/unnamed (5).jpg"
            alt="King Balloon party decoration setup"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(212,175,55,0.12) 0%, transparent 70%)" }} />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase block mb-4">Ready to Celebrate?</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Let&apos;s Make Your Event <span className="text-gold-gradient">Unforgettable</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            Call us today to discuss your event, check availability, and get a custom quote.
            We serve Lahore 7 days a week.
          </p>
          <a
            href="tel:03159555528"
            className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-king-dark font-extrabold px-10 py-5 rounded-full text-lg transition-all duration-300 shadow-2xl shadow-gold/30 hover:scale-105"
          >
            <Phone size={22} />
            0315-9555528
          </a>
        </div>
      </section>
    </>
  );
}
