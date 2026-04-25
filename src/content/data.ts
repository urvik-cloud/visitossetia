import type { Locale } from '@/i18n/locales';

export type LocalizedText = Record<Locale, string>;

export type Place = {
  slug: string;
  image: string;
  title: LocalizedText;
  short: LocalizedText;
  bestFor: LocalizedText;
  time: LocalizedText;
  heroLabel: LocalizedText;
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
    image: '/images/02_hero_tower_landscape.jpg',
    title: { en: 'Vladikavkaz', ru: 'Владикавказ', zh: '弗拉季高加索', ar: 'فلاديقوقاز' },
    short: {
      en: 'A graceful avenue city where cafés, architecture, and mountain silhouettes meet at sunset.',
      ru: 'Город с широкими проспектами, кафе и выразительной архитектурой на фоне горных вершин.',
      zh: '一座兼具城市质感与山景氛围的门户城市，傍晚街景尤其迷人。',
      ar: 'مدينة أنيقة تجمع المقاهي والعمارة الكلاسيكية مع أفق جبلي ساحر عند الغروب.'
    },
    bestFor: { en: 'City atmosphere and culture', ru: 'Городская атмосфера и культура', zh: '城市氛围与文化体验', ar: 'الأجواء الحضرية والثقافة' },
    time: { en: 'Half day to 1 day', ru: 'От половины дня до 1 дня', zh: '半天至1天', ar: 'نصف يوم إلى يوم' },
    heroLabel: { en: 'Vladikavkaz boulevard', ru: 'Бульвары Владикавказа', zh: '弗拉季高加索城市景观', ar: 'مشهد حضري في فلاديقوقاز' },
    whyVisit: {
      en: 'Start here for orientation, architecture, and local rhythm before heading into the valleys.',
      ru: 'Отсюда удобно начать знакомство с регионом: почувствовать ритм города и подготовиться к выезду в ущелья.',
      zh: '适合作为旅程起点：先熟悉城市节奏，再深入山地峡谷。',
      ar: 'نقطة انطلاق مثالية لفهم الإقليم والإيقاع المحلي قبل التوجه إلى الوديان.'
    },
    whatToSee: {
      en: ['Prospekt Mira promenade', 'Historic facades and courtyards', 'Markets, cafés, and evening walks'],
      ru: ['Проспект Мира', 'Исторические фасады и дворики', 'Рынки, кафе и вечерние прогулки'],
      zh: ['米拉大街步行区', '老城立面与庭院', '市场、咖啡馆与夜间散步路线'],
      ar: ['ممشى بروسبكت ميرا', 'واجهات تاريخية وساحات داخلية', 'أسواق ومقاهٍ وجولات مسائية']
    },
    gettingThere: {
      en: 'Most international routes are built from Vladikavkaz with onward private or arranged mountain transport.',
      ru: 'Большинство маршрутов начинается во Владикавказе, а дальше путешествие продолжается на авто по заранее согласованному плану.',
      zh: '多数游客会先到达弗拉季高加索，再衔接包车或定制山地交通。',
      ar: 'معظم المسارات الدولية تبدأ من فلاديقوقاز ثم تتابع بنقل خاص أو منظم إلى الجبال.'
    },
    bestSeason: { en: 'All year', ru: 'Круглый год', zh: '全年适合', ar: 'مناسب طوال العام' },
    notes: { en: 'Reserve enough evening time for the city before mountain departure days.', ru: 'Оставьте хотя бы один спокойный вечер в городе до насыщенных горных выездов.', zh: '建议保留一个城市夜晚，再进入高强度山地行程。', ar: 'خصص أمسية هادئة في المدينة قبل أيام الطرق الجبلية الطويلة.' },
    itineraryHint: { en: 'A natural Day 1 for most 3-day programs.', ru: 'Часто становится первым днём в трёхдневной программе.', zh: '常作为3日线路的第1天。', ar: 'غالبًا ما يكون اليوم الأول في برنامج 3 أيام.' }
  },
  {
    slug: 'dargavs',
    image: '/images/04_hero_fiagdon_valley.jpg',
    title: { en: 'Dargavs', ru: 'Даргавс', zh: '达尔加夫斯', ar: 'دارغافس' },
    short: {
      en: 'An iconic highland necropolis framed by broad valley light and dramatic ridgelines.',
      ru: 'Знаменитый высокогорный некрополь в мощном горном ландшафте.',
      zh: '标志性的高山古墓群，兼具历史厚度与强烈视觉冲击。',
      ar: 'موقع تاريخي جبلي شهير يلتقي فيه التراث مع مشهد طبيعي مهيب.'
    },
    bestFor: { en: 'Heritage and photography', ru: 'История и фотография', zh: '人文与摄影', ar: 'التراث والتصوير' },
    time: { en: '2–3 hours onsite', ru: '2–3 часа на месте', zh: '现场约2-3小时', ar: '2-3 ساعات في الموقع' },
    heroLabel: { en: 'Dargavs valley', ru: 'Долина Даргавса', zh: '达尔加夫斯山谷', ar: 'وادي دارغافس' },
    whyVisit: {
      en: 'One of North Ossetia’s most memorable heritage landscapes and a key visual highlight.',
      ru: 'Одна из самых сильных и запоминающихся точек региона, где история ощущается на фоне суровой природы.',
      zh: '是北奥塞梯最具代表性的文化景观之一，也是经典摄影点。',
      ar: 'من أكثر مواقع أوسيتيا الشمالية تميزًا، يجمع بين الذاكرة التاريخية وروعة التضاريس.'
    },
    whatToSee: {
      en: ['Panoramic approach road', 'Main necropolis viewpoints', 'Nearby valley photo stops'],
      ru: ['Панорамная подъездная дорога', 'Главные смотровые на некрополь', 'Ближайшие точки для фотостопов'],
      zh: ['沿途全景山路', '古墓群主观景位', '周边峡谷拍照停靠点'],
      ar: ['طريق بانورامي نحو الموقع', 'إطلالات رئيسية على المقبرة التاريخية', 'محطات تصوير قريبة في الوادي']
    },
    gettingThere: {
      en: 'Road access is smooth with a local driver; timing should adapt to season and weather.',
      ru: 'С локальным водителем дорога обычно проходит комфортно, но тайминг лучше закладывать с запасом по погоде.',
      zh: '建议搭配本地司机前往，行程需根据季节和天气预留弹性。',
      ar: 'الوصول مريح مع سائق محلي، مع مراعاة تغيرات الطقس حسب الموسم.'
    },
    bestSeason: { en: 'Late spring to autumn', ru: 'С конца весны до осени', zh: '晚春至秋季', ar: 'من أواخر الربيع حتى الخريف' },
    notes: { en: 'Treat the site with respect and follow on-site guidelines.', ru: 'Это важный исторический объект: соблюдайте правила на месте.', zh: '请尊重历史遗址并遵守现场提示。', ar: 'يرجى احترام حرمة الموقع واتباع التعليمات المحلية.' },
    itineraryHint: { en: 'Often paired with Fiagdon in one scenic day.', ru: 'Часто сочетается с Фиагдоном в одном живописном дне.', zh: '常与菲亚格东组合为一日线路。', ar: 'غالبًا ما يُدمج مع فياغدون ضمن يوم واحد.' }
  },
  {
    slug: 'fiagdon',
    image: '/images/03_hero_caucasus_peaks.jpg',
    title: { en: 'Fiagdon & Kurtat Gorge', ru: 'Фиагдон и Куртатинское ущелье', zh: '菲亚格东与库尔塔特峡谷', ar: 'فياغدون ووادي كورتات' },
    short: {
      en: 'Mountain roads, towers, monasteries, and broad Caucasus panoramas in one flowing route.',
      ru: 'Сочетание горных дорог, башен, монастырей и панорам в одном насыщенном маршруте.',
      zh: '集山路、古塔、修道院与高加索全景于一体的经典线路。',
      ar: 'طريق جبلي متكامل يجمع الأبراج والأديرة والمشاهد البانورامية الواسعة.'
    },
    bestFor: { en: 'Scenic drives and landmarks', ru: 'Видовые дороги и достопримечательности', zh: '风景自驾与地标打卡', ar: 'القيادة البانورامية والمعالم' },
    time: { en: 'Half day to full day', ru: 'От половины до полного дня', zh: '半天到1天', ar: 'نصف يوم إلى يوم كامل' },
    heroLabel: { en: 'Fiagdon mountain road', ru: 'Горная дорога Фиагдона', zh: '菲亚格东山地公路', ar: 'طريق فياغدون الجبلي' },
    whyVisit: {
      en: 'This is where mountain-road drama and layered heritage come together beautifully.',
      ru: 'Именно здесь особенно ярко сочетаются эффектные дороги, башни и исторические локации.',
      zh: '是将高山公路体验与历史人文停靠结合得最完整的一段。',
      ar: 'هنا يتجسد توازن نادر بين جمال الطرق الجبلية وعمق الإرث التاريخي.'
    },
    whatToSee: {
      en: ['Ancient towers and monasteries', 'Roadside viewpoints', 'Kurtat valley panoramas'],
      ru: ['Старинные башни и монастыри', 'Смотровые точки вдоль дороги', 'Панорамы Куртатинской долины'],
      zh: ['古塔与修道院', '沿途观景台', '库尔塔特谷地全景'],
      ar: ['أبراج وأديرة تاريخية', 'نقاط إطلالة على الطريق', 'مشاهد بانورامية لوادي كورتات']
    },
    gettingThere: {
      en: 'Private transport is preferred for flexible timing and easier mountain logistics.',
      ru: 'Частный транспорт обычно удобнее: легче держать ритм и останавливаться в нужных точках.',
      zh: '推荐包车出行，便于灵活控制停靠和拍摄节奏。',
      ar: 'يفضل النقل الخاص لمرونة أكبر في التوقفات وإدارة وقت الطريق الجبلي.'
    },
    bestSeason: { en: 'Year-round, best from spring to autumn', ru: 'Круглый год, особенно с весны до осени', zh: '全年可去，春秋最佳', ar: 'مناسب طوال العام، والأفضل من الربيع إلى الخريف' },
    notes: { en: 'Start early and keep weather backup options.', ru: 'Выезжайте пораньше и держите запасной план на случай перемены погоды.', zh: '建议早出发，并准备天气备选方案。', ar: 'ابدأ مبكرًا وضع خطة بديلة عند تغير الطقس.' },
    itineraryHint: { en: 'Strong as Day 2 in a 3-day journey.', ru: 'Отлично подходит на второй день трёхдневного маршрута.', zh: '适合作为3日线路的第2天核心段落。', ar: 'مثالي كيوم ثانٍ ضمن برنامج 3 أيام.' }
  }
];

