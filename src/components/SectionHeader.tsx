export const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <header className="mb-6 space-y-2">
    <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
    {subtitle ? <p className="max-w-3xl text-slate-600">{subtitle}</p> : null}
  </header>
);
