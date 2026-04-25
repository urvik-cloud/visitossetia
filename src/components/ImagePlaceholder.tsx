export const ImagePlaceholder = ({ label }: { label: string }) => (
  <div className="relative h-56 rounded-2xl bg-gradient-to-br from-stoneSky via-alpine to-slate-300 p-6 text-white md:h-80">
    <div className="absolute inset-0 rounded-2xl bg-black/10" />
    <span className="relative z-10 text-sm uppercase tracking-[0.2em]">{label}</span>
  </div>
);
