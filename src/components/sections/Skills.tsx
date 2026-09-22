import { motion } from 'framer-motion';
import { Layers, Building2, FileText } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { portfolio } from '@/data/portfolio';
import { useLang } from '@/context/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';

const iconMap: Record<string, LucideIcon> = {
  software: Layers,
  structure: Building2,
  detailing: FileText,
};

export function Skills() {
  const { t, lang } = useLang();

  return (
    <section id="skills" className="section-pad bg-subtle">
      <div className="mx-auto max-w-7xl container-px">
        <SectionHeader eyebrow="02 / Skills" title={t.sections.skills} />

        <div className="grid md:grid-cols-3 gap-5">
          {portfolio.skills.map((cat, i) => {
            const Icon = (cat.icon && iconMap[cat.icon]) ? iconMap[cat.icon] : Building2;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8% 0px' }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                className="surface rounded-xl p-6 border border-default hover:border-accent/40 transition-colors"
                style={{ backgroundColor: 'rgb(var(--bg-elevated))' }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="grid place-items-center h-10 w-10 rounded-lg"
                    style={{ backgroundColor: 'rgb(var(--accent-soft))' }}
                  >
                    <Icon size={18} className="text-accent" />
                  </div>
                  <span className="font-mono text-2xs text-subtle">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold mb-4 text-fg">
                  {cat.title[lang]}
                </h3>

                <ul className="flex flex-col gap-2.5">
                  {cat.skills.map((s, j) => {
                    const isDeveloping = s.en === 'Steel Structures' || s.en.includes('Developing Focus');
                    return (
                      <motion.li
                        key={s.en}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + j * 0.05, duration: 0.4 }}
                        className="flex items-center justify-between gap-2 text-sm text-muted"
                      >
                        <span className="flex items-center gap-2.5">
                          <span
                            className="h-1 w-1 rounded-full shrink-0"
                            style={{ backgroundColor: 'rgb(var(--accent))' }}
                          />
                          <span className={cat.id === 'software' ? 'font-mono text-[13px] font-medium text-fg' : ''}>
                            {s[lang]}
                          </span>
                        </span>
                        {isDeveloping && (
                          <span className="chip font-mono text-[10px] !py-0.5 !px-2 shrink-0">
                            {lang === 'ar' ? 'قيد التطوير' : 'Developing'}
                          </span>
                        )}
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
