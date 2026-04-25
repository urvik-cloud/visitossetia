import type { ReactNode } from 'react';
import type { Dictionary } from '@/i18n/dictionary';
import type { Locale } from '@/i18n/locales';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Header = ({ locale, dictionary, pathname }: { locale: Locale; dictionary: Dictionary; pathname: string }) => (
  <header className="sticky top-0 z-20 border-b border-[#e5e7ea] bg-[#f7f5f1]/90 backdrop-blur-md">
    <div className="container-pad flex flex-wrap items-center justify-between gap-3 py-4">
      <a className="text-xl font-semibold tracking-tight text-[#142434]" href={`/${locale}`}>
        {dictionary.brand}
      </a>
      <nav className="hidden items-center gap-6 text-sm text-slate-600 xl:flex">
        {dictionary.nav.slice(0, 8).map((item) => (
          <a key={item.key} href={`/${locale}${item.href}`} className="hover:text-[#142434]">
            {item.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <a href={`/${locale}/contact`} className="btn-primary hidden md:inline-flex">
          {dictionary.ctas.requestTrip}
        </a>
        <LanguageSwitcher currentLocale={locale} pathname={pathname} />
      </div>
    </div>
  </header>
);

export const Footer = ({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) => (
  <footer className="mt-20 border-t border-[#e5e7ea] bg-[#f7f5f1] py-12">
    <div className="container-pad grid gap-8 md:grid-cols-3">
      <div className="space-y-3">
        <p className="text-lg font-semibold text-[#142434]">{dictionary.brand}</p>
        <p className="text-sm leading-relaxed text-slate-600">{dictionary.disclaimer}</p>
      </div>
      <nav className="grid gap-2 text-sm text-slate-700">
        <a href={`/${locale}/places`}>{dictionary.footer.places}</a>
        <a href={`/${locale}/itineraries`}>{dictionary.footer.itineraries}</a>
        <a href={`/${locale}/concierge`}>{dictionary.footer.concierge}</a>
        <a href={`/${locale}/plan`}>{dictionary.footer.plan}</a>
        <a href={`/${locale}/contact`}>{dictionary.footer.contact}</a>
      </nav>
      <div className="space-y-3 text-sm text-slate-600">
        <p>{dictionary.labels.locales}</p>
        <div className="flex flex-wrap gap-2">
          <a href="/en" className="lang-pill">EN</a>
          <a href="/ru" className="lang-pill">RU</a>
          <a href="/zh" className="lang-pill">中文</a>
          <a href="/ar" className="lang-pill">AR</a>
        </div>
      </div>
    </div>
  </footer>
);

export const SiteLayout = ({ header, children, footer }: { header: ReactNode; children: ReactNode; footer: ReactNode }) => (
  <>
    {header}
    <main className="container-pad py-8 md:py-12">{children}</main>
    {footer}
  </>
);
