import type { Locale } from '@/i18n/locales';
import { localeLabels, locales } from '@/i18n/locales';

export const LanguageSwitcher = ({ currentLocale, pathname }: { currentLocale: Locale; pathname: string }) => {
  return (
    <nav aria-label="Language selector" className="flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 text-sm shadow-sm">
      {locales.map((locale) => {
        const active = locale === currentLocale;
        return (
          <a
            key={locale}
            href={`/${locale}${pathname}`}
            className={`rounded-full px-3 py-1.5 ${active ? 'bg-stoneSky text-white' : 'text-slate-700 hover:bg-slate-100'}`}
            aria-current={active ? 'true' : undefined}
          >
            {localeLabels[locale]}
          </a>
        );
      })}
    </nav>
  );
};
