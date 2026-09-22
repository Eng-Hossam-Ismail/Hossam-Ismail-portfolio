/**
 * Subtle blueprint grid background overlay.
 * Use as an absolutely-positioned decorative layer inside a relative container.
 */
export function BlueprintGrid({ className = '', opacity = 1 }: { className?: string; opacity?: number }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 blueprint-bg ${className}`}
      style={{ opacity }}
    />
  );
}

/** Thin technical-drawing-style separator with coordinate ticks. */
export function TechnicalDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden>
      <span className="font-mono text-2xs text-subtle">01</span>
      <span className="h-px flex-1" style={{ backgroundColor: 'rgb(var(--border))' }} />
      <span
        className="h-1.5 w-1.5 rotate-45 border"
        style={{ borderColor: 'rgb(var(--accent) / 0.6)' }}
      />
      <span className="h-px flex-1" style={{ backgroundColor: 'rgb(var(--border))' }} />
      <span className="font-mono text-2xs text-subtle">02</span>
    </div>
  );
}

/**
 * Sparse engineering micro-annotations for the Hero section.
 *
 * Purely decorative — always aria-hidden, pointer-events-none.
 * Uses existing --grid-line color token. No animation (reduced-motion safe by default).
 *
 * Visibility:
 *   - Axis corner marker: hidden below md breakpoint
 *   - Section reference: hidden below lg breakpoint
 */
export function HeroAnnotations() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      style={{ color: 'rgb(var(--grid-line))' }}
    >
      {/* ── Axis corner marker — bottom-left, outside main content zone ── */}
      <div className="absolute bottom-14 left-10 hidden lg:block opacity-[0.16]">
        <svg
          width="54"
          height="54"
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          {/* Y axis (vertical) */}
          <line x1="10" y1="46" x2="10" y2="6" stroke="currentColor" strokeWidth="0.8" />
          {/* X axis (horizontal) */}
          <line x1="10" y1="46" x2="50" y2="46" stroke="currentColor" strokeWidth="0.8" />
          {/* Y arrowhead */}
          <polyline
            points="7,10 10,6 13,10"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
            strokeLinejoin="round"
          />
          {/* X arrowhead */}
          <polyline
            points="46,43 50,46 46,49"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
            strokeLinejoin="round"
          />
          {/* Origin dot */}
          <circle cx="10" cy="46" r="1.5" fill="currentColor" />
          {/* Y label */}
          <text
            x="2"
            y="5"
            fill="currentColor"
            fontSize="7"
            fontFamily="JetBrains Mono, monospace"
            letterSpacing="0.05em"
          >
            Y
          </text>
          {/* X label */}
          <text
            x="44"
            y="42"
            fill="currentColor"
            fontSize="7"
            fontFamily="JetBrains Mono, monospace"
            letterSpacing="0.05em"
          >
            X
          </text>
        </svg>
      </div>

      {/* ── Section reference — right edge, vertical mono text, desktop only ── */}
      <div
        className="absolute top-32 right-3 hidden lg:block opacity-[0.10]"
        style={{
          writingMode: 'vertical-rl',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 8,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
        }}
      >
        SEC · 01
      </div>
    </div>
  );
}

