import { SectionHeader } from '@/components/SectionHeader';
import { InfoCard } from '@/components/Cards';
import { isValidLocale } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/seo';

const sections = {
  en: ['Ossetian pies', 'Mountain hospitality', 'Local markets', 'Alanian heritage', 'Traditional architecture', 'Festivals and seasonal life', 'Respectful travel notes'],
  ru: ['Осетинские пироги', 'Горное гостеприимство', 'Локальные рынки', 'Наследие Алании', 'Традиционная архитектура', 'Праздники и сезонный ритм', 'Этика уважительного путешествия'],
  zh: ['奥塞梯馅饼', '山地待客文化', '本地集市', '阿兰文化遗产', '传统建筑', '节庆与季节生活', '尊重在地的旅行建议'],
  ar: ['الفطائر الأوسيتية', 'الضيافة الجبلية', 'الأسواق المحلية', 'الإرث الألاني', 'العمارة التقليدية', 'المواسم والاحتفالات', 'إرشادات سفر باحترام']
} as const;
const copy = {
  en: { title: 'Food & Culture', subtitle: 'Understand local life before you arrive.', body: 'Context-focused notes for meaningful, respectful visits.' },
  ru: { title: 'Еда и культура', subtitle: 'Поймите ритм региона до начала поездки.', body: 'Краткие материалы для осмысленного и уважительного путешествия.' },
  zh: { title: '美食与文化', subtitle: '出发前先读懂当地生活方式。', body: '帮助你更深入、更尊重在地文化地旅行。' },
  ar: { title: 'الطعام والثقافة', subtitle: 'تعرّف على أسلوب الحياة المحلي قبل الوصول.', body: 'محتوى موجز لرحلة أعمق وأكثر احترامًا لثقافة المكان.' }
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isValidLocale(locale)) return {}; return pageMetadata({ locale, pathname: '/food-culture', title: `${copy[locale].title} | Visit Ossetia`, description: copy[locale].subtitle }); }

export default async function FoodCulturePage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isValidLocale(locale)) notFound(); return (<div><SectionHeader title={copy[locale].title} subtitle={copy[locale].subtitle} /><div className="grid gap-5 md:grid-cols-3">{sections[locale].map((section) => <InfoCard key={section} title={section}>{copy[locale].body}</InfoCard>)}</div></div>); }
