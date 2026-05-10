"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ChevronRight, CheckCircle } from "lucide-react";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".section-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const allServices = [
  {
    title: "Princess Castle",
    category: "Bounce Castles",
    desc: "A magical pink castle fit for royalty. Perfect for little princesses and fairy-tale birthday parties.",
    img: "/WhatsApp Image 2026-05-10 at 12.11.58 AM.jpeg",
    features: ["Suitable for ages 2–12", "Indoor & outdoor", "Capacity: 8–10 kids"],
  },
  {
    title: "Dalmatian Bouncer",
    category: "Bounce Castles",
    desc: "The iconic 101 Dalmatians-themed bounce house brings fun dog-lover vibes to any party.",
    img: "/WhatsApp Image 2026-05-10 at 12.11.58 AM (1).jpeg",
    features: ["Vibrant red & white theme", "Open-top design", "Great for indoor events"],
  },
  {
    title: "Pink & White Castle",
    category: "Bounce Castles",
    desc: "An elegant pink and white castle — a classic crowd-pleaser for kids of all ages.",
    img: "/WhatsApp Image 2026-05-10 at 12.11.58 AM (2).jpeg",
    features: ["Turret design", "Easy entry", "Outdoor lawn ready"],
  },
  {
    title: "Unicorn Castle",
    category: "Bounce Castles",
    desc: "Rainbow unicorns everywhere! This magical bouncer is every child's dream come true.",
    img: "/WhatsApp Image 2026-05-10 at 12.11.59 AM.jpeg",
    features: ["Full unicorn artwork", "Purple & pink theme", "Bestseller for girls' parties"],
  },
  {
    title: "Monkey Bouncer",
    category: "Bounce Castles",
    desc: "Go wild with our fun monkey-themed bounce house — bring the jungle to your backyard!",
    img: "/WhatsApp Image 2026-05-10 at 12.11.59 AM (1).jpeg",
    features: ["Colorful theme", "Arch entrance", "Great for adventurous kids"],
  },
  {
    title: "Spider-Man Castle",
    category: "Bounce Castles",
    desc: "Your friendly neighborhood Spider-Man is here! Perfect for superhero-themed parties.",
    img: "/WhatsApp Image 2026-05-10 at 12.11.59 AM (2).jpeg",
    features: ["Full Spider-Man graphics", "Works in banquet halls", "High demand — book early"],
  },
  {
    title: "Disney Cars Combo",
    category: "Combo Slides",
    desc: "Race into fun with the Disney Cars themed combo bouncer & slide. Lightning McQueen approved!",
    img: "/WhatsApp Image 2026-05-10 at 12.12.00 AM.jpeg",
    features: ["Bounce + slide combo", "Disney Cars artwork", "Suitable for boys' parties"],
  },
  {
    title: "Bugs Bunny Bouncer",
    category: "Bounce Castles",
    desc: "Looney Tunes classic Bugs Bunny brings nostalgia and fun for kids and parents alike.",
    img: "/WhatsApp Image 2026-05-10 at 12.12.00 AM (1).jpeg",
    features: ["Cartoon character theme", "Blue & yellow colors", "Great for all ages"],
  },
  {
    title: "Dracula Castle",
    category: "Bounce Castles",
    desc: "Hotel Transylvania themed bouncer — perfect for Halloween parties or kids who love monsters!",
    img: "/WhatsApp Image 2026-05-10 at 12.12.01 AM.jpeg",
    features: ["Purple & orange theme", "Movie character artwork", "Unique & memorable"],
  },
  {
    title: "Minions Combo",
    category: "Combo Slides",
    desc: "Despicable Me Minions with a built-in slide — double the fun with everyone's favorite yellow guys!",
    img: "/WhatsApp Image 2026-05-10 at 12.12.01 AM (1).jpeg",
    features: ["Bounce + slide", "Full Minions graphics", "Available for all events"],
  },
  {
    title: "Giant Water Slide",
    category: "Water Slides",
    desc: "Beat the summer heat with our massive inflatable water slide — a refreshing splash for everyone!",
    img: "/WhatsApp Image 2026-05-10 at 12.12.01 AM (2).jpeg",
    features: ["Large capacity", "Pool at the bottom", "Perfect for summer events"],
  },
  {
    title: "Climbing Wall & Slide",
    category: "Giant Inflatables",
    desc: "A towering climbing wall with a thrilling giant slide — perfect for corporate events and school fetes.",
    img: "/WhatsApp Image 2026-05-10 at 12.12.02 AM.jpeg",
    features: ["Multi-level design", "Safe handholds", "Suitable for teens & adults"],
  },
  {
    title: "Blue Classic Castle",
    category: "Bounce Castles",
    desc: "A clean, simple blue bounce castle — versatile, durable, and great for any event theme.",
    img: "/WhatsApp Image 2026-05-10 at 12.12.02 AM (1).jpeg",
    features: ["Neutral color theme", "Indoor & outdoor", "Great for corporate events"],
  },
  {
    title: "Giant Football Dartboard",
    category: "Giant Inflatables",
    desc: "An enormous inflatable football dartboard — a unique game that gets everyone competitive and laughing.",
    img: "/WhatsApp Image 2026-05-10 at 12.12.03 AM.jpeg",
    features: ["Life-size target", "Velcro balls included", "Perfect for corporate days"],
  },
  {
    title: "Jungle Safari Combo",
    category: "Combo Slides",
    desc: "Lions, giraffes, tigers & pandas — our jungle safari combo is a wild adventure with bounce and slide.",
    img: "/WhatsApp Image 2026-05-10 at 12.12.03 AM (1).jpeg",
    features: ["Wildlife artwork", "Bounce + slide combo", "KB branded unit"],
  },
  {
    title: "White Wedding Castle",
    category: "Bounce Castles",
    desc: "Elegant all-white castle — sophisticated and clean for weddings, mehndi events, or upscale parties.",
    img: "/WhatsApp Image 2026-05-10 at 12.12.04 AM.jpeg",
    features: ["All-white design", "KB branded", "Perfect for weddings & upscale events"],
  },
];

