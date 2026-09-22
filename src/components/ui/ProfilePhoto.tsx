import { motion } from 'framer-motion';
import { portfolio } from '@/data/portfolio';

interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  withFrame?: boolean;
}

const sizes = {
  sm: 'w-24 h-24',
  md: 'w-36 h-36',
  lg: 'w-48 h-48 md:w-56 md:h-56',
  xl: 'w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] max-w-full',
};

/**
 * Profile photo component integrated into the blueprint / engineering canvas.
 *
 * Integrated composition:
 *   - No card or bounding box: the portrait's transparent background directly reveals
 *     the blueprint grid and Hero background beneath it.
 *   - Depth underlay: soft ambient radial glow grounds the portrait organically.
 *   - Technical drafting ticks: subtle, sharp CAD reference marks that read as
 *     blueprint alignment notations rather than an enclosing box.
 *
 * Image source: portfolio.profileImage (public/assets/profile/hossam-profile.webp)
 */
export function ProfilePhoto({ size = 'lg', className = '', withFrame = true }: Props) {
  return (
    <div className={`relative ${sizes[size]} ${className}`}>
      {withFrame && (
        <>
          {/* Depth underlay — soft radial luminance focused behind head and shoulders */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-8 sm:-inset-12 rounded-full"
            style={{
              background:
                'radial-gradient(ellipse at 50% 38%, rgb(var(--accent) / 0.09) 0%, transparent 68%)',
            }}
          />

          {/* Structural / CAD drafting reference markers — asymmetric, open alignment marks (not a card box) */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            {/* Top-start datum marker */}
            <span
              className="absolute -top-3 -start-3 h-3.5 w-3.5 border-t border-s opacity-30"
              style={{ borderColor: 'rgb(var(--grid-line))' }}
            />
            {/* Top-end datum marker */}
            <span
              className="absolute -top-3 -end-3 h-3.5 w-3.5 border-t border-e opacity-30"
              style={{ borderColor: 'rgb(var(--grid-line))' }}
            />
            {/* Lateral alignment tick — mid-height datum */}
            <span
              className="absolute top-1/2 -end-3 w-2.5 h-px opacity-25"
              style={{ backgroundColor: 'rgb(var(--grid-line))' }}
            />
          </div>
        </>
      )}

      {/* Photo — transparent portrait composited naturally into website background */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full w-full select-none"
        style={{
          maskImage:
            'linear-gradient(to bottom, black 0%, black 82%, rgba(0, 0, 0, 0.6) 92%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, black 0%, black 82%, rgba(0, 0, 0, 0.6) 92%, transparent 100%)',
        }}
      >
        <img
          src={portfolio.profileImage}
          alt={`${portfolio.name} — professional photo`}
          className="h-full w-full object-contain"
          loading="eager"
          decoding="async"
          onError={(e) => {
            // Graceful placeholder if image is missing
            (e.currentTarget as HTMLImageElement).style.display = 'none';
            const parent = (e.currentTarget as HTMLImageElement).parentElement;
            if (parent && !parent.querySelector('.ph')) {
              const ph = document.createElement('div');
              ph.className =
                'ph absolute inset-0 flex items-center justify-center text-subtle font-mono text-xs';
              ph.textContent = 'profile.png';
              parent.appendChild(ph);
            }
          }}
        />
      </motion.div>
    </div>
  );
}
