import type { Locale } from '@/i18n/locales';

export const Breadcrumbs = ({ locale, items, label }: { locale: Locale; items: { label: string; href: string }[]; label: string }) => (
  <nav aria-label={label} className="mb-6 text-sm text-slate-500">
    <ol className="flex flex-wrap items-center gap-2">
      {items.map((item, idx) => (
        <li key={item.href} className="flex items-center gap-2">
          <a href={`/${locale}${item.href}`} className="hover:text-stoneSky">{item.label}</a>
          {idx < items.length - 1 ? <span>/</span> : null}
        </li>
      ))}
    </ol>
  </nav>
);
