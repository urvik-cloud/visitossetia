import { notFound } from 'next/navigation';
import { isValidLocale } from '@/i18n/routing';
import { locales } from '@/i18n/locales';
import { pageMetadata } from '@/lib/seo';
import { FAQ } from '@/components/FAQ';
import { getDictionary } from '@/i18n/dictionary';

const articles = {
  en: {
    'is-north-ossetia-safe': { h1: 'Is North Ossetia safe for tourists?', desc: 'A calm guide to route planning, transport choices, and expectations for international visitors.' },
    'best-time-to-visit-north-ossetia': { h1: 'Best time to visit North Ossetia', desc: 'Compare seasons for scenery, roads, and travel comfort.' },
    'how-to-visit-dargavs': { h1: 'How to visit Dargavs', desc: 'Practical route and timing notes for Dargavs and nearby valleys.' }
  },
  ru: {
    'is-north-ossetia-safe': { h1: 'Безопасно ли ехать в Северную Осетию?', desc: 'Спокойный гид по логистике, транспорту и ожиданиям для международных гостей.' },
    'best-time-to-visit-north-ossetia': { h1: 'Когда лучше ехать в Северную Осетию', desc: 'Сравнение сезонов по видам, дорогам и комфорту поездки.' },
    'how-to-visit-dargavs': { h1: 'Как посетить Даргавс', desc: 'Практичные рекомендации по маршруту и таймингу по долинам.' }
  },
  zh: {
    'is-north-ossetia-safe': { h1: '北奥塞梯旅行安全吗？', desc: '面向国际游客的冷静实用建议：路线、交通与沟通预期。' },
    'best-time-to-visit-north-ossetia': { h1: '北奥塞梯最佳旅行时间', desc: '按季节对比风景、路况与舒适度。' },
    'how-to-visit-dargavs': { h1: '如何前往达尔加夫斯', desc: '达尔加夫斯与周边峡谷的实用线路建议。' }
  },
  ar: {
    'is-north-ossetia-safe': { h1: 'هل أوسيتيا الشمالية آمنة للسياح؟', desc: 'إرشاد عملي هادئ حول المسارات والنقل وتوقعات الرحلة للزوار الدوليين.' },
    'best-time-to-visit-north-ossetia': { h1: 'أفضل وقت لزيارة أوسيتيا الشمالية', desc: 'مقارنة المواسم من حيث المشهد وحالة الطرق وراحة التنقل.' },
    'how-to-visit-dargavs': { h1: 'كيف تزور دارغافس', desc: 'ملاحظات عملية حول المسار والتوقيت لزيارة دارغافس والمناطق القريبة.' }
  }
} as const;

const sectionBodies = {
  en: 'Useful, practical guidance with no unrealistic guarantees. Plan routes thoughtfully and keep weather flexibility.',
  ru: 'Практичные рекомендации без завышенных обещаний: продуманный маршрут и запас по погоде всегда повышают комфорт.',
  zh: '提供务实建议，不夸大承诺。建议预留天气弹性并合理安排路线。',
  ar: 'إرشادات عملية بلا وعود مبالغ فيها. التخطيط المرن حسب الطقس يجعل الرحلة أكثر راحة.'
} as const;

export function generateStaticParams() {
  return locales.flatMap((locale) => Object.keys(articles.en).map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) return {};
  const article = articles[locale][slug as keyof (typeof articles)['en']];
  if (!article) return {};
  return pageMetadata({ locale, pathname: `/guide/${slug}`, title: `${article.h1} | Visit Ossetia`, description: article.desc });
}

export default async function GuideArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();
  const article = articles[locale][slug as keyof (typeof articles)['en']];
  if (!article) notFound();
  const d = getDictionary(locale);

  const faq = locale === 'ru'
    ? [{ q: 'Можно ли поехать без гида?', a: 'Да, но локальная поддержка часто упрощает организацию.' }, { q: 'Нужно ли проверять актуальные требования перед поездкой?', a: 'Да, обязательно проверяйте официальные источники перед вылетом.' }]
    : locale === 'zh'
    ? [{ q: '不跟向导可以去吗？', a: '可以，但有本地支持通常更高效。' }, { q: '出发前需要核实最新政策吗？', a: '需要，请以官方信息为准。' }]
    : locale === 'ar'
    ? [{ q: 'هل يمكن الزيارة دون مرشد؟', a: 'نعم، لكن الدعم المحلي يساعد في التنقل والتنظيم.' }, { q: 'هل يجب التحقق من المتطلبات قبل السفر؟', a: 'نعم، تحقق دائمًا من المصادر الرسمية قبل المغادرة.' }]
    : [{ q: 'Can I visit without a guide?', a: 'Yes, many travelers do. Local support can improve logistics.' }, { q: 'Should I confirm current requirements before traveling?', a: 'Yes. Always check official sources before departure.' }];

  return (
    <article className="space-y-6">
      <h1 className="text-4xl font-semibold">{article.h1}</h1>
      <p className="text-lg text-slate-600">{article.desc}</p>
      {[1, 2, 3].map((n) => (<section key={n} className="card"><h2 className="text-2xl font-semibold">{article.h1}</h2><p className="text-slate-600">{sectionBodies[locale]}</p></section>))}
      <FAQ items={faq} />
      <p className="text-sm"><a className="text-stoneSky" href={`/${locale}/places/dargavs`}>{d.ctas.explorePlaces}</a> · <a className="text-stoneSky" href={`/${locale}/plan`}>{d.nav.find((n) => n.key === 'plan')?.label}</a> · <a className="text-stoneSky" href={`/${locale}/itineraries/3-day-north-ossetia`}>{d.ctas.viewItineraries}</a>.</p>
    </article>
  );
}
