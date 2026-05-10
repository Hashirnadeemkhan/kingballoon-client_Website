import type { Metadata } from "next";
import HomeContent from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  title: "King Balloon | #1 Bounce Castle & Inflatable Rental in Lahore",
  description:
    "King Balloon is Lahore's top inflatable rental company. Rent bounce castles, water slides, combo slides & giant games for birthdays, weddings & events. Call 0315-9555528 to book today!",
  alternates: {
    canonical: "https://www.kingballoon.pk",
  },
  openGraph: {
    title: "King Balloon | Bounce Castle Rental Lahore — Call 0315-9555528",
    description:
      "16+ themed bounce castles, water slides & giant inflatables delivered to your door in Lahore. Birthdays, weddings, corporate events. Book now!",
    url: "https://www.kingballoon.pk",
    images: [
      {
        url: "/WhatsApp Image 2026-05-10 at 12.11.59 AM.jpeg",
        width: 1200,
        height: 630,
        alt: "King Balloon inflatable bounce castle Lahore",
      },
    ],
  },
};

export default function HomePage() {
  return <HomeContent />;
}
