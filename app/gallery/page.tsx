import type { Metadata } from "next";
import GalleryContent from "@/components/pages/GalleryContent";

export const metadata: Metadata = {
  title: "Gallery — Balloon Decoration & Event Photos",
  description:
    "View King Balloon's photo gallery of 16 premium inflatables — unicorn castles, Minions slides, water slides, climbing walls & more. See our work at real events across Lahore. Call 0315-9555528.",
  alternates: {
    canonical: "https://www.kingballoon.pk/gallery",
  },
  openGraph: {
    title: "Gallery — King Balloon | Bounce Castles & Inflatables Lahore",
    description:
      "Browse our full fleet of themed bounce castles, water slides & giant inflatables. 16 unique designs available for your next event in Lahore.",
    url: "https://www.kingballoon.pk/gallery",
    images: [
      {
        url: "/WhatsApp Image 2026-05-10 at 12.12.01 AM (1).jpeg",
        width: 1200,
        height: 630,
        alt: "King Balloon gallery — inflatable bounce castles Lahore",
      },
    ],
  },
};

export default function GalleryPage() {
  return <GalleryContent />;
}
