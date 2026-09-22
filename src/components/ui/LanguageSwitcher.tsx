import { Languages } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { lang, toggle, t } = useLang();
  return (
    <button
      onClick={toggle}
      className={`relative inline-flex items-center gap-1.5 h-9 rounded-lg border px-2.5 surface-subtle transition-colors hover:border-strong ${className}`}
      style={{ borderColor: 'rgb(var(--border))' }}
      aria-label={t.buttons.switchLanguage}
      title={t.buttons.switchLanguage}
    >
      <Languages size={15} className="text-accent" />
      <span className="font-mono text-xs font-semibold tracking-wide">
        {lang === 'en' ? 'EN' : 'AR'}
      </span>
      <span className="text-subtle text-xs">/</span>
      <span className="font-mono text-xs text-subtle">
        {lang === 'en' ? 'AR' : 'EN'}
      </span>
    </button>
  );
}
