import { pageMetadata } from '@/lib/seo';
import { getDictionary } from '@/i18n/dictionary';
import { isValidLocale } from '@/i18n/routing';
import { notFound } from 'next/navigation';

const copy = {
  en: { title: 'Privacy', items: ['No tracking scripts are enabled by default.', 'No form data is processed in this prototype.', 'No booking engine, payment flow, or database is active.'] },
  ru: { title: 'Конфиденциальность', items: ['Сторонние трекинг-скрипты по умолчанию не включены.', 'Данные форм в этой версии не обрабатываются.', 'Бронирование, платежи и база данных не подключены.'] },
  zh: { title: '隐私说明', items: ['默认不启用追踪脚本。', '当前原型不处理表单提交数据。', '未接入预订、支付或数据库系统。'] },
  ar: { title: 'الخصوصية', items: ['لا يتم تفعيل سكربتات التتبع افتراضيًا.', 'لا تتم معالجة بيانات النماذج في هذا النموذج الأولي.', 'لا يوجد نظام حجز أو دفع أو قاعدة بيانات مفعّلة.'] }
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isValidLocale(locale)) return {}; return pageMetadata({ locale, pathname: '/privacy', title: `${copy[locale].title} | Visit Ossetia`, description: getDictionary(locale).privacyPrototype }); }

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isValidLocale(locale)) notFound(); const d = getDictionary(locale); return (<article className="space-y-4"><h1 className="text-4xl font-semibold">{copy[locale].title}</h1><p className="text-slate-600">{d.privacyPrototype}</p><ul className="list-disc ps-6 text-slate-600">{copy[locale].items.map((item) => <li key={item}>{item}</li>)}</ul></article>); }
