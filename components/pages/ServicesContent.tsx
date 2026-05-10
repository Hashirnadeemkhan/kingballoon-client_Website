"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ChevronRight, CheckCircle } from "lucide-react";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".section-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const categories = [
  {
    id: "decor",
    label: "Balloon Decoration",
    tagline: "Transform any space into a stunning celebration",
    icon: "",
    services: [
      {
        title: "Blue Birthday Balloon Arch",
        desc: "Elegant blue & white balloon garland with neon 'Happy Birthday' light and gold pillar props. Perfect for boys' birthday parties.",
        img: "/unnamed.webp",
        features: ["Neon light included", "Gold pillar props", "Indoor & outdoor"],
      },
      {
        title: "Pink Shimmer Backdrop",
        desc: "Gorgeous pink sequin shimmer wall paired with a premium balloon arch. Creates the perfect photo booth corner.",
        img: "/unnamed (1).jpg",
        features: ["Sequin shimmer panel", "Custom balloon colors", "Photo-ready setup"],
      },
      {
        title: "Pink Birthday Party Setup",
        desc: "Full pink party transformation — balloon arch, neon name light, and elegant gold props. Girls' parties made magical.",
        img: "/unnamed (2).jpg",
        features: ["Custom name on neon", "Full setup service", "Venue styling included"],
      },
      {
        title: "Minnie Mouse Balloon Arch",
        desc: "Iconic red, black & white Minnie Mouse balloon arch with 'Happy Birthday' banner — a classic girls' party theme.",
        img: "/unnamed (3).jpg",
        features: ["Full character theme", "Table setup optional", "Outdoor arch stand"],
      },
      {
        title: "Spider-Man Balloon Arch",
        desc: "Vibrant green, purple & red Spider-Man themed balloon arch — perfect for boys' superhero parties.",
        img: "/unnamed (4).jpg",
        features: ["Character balloon art", "Custom backdrop", "Great for ages 3–10"],
      },
      {
        title: "Pink Outdoor Birthday Setup",
        desc: "Dreamy outdoor birthday party setup with large balloon garland, neon signage and pink aesthetic decor.",
        img: "/unnamed (5).jpg",
        features: ["Outdoor-ready setup", "Weather-proof balloons", "Full site dressing"],
      },
      {
        title: "Floral Daisy Balloon Arch",
        desc: "Soft pastel balloon garland with oversized daisy flowers — elegant and chic for garden parties.",
        img: "/unnamed (7).jpg",
        features: ["Pastel color palette", "Oversized floral accents", "Garden events"],
      },
      {
        title: "Purple Glam Backdrop",
        desc: "Purple and pink balloon arch with shimmering backdrop — ideal for birthdays and bridal showers.",
        img: "/unnamed (8).jpg",
        features: ["Luxury shimmer backdrop", "Full balloon styling", "Custom text banner"],
      },
      {
        title: "Boss Baby Party Setup",
        desc: "Blue and white Boss Baby themed birthday arch with Happy Birthday banner.",
        img: "/unnamed (9).jpg",
        features: ["Full Boss Baby theme", "Balloon arch included", "Table dressing optional"],
      },
      {
        title: "Blue Neon Ceiling Decor",
        desc: "Dramatic blue balloon ceiling installation with neon Happy Birthday centerpiece for indoor hall events.",
        img: "/unnamed (10).jpg",
        features: ["Ceiling balloon install", "Neon centerpiece", "Hall events only"],
      },
    ],
  },
  {
    id: "inflatables",
    label: "Inflatable Rentals",
    tagline: "16+ themed units — delivered, setup & collected",
    icon: "",
    services: [
      {
        title: "Princess Castle",
        desc: "Magical pink castle for little princesses. CE-certified, safe and squeaky clean.",
        img: "/WhatsApp Image 2026-05-10 at 12.11.58 AM.jpeg",
        features: ["Ages 2–12", "Indoor & outdoor", "8–10 kids capacity"],
      },
      {
        title: "Dalmatian Bouncer",
        desc: "101 Dalmatians themed bounce house — cheerful, colorful and great for all events.",
        img: "/WhatsApp Image 2026-05-10 at 12.11.58 AM (1).jpeg",
        features: ["Open-top design", "Red & white theme", "Great indoors"],
      },
      {
        title: "Pink & White Castle",
        desc: "Elegant pink and white turret castle — a timeless classic for kids' parties.",
        img: "/WhatsApp Image 2026-05-10 at 12.11.58 AM (2).jpeg",
        features: ["Turret design", "Outdoor lawn ready", "Easy entry ramp"],
      },
      {
        title: "Unicorn Castle",
        desc: "Rainbow unicorn artwork — every girl's dream bounce castle!",
        img: "/WhatsApp Image 2026-05-10 at 12.11.59 AM.jpeg",
        features: ["Full unicorn graphics", "Pink & purple theme", "Bestseller"],
      },
      {
        title: "Monkey Bouncer",
        desc: "Fun monkey arch entrance — bring the jungle adventure to your party.",
        img: "/WhatsApp Image 2026-05-10 at 12.11.59 AM (1).jpeg",
        features: ["Arch entrance", "Colorful theme", "Kids love it"],
      },
      {
        title: "Spider-Man Castle",
        desc: "Superhero bounce castle with full Spider-Man graphics. Works in banquet halls.",
        img: "/WhatsApp Image 2026-05-10 at 12.11.59 AM (2).jpeg",
        features: ["Spider-Man graphics", "Works in banquet halls", "Book early"],
      },
      {
        title: "Disney Cars Combo",
        desc: "Lightning McQueen themed bounce + slide combo. Race into the fun!",
        img: "/WhatsApp Image 2026-05-10 at 12.12.00 AM.jpeg",
        features: ["Bounce + slide", "Disney Cars art", "Boys' favourite"],
      },
      {
        title: "Bugs Bunny Bouncer",
        desc: "Looney Tunes nostalgia — Bugs Bunny themed castle loved by all ages.",
        img: "/WhatsApp Image 2026-05-10 at 12.12.00 AM (1).jpeg",
        features: ["Classic cartoon theme", "Blue & yellow", "All ages"],
      },
      {
        title: "Dracula Castle",
        desc: "Hotel Transylvania themed bouncer — spooky fun for monster-loving kids.",
        img: "/WhatsApp Image 2026-05-10 at 12.12.01 AM.jpeg",
        features: ["Purple & orange theme", "Movie characters", "Unique & memorable"],
      },
      {
        title: "Minions Combo Slide",
        desc: "Minions with a built-in slide — double the fun!",
        img: "/WhatsApp Image 2026-05-10 at 12.12.01 AM (1).jpeg",
        features: ["Bounce + slide", "Full Minions graphics", "Always in demand"],
      },
      {
        title: "Giant Water Slide",
        desc: "Massive inflatable water slide with pool at the bottom. Summer fun sorted!",
        img: "/WhatsApp Image 2026-05-10 at 12.12.01 AM (2).jpeg",
        features: ["Pool at bottom", "Large capacity", "Summer events"],
      },
      {
        title: "Climbing Wall & Slide",
        desc: "Towering climbing wall with giant slide — perfect for teens and corporate events.",
        img: "/WhatsApp Image 2026-05-10 at 12.12.02 AM.jpeg",
        features: ["Multi-level", "Safe handholds", "Teens & adults"],
      },
      {
        title: "Blue Classic Castle",
        desc: "Simple blue castle — versatile and great for any event theme.",
        img: "/WhatsApp Image 2026-05-10 at 12.12.02 AM (1).jpeg",
        features: ["Neutral colors", "Corporate events", "Indoor & outdoor"],
      },
      {
        title: "Football Dartboard",
        desc: "Giant inflatable football dartboard — competitive fun for everyone!",
        img: "/WhatsApp Image 2026-05-10 at 12.12.03 AM.jpeg",
        features: ["Life-size target", "Velcro balls", "Corporate events"],
      },
      {
        title: "Jungle Safari Combo",
        desc: "Lions, tigers, giraffes & pandas — wild adventure with bounce and slide.",
        img: "/WhatsApp Image 2026-05-10 at 12.12.03 AM (1).jpeg",
        features: ["Wildlife artwork", "Bounce + slide", "KB branded"],
      },
      {
        title: "White Wedding Castle",
        desc: "Elegant all-white castle for weddings and upscale events.",
        img: "/WhatsApp Image 2026-05-10 at 12.12.04 AM.jpeg",
        features: ["All-white design", "KB branded", "Weddings & events"],
      },
    ],
  },
  {
    id: "floral",
    label: "Floral & Gift Packages",
    tagline: "Beautiful flowers, balloon bouquets & curated gifts",
    icon: "",
    services: [
      {
        title: "Valentine's Balloon Bouquet",
        desc: "Romantic dark balloon arrangement with red roses, heart foil balloons, teddy bear and gift packages.",
        img: "/2025-02-05.jpg",
        features: ["Foil heart balloons", "Fresh red roses", "Teddy & chocolates"],
      },
      {
        title: "Heart Balloon & Rose Combo",
        desc: "Gold and black heart foil balloons with stunning red rose arrangement and premium gift boxes.",
        img: "/unnamed (6).jpg",
        features: ["Heart foil balloons", "Red rose arrangement", "Luxury gift wrapping"],
      },
      {
        title: "Fresh Red Rose Bouquet",
        desc: "Luxurious hand-tied fresh red rose bouquet in premium packaging — timeless and always appreciated.",
        img: "/unnamed (11).jpg",
        features: ["Fresh-cut roses", "Premium wrapping", "Same-day available"],
      },
      {
        title: "Flower Arrangements",
        desc: "Wide variety of artificial and fresh flowers for decoration, gifting and events — available at our store.",
        img: "/unnamed.jpg",
        features: ["Fresh & artificial", "Event decoration", "Walk-in or order"],
      },
      {
        title: "Floral Display Arrangements",
        desc: "Curated floral display arrangements for events and venues. Custom colors and styles available.",
        img: "/unnamed (12).jpg",
        features: ["Custom arrangements", "Event styling", "Multiple styles"],
      },
    ],
  },
  {
    id: "bridal",
    label: "Bridal & Special Events",
    tagline: "Making your most important moments extraordinary",
    icon: "",
    services: [
      {
        title: "Bride to Be Setup",
        desc: "Beautiful pink and gold 'Bride to Be' balloon setup with balloon arch, confetti balloons and elegant styling — perfect for bridal showers and bachelorette parties.",
        img: "/unnamed (13).jpg",
        features: ["Custom bride signage", "Pink & gold theme", "Photo-ready setup"],
      },
    ],
  },
];

