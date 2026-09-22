import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useLang } from '@/context/LanguageContext';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const { t } = useLang();
  return (
    <button
      onClick={toggle}
      className={`relative h-9 w-9 rounded-lg border border-default surface-subtle flex items-center justify-center transition-colors hover:border-strong ${className}`}
      style={{ borderColor: 'rgb(var(--border))' }}
      aria-label={t.buttons.switchTheme}
      title={t.buttons.switchTheme}
    >
      <Sun size={16} className={`absolute transition-all duration-300 ${theme === 'dark' ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
      <Moon size={16} className={`absolute transition-all duration-300 ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
    </button>
  );
}
