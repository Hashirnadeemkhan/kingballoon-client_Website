import type { Metadata } from "next";
import ServicesContent from "@/components/pages/ServicesContent";

export const metadata: Metadata = {
  title: "Services — Balloon Decoration, Bounce Castles, Water Slides & Inflatables",
  description:
    "Browse King Balloon's full collection of 16+ inflatables in Lahore: themed bounce castles, combo slides, water slides & giant inflatable games. CE-certified, delivered & setup at your venue. Call 0315-9555528.",
  alternates: {
    canonical: "https://www.kingballoon.pk/services",
  },
  openGraph: {
    title: "Inflatable Services — King Balloon | Bounce Castles & Water Slides Lahore",
    description:
      "16+ inflatables across 4 categories — Bounce Castles, Combo Slides, Water Slides & Giant Inflatables. Delivered to your door across Lahore. Book now!",
    url: "https://www.kingballoon.pk/services",
    images: [
      {
        url: "/WhatsApp Image 2026-05-10 at 12.12.02 AM.jpeg",
        width: 1200,
        height: 630,
        alt: "King Balloon inflatable services Lahore",
      },
    ],
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
