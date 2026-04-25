import type { MetadataRoute } from 'next';
import { locales } from '@/i18n/locales';

const routes = [
  '', '/places', '/places/vladikavkaz', '/places/dargavs', '/places/fiagdon', '/things-to-do', '/plan', '/itineraries', '/itineraries/3-day-north-ossetia', '/tours', '/food-culture', '/guide', '/guide/is-north-ossetia-safe', '/guide/best-time-to-visit-north-ossetia', '/guide/how-to-visit-dargavs', '/about', '/contact', '/privacy'
];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) => routes.map((route) => ({ url: `https://visitossetia.example/${locale}${route}`, lastModified: new Date() })));
}
