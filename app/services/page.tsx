import type { Metadata } from "next";
import ServicesContent from "@/components/pages/ServicesContent";

export const metadata: Metadata = {
  title: "Services — Balloon Décor, Jumping Castles, Water Slides & Event Management",
  description:
    "King Balloon services in Lahore: birthday & anniversary balloon décor, 40+ jumping castles, giant water slides, mehndi stages, furniture, catering setups & floral gifts. Call 0315-9555528.",
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
        url: "/og-cover.jpg",
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
