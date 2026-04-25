export const TrustStrip = ({ items }: { items: string[] }) => (
  <section className="my-10 rounded-2xl border border-slate-200 bg-white p-4">
    <ul className="grid gap-2 text-sm md:grid-cols-4">
      {items.map((item) => <li key={item} className="rounded-xl bg-slate-100 px-3 py-2">{item}</li>)}
    </ul>
  </section>
);

export const FeatureGrid = ({ items }: { items: { title: string; body: string }[] }) => (
  <section className="grid gap-5 md:grid-cols-3">
    {items.map((item) => (
      <article key={item.title} className="card"><h3 className="mb-2 text-xl font-semibold">{item.title}</h3><p className="text-slate-600">{item.body}</p></article>
    ))}
  </section>
);

export const CTASection = ({ title, actionLabel, href }: { title: string; actionLabel: string; href: string }) => (
  <section className="my-12 rounded-3xl bg-stoneSky p-8 text-white">
    <h2 className="mb-4 text-3xl font-semibold">{title}</h2>
    <a href={href} className="inline-block rounded-full bg-white px-5 py-2 text-stoneSky">{actionLabel}</a>
  </section>
);
