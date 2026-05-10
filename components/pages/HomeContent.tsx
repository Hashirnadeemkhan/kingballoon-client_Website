"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ChevronRight, Phone, CheckCircle } from "lucide-react";

const heroImages = [
  "/WhatsApp Image 2026-05-10 at 12.11.59 AM.jpeg",
  "/WhatsApp Image 2026-05-10 at 12.12.01 AM (1).jpeg",
  "/WhatsApp Image 2026-05-10 at 12.12.02 AM.jpeg",
  "/WhatsApp Image 2026-05-10 at 12.11.59 AM (2).jpeg",
];

const services = [
  {
    title: "Themed Bounce Castles",
    desc: "From unicorns and princesses to Spider-Man and Minions — we have the perfect theme for every child's dream party.",
    img: "/WhatsApp Image 2026-05-10 at 12.11.59 AM.jpeg",
  },
  {
    title: "Combo Slides",
    desc: "Bounce AND slide! Our combo units pack double the fun into one amazing inflatable experience.",
    img: "/WhatsApp Image 2026-05-10 at 12.12.01 AM (1).jpeg",
  },
  {
    title: "Water Slides",
    desc: "Beat the heat with our giant inflatable water slides — perfect for summer events and pool parties.",
    img: "/WhatsApp Image 2026-05-10 at 12.12.01 AM (2).jpeg",
  },
  {
    title: "Giant Inflatables",
    desc: "Climbing walls, dartboards, and obstacle courses — large-format inflatables for corporate and school events.",
    img: "/WhatsApp Image 2026-05-10 at 12.12.02 AM.jpeg",
  },
];

const stats = [
  { value: "500+", label: "Events Completed" },
  { value: "15+", label: "Inflatable Designs" },
  { value: "5★", label: "Customer Rating" },
  { value: "10+", label: "Years Experience" },
];

const gallery = [
  "/WhatsApp Image 2026-05-10 at 12.11.58 AM.jpeg",
  "/WhatsApp Image 2026-05-10 at 12.11.58 AM (1).jpeg",
  "/WhatsApp Image 2026-05-10 at 12.12.00 AM.jpeg",
  "/WhatsApp Image 2026-05-10 at 12.12.03 AM (1).jpeg",
  "/WhatsApp Image 2026-05-10 at 12.12.04 AM.jpeg",
  "/WhatsApp Image 2026-05-10 at 12.12.03 AM.jpeg",
];

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".section-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function HomeContent() {
  const [heroIdx, setHeroIdx] = useState(0);
  useScrollReveal();

  useEffect(() => {
    const t = setInterval(() => setHeroIdx((i) => (i + 1) % heroImages.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {heroImages.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === heroIdx ? 1 : 0 }}
          >
            <Image
              src={src}
              alt="King Balloon inflatable bounce castle rental Lahore"
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90 z-10" />

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto pt-24">
          <div className="inline-flex items-center gap-2 border border-gold/50 bg-gold/10 text-gold text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase backdrop-blur-sm animate-fade-in">
            <Star size={12} fill="currentColor" />
            Pakistan&apos;s Premier Inflatable Rentals
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold leading-tight mb-6 animate-slide-up">
            Make Every Party{" "}
            <span className="text-gold-shimmer block">Legendary</span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in">
            King Balloon brings premium inflatable bounce castles, water slides &
            giant games to your doorstep — creating memories that last a lifetime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a
              href="tel:03219555528"
              className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-king-dark font-bold px-8 py-4 rounded-full transition-all duration-300 text-base shadow-xl shadow-gold/30 hover:scale-105"
            >
              <Phone size={18} />
              Call to Book — 0321-9555528
            </a>
            <Link
              href="/gallery"
              className="flex items-center justify-center gap-2 border border-white/30 hover:border-gold text-white hover:text-gold px-8 py-4 rounded-full transition-all duration-300 text-base backdrop-blur-sm"
            >
              View Our Gallery
              <ChevronRight size={18} />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-gray-400">
            {["Safe & Certified", "Same-Day Delivery", "Professional Setup"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <CheckCircle size={15} className="text-gold" />
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, i) => (
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
      <section className="py-16 bg-king-card border-y border-king-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center section-reveal">
                <p className="text-4xl font-extrabold text-gold-gradient mb-2">{s.value}</p>
                <p className="text-gray-400 text-sm tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16 section-reveal">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">What We Offer</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-4">
            Our <span className="text-gold-gradient">Services</span>
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative bg-king-card rounded-2xl overflow-hidden border border-king-border hover:border-gold/50 transition-all duration-500 section-reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-king-card via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-white mb-2 group-hover:text-gold transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-king-dark px-7 py-3 rounded-full font-semibold transition-all duration-300 text-sm tracking-wide"
          >
            View All Services <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── GALLERY TEASER ── */}
      <section className="py-24 bg-king-card border-y border-king-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 section-reveal">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">Our Work</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-4">
              A Glimpse of the <span className="text-gold-gradient">Fun</span>
            </h2>
            <div className="gold-divider w-24 mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((src, i) => (
              <div
                key={src}
                className="relative overflow-hidden rounded-xl aspect-square group section-reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <Image
                  src={src}
                  alt={`King Balloon inflatable gallery photo ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity text-sm tracking-widest uppercase">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-king-dark font-bold px-7 py-3 rounded-full transition-all duration-300 text-sm tracking-wide"
            >
              Full Gallery <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="section-reveal">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">Why Choose Us</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-6">
              The <span className="text-gold-gradient">Royal</span> Experience
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              With years of experience in the inflatable rental industry, King Balloon
              is trusted by hundreds of families, schools, and corporate clients across
              Pakistan. Every inflatable is sanitized, safety-certified, and delivered
              with professional setup.
            </p>
            <ul className="space-y-4">
              {[
                "Huge variety — 15+ themed inflatables to choose from",
                "Clean, safety-certified & CE-marked equipment",
                "Professional delivery, setup & takedown",
                "Affordable packages for all budgets",
                "Available 7 days a week, across Lahore",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckCircle size={18} className="text-gold mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="tel:03219555528"
              className="inline-flex items-center gap-2 mt-10 bg-gold hover:bg-gold-light text-king-dark font-bold px-7 py-3 rounded-full transition-all duration-300 text-sm"
            >
              <Phone size={16} /> Call Now: 0321-9555528
            </a>
          </div>

          <div className="relative section-reveal">
            <div className="relative h-96 rounded-2xl overflow-hidden border border-king-border">
              <Image
                src="/WhatsApp Image 2026-05-10 at 12.12.03 AM (1).jpeg"
                alt="King Balloon jungle safari inflatable bounce castle"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-king-dark/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-king-card border border-gold/40 rounded-2xl p-5 shadow-xl">
              <p className="text-3xl font-extrabold text-gold-gradient">500+</p>
              <p className="text-gray-400 text-sm mt-1">Happy Events</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/WhatsApp Image 2026-05-10 at 12.11.59 AM (2).jpeg"
            alt="King Balloon event setup"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Ready to Make Your Event <span className="text-gold-gradient">Unforgettable?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Contact us today to check availability and get a quote for your upcoming event.
          </p>
          <a
            href="tel:03219555528"
            className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-king-dark font-extrabold px-10 py-5 rounded-full text-lg transition-all duration-300 shadow-2xl shadow-gold/30 hover:scale-105"
          >
            <Phone size={22} />
            0321-9555528
          </a>
        </div>
      </section>
    </>
  );
}
