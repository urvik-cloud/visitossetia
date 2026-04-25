import { pageMetadata } from '@/lib/seo';
import { getDictionary } from '@/i18n/dictionary';
import { isValidLocale } from '@/i18n/routing';
import { notFound } from 'next/navigation';

const copy = {
  en: { title: 'About Visit Ossetia', body: 'Visit Ossetia is an independent multilingual travel guide helping international guests explore North Ossetia with clarity, context, and premium route planning support.' },
  ru: { title: 'О проекте Visit Ossetia', body: 'Visit Ossetia — независимый многоязычный гид, который помогает путешественникам открывать Северную Осетию осознанно, красиво и без лишней неопределённости.' },
  zh: { title: '关于 Visit Ossetia', body: 'Visit Ossetia 是面向国际游客的多语言独立指南，提供清晰、可靠、有文化深度的北奥塞梯旅行建议。' },
  ar: { title: 'حول Visit Ossetia', body: 'Visit Ossetia دليل مستقل متعدد اللغات يساعد الزوار الدوليين على استكشاف أوسيتيا الشمالية بوضوح وسياق ثقافي وتخطيط راقٍ.' }
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isValidLocale(locale)) return {}; return pageMetadata({ locale, pathname: '/about', title: `${copy[locale].title} | Visit Ossetia`, description: copy[locale].body }); }

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isValidLocale(locale)) notFound(); const d = getDictionary(locale); return (<article className="space-y-4"><h1 className="text-4xl font-semibold">{copy[locale].title}</h1><p className="text-slate-600">{copy[locale].body}</p><p className="rounded-xl border border-slate-300 bg-white p-4 font-medium">{d.disclaimer}</p></article>); }
