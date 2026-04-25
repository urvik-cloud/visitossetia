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

const homeContent: Record<Locale, {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  whyTitle: string;
  whySubtitle: string;
  whyItems: { title: string; body: string }[];
  routesTitle: string;
  routesSubtitle: string;
  itineraryTitle: string;
  itinerarySubtitle: string;
  itineraryCard: { dayLabel: string; title: string; body: string };
  supportCard: { title: string; duration: string; bestFor: string; body: string };
  confidenceTitle: string;
  confidenceSubtitle: string;
  confidenceItems: string[];
  finalCta: string;
}> = {
  en: {
    title: 'North Ossetia — The Mountain Heart of the Caucasus',
    subtitle:
      'A region of ancient towers, deep gorges, mountain roads and living culture waiting to be discovered.',
    primaryCta: 'Explore Routes',
    secondaryCta: 'Plan Your Trip',
    whyTitle: 'Why Visit Ossetia',
    whySubtitle: 'Built for travelers who want dramatic scenery, authentic culture, and confidence on the road.',
    whyItems: [
      { title: 'Mountain landscapes worth the road', body: 'High passes, river gorges, and cinematic viewpoints with real road-trip momentum.' },
      { title: 'Ancient Alanian heritage', body: 'Stone villages, medieval towers, and stories that still shape local life.' },
      { title: 'Authentic Caucasus food culture', body: 'Ossetian pies, mountain hospitality, and table traditions rooted in place.' },
      { title: 'Routes beyond mass tourism', body: 'Curated journeys designed for meaningful travel, not crowded checklist stops.' }
    ],
    routesTitle: 'Signature destinations',
    routesSubtitle: 'From city evenings to high mountain roads, each stop has atmosphere and practical clarity.',
    itineraryTitle: 'Scenic routes and 3-day preview',
    itinerarySubtitle: 'Start with a strong first itinerary, then adapt pace and depth with local support.',
    itineraryCard: {
      dayLabel: '3-Day Itinerary',
      title: 'Classic North Ossetia: city, gorges, and towers',
      body: 'A cinematic progression from Vladikavkaz to mountain valleys with enough time for food, culture, and photo stops.'
    },
    supportCard: {
      title: 'Curated route support',
      duration: 'Flexible pacing',
      bestFor: 'Families, private groups, first-time Caucasus travelers',
      body: 'Share your travel style and timing. We help shape a practical, premium route with transport and stop guidance.'
    },
    confidenceTitle: 'Travel with confidence',
    confidenceSubtitle: 'Clear expectations on roads, seasons, logistics, and pace before you go.',
    confidenceItems: ['Best seasons explained clearly', 'Road-time reality by route type', 'Private planning support in multiple languages', 'Safe, practical trip rhythm for families and groups'],
    finalCta: 'Plan your North Ossetia route with confidence and cinematic moments in every day.'
  },
  ru: {
    title: 'Северная Осетия — горное сердце Кавказа',
    subtitle: 'Регион древних башен, глубоких ущелий, горных дорог и живой культуры, которую хочется прожить в пути.',
    primaryCta: 'Смотреть маршруты',
    secondaryCta: 'План поездки',
    whyTitle: 'Почему стоит ехать в Осетию',
    whySubtitle: 'Для тех, кто ищет не шаблонный тур, а сильное горное путешествие с характером.',
    whyItems: [
      { title: 'Пейзажи, ради которых стоит ехать', body: 'Серпантины, перевалы и ущелья, где каждый поворот — как кадр из фильма.' },
      { title: 'Наследие Алании', body: 'Каменные башни, древние святыни и история, которая ощущается не в музее, а вокруг.' },
      { title: 'Настоящая кавказская гастрономия', body: 'Осетинские пироги, домашние традиции и гостеприимство без туристической бутафории.' },
      { title: 'Маршруты вне массового потока', body: 'Продуманные направления для тех, кто ценит атмосферу, а не галочки в списке.' }
    ],
    routesTitle: 'Главные направления',
    routesSubtitle: 'От вечернего Владикавказа до высокогорных дорог — красиво, понятно и удобно для планирования.',
    itineraryTitle: 'Сценические маршруты и preview на 3 дня',
    itinerarySubtitle: 'Готовый стартовый маршрут, который легко адаптировать под ваш темп и интересы.',
    itineraryCard: {
      dayLabel: 'Маршрут на 3 дня',
      title: 'Классическая Северная Осетия: город, ущелья, башни',
      body: 'Баланс городской атмосферы и горных дорог: природа, культура и время на неспешные остановки.'
    },
    supportCard: {
      title: 'Кураторская помощь по маршруту',
      duration: 'Гибкий формат',
      bestFor: 'Семьи, мини-группы, первое путешествие на Кавказ',
      body: 'Расскажите, как любите путешествовать, а мы соберём удобный и насыщенный маршрут с практической логикой.'
    },
    confidenceTitle: 'Путешествуйте уверенно',
    confidenceSubtitle: 'Заранее понимаете сезонность, дорогу, ритм поездки и ключевые организационные детали.',
    confidenceItems: ['Понятно о сезонах и погоде', 'Реальное время в пути по типам маршрутов', 'Поддержка в планировании на нескольких языках', 'Комфортный темп для семей и частных групп'],
    finalCta: 'Соберите маршрут по Северной Осетии, который запомнится не только видами, но и ощущением пути.'
  },
  zh: {
    title: '北奥塞梯——高加索的山地之心',
    subtitle: '这里有古老塔楼、深谷公路与仍在延续的本地文化，适合想要“看风景+走深度”的旅行者。',
    primaryCta: '探索路线',
    secondaryCta: '规划行程',
    whyTitle: '为什么选择北奥塞梯',
    whySubtitle: '兼顾风景体验、路线效率与出行安全感。',
    whyItems: [
      { title: '值得专程前往的山地景观', body: '峡谷、公路与观景点连成完整旅程，不只是单一打卡。' },
      { title: '阿兰文明与历史遗产', body: '古塔、山地村落与历史脉络清晰可感，文化体验更有深度。' },
      { title: '真实的高加索饮食文化', body: '奥塞梯馅饼、家庭式待客传统与在地餐桌文化。' },
      { title: '避开大众化线路', body: '更注重节奏和体验质量，适合私人小团与家庭旅行。' }
    ],
    routesTitle: '精选目的地',
    routesSubtitle: '从符拉季高加索城市夜景到高山峡谷公路，每站都兼顾氛围与实用信息。',
    itineraryTitle: '风景路线与3天行程预览',
    itinerarySubtitle: '先用一条高质量示范路线建立整体感，再按偏好微调。',
    itineraryCard: {
      dayLabel: '3天路线',
      title: '经典北奥塞梯：城市 + 峡谷 + 古塔',
      body: '节奏均衡，既能拍摄山地景观，也能体验本地文化与餐食。'
    },
    supportCard: {
      title: '路线咨询与定制支持',
      duration: '节奏可调',
      bestFor: '家庭出行、私人小团、首次到访高加索',
      body: '告诉我们你的时间和偏好，我们会提供清晰、可靠、可落地的路线建议。'
    },
    confidenceTitle: '更安心地出发',
    confidenceSubtitle: '提前了解季节、路况、交通组织与每日行程强度。',
    confidenceItems: ['季节和天气建议清晰', '按路线类型说明实际车程', '支持多语言沟通与行前规划', '适合家庭与小团的稳妥节奏'],
    finalCta: '现在开始规划你的北奥塞梯路线，让每一天都兼具风景与体验质量。'
  },
  ar: {
    title: 'أوسيتيا الشمالية — القلب الجبلي للقوقاز',
    subtitle: 'منطقة تجمع بين الأبراج التاريخية والوديان العميقة وطرق الجبال وثقافة حيّة تستحق الاكتشاف.',
    primaryCta: 'استكشف المسارات',
    secondaryCta: 'خطّط رحلتك',
    whyTitle: 'لماذا أوسيتيا الشمالية',
    whySubtitle: 'تجربة سفر راقية تجمع بين الجمال الطبيعي والثقة في التخطيط.',
    whyItems: [
      { title: 'مناظر جبلية تستحق الرحلة', body: 'طرق بانورامية عبر الوديان والمرتفعات مع محطات تصوير مذهلة.' },
      { title: 'إرث ألاني عريق', body: 'قرى حجرية وأبراج قديمة وتاريخ حيّ يمكن الشعور به في كل منطقة.' },
      { title: 'ثقافة طعام قوقازية أصيلة', body: 'ضيافة دافئة ومائدة محلية بطابع عائلي ومذاق تقليدي.' },
      { title: 'مسارات بعيداً عن الزحام السياحي', body: 'خيارات مدروسة لمن يبحث عن رحلة خاصة وهادئة وغنية بالتجربة.' }
    ],
    routesTitle: 'وجهات مميزة',
    routesSubtitle: 'من أمسيات فلاديقوقاز إلى طرق الجبال العالية — تجربة بصرية قوية مع معلومات عملية واضحة.',
    itineraryTitle: 'مسارات طبيعية مع معاينة برنامج 3 أيام',
    itinerarySubtitle: 'ابدأ بخطة متوازنة ثم عدّلها حسب أسلوب السفر والوقت المتاح.',
    itineraryCard: {
      dayLabel: 'برنامج 3 أيام',
      title: 'أوسيتيا الشمالية الكلاسيكية: مدينة، وديان، وأبراج',
      body: 'رحلة تجمع بين الأجواء المدنية والطبيعة الجبلية والثقافة المحلية بإيقاع مريح.'
    },
    supportCard: {
      title: 'دعم تخطيط المسار',
      duration: 'مرونة كاملة',
      bestFor: 'العائلات، المجموعات الخاصة، وزوار القوقاز لأول مرة',
      body: 'شاركنا نمط رحلتك وسنقترح لك مساراً عملياً وراقياً يشمل النقل والتوقفات المناسبة.'
    },
    confidenceTitle: 'سافر بثقة',
    confidenceSubtitle: 'معلومات واضحة حول المواسم والطرق والخدمات قبل الوصول.',
    confidenceItems: ['شرح دقيق لأفضل المواسم', 'تقدير واقعي لمدة التنقل بين المحطات', 'دعم تخطيط متعدد اللغات', 'إيقاع آمن ومناسب للعائلات والمجموعات'],
    finalCta: 'ابدأ تخطيط رحلتك إلى أوسيتيا الشمالية بأسلوب يوازن بين الراحة والمشهد السينمائي.'
  }
};

