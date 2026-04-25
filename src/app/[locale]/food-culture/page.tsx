import { SectionHeader } from '@/components/SectionHeader';
import { InfoCard } from '@/components/Cards';
import { isValidLocale } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/seo';

const sections = ['Ossetian pies','Mountain hospitality','Local markets','Alanian heritage','Traditional architecture','Festivals and seasonal life','Respectful travel notes'];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return pageMetadata({ locale, pathname: '/food-culture', title: 'Food and Culture in North Ossetia | Visit Ossetia', description: 'Discover food traditions, heritage, architecture, and respectful travel notes.' });
}

export default async function FoodCulturePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  return (
    <div>
      <SectionHeader title="Food & Culture" subtitle="Understand local life before you arrive." />
      <div className="grid gap-5 md:grid-cols-3">
        {sections.map((section) => <InfoCard key={section} title={section}>Context-focused notes designed for foreign travelers and respectful visits.</InfoCard>)}
      </div>
    </div>
  );
}
