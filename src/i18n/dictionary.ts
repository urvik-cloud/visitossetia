import type { Locale } from './locales';

export type Dictionary = {
  brand: string;
  disclaimer: string;
  nav: { key: string; href: string; label: string }[];
  ctas: {
    requestTrip: string;
    planRoute: string;
    explorePlaces: string;
    viewItineraries: string;
    askGuidance: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    why: string;
    finalCta: string;
  };
  trustStrip: string[];
  toursTrustNote: string;
  contactPrototype: string;
  privacyPrototype: string;
};

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    brand: 'Visit Ossetia',
    disclaimer: 'Visit Ossetia is an independent travel guide, not an official government tourism portal.',
    nav: [
      { key: 'places', href: '/places', label: 'Places' },
      { key: 'things', href: '/things-to-do', label: 'Things to Do' },
      { key: 'plan', href: '/plan', label: 'Plan Your Trip' },
      { key: 'itineraries', href: '/itineraries', label: 'Itineraries' },
      { key: 'tours', href: '/tours', label: 'Tours' },
      { key: 'food', href: '/food-culture', label: 'Food & Culture' },
      { key: 'guide', href: '/guide', label: 'Guide' },
      { key: 'about', href: '/about', label: 'About' },
      { key: 'contact', href: '/contact', label: 'Request a Trip' }
    ],
    ctas: {
      requestTrip: 'Request a Trip',
      planRoute: 'Plan My Route',
      explorePlaces: 'Explore Places',
      viewItineraries: 'View Itineraries',
      askGuidance: 'Ask for Local Guidance'
    },
    home: {
      heroTitle: 'Discover North Ossetia',
      heroSubtitle: 'The hidden mountain heart of the Caucasus',
      why: 'A practical, culturally informed way to plan your journey in North Ossetia.',
      finalCta: 'Start planning a meaningful mountain journey.'
    },
    trustStrip: ['Independent guide', 'Multilingual planning support', 'Curated routes', 'Manual tour request support'],
    toursTrustNote:
      'Visit Ossetia is designed to help international travelers connect with reliable local travel support. Tour requests are handled manually at the first stage.',
    contactPrototype: 'Form functionality is not connected in this prototype.',
    privacyPrototype: 'This prototype does not process or store submitted personal data.'
  },
  ru: {
    brand: 'Visit Ossetia',
    disclaimer: 'Visit Ossetia — это независимый туристический гид, а не официальный государственный туристический портал.',
    nav: [
      { key: 'places', href: '/places', label: 'Места' },
      { key: 'things', href: '/things-to-do', label: 'Чем заняться' },
      { key: 'plan', href: '/plan', label: 'План поездки' },
      { key: 'itineraries', href: '/itineraries', label: 'Маршруты' },
      { key: 'tours', href: '/tours', label: 'Туры' },
      { key: 'food', href: '/food-culture', label: 'Еда и культура' },
      { key: 'guide', href: '/guide', label: 'Гид' },
      { key: 'about', href: '/about', label: 'О проекте' },
      { key: 'contact', href: '/contact', label: 'Запросить тур' }
    ],
    ctas: {
      requestTrip: 'Запросить тур',
      planRoute: 'Спланировать маршрут',
      explorePlaces: 'Смотреть места',
      viewItineraries: 'Смотреть маршруты',
      askGuidance: 'Попросить локальную помощь'
    },
    home: {
      heroTitle: 'Откройте Северную Осетию',
      heroSubtitle: 'Горное сердце Кавказа',
      why: 'Практичный и культурно бережный способ спланировать путешествие по Северной Осетии.',
      finalCta: 'Начните планировать глубокое путешествие в горы.'
    },
    trustStrip: ['Независимый гид', 'Поддержка на нескольких языках', 'Кураторские маршруты', 'Ручная обработка заявок на туры'],
    toursTrustNote:
      'Visit Ossetia помогает международным путешественникам находить надежную локальную туристическую поддержку. На первом этапе запросы на туры обрабатываются вручную.',
    contactPrototype: 'Форма в этой версии работает как макет и пока не отправляет данные.',
    privacyPrototype: 'Этот прототип пока не обрабатывает и не хранит персональные данные из формы.'
  },
  zh: {
    brand: 'Visit Ossetia',
    disclaimer: 'Visit Ossetia 是独立旅行指南，不是政府官方旅游门户。',
    nav: [
      { key: 'places', href: '/places', label: '目的地' },
      { key: 'things', href: '/things-to-do', label: '玩法' },
      { key: 'plan', href: '/plan', label: '行前规划' },
      { key: 'itineraries', href: '/itineraries', label: '行程路线' },
      { key: 'tours', href: '/tours', label: '定制行程' },
      { key: 'food', href: '/food-culture', label: '美食与文化' },
      { key: 'guide', href: '/guide', label: '旅行指南' },
      { key: 'about', href: '/about', label: '关于我们' },
      { key: 'contact', href: '/contact', label: '提交需求' }
    ],
    ctas: {
      requestTrip: '提交行程需求',
      planRoute: '规划我的路线',
      explorePlaces: '查看目的地',
      viewItineraries: '查看路线',
      askGuidance: '咨询本地建议'
    },
    home: {
      heroTitle: '探索北奥塞梯',
      heroSubtitle: '高加索山脉深处的隐秘之地',
      why: '以实用信息与文化背景为核心，帮助你更安心地规划北奥塞梯之旅。',
      finalCta: '开启一次有深度的高加索山地旅行。'
    },
    trustStrip: ['独立旅行指南', '多语言规划支持', '精选路线', '人工处理行程需求'],
    toursTrustNote:
      'Visit Ossetia 致力于帮助国际旅行者对接可靠的本地旅行支持。当前阶段，行程需求将以人工方式处理。',
    contactPrototype: '此原型中的表单尚未接入真实提交功能。',
    privacyPrototype: '该原型暂不处理或存储通过表单提交的个人数据。'
  },
  ar: {
    brand: 'Visit Ossetia',
    disclaimer: 'Visit Ossetia دليل سفر مستقل وليس بوابة سياحية حكومية رسمية.',
    nav: [
      { key: 'places', href: '/places', label: 'الأماكن' },
      { key: 'things', href: '/things-to-do', label: 'أنشطة' },
      { key: 'plan', href: '/plan', label: 'خطط رحلتك' },
      { key: 'itineraries', href: '/itineraries', label: 'مسارات' },
      { key: 'tours', href: '/tours', label: 'الجولات' },
      { key: 'food', href: '/food-culture', label: 'الطعام والثقافة' },
      { key: 'guide', href: '/guide', label: 'الدليل' },
      { key: 'about', href: '/about', label: 'حول' },
      { key: 'contact', href: '/contact', label: 'اطلب رحلة' }
    ],
    ctas: {
      requestTrip: 'اطلب رحلة',
      planRoute: 'خطط مساري',
      explorePlaces: 'استكشف الأماكن',
      viewItineraries: 'اعرض المسارات',
      askGuidance: 'اطلب إرشادًا محليًا'
    },
    home: {
      heroTitle: 'اكتشف أوسيتيا الشمالية',
      heroSubtitle: 'قلب القوقاز الجبلي الخفي',
      why: 'طريقة عملية وموثوقة للتخطيط لرحلتك في أوسيتيا الشمالية مع فهم ثقافي واضح.',
      finalCta: 'ابدأ التخطيط لرحلة جبلية هادفة.'
    },
    trustStrip: ['دليل مستقل', 'دعم تخطيط متعدد اللغات', 'مسارات منسقة', 'معالجة يدوية لطلبات الجولات'],
    toursTrustNote:
      'تم تصميم Visit Ossetia لمساعدة المسافرين الدوليين على التواصل مع دعم سفر محلي موثوق. تتم معالجة طلبات الجولات يدويًا في المرحلة الأولى.',
    contactPrototype: 'وظيفة النموذج غير متصلة في هذا النموذج الأولي.',
    privacyPrototype: 'هذا النموذج الأولي لا يعالج أو يخزن البيانات الشخصية المرسلة.'
  }
};

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
