import { pageMetadata } from '@/lib/seo';
import { getDictionary } from '@/i18n/dictionary';
import { isValidLocale } from '@/i18n/routing';
import { notFound } from 'next/navigation';

const copy = {
  en: { title: 'Contact / Request a Trip', fields: ['Name', 'Email', 'Preferred dates', 'Number of travelers', 'Language', 'Interests'], message: 'Message' },
  ru: { title: 'Контакт / Запрос маршрута', fields: ['Имя', 'Эл. почта', 'Предпочтительные даты', 'Количество путешественников', 'Язык', 'Интересы'], message: 'Сообщение' },
  zh: { title: '联系 / 提交行程需求', fields: ['姓名', '邮箱', '出行日期', '出行人数', '沟通语言', '兴趣偏好'], message: '留言' },
  ar: { title: 'تواصل / طلب رحلة', fields: ['الاسم', 'البريد الإلكتروني', 'التواريخ المفضلة', 'عدد المسافرين', 'اللغة', 'الاهتمامات'], message: 'الرسالة' }
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isValidLocale(locale)) return {}; return pageMetadata({ locale, pathname: '/contact', title: `${copy[locale].title} | Visit Ossetia`, description: getDictionary(locale).contactPrototype }); }

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; if (!isValidLocale(locale)) notFound(); const d = getDictionary(locale);
  return (
    <article className="space-y-5">
      <h1 className="text-4xl font-semibold">{copy[locale].title}</h1>
      <p className="text-slate-600">hello@visitossetia.example</p>
      <form className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 md:grid-cols-2" aria-describedby="prototype-form-note">
        {copy[locale].fields.map((field) => <label key={field} className="text-sm font-medium">{field}<input aria-label={field} type="text" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" /></label>)}
        <label className="text-sm font-medium md:col-span-2">{copy[locale].message}<textarea aria-label={copy[locale].message} className="mt-1 min-h-28 w-full rounded-lg border border-slate-300 px-3 py-2" /></label>
        <button type="button" disabled aria-disabled="true" className="rounded-full bg-slate-400 px-6 py-2 text-white md:col-span-2 md:w-fit">{d.labels.submitDisabled}</button>
      </form>
      <p id="prototype-form-note" className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-900">{d.contactPrototype}</p>
    </article>
  );
}
