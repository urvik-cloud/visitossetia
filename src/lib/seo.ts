import type { Metadata } from 'next';
import { locales, type Locale } from '@/i18n/locales';

const siteUrl = 'https://visitossetia.example';

export const buildAlternates = (locale: Locale, pathname: string) => {
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const languages = Object.fromEntries(locales.map((loc) => [loc, `${siteUrl}/${loc}${normalized}`]));

  return {
    canonical: `${siteUrl}/${locale}${normalized}`,
    languages
  };
};

export const pageMetadata = ({
  locale,
  pathname,
  title,
  description
}: {
  locale: Locale;
  pathname: string;
  title: string;
  description: string;
}): Metadata => ({
  title,
  description,
  metadataBase: new URL(siteUrl),
  alternates: buildAlternates(locale, pathname),
  openGraph: {
    title,
    description,
    type: 'website',
    locale,
    url: `${siteUrl}/${locale}${pathname}`
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description
  }
});

export const siteUrlValue = siteUrl;
