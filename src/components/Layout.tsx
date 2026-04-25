import type { ReactNode } from 'react';
import type { Dictionary } from '@/i18n/dictionary';
import type { Locale } from '@/i18n/locales';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Header = ({ locale, dictionary, pathname }: { locale: Locale; dictionary: Dictionary; pathname: string }) => (
  <header className="sticky top-0 z-10 border-b border-slate-200 bg-slate-50/95 backdrop-blur">
    <div className="container-pad flex flex-wrap items-center justify-between gap-4 py-4">
      <a className="text-lg font-semibold" href={`/${locale}`}>{dictionary.brand}</a>
      <nav className="flex flex-wrap items-center gap-4 text-sm">
        {dictionary.nav.slice(0, 6).map((item) => (
          <a key={item.key} href={`/${locale}${item.href}`} className="hover:text-stoneSky">{item.label}</a>
        ))}
      </nav>
      <LanguageSwitcher currentLocale={locale} pathname={pathname} />
    </div>
  </header>
);

export const Footer = ({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) => (
  <footer className="mt-16 border-t border-slate-200 py-10">
    <div className="container-pad space-y-3 text-sm text-slate-600">
      <p>{dictionary.disclaimer}</p>
      <nav className="flex flex-wrap gap-4">
        <a href={`/${locale}/about`}>About</a>
        <a href={`/${locale}/privacy`}>Privacy</a>
        <a href={`/${locale}/contact`}>Contact</a>
      </nav>
    </div>
  </footer>
);

export const SiteLayout = ({ header, children, footer }: { header: ReactNode; children: ReactNode; footer: ReactNode }) => (
  <>
    {header}
    <main className="container-pad py-10">{children}</main>
    {footer}
  </>
);
