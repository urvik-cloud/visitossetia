import { ImagePlaceholder } from './ImagePlaceholder';

export const Hero = ({ title, subtitle, label }: { title: string; subtitle: string; label: string }) => (
  <section className="grid gap-8 md:grid-cols-2 md:items-center">
    <div className="space-y-5">
      <h1 className="text-4xl font-semibold md:text-6xl">{title}</h1>
      <p className="max-w-xl text-lg text-slate-600">{subtitle}</p>
    </div>
    <ImagePlaceholder label={label} />
  </section>
);
