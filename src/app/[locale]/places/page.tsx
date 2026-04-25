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
  return pageMetadata({ locale, pathname: '/places', title: 'North Ossetia Places | Visit Ossetia', description: 'Explore key places in North Ossetia including Dargavs, Fiagdon, and Vladikavkaz.' });
}

export default async function PlacesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const d = getDictionary(locale);

  return (
    <div className="space-y-8">
      <SectionHeader title={d.nav.find((n) => n.key === 'places')?.label ?? 'Places'} subtitle="Curated destination cards to help you choose where to go first." />
      <div className="grid gap-5 md:grid-cols-2">
        {places.map((place) => <PlaceCard key={place.slug} title={place.title[locale]} description={place.short[locale]} bestFor={place.bestFor[locale]} time={place.time[locale]} cta={<a href={`/${locale}/places/${place.slug}`} className="text-stoneSky">View details →</a>} />)}
        {placeDirectory.filter((name) => !places.some((p) => p.title.en === name)).map((name) => (
          <article key={name} className="card"><h3 className="text-xl font-semibold">{name}</h3><p className="mt-2 text-slate-600">Directory entry prepared for full article expansion.</p></article>
        ))}
      </div>
    </div>
  );
}