const process = [
  { step: "01", title: "Consult & Plan", desc: "Tell us your theme, date, budget and venue. We suggest the best options." },
  { step: "02", title: "Get a Quote", desc: "We give you a transparent, no-hidden-cost quote within hours." },
  { step: "03", title: "We Deliver & Setup", desc: "Our team arrives on time, sets everything up, and cleans up after." },
];

export default function ServicesContent() {
  useScrollReveal();

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/unnamed.webp"
            alt="King Balloon event decoration services Lahore"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-king-dark" />
        </div>
        <div className="relative z-10 text-center px-4 pt-28 pb-16 max-w-4xl mx-auto">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase block mb-4">Complete Event Solutions</span>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-5">
            Our <span className="text-gold-gradient">Services</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Balloon decoration, inflatable rentals, floral arrangements & bridal setups —
            all in one place, delivered across Lahore.
          </p>
          {/* Quick nav */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="text-xs font-semibold px-4 py-2 rounded-full border border-white/20 text-gray-300 hover:border-gold hover:text-gold transition-all duration-200 backdrop-blur-sm"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-14 bg-king-card border-y border-king-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((s, i) => (
              <div key={s.step} className="flex items-start gap-5 section-reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <span className="text-5xl font-extrabold text-gold/20 leading-none shrink-0">{s.step}</span>
                <div>
                  <h3 className="font-bold text-base text-white mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL CATEGORIES ── */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        {categories.map((cat) => (
          <div key={cat.id} id={cat.id} className="mb-20 scroll-mt-24">
            {/* Category Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10 section-reveal">
              <div>
                <h2 className="text-3xl font-extrabold text-white">{cat.label}</h2>
                <p className="text-gray-500 text-sm mt-1">{cat.tagline}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <div className="h-px w-16 bg-king-border hidden sm:block" />
                <span className="text-gold text-xs font-bold border border-gold/30 px-3 py-1 rounded-full whitespace-nowrap">
                  {cat.services.length} available
                </span>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {cat.services.map((s, i) => (
                <div
                  key={s.title}
                  className="group bg-king-card rounded-2xl overflow-hidden border border-king-border hover:border-gold/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gold/5 section-reveal"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-king-card/90 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-sm text-white mb-2 group-hover:text-gold transition-colors leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4">{s.desc}</p>
                    <ul className="space-y-1.5">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-[11px] text-gray-500">
                          <CheckCircle size={11} className="text-gold shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-4 text-center border-t border-king-border bg-king-card">
        <h2 className="text-3xl font-extrabold mb-4">
          Found What You&apos;re <span className="text-gold-gradient">Looking For?</span>
        </h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto text-sm">
          Call us now to check availability and get a custom quote. We book up fast — don&apos;t miss your date!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:03159555528"
            className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-king-dark font-bold px-8 py-4 rounded-full transition-all duration-300 text-base shadow-lg shadow-gold/20"
          >
            <Phone size={18} /> 0315-9555528
          </a>
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center gap-2 border border-gold text-gold hover:bg-gold hover:text-king-dark px-8 py-4 rounded-full font-semibold transition-all duration-300 text-base"
          >
            View Gallery <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
