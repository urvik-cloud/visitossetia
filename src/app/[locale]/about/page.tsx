import { pageMetadata } from '@/lib/seo';
import { getDictionary } from '@/i18n/dictionary';
import { isValidLocale } from '@/i18n/routing';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return pageMetadata({ locale, pathname: '/about', title: 'About Visit Ossetia | Independent Travel Guide', description: 'Visit Ossetia is an independent multilingual travel guide for North Ossetia.' });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const d = getDictionary(locale);

  return (
    <article className="space-y-4">
      <h1 className="text-4xl font-semibold">About Visit Ossetia</h1>
      <p className="text-slate-600">Visit Ossetia is an independent multilingual travel guide created to help international visitors discover North Ossetia with clarity, cultural context and practical planning support.</p>
      <p className="rounded-xl border border-slate-300 bg-white p-4 font-medium">{d.disclaimer}</p>
    </article>
  );
}
