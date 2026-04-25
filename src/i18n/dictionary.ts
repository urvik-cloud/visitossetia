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
  labels: {
    bestFor: string;
    practicalNote: string;
    breadcrumbs: string;
    locales: string;
    travelSupport: string;
    openDetails: string;
    readArticle: string;
    draftPlanned: string;
    submitDisabled: string;
  };
  footer: {
    places: string;
    itineraries: string;
    plan: string;
    contact: string;
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
      { key: 'contact', href: '/contact', label: 'Request a Route' }
    ],
    ctas: { requestTrip: 'Request a Route', planRoute: 'Plan My Route', explorePlaces: 'Explore Places', viewItineraries: 'View Itineraries', askGuidance: 'Ask for Local Guidance' },
    labels: {
      bestFor: 'Best for', practicalNote: 'Practical note', breadcrumbs: 'Breadcrumb', locales: 'Languages', travelSupport: 'Travel support',
      openDetails: 'View details', readArticle: 'Read article', draftPlanned: 'Draft planned', submitDisabled: 'Submit request (disabled)'
    },
    footer: { places: 'Places', itineraries: 'Itineraries', plan: 'Plan', contact: 'Contact' },
    home: { heroTitle: 'Discover North Ossetia', heroSubtitle: 'The hidden mountain heart of the Caucasus', why: 'A practical, culturally informed way to plan your journey in North Ossetia.', finalCta: 'Start planning a meaningful mountain journey.' },
    trustStrip: ['Independent guide', 'Multilingual planning support', 'Curated routes', 'Manual tour request support'],
    toursTrustNote: 'Visit Ossetia helps international travelers connect with reliable local travel support. Tour requests are handled manually at the first stage.',
    contactPrototype: 'Form functionality is not connected in this prototype.',
    privacyPrototype: 'This prototype does not process or store submitted personal data.'
  },
  ru: {
    brand: 'Visit Ossetia',
    disclaimer: 'Visit Ossetia — независимый туристический гид, а не официальный государственный туристический портал.',
    nav: [
      { key: 'places', href: '/places', label: 'Места' }, { key: 'things', href: '/things-to-do', label: 'Чем заняться' }, { key: 'plan', href: '/plan', label: 'План поездки' },
      { key: 'itineraries', href: '/itineraries', label: 'Маршруты' }, { key: 'tours', href: '/tours', label: 'Туры' }, { key: 'food', href: '/food-culture', label: 'Еда и культура' },
      { key: 'guide', href: '/guide', label: 'Гид' }, { key: 'about', href: '/about', label: 'О проекте' }, { key: 'contact', href: '/contact', label: 'Запросить маршрут' }
    ],
    ctas: { requestTrip: 'Запросить маршрут', planRoute: 'Спланировать маршрут', explorePlaces: 'Смотреть места', viewItineraries: 'Смотреть маршруты', askGuidance: 'Получить локальную консультацию' },
    labels: {
      bestFor: 'Лучше всего подходит для', practicalNote: 'Практический формат', breadcrumbs: 'Навигационная цепочка', locales: 'Языки', travelSupport: 'Поддержка в поездке',
      openDetails: 'Смотреть детали', readArticle: 'Читать статью', draftPlanned: 'Черновик запланирован', submitDisabled: 'Отправка временно недоступна'
    },
    footer: { places: 'Места', itineraries: 'Маршруты', plan: 'План', contact: 'Контакты' },
    home: { heroTitle: 'Откройте Северную Осетию', heroSubtitle: 'Горное сердце Кавказа', why: 'Практичный и культурно бережный способ спланировать путешествие по Северной Осетии.', finalCta: 'Начните планировать глубокое путешествие в горы.' },
    trustStrip: ['Независимый гид', 'Поддержка на нескольких языках', 'Кураторские маршруты', 'Ручная обработка запросов'],
    toursTrustNote: 'Visit Ossetia помогает международным путешественникам находить надёжную локальную поддержку. На первом этапе запросы на туры обрабатываются вручную.',
    contactPrototype: 'Форма в этой версии работает как макет и пока не отправляет данные.',
    privacyPrototype: 'Этот прототип пока не обрабатывает и не хранит персональные данные из формы.'
  },
  zh: {
    brand: 'Visit Ossetia',
    disclaimer: 'Visit Ossetia 是独立旅行指南，不是政府官方旅游门户。',
    nav: [
      { key: 'places', href: '/places', label: '目的地' }, { key: 'things', href: '/things-to-do', label: '玩法' }, { key: 'plan', href: '/plan', label: '行前规划' },
      { key: 'itineraries', href: '/itineraries', label: '行程路线' }, { key: 'tours', href: '/tours', label: '定制行程' }, { key: 'food', href: '/food-culture', label: '美食与文化' },
      { key: 'guide', href: '/guide', label: '旅行指南' }, { key: 'about', href: '/about', label: '关于我们' }, { key: 'contact', href: '/contact', label: '提交需求' }
    ],
    ctas: { requestTrip: '提交行程需求', planRoute: '规划我的路线', explorePlaces: '查看目的地', viewItineraries: '查看路线', askGuidance: '咨询本地建议' },
    labels: {
      bestFor: '适合人群', practicalNote: '行程节奏', breadcrumbs: '面包屑导航', locales: '语言', travelSupport: '出行支持',
      openDetails: '查看详情', readArticle: '阅读全文', draftPlanned: '内容待发布', submitDisabled: '暂不支持提交'
    },
    footer: { places: '目的地', itineraries: '行程路线', plan: '行前规划', contact: '联系我们' },
    home: { heroTitle: '探索北奥塞梯', heroSubtitle: '高加索山脉深处的隐秘之地', why: '以实用信息与文化背景为核心，帮助你更安心地规划北奥塞梯之旅。', finalCta: '开启一次有深度的高加索山地旅行。' },
    trustStrip: ['独立旅行指南', '多语言规划支持', '精选路线', '人工处理行程需求'],
    toursTrustNote: 'Visit Ossetia 致力于帮助国际旅行者对接可靠的本地旅行支持。当前阶段，行程需求将以人工方式处理。',
    contactPrototype: '此原型中的表单尚未接入真实提交功能。',
    privacyPrototype: '该原型暂不处理或存储通过表单提交的个人数据。'
  },
  ar: {
    brand: 'Visit Ossetia',
    disclaimer: 'Visit Ossetia دليل سفر مستقل وليس بوابة سياحية حكومية رسمية.',
    nav: [
      { key: 'places', href: '/places', label: 'الأماكن' }, { key: 'things', href: '/things-to-do', label: 'أنشطة' }, { key: 'plan', href: '/plan', label: 'خطط رحلتك' },
      { key: 'itineraries', href: '/itineraries', label: 'المسارات' }, { key: 'tours', href: '/tours', label: 'الجولات' }, { key: 'food', href: '/food-culture', label: 'الطعام والثقافة' },
      { key: 'guide', href: '/guide', label: 'الدليل' }, { key: 'about', href: '/about', label: 'حول' }, { key: 'contact', href: '/contact', label: 'اطلب مسارًا' }
    ],
    ctas: { requestTrip: 'اطلب مسارًا', planRoute: 'خطط مساري', explorePlaces: 'استكشف الأماكن', viewItineraries: 'اعرض المسارات', askGuidance: 'اطلب إرشادًا محليًا' },
    labels: {
      bestFor: 'مناسب لـ', practicalNote: 'ملاحظة عملية', breadcrumbs: 'مسار التنقل', locales: 'اللغات', travelSupport: 'دعم السفر',
      openDetails: 'عرض التفاصيل', readArticle: 'اقرأ المقال', draftPlanned: 'المحتوى قيد الإعداد', submitDisabled: 'إرسال الطلب غير متاح حالياً'
    },
    footer: { places: 'الأماكن', itineraries: 'المسارات', plan: 'التخطيط', contact: 'اتصل بنا' },
    home: { heroTitle: 'اكتشف أوسيتيا الشمالية', heroSubtitle: 'قلب القوقاز الجبلي الخفي', why: 'طريقة عملية وموثوقة للتخطيط لرحلتك في أوسيتيا الشمالية مع فهم ثقافي واضح.', finalCta: 'ابدأ التخطيط لرحلة جبلية هادفة.' },
    trustStrip: ['دليل مستقل', 'دعم تخطيط متعدد اللغات', 'مسارات منسقة', 'معالجة يدوية لطلبات الجولات'],
    toursTrustNote: 'تم تصميم Visit Ossetia لمساعدة المسافرين الدوليين على التواصل مع دعم سفر محلي موثوق. تتم معالجة طلبات الجولات يدويًا في المرحلة الأولى.',
    contactPrototype: 'وظيفة النموذج غير متصلة في هذا النموذج الأولي.',
    privacyPrototype: 'هذا النموذج الأولي لا يعالج أو يخزن البيانات الشخصية المرسلة.'
  }
};

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
