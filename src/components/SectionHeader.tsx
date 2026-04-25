export const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <header className="mb-7 space-y-3">
    <h2 className="text-3xl font-semibold leading-tight text-slate-900 md:text-5xl">{title}</h2>
    {subtitle ? <p className="max-w-3xl text-base text-slate-600 md:text-lg">{subtitle}</p> : null}
  </header>
);
