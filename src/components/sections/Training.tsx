import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, GraduationCap, FileText } from 'lucide-react';
import { portfolio } from '@/data/portfolio';
import { useLang } from '@/context/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Training() {
  const { t, lang } = useLang();
  const entries = portfolio.training;

  return (
    <section id="training" className="section-pad bg-subtle">
      <div className="mx-auto max-w-7xl container-px">
        <SectionHeader eyebrow="03 / Field Exposure" title={t.sections.training} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {entries.map((tr, i) => (
            <motion.article
              key={tr.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="surface rounded-2xl p-6 flex flex-col justify-between group border border-default hover:border-accent/40 hover:shadow-elevate-md transition-all"
              style={{ backgroundColor: 'rgb(var(--bg-elevated))' }}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-4">
                  <div
                    className="grid place-items-center h-10 w-10 rounded-xl shrink-0"
                    style={{ backgroundColor: 'rgb(var(--accent-soft))' }}
                  >
                    <Award size={18} className="text-accent" />
                  </div>
                  <div className="flex items-center gap-2 flex-wrap justify-end">
                    {tr.categoryTag && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-2xs font-mono font-medium uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
                        {typeof tr.categoryTag === 'object' ? tr.categoryTag[lang] : tr.categoryTag}
                      </span>
                    )}
                    <span className="font-mono text-2xs text-subtle">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-base font-semibold leading-snug mb-1 text-fg group-hover:text-accent transition-colors">
                  {tr.title[lang]}
                </h3>
                <div className="text-sm text-accent font-medium mb-1.5">{tr.organization}</div>

                {tr.category && (
                  <div className="text-xs font-mono text-subtle mb-3">
                    {tr.category[lang]}
                  </div>
                )}

                {(tr.date || tr.duration) && (
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-2xs text-subtle font-mono uppercase tracking-wider mb-3">
                    {tr.date && (
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={11} /> {tr.date}
                      </span>
                    )}
                    {tr.duration && <span>{tr.duration[lang]}</span>}
                  </div>
                )}

                {tr.description && (
                  <p className="text-sm text-muted leading-relaxed">
                    {tr.description[lang]}
                  </p>
                )}

                {tr.skillsGained && tr.skillsGained.length > 0 && (
                  <div className="mt-4">
                    <div className="font-mono text-2xs text-subtle uppercase tracking-wider mb-2">
                      {t.training.skillsGained}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {tr.skillsGained.map((s) => (
                        <span key={s.en} className="chip !text-2xs !py-1 !px-2">{s[lang]}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {(tr.reportUrl || tr.certificateUrl || tr.link) && (
                <div className="mt-4 pt-4 border-t flex flex-wrap items-center gap-3" style={{ borderColor: 'rgb(var(--border))' }}>
                  {tr.reportUrl && (
                    <a
                      href={tr.reportUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline"
                    >
                      <FileText size={13} /> {t.training.viewReport}
                    </a>
                  )}
                  {tr.certificateUrl && (
                    <a
                      href={tr.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline"
                    >
                      <GraduationCap size={13} /> {t.training.certificate}
                    </a>
                  )}
                  {tr.link && (
                    <a
                      href={tr.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-accent transition-colors"
                    >
                      <ExternalLink size={13} /> {tr.linkLabel?.[lang] || (tr.link.includes('linkedin.com') ? t.training.viewLinkedInPost : t.training.visitLink)}
                    </a>
                  )}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
