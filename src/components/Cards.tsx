import type { ReactNode } from 'react';
import { DestinationImage } from './ImageCard';

export const PlaceCard = ({
  title,
  description,
  bestFor,
  time,
  category,
  cta,
  image,
  alt,
  labels
}: {
  title: string;
  description: string;
  bestFor: string;
  time: string;
  category: string;
  cta: ReactNode;
  image?: string;
  alt: string;
  labels: { bestFor: string; practical: string };
}) => (
  <article className="premium-card group space-y-5 p-5 md:p-7">
    <DestinationImage src={image} alt={alt} label={category} className="rounded-[1.4rem]" />
    <div className="space-y-3">
      <h3 className="text-[1.72rem] font-semibold leading-tight text-slate-900">{title}</h3>
      <p className="text-slate-700">{description}</p>
      <div className="space-y-1 text-sm text-slate-700">
        <p>
          <span className="font-semibold">{labels.bestFor}:</span> {bestFor}
        </p>
        <p>
          <span className="font-semibold">{labels.practical}:</span> {time}
        </p>
      </div>
      {cta}
    </div>
  </article>
);

export const ItineraryCard = ({ title, description, dayLabel, cta, image, alt }: { title: string; description: string; dayLabel: string; cta: ReactNode; image?: string; alt: string }) => (
  <article className="premium-card space-y-4 p-5 md:p-7">
    <DestinationImage src={image} alt={alt} label={dayLabel} className="rounded-[1.4rem]" />
    <h3 className="text-[1.72rem] font-semibold leading-tight text-slate-900">{title}</h3>
    <p className="text-slate-700">{description}</p>
    {cta}
  </article>
);

export const TourCard = ({ title, duration, bestFor, description, cta, eyebrow, image, alt }: { title: string; duration: string; bestFor: string; description: string; cta: ReactNode; eyebrow: string; image?: string; alt: string }) => (
  <article className="premium-card space-y-4 p-5 md:p-7">
    <DestinationImage src={image} alt={alt} label={eyebrow} className="rounded-[1.4rem]" />
    <h3 className="text-[1.72rem] font-semibold leading-tight text-slate-900">{title}</h3>
    <p className="text-sm text-slate-600">
      {duration} • {bestFor}
    </p>
    <p className="text-slate-700">{description}</p>
    {cta}
  </article>
);

export const InfoCard = ({ title, children }: { title: string; children: ReactNode }) => (
  <article className="premium-card p-5 md:p-7">
    <h3 className="mb-2 text-xl font-semibold text-slate-900">{title}</h3>
    <div className="text-slate-700">{children}</div>
  </article>
);
