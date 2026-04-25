import { notFound } from 'next/navigation';
import { places } from '@/content/data';
import { isValidLocale } from '@/i18n/routing';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Hero } from '@/components/Hero';
import { CTASection } from '@/components/Misc';
import { pageMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return ['en', 'ru', 'zh', 'ar'].flatMap((locale) => places.map((place) => ({ locale, slug: place.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) return {};
  const place = places.find((p) => p.slug === slug);
  if (!place) return {};
  return pageMetadata({ locale, pathname: `/places/${slug}`, title: `${place.title[locale]} | Visit Ossetia`, description: place.short[locale] });
}

export default async function PlaceDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();
  const place = places.find((p) => p.slug === slug);
  if (!place) notFound();

  return (
    <article className="space-y-8">
      <Breadcrumbs locale={locale} items={[{ label: 'Home', href: '' }, { label: 'Places', href: '/places' }, { label: place.title[locale], href: `/places/${place.slug}` }]} />
      <Hero title={place.title[locale]} subtitle={place.short[locale]} label={place.heroLabel} />
      <section className="card"><h2 className="text-2xl font-semibold">Why visit</h2><p className="mt-2 text-slate-600">{place.whyVisit[locale]}</p></section>
      <section className="card"><h2 className="text-2xl font-semibold">What to see</h2><ul className="mt-3 list-disc space-y-1 ps-6 text-slate-600">{place.whatToSee[locale].map((item: string) => <li key={item}>{item}</li>)}</ul></section>
      <section className="grid gap-5 md:grid-cols-2">
        <div className="card"><h3 className="font-semibold">How much time to plan</h3><p className="text-slate-600">{place.time[locale]}</p></div>
        <div className="card"><h3 className="font-semibold">How to get there</h3><p className="text-slate-600">{place.gettingThere[locale]}</p></div>
        <div className="card"><h3 className="font-semibold">Best season</h3><p className="text-slate-600">{place.bestSeason[locale]}</p></div>
        <div className="card"><h3 className="font-semibold">Travel notes</h3><p className="text-slate-600">{place.notes[locale]}</p></div>
      </section>
      <section className="card"><h2 className="text-2xl font-semibold">Suggested itinerary</h2><p className="text-slate-600">{place.itineraryHint[locale]}</p></section>
      <CTASection title="Need support planning this route?" actionLabel="Request this trip" href={`/${locale}/contact`} />
    </article>
  );
}
