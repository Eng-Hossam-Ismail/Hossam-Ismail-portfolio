import { Download } from 'lucide-react';
import { portfolio } from '@/data/portfolio';
import { useLang } from '@/context/LanguageContext';

interface Props {
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  showIcon?: boolean;
}

export function CVButton({ variant = 'primary', className = '', showIcon = true }: Props) {
  const { t } = useLang();
  return (
    <a
      href={portfolio.cvPath}
      download
      className={`btn btn-${variant} ${className}`}
      aria-label={t.buttons.downloadCV}
    >
      {showIcon && <Download size={16} strokeWidth={2} />}
      {t.buttons.downloadCV}
    </a>
  );
}
