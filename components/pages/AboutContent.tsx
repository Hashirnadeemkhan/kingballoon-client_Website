"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Shield, Truck, Heart, Phone, ChevronRight } from "lucide-react";

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
    desc: "We invest in top-quality, commercial-grade inflatables that are built to last and impress.",
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
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/WhatsApp Image 2026-05-10 at 12.12.03 AM (1).jpeg"
            alt="King Balloon inflatable rental company Lahore — About Us"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-king-dark" />
        </div>
        <div className="relative z-10 text-center px-4 pt-28 pb-16 max-w-4xl mx-auto">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase block mb-4">Our Story</span>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6">
            About <span className="text-gold-gradient">King Balloon</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            More than a rental company — we are creators of joy, architects of adventure,
            and the team behind countless smiling faces across Pakistan.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="section-reveal">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">Who We Are</span>
            <h2 className="text-4xl font-extrabold mt-3 mb-6">
              Born from a Passion for <span className="text-gold-gradient">Celebration</span>
            </h2>
            <div className="space-y-5 text-gray-400 leading-relaxed text-[15px]">
              <p>
                King Balloon was founded with one simple mission: to bring premium-quality
                inflatable fun to events across Pakistan. What started as a small fleet of
                bounce castles has grown into one of the most recognized names in inflatable
                rentals in Lahore.
              </p>
              <p>
                Over the years, we have served hundreds of birthday parties, school fetes,
                corporate events, and family gatherings. Our diverse collection spans classic
                princess castles to action-themed bouncers, water slides, climbing walls, and
                oversized party games.
              </p>
              <p>
                Every inflatable in our fleet carries the <strong className="text-white">KB crown</strong> — our
                promise of quality, cleanliness, and fun. We don&apos;t just rent out equipment;
                we craft experiences that families remember for years to come.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 section-reveal">
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image src="/WhatsApp Image 2026-05-10 at 12.11.59 AM.jpeg" alt="Unicorn bounce castle rental Lahore" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden mt-8">
              <Image src="/WhatsApp Image 2026-05-10 at 12.12.04 AM.jpeg" alt="White wedding bounce castle" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <Image src="/WhatsApp Image 2026-05-10 at 12.12.00 AM.jpeg" alt="Disney Cars inflatable Lahore" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden mt-4">
              <Image src="/WhatsApp Image 2026-05-10 at 12.12.01 AM (2).jpeg" alt="Water slide rental Lahore" fill className="object-cover" sizes="25vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-king-card border-y border-king-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 section-reveal">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">Our Principles</span>
            <h2 className="text-4xl font-extrabold mt-3 mb-4">
              What Sets Us <span className="text-gold-gradient">Apart</span>
            </h2>
            <div className="gold-divider w-24 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="bg-king-dark rounded-2xl p-8 border border-king-border hover:border-gold/40 transition-all duration-500 text-center section-reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-5">
                  <v.icon size={26} className="text-gold" />
                </div>
                <h3 className="font-bold text-lg mb-3">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16 section-reveal">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">Our Journey</span>
          <h2 className="text-4xl font-extrabold mt-3">
            Growing <span className="text-gold-gradient">Stronger</span> Every Year
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 section-reveal">
          {[
            { year: "2014", event: "Company founded with 3 inflatables" },
            { year: "2017", event: "Expanded to 10+ themed units" },
            { year: "2020", event: "Launched water slide range" },
            { year: "2024", event: "500+ events & still growing" },
          ].map((m) => (
            <div key={m.year} className="text-center border border-king-border rounded-2xl p-6 bg-king-card">
              <p className="text-3xl font-extrabold text-gold-gradient mb-3">{m.year}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{m.event}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 text-center border-t border-king-border">
        <h2 className="text-3xl font-extrabold mb-4">
          Ready to Party with <span className="text-gold-gradient">King Balloon?</span>
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Explore our full range of inflatables or call us directly to plan your perfect event.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-king-dark font-bold px-7 py-3 rounded-full transition-all duration-300"
          >
            Our Services <ChevronRight size={16} />
          </Link>
          <a
            href="tel:03219555528"
            className="inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-king-dark px-7 py-3 rounded-full font-semibold transition-all duration-300"
          >
            <Phone size={16} /> 0321-9555528
          </a>
        </div>
      </section>
    </>
  );
}
