import type { ReactNode } from 'react';

export const PlaceCard = ({ title, description, bestFor, time, cta }: { title: string; description: string; bestFor: string; time: string; cta: ReactNode }) => (
  <article className="card space-y-3">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-slate-600">{description}</p>
    <p className="text-sm"><span className="font-medium">Best for:</span> {bestFor}</p>
    <p className="text-sm"><span className="font-medium">Suggested time:</span> {time}</p>
    {cta}
  </article>
);

export const ItineraryCard = ({ title, description, cta }: { title: string; description: string; cta: ReactNode }) => (
  <article className="card space-y-3"><h3 className="text-xl font-semibold">{title}</h3><p className="text-slate-600">{description}</p>{cta}</article>
);

export const TourCard = ({ title, duration, bestFor, description, cta }: { title: string; duration: string; bestFor: string; description: string; cta: ReactNode }) => (
  <article className="card space-y-3"><h3 className="text-xl font-semibold">{title}</h3><p className="text-sm text-slate-500">{duration} • {bestFor}</p><p className="text-slate-600">{description}</p><p className="text-sm text-slate-500">What’s included: route planning, transport coordination, and guide matching placeholder.</p>{cta}</article>
);

export const InfoCard = ({ title, children }: { title: string; children: ReactNode }) => (
  <article className="card"><h3 className="mb-2 text-lg font-semibold">{title}</h3><div className="text-slate-600">{children}</div></article>
);
