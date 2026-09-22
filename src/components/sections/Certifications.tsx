import { motion } from 'framer-motion';
import { BadgeCheck, ExternalLink, FileText, GraduationCap, Users } from 'lucide-react';
import { portfolio } from '@/data/portfolio';
import { useLang } from '@/context/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { CertificationEntry } from '@/data/types';

export function Certifications() {
  const { t, lang } = useLang();
  const entries = portfolio.certifications;

  const certEntries = entries.filter((c) => c.category === 'certification');
  const otherEntries = entries.filter((c) => !c.category);
  const devEntries = entries.filter((c) => c.category === 'development');
  const activityEntries = entries.filter((c) => c.category === 'activity');

  const renderCard = (c: CertificationEntry, i: number, fallbackIcon: React.ReactNode) => (
    <motion.article
      key={c.id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="surface rounded-2xl p-6 border border-default hover:border-accent/40 hover:shadow-elevate-md transition-all flex flex-col justify-between h-full"
      style={{ backgroundColor: 'rgb(var(--bg-elevated))' }}
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div
            className="grid place-items-center h-10 w-10 rounded-xl shrink-0"
            style={{ backgroundColor: 'rgb(var(--accent-soft))' }}
          >
            {fallbackIcon}
          </div>
          {c.categoryLabel && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-2xs font-mono font-medium uppercase tracking-wider bg-accent/10 text-accent border border-accent/20 text-start">
              {c.categoryLabel[lang]}
            </span>
          )}
        </div>

        <h4 className="font-display text-base font-semibold leading-snug text-fg mb-1">
          {c.name[lang]}
        </h4>
        <div className="text-sm text-accent font-medium mb-3">{c.organization}</div>

        {c.description && (
          <p className="text-sm text-muted leading-relaxed mb-4">{c.description[lang]}</p>
        )}

        {c.credentialId && (
          <div className="font-mono text-2xs text-subtle mb-3">
            {t.certifications.credentialId}: {c.credentialId}
          </div>
        )}
      </div>

      {(c.link || c.credentialUrl || c.certificateFile) && (
        <div className="pt-4 border-t border-default flex flex-wrap items-center gap-3 mt-auto">
          {(c.link || c.credentialUrl) && (
            <a
              href={c.link || c.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline"
            >
              <ExternalLink size={13} />
              {c.id === 'forward'
                ? t.certifications.verifyBadge
                : c.category === 'activity' || c.category === 'development'
                ? t.training.visitLink
                : t.certifications.viewCredential}
            </a>
          )}
          {c.certificateFile && (
            <a
              href={c.certificateFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-accent transition-colors"
            >
              <FileText size={13} /> {t.certifications.viewCertificate}
            </a>
          )}
        </div>
      )}
    </motion.article>
  );

  return (
    <section id="certifications" className="section-pad bg-subtle">
      <div className="mx-auto max-w-7xl container-px">
        <SectionHeader eyebrow="06 / Development" title={t.sections.certifications} />

        <div className="space-y-8">
          {/* ── Subgroup: Professional Certifications (rendered when present) ── */}
          {(certEntries.length > 0 || otherEntries.length > 0) && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BadgeCheck size={16} className="text-accent" />
                <h3 className="font-mono text-xs uppercase tracking-widest text-fg font-semibold">
                  {lang === 'ar' ? 'الشهادات والاعتمادات المهنية' : 'Professional Certifications'}
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[...certEntries, ...otherEntries].map((c, i) =>
                  renderCard(c, i, <BadgeCheck size={18} className="text-accent" />)
                )}
              </div>
            </div>
          )}

          {/* ── Side-by-Side on Desktop/Tablet: Professional Development & Engineering Activities ── */}
          {(devEntries.length > 0 || activityEntries.length > 0) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
              {/* Column 1: Professional Development */}
              {devEntries.length > 0 && (
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap size={16} className="text-accent" />
                    <h3 className="font-mono text-xs uppercase tracking-widest text-fg font-semibold">
                      {lang === 'ar' ? 'التطوير المهني' : 'Professional Development'}
                    </h3>
                  </div>
                  <div className="flex-1 flex flex-col">
                    {devEntries.map((c, i) =>
                      renderCard(c, i, <GraduationCap size={18} className="text-accent" />)
                    )}
                  </div>
                </div>
              )}

              {/* Column 2: Engineering Activities & Exhibitions */}
              {activityEntries.length > 0 && (
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <Users size={16} className="text-accent" />
                    <h3 className="font-mono text-xs uppercase tracking-widest text-fg font-semibold">
                      {lang === 'ar' ? 'الأنشطة والمعارض الهندسية' : 'Engineering Activities & Exhibitions'}
                    </h3>
                  </div>
                  <div className="flex-1 flex flex-col">
                    {activityEntries.map((c, i) =>
                      renderCard(c, i, <Users size={18} className="text-accent" />)
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
