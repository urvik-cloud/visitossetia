import { Hero } from '@/components/Hero';
import { PlaceCard, ItineraryCard, TourCard } from '@/components/Cards';
import { SectionHeader } from '@/components/SectionHeader';
import { CTASection, FeatureGrid, TrustStrip } from '@/components/Misc';
import { getDictionary } from '@/i18n/dictionary';
import { isValidLocale } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/seo';
import { places } from '@/content/data';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const d = getDictionary(locale);
  return pageMetadata({ locale, pathname: '', title: `${d.home.heroTitle} | Visit Ossetia`, description: d.home.heroSubtitle });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const d = getDictionary(locale);

  return (
    <div className="space-y-12">
      <Hero title={d.home.heroTitle} subtitle={d.home.heroSubtitle} label="Mountain road near Fiagdon" />
      <TrustStrip items={d.trustStrip} />
      <section>
        <SectionHeader title={d.home.why} />
        <FeatureGrid items={[{ title: 'Curated routes', body: 'Balanced routes for scenery, culture, and practical timing.' },{ title: 'Clear planning', body: 'Understand transport, seasons, and logistics before arrival.' },{ title: 'Request-based support', body: 'Manual support for private tour requests in multiple languages.' }]} />
      </section>
      <section>
        <SectionHeader title="Featured places" />
        <div className="grid gap-5 md:grid-cols-3">
          {places.map((place) => (
            <PlaceCard key={place.slug} title={place.title[locale]} description={place.short[locale]} bestFor={place.bestFor[locale]} time={place.time[locale]} cta={<a href={`/${locale}/places/${place.slug}`} className="text-stoneSky">{d.ctas.explorePlaces} →</a>} />
          ))}
        </div>
      </section>
      <section>
        <SectionHeader title="Suggested itineraries" />
        <div className="grid gap-5 md:grid-cols-2">
          <ItineraryCard title="3 Days: Classic North Ossetia Highlights" description="A balanced route across city culture, mountain roads, and iconic landscapes." cta={<a href={`/${locale}/itineraries/3-day-north-ossetia`} className="text-stoneSky">{d.ctas.viewItineraries} →</a>} />
          <TourCard title="Custom Trip Planning" duration="Flexible" bestFor="Private groups" description="Tell us your pace and interests; we help shape a practical route." cta={<a href={`/${locale}/contact`} className="text-stoneSky">{d.ctas.requestTrip} →</a>} />
        </div>
      </section>
      <CTASection title={d.home.finalCta} actionLabel={d.ctas.planRoute} href={`/${locale}/plan`} />
    </div>
  );
}
