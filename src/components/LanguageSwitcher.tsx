import type { Locale } from '@/i18n/locales';
import { localeLabels, locales } from '@/i18n/locales';

export const LanguageSwitcher = ({ currentLocale, pathname }: { currentLocale: Locale; pathname: string }) => {
  return (
    <nav aria-label="Language selector" className="flex items-center gap-2 text-sm">
      {locales.map((locale) => {
        const active = locale === currentLocale;
        return (
          <a
            key={locale}
            href={`/${locale}${pathname}`}
            className={`rounded-full px-3 py-1 ${active ? 'bg-stoneSky text-white' : 'bg-slate-200 text-slate-700'}`}
            aria-current={active ? 'true' : undefined}
          >
            {localeLabels[locale]}
          </a>
        );
      })}
    </nav>
  );
};
