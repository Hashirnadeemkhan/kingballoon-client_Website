import Link from "next/link";
import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="on-dark bg-ink text-white relative overflow-hidden">
      {/* gold top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <svg viewBox="0 0 60 60" className="w-14 h-14">
                <defs>
                  <linearGradient id="goldGradF" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9A7A2E" />
                    <stop offset="50%" stopColor="#F0D78A" />
                    <stop offset="100%" stopColor="#C8A24B" />
                  </linearGradient>
                  <linearGradient id="silverGradF" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#bbb" />
                    <stop offset="50%" stopColor="#fff" />
                    <stop offset="100%" stopColor="#ccc" />
                  </linearGradient>
                </defs>
                <path d="M10 38 L10 26 L18 32 L30 18 L42 32 L50 26 L50 38 Z" fill="url(#goldGradF)" />
                <circle cx="10" cy="24" r="3" fill="url(#goldGradF)" />
                <circle cx="30" cy="16" r="3" fill="url(#goldGradF)" />
                <circle cx="50" cy="24" r="3" fill="url(#goldGradF)" />
                <text x="17" y="54" fontFamily="Arial" fontWeight="bold" fontSize="18" fill="url(#silverGradF)">K</text>
                <text x="31" y="54" fontFamily="Arial" fontWeight="bold" fontSize="18" fill="url(#goldGradF)">B</text>
              </svg>
              <div>
                <p className="text-xl font-bold tracking-wider text-gold-gradient">KING BALLOON</p>
                <p className="text-xs text-white/50 tracking-widest uppercase">Event Decoration Co.</p>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed max-w-sm">
              Lahore&apos;s complete event decoration company — balloon décor, themed backdrops,
              inflatables, fresh flowers &amp; bridal styling. We bring elegance and fun to every celebration.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/15 hover:border-gold hover:bg-gold/10 flex items-center justify-center text-white/70 hover:text-gold transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/kingballoonofficial/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/15 hover:border-gold hover:bg-gold/10 flex items-center justify-center text-white/70 hover:text-gold transition-all duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-semibold tracking-widest uppercase text-sm mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/gallery", label: "Gallery" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold transition-colors duration-200 text-sm"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold font-semibold tracking-widest uppercase text-sm mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <Phone size={16} className="text-gold mt-0.5 shrink-0" />
                <a href="https://wa.me/923159555528?text=Hello%20King%20Balloon!%20I%20want%20to%20book%20your%20services." target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  0315-9555528
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span>Lahore, Pakistan</span>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <Clock size={16} className="text-gold mt-0.5 shrink-0" />
                <span>Open 7 days a week<br />9:00 AM – 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-divider mt-12 mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} King Balloon. All rights reserved.</p>
          <p>Bringing Elegance &amp; Joy to Every Celebration</p>
        </div>
      </div>
    </footer>
  );
}
