import { tours } from '@/content/data';
import { TourCard } from '@/components/Cards';
import { SectionHeader } from '@/components/SectionHeader';
import { getDictionary } from '@/i18n/dictionary';
import { isValidLocale } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/seo';

const copy = {
  en: { subtitle: 'Curated private support. No instant marketplace booking.', duration: 'Flexible duration', bestFor: 'International travelers', desc: 'A route draft is prepared manually based on your dates and style.' },
  ru: { subtitle: 'Кураторская поддержка частных поездок без маркетплейс-бронирования.', duration: 'Гибкая длительность', bestFor: 'Международные путешественники', desc: 'Маршрут готовится вручную с учётом ваших дат и формата поездки.' },
  zh: { subtitle: '提供人工策划的私享支持，不做即时平台预订。', duration: '时长可调', bestFor: '国际旅行者', desc: '将根据你的时间与偏好人工整理路线草案。' },
  ar: { subtitle: 'دعم خاص منسق دون نظام حجز فوري عبر منصة.', duration: 'مدة مرنة', bestFor: 'المسافرون الدوليون', desc: 'يتم إعداد تصور المسار يدويًا بناءً على تواريخك وأسلوب رحلتك.' }
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isValidLocale(locale)) return {}; return pageMetadata({ locale, pathname: '/tours', title: `${getDictionary(locale).nav.find((n) => n.key === 'tours')?.label} | Visit Ossetia`, description: copy[locale].subtitle }); }

export default async function ToursPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; if (!isValidLocale(locale)) notFound(); const d = getDictionary(locale);
  return (
    <div className="space-y-6">
      <SectionHeader title={d.nav.find((n) => n.key === 'tours')?.label ?? ''} subtitle={copy[locale].subtitle} />
      <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">{d.toursTrustNote}</p>
      <div className="grid gap-5 md:grid-cols-2">{tours[locale].map((tour) => <TourCard key={tour} title={tour} duration={copy[locale].duration} bestFor={copy[locale].bestFor} description={copy[locale].desc} eyebrow={d.labels.travelSupport} image="/images/02_hero_tower_landscape.jpg" alt={tour} cta={<a href={`/${locale}/contact`} className="text-stoneSky">{d.ctas.requestTrip} →</a>} />)}</div>
    </div>
  );
}
