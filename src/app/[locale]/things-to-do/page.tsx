import { thingsToDo } from '@/content/data';
import { SectionHeader } from '@/components/SectionHeader';
import { InfoCard } from '@/components/Cards';
import { isValidLocale } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return pageMetadata({ locale, pathname: '/things-to-do', title: 'Things to Do in North Ossetia | Visit Ossetia', description: 'Road trips, culture, food, nature, and family-friendly activities in North Ossetia.' });
}

export default async function ThingsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  return (
    <div>
      <SectionHeader title="Things to Do" subtitle="Choose experiences by travel style, season, and comfort level." />
      <div className="grid gap-5 md:grid-cols-3">
        {thingsToDo.map((item) => <InfoCard key={item} title={item}>Practical route-building guidance is available through our trip request process.</InfoCard>)}
      </div>
    </div>
  );
}
