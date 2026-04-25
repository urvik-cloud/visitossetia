import { ImagePlaceholder } from './ImagePlaceholder';

type HeroVisual = { label: string; tone: 'mountain' | 'city' | 'culture' | 'snow' | 'road' };

export const Hero = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  visuals
}: {
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  visuals: HeroVisual[];
}) => (
  <section className="hero-shell relative overflow-hidden rounded-[2rem] p-6 md:p-10">
    <div className="relative z-10 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
      <div className="space-y-6">
        <p className="eyebrow">Visit Ossetia</p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">{title}</h1>
        <p className="max-w-2xl text-base text-white/85 md:text-xl">{subtitle}</p>
        <div className="flex flex-wrap gap-3">
          <a href={primaryCta.href} className="btn-primary">
            {primaryCta.label}
          </a>
          <a href={secondaryCta.href} className="btn-ghost">
            {secondaryCta.label}
          </a>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {visuals.map((visual) => (
          <ImagePlaceholder key={visual.label} label={visual.label} tone={visual.tone} />
        ))}
      </div>
    </div>
  </section>
);