export const placeDirectory: Record<Locale, string[]> = {
  en: ['Midagrabin Waterfalls', 'Tsey Gorge', 'Digoria', 'Karmadon Gorge', 'Alanian towers and monasteries'],
  ru: ['Мидаграбинские водопады', 'Цейское ущелье', 'Дигория', 'Кармадонское ущелье', 'Аланские башни и монастыри'],
  zh: ['米达格拉宾瀑布群', '采伊峡谷', '季戈里亚', '卡尔马东峡谷', '阿兰古塔与修道院'],
  ar: ['شلالات ميداغرابين', 'وادي تسي', 'ديغوريا', 'وادي كارمادون', 'أبراج وأديرة ألانية']
};

export const thingsToDo: Record<Locale, string[]> = {
  en: ['Mountain road journeys', 'Ancient towers and heritage', 'Food and table culture', 'Photography routes', 'Soft hiking and nature walks', 'Vladikavkaz city evenings', 'Winter mountain scenery', 'Family-friendly pacing', 'Private tailored experiences'],
  ru: ['Горные автомобильные маршруты', 'Древние башни и наследие', 'Гастрономия и культура застолья', 'Фотографические маршруты', 'Лёгкие прогулки на природе', 'Вечерний Владикавказ', 'Зимние горные пейзажи', 'Комфортный формат для семей', 'Частные маршруты под запрос'],
  zh: ['高山公路旅行', '古塔与历史遗产', '美食与餐桌文化', '摄影线路', '轻徒步与自然漫步', '弗拉季高加索夜游', '冬季山地风景', '适合家庭的轻松节奏', '私人定制体验'],
  ar: ['رحلات الطرق الجبلية', 'الأبراج القديمة والتراث', 'ثقافة الطعام والمائدة المحلية', 'مسارات التصوير', 'نزهات طبيعية خفيفة', 'أمسيات فلاديقوقاز', 'مناظر شتوية جبلية', 'إيقاع مناسب للعائلات', 'تجارب خاصة حسب الطلب']
};

