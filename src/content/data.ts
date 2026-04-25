import type { Locale } from '@/i18n/locales';

export type LocalizedText = Record<Locale, string>;

type Place = {
  slug: string;
  title: LocalizedText;
  short: LocalizedText;
  bestFor: LocalizedText;
  time: LocalizedText;
  heroLabel: string;
  whyVisit: LocalizedText;
  whatToSee: Record<Locale, string[]>;
  gettingThere: LocalizedText;
  bestSeason: LocalizedText;
  notes: LocalizedText;
  itineraryHint: LocalizedText;
};

export const places: Place[] = [
  {
    slug: 'vladikavkaz',
    title: { en: 'Vladikavkaz', ru: 'Владикавказ', zh: '弗拉季高加索', ar: 'فلاديقوقاز' },
    short: {
      en: 'Historic gateway city with boulevards, cafés, and mountain views.',
      ru: 'Исторический город-ворота с бульварами, кафе и видами на горы.',
      zh: '历史与现代交融的门户城市，可眺望群山。',
      ar: 'مدينة بوابة تاريخية تضم شوارع أنيقة ومقاهي وإطلالات جبلية.'
    },
    bestFor: { en: 'City walks and culture', ru: 'Городские прогулки и культура', zh: '城市漫步与文化体验', ar: 'النزهات والثقافة' },
    time: { en: 'Half day to 1 day', ru: 'От половины дня до 1 дня', zh: '半天至1天', ar: 'نصف يوم إلى يوم' },
    heroLabel: 'Vladikavkaz city view',
    whyVisit: {
      en: 'Start here for orientation, architecture, and local everyday life.', ru: 'Отсюда удобно начать знакомство с регионом, архитектурой и ритмом города.', zh: '适合作为北奥塞梯旅行起点，了解城市脉络与生活氛围。', ar: 'نقطة بداية ممتازة لفهم الإقليم والعمارة والحياة المحلية.'
    },
    whatToSee: {
      en: ['Prospekt Mira promenade', 'Central market area', 'Cultural venues and cafés'],
      ru: ['Проспект Мира', 'Район центрального рынка', 'Культурные площадки и кафе'],
      zh: ['米拉大街步行区', '中央市场周边', '文化场馆与咖啡馆'],
      ar: ['ممشى بروسبكت ميرا', 'منطقة السوق المركزي', 'مساحات ثقافية ومقاهٍ']
    },
    gettingThere: {
      en: 'Most visitors arrive through Vladikavkaz first and continue by car with a planned route.',
      ru: 'Большинство путешественников сначала прибывают во Владикавказ, а затем выезжают в горы на машине.',
      zh: '多数游客会先到达弗拉季高加索，再包车或拼车前往山区。',
      ar: 'يصل معظم الزوار إلى فلاديقوقاز أولاً ثم يتابعون بالسيارة وفق مسار مخطط.'
    },
    bestSeason: { en: 'All year, with different character by season.', ru: 'Круглый год, с разной атмосферой по сезонам.', zh: '全年皆可，不同季节体验不同。', ar: 'مناسب طوال العام مع اختلاف الطابع حسب الموسم.' },
    notes: { en: 'Plan evening walks and reserve mountain days for clear weather.', ru: 'Вечерние прогулки в городе удобно совмещать с горными выездами в ясную погоду.', zh: '可将城市夜景与山区晴天日程搭配安排。', ar: 'نسّق نزهات المساء في المدينة مع أيام الجبال ذات الطقس الصحو.' },
    itineraryHint: { en: 'Often used as Day 1 in a 3-day route.', ru: 'Часто используется как День 1 в трёхдневном маршруте.', zh: '常作为3日行程第1天。', ar: 'غالبًا ما يكون اليوم الأول في مسار 3 أيام.' }
  },
  {
    slug: 'dargavs',
    title: { en: 'Dargavs', ru: 'Даргавс', zh: '达尔加夫斯', ar: 'دارغافس' },
    short: {
      en: 'Iconic highland necropolis set in a dramatic mountain valley.',
      ru: 'Знаменитый горный некрополь в живописной долине.',
      zh: '位于高山峡谷中的标志性古墓群景观。',
      ar: 'مقبرة جبلية تاريخية شهيرة في وادٍ جبلي مهيب.'
    },
    bestFor: { en: 'Landscape, heritage, photography', ru: 'Пейзажи, наследие, фото', zh: '风景、人文、摄影', ar: 'المناظر والتراث والتصوير' },
    time: { en: '2–3 hours onsite', ru: '2–3 часа на месте', zh: '现场约2-3小时', ar: '2-3 ساعات في الموقع' },
    heroLabel: 'Dargavs landscape',
    whyVisit: {
      en: 'One of the most recognizable landmarks in North Ossetia, combining scenery and history.', ru: 'Одна из самых узнаваемых локаций Северной Осетии, где сочетаются история и ландшафт.', zh: '北奥塞梯最具辨识度的地标之一，兼具历史与视觉震撼。', ar: 'من أبرز معالم أوسيتيا الشمالية، يجمع بين التاريخ وروعة المشهد.'
    },
    whatToSee: {
      en: ['Necropolis viewpoint', 'Surrounding mountain roads', 'Nearby valleys for short photo stops'],
      ru: ['Смотровая на некрополь', 'Горные дороги вокруг', 'Ближайшие долины для фотостопов'],
      zh: ['古墓群观景点', '周边山路景观', '附近峡谷摄影停靠点'],
      ar: ['منصة الإطلالة على المقبرة', 'الطرق الجبلية المحيطة', 'وديان قريبة لتوقفات تصوير قصيرة']
    },
    gettingThere: {
      en: 'Road access is straightforward with a local driver-guide; travel conditions can vary by season.', ru: 'С местным водителем-гидом добраться удобно, но условия дороги зависят от сезона.', zh: '通常建议配本地司机/向导，路况会随季节变化。', ar: 'الوصول سهل نسبيًا مع سائق محلي؛ ظروف الطريق تختلف حسب الموسم.'
    },
    bestSeason: { en: 'Late spring to autumn for stable roads and visibility.', ru: 'С конца весны до осени при более стабильной погоде.', zh: '晚春到秋季更适合观景与拍摄。', ar: 'من أواخر الربيع حتى الخريف لثبات أفضل في الطرق والرؤية.' },
    notes: { en: 'Respect local heritage areas and follow onsite guidance.', ru: 'Уважайте историческую территорию и соблюдайте правила на месте.', zh: '请尊重历史遗址并遵守现场提示。', ar: 'يرجى احترام الموقع التراثي واتباع الإرشادات في المكان.' },
    itineraryHint: { en: 'Pairs naturally with Fiagdon in a day trip.', ru: 'Удобно совмещается с Фиагдоном в однодневном маршруте.', zh: '常与菲亚格东组合为一日线路。', ar: 'يتكامل بسهولة مع فياغدون ضمن رحلة يوم واحد.' }
  },
  {
    slug: 'fiagdon',
    title: { en: 'Fiagdon & Kurtat Gorge', ru: 'Фиагдон и Куртатинское ущелье', zh: '菲亚格东与库尔塔特峡谷', ar: 'فياغدون ووادي كورتات' },
    short: {
      en: 'Mountain roads, towers, monasteries, and open alpine panoramas.',
      ru: 'Горные дороги, башни, монастыри и панорамы.',
      zh: '山路、古塔、修道院与开阔高山景观。',
      ar: 'طرق جبلية وأبراج وأديرة وإطلالات ألبية واسعة.'
    },
    bestFor: { en: 'Scenic drives and heritage stops', ru: 'Видовые маршруты и история', zh: '风光自驾与人文停靠', ar: 'الجولات البانورامية والتراث' },
    time: { en: 'Half day to full day', ru: 'От половины до полного дня', zh: '半天到1天', ar: 'نصف يوم إلى يوم كامل' },
    heroLabel: 'Mountain road near Fiagdon',
    whyVisit: {
      en: 'A flexible route with dramatic roads and many viewpoint opportunities.', ru: 'Гибкий маршрут с выразительными дорогами и множеством смотровых точек.', zh: '路线灵活，沿途景观点丰富，适合深度拍摄。', ar: 'مسار مرن بطُرق درامية وفرص عديدة للتوقف عند الإطلالات.'
    },
    whatToSee: {
      en: ['Ancient towers and monasteries', 'Roadside viewpoints', 'Kurtat valley panoramas'],
      ru: ['Старинные башни и монастыри', 'Смотровые точки вдоль дороги', 'Панорамы Куртатинской долины'],
      zh: ['古塔与修道院', '沿途观景台', '库尔塔特谷地全景'],
      ar: ['أبراج وأديرة تاريخية', 'نقاط إطلالة على الطريق', 'مشاهد بانورامية لوادي كورتات']
    },
    gettingThere: {
      en: 'Many travelers visit with private transport for flexible timing and safer mountain logistics.', ru: 'Многие выбирают частный транспорт для гибкого графика и уверенной горной логистики.', zh: '多数游客会选择包车，便于灵活调整时间。', ar: 'يفضل كثير من المسافرين النقل الخاص لمرونة أكبر وتنقل جبلي أكثر راحة.'
    },
    bestSeason: { en: 'Year-round, especially spring to autumn.', ru: 'Круглый год, особенно весной и осенью.', zh: '全年可去，春秋更舒适。', ar: 'مناسب طوال العام، خاصة الربيع والخريف.' },
    notes: { en: 'Road and weather conditions may vary; begin early.', ru: 'Состояние дорог и погоды может меняться; лучше выезжать рано.', zh: '路况和天气变化较快，建议早出发。', ar: 'قد تتغير ظروف الطريق والطقس؛ يُنصح بالانطلاق مبكرًا.' },
    itineraryHint: { en: 'Frequently combined with Dargavs.', ru: 'Часто объединяется с Даргавсом.', zh: '常与达尔加夫斯联动。', ar: 'غالبًا ما يُدمج مع دارغافس.' }
  }
];

export const placeDirectory = [
  'Vladikavkaz','Dargavs','Fiagdon and Kurtat Gorge','Midagrabin Waterfalls','Tsey Gorge','Digoria','Karmadon Gorge','Alanian towers and monasteries'
];

export const thingsToDo = ['Mountain road trips','Ancient towers and heritage','Food experiences','Photography routes','Soft hiking and nature','Vladikavkaz city walks','Winter landscapes','Family-friendly routes','Custom guided experiences'];

export const itineraryCards = ['1 Day in North Ossetia','2 Days: Vladikavkaz, Dargavs and Fiagdon','3 Days: Classic North Ossetia Highlights','5 Days: Mountains, Culture and Food','Custom Private Route'];

export const tours = [
  'Dargavs & Fiagdon Private Day Trip','3-Day North Ossetia Highlights','Mountain Photography Route','Food & Culture Experience','Family Private Route','Custom Trip Planning'
];

export const guideArticles = ['is-north-ossetia-safe','best-time-to-visit-north-ossetia','how-to-visit-dargavs'];
