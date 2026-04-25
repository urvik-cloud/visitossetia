import { SectionHeader } from '@/components/SectionHeader';
import { FAQ } from '@/components/FAQ';
import { pageMetadata, siteUrlValue } from '@/lib/seo';
import { isValidLocale } from '@/i18n/routing';
import { notFound } from 'next/navigation';

const sections = ['How to get to North Ossetia','Arriving via Vladikavkaz','Best time to visit','How many days you need','Local transport and drivers','Safety and local guidance','Language and communication','Money and payments','SIM cards and internet','What to wear','Why a local guide can be useful','Frequently asked questions'];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return pageMetadata({ locale, pathname: '/plan', title: 'Plan Your Trip to North Ossetia | Visit Ossetia', description: 'Practical planning advice for transport, safety, seasonality, and local guidance.' });
}

export default async function PlanPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const faq = [
    { q: 'Is North Ossetia suitable for first-time Caucasus travelers?', a: 'Many first-time visitors enjoy the region when routes are planned clearly and transport is arranged in advance.' },
    { q: 'Do I need a local guide?', a: 'A local guide can be useful for mountain logistics, communication, and making day plans more efficient.' },
    { q: 'Is this information final for legal travel requirements?', a: 'No. Check current travel requirements with official sources before your trip.' }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } }))
  };

  return (
    <article className="space-y-6">
      <SectionHeader title="Plan Your Trip" subtitle="Calm, practical guidance for international visitors." />
      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <section key={section} className="card"><h2 className="mb-2 text-xl font-semibold">{section}</h2><p className="text-slate-600">Travel conditions may vary by season. Many travelers choose clear route planning, reliable transport, and local support to keep the trip comfortable and predictable.</p></section>
        ))}
      </div>
      <FAQ items={faq} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <p className="text-sm text-slate-500">Check current travel requirements before your trip. Source website: {siteUrlValue}</p>
    </article>
  );
}
