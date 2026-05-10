import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About Us — King Balloon Inflatable Rentals Lahore",
  description:
    "Learn about King Balloon — Lahore's trusted inflatable rental company since 2014. We provide safe, CE-certified bounce castles, water slides & party inflatables across Pakistan. Call 0315-9555528.",
  alternates: {
    canonical: "https://www.kingballoon.pk/about",
  },
  openGraph: {
    title: "About King Balloon | Lahore's Premier Inflatable Rental Company",
    description:
      "Founded in 2014, King Balloon has completed 500+ events across Pakistan. Premium bounce castles, water slides & giant inflatables for all occasions.",
    url: "https://www.kingballoon.pk/about",
    images: [
      {
        url: "/WhatsApp Image 2026-05-10 at 12.12.03 AM (1).jpeg",
        width: 1200,
        height: 630,
        alt: "King Balloon team and inflatables",
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
