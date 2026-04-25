import { Hero } from '@/components/Hero';
import { PlaceCard, ItineraryCard, TourCard } from '@/components/Cards';
import { SectionHeader } from '@/components/SectionHeader';
import { CTASection, FeatureGrid, TrustStrip } from '@/components/Misc';
import { getDictionary } from '@/i18n/dictionary';
import { isValidLocale } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/seo';
import { places } from '@/content/data';
import type { Locale } from '@/i18n/locales';

type Copy = {
  title: string; subtitle: string; heroEyebrow: string; heroCaption: string; primaryCta: string; secondaryCta: string;
  whyTitle: string; whySubtitle: string; whyItems: { title: string; body: string }[];
  placesTitle: string; placesSubtitle: string;
  routesTitle: string; routesSubtitle: string;
  dayPreviewTitle: string; dayPreviewSubtitle: string; dayPreviewCard: { dayLabel: string; title: string; body: string };
  foodTitle: string; foodSubtitle: string; foodItems: { title: string; body: string }[];
  confidenceTitle: string; confidenceSubtitle: string; confidenceItems: string[];
  supportTitle: string; supportSubtitle: string; supportCard: { title: string; duration: string; bestFor: string; body: string };
  finalCta: string;
};

const homeContent: Record<Locale, Copy> = {
  en: { title: 'North Ossetia — The Mountain Heart of the Caucasus', subtitle: 'Ancient towers, alpine roads, and warm Ossetian hospitality in one cinematic journey.', heroEyebrow: 'Premium destination guide', heroCaption: 'Sunrise over Caucasus mountains', primaryCta: 'Explore Routes', secondaryCta: 'Plan Your Trip',
    whyTitle: 'Why Visit Ossetia', whySubtitle: 'For travelers who prefer depth, atmosphere, and practical confidence over checklist tourism.',
    whyItems: [{ title: 'Cinematic mountain roads', body: 'Drive through deep valleys and high panoramas where every turn feels editorial.' }, { title: 'Ancient Alanian heritage', body: 'Stone towers, monasteries, and layered history rooted in daily life.' }, { title: 'Authentic table culture', body: 'Ossetian pies and family hospitality with real local character.' }, { title: 'Calm, curated travel pace', body: 'Routes designed for quality, comfort, and meaningful time in each stop.' }],
    placesTitle: 'Signature places', placesSubtitle: 'Handpicked destinations with atmosphere, context, and route logic.',
    routesTitle: 'Scenic routes', routesSubtitle: 'Mountain-driving arcs designed for visual impact and smooth timing.',
    dayPreviewTitle: '3-day journey preview', dayPreviewSubtitle: 'A strong first route that balances city rhythm, heritage, and mountain landscapes.', dayPreviewCard: { dayLabel: '3-day journey', title: 'Classic sequence: Vladikavkaz, Dargavs, Fiagdon', body: 'A refined itinerary with city evenings, valley drives, and flexible photo stops.' },
    foodTitle: 'Food and culture', foodSubtitle: 'Travel beyond viewpoints with stories, rituals, and table traditions.', foodItems: [{ title: 'Ossetian pies and family tables', body: 'Cuisine here is a cultural language, not just a menu item.' }, { title: 'Mountain hospitality', body: 'Warm welcome, generous hosting, and respectful guest traditions.' }, { title: 'Living heritage', body: 'Architecture, memory, and local rhythm woven into each village.' }],
    confidenceTitle: 'Travel confidence', confidenceSubtitle: 'Clear expectations on roads, seasons, and logistics before departure.', confidenceItems: ['Seasonal route guidance in plain language', 'Realistic road-time planning', 'Multilingual support for trip structure', 'Family and private-group friendly pacing'],
    supportTitle: 'Curated route support', supportSubtitle: 'Tell us your style, dates, and comfort level. We help shape a route that works beautifully in real conditions.', supportCard: { title: 'Private trip support', duration: 'Flexible pacing', bestFor: 'Families, private groups, first-time Caucasus travelers', body: 'From transport logic to stop sequencing, get a route draft built around your priorities.' }, finalCta: 'Plan your North Ossetia journey with cinematic landscapes and practical clarity.' },
  ru: { title: 'Северная Осетия — горное сердце Кавказа', subtitle: 'Древние башни, серпантины и настоящее осетинское гостеприимство в одном сильном путешествии.', heroEyebrow: 'Премиальный тревел-гид', heroCaption: 'Рассвет в горах Кавказа', primaryCta: 'Исследовать маршруты', secondaryCta: 'Спланировать поездку',
    whyTitle: 'Почему стоит ехать в Осетию', whySubtitle: 'Для тех, кто ценит атмосферу, смысл и комфортную организацию маршрута.',
    whyItems: [{ title: 'Кинематографичные горные дороги', body: 'Ущелья, перевалы и смотровые, где каждый поворот запоминается.' }, { title: 'Наследие древней Алании', body: 'Башни, монастыри и историческая глубина, которая чувствуется в ландшафте.' }, { title: 'Живая гастрокультура', body: 'Осетинские пироги, семейные традиции и тёплый формат приема гостей.' }, { title: 'Маршруты с правильным ритмом', body: 'Не гонка по точкам, а продуманное путешествие с временем на впечатления.' }],
    placesTitle: 'Главные места', placesSubtitle: 'Отобранные локации с понятной логикой и сильной визуальной подачей.',
    routesTitle: 'Сценические маршруты', routesSubtitle: 'Дорожные дуги по горам, где красиво и удобно держать темп.',
    dayPreviewTitle: 'Превью путешествия на 3 дня', dayPreviewSubtitle: 'Базовый маршрут, где уравновешены город, история и горная часть.', dayPreviewCard: { dayLabel: 'Путешествие на 3 дня', title: 'Классический ритм: Владикавказ, Даргавс, Фиагдон', body: 'Городские вечера, видовые дороги и остановки в ключевых точках.' },
    foodTitle: 'Еда и культура', foodSubtitle: 'Путешествие не только про виды, но и про характер региона.', foodItems: [{ title: 'Осетинские пироги и застолье', body: 'Здесь еда — часть истории, общения и уважения к гостю.' }, { title: 'Горное гостеприимство', body: 'Тёплый прием и ощущение, что вас ждут не формально, а по-настоящему.' }, { title: 'Живое наследие', body: 'Архитектура, обычаи и ритм сёл, которые создают глубину маршрута.' }],
    confidenceTitle: 'Путешествуйте уверенно', confidenceSubtitle: 'Понимайте сезонность, дороги и организацию заранее.', confidenceItems: ['Понятно о сезонах и погоде', 'Реалистичный тайминг переездов', 'Поддержка планирования на нескольких языках', 'Комфортный ритм для семей и частных групп'],
    supportTitle: 'Кураторская поддержка маршрута', supportSubtitle: 'Расскажите о формате поездки и датах — мы поможем собрать удобный и красивый маршрут.', supportCard: { title: 'Поддержка частного маршрута', duration: 'Гибкий темп', bestFor: 'Семьи, мини-группы, первое путешествие на Кавказ', body: 'От логистики до последовательности остановок — всё под ваш стиль путешествия.' }, finalCta: 'Соберите маршрут по Северной Осетии, где впечатляющие виды сочетаются с продуманной логикой.' },
  zh: { title: '北奥塞梯——高加索的山地之心', subtitle: '古塔、峡谷公路与热情待客文化，共同构成一段有质感的高山旅程。', heroEyebrow: '高端目的地指南', heroCaption: '高加索山地日出', primaryCta: '探索路线', secondaryCta: '规划行程',
    whyTitle: '为什么选择北奥塞梯', whySubtitle: '适合重视风景质感、文化深度与行程可靠性的旅行者。',
    whyItems: [{ title: '电影感山地公路', body: '峡谷与高山道路连成完整旅程，视觉冲击力强。' }, { title: '阿兰文明遗产', body: '古塔与修道院分布在真实生活场景中，文化体验不空泛。' }, { title: '在地饮食文化', body: '奥塞梯馅饼与家庭式待客传统，让旅行更有温度。' }, { title: '节奏友好的路线设计', body: '不过度赶路，强调体验质量与舒适度。' }],
    placesTitle: '精选目的地', placesSubtitle: '重点地点配套实用信息，便于快速决策。',
    routesTitle: '风景路线', routesSubtitle: '兼顾拍摄效果与路程效率的山地线路。',
    dayPreviewTitle: '3天行程预览', dayPreviewSubtitle: '一条均衡示范线：城市、历史、人文与山景兼顾。', dayPreviewCard: { dayLabel: '3天旅程', title: '经典顺序：城市—达尔加夫斯—菲亚格东', body: '从城市节奏过渡到峡谷公路，行程流畅且出片率高。' },
    foodTitle: '美食与文化', foodSubtitle: '不止看风景，更深入当地生活方式。', foodItems: [{ title: '奥塞梯馅饼与家庭餐桌', body: '餐桌礼仪和待客文化是理解当地的重要入口。' }, { title: '山地待客传统', body: '从接待方式到日常交流，都体现温暖与尊重。' }, { title: '活态文化遗产', body: '建筑、习俗与村落节奏共同塑造旅行记忆。' }],
    confidenceTitle: '安心出行', confidenceSubtitle: '提前掌握季节、路况和交通组织。', confidenceItems: ['季节建议清晰易懂', '车程预估更贴近实际', '支持多语言沟通', '适合家庭与小团的稳妥节奏'],
    supportTitle: '定制路线支持', supportSubtitle: '告诉我们日期、偏好和预算节奏，我们将提供可执行的高质量路线建议。', supportCard: { title: '私人路线支持', duration: '节奏可调', bestFor: '家庭出行、私人小团、首次到访高加索', body: '从交通衔接到停靠顺序，帮助你把路线做得更顺、更安心。' }, finalCta: '现在开始规划北奥塞梯之旅，让每天都兼具风景与体验品质。' },
  ar: { title: 'أوسيتيا الشمالية — القلب الجبلي للقوقاز', subtitle: 'أبراج تاريخية وطرق جبلية خلابة وضيافة أوسيتية دافئة في رحلة واحدة متكاملة.', heroEyebrow: 'دليل وجهة فاخر', heroCaption: 'شروق الشمس فوق جبال القوقاز', primaryCta: 'استكشف المسارات', secondaryCta: 'خطط لرحلتك',
    whyTitle: 'لماذا أوسيتيا الشمالية', whySubtitle: 'وجهة مناسبة لمن يبحث عن المشهد القوي والتخطيط الموثوق والتجربة الثقافية الراقية.',
    whyItems: [{ title: 'طرق جبلية بطابع سينمائي', body: 'الوديان والمرتفعات تمنحك رحلة بصرية متماسكة من البداية حتى النهاية.' }, { title: 'إرث ألاني عريق', body: 'أبراج حجرية وأديرة تاريخية تحكي هوية المكان بوضوح.' }, { title: 'ثقافة ضيافة ومائدة أصيلة', body: 'التجربة هنا إنسانية ودافئة، وليست مجرد توقفات سريعة.' }, { title: 'إيقاع سفر هادئ ومدروس', body: 'مسارات مصممة للجودة والراحة بدل الجداول المزدحمة.' }],
    placesTitle: 'أماكن مميزة', placesSubtitle: 'وجهات منتقاة بعناية مع سياق عملي واضح.',
    routesTitle: 'مسارات بانورامية', routesSubtitle: 'خطوط سير جبلية تجمع الجمال البصري وسهولة التنفيذ.',
    dayPreviewTitle: 'معاينة رحلة 3 أيام', dayPreviewSubtitle: 'خطة متوازنة تجمع المدينة والتراث والطرق الجبلية.', dayPreviewCard: { dayLabel: 'رحلة 3 أيام', title: 'التسلسل الكلاسيكي: فلاديقوقاز، دارغافس، فياغدون', body: 'إيقاع متدرج بين المدينة والوديان مع محطات تصوير مريحة.' },
    foodTitle: 'الطعام والثقافة', foodSubtitle: 'رحلة غنية بالقصص والعادات وليست مجرد مناظر.', foodItems: [{ title: 'فطائر أوسيتية ومائدة عائلية', body: 'المطبخ المحلي جزء من الهوية الثقافية اليومية.' }, { title: 'ضيافة جبلية دافئة', body: 'أسلوب استقبال يوازن بين الكرم والخصوصية.' }, { title: 'تراث حيّ', body: 'العمارة والعادات ونمط الحياة يمنحون الرحلة عمقًا حقيقيًا.' }],
    confidenceTitle: 'سافر بثقة', confidenceSubtitle: 'افهم المواسم والطرق والخدمات قبل الانطلاق.', confidenceItems: ['توضيح مباشر لأفضل المواسم', 'تقدير واقعي لأزمنة التنقل', 'دعم تخطيط متعدد اللغات', 'إيقاع مناسب للعائلات والمجموعات الخاصة'],
    supportTitle: 'دعم مسارات مخصص', supportSubtitle: 'شاركنا تفضيلاتك وتواريخك لنقترح مسارًا عمليًا وفاخرًا يناسبك.', supportCard: { title: 'دعم الرحلات الخاصة', duration: 'مرونة كاملة', bestFor: 'العائلات، المجموعات الخاصة، زوار القوقاز لأول مرة', body: 'نساعدك في ضبط النقل والتوقفات وتسلسل الأيام بصورة مريحة وواضحة.' }, finalCta: 'ابدأ تخطيط رحلتك إلى أوسيتيا الشمالية بأسلوب يجمع بين الراحة وروعة المشهد.' }
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const copy = homeContent[locale];
  return pageMetadata({ locale, pathname: '', title: `${copy.title} | Visit Ossetia`, description: copy.subtitle });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const d = getDictionary(locale);
  const copy = homeContent[locale];

  return (
    <div className="space-y-16 md:space-y-24">
      <Hero title={copy.title} subtitle={copy.subtitle} primaryCta={{ label: copy.primaryCta, href: `/${locale}/itineraries` }} secondaryCta={{ label: copy.secondaryCta, href: `/${locale}/plan` }} image="/images/01_hero_mountains_sunrise.jpg" imageAlt={copy.heroCaption} eyebrow={copy.heroEyebrow} caption={copy.heroCaption} />
      <TrustStrip items={d.trustStrip} />

      <section className="space-y-8"><SectionHeader title={copy.whyTitle} subtitle={copy.whySubtitle} /><FeatureGrid items={copy.whyItems} /></section>

      <section className="space-y-8"><SectionHeader title={copy.placesTitle} subtitle={copy.placesSubtitle} /><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{places.map((place) => <PlaceCard key={place.slug} title={place.title[locale]} description={place.short[locale]} bestFor={place.bestFor[locale]} time={place.time[locale]} category={place.heroLabel[locale]} image={place.image} alt={place.heroLabel[locale]} labels={{ bestFor: d.labels.bestFor, practical: d.labels.practicalNote }} cta={<a href={`/${locale}/places/${place.slug}`} className="inline-flex text-sm font-semibold text-stoneSky hover:text-accent">{d.ctas.explorePlaces} →</a>} />)}</div></section>

      <section className="space-y-8 rounded-[2rem] bg-gradient-to-br from-[#10253a] via-[#1e3c5a] to-[#486170] p-6 md:p-10 text-white"><SectionHeader title={copy.routesTitle} subtitle={copy.routesSubtitle} /><div className="grid gap-6 md:grid-cols-2"><ItineraryCard dayLabel={copy.dayPreviewCard.dayLabel} title={copy.dayPreviewCard.title} description={copy.dayPreviewCard.body} image="/images/03_hero_caucasus_peaks.jpg" alt={copy.routesTitle} cta={<a href={`/${locale}/itineraries/3-day-north-ossetia`} className="inline-flex text-sm font-semibold text-white hover:text-amber-200">{d.ctas.viewItineraries} →</a>} /><TourCard title={copy.supportCard.title} duration={copy.supportCard.duration} bestFor={copy.supportCard.bestFor} description={copy.supportCard.body} image="/images/02_hero_tower_landscape.jpg" alt={copy.supportTitle} eyebrow={d.labels.travelSupport} cta={<a href={`/${locale}/contact`} className="inline-flex text-sm font-semibold text-white hover:text-amber-200">{d.ctas.requestTrip} →</a>} /></div></section>

      <section className="space-y-8"><SectionHeader title={copy.dayPreviewTitle} subtitle={copy.dayPreviewSubtitle} /><article className="premium-card"><h3 className="text-2xl font-semibold">{copy.dayPreviewCard.title}</h3><p className="mt-3 text-slate-700">{copy.dayPreviewCard.body}</p></article></section>

      <section className="space-y-8"><SectionHeader title={copy.foodTitle} subtitle={copy.foodSubtitle} /><FeatureGrid items={copy.foodItems} /></section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 md:p-10"><SectionHeader title={copy.confidenceTitle} subtitle={copy.confidenceSubtitle} /><ul className="grid gap-3 text-slate-700 md:grid-cols-2">{copy.confidenceItems.map((item) => <li key={item} className="rounded-2xl bg-slate-100 px-4 py-3">{item}</li>)}</ul></section>

      <section className="rounded-[2rem] border border-[#d9e1e8] bg-[#f8fbff] p-8"><h2 className="text-3xl font-semibold text-stoneSky">{copy.supportTitle}</h2><p className="mt-3 text-slate-700">{copy.supportSubtitle}</p><a href={`/${locale}/contact`} className="btn-primary mt-6 inline-flex">{d.ctas.askGuidance}</a></section>

      <CTASection title={copy.finalCta} actionLabel={d.ctas.planRoute} href={`/${locale}/plan`} image="/images/01_hero_mountains_sunrise.jpg" alt={copy.heroCaption} />
    </div>
  );
}
