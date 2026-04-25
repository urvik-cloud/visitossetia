import { HeroImage } from './ImageCard';

export const TrustStrip = ({ items }: { items: string[] }) => (
  <section className="rounded-3xl border border-[#e5e7ea] bg-white p-5 shadow-[0_20px_50px_rgba(20,36,52,0.08)]">
    <ul className="grid gap-3 text-sm md:grid-cols-4">
      {items.map((item) => (
        <li key={item} className="rounded-2xl bg-[#f3f6f8] px-4 py-3 text-slate-700">
          {item}
        </li>
      ))}
    </ul>
  </section>
);

export const FeatureGrid = ({ items }: { items: { title: string; body: string }[] }) => (
  <section className="grid gap-5 md:grid-cols-3">
    {items.map((item) => (
      <article key={item.title} className="premium-card">
        <h3 className="mb-3 text-3xl font-semibold text-slate-900">{item.title}</h3>
        <p className="text-slate-600">{item.body}</p>
      </article>
    ))}
  </section>
);

export const CTASection = ({ title, actionLabel, href, image, alt }: { title: string; actionLabel: string; href: string; image?: string; alt?: string }) => (
  <section className="relative overflow-hidden rounded-[2rem] border border-[#e5e7ea] p-8 text-white shadow-[0_20px_50px_rgba(20,36,52,0.08)] md:p-12">
    <HeroImage src={image} alt={alt ?? title} className="absolute inset-0 h-full w-full rounded-none" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#142434b3] via-[#1d36588f] to-[#1d365840]" />
    <div className="relative z-10 max-w-3xl space-y-4">
      <h2 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
      <a href={href} className="btn-secondary inline-block bg-white text-[#142434]">
        {actionLabel}
      </a>
    </div>
  </section>
);
