import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale, createTranslator } from "next-intl";
import { ReactNode } from "react";
import { routing } from "@/i18n/routing";
import Script from "next/script";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = (await import(`@/locales/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });

  const baseUrl = "https://www.maxcup.hu";

  const path = locale === "en" ? "" : `/${locale}`;
  const canonical = `${baseUrl}${path}`;

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "Max Cup",
    "url": `https://www.maxcup.hu/${locale}`,
    "logo": "https://www.maxcup.hu/img/logo.png",
    "image": "https://www.maxcup.hu/img/maxcup-cover.jpg",
    "description": t("SCHEMA.description"),
    "slogan": t("SCHEMA.slogan"),
    "keywords": t("SCHEMA.keywords"),
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "07:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "00:00",
        "closes": "00:00",
        "description": "Closed"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "00:00",
        "closes": "00:00",
        "description": "Closed"
      }
    ],
    "hasMap": "https://maps.google.com/?q=Erdőalja+u.+3,+Mogyoród,+2146",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "47.5983",
      "longitude": "19.2447"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Erdőalja u. 3",
      "addressLocality": "Mogyoród",
      "postalCode": "2146",
      "addressCountry": "HU"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+36-20-998-8172",
      "email": "maxcupsales@max-group.net",
      "contactType": "customer service",
      "availableLanguage": ["hu", "en"]
    },
    "areaServed": [
      { "@type": "Country", "name": "Hungary" },
      { "@type": "Place", "name": "European Union" }
    ],
    "sameAs": [
      "https://www.facebook.com/MaxCupHungary",
      "https://www.instagram.com/maxcuphungary",
      "https://www.tiktok.com/@maxcuphungary"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": t("SCHEMA.services"),
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": t("SCHEMA.production_title"),
            "description": t("SCHEMA.production_description")
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": t("SCHEMA.renting_title"),
            "description": t("SCHEMA.renting_description")
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": t("SCHEMA.washing_title"),
            "description": t("SCHEMA.washing_description")
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": t("SCHEMA.logistics_title"),
            "description": t("SCHEMA.logistics_description")
          }
        }
      ]
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.maxcup.hu/${locale}`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "3",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <html lang={locale}>
      <head>
        <meta charSet="UTF-8" />
        <title>{t("PAGE.title")}</title>
        <meta name="description" content={t("PAGE.description")} />
        <link id="favicon" rel="icon" href="/img/max_cup.png" />
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href={canonical} />

        {/* Alternate Locales */}
        <link rel="alternate" hrefLang="en" href={`${baseUrl}/en`} />
        <link rel="alternate" hrefLang="hu" href={`${baseUrl}/hu`} />
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en`} />

        {/* OG and Twitter */}
        <meta property="og:title" content={t("PAGE.title")} />
        <meta property="og:description" content={t("PAGE.description")} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MAX CUP" />
        <meta property="og:image" content="https://www.maxcup.hu/img/maxcup-cover.jpg" />

        <meta name="twitter:title" content={t("PAGE.title")} />
        <meta name="twitter:description" content={t("PAGE.description")} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.maxcup.hu/img/maxcup-cover.jpg" />

        <Script
          id="maxcup-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      </head>
      <body suppressHydrationWarning>
        <h1 className="sr-only">
          {t("PAGE.headline")}
        </h1>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
