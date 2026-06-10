"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Star, Shield, Truck, Heart, Phone, ChevronRight } from "lucide-react";
import FitImage from "@/components/FitImage";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".section-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const values = [
  {
    icon: Shield,
    title: "Safety First",
    desc: "All our inflatables are CE-certified and regularly inspected to meet the highest safety standards.",
  },
  {
    icon: Star,
    title: "Premium Quality",
    desc: "We invest in top-quality décor, fresh flowers and commercial-grade inflatables built to impress.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    desc: "On-time delivery, professional setup, and hassle-free takedown — we handle everything.",
  },
  {
    icon: Heart,
    title: "Customer Delight",
    desc: "Our goal is simple: make your event magical and leave your guests with unforgettable memories.",
  },
];

export default function AboutContent() {
  useScrollReveal();

  return (
    <>
      {/* ── HERO (light split) ── */}
      <section className="relative bg-cream overflow-hidden">
        <div className="absolute -top-24 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(200,162,75,0.16) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 cream-texture opacity-50 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-slide-right">
              <span className="text-gold-dark text-sm font-semibold tracking-widest uppercase block mb-4">Our Story</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-ink leading-[1.1]">
                About <span className="text-gold-gradient">King Balloon</span>
              </h1>
              <p className="text-ink-mute text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                More than a rental company — we are creators of joy, architects of celebration,
                and the team behind countless smiling faces across Lahore.
              </p>
            </div>
            <div className="relative animate-fade-in">
              <div className="relative aspect-[5/4] rounded-[2rem] overflow-hidden shadow-lift ring-1 ring-king-border bg-white p-2">
                <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden bg-cream-deep">
                  <FitImage
                    src="/WhatsApp Image 2026-06-02 at 6.38.22 PM.jpeg"
                    alt="King Balloon gold and black luxury event setup Lahore"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    zoom={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="section-reveal">
            <span className="text-gold-dark text-sm font-semibold tracking-widest uppercase">Who We Are</span>
            <h2 className="text-4xl font-extrabold mt-3 mb-6 text-ink">
              Born from a Passion for <span className="text-gold-gradient">Celebration</span>
            </h2>
            <div className="space-y-5 text-ink-mute leading-relaxed text-[15px]">
              <p>
                King Balloon was founded with one simple mission: to bring premium-quality event
                decoration and inflatable fun to celebrations across Lahore. What started as a small
                fleet of bounce castles has grown into one of the most recognized names in event
                styling in the city.
              </p>
              <p>
                Over the years, we have decorated hundreds of birthday parties, bridal showers,
                corporate events, and family gatherings. Our work spans elegant black-and-gold glam
                backdrops, dreamy pastel themes, themed character setups, water slides, and
                oversized party games.
              </p>
              <p>
                Every setup carries the <strong className="text-ink">KB crown</strong> — our promise of
                quality, creativity, and care. We don&apos;t just decorate venues; we craft experiences
                that families remember for years to come.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 section-reveal">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-soft bg-cream-deep">
              <FitImage src="/WhatsApp Image 2026-06-02 at 6.38.31 PM.jpeg" alt="Rose gold balloon garland birthday setup" sizes="25vw" zoom={false} />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden mt-8 shadow-soft bg-cream-deep">
              <FitImage src="/WhatsApp Image 2026-06-02 at 6.38.06 PM.jpeg" alt="Pink unicorn garden birthday setup" sizes="25vw" zoom={false} />
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-soft bg-cream-deep">
              <FitImage src="/WhatsApp Image 2026-06-02 at 6.37.40 PM.jpeg" alt="Lion King themed first birthday stage" sizes="25vw" zoom={false} />
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden mt-4 shadow-soft bg-cream-deep">
              <FitImage src="/WhatsApp Image 2026-06-02 at 6.37.47 PM.jpeg" alt="Giant inflatable water slide rental Lahore" sizes="25vw" zoom={false} />
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 bg-cream-deep border-y border-king-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 section-reveal">
            <span className="text-gold-dark text-sm font-semibold tracking-widest uppercase">Our Principles</span>
            <h2 className="text-4xl font-extrabold mt-3 mb-4 text-ink">
              What Sets Us <span className="text-gold-gradient">Apart</span>
            </h2>
            <div className="gold-divider w-24 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-8 border border-king-border hover:border-gold/40 transition-all duration-500 text-center section-reveal shadow-soft hover:shadow-lift hover:-translate-y-1"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/12 border border-gold/25 flex items-center justify-center mx-auto mb-5">
                  <v.icon size={26} className="text-gold-dark" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-ink">{v.title}</h3>
                <p className="text-ink-mute text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNEY ── */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16 section-reveal">
          <span className="text-gold-dark text-sm font-semibold tracking-widest uppercase">Our Journey</span>
          <h2 className="text-4xl font-extrabold mt-3 text-ink">
            Growing <span className="text-gold-gradient">Stronger</span> Every Year
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 section-reveal">
          {[
            { year: "2014", event: "Company founded with 3 inflatables" },
            { year: "2017", event: "Expanded to 10+ themed units" },
            { year: "2020", event: "Launched décor & floral services" },
            { year: "2024", event: "500+ events & still growing" },
          ].map((m) => (
            <div key={m.year} className="text-center border border-king-border rounded-2xl p-6 bg-white shadow-soft">
              <p className="text-3xl font-extrabold text-gold-gradient mb-3">{m.year}</p>
              <p className="text-ink-mute text-sm leading-relaxed">{m.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-4 text-center border-t border-king-border bg-cream-deep">
        <h2 className="text-3xl font-extrabold mb-4 text-ink">
          Ready to Celebrate with <span className="text-gold-gradient">King Balloon?</span>
        </h2>
        <p className="text-ink-mute mb-8 max-w-xl mx-auto">
          Explore our full range of services or message us directly to plan your perfect event.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-ink font-bold px-7 py-3 rounded-full transition-all duration-300 shadow-gold"
          >
            Our Services <ChevronRight size={16} />
          </Link>
          <a
            href="https://wa.me/923159555528?text=Hello%20King%20Balloon!%20I%20want%20to%20book%20your%20services." target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-ink/15 text-ink hover:bg-ink hover:text-white px-7 py-3 rounded-full font-semibold transition-all duration-300"
          >
            <Phone size={16} /> 0315-9555528
          </a>
        </div>
      </section>
    </>
  );
}
