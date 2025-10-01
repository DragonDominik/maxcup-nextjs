import { notFound } from 'next/navigation';
import { NextIntlClientProvider, hasLocale, createTranslator } from 'next-intl';
import { ReactNode } from 'react';
import { routing } from '@/i18n/routing';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Load messages for the current locale
  const messages = (await import(`@/locales/${locale}.json`)).default;

  // Create a translator instance
  const t = createTranslator({ locale, messages });

  return (
    <html lang={locale}>
      <head>
        <title>{t('PAGE.title')}</title>
        <meta name="description" content={t('PAGE.description')} />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>

  );
}
