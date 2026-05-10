export default function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.kingballoon.pk/#business",
    name: "King Balloon",
    alternateName: "King Balloon Lahore",
    description:
      "Lahore's premier inflatable rental company offering bounce castles, water slides, combo slides and giant inflatables for birthdays, weddings, school events and corporate functions.",
    url: "https://www.kingballoon.pk",
    logo: "https://www.kingballoon.pk/logo.pdf",
    telephone: "+923159555528",
    priceRange: "$$",
    currenciesAccepted: "PKR",
    paymentAccepted: "Cash, Bank Transfer",
    openingHours: "Mo-Su 09:00-21:00",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "31.5204",
      longitude: "74.3587",
    },
    areaServed: [
      { "@type": "City", name: "Lahore" },
      { "@type": "City", name: "Islamabad" },
      { "@type": "Country", name: "Pakistan" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Inflatable Rental Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bounce Castle Rental",
            description: "Themed inflatable bounce castles for all events",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Water Slide Rental",
            description: "Giant inflatable water slides for summer events",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Combo Slide Rental",
            description: "Bounce and slide combo inflatables",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Giant Inflatable Games",
            description: "Climbing walls, obstacle courses and inflatable games",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "120",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      "https://www.facebook.com/kingballoonpk",
      "https://www.instagram.com/kingballoonofficial/",
    ],
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "King Balloon",
    url: "https://www.kingballoon.pk",
    logo: "https://www.kingballoon.pk/logo.pdf",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+923159555528",
      contactType: "customer service",
      areaServed: "PK",
      availableLanguage: ["English", "Urdu"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
    </>
  );
}
