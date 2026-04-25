import { notFound } from 'next/navigation';
import { places } from '@/content/data';
import { isValidLocale } from '@/i18n/routing';
import { locales, type Locale } from '@/i18n/locales';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Hero } from '@/components/Hero';
import { CTASection } from '@/components/Misc';
import { pageMetadata } from '@/lib/seo';
import { getDictionary } from '@/i18n/dictionary';

const labels: Record<Locale, { home: string; places: string; why: string; what: string; time: string; get: string; season: string; notes: string; itinerary: string; ctaTitle: string; ctaButton: string }> = {
  en: { home: 'Home', places: 'Places', why: 'Why visit', what: 'What to see', time: 'How much time to plan', get: 'How to get there', season: 'Best season', notes: 'Travel notes', itinerary: 'Suggested itinerary', ctaTitle: 'Need support planning this route?', ctaButton: 'Request this trip' },
  ru: { home: 'Главная', places: 'Места', why: 'Почему стоит посетить', what: 'Что посмотреть', time: 'Сколько времени заложить', get: 'Как добраться', season: 'Лучший сезон', notes: 'Полезные заметки', itinerary: 'Идея маршрута', ctaTitle: 'Нужна помощь с этим маршрутом?', ctaButton: 'Запросить поездку' },
  zh: { home: '首页', places: '目的地', why: '推荐理由', what: '看点建议', time: '建议停留时间', get: '如何前往', season: '最佳季节', notes: '出行提示', itinerary: '行程建议', ctaTitle: '需要我们协助规划这条路线吗？', ctaButton: '提交需求' },
  ar: { home: 'الرئيسية', places: 'الأماكن', why: 'لماذا تستحق الزيارة', what: 'أبرز ما يمكن رؤيته', time: 'الوقت المقترح', get: 'كيفية الوصول', season: 'أفضل موسم', notes: 'ملاحظات السفر', itinerary: 'اقتراح مسار', ctaTitle: 'هل تحتاج دعماً لتخطيط هذا المسار؟', ctaButton: 'اطلب هذه الرحلة' }
};

export function generateStaticParams() {
  return locales.flatMap((locale) => places.map((place) => ({ locale, slug: place.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) return {};
  const typedLocale: Locale = locale;
  const place = places.find((p) => p.slug === slug);
  if (!place) return {};
  return pageMetadata({ locale: typedLocale, pathname: `/places/${slug}`, title: `${place.title[typedLocale]} | Visit Ossetia`, description: place.short[typedLocale] });
}

export default async function PlaceDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();
  const typedLocale: Locale = locale;
  const d = getDictionary(typedLocale);
  const l = labels[typedLocale];
  const place = places.find((p) => p.slug === slug);
  if (!place) notFound();

  return (
    <article className="space-y-8">
      <Breadcrumbs locale={typedLocale} label={d.labels.breadcrumbs} items={[{ label: l.home, href: '' }, { label: l.places, href: '/places' }, { label: place.title[typedLocale], href: `/places/${place.slug}` }]} />
      <Hero title={place.title[typedLocale]} subtitle={place.short[typedLocale]} primaryCta={{ label: d.ctas.explorePlaces, href: `/${typedLocale}/itineraries` }} secondaryCta={{ label: d.ctas.planRoute, href: `/${typedLocale}/plan` }} image={place.image} imageAlt={place.heroLabel[typedLocale]} eyebrow={d.brand} caption={place.heroLabel[typedLocale]} />
      <section className="card"><h2 className="text-2xl font-semibold">{l.why}</h2><p className="mt-2 text-slate-600">{place.whyVisit[typedLocale]}</p></section>
      <section className="card"><h2 className="text-2xl font-semibold">{l.what}</h2><ul className="mt-3 list-disc space-y-1 ps-6 text-slate-600">{place.whatToSee[typedLocale].map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section className="grid gap-5 md:grid-cols-2">
        <div className="card"><h3 className="font-semibold">{l.time}</h3><p className="text-slate-600">{place.time[typedLocale]}</p></div>
        <div className="card"><h3 className="font-semibold">{l.get}</h3><p className="text-slate-600">{place.gettingThere[typedLocale]}</p></div>
        <div className="card"><h3 className="font-semibold">{l.season}</h3><p className="text-slate-600">{place.bestSeason[typedLocale]}</p></div>
        <div className="card"><h3 className="font-semibold">{l.notes}</h3><p className="text-slate-600">{place.notes[typedLocale]}</p></div>
      </section>
      <section className="card"><h2 className="text-2xl font-semibold">{l.itinerary}</h2><p className="text-slate-600">{place.itineraryHint[typedLocale]}</p></section>
      <CTASection title={l.ctaTitle} actionLabel={l.ctaButton} href={`/${typedLocale}/contact`} image="/images/04_hero_fiagdon_valley.jpg" alt={place.title[typedLocale]} />
    </article>
  );
}
