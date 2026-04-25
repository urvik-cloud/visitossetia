import { itineraryCards } from '@/content/data';
import { ItineraryCard } from '@/components/Cards';
import { SectionHeader } from '@/components/SectionHeader';
import { isValidLocale } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return pageMetadata({ locale, pathname: '/itineraries', title: 'North Ossetia Itineraries | Visit Ossetia', description: 'Sample 1-day to 5-day itineraries and custom private route planning.' });
}

export default async function ItinerariesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  return (
    <div>
      <SectionHeader title="Itineraries" subtitle="Choose a route length, then adapt by season and travel pace." />
      <div className="grid gap-5 md:grid-cols-2">
        {itineraryCards.map((card) => (
          <ItineraryCard
            key={card}
            dayLabel="Suggested Route"
            title={card}
            description="Practical draft itinerary; refine with transport and weather checks."
            cta={
              <a href={`/${locale}/itineraries/3-day-north-ossetia`} className="inline-flex text-sm font-semibold text-stoneSky hover:text-accent">
                Open route →
              </a>
            }
          />
        ))}
      </div>
    </div>
  );
}
