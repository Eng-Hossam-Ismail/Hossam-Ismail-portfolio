import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { portfolio } from '@/data/portfolio';
import { useLang } from '@/context/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Education() {
  const { t, lang } = useLang();
  const entries = portfolio.education;

  return (
    <section id="education" className="section-pad">
      <div className="mx-auto max-w-7xl container-px">
        <SectionHeader eyebrow="05 / Education" title={t.sections.education} />

        <div className="grid gap-5">
          {entries.map((ed, i) => (
            <motion.article
              key={ed.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="surface rounded-2xl overflow-hidden"
              style={{ backgroundColor: 'rgb(var(--bg-elevated))' }}
            >
              <div className="grid md:grid-cols-[auto,1fr] gap-6 p-6 md:p-8">
                {/* Icon / year block */}
                <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3">
                  <div className="grid place-items-center h-14 w-14 rounded-2xl shrink-0" style={{ backgroundColor: 'rgb(var(--accent-soft))' }}>
                    <GraduationCap size={24} className="text-accent" />
                  </div>
                  {ed.endYear && (
                    <div className="text-center md:text-start">
                      <div className="font-display text-2xl font-semibold leading-none">{ed.endYear}</div>
                      <div className="font-mono text-2xs text-subtle uppercase tracking-wider mt-1">
                        {t.education.graduationYear}
                      </div>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold">
                    {typeof ed.institution === 'object' ? ed.institution[lang] : ed.institution}
                  </h3>
                  <div className="mt-1 text-accent font-medium">{ed.degree[lang]}</div>

                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <BookOpen size={13} /> {ed.field[lang]}
                    </span>
                    {ed.location && (
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={13} /> {typeof ed.location === 'object' ? ed.location[lang] : ed.location}
                      </span>
                    )}
                    {(ed.startYear || ed.endYear) && (
                      <span className="inline-flex items-center gap-1.5 font-mono text-2xs uppercase tracking-wider text-subtle">
                        <Calendar size={11} />{' '}
                        {ed.startYear
                          ? `${ed.startYear} — ${ed.endYear}`
                          : lang === 'ar'
                          ? `التخرج المتوقع ${ed.endYear}`
                          : `Expected ${ed.endYear}`}
                      </span>
                    )}
                  </div>

                  {ed.specialization && (
                    <div className="mt-4">
                      <span className="font-mono text-2xs text-subtle uppercase tracking-wider">
                        {t.education.specialization}
                      </span>
                      <div className="mt-1.5 inline-flex">
                        <span className="chip" style={{ borderColor: 'rgb(var(--accent) / 0.4)', color: 'rgb(var(--accent))' }}>
                          {ed.specialization[lang]}
                        </span>
                      </div>
                    </div>
                  )}

                  {ed.description && (
                    <p className="mt-4 text-muted leading-relaxed">{ed.description[lang]}</p>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
