import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/seo';
import { isValidLocale } from '@/i18n/routing';
import { locales } from '@/i18n/locales';
import { CTASection } from '@/components/Misc';

const copy = {
  en: { title: '3 Days: Classic North Ossetia Highlights', days: ['Day 1: Vladikavkaz and local culture', 'Day 2: Dargavs, Fiagdon and mountain roads', 'Day 3: Tsey or Digoria depending on season'], desc: ['City walk, market rhythm, and evening dining.', 'Scenic drives with heritage stops and photo viewpoints.', 'Choose valley based on weather, road, and activity preference.'], cta: 'Want this route adapted to your dates?', btn: 'Request this trip' },
  ru: { title: '3 дня: классические акценты Северной Осетии', days: ['День 1: Владикавказ и городская культура', 'День 2: Даргавс, Фиагдон и горные дороги', 'День 3: Цей или Дигория по сезону'], desc: ['Прогулка по городу, рынок и вечерняя гастрономия.', 'Видовые переезды с остановками у исторических локаций.', 'Выбор долины зависит от погоды и дорожной ситуации.'], cta: 'Хотите адаптировать маршрут под ваши даты?', btn: 'Запросить поездку' },
  zh: { title: '3天经典北奥塞梯', days: ['第1天：城市与本地文化', '第2天：达尔加夫斯+菲亚格东山路', '第3天：按季节选择采伊或季戈里亚'], desc: ['城市漫步、市场体验与晚餐氛围。', '风景公路+历史停靠+摄影点位。', '根据天气和路况灵活选择峡谷。'], cta: '需要按你的日期定制这条路线吗？', btn: '提交需求' },
  ar: { title: '3 أيام: أبرز محطات أوسيتيا الشمالية', days: ['اليوم 1: فلاديقوقاز والثقافة المحلية', 'اليوم 2: دارغافس وفياغدون والطرق الجبلية', 'اليوم 3: تسي أو ديغوريا حسب الموسم'], desc: ['جولة مدينة، إيقاع السوق، وعشاء مسائي.', 'قيادة بانورامية مع توقفات تراثية ونقاط تصوير.', 'اختيار الوادي حسب الطقس وحالة الطريق.'], cta: 'هل ترغب بتكييف هذا المسار وفق تواريخك؟', btn: 'اطلب هذه الرحلة' }
} as const;

export function generateStaticParams() { return locales.map((locale) => ({ locale, slug: '3-day-north-ossetia' })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) { const { locale, slug } = await params; if (!isValidLocale(locale) || slug !== '3-day-north-ossetia') return {}; return pageMetadata({ locale, pathname: '/itineraries/3-day-north-ossetia', title: `${copy[locale].title} | Visit Ossetia`, description: copy[locale].desc[0] }); }

export default async function ItineraryDetail({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params; if (!isValidLocale(locale) || slug !== '3-day-north-ossetia') notFound(); const c = copy[locale];
  return (<article className="space-y-5"><h1 className="text-4xl font-semibold">{c.title}</h1>{c.days.map((day, i) => <section key={day} className="card"><h2 className="text-2xl font-semibold">{day}</h2><p className="text-slate-600">{c.desc[i]}</p></section>)}<CTASection title={c.cta} actionLabel={c.btn} href={`/${locale}/contact`} image="/images/01_hero_mountains_sunrise.jpg" alt={c.title} /></article>);
}
