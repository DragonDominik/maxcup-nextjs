import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale, createTranslator } from "next-intl";
import { ReactNode } from "react";
import { routing } from "@/i18n/routing";
import { usePathname } from "next/navigation"; // works client-side

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

  return (
    <html lang={locale}>
      <head>
        <meta charSet="UTF-8" />
        <title>{t("PAGE.title")}</title>
        <meta name="description" content={t("PAGE.description")} />
        <link id="favicon" rel="icon" href="/img/max_cup.png" />
        <meta name="robots" content="index, follow" />

        {/* ✅ Canonical */}
        <link rel="canonical" href={canonical} />

        {/* ✅ Alternate Locales */}
        <link rel="alternate" hrefLang="en" href={`${baseUrl}/en`} />
        <link rel="alternate" hrefLang="hu" href={`${baseUrl}/hu`} />
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en`} />


        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Sintony:wght@400;700&family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />

        {/* OG and Twitter */}
        <meta property="og:title" content={t("PAGE.title")} />
        <meta property="og:description" content={t("PAGE.description")} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MAX CUP" />
        <meta property="og:image" content="/img/maxcup-repohar-mosas.jpg" />

        <meta name="twitter:title" content={t("PAGE.title")} />
        <meta name="twitter:description" content={t("PAGE.description")} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://yourdomain.com/img/maxcup.png" />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
