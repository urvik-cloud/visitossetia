import { pageMetadata } from '@/lib/seo';
import { getDictionary } from '@/i18n/dictionary';
import { isValidLocale } from '@/i18n/routing';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return pageMetadata({ locale, pathname: '/privacy', title: 'Privacy | Visit Ossetia Prototype', description: 'Prototype privacy note: no live submission processing in v1.' });
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const d = getDictionary(locale);

  return (
    <article className="space-y-4">
      <h1 className="text-4xl font-semibold">Privacy</h1>
      <p className="text-slate-600">{d.privacyPrototype}</p>
      <ul className="list-disc ps-6 text-slate-600">
        <li>No tracking scripts are enabled by default.</li>
        <li>No form data is processed in this prototype.</li>
        <li>No API keys, booking engines, or databases are used in v1.</li>
      </ul>
    </article>
  );
}
