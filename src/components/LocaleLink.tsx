import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Locale } from '@/i18n/locales';

export const LocaleLink = ({
  locale,
  href,
  children,
  className
}: {
  locale: Locale;
  href: string;
  children: ReactNode;
  className?: string;
}) => (
  <Link className={className} href={`/${locale}${href}`}>
    {children}
  </Link>
);
