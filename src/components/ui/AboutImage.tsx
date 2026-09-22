import { useState } from 'react';

interface AboutImageProps {
  src?: string;
  alt?: string;
  className?: string;
}

export function AboutImage({ src, alt, className = '' }: AboutImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const showImage = src && !hasError;

  return (
    <div
      className={`relative w-full max-w-lg mx-auto aspect-[16/11] sm:aspect-[4/3] overflow-hidden rounded-md border border-default bg-subtle select-none ${className}`}
      style={{
        borderColor: 'rgb(var(--border))',
        backgroundColor: 'rgb(var(--bg-subtle))',
      }}
    >
      {/* Structural placeholder backdrop (visible while loading or before an image asset is provided) */}
      <div
        className="absolute inset-0 blueprint-bg flex flex-col items-center justify-center p-6 text-center transition-opacity duration-300"
        style={{ opacity: loaded ? 0 : 1 }}
        aria-hidden={loaded}
      >
        {/* Subtle structural grid lines */}
        <div className="absolute inset-4 border border-dashed rounded-[4px] pointer-events-none" style={{ borderColor: 'rgb(var(--border-strong) / 0.4)' }} />
        <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-px pointer-events-none" style={{ backgroundColor: 'rgb(var(--border-strong) / 0.25)' }} />
        <div className="absolute inset-y-8 left-1/2 -translate-x-1/2 w-px pointer-events-none" style={{ backgroundColor: 'rgb(var(--border-strong) / 0.25)' }} />

        {/* Minimal architectural frame indicator */}
        <div className="relative z-10 flex flex-col items-center gap-2">
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(var(--accent))"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ opacity: 0.65 }}
          >
            <rect x="3" y="3" width="18" height="18" rx="1" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="9" y1="21" x2="9" y2="9" />
            <line x1="15" y1="21" x2="15" y2="9" />
          </svg>
          <span className="font-mono text-2xs uppercase tracking-[0.2em]" style={{ color: 'rgb(var(--fg-subtle))', opacity: 0.75 }}>
            STRUCTURAL · ARCHITECTURE
          </span>
        </div>
      </div>

      {/* Actual image element when provided */}
      {showImage && (
        <img
          src={src}
          alt={alt ?? 'Structural Engineering'}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setHasError(true)}
          className={`relative z-10 w-full h-full object-cover object-center transition-opacity duration-700 ease-out ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Subtle edge treatment to integrate into background */}
      <div className="absolute inset-0 z-20 pointer-events-none ring-1 ring-inset ring-black/5 dark:ring-white/5" />
    </div>
  );
}