export const itineraryCards: Record<Locale, string[]> = {
  en: ['1 Day in North Ossetia', '2 Days: Vladikavkaz, Dargavs, Fiagdon', '3 Days: Classic Highlights', '5 Days: Mountains, Culture, Food', 'Private route on request'],
  ru: ['1 день в Северной Осетии', '2 дня: Владикавказ, Даргавс, Фиагдон', '3 дня: классические акценты', '5 дней: горы, культура, гастрономия', 'Частный маршрут под запрос'],
  zh: ['北奥塞梯1日速览', '2日：城市+达尔加夫斯+菲亚格东', '3日：经典精华路线', '5日：山地+文化+美食', '按需定制私人线路'],
  ar: ['يوم واحد في أوسيتيا الشمالية', 'يومان: فلاديقوقاز، دارغافس، فياغدون', '3 أيام: أبرز المحطات الكلاسيكية', '5 أيام: جبال وثقافة وطعام', 'مسار خاص حسب الطلب']
};

export const tours: Record<Locale, string[]> = {
  en: ['Dargavs & Fiagdon private day', '3-day North Ossetia highlights', 'Mountain photography route', 'Food and culture journey', 'Family private route', 'Tailored trip planning'],
  ru: ['Частный день: Даргавс и Фиагдон', '3 дня: ключевые места Осетии', 'Фотомаршрут по горам', 'Путешествие про еду и культуру', 'Семейный частный маршрут', 'Индивидуальное планирование'],
  zh: ['达尔加夫斯+菲亚格东私人一日', '北奥塞梯3日精华', '山地摄影线路', '美食文化之旅', '家庭私享路线', '定制行程策划'],
  ar: ['جولة خاصة ليوم واحد: دارغافس وفياغدون', 'أبرز معالم أوسيتيا الشمالية خلال 3 أيام', 'مسار تصوير جبلي', 'رحلة طعام وثقافة', 'مسار عائلي خاص', 'تخطيط رحلة مخصص']
};

export const guideArticles = ['is-north-ossetia-safe', 'best-time-to-visit-north-ossetia', 'how-to-visit-dargavs'] as const;
