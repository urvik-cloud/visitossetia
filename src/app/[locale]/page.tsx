import { Hero } from '@/components/Hero';
import { PlaceCard, ItineraryCard, TourCard } from '@/components/Cards';
import { SectionHeader } from '@/components/SectionHeader';
import { CTASection, FeatureGrid } from '@/components/Misc';
import { getDictionary } from '@/i18n/dictionary';
import { isValidLocale } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/seo';
import { places } from '@/content/data';
import type { Locale } from '@/i18n/locales';


type Copy = {
  title: string;
  subtitle: string;
  heroEyebrow: string;
  heroCaption: string;
  primaryCta: string;
  secondaryCta: string;
  reasonsTitle: string;
  reasonsSubtitle: string;
  reasons: { title: string; body: string }[];
  plannerTitle: string;
  plannerSubtitle: string;
  plannerInput: string;
  plannerTags: string[];
  plannerAction: string;
  placesTitle: string;
  placesSubtitle: string;
  routesTitle: string;
  routesSubtitle: string;
  dayPreviewCard: { dayLabel: string; title: string; body: string };
  supportTitle: string;
  supportSubtitle: string;
  supportCard: { title: string; duration: string; bestFor: string; body: string };
  finalCta: string;
};

const homeContent: Record<Locale, Copy> = {
  en: {
    title: 'A mature mountain destination for travelers seeking the real Caucasus',
    subtitle: 'Scenic roads, tower landscapes, calm city rhythm, and clear route logic for a premium journey in North Ossetia.',
    heroEyebrow: 'North Ossetia • Caucasus',
    heroCaption: 'First impression: light, scale, and practical clarity.',
    primaryCta: 'Explore Routes',
    secondaryCta: 'Plan Your Trip',
    reasonsTitle: 'Three reasons to choose Ossetia',
    reasonsSubtitle: 'Compact geography with high experience density: less transfer time, more meaningful travel.',
    reasons: [
      { title: 'Heritage', body: 'Stone towers, villages, and historical layers integrated into the living landscape.' },
      { title: 'Routes', body: 'Scenic mountain arcs you can comfortably structure across three to five days.' },
      { title: 'Comfort', body: 'Private driver, guide support, and curated pacing for family and premium travel.' }
    ],
    plannerTitle: 'One clear window for planning',
    plannerSubtitle: 'Share your dates, comfort level, interests, and pace. Get a polished first scenario without complexity.',
    plannerInput: '4 days in September. Scenic drives, strong views, local cuisine, no difficult hikes.',
    plannerTags: ['4 days', 'Comfort', 'Photo', 'Cuisine'],
    plannerAction: 'Build My Route',
    placesTitle: 'Signature places',
    placesSubtitle: 'Editorially selected destinations with practical context.',
    routesTitle: 'Route previews',
    routesSubtitle: 'Start with reliable route architecture before fine-tuning your journey.',
    dayPreviewCard: {
      dayLabel: '3-day route',
      title: 'Classic flow: Vladikavkaz, Dargavs, Fiagdon',
      body: 'A balanced sequence with city evenings, valley drives, and flexible stops for viewpoints.'
    },
    supportTitle: 'Ossetia Travel Concierge',
    supportSubtitle: 'Premium planning preview for private and family trips with multilingual support.',
    supportCard: {
      title: 'Private trip support',
      duration: 'Flexible pacing',
      bestFor: 'Families, private groups, first-time visitors',
      body: 'From transfer logic to day sequencing, receive a route draft built for real travel conditions.'
    },
    finalCta: 'Some places are overhyped. Others are genuinely worth the journey.'
  },
  ru: {
    title: 'Зрелое горное направление для тех, кто ищет настоящий Кавказ',
    subtitle: 'Сценические дороги, башенные пейзажи, спокойный ритм города и понятная логика маршрута по Северной Осетии.',
    heroEyebrow: 'Северная Осетия • Кавказ',
    heroCaption: 'Первое впечатление: свет, масштаб и ясная структура поездки.',
    primaryCta: 'Исследовать маршруты',
    secondaryCta: 'План поездки',
    reasonsTitle: 'Три причины выбрать Осетию',
    reasonsSubtitle: 'Компактный регион с высокой плотностью впечатлений: меньше переездов, больше содержания.',
    reasons: [
      { title: 'Наследие', body: 'Башни, селения и исторические слои, встроенные в живой ландшафт.' },
      { title: 'Маршруты', body: 'Сценические горные дуги, которые удобно собрать за 3–5 дней без спешки.' },
      { title: 'Комфорт', body: 'Водитель, гид и аккуратное планирование в темпе, удобном для семьи и частных групп.' }
    ],
    plannerTitle: 'Одно окно для планирования',
    plannerSubtitle: 'Опишите поездку обычным языком: даты, ритм, интересы и уровень комфорта. Получите аккуратный первый сценарий.',
    plannerInput: '4 дня в сентябре. Красивые дороги, хорошие виды, местная кухня, без сложных походов.',
    plannerTags: ['4 дня', 'Комфорт', 'Фото', 'Кухня'],
    plannerAction: 'Собрать маршрут',
    placesTitle: 'Ключевые места',
    placesSubtitle: 'Отобранные локации с практическим контекстом и живой атмосферой.',
    routesTitle: 'Превью маршрутов',
    routesSubtitle: 'Начните с понятной структуры поездки, а затем доработайте детали под себя.',
    dayPreviewCard: {
      dayLabel: 'Маршрут на 3 дня',
      title: 'Классическая связка: Владикавказ, Даргавс, Фиагдон',
      body: 'Сбалансированный ритм: городские вечера, ущелья, панорамные точки и гибкие остановки.'
    },
    supportTitle: 'Ossetia Travel Concierge',
    supportSubtitle: 'Премиальный черновик планирования для семейных и частных путешествий.',
    supportCard: {
      title: 'Поддержка частного маршрута',
      duration: 'Гибкий темп',
      bestFor: 'Семьи, мини-группы, первое знакомство с Кавказом',
      body: 'Поможем собрать маршрут с комфортной логистикой, правильной последовательностью и ясными ожиданиями.'
    },
    finalCta: 'Некоторые места шумные. Другие действительно стоят вашей поездки.'
  },
  zh: {
    title: '成熟稳妥的山地目的地，适合想真正看懂高加索的旅行者',
    subtitle: '公路风景、古塔地貌、安静城市节奏与清晰行程逻辑，在北奥塞梯形成完整体验。',
    heroEyebrow: '北奥塞梯 • 高加索',
    heroCaption: '第一印象：通透光线、开阔尺度、规划清晰。',
    primaryCta: '探索路线',
    secondaryCta: '规划行程',
    reasonsTitle: '选择奥塞梯的三个理由',
    reasonsSubtitle: '区域紧凑但内容密度高：少折返、多体验。',
    reasons: [
      { title: '遗产', body: '古塔、村落与历史层次直接嵌入真实山地生活场景。' },
      { title: '路线', body: '风景公路组合清晰，3–5天即可完成高质量行程。' },
      { title: '舒适', body: '可配司机、向导与精细节奏，适合家庭与私享出行。' }
    ],
    plannerTitle: '一个入口完成规划',
    plannerSubtitle: '直接写下天数、偏好、节奏与预算重点，即可得到可执行的首版方案。',
    plannerInput: '9月4天，想看风景公路和山谷，吃本地菜，不安排高强度徒步。',
    plannerTags: ['4天', '舒适', '拍照', '美食'],
    plannerAction: '生成路线',
    placesTitle: '精选目的地',
    placesSubtitle: '重点地点配合实用说明，便于快速判断。',
    routesTitle: '路线预览',
    routesSubtitle: '先确定可靠框架，再按个人偏好细调。',
    dayPreviewCard: {
      dayLabel: '3天路线',
      title: '经典顺序：符拉季高加索—达尔加夫斯—菲亚格东',
      body: '城市与山谷节奏衔接顺畅，摄影点和停留时间更好把控。'
    },
    supportTitle: 'Ossetia Travel Concierge',
    supportSubtitle: '面向家庭与私人出行的高品质规划预览。',
    supportCard: {
      title: '私人路线支持',
      duration: '节奏可调',
      bestFor: '家庭、私团、首次到访高加索',
      body: '从交通衔接到每日顺序，帮助你把行程做得更稳、更顺、更安心。'
    },
    finalCta: '有些地方被过度宣传，有些地方值得你真正出发。'
  },
  ar: {
    title: 'وجهة جبلية راقية لمن يريد القوقاز الحقيقي بهدوء ووضوح',
    subtitle: 'طرق بانورامية وأبراج تاريخية وإيقاع مدينة مريح مع تخطيط عملي واضح في أوسيتيا الشمالية.',
    heroEyebrow: 'أوسيتيا الشمالية • القوقاز',
    heroCaption: 'الانطباع الأول: ضوء ناعم، مشهد واسع، وخطة واضحة.',
    primaryCta: 'استكشف المسارات',
    secondaryCta: 'خطط رحلتك',
    reasonsTitle: 'ثلاثة أسباب لاختيار أوسيتيا',
    reasonsSubtitle: 'منطقة مدمجة بتجارب غنية: تنقل أقل وقيمة أعلى لكل يوم.',
    reasons: [
      { title: 'التراث', body: 'أبراج وقرى وتاريخ حيّ حاضر داخل المشهد الطبيعي اليومي.' },
      { title: 'المسارات', body: 'طرق جبلية جميلة يمكن ترتيبها بسهولة خلال 3 إلى 5 أيام.' },
      { title: 'الراحة', body: 'سائق خاص، دعم إرشادي، وإيقاع مريح مناسب للعائلات والرحلات الخاصة.' }
    ],
    plannerTitle: 'نافذة واحدة للتخطيط',
    plannerSubtitle: 'اكتب عدد الأيام ونمط الرحلة ودرجة الراحة، لتحصل على تصور أولي أنيق وسهل التنفيذ.',
    plannerInput: '4 أيام في سبتمبر، طرق جميلة ومناظر قوية ومأكولات محلية بدون مسارات مشي صعبة.',
    plannerTags: ['4 أيام', 'راحة', 'تصوير', 'مطبخ'],
    plannerAction: 'أنشئ مساري',
    placesTitle: 'أماكن مختارة',
    placesSubtitle: 'وجهات منتقاة مع شرح عملي يساعدك على القرار بسرعة.',
    routesTitle: 'معاينة المسارات',
    routesSubtitle: 'ابدأ بهيكل موثوق للرحلة ثم عدّل التفاصيل كما يناسب عائلتك أو مجموعتك.',
    dayPreviewCard: {
      dayLabel: 'مسار 3 أيام',
      title: 'التسلسل الكلاسيكي: فلاديقوقاز، دارغافس، فياغدون',
      body: 'توازن مريح بين إيقاع المدينة وطرق الوديان مع محطات تصوير مرنة.'
    },
    supportTitle: 'Ossetia Travel Concierge',
    supportSubtitle: 'معاينة تخطيط راقية للرحلات الخاصة والعائلية.',
    supportCard: {
      title: 'دعم الرحلات الخاصة',
      duration: 'إيقاع مرن',
      bestFor: 'العائلات، المجموعات الخاصة، الزوار لأول مرة',
      body: 'نساعدك في ترتيب النقل وتسلسل الأيام بشكل واضح ومريح ويحفظ الخصوصية.'
    },
    finalCta: 'بعض الوجهات مزدحمة بلا عمق. وأخرى تستحق الرحلة فعلًا.'
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
    <div className="space-y-14 md:space-y-20">
      <Hero
        title={copy.title}
        subtitle={copy.subtitle}
        primaryCta={{ label: copy.primaryCta, href: `/${locale}/itineraries` }}
        secondaryCta={{ label: copy.secondaryCta, href: `/${locale}/plan` }}
        image="/images/01_hero_mountains_sunrise.jpg"
        imageAlt={copy.heroCaption}
        eyebrow={copy.heroEyebrow}
        caption={copy.heroCaption}
      />

      <section className="space-y-8">
        <SectionHeader title={copy.reasonsTitle} subtitle={copy.reasonsSubtitle} />
        <FeatureGrid items={copy.reasons} />
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-4">
          <SectionHeader title={copy.plannerTitle} subtitle={copy.plannerSubtitle} />
        </div>
        <article className="premium-card space-y-4 rounded-[2rem]">
          <textarea readOnly className="min-h-36 w-full rounded-2xl border border-[#e5e7ea] bg-white p-4 text-slate-700" value={copy.plannerInput} />
          <div className="flex flex-wrap gap-2">
            {copy.plannerTags.map((tag) => (
              <span key={tag} className="rounded-full bg-[#edf3f6] px-3 py-1 text-sm font-semibold text-[#315a78]">
                {tag}
              </span>
            ))}
          </div>
          <a href={`/${locale}/plan`} className="btn-primary inline-flex">
            {copy.plannerAction}
          </a>
        </article>
      </section>

      <section className="space-y-8">
        <SectionHeader title={copy.placesTitle} subtitle={copy.placesSubtitle} />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {places.slice(0, 3).map((place) => (
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
              cta={
                <a href={`/${locale}/places/${place.slug}`} className="inline-flex text-sm font-semibold text-[#315a78] hover:text-[#142434]">
                  {d.ctas.explorePlaces} →
                </a>
              }
            />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader title={copy.routesTitle} subtitle={copy.routesSubtitle} />
        <div className="grid gap-6 md:grid-cols-2">
          <ItineraryCard
            dayLabel={copy.dayPreviewCard.dayLabel}
            title={copy.dayPreviewCard.title}
            description={copy.dayPreviewCard.body}
            image="/images/03_hero_caucasus_peaks.jpg"
            alt={copy.routesTitle}
            cta={
              <a href={`/${locale}/itineraries/3-day-north-ossetia`} className="inline-flex text-sm font-semibold text-[#315a78] hover:text-[#142434]">
                {d.ctas.viewItineraries} →
              </a>
            }
          />
          <TourCard
            title={copy.supportCard.title}
            duration={copy.supportCard.duration}
            bestFor={copy.supportCard.bestFor}
            description={copy.supportCard.body}
            image="/images/02_hero_tower_landscape.jpg"
            alt={copy.supportTitle}
            eyebrow={d.labels.travelSupport}
            cta={
              <a href={`/${locale}/contact`} className="inline-flex text-sm font-semibold text-[#315a78] hover:text-[#142434]">
                {d.ctas.requestTrip} →
              </a>
            }
          />
        </div>
      </section>

      <section className="rounded-[2rem] border border-[#e5e7ea] bg-white p-6 md:p-8">
        <h2 className="text-3xl font-semibold text-[#142434] md:text-5xl">{copy.supportTitle}</h2>
        <p className="mt-3 max-w-3xl text-slate-600">{copy.supportSubtitle}</p>
        <a href={`/${locale}/concierge`} className="btn-secondary mt-6 inline-flex">
          {d.nav.find((item) => item.key === 'concierge')?.label ?? 'AI Concierge'}
        </a>
      </section>

      <CTASection title={copy.finalCta} actionLabel={d.ctas.planRoute} href={`/${locale}/plan`} image="/images/04_hero_fiagdon_valley.jpg" alt={copy.heroCaption} />
    </div>
  );
}
