import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ConciergePlanner } from '@/components/ConciergePlanner';
import { isValidLocale } from '@/i18n/routing';
import { pageMetadata } from '@/lib/seo';

const copy = {
  en: {
    title: 'Ossetia Travel Concierge',
    subtitle: 'A premium natural-language route planning prototype for North Ossetia.',
    panel: {
      inputLabel: 'Tell us your trip preferences',
      inputPlaceholder: '3 days in September, mountains, local food, no extreme hiking',
      chips: ['1 day', '3 days', '5 days', 'Family trip', 'Photography', 'Food & culture', 'Soft hiking', 'Private route'],
      createButton: 'Create my route',
      prototypeNote: 'Prototype preview — route suggestions are generated from curated Visit Ossetia planning patterns.',
      resultTitle: 'Cinematic Caucasus route',
      dayLabel: 'Day-by-day outline',
      bestForLabel: 'Best for',
      practicalLabel: 'Practical notes',
      supportLabel: 'Local support recommendation',
      requestCta: 'Request this route',
      days: ['Day 1 — Vladikavkaz arrival, boulevard walk, evening Ossetian table.', 'Day 2 — Dargavs panoramas, Fiagdon valley viewpoints, relaxed photo timing.', 'Day 3 — Mountain road morning, cultural stops, return with flexible pace.'],
      bestFor: 'Couples, families, and first-time Caucasus travelers who value comfort and atmosphere.',
      practical: ['Roads are smoother with private driver support', 'Keep one weather backup stop per day'],
      support: 'Ask for bilingual local coordination for transport timing and family-friendly pacing.'
    }
  },
  ru: {
    title: 'Ossetia Travel Concierge',
    subtitle: 'Премиальный прототип планирования маршрута по Северной Осетии на естественном языке.',
    panel: {
      inputLabel: 'Опишите поездку своими словами',
      inputPlaceholder: '3 дня в сентябре, горы, кухня, без экстремальных походов',
      chips: ['1 день', '3 дня', '5 дней', 'Семейная поездка', 'Фотография', 'Еда и культура', 'Лёгкий трекинг', 'Частный маршрут'],
      createButton: 'Собрать мой маршрут',
      prototypeNote: 'Прототип — маршрут собирается на основе подготовленных сценариев Visit Ossetia.',
      resultTitle: 'Сценический маршрут по Кавказу',
      dayLabel: 'План по дням',
      bestForLabel: 'Лучше всего подойдёт для',
      practicalLabel: 'Практические заметки',
      supportLabel: 'Рекомендация по локальной поддержке',
      requestCta: 'Запросить этот маршрут',
      days: ['День 1 — прибытие во Владикавказ, прогулка по проспекту, ужин с локальной кухней.', 'День 2 — Даргавс, видовые точки Фиагдона, спокойный темп и фотостопы.', 'День 3 — горная дорога утром, культурные остановки, гибкое возвращение.'],
      bestFor: 'Семей, пар и тех, кто впервые едет на Кавказ и хочет комфортный ритм.',
      practical: ['Лучше закладывать частный трансфер с водителем', 'На каждый день стоит иметь запасной вариант по погоде'],
      support: 'Запросите двуязычную локальную координацию, чтобы точно держать тайминг и комфорт.'
    }
  },
  zh: {
    title: 'Ossetia Travel Concierge',
    subtitle: '面向北奥塞梯游客的高端自然语言行程规划原型。',
    panel: {
      inputLabel: '请直接描述你的旅行偏好',
      inputPlaceholder: '9月3天，想看山景、体验当地美食，不要高强度徒步',
      chips: ['1天', '3天', '5天', '家庭出行', '摄影', '美食与文化', '轻徒步', '私人路线'],
      createButton: '生成我的路线',
      prototypeNote: '原型预览——路线建议基于 Visit Ossetia 已整理的旅行规划模式。',
      resultTitle: '高加索电影感路线',
      dayLabel: '每日行程概览',
      bestForLabel: '适合人群',
      practicalLabel: '实用提示',
      supportLabel: '本地支持建议',
      requestCta: '申请此路线',
      days: ['第1天：抵达城市，步行街与晚间奥塞梯餐桌体验。', '第2天：达尔加夫斯+菲亚格东峡谷，摄影停靠节奏更从容。', '第3天：山地公路半日，文化停靠点，弹性返程。'],
      bestFor: '重视舒适度、节奏和文化体验的家庭或首次到访高加索的旅行者。',
      practical: ['建议搭配本地司机，山路体验更稳定', '每天预留一个天气备选点位'],
      support: '建议申请中英双语在地协同，便于衔接交通与亲子节奏。'
    }
  },
  ar: {
    title: 'Ossetia Travel Concierge',
    subtitle: 'نموذج تخطيط فاخر لرحلات أوسيتيا الشمالية باستخدام اللغة الطبيعية.',
    panel: {
      inputLabel: 'اكتب تفضيلات رحلتك بشكل طبيعي',
      inputPlaceholder: '3 أيام في سبتمبر، جبال وطعام محلي وبدون مسارات صعبة',
      chips: ['يوم واحد', '3 أيام', '5 أيام', 'رحلة عائلية', 'تصوير', 'طعام وثقافة', 'نزهات خفيفة', 'مسار خاص'],
      createButton: 'أنشئ مساري',
      prototypeNote: 'معاينة تجريبية — تُبنى الاقتراحات على أنماط تخطيط معدّة من Visit Ossetia.',
      resultTitle: 'مسار بانورامي في القوقاز',
      dayLabel: 'خطة يومًا بيوم',
      bestForLabel: 'الأنسب لـ',
      practicalLabel: 'ملاحظات عملية',
      supportLabel: 'توصية بالدعم المحلي',
      requestCta: 'اطلب هذا المسار',
      days: ['اليوم 1: الوصول إلى فلاديقوقاز، جولة مسائية وعشاء محلي.', 'اليوم 2: دارغافس ووادي فياغدون مع نقاط تصوير بإيقاع مريح.', 'اليوم 3: طريق جبلي صباحي، توقفات ثقافية، عودة مرنة.'],
      bestFor: 'العائلات والأزواج وزوار القوقاز لأول مرة ممن يفضلون الراحة والتنظيم الواضح.',
      practical: ['يفضل النقل الخاص مع سائق محلي', 'خصص محطة بديلة يوميًا في حال تغير الطقس'],
      support: 'ننصح بتنسيق محلي ثنائي اللغة لضبط التوقيت والخدمات المناسبة للعائلة.'
    }
  }
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  return pageMetadata({
    locale,
    pathname: '/concierge',
    title: `${copy[locale].title} | Visit Ossetia`,
    description: copy[locale].subtitle
  });
}

export default async function ConciergePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const c = copy[locale];

  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-[2.25rem] border border-slate-200 p-6 md:p-10">
        <Image src="/images/01_hero_mountains_sunrise.jpg" alt={c.title} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#14324cb8] via-[#264f7091] to-[#49728c5e]" />
        <div className="relative z-10 max-w-4xl space-y-3 text-white">
          <p className="eyebrow">Visit Ossetia</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">{c.title}</h1>
          <p className="text-lg text-white/90 md:text-xl">{c.subtitle}</p>
        </div>
      </section>

      <ConciergePlanner copy={c.panel} />
    </div>
  );
}
