import { thingsToDo } from '@/content/data';
import { SectionHeader } from '@/components/SectionHeader';
import { InfoCard } from '@/components/Cards';
import { isValidLocale } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/seo';

const copy = {
  en: { title: 'Things to Do', subtitle: 'Choose experiences by season, pace, and travel style.', body: 'Use these themes to shape a route that feels comfortable and memorable.' },
  ru: { title: 'Чем заняться', subtitle: 'Выбирайте впечатления по сезону, темпу и формату поездки.', body: 'Эти блоки помогут собрать маршрут, который будет и красивым, и удобным.' },
  zh: { title: '玩法推荐', subtitle: '按季节、节奏和旅行风格选择体验。', body: '可按这些主题组合出更适合你的路线。' },
  ar: { title: 'أنشطة مقترحة', subtitle: 'اختر التجارب حسب الموسم والإيقاع وأسلوب السفر.', body: 'يمكن استخدام هذه المحاور لبناء مسار مريح وغني بالتجربة.' }
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return pageMetadata({ locale, pathname: '/things-to-do', title: `${copy[locale].title} | Visit Ossetia`, description: copy[locale].subtitle });
}

export default async function ThingsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  return (
    <div>
      <SectionHeader title={copy[locale].title} subtitle={copy[locale].subtitle} />
      <div className="grid gap-5 md:grid-cols-3">{thingsToDo[locale].map((item) => <InfoCard key={item} title={item}>{copy[locale].body}</InfoCard>)}</div>
    </div>
  );
}
