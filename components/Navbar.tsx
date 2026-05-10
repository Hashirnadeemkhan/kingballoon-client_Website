"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-king-dark/95 backdrop-blur-md shadow-lg shadow-black/50 border-b border-king-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex items-center justify-center">
              {/* Crown SVG */}
              <svg viewBox="0 0 60 60" className="w-12 h-12">
                <defs>
                  <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A8881A" />
                    <stop offset="50%" stopColor="#F0D060" />
                    <stop offset="100%" stopColor="#D4AF37" />
                  </linearGradient>
                  <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#888" />
                    <stop offset="50%" stopColor="#eee" />
                    <stop offset="100%" stopColor="#aaa" />
                  </linearGradient>
                </defs>
                {/* Crown */}
                <path
                  d="M10 38 L10 26 L18 32 L30 18 L42 32 L50 26 L50 38 Z"
                  fill="url(#goldGrad)"
                />
                <circle cx="10" cy="24" r="3" fill="url(#goldGrad)" />
                <circle cx="30" cy="16" r="3" fill="url(#goldGrad)" />
                <circle cx="50" cy="24" r="3" fill="url(#goldGrad)" />
                {/* KB */}
                <text x="17" y="54" fontFamily="Arial" fontWeight="bold" fontSize="18" fill="url(#silverGrad)">K</text>
                <text x="31" y="54" fontFamily="Arial" fontWeight="bold" fontSize="18" fill="url(#goldGrad)">B</text>
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold tracking-wider text-gold-gradient">
                KING BALLOON
              </span>
              <p className="text-xs text-gray-400 tracking-widest uppercase">Event Inflatables</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                  pathname === link.href
                    ? "text-gold"
                    : "text-gray-300 hover:text-gold"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="tel:03219555528"
            className="hidden md:flex items-center gap-2 bg-gold hover:bg-gold-light text-king-dark font-bold px-5 py-2.5 rounded-full transition-all duration-300 text-sm tracking-wide shadow-lg shadow-gold/20"
          >
            <Phone size={15} />
            Book Now
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-gold transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-king-dark/98 border-t border-king-border px-4 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-lg font-medium tracking-wide transition-colors ${
                pathname === link.href ? "text-gold" : "text-gray-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:03219555528"
            className="mt-2 flex items-center justify-center gap-2 bg-gold text-king-dark font-bold px-6 py-3 rounded-full text-base"
          >
            <Phone size={16} />
            03219555528
          </a>
        </div>
      )}
    </header>
  );
}
