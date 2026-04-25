import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Footer, Header, SiteLayout } from '@/components/Layout';
import { getDictionary } from '@/i18n/dictionary';
import { isValidLocale } from '@/i18n/routing';
import { localeDirection, locales, type Locale } from '@/i18n/locales';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return {
    title: 'Visit Ossetia',
    description: getDictionary(locale).disclaimer
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dictionary = getDictionary(locale);

  return (
    <div lang={locale} dir={localeDirection[locale as Locale]} className={locale === 'ar' ? 'font-sans leading-8' : ''}>
      <SiteLayout header={<Header locale={locale} dictionary={dictionary} pathname="" />} footer={<Footer locale={locale} dictionary={dictionary} />}>
        {children}
      </SiteLayout>
    </div>
  );
}
