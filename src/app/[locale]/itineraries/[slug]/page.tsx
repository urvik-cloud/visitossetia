import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/seo';
import { isValidLocale } from '@/i18n/routing';
import { locales } from '@/i18n/locales';
import { CTASection } from '@/components/Misc';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale, slug: '3-day-north-ossetia' }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale) || slug !== '3-day-north-ossetia') return {};
  return pageMetadata({ locale, pathname: '/itineraries/3-day-north-ossetia', title: '3 Day North Ossetia Itinerary | Visit Ossetia', description: 'A practical three-day route across Vladikavkaz, Dargavs, Fiagdon, and mountain valleys.' });
}

export default async function ItineraryDetail({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale) || slug !== '3-day-north-ossetia') notFound();

  return (
    <article className="space-y-5">
      <h1 className="text-4xl font-semibold">3 Days: Classic North Ossetia Highlights</h1>
      <section className="card"><h2 className="text-2xl font-semibold">Day 1: Vladikavkaz and local culture</h2><p className="text-slate-600">City walk, market rhythm, and evening dining.</p></section>
      <section className="card"><h2 className="text-2xl font-semibold">Day 2: Dargavs, Fiagdon and mountain roads</h2><p className="text-slate-600">Scenic drives with heritage stops and photo viewpoints.</p></section>
      <section className="card"><h2 className="text-2xl font-semibold">Day 3: Tsey or Digoria depending on season</h2><p className="text-slate-600">Choose valley based on weather, road, and activity preference.</p></section>
      <section className="card"><p><strong>Practical notes:</strong> Start early and keep route timing flexible.</p><p><strong>Best for:</strong> First-time international visitors.</p><p><strong>Suggested season:</strong> Late spring to autumn, with winter-adapted alternatives.</p><p><strong>Transport note:</strong> Private transport is often the most efficient option in mountain areas.</p></section>
      <CTASection title="Want this route adapted to your dates?" actionLabel="Request this trip" href={`/${locale}/contact`} />
    </article>
  );
}