const placeTones: Array<'mountain' | 'city' | 'culture' | 'snow' | 'road'> = ['mountain', 'road', 'city', 'snow'];

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
    <div className="space-y-16 md:space-y-20">
      <Hero
        title={copy.title}
        subtitle={copy.subtitle}
        primaryCta={{ label: copy.primaryCta, href: `/${locale}/itineraries` }}
        secondaryCta={{ label: copy.secondaryCta, href: `/${locale}/plan` }}
        visuals={[
          { label: 'Mountain road near Fiagdon', tone: 'road' },
          { label: 'Dargavs valley landscape', tone: 'mountain' },
          { label: 'Vladikavkaz city evening', tone: 'city' },
          { label: 'Snowy Tsey gorge', tone: 'snow' }
        ]}
      />

      <TrustStrip items={d.trustStrip} />

      <section className="space-y-8">
        <SectionHeader title={copy.whyTitle} subtitle={copy.whySubtitle} />
        <FeatureGrid items={copy.whyItems} />
      </section>

      <section className="space-y-8">
        <SectionHeader title={copy.routesTitle} subtitle={copy.routesSubtitle} />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {places.map((place, idx) => (
            <PlaceCard
              key={place.slug}
              title={place.title[locale]}
              description={place.short[locale]}
              bestFor={place.bestFor[locale]}
              time={place.time[locale]}
              category={place.heroLabel}
              tone={placeTones[idx % placeTones.length]}
              cta={
                <a href={`/${locale}/places/${place.slug}`} className="inline-flex text-sm font-semibold text-stoneSky hover:text-accent">
                  {d.ctas.explorePlaces} →
                </a>
              }
            />
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] bg-slate-100/80 p-6 md:p-10">
        <SectionHeader title={copy.itineraryTitle} subtitle={copy.itinerarySubtitle} />
        <div className="grid gap-6 md:grid-cols-2">
          <ItineraryCard
            dayLabel={copy.itineraryCard.dayLabel}
            title={copy.itineraryCard.title}
            description={copy.itineraryCard.body}
            cta={
              <a href={`/${locale}/itineraries/3-day-north-ossetia`} className="inline-flex text-sm font-semibold text-stoneSky hover:text-accent">
                {d.ctas.viewItineraries} →
              </a>
            }
          />
          <TourCard
            title={copy.supportCard.title}
            duration={copy.supportCard.duration}
            bestFor={copy.supportCard.bestFor}
            description={copy.supportCard.body}
            cta={
              <a href={`/${locale}/contact`} className="inline-flex text-sm font-semibold text-stoneSky hover:text-accent">
                {d.ctas.requestTrip} →
              </a>
            }
          />
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 md:p-10">
        <SectionHeader title={copy.confidenceTitle} subtitle={copy.confidenceSubtitle} />
        <ul className="grid gap-3 text-slate-700 md:grid-cols-2">
          {copy.confidenceItems.map((item) => (
            <li key={item} className="rounded-2xl bg-slate-100 px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <CTASection title={copy.finalCta} actionLabel={d.ctas.planRoute} href={`/${locale}/plan`} />
    </div>
  );
}
