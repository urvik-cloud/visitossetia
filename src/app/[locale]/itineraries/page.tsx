import { itineraryCards } from '@/content/data';
import { ItineraryCard } from '@/components/Cards';
import { SectionHeader } from '@/components/SectionHeader';
import { isValidLocale } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/seo';
import { getDictionary } from '@/i18n/dictionary';

const copy = {
  en: { subtitle: 'Choose route length, then refine by season and road rhythm.', label: 'Suggested route', desc: 'A practical itinerary draft that can be adjusted by weather and transport.', cta: 'Open route' },
  ru: { subtitle: 'Выберите длительность и адаптируйте маршрут под сезон и темп дороги.', label: 'Рекомендованный маршрут', desc: 'Базовый план, который удобно уточнить под погоду и логистику.', cta: 'Открыть маршрут' },
  zh: { subtitle: '先选天数，再根据季节与路况微调节奏。', label: '推荐路线', desc: '先用示范方案建立框架，再按天气和交通优化。', cta: '查看路线' },
  ar: { subtitle: 'اختر مدة الرحلة ثم عدّلها حسب الموسم وإيقاع الطريق.', label: 'مسار مقترح', desc: 'خطة أولية عملية يمكن تكييفها مع الطقس والتنقل.', cta: 'عرض المسار' }
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isValidLocale(locale)) return {}; return pageMetadata({ locale, pathname: '/itineraries', title: `${getDictionary(locale).nav.find((n) => n.key === 'itineraries')?.label} | Visit Ossetia`, description: copy[locale].subtitle }); }

export default async function ItinerariesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; if (!isValidLocale(locale)) notFound(); const d = getDictionary(locale);
  return (
    <div>
      <SectionHeader title={d.nav.find((n) => n.key === 'itineraries')?.label ?? ''} subtitle={copy[locale].subtitle} />
      <div className="grid gap-5 md:grid-cols-2">{itineraryCards[locale].map((card) => <ItineraryCard key={card} dayLabel={copy[locale].label} title={card} description={copy[locale].desc} image="/images/03_hero_caucasus_peaks.jpg" alt={card} cta={<a href={`/${locale}/itineraries/3-day-north-ossetia`} className="inline-flex text-sm font-semibold text-stoneSky hover:text-accent">{copy[locale].cta} →</a>} />)}</div>
    </div>
  );
}
