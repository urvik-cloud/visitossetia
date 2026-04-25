import { places, placeDirectory } from '@/content/data';
import { PlaceCard } from '@/components/Cards';
import { SectionHeader } from '@/components/SectionHeader';
import { isValidLocale } from '@/i18n/routing';
import { getDictionary } from '@/i18n/dictionary';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return pageMetadata({ locale, pathname: '/places', title: `${getDictionary(locale).nav.find((n) => n.key === 'places')?.label} | Visit Ossetia`, description: places[0].short[locale] });
}

export default async function PlacesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const d = getDictionary(locale);

  return (
    <div className="space-y-8">
      <SectionHeader title={d.nav.find((n) => n.key === 'places')?.label ?? ''} subtitle={d.home.why} />
      <div className="grid gap-5 md:grid-cols-2">
        {places.map((place) => (
          <PlaceCard key={place.slug} title={place.title[locale]} description={place.short[locale]} bestFor={place.bestFor[locale]} time={place.time[locale]} category={place.heroLabel[locale]} image={place.image} alt={place.heroLabel[locale]} labels={{ bestFor: d.labels.bestFor, practical: d.labels.practicalNote }} cta={<a href={`/${locale}/places/${place.slug}`} className="inline-flex text-sm font-semibold text-stoneSky hover:text-accent">{d.labels.openDetails} →</a>} />
        ))}
        {placeDirectory[locale].map((name) => (
          <article key={name} className="card"><h3 className="text-xl font-semibold">{name}</h3><p className="mt-2 text-slate-600">{d.toursTrustNote}</p></article>
        ))}
      </div>
    </div>
  );
}
