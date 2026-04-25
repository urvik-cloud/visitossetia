import { HeroImage } from './ImageCard';

export const TrustStrip = ({ items }: { items: string[] }) => (
  <section className="rounded-3xl border border-white/40 bg-white/70 p-5 shadow-soft backdrop-blur">
    <ul className="grid gap-3 text-sm md:grid-cols-4">
      {items.map((item) => (
        <li key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700">{item}</li>
      ))}
    </ul>
  </section>
);

export const FeatureGrid = ({ items }: { items: { title: string; body: string }[] }) => (
  <section className="grid gap-5 md:grid-cols-2">
    {items.map((item) => (
      <article key={item.title} className="premium-card">
        <h3 className="mb-2 text-2xl font-semibold text-slate-900">{item.title}</h3>
        <p className="text-slate-700">{item.body}</p>
      </article>
    ))}
  </section>
);

export const CTASection = ({ title, actionLabel, href, image, alt }: { title: string; actionLabel: string; href: string; image?: string; alt?: string }) => (
  <section className="relative overflow-hidden rounded-[2rem] p-8 text-white shadow-soft md:p-12">
    <HeroImage src={image} alt={alt ?? title} className="absolute inset-0 h-full w-full" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#13263ced] via-[#2b4764d1] to-[#4b657fb8]" />
    <div className="relative z-10">
      <h2 className="mb-4 max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
      <a href={href} className="btn-primary inline-block bg-white text-stoneSky">{actionLabel}</a>
    </div>
  </section>
);
