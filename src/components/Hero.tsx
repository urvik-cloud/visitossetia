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
  <section className="relative overflow-hidden rounded-[2.25rem] border border-[#d8e0e8] bg-[#0e2438] p-5 md:p-8">
    <HeroImage src={image} alt={imageAlt} label={caption} className="absolute inset-0 h-full w-full" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#071523f2] via-[#0f2336cc] to-[#15344f88]" />
    <div className="relative z-10 grid min-h-[420px] content-end gap-6 p-3 md:min-h-[560px] md:max-w-4xl md:p-6">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">{title}</h1>
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
  </section>
);
