import { SectionHeader } from '@/components/SectionHeader';
import { guideArticles } from '@/content/data';
import { isValidLocale } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/seo';

const titles: Record<string, string> = {
  'is-north-ossetia-safe': 'Is North Ossetia safe for tourists?',
  'best-time-to-visit-north-ossetia': 'Best time to visit North Ossetia',
  'how-to-visit-dargavs': 'How to visit Dargavs',
  'vladikavkaz-travel-guide': 'Vladikavkaz travel guide',
  'what-to-eat-in-north-ossetia': 'What to eat in North Ossetia',
  'how-to-get-to-north-ossetia': 'How to get to North Ossetia',
  'north-ossetia-3-day-itinerary': 'North Ossetia 3-day itinerary'
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return pageMetadata({ locale, pathname: '/guide', title: 'North Ossetia Travel Guide Articles | Visit Ossetia', description: 'Practical destination articles for planning safe and meaningful trips.' });
}

export default async function GuidePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  return (
    <div>
      <SectionHeader title="Guide" subtitle="SEO-focused practical articles for trip planning." />
      <div className="grid gap-5 md:grid-cols-2">
        {Object.entries(titles).map(([slug, title]) => (
          <article key={slug} className="card"><h2 className="text-xl font-semibold">{title}</h2><p className="mt-2 text-slate-600">Practical article with internal links and FAQ support.</p>{guideArticles.includes(slug) ? <a className="mt-3 inline-block text-stoneSky" href={`/${locale}/guide/${slug}`}>Read article →</a> : <span className="mt-3 inline-block text-slate-400">Draft planned</span>}</article>
        ))}
      </div>
    </div>
  );
}
