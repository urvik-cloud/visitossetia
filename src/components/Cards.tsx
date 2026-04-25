import type { ReactNode } from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';

export const PlaceCard = ({
  title,
  description,
  bestFor,
  time,
  category,
  tone,
  cta
}: {
  title: string;
  description: string;
  bestFor: string;
  time: string;
  category: string;
  tone: 'mountain' | 'city' | 'culture' | 'snow' | 'road';
  cta: ReactNode;
}) => (
  <article className="premium-card group space-y-4">
    <ImagePlaceholder label={category} tone={tone} />
    <div className="space-y-3">
      <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
      <p className="text-slate-600">{description}</p>
      <p className="text-sm text-slate-700">
        <span className="font-semibold">Best for:</span> {bestFor}
      </p>
      <p className="text-sm text-slate-700">
        <span className="font-semibold">Practical note:</span> {time}
      </p>
      {cta}
    </div>
  </article>
);

export const ItineraryCard = ({ title, description, dayLabel, cta }: { title: string; description: string; dayLabel: string; cta: ReactNode }) => (
  <article className="premium-card space-y-4">
    <p className="eyebrow text-stoneSky">{dayLabel}</p>
    <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
    <p className="text-slate-600">{description}</p>
    {cta}
  </article>
);

export const TourCard = ({ title, duration, bestFor, description, cta }: { title: string; duration: string; bestFor: string; description: string; cta: ReactNode }) => (
  <article className="premium-card space-y-4">
    <p className="eyebrow text-stoneSky">Travel Support</p>
    <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
    <p className="text-sm text-slate-500">
      {duration} • {bestFor}
    </p>
    <p className="text-slate-600">{description}</p>
    {cta}
  </article>
);

export const InfoCard = ({ title, children }: { title: string; children: ReactNode }) => (
  <article className="premium-card">
    <h3 className="mb-2 text-xl font-semibold text-slate-900">{title}</h3>
    <div className="text-slate-600">{children}</div>
  </article>
);
