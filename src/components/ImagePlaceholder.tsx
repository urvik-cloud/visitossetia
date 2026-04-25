type Tone = 'mountain' | 'city' | 'culture' | 'snow' | 'road';

export const ImagePlaceholder = ({ label, tone = 'mountain' }: { label: string; tone?: Tone }) => {
  const themes: Record<Tone, string> = {
    mountain: 'from-[#1b2a3e] via-[#2d4d6d] to-[#6e879f]',
    city: 'from-[#202b3b] via-[#4f5d73] to-[#9ca8bc]',
    culture: 'from-[#3f2a1e] via-[#805734] to-[#b58b56]',
    snow: 'from-[#263852] via-[#6b88a3] to-[#d7e4ef]',
    road: 'from-[#1f2d3d] via-[#415f7b] to-[#8ea3b4]'
  };

  return (
    <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${themes[tone]} p-7 text-white shadow-soft`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_50%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
      <span className="relative z-10 inline-flex rounded-full border border-white/35 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/90">
        {label}
      </span>
    </div>
  );
};
