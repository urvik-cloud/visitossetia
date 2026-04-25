export const locales = ['en', 'ru', 'zh', 'ar'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  ru: 'Русский',
  zh: '简体中文',
  ar: 'العربية'
};

export const localeDirection: Record<Locale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  ru: 'ltr',
  zh: 'ltr',
  ar: 'rtl'
};
