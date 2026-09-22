import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useReveal } from '@/hooks/useReveal';
import { useLang } from '@/context/LanguageContext';

interface Props {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  align?: 'start' | 'center';
}

export function SectionHeader({ id, eyebrow, title, description, children, align = 'start' }: Props) {
  const { dir } = useLang();
  const { ref, inView } = useReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      id={id}
      className={`flex flex-col gap-2.5 md:gap-3 ${align === 'center' ? 'items-center text-center' : 'items-start'} mb-6 md:mb-8`}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2.5"
        >
          <span className="h-px w-6" style={{ backgroundColor: 'rgb(var(--accent) / 0.6)', transform: dir === 'rtl' ? 'scaleX(-1)' : undefined, transformOrigin: 'center' }} />
          <span className="font-mono text-2xs uppercase tracking-[0.18em] text-accent">{eyebrow}</span>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        className="text-3xl md:text-4xl font-semibold tracking-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className={`text-muted text-base md:text-lg leading-relaxed max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {description}
        </motion.p>
      )}
      {children}
    </div>
  );
}
