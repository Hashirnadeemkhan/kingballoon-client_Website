import type { Metadata } from "next";
import HomeContent from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  title: "King Balloon Lahore | Balloon Decoration, Bounce Castles & Floral Gifts",
  description:
    "King Balloon is Lahore's complete event decoration company. Balloon decoration setups, bounce castle rentals, fresh flower bouquets & bridal setups. Professional delivery across Lahore. Call 0315-9555528.",
  alternates: {
    canonical: "https://www.kingballoon.pk",
  },
  openGraph: {
    title: "King Balloon | Balloon Decoration & Event Services Lahore",
    description:
      "Balloon arches, neon setups, 16+ inflatables, floral bouquets & bridal decoration — all in one place. Delivered & setup across Lahore. Call 0315-9555528.",
    url: "https://www.kingballoon.pk",
    images: [
      {
        url: "/unnamed.webp",
        width: 1200,
        height: 630,
        alt: "King Balloon — balloon decoration and event services Lahore",
      },
    ],
  },
};

export default function HomePage() {
  return <HomeContent />;
}
