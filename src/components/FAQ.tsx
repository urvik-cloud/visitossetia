export const FAQ = ({ items }: { items: { q: string; a: string }[] }) => (
  <section className="space-y-4" aria-label="FAQ">
    {items.map((item) => (
      <details key={item.q} className="card">
        <summary className="cursor-pointer font-medium">{item.q}</summary>
        <p className="mt-3 text-slate-600">{item.a}</p>
      </details>
    ))}
  </section>
);
