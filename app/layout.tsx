import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://www.kingballoon.pk";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "King Balloon | Bounce Castle & Inflatable Rental in Lahore",
    template: "%s | King Balloon Lahore",
  },
  description:
    "King Balloon is Lahore's #1 inflatable rental company. Rent bounce castles, water slides, combo slides & giant inflatables for birthdays, weddings, school events & corporate functions. Call 0321-9555528.",
  keywords: [
    "bounce castle rental Lahore",
    "inflatable rental Lahore",
    "bouncy castle hire Lahore",
    "kids birthday party Lahore",
    "bounce house rental Pakistan",
    "inflatable slide rental Lahore",
    "water slide rental Lahore",
    "party entertainment Lahore",
    "King Balloon",
    "king balloon lahore",
    "bouncy castle lahore",
    "jumper rental lahore",
    "kids party inflatables Pakistan",
    "corporate event entertainment Lahore",
    "wedding entertainment Lahore",
  ],
  authors: [{ name: "King Balloon" }],
  creator: "King Balloon",
  publisher: "King Balloon",
  formatDetection: { telephone: true, email: false, address: true },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_URL,
    siteName: "King Balloon",
    title: "King Balloon | #1 Bounce Castle & Inflatable Rental in Lahore",
    description:
      "Lahore's premier inflatable rental company. 16+ themed bounce castles, water slides & giant games. Delivered & setup at your venue. Call 0321-9555528.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "King Balloon — Inflatable Bounce Castle Rentals Lahore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "King Balloon | Bounce Castle Rental Lahore",
    description:
      "16+ themed inflatables for birthdays, weddings & corporate events. Professional delivery & setup. Call 0321-9555528.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    // Add your Google Search Console verification code here after setup
    // google: "YOUR_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Lahore, Punjab, Pakistan" />
        <meta name="geo.position" content="31.5204;74.3587" />
        <meta name="ICBM" content="31.5204, 74.3587" />
      </head>
      <body className={`${inter.className} bg-king-dark text-white`}>
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
