import { HeroImage } from './ImageCard';

export const Hero = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image,
  imageAlt,
  eyebrow,
  caption
}: {
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image: string;
  imageAlt: string;
  eyebrow: string;
  caption?: string;
}) => (
  <section className="py-3 md:py-6">
    <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
      <div className="space-y-6">
        <p className="eyebrow text-start">{eyebrow}</p>
        <h1 className="text-balance text-4xl font-semibold leading-[0.95] text-stoneSky md:text-6xl xl:text-7xl">{title}</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">{subtitle}</p>
        <div className="flex flex-wrap gap-3">
          <a href={primaryCta.href} className="btn-primary">
            {primaryCta.label}
          </a>
          <a href={secondaryCta.href} className="btn-secondary">
            {secondaryCta.label}
          </a>
        </div>
      </div>

      <article className="premium-card overflow-hidden p-0">
        <HeroImage src={image} alt={imageAlt} className="h-[380px] rounded-none md:h-[560px]" />
        {caption ? <p className="px-5 py-4 text-sm leading-relaxed text-slate-600 md:px-6">{caption}</p> : null}
      </article>
    </div>
  </section>
);
