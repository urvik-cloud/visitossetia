import { tours } from '@/content/data';
import { TourCard } from '@/components/Cards';
import { SectionHeader } from '@/components/SectionHeader';
import { getDictionary } from '@/i18n/dictionary';
import { isValidLocale } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return pageMetadata({ locale, pathname: '/tours', title: 'Request-based Tours in North Ossetia | Visit Ossetia', description: 'Curated private routes with manual request handling at the first stage.' });
}

export default async function ToursPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const d = getDictionary(locale);

  return (
    <div className="space-y-6">
      <SectionHeader title="Tours" subtitle="Curated request-based travel support. No marketplace booking in v1." />
      <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">{d.toursTrustNote}</p>
      <div className="grid gap-5 md:grid-cols-2">
        {tours.map((tour) => <TourCard key={tour} title={tour} duration="Flexible duration" bestFor="International travelers" description="A curated route draft prepared manually based on your request." cta={<a href={`/${locale}/contact`} className="text-stoneSky">Request this trip →</a>} />)}
      </div>
    </div>
  );
}
