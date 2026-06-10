"use client";

import { useEffect } from "react";
import Link from "next/link";
import FitImage from "@/components/FitImage";
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
    label: "Balloon Décor & Backdrops",
    tagline: "Transform any space into a stunning celebration",
    services: [
      {
        title: "Gold & Black Glam Backdrop",
        desc: "Luxe chrome gold & silver balloon garland over a black sequin wall with a neon sign and mirrored gold pillars — pure elegance.",
        img: "/WhatsApp Image 2026-06-02 at 6.38.22 PM.jpeg",
        features: ["Black sequin wall", "Gold mirror pillars", "Neon name light"],
      },
      {
        title: "Black & Silver Luxe Setup",
        desc: "Sophisticated black, white & silver chrome balloon arch with a sequin backdrop and striped pedestals — perfect for milestone birthdays.",
        img: "/WhatsApp Image 2026-06-02 at 6.38.35 PM.jpeg",
        features: ["Chrome silver balloons", "Sequin backdrop", "Dessert table styling"],
      },
      {
        title: "Silver Shimmer Backdrop",
        desc: "Dazzling silver sequin shimmer wall with white & chrome balloons and a glowing 'Happy Birthday' neon centerpiece.",
        img: "/WhatsApp Image 2026-06-02 at 6.38.40 PM.jpeg",
        features: ["Sequin shimmer wall", "Neon centerpiece", "Indoor halls"],
      },
      {
        title: "Rose Gold Balloon Garland",
        desc: "Elegant white, blush & rose-gold chrome balloon arch on a round panel with fresh florals and gold accents.",
        img: "/WhatsApp Image 2026-06-02 at 6.38.31 PM.jpeg",
        features: ["Rose gold chrome", "Fresh flower accents", "Round backdrop"],
      },
      {
        title: "Blush & White Birthday Arch",
        desc: "Soft pink and white balloon garland on a round backdrop with gold script signage and a floral pedestal — chic and timeless.",
        img: "/WhatsApp Image 2026-06-02 at 6.38.39 PM.jpeg",
        features: ["Gold script name", "Floral pedestal", "Indoor & outdoor"],
      },
      {
        title: "White & Blush Round Backdrop",
        desc: "Clean white and blush-pink balloon arch with a round panel and gold lettering — soft, elegant and photo-ready.",
        img: "/WhatsApp Image 2026-06-02 at 6.38.25 PM.jpeg",
        features: ["Round backdrop", "Soft pastel palette", "Custom name"],
      },
      {
        title: "Unicorn & Butterfly Backdrop",
        desc: "Pastel lilac, mint & pink balloon arch around a custom name panel with butterflies and a gold crown — magical for little girls.",
        img: "/WhatsApp Image 2026-06-02 at 6.38.14 PM.jpeg",
        features: ["Custom name panel", "Pastel palette", "Butterfly accents"],
      },
      {
        title: "Minnie Mouse Birthday",
        desc: "Classic Minnie Mouse round backdrop with a pink & gold chrome balloon arch and matching printed pedestals.",
        img: "/WhatsApp Image 2026-06-02 at 6.38.26 PM.jpeg",
        features: ["Character backdrop", "Pink & gold balloons", "Matching props"],
      },
      {
        title: "Under the Sea Theme",
        desc: "Ocean-blue balloon arch with crabs, fish, starfish and bubble props on a custom seaside backdrop — a kids' favourite.",
        img: "/WhatsApp Image 2026-06-02 at 6.37.50 PM.jpeg",
        features: ["Custom sea backdrop", "Character cut-outs", "Outdoor ready"],
      },
      {
        title: "Lion King 1st Birthday",
        desc: "Jungle-king themed stage with earthy balloon garlands, a custom 'Little King' backdrop, cube props and lion cut-outs.",
        img: "/WhatsApp Image 2026-06-02 at 6.37.40 PM.jpeg",
        features: ["Full stage setup", "Custom backdrop", "Themed props"],
      },
      {
        title: "Gaming / Roblox Theme",
        desc: "Bold blue & green balloon garland with a custom gaming backdrop — perfect for Roblox, Minecraft and gamer birthdays.",
        img: "/WhatsApp Image 2026-06-02 at 6.38.02 PM.jpeg",
        features: ["Custom game backdrop", "Bold colour garland", "Boys' favourite"],
      },
      {
        title: "K-Pop Theme Sequin Wall",
        desc: "Purple & lilac balloon arch with a shimmering sequin wall and character cut-outs — a trending setup for tween parties.",
        img: "/WhatsApp Image 2026-06-02 at 6.38.33 PM.jpeg",
        features: ["Sequin shimmer wall", "Character cut-outs", "Trending theme"],
      },
      {
        title: "Rainbow Shimmer Backdrop",
        desc: "Pastel rainbow balloon garland over a holographic sequin wall with tassels and velvet pedestals — fun and photogenic.",
        img: "/WhatsApp Image 2026-06-02 at 6.37.53 PM.jpeg",
        features: ["Holographic sequins", "Rainbow garland", "Velvet pedestals"],
      },
      {
        title: "Grand Entrance Arch",
        desc: "A full walk-through balloon entrance arch in custom colours — a showstopping welcome for weddings and large events.",
        img: "/WhatsApp Image 2026-06-02 at 6.37.42 PM.jpeg",
        features: ["Walk-through arch", "Custom colours", "Halls & lawns"],
      },
    ],
  },
  {
    id: "styling",
    label: "Full Event Styling & Furniture",
    tagline: "Themed setups, elegant furniture & complete venue dressing",
    services: [
      {
        title: "Kids Party Full Setup",
        desc: "Complete kids' party package — themed backdrop, candy cart, and adorable white kids' tables & chairs finished with tulle bows.",
        img: "/first.jpeg",
        features: ["Candy cart", "Kids furniture", "Themed backdrop"],
      },
      {
        title: "Pink Garden Theme",
        desc: "Dreamy pink & white balloon garland with a unicorn cut-out, satin bow and arched panels — styled for an outdoor garden party.",
        img: "/WhatsApp Image 2026-06-02 at 6.38.06 PM.jpeg",
        features: ["Unicorn cut-out", "Arched panels", "Garden events"],
      },
      {
        title: "White Cane Furniture Setup",
        desc: "Elegant white cane sofas, cocktail tables and styled seating with satin sashes and fresh florals for upscale evening events.",
        img: "/third.jpeg",
        features: ["Cane sofa sets", "Styled cocktail tables", "Floral centerpieces"],
      },
      {
        title: "Complete Garden Styling",
        desc: "Full lawn transformation with coordinated furniture, lighting and floral arrangements for a refined evening ambience.",
        img: "/WhatsApp Image 2026-06-02 at 6.38.11 PM.jpeg",
        features: ["Furniture + lighting", "Floral styling", "Outdoor lawns"],
      },
      {
        title: "Elegant Stage & Drapes",
        desc: "Premium stage setup with flowing drapes, a chandelier and a custom themed floor — perfect for milestone celebrations.",
        img: "/fourth.jpeg",
        features: ["Draped ceiling", "Chandelier accents", "Custom themed floor"],
      },
    ],
  },
  {
    id: "inflatables",
    label: "Inflatable Rentals",
    tagline: "16+ themed units — delivered, setup & collected",
    services: [
      {
        title: "Princess Castle",
        desc: "Magical pink castle for little princesses. CE-certified, safe and squeaky clean.",
        img: "/WhatsApp Image 2026-05-10 at 12.11.58 AM.jpeg",
        features: ["Ages 2–12", "Indoor & outdoor", "8–10 kids capacity"],
      },
      {
        title: "Unicorn Castle",
        desc: "Rainbow unicorn artwork — every girl's dream bounce castle!",
        img: "/WhatsApp Image 2026-05-10 at 12.11.59 AM.jpeg",
        features: ["Full unicorn graphics", "Pink & purple theme", "Bestseller"],
      },
      {
        title: "Spider-Man Castle",
        desc: "Superhero bounce castle with full Spider-Man graphics. Works in banquet halls.",
        img: "/WhatsApp Image 2026-05-10 at 12.11.59 AM (2).jpeg",
        features: ["Spider-Man graphics", "Banquet-hall friendly", "Book early"],
      },
      {
        title: "Disney Cars Combo",
        desc: "Lightning McQueen themed bounce + slide combo. Race into the fun!",
        img: "/WhatsApp Image 2026-05-10 at 12.12.00 AM.jpeg",
        features: ["Bounce + slide", "Disney Cars art", "Boys' favourite"],
      },
      {
        title: "Minions Combo Slide",
        desc: "Minions with a built-in slide — double the fun!",
        img: "/WhatsApp Image 2026-05-10 at 12.12.01 AM (1).jpeg",
        features: ["Bounce + slide", "Full Minions graphics", "Always in demand"],
      },
      {
        title: "Dracula Castle",
        desc: "Hotel Transylvania themed bouncer — spooky fun for monster-loving kids.",
        img: "/WhatsApp Image 2026-05-10 at 12.12.01 AM.jpeg",
        features: ["Purple & orange theme", "Movie characters", "Unique & memorable"],
      },
      {
        title: "Bugs Bunny Bouncer",
        desc: "Looney Tunes nostalgia — Bugs Bunny themed castle loved by all ages.",
        img: "/WhatsApp Image 2026-05-10 at 12.12.00 AM (1).jpeg",
        features: ["Classic cartoon theme", "Blue & yellow", "All ages"],
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
        title: "Monkey Bouncer",
        desc: "Fun monkey arch entrance — bring the jungle adventure to your party.",
        img: "/WhatsApp Image 2026-05-10 at 12.11.59 AM (1).jpeg",
        features: ["Arch entrance", "Colorful theme", "Kids love it"],
      },
      {
        title: "Giant Water Slide",
        desc: "Massive inflatable water slide with a splash pool at the bottom. Summer fun sorted!",
        img: "/WhatsApp Image 2026-06-02 at 6.37.47 PM.jpeg",
        features: ["Splash pool", "Large capacity", "Summer events"],
      },
      {
        title: "Dino Water Slide & Pool",
        desc: "Tropical dino-themed dual water slide with a big splash pool — the ultimate summer party centerpiece.",
        img: "/WhatsApp Image 2026-06-02 at 6.37.44 PM.jpeg",
        features: ["Dual slides", "Big splash pool", "Outdoor lawns"],
      },
      {
        title: "Climbing Wall & Slide",
        desc: "Towering climbing wall with giant slide — perfect for teens and corporate events.",
        img: "/WhatsApp Image 2026-05-10 at 12.12.02 AM.jpeg",
        features: ["Multi-level", "Safe handholds", "Teens & adults"],
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
    id: "bridal",
    label: "Bridal & Elegant Events",
    tagline: "Refined setups for your most important moments",
    services: [
      {
        title: "Rose Gold Birthday Backdrop",
        desc: "Refined white & rose-gold balloon backdrop with gold script signage and fresh florals — ideal for milestone birthdays and showers.",
        img: "/WhatsApp Image 2026-06-02 at 6.38.23 PM.jpeg",
        features: ["Gold script name", "Rose-gold chrome", "Indoor styling"],
      },
      {
        title: "Garden Celebration Setup",
        desc: "A complete outdoor celebration — a custom welcome sign, coordinated balloon décor, styled furniture and floral accents for an unforgettable evening.",
        img: "/WhatsApp Image 2026-06-02 at 6.38.04 PM.jpeg",
        features: ["Custom welcome sign", "Coordinated styling", "Outdoor lawns"],
      },
    ],
  },
  {
    id: "floral",
    label: "Floral & Gift Packages",
    tagline: "Fresh flowers, balloon bouquets & curated gifts",
    services: [
      {
        title: "Valentine's Balloon & Rose Bouquet",
        desc: "Romantic balloon arrangement with fresh red roses, heart foil balloons, a teddy bear and curated gift packages — also available for birthdays, anniversaries & Eid.",
        img: "/2025-02-05.jpg",
        features: ["Foil heart balloons", "Fresh red roses", "Teddy & chocolates", "Same-day available"],
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
            Balloon décor, full event styling, inflatable rentals, bridal setups &amp; floral gifts —
            all in one place, delivered across Lahore.
          </p>
          {/* Quick nav */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="text-xs font-semibold px-4 py-2 rounded-full border border-ink/15 bg-white/60 text-ink-soft hover:border-gold hover:text-gold-dark transition-all duration-200"
              >
                {c.label}
              </a>
            ))}
          </div>
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

      {/* ── ALL CATEGORIES ── */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        {categories.map((cat) => (
          <div key={cat.id} id={cat.id} className="mb-20 scroll-mt-24">
            {/* Category Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10 section-reveal">
              <div>
                <h2 className="text-3xl font-extrabold text-ink">{cat.label}</h2>
                <p className="text-ink-mute text-sm mt-1">{cat.tagline}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <div className="h-px w-16 bg-king-border hidden sm:block" />
                <span className="text-gold-dark text-xs font-bold border border-gold/40 px-3 py-1 rounded-full whitespace-nowrap">
                  {cat.services.length} available
                </span>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {cat.services.map((s, i) => (
                <div
                  key={s.title}
                  className="group bg-white rounded-2xl overflow-hidden border border-king-border hover:border-gold/50 transition-all duration-500 hover:-translate-y-1.5 shadow-soft hover:shadow-lift section-reveal"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="relative h-52 overflow-hidden bg-cream-deep">
                    <FitImage
                      src={s.img}
                      alt={s.title}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-sm text-ink mb-2 group-hover:text-gold-dark transition-colors leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-ink-mute text-xs leading-relaxed mb-4">{s.desc}</p>
                    <ul className="space-y-1.5">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-[11px] text-ink-soft">
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
