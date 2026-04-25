import { notFound } from 'next/navigation';
import { isValidLocale } from '@/i18n/routing';
import { locales } from '@/i18n/locales';
import { pageMetadata } from '@/lib/seo';
import { FAQ } from '@/components/FAQ';

const articles: Record<string, { h1: string; desc: string; sections: string[] }> = {
  'is-north-ossetia-safe': {
    h1: 'Is North Ossetia Safe for Tourists? Practical 2026 Planning Guide',
    desc: 'A calm guide on route planning, transport choices, and communication expectations for international visitors.',
    sections: ['How travelers usually plan safe routes','Why local guidance can reduce friction','Transport and timing considerations','Respectful behavior and cultural awareness']
  },
  'best-time-to-visit-north-ossetia': {
    h1: 'Best Time to Visit North Ossetia: Seasons, Roads, and Activities',
    desc: 'Compare spring, summer, autumn, and winter for scenery, road reliability, and travel pace.',
    sections: ['Spring and early summer','High summer mountain travel','Autumn colors and clarity','Winter landscapes and slower pace']
  },
  'how-to-visit-dargavs': {
    h1: 'How to Visit Dargavs: Route, Timing, and Travel Notes',
    desc: 'Understand how to structure a Dargavs trip with Fiagdon, photo stops, and mountain-road timing.',
    sections: ['Where Dargavs fits in your itinerary','How to get there from Vladikavkaz','What to bring and wear','Responsible visit guidelines']
  }
};

export function generateStaticParams() {
  return locales.flatMap((locale) => Object.keys(articles).map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) return {};
  const article = articles[slug];
  if (!article) return {};
  return pageMetadata({ locale, pathname: `/guide/${slug}`, title: `${article.h1} | Visit Ossetia`, description: article.desc });
}

export default async function GuideArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();
  const article = articles[slug];
  if (!article) notFound();

  const faq = [
    { q: 'Can I visit without a guide?', a: 'Yes, many travelers do. A guide can be useful for language and mountain route logistics.' },
    { q: 'Should I confirm current requirements before traveling?', a: 'Yes. Always check current travel requirements before departure.' }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.h1,
    description: article.desc,
    author: { '@type': 'Organization', name: 'Visit Ossetia' }
  };

  return (
    <article className="space-y-6">
      <h1 className="text-4xl font-semibold">{article.h1}</h1>
      <p className="text-lg text-slate-600">{article.desc}</p>
      {article.sections.map((section) => (
        <section key={section} className="card"><h2 className="text-2xl font-semibold">{section}</h2><p className="text-slate-600">Useful, non-alarmist guidance with no invented guarantees. Many travelers choose practical route planning and reliable local transport, especially for mountain days.</p></section>
      ))}
      <FAQ items={faq} />
      <p className="text-sm">Internal links: <a className="text-stoneSky" href={`/${locale}/places/dargavs`}>Dargavs</a> · <a className="text-stoneSky" href={`/${locale}/plan`}>Plan your trip</a> · <a className="text-stoneSky" href={`/${locale}/itineraries/3-day-north-ossetia`}>3-day itinerary</a>.</p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </article>
  );
}
