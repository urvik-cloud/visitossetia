import { SectionHeader } from '@/components/SectionHeader';
import { guideArticles } from '@/content/data';
import { isValidLocale } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/seo';
import { getDictionary } from '@/i18n/dictionary';

const titles = {
  en: { 'is-north-ossetia-safe': 'Is North Ossetia safe for tourists?', 'best-time-to-visit-north-ossetia': 'Best time to visit North Ossetia', 'how-to-visit-dargavs': 'How to visit Dargavs' },
  ru: { 'is-north-ossetia-safe': 'Безопасно ли ехать в Северную Осетию?', 'best-time-to-visit-north-ossetia': 'Когда лучше ехать в Северную Осетию', 'how-to-visit-dargavs': 'Как посетить Даргавс' },
  zh: { 'is-north-ossetia-safe': '北奥塞梯旅行安全吗？', 'best-time-to-visit-north-ossetia': '北奥塞梯最佳旅行时间', 'how-to-visit-dargavs': '如何前往达尔加夫斯' },
  ar: { 'is-north-ossetia-safe': 'هل أوسيتيا الشمالية آمنة للسياح؟', 'best-time-to-visit-north-ossetia': 'أفضل وقت لزيارة أوسيتيا الشمالية', 'how-to-visit-dargavs': 'كيف تزور دارغافس' }
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isValidLocale(locale)) return {}; return pageMetadata({ locale, pathname: '/guide', title: `${getDictionary(locale).nav.find((n) => n.key === 'guide')?.label} | Visit Ossetia`, description: getDictionary(locale).toursTrustNote }); }

export default async function GuidePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; if (!isValidLocale(locale)) notFound(); const d = getDictionary(locale);
  return (<div><SectionHeader title={d.nav.find((n) => n.key === 'guide')?.label ?? ''} subtitle={d.home.why} /><div className="grid gap-5 md:grid-cols-2">{Object.entries(titles[locale]).map(([slug, title]) => (<article key={slug} className="card"><h2 className="text-xl font-semibold">{title}</h2><p className="mt-2 text-slate-600">{d.toursTrustNote}</p>{guideArticles.includes(slug as any) ? <a className="mt-3 inline-block text-stoneSky" href={`/${locale}/guide/${slug}`}>{d.labels.readArticle} →</a> : <span className="mt-3 inline-block text-slate-400">{d.labels.draftPlanned}</span>}</article>))}</div></div>);
}
