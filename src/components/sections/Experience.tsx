import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, MapPin } from 'lucide-react';
import { portfolio } from '@/data/portfolio';
import { useLang } from '@/context/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Experience() {
  const { t } = useLang();
  const entries = portfolio.experience;

  return (
    <section id="experience" className="section-pad">
      <div className="mx-auto max-w-7xl container-px">
        <SectionHeader eyebrow="03 / Experience" title={t.sections.experience} />

        {entries.length === 0 ? (
          <EmptyState title={t.experience.emptyTitle} body={t.experience.emptyBody} />
        ) : (
          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute top-0 bottom-0 w-px"
              style={{ backgroundColor: 'rgb(var(--border))', insetInlineStart: '11px' }}
              aria-hidden
            />
            <div className="flex flex-col gap-5">
              {entries.map((e, i) => (
                <ExperienceCard key={e.id} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ExperienceCard({ index }: { index: number }) {
  const { t, lang } = useLang();
  // We read entries by index from portfolio to keep it simple
  const e = portfolio.experience[index];
  const [open, setOpen] = useState(false);
  const hasDetails = !!(e.description || e.responsibilities?.length || e.achievements?.length || e.tools?.length);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="relative ps-9"
    >
      {/* Timeline dot */}
      <span
        className="absolute top-5 -start-0 grid place-items-center h-6 w-6 rounded-full surface"
        style={{ backgroundColor: 'rgb(var(--bg-elevated))' }}
      >
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: 'rgb(var(--accent))' }} />
      </span>

      <div className="surface rounded-2xl overflow-hidden" style={{ backgroundColor: 'rgb(var(--bg-elevated))' }}>
        <button
          onClick={() => hasDetails && setOpen((v) => !v)}
          className={`w-full text-start p-5 md:p-6 flex items-start justify-between gap-4 ${hasDetails ? 'cursor-pointer' : 'cursor-default'}`}
        >
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Briefcase size={15} className="text-accent shrink-0" />
              <h3 className="font-display text-lg font-semibold">{e.position[lang]}</h3>
            </div>
            <div className="text-sm text-muted">
              <span className="font-medium text-fg">{e.company}</span>
              {e.location && (
                <>
                  <span className="mx-1.5 text-subtle">·</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={11} /> {e.location}
                  </span>
                </>
              )}
            </div>
            {(e.startDate || e.endDate) && (
              <div className="mt-1.5 font-mono text-2xs text-subtle uppercase tracking-wider">
                {e.startDate} — {e.endDate ?? t.experience.present}
              </div>
            )}
          </div>
          {hasDetails && (
            <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
              <ChevronDown size={18} className="text-subtle" />
            </motion.span>
          )}
        </button>

        <AnimatePresence initial={false}>
          {open && hasDetails && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="px-5 md:px-6 pb-5 md:pb-6 pt-1 space-y-4 text-sm">
                {e.description && <p className="text-muted leading-relaxed">{e.description[lang]}</p>}
                {e.responsibilities && e.responsibilities.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">{t.experience.responsibilities}</h4>
                    <ul className="space-y-1.5">
                      {e.responsibilities.map((r, j) => (
                        <li key={j} className="flex gap-2 text-muted">
                          <span className="text-accent mt-1.5">•</span>
                          {r[lang]}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {e.achievements && e.achievements.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">{t.experience.achievements}</h4>
                    <ul className="space-y-1.5">
                      {e.achievements.map((a, j) => (
                        <li key={j} className="flex gap-2 text-muted">
                          <span className="text-accent mt-1.5">•</span>
                          {a[lang]}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {e.tools && e.tools.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">{t.experience.tools}</h4>
                    <div className="flex flex-wrap gap-2">
                      {e.tools.map((tool) => (
                        <span key={tool} className="chip">{tool}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="surface rounded-2xl p-10 md:p-14 text-center"
      style={{ backgroundColor: 'rgb(var(--bg-elevated))' }}
    >
      <div className="mx-auto grid place-items-center h-14 w-14 rounded-2xl mb-5" style={{ backgroundColor: 'rgb(var(--accent-soft))' }}>
        <Briefcase size={24} className="text-accent" />
      </div>
      <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted max-w-lg mx-auto leading-relaxed">{body}</p>
    </motion.div>
  );
}
