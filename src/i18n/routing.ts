import { locales, type Locale } from './locales';

export const isValidLocale = (value: string): value is Locale => {
  return locales.includes(value as Locale);
};

export const withLocale = (locale: Locale, path = ''): string => `/${locale}${path}`;