const categories = ["All", "Bounce Castles", "Combo Slides", "Water Slides", "Giant Inflatables"];

export default function ServicesContent() {
  useScrollReveal();

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/WhatsApp Image 2026-05-10 at 12.12.02 AM.jpeg"
            alt="Services hero"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-king-dark" />
        </div>
        <div className="relative z-10 text-center px-4 pt-28 pb-16 max-w-4xl mx-auto">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase block mb-4">
            What We Offer
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6">
            Our <span className="text-gold-gradient">Services</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            16 unique inflatables across 4 categories — we have the perfect setup
            for every event, every age, and every budget.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 bg-king-card border-y border-king-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Choose Your Inflatable", desc: "Browse our full collection and pick the perfect unit for your event theme." },
              { step: "02", title: "Call to Book", desc: "Call 0321-9555528 to confirm availability and get a quote for your date." },
              { step: "03", title: "We Deliver & Setup", desc: "Our team arrives on time, sets up everything safely, and returns to collect." },
            ].map((s) => (
              <div key={s.step} className="flex items-start gap-5 section-reveal">
                <span className="text-5xl font-extrabold text-gold/20 leading-none">{s.step}</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL SERVICES GRID ── */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16 section-reveal">
          <h2 className="text-4xl font-extrabold mb-4">
            Full <span className="text-gold-gradient">Collection</span>
          </h2>
          <div className="gold-divider w-24 mx-auto mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            All inflatables are CE-certified, regularly sanitized, and available for delivery across Lahore.
          </p>
        </div>

        {/* Category Labels */}
        {categories.slice(1).map((cat) => {
          const items = allServices.filter((s) => s.category === cat);
          return (
            <div key={cat} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-gold font-bold text-xl">{cat}</span>
                <div className="flex-1 h-px bg-king-border" />
                <span className="text-gray-600 text-sm">{items.length} units</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((s, i) => (
                  <div
                    key={s.title}
                    className="group bg-king-card rounded-2xl overflow-hidden border border-king-border hover:border-gold/50 transition-all duration-500 section-reveal"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={s.img}
                        alt={s.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-gold text-king-dark text-xs font-bold px-3 py-1 rounded-full">
                          {s.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-base mb-2 group-hover:text-gold transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed mb-4">{s.desc}</p>
                      <ul className="space-y-1.5">
                        {s.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-xs text-gray-400">
                            <CheckCircle size={12} className="text-gold shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-4 text-center border-t border-king-border bg-king-card">
        <h2 className="text-3xl font-extrabold mb-4">
          Found Your Perfect <span className="text-gold-gradient">Inflatable?</span>
        </h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Call us now to check availability, get pricing, and reserve your date.
          We book up fast — don&apos;t miss out!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:03219555528"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-king-dark font-bold px-8 py-4 rounded-full transition-all duration-300 text-base shadow-lg shadow-gold/20"
          >
            <Phone size={18} /> Call: 0321-9555528
          </a>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-king-dark px-8 py-4 rounded-full font-semibold transition-all duration-300 text-base"
          >
            View Gallery <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
