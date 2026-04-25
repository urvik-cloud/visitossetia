import Image from 'next/image';

type BaseProps = {
  src?: string;
  alt: string;
  ratio?: '16/9' | '4/3' | '3/2';
  overlay?: boolean;
  label?: string;
  className?: string;
};

const ratioClass: Record<NonNullable<BaseProps['ratio']>, string> = {
  '16/9': 'aspect-[16/9]',
  '4/3': 'aspect-[4/3]',
  '3/2': 'aspect-[3/2]'
};

const fallback = 'bg-gradient-to-br from-[#b7c9d9] via-[#d7e2eb] to-[#f5f3ef]';

export const ImageCard = ({ src, alt, ratio = '4/3', overlay = false, label, className = '' }: BaseProps) => (
  <div className={`group relative overflow-hidden rounded-3xl border border-[#e2e7ed] shadow-[0_20px_48px_rgba(20,36,52,0.1)] ${ratioClass[ratio]} ${className}`}>
    {src ? (
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-500 group-hover:scale-[1.02]" />
    ) : (
      <div className={`h-full w-full ${fallback}`} aria-label={alt} />
    )}
    {overlay ? <div className="absolute inset-0 bg-gradient-to-t from-[#11223699] via-[#1b3b5870] to-transparent" /> : null}
    {label ? <span className="absolute start-4 top-4 z-10 rounded-full border border-white/70 bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">{label}</span> : null}
  </div>
);

export const HeroImage = (props: Omit<BaseProps, 'ratio'>) => <ImageCard ratio="16/9" {...props} />;

export const DestinationImage = (props: Omit<BaseProps, 'ratio'>) => <ImageCard ratio="4/3" overlay {...props} />;
