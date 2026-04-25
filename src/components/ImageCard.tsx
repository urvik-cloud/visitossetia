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

const fallback = 'bg-gradient-to-br from-[#10253b] via-[#32506f] to-[#6b8364]';

export const ImageCard = ({ src, alt, ratio = '4/3', overlay = false, label, className = '' }: BaseProps) => (
  <div className={`group relative overflow-hidden rounded-3xl shadow-[0_26px_45px_rgba(15,31,46,0.24)] ${ratioClass[ratio]} ${className}`}>
    {src ? (
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
    ) : (
      <div className={`h-full w-full ${fallback}`} aria-label={alt} />
    )}
    {overlay ? <div className="absolute inset-0 bg-gradient-to-t from-[#08131fcc] via-[#0f243180] to-transparent" /> : null}
    {label ? <span className="absolute left-4 top-4 z-10 rounded-full border border-white/45 bg-black/30 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-white">{label}</span> : null}
  </div>
);

export const HeroImage = (props: Omit<BaseProps, 'ratio'>) => <ImageCard ratio="16/9" overlay {...props} />;

export const DestinationImage = (props: Omit<BaseProps, 'ratio'>) => <ImageCard ratio="4/3" overlay {...props} />;
