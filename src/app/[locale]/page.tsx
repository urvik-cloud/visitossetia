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
import { DestinationImage } from '@/components/ImageCard';

type Copy = {
  title: string; subtitle: string; heroEyebrow: string; heroCaption: string; primaryCta: string; secondaryCta: string;
  badges: [string, string, string, string];
  whyTitle: string; whySubtitle: string; whyItems: { title: string; body: string }[];
  signatureTitle: string; signatureSubtitle: string;
  scenicTitle: string; scenicSubtitle: string; scenicLead: string; scenicBody: string;
  dayPreviewTitle: string; dayPreviewSubtitle: string; dayPreviewCard: { dayLabel: string; title: string; body: string };
  foodTitle: string; foodSubtitle: string; foodItems: { title: string; body: string }[];
  confidenceTitle: string; confidenceSubtitle: string; confidenceItems: string[];
  supportTitle: string; supportSubtitle: string; supportCard: { title: string; duration: string; bestFor: string; body: string };
  finalCta: string;
};

const homeContent: Record<Locale, Copy> = {
  en: {
    title: 'North Ossetia — The Mountain Heart of the Caucasus',
    subtitle: 'Ancient towers, alpine roads, and warm Ossetian hospitality in one cinematic journey.',
    heroEyebrow: 'Premium destination guide',
    heroCaption: 'Sunrise over Caucasus mountains',
    primaryCta: 'Explore Routes',
    secondaryCta: 'Plan Your Trip',
    badges: ['Mountain routes', 'Alanian heritage', 'Private planning', '3–5 day itineraries'],
    whyTitle: 'Why Visit Ossetia',
    whySubtitle: 'For travelers who prefer depth, atmosphere, and practical confidence over checklist tourism.',
    whyItems: [
      { title: 'Cinematic mountain roads', body: 'Drive through deep valleys and high panoramas where every turn feels editorial.' },
      { title: 'Ancient Alanian heritage', body: 'Stone towers, monasteries, and layered history rooted in daily life.' },
      { title: 'Authentic table culture', body: 'Ossetian pies and family hospitality with real local character.' },
      { title: 'Calm, curated travel pace', body: 'Routes designed for quality, comfort, and meaningful time in each stop.' }
    ],
    signatureTitle: 'Signature places',
    signatureSubtitle: 'Fewer, stronger destinations with a premium storytelling rhythm.',
    scenicTitle: 'Scenic routes',
    scenicSubtitle: 'Road arcs built for visual drama and smooth travel timing.',
    scenicLead: 'From tower valleys to open mountain light',
    scenicBody: 'Choose route lines that feel cinematic without sacrificing comfort: scenic roads, layered stops, and practical pace.',
    dayPreviewTitle: '3-day journey preview',
    dayPreviewSubtitle: 'A balanced sequence of city rhythm, heritage, and mountain atmosphere.',
    dayPreviewCard: { dayLabel: '3-day journey', title: 'Classic sequence: Vladikavkaz, Dargavs, Fiagdon', body: 'A refined itinerary with city evenings, valley drives, and flexible photo stops.' },
    foodTitle: 'Food and culture',
    foodSubtitle: 'Travel beyond viewpoints with stories, rituals, and table traditions.',
    foodItems: [
      { title: 'Ossetian pies and family tables', body: 'Cuisine here is a cultural language, not just a menu item.' },
      { title: 'Mountain hospitality', body: 'Warm welcome, generous hosting, and respectful guest traditions.' },
      { title: 'Living heritage', body: 'Architecture, memory, and local rhythm woven into each village.' }
    ],
    confidenceTitle: 'Travel confidence',
    confidenceSubtitle: 'Clear expectations on roads, seasons, and logistics before departure.',
    confidenceItems: ['Seasonal route guidance in plain language', 'Realistic road-time planning', 'Multilingual support for trip structure', 'Family and private-group friendly pacing'],
    supportTitle: 'Curated route support',
    supportSubtitle: 'Tell us your style, dates, and comfort level. We help shape a route that works beautifully in real conditions.',
    supportCard: { title: 'Private trip support', duration: 'Flexible pacing', bestFor: 'Families, private groups, first-time Caucasus travelers', body: 'From transport logic to stop sequencing, get a route draft built around your priorities.' },
    finalCta: 'Plan your North Ossetia journey with cinematic landscapes and practical clarity.'
  },
  ru: {
    title: 'Северная Осетия — горное сердце Кавказа',
    subtitle: 'Древние башни, панорамные дороги и кавказское гостеприимство — в маршруте, который выглядит как журнальная история.',
    heroEyebrow: 'Премиальный тревел-гид',
    heroCaption: 'Рассвет в горах Кавказа',
    primaryCta: 'Маршруты, ради которых стоит свернуть с привычного Кавказа',
    secondaryCta: 'Спланировать поездку',
    badges: ['Горные маршруты', 'Наследие Алании', 'Частное планирование', 'Маршруты на 3–5 дней'],
    whyTitle: 'Почему Осетия цепляет с первого дня',
    whySubtitle: 'Не шаблонный «турпакет», а собранное путешествие с характером и ясной логикой.',
    whyItems: [
      { title: 'Дороги с кинематографическим ритмом', body: 'Ущелья и перевалы сменяются так, будто кадры смонтированы заранее.' },
      { title: 'Места, где горы становятся историей', body: 'Башни, монастыри и каменные сёла здесь не декорация, а живая память региона.' },
      { title: 'Еда и гостеприимство без туристической маски', body: 'Осетинские пироги, домашний стол и тёплый человеческий контакт.' },
      { title: 'Маршруты без хаоса и случайных советов', body: 'Чёткий темп, понятные переезды и время, чтобы путешествие действительно прожить.' }
    ],
    signatureTitle: 'Главные места с сильной атмосферой',
    signatureSubtitle: 'Ключевые точки не в формате списка, а как связная маршрутная история.',
    scenicTitle: 'Сценические маршруты',
    scenicSubtitle: 'Маршруты, где панорамы и практичность работают вместе.',
    scenicLead: 'Как спланировать поездку без хаоса и случайных советов',
    scenicBody: 'Мы собираем маршрут в нужном ритме: яркие точки, время на паузы, комфортная логистика и никакой гонки «всё успеть».',
    dayPreviewTitle: 'Трёхдневное путешествие как готовый сценарий',
    dayPreviewSubtitle: 'Базовая композиция: город, история, дороги и горные долины.',
    dayPreviewCard: { dayLabel: 'Путешествие на 3 дня', title: 'Владикавказ, Даргавс, Фиагдон — маршрут с правильной драматургией', body: 'Городские вечера, видовые переезды и остановки, которые хочется запомнить, а не просто отметить.' },
    foodTitle: 'Культура и кухня, ради которых возвращаются',
    foodSubtitle: 'Не «достопримечательности», а настоящая ткань региона.',
    foodItems: [
      { title: 'Осетинские пироги и культура стола', body: 'Здесь еда — продолжение истории, уважения и гостеприимства.' },
      { title: 'Горная этика гостя', body: 'Тёплый приём, спокойный темп, уважение к месту и людям.' },
      { title: 'Живое наследие', body: 'Архитектура, традиции и ритм сёл формируют глубину поездки.' }
    ],
    confidenceTitle: 'Путешествуйте уверенно',
    confidenceSubtitle: 'Всё важное по сезону, дорогам и логистике — заранее и по делу.',
    confidenceItems: ['Понятные сезонные сценарии', 'Реальное время переездов', 'Поддержка на нескольких языках', 'Комфортный ритм для семей и частных групп'],
    supportTitle: 'Кураторская поддержка маршрута',
    supportSubtitle: 'Вы задаёте формат и даты — мы собираем маршрут, где эстетика и удобство не спорят между собой.',
    supportCard: { title: 'Частный маршрут под ваш стиль', duration: 'Гибкий темп', bestFor: 'Семьи, мини-группы, первое путешествие на Кавказ', body: 'От логистики до последовательности остановок — всё под ваш стиль путешествия.' },
    finalCta: 'Соберите маршрут по Северной Осетии, который выглядит как мечта и работает как чёткий план.'
  },
  zh: {
    title: '北奥塞梯——高加索的山地之心', subtitle: '古塔、峡谷公路与热情待客文化，共同构成一段有质感的高山旅程。', heroEyebrow: '高端目的地指南', heroCaption: '高加索山地日出', primaryCta: '探索路线', secondaryCta: '规划行程', badges: ['山地路线', '阿兰历史', '私人规划', '3–5天行程'],
    whyTitle: '为什么选择北奥塞梯', whySubtitle: '适合重视风景质感、文化深度与行程可靠性的旅行者。',
    whyItems: [{ title: '电影感山地公路', body: '峡谷与高山道路连成完整旅程，视觉冲击力强。' }, { title: '阿兰文明遗产', body: '古塔与修道院分布在真实生活场景中，文化体验不空泛。' }, { title: '在地饮食文化', body: '奥塞梯馅饼与家庭式待客传统，让旅行更有温度。' }, { title: '节奏友好的路线设计', body: '不过度赶路，强调体验质量与舒适度。' }],
    signatureTitle: '精选目的地', signatureSubtitle: '减少“碎片卡片”，强化叙事感与路线逻辑。', scenicTitle: '风景路线', scenicSubtitle: '兼顾拍摄效果与路程效率的山地线路。', scenicLead: '从古塔山谷到雪线公路', scenicBody: '以大景为主线，配合可执行的停靠节奏，让行程既出片也不疲惫。',
    dayPreviewTitle: '3天行程预览', dayPreviewSubtitle: '一条均衡示范线：城市、历史、人文与山景兼顾。', dayPreviewCard: { dayLabel: '3天旅程', title: '经典顺序：城市—达尔加夫斯—菲亚格东', body: '从城市节奏过渡到峡谷公路，行程流畅且出片率高。' },
    foodTitle: '美食与文化', foodSubtitle: '不止看风景，更深入当地生活方式。', foodItems: [{ title: '奥塞梯馅饼与家庭餐桌', body: '餐桌礼仪和待客文化是理解当地的重要入口。' }, { title: '山地待客传统', body: '从接待方式到日常交流，都体现温暖与尊重。' }, { title: '活态文化遗产', body: '建筑、习俗与村落节奏共同塑造旅行记忆。' }],
    confidenceTitle: '安心出行', confidenceSubtitle: '提前掌握季节、路况和交通组织。', confidenceItems: ['季节建议清晰易懂', '车程预估更贴近实际', '支持多语言沟通', '适合家庭与小团的稳妥节奏'], supportTitle: '定制路线支持', supportSubtitle: '告诉我们日期、偏好和预算节奏，我们将提供可执行的高质量路线建议。', supportCard: { title: '私人路线支持', duration: '节奏可调', bestFor: '家庭出行、私人小团、首次到访高加索', body: '从交通衔接到停靠顺序，帮助你把路线做得更顺、更安心。' }, finalCta: '现在开始规划北奥塞梯之旅，让每天都兼具风景与体验品质。'
  },
  ar: {
    title: 'أوسيتيا الشمالية — القلب الجبلي للقوقاز', subtitle: 'أبراج تاريخية وطرق جبلية خلابة وضيافة أوسيتية دافئة في رحلة واحدة متكاملة.', heroEyebrow: 'دليل وجهة فاخر', heroCaption: 'شروق الشمس فوق جبال القوقاز', primaryCta: 'استكشف المسارات', secondaryCta: 'خطط لرحلتك', badges: ['مسارات جبلية', 'إرث ألاني', 'تخطيط خاص', 'برامج 3–5 أيام'],
    whyTitle: 'لماذا أوسيتيا الشمالية', whySubtitle: 'وجهة مناسبة لمن يبحث عن المشهد القوي والتخطيط الموثوق والتجربة الثقافية الراقية.',
    whyItems: [{ title: 'طرق جبلية بطابع سينمائي', body: 'الوديان والمرتفعات تمنحك رحلة بصرية متماسكة من البداية حتى النهاية.' }, { title: 'إرث ألاني عريق', body: 'أبراج حجرية وأديرة تاريخية تحكي هوية المكان بوضوح.' }, { title: 'ثقافة ضيافة ومائدة أصيلة', body: 'التجربة هنا إنسانية ودافئة، وليست مجرد توقفات سريعة.' }, { title: 'إيقاع سفر هادئ ومدروس', body: 'مسارات مصممة للجودة والراحة بدل الجداول المزدحمة.' }],
    signatureTitle: 'أماكن مميزة', signatureSubtitle: 'لوحات بصرية أكبر وإيقاع تحريري أوضح.', scenicTitle: 'مسارات بانورامية', scenicSubtitle: 'خطوط سير جبلية تجمع الجمال البصري وسهولة التنفيذ.', scenicLead: 'من وديان الأبراج إلى قمم القوقاز', scenicBody: 'تسلسل ذكي للمحطات مع مرونة بالوقت بحيث تبقى الرحلة مريحة وثرية بصريًا.',
    dayPreviewTitle: 'معاينة رحلة 3 أيام', dayPreviewSubtitle: 'خطة متوازنة تجمع المدينة والتراث والطرق الجبلية.', dayPreviewCard: { dayLabel: 'رحلة 3 أيام', title: 'التسلسل الكلاسيكي: فلاديقوقاز، دارغافس، فياغدون', body: 'إيقاع متدرج بين المدينة والوديان مع محطات تصوير مريحة.' },
    foodTitle: 'الطعام والثقافة', foodSubtitle: 'رحلة غنية بالقصص والعادات وليست مجرد مناظر.', foodItems: [{ title: 'فطائر أوسيتية ومائدة عائلية', body: 'المطبخ المحلي جزء من الهوية الثقافية اليومية.' }, { title: 'ضيافة جبلية دافئة', body: 'أسلوب استقبال يوازن بين الكرم والخصوصية.' }, { title: 'تراث حيّ', body: 'العمارة والعادات ونمط الحياة يمنحون الرحلة عمقًا حقيقيًا.' }],
    confidenceTitle: 'سافر بثقة', confidenceSubtitle: 'افهم المواسم والطرق والخدمات قبل الانطلاق.', confidenceItems: ['توضيح مباشر لأفضل المواسم', 'تقدير واقعي لأزمنة التنقل', 'دعم تخطيط متعدد اللغات', 'إيقاع مناسب للعائلات والمجموعات الخاصة'], supportTitle: 'دعم مسارات مخصص', supportSubtitle: 'شاركنا تفضيلاتك وتواريخك لنقترح مسارًا عمليًا وفاخرًا يناسبك.', supportCard: { title: 'دعم الرحلات الخاصة', duration: 'مرونة كاملة', bestFor: 'العائلات، المجموعات الخاصة، زوار القوقاز لأول مرة', body: 'نساعدك في ضبط النقل والتوقفات وتسلسل الأيام بصورة مريحة وواضحة.' }, finalCta: 'ابدأ تخطيط رحلتك إلى أوسيتيا الشمالية بأسلوب يجمع بين الراحة وروعة المشهد.'
  }
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
      <Hero
        title={copy.title}
        subtitle={copy.subtitle}
        primaryCta={{ label: copy.primaryCta, href: `/${locale}/itineraries` }}
        secondaryCta={{ label: copy.secondaryCta, href: `/${locale}/plan` }}
        image="/images/01_hero_mountains_sunrise.jpg"
        imageAlt={copy.heroCaption}
        eyebrow={copy.heroEyebrow}
        caption={copy.heroCaption}
        badges={copy.badges}
      />

      <TrustStrip items={d.trustStrip} />

      <section className="space-y-8">
        <SectionHeader title={copy.whyTitle} subtitle={copy.whySubtitle} />
        <FeatureGrid items={copy.whyItems} />
      </section>

      <section className="space-y-8">
        <SectionHeader title={copy.signatureTitle} subtitle={copy.signatureSubtitle} />
        <div className="grid gap-7 md:grid-cols-[1.25fr_1fr]">
          <div className="premium-card overflow-hidden p-0">
            <DestinationImage src="/images/02_hero_tower_landscape.jpg" alt={copy.signatureTitle} className="rounded-none" />
            <div className="space-y-3 p-7">
              <p className="eyebrow !text-stoneSky/80">{copy.badges[1]}</p>
              <h3 className="text-3xl font-semibold leading-tight text-slate-900">{copy.scenicLead}</h3>
              <p className="text-slate-700">{copy.scenicBody}</p>
            </div>
          </div>
          <div className="grid gap-6">
            {places.slice(0, 2).map((place) => (
              <PlaceCard
                key={place.slug}
                title={place.title[locale]}
                description={place.short[locale]}
                bestFor={place.bestFor[locale]}
                time={place.time[locale]}
                category={place.heroLabel[locale]}
                image={place.image}
                alt={place.heroLabel[locale]}
                labels={{ bestFor: d.labels.bestFor, practical: d.labels.practicalNote }}
                cta={<a href={`/${locale}/places/${place.slug}`} className="inline-flex text-sm font-semibold text-stoneSky hover:text-accent">{d.ctas.explorePlaces} →</a>}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] bg-gradient-to-br from-[#0f2841] via-[#224363] to-[#5f7a6d] p-6 md:p-10 text-white">
        <SectionHeader title={copy.scenicTitle} subtitle={copy.scenicSubtitle} />
        <div className="grid gap-7 md:grid-cols-2">
          <ItineraryCard dayLabel={copy.dayPreviewCard.dayLabel} title={copy.dayPreviewCard.title} description={copy.dayPreviewCard.body} image="/images/03_hero_caucasus_peaks.jpg" alt={copy.scenicTitle} cta={<a href={`/${locale}/itineraries/3-day-north-ossetia`} className="inline-flex text-sm font-semibold text-white hover:text-amber-200">{d.ctas.viewItineraries} →</a>} />
          <TourCard title={copy.supportCard.title} duration={copy.supportCard.duration} bestFor={copy.supportCard.bestFor} description={copy.supportCard.body} image="/images/04_hero_fiagdon_valley.jpg" alt={copy.supportTitle} eyebrow={d.labels.travelSupport} cta={<a href={`/${locale}/contact`} className="inline-flex text-sm font-semibold text-white hover:text-amber-200">{d.ctas.requestTrip} →</a>} />
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader title={copy.dayPreviewTitle} subtitle={copy.dayPreviewSubtitle} />
        <div className="grid gap-7 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div className="premium-card p-0">
            <DestinationImage src="/images/03_hero_caucasus_peaks.jpg" alt={copy.dayPreviewTitle} className="rounded-none" />
          </div>
          <article className="premium-card">
            <p className="eyebrow !text-stoneSky/80">{copy.badges[3]}</p>
            <h3 className="text-3xl font-semibold text-slate-900">{copy.dayPreviewCard.title}</h3>
            <p className="mt-3 text-slate-700">{copy.dayPreviewCard.body}</p>
          </article>
        </div>
      </section>

      <section className="space-y-8 rounded-[2rem] border border-[#e3e8ee] bg-[#fbfcff] p-6 md:p-10">
        <SectionHeader title={copy.foodTitle} subtitle={copy.foodSubtitle} />
        <FeatureGrid items={copy.foodItems} />
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 md:p-10">
        <SectionHeader title={copy.confidenceTitle} subtitle={copy.confidenceSubtitle} />
        <ul className="grid gap-3 text-slate-700 md:grid-cols-2">
          {copy.confidenceItems.map((item) => (
            <li key={item} className="rounded-2xl bg-slate-100 px-4 py-3">{item}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-[2rem] border border-[#d9e1e8] bg-[#f8fbff] p-8">
        <h2 className="text-3xl font-semibold text-stoneSky">{copy.supportTitle}</h2>
        <p className="mt-3 text-slate-700">{copy.supportSubtitle}</p>
        <a href={`/${locale}/contact`} className="btn-primary mt-6 inline-flex">{d.ctas.askGuidance}</a>
      </section>

      <CTASection title={copy.finalCta} actionLabel={d.ctas.planRoute} href={`/${locale}/plan`} image="/images/01_hero_mountains_sunrise.jpg" alt={copy.heroCaption} />
    </div>
  );
}
