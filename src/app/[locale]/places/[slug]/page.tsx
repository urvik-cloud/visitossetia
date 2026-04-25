import { notFound } from 'next/navigation';
import { places } from '@/content/data';
import { isValidLocale } from '@/i18n/routing';
import { locales, type Locale } from '@/i18n/locales';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Hero } from '@/components/Hero';
import { CTASection } from '@/components/Misc';
import { pageMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return locales.flatMap((locale) => places.map((place) => ({ locale, slug: place.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) return {};
  const typedLocale: Locale = locale;
  const place = places.find((p) => p.slug === slug);
  if (!place) return {};
  return pageMetadata({
    locale: typedLocale,
    pathname: `/places/${slug}`,
    title: `${place.title[typedLocale]} | Visit Ossetia`,
    description: place.short[typedLocale],
  });
}

export default async function PlaceDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();
  const typedLocale: Locale = locale;
  const place = places.find((p) => p.slug === slug);
  if (!place) notFound();

  return (
    <article className="space-y-8">
      <Breadcrumbs locale={typedLocale} items={[{ label: 'Home', href: '' }, { label: 'Places', href: '/places' }, { label: place.title[typedLocale], href: `/places/${place.slug}` }]} />
      <Hero
        title={place.title[typedLocale]}
        subtitle={place.short[typedLocale]}
        primaryCta={{ label: 'Explore Routes', href: `/${typedLocale}/itineraries` }}
        secondaryCta={{ label: 'Plan Your Trip', href: `/${typedLocale}/plan` }}
        visuals={[
          { label: place.heroLabel, tone: 'mountain' },
          { label: 'Ossetian food table', tone: 'culture' }
        ]}
      />
      <section className="card"><h2 className="text-2xl font-semibold">Why visit</h2><p className="mt-2 text-slate-600">{place.whyVisit[typedLocale]}</p></section>
      <section className="card"><h2 className="text-2xl font-semibold">What to see</h2><ul className="mt-3 list-disc space-y-1 ps-6 text-slate-600">{place.whatToSee[typedLocale].map((item: string) => <li key={item}>{item}</li>)}</ul></section>
      <section className="grid gap-5 md:grid-cols-2">
        <div className="card"><h3 className="font-semibold">How much time to plan</h3><p className="text-slate-600">{place.time[typedLocale]}</p></div>
        <div className="card"><h3 className="font-semibold">How to get there</h3><p className="text-slate-600">{place.gettingThere[typedLocale]}</p></div>
        <div className="card"><h3 className="font-semibold">Best season</h3><p className="text-slate-600">{place.bestSeason[typedLocale]}</p></div>
        <div className="card"><h3 className="font-semibold">Travel notes</h3><p className="text-slate-600">{place.notes[typedLocale]}</p></div>
      </section>
      <section className="card"><h2 className="text-2xl font-semibold">Suggested itinerary</h2><p className="text-slate-600">{place.itineraryHint[typedLocale]}</p></section>
      <CTASection title="Need support planning this route?" actionLabel="Request this trip" href={`/${typedLocale}/contact`} />
    </article>
  );
}
