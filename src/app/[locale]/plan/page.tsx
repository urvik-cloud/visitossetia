import { SectionHeader } from '@/components/SectionHeader';
import { FAQ } from '@/components/FAQ';
import { pageMetadata, siteUrlValue } from '@/lib/seo';
import { isValidLocale } from '@/i18n/routing';
import { notFound } from 'next/navigation';

const copy = {
  en: { title: 'Plan Your Trip', subtitle: 'Calm, practical guidance for international visitors.', sections: ['How to get to North Ossetia','Arriving via Vladikavkaz','Best time to visit','How many days you need','Local transport and drivers','Safety and local guidance'], body: 'Travel conditions vary by season. Clear route planning and reliable transport make the experience smoother.', note: 'Check current travel requirements before your trip.', faq: [{ q: 'Is North Ossetia suitable for first-time Caucasus travelers?', a: 'Yes, with clear route planning and realistic timing.' }, { q: 'Do I need a local guide?', a: 'Not always, but local support can improve comfort and efficiency.' }] },
  ru: { title: 'План поездки', subtitle: 'Спокойные и практичные рекомендации для международных гостей.', sections: ['Как добраться до Северной Осетии','Прибытие через Владикавказ','Лучшее время для поездки','Сколько дней закладывать','Локальный транспорт и водители','Безопасность и локальная поддержка'], body: 'Условия зависят от сезона. Чёткая логистика и надежный транспорт делают маршрут комфортнее.', note: 'Перед поездкой проверьте актуальные требования к въезду.', faq: [{ q: 'Подходит ли Осетия для первого путешествия по Кавказу?', a: 'Да, если заранее продумать логистику и темп.' }, { q: 'Нужен ли локальный гид?', a: 'Не всегда, но он часто экономит время и снимает организационные риски.' }] },
  zh: { title: '行前规划', subtitle: '为国际游客准备的稳妥、实用指南。', sections: ['如何抵达北奥塞梯','经弗拉季高加索入境','最佳出行季节','建议停留天数','本地交通与司机安排','安全与在地支持'], body: '不同季节路况差异明显，提前做好路线和交通安排更安心。', note: '出发前请确认最新旅行要求。', faq: [{ q: '北奥塞梯适合第一次去高加索的游客吗？', a: '适合，前提是路线规划清晰、时间安排合理。' }, { q: '一定需要向导吗？', a: '不一定，但本地支持通常能提升效率和舒适度。' }] },
  ar: { title: 'تخطيط الرحلة', subtitle: 'إرشادات عملية وهادئة للمسافرين الدوليين.', sections: ['كيفية الوصول إلى أوسيتيا الشمالية','الوصول عبر فلاديقوقاز','أفضل وقت للزيارة','عدد الأيام المناسب','النقل المحلي والسائقون','السلامة والدعم المحلي'], body: 'تختلف ظروف السفر حسب الموسم، لذلك يفيد التخطيط المبكر للمسار والنقل.', note: 'تحقق من متطلبات السفر الحالية قبل رحلتك.', faq: [{ q: 'هل أوسيتيا الشمالية مناسبة لزوار القوقاز لأول مرة؟', a: 'نعم، مع تخطيط واضح للمسار وتوقيت واقعي.' }, { q: 'هل أحتاج إلى مرشد محلي؟', a: 'ليس دائمًا، لكن الدعم المحلي يجعل التنقل أسهل وأكثر راحة.' }] }
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isValidLocale(locale)) return {}; return pageMetadata({ locale, pathname: '/plan', title: `${copy[locale].title} | Visit Ossetia`, description: copy[locale].subtitle }); }

export default async function PlanPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; if (!isValidLocale(locale)) notFound(); const c = copy[locale];
  const schema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: c.faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) };
  return (<article className="space-y-6"><SectionHeader title={c.title} subtitle={c.subtitle} /><div className="grid gap-4 md:grid-cols-2">{c.sections.map((section) => <section key={section} className="card"><h2 className="mb-2 text-xl font-semibold">{section}</h2><p className="text-slate-600">{c.body}</p></section>)}</div><FAQ items={c.faq} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><p className="text-sm text-slate-500">{c.note} {siteUrlValue}</p></article>);
}
