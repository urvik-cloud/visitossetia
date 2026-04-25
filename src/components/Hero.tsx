import { HeroImage } from './ImageCard';

export const Hero = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image,
  imageAlt,
  eyebrow,
  caption,
  badges
}: {
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image: string;
  imageAlt: string;
  eyebrow: string;
  caption?: string;
  badges?: string[];
}) => (
  <section className="relative overflow-hidden rounded-[2.25rem] border border-[#d8e0e8] bg-[#0e2438] p-5 md:p-8">
    <HeroImage src={image} alt={imageAlt} label={caption} className="absolute inset-0 h-full w-full" overlay={false} />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(255,208,130,0.22),transparent_40%)]" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#05111ed4] via-[#0b1c2f7a] to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#081423a8] via-transparent to-transparent" />

    <div className="relative z-10 grid min-h-[460px] content-end gap-6 p-3 md:min-h-[610px] md:max-w-4xl md:p-6">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="text-4xl font-semibold leading-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.28)] md:text-6xl">{title}</h1>
      <p className="max-w-2xl text-base text-white/90 md:text-xl">{subtitle}</p>
      {badges?.length ? (
        <div className="flex flex-wrap gap-2">
          {badges.map((badge) => (
            <span key={badge} className="rounded-full border border-white/35 bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.1em] text-white backdrop-blur-sm">
              {badge}
            </span>
          ))}
        </div>
      ) : null}
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
