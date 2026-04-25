import { pageMetadata } from '@/lib/seo';
import { getDictionary } from '@/i18n/dictionary';
import { isValidLocale } from '@/i18n/routing';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return pageMetadata({ locale, pathname: '/contact', title: 'Request a Trip | Visit Ossetia', description: 'Send a manual trip request for curated route support in North Ossetia.' });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const d = getDictionary(locale);

  return (
    <article className="space-y-5">
      <h1 className="text-4xl font-semibold">Contact / Request a Trip</h1>
      <p className="text-slate-600">hello@visitossetia.example</p>
      <form className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 md:grid-cols-2" aria-describedby="prototype-form-note">
        {['Name','Email','Preferred dates','Number of travelers','Language','Interests'].map((field) => (
          <label key={field} className="text-sm font-medium">{field}<input aria-label={field} type="text" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" /></label>
        ))}
        <label className="text-sm font-medium md:col-span-2">Message<textarea aria-label="Message" className="mt-1 min-h-28 w-full rounded-lg border border-slate-300 px-3 py-2" /></label>
        <button type="button" disabled aria-disabled="true" className="rounded-full bg-slate-400 px-6 py-2 text-white md:col-span-2 md:w-fit">Submit request (disabled)</button>
      </form>
      <p id="prototype-form-note" className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-900">{d.contactPrototype}</p>
    </article>
  );
}
