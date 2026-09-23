import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FolderOpen, MapPin, Calendar, User, Cpu, Layers,
  ExternalLink, FileText, Image as ImageIcon, X, Shield,
  CheckCircle2, UserCheck, Maximize2
} from 'lucide-react';
import { projects as projectData } from '@/data/projects';
import { portfolio } from '@/data/portfolio';
import type { ProjectEntry, DrawingSheet } from '@/data/types';
import { useLang } from '@/context/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Projects() {
  const { t, lang } = useLang();
  const [selected, setSelected] = useState<ProjectEntry | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const rawEntries = portfolio.projects.length ? portfolio.projects : projectData;

  // Extract unique categories for filtering if any exist
  const categories = useMemo(() => {
    const map = new Map<string, string>();
    rawEntries.forEach((p) => {
      if (p.type) {
        const key = typeof p.type === 'object' ? p.type.en : p.type;
        const label = typeof p.type === 'object' ? p.type[lang] : p.type;
        map.set(key, label);
      } else if (p.category) {
        map.set(p.category, p.category);
      }
    });
    return Array.from(map.entries()).map(([key, label]) => ({ key, label }));
  }, [rawEntries, lang]);

  const filteredEntries = useMemo(() => {
    if (activeCategory === 'all') return rawEntries;
    return rawEntries.filter((p) => {
      const typeKey = typeof p.type === 'object' ? p.type.en : p.type;
      return typeKey === activeCategory || p.category === activeCategory;
    });
  }, [rawEntries, activeCategory]);

  const isHistoryPushedRef = useRef(false);

  const handleOpen = (p: ProjectEntry) => {
    setSelected(p);
    isHistoryPushedRef.current = true;
    window.history.pushState({ projectModal: p.id }, '', window.location.href);
  };

  const handleClose = () => {
    setSelected(null);
    if (isHistoryPushedRef.current) {
      isHistoryPushedRef.current = false;
      if (window.history.state?.projectModal) {
        window.history.back();
      }
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      if (isHistoryPushedRef.current) {
        isHistoryPushedRef.current = false;
        setSelected(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-7xl container-px">
        <SectionHeader eyebrow="04 / Projects" title={t.projects.selectedTitle} />

        {/* Category filters — only shown if multiple categories exist */}
        {categories.length > 1 && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <button
              onClick={() => setActiveCategory('all')}
              className={`chip transition-colors ${
                activeCategory === 'all'
                  ? '!bg-accent !text-accent-fg !border-accent shadow-sm'
                  : 'hover:border-strong'
              }`}
            >
              {t.projects.all}
            </button>
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`chip transition-colors ${
                  activeCategory === cat.key
                    ? '!bg-accent !text-accent-fg !border-accent shadow-sm'
                    : 'hover:border-strong'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {filteredEntries.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredEntries.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} onOpen={() => handleOpen(p)} />
            ))}
          </div>
        )}
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={handleClose} />
        )}
      </AnimatePresence>
    </section>
  );
}

function EmptyState() {
  const { t } = useLang();
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative surface rounded-2xl p-10 md:p-16 text-center overflow-hidden"
      style={{ backgroundColor: 'rgb(var(--bg-elevated))' }}
    >
      {/* Decorative grid */}
      <div className="absolute inset-0 blueprint-bg opacity-40 pointer-events-none" aria-hidden />
      <div className="relative">
        <div className="mx-auto grid place-items-center h-16 w-16 rounded-2xl mb-5" style={{ backgroundColor: 'rgb(var(--accent-soft))' }}>
          <FolderOpen size={28} className="text-accent" />
        </div>
        <h3 className="font-display text-xl md:text-2xl font-semibold mb-2">{t.projects.emptyTitle}</h3>
        <p className="text-muted max-w-lg mx-auto leading-relaxed">{t.projects.emptyBody}</p>
      </div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: ProjectEntry;
  index: number;
  onOpen: () => void;
}) {
  const { t, lang } = useLang();
  const [imgError, setImgError] = useState(false);
  const hasImage = project.images && project.images.length > 0 && !imgError;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="surface rounded-2xl overflow-hidden group flex flex-col hover:shadow-elevate-md transition-shadow cursor-pointer"
      style={{ backgroundColor: 'rgb(var(--bg-elevated))' }}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen()}
    >
      {/* Image / placeholder */}
      <div className="relative aspect-[16/10] overflow-hidden bg-subtle">
        {hasImage ? (
          <img
            src={project.images![0]}
            alt={project.title[lang]}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="h-full w-full flex flex-col items-center justify-center gap-2 text-subtle">
            <ImageIcon size={28} />
            <span className="font-mono text-2xs uppercase tracking-wider">
              {typeof project.type === 'object' ? project.type[lang] : (project.type || 'Project')}
            </span>
          </div>
        )}
        {project.featured && (
          <span className="absolute top-3 start-3 chip !text-2xs !py-1 !px-2 backdrop-blur-md" style={{ backgroundColor: 'rgb(var(--bg-elevated) / 0.85)' }}>
            ★ {t.projects.featured}
          </span>
        )}
        {project.year && (
          <span className="absolute top-3 end-3 font-mono text-2xs backdrop-blur-md px-2 py-1 rounded-md" style={{ backgroundColor: 'rgb(var(--bg-elevated) / 0.85)' }}>
            {project.year}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        {project.type && (
          <div className="font-mono text-2xs text-accent uppercase tracking-wider mb-2">
            {typeof project.type === 'object' ? project.type[lang] : project.type}
          </div>
        )}
        <h3 className="font-display text-lg font-semibold leading-snug mb-1.5">
          {project.title[lang]}
        </h3>
        <p className="text-sm text-muted leading-relaxed flex-1">{project.shortDescription[lang]}</p>

        {/* Meta row - only shown if location or role exists */}
        {(project.location || project.role) && (
          <div className="mt-4 pt-4 border-t flex flex-wrap items-center gap-x-3 gap-y-1.5 text-2xs text-subtle font-mono uppercase tracking-wider" style={{ borderColor: 'rgb(var(--border))' }}>
            {project.location && (
              <span className="inline-flex items-center gap-1"><MapPin size={11} /> {project.location}</span>
            )}
            {project.role && (
              <span className="inline-flex items-center gap-1"><User size={11} /> {project.role[lang]}</span>
            )}
          </div>
        )}

        {project.software && project.software.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.software.slice(0, 4).map((s) => (
              <span key={s} className="chip !text-2xs !py-1 !px-2 font-mono">{s}</span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}

function ProjectModal({ project, onClose }: { project: ProjectEntry; onClose: () => void }) {
  const { t, lang } = useLang();
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const [previewSheet, setPreviewSheet] = useState<DrawingSheet | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (previewSheet) {
          setPreviewSheet(null);
        } else {
          onClose();
        }
        return;
      }
      if (e.key === 'Tab' && modalRef.current && !previewSheet) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, [tabindex="0"]'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    closeBtnRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose, previewSheet]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative surface rounded-2xl w-full max-w-3xl max-h-[88vh] overflow-y-auto"
          style={{ backgroundColor: 'rgb(var(--bg-elevated))' }}
          onClick={(e) => e.stopPropagation()}
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-label={project.title[lang]}
        >
          {/* Close */}
          <button
            onClick={onClose}
            ref={closeBtnRef}
            className="absolute top-4 end-4 z-10 h-9 w-9 rounded-lg border flex items-center justify-center surface"
            style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-elevated) / 0.9)' }}
            aria-label={t.buttons.closeMenu}
          >
            <X size={18} />
          </button>

          {/* Hero image */}
          {project.images && project.images.length > 0 && (
            <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl bg-neutral-950 flex items-center justify-center">
              <img
                src={project.images[0]}
                alt={project.title[lang]}
                className="h-full w-full object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          )}

          <div className="p-6 md:p-8">
            {project.type && (
              <div className="font-mono text-2xs text-accent uppercase tracking-wider mb-2">
                {typeof project.type === 'object' ? project.type[lang] : project.type}
              </div>
            )}
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-2">{project.title[lang]}</h2>
            <p className="text-muted leading-relaxed">{project.shortDescription[lang]}</p>

            {/* Meta grid */}
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {project.status && (
                <Meta
                  icon={CheckCircle2}
                  label={lang === 'ar' ? 'حالة المشروع' : 'Project Status'}
                  value={project.status[lang]}
                />
              )}
              {project.mentor && (
                <Meta
                  icon={UserCheck}
                  label={lang === 'ar' ? 'إشراف وتوجيه' : 'Training Supervision'}
                  value={project.mentor[lang]}
                />
              )}
              {project.software && project.software.length > 0 && (
                <Meta
                  icon={Cpu}
                  label={lang === 'ar' ? 'البرامج المستخدمة' : 'Software Used'}
                  value={project.software.join(', ')}
                />
              )}
              {project.year && <Meta icon={Calendar} label={t.projects.year} value={project.year} />}
              {project.location && <Meta icon={MapPin} label={t.projects.location} value={project.location} />}
              {project.role && <Meta icon={User} label={t.projects.role} value={project.role[lang]} />}
            </div>

            {/* Codes & Standards */}
            {project.codesAndStandards && project.codesAndStandards.length > 0 && (
              <div className="mt-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-2 flex items-center gap-1.5">
                  <Shield size={13} /> {t.projects.codes}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.codesAndStandards.map((code) => (
                    <span key={code} className="chip font-mono !text-xs !border-accent/40 !text-accent">
                      {code}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Project Scope / Detailed Description */}
            {project.detailedDescription && (
              <div className="mt-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-2">
                  {lang === 'ar' ? 'نطاق المشروع والتفصيل الإنشائي' : 'Design & Drafting Scope'}
                </h4>
                <p className="text-muted leading-relaxed">{project.detailedDescription[lang]}</p>
              </div>
            )}

            {project.disciplines && project.disciplines.length > 0 && (
              <div className="mt-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-2 flex items-center gap-1.5">
                  <Layers size={13} /> {t.projects.disciplines}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.disciplines.map((d) => (
                    <span key={d.en} className="chip">{d[lang]}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges / Solutions / Results (preserved if present on other projects) */}
            <div className="mt-6 grid gap-4">
              {project.challenges?.[lang] && (
                <DetailBlock label={t.projects.challenges} text={project.challenges[lang]} />
              )}
              {project.solutions?.[lang] && (
                <DetailBlock label={t.projects.solutions} text={project.solutions[lang]} />
              )}
              {project.results?.[lang] && (
                <DetailBlock label={t.projects.results} text={project.results[lang]} />
              )}
            </div>

            {/* Structural Drawing Set Gallery */}
            {project.drawingSheets && project.drawingSheets.length > 0 ? (
              <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold flex items-center gap-2">
                    <Layers size={14} className="text-accent" />
                    <span>{lang === 'ar' ? 'مجموعة اللوحات الإنشائية' : 'Structural Drawing Set'}</span>
                  </h4>
                  <span className="font-mono text-2xs text-subtle">
                    {project.drawingSheets.length} {lang === 'ar' ? 'لوحات' : 'Sheets'}
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.drawingSheets.map((sheet) => (
                    <div
                      key={sheet.sheetNumber}
                      onClick={() => setPreviewSheet(sheet)}
                      className="group/sheet surface-subtle border rounded-xl overflow-hidden hover:border-accent/60 transition-all cursor-pointer flex flex-col"
                      style={{ borderColor: 'rgb(var(--border))' }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && setPreviewSheet(sheet)}
                      title={sheet.title[lang]}
                    >
                      <div className="relative aspect-[16/11] bg-neutral-950/80 p-2 flex items-center justify-center overflow-hidden">
                        <img
                          src={sheet.imageUrl}
                          alt={sheet.title[lang]}
                          className="h-full w-full object-contain transition-transform duration-300 group-hover/sheet:scale-[1.02]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/sheet:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="chip !text-2xs !py-1 !px-2.5 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                            <Maximize2 size={12} />
                            <span>{lang === 'ar' ? 'تكبير اللوحة' : 'Expand Sheet'}</span>
                          </span>
                        </div>
                      </div>
                      <div className="p-3 border-t flex items-center justify-between gap-2" style={{ borderColor: 'rgb(var(--border))' }}>
                        <div className="min-w-0 flex-1">
                          <span className="font-mono text-2xs text-accent uppercase tracking-wider block">
                            {lang === 'ar' ? `لوحة ${sheet.sheetNumber}` : `Sheet ${sheet.sheetNumber}`}
                          </span>
                          <span className="text-xs font-medium truncate block">
                            {sheet.title[lang]}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : project.images && project.images.length > 1 ? (
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-3">{t.projects.gallery}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {project.images.slice(1).map((img, i) => (
                    <div key={i} className="aspect-square rounded-lg overflow-hidden bg-subtle">
                      <img
                        src={img}
                        alt={`${project.title[lang]} ${i + 2}`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).parentElement!.style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {/* Technical Documents & Links */}
            {(project.links && project.links.length > 0) || project.pdfFiles?.length || project.documents?.length ? (
              <div className="mt-6 pt-6 border-t flex flex-wrap gap-3" style={{ borderColor: 'rgb(var(--border))' }}>
                {project.documents?.map((doc, i) => (
                  <a
                    key={`doc-${i}`}
                    href={doc.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary !text-xs !py-2.5 inline-flex items-center gap-2"
                  >
                    <FileText size={14} /> {doc.title[lang]}
                  </a>
                ))}
                {project.pdfFiles?.map((f, i) => (
                  <a key={`f${i}`} href={f} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !text-xs !py-2.5 inline-flex items-center gap-2">
                    <FileText size={14} /> {t.buttons.download}
                  </a>
                ))}
                {project.links?.map((l, i) => (
                  <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline !text-xs !py-2.5 inline-flex items-center gap-2">
                    <ExternalLink size={14} /> {l.label[lang]}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </motion.div>
      </motion.div>

      {/* High-resolution Drawing Sheet Lightbox */}
      <AnimatePresence>
        {previewSheet && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[75] bg-black/95 backdrop-blur-md flex flex-col p-4 md:p-6"
            onClick={() => setPreviewSheet(null)}
          >
            <div className="flex items-center justify-between text-white mb-3" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-accent uppercase tracking-wider">
                  {lang === 'ar' ? `لوحة ${previewSheet.sheetNumber}` : `Sheet ${previewSheet.sheetNumber}`}
                </span>
                <h3 className="text-sm md:text-base font-semibold">{previewSheet.title[lang]}</h3>
              </div>
              <button
                onClick={() => setPreviewSheet(null)}
                className="h-9 w-9 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors text-white"
                aria-label={t.buttons.closeMenu}
              >
                <X size={18} />
              </button>
            </div>
            <div
              className="flex-1 min-h-0 flex items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={previewSheet.imageUrl}
                alt={previewSheet.title[lang]}
                className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Meta({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return (
    <div className="surface-subtle rounded-lg p-3">
      <div className="flex items-center gap-1.5 font-mono text-2xs text-subtle uppercase tracking-wider mb-1">
        <Icon size={11} /> {label}
      </div>
      <div className="text-sm font-medium">{value}</div>
    </div>
  );
}

function DetailBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="surface-subtle rounded-xl p-4">
      <div className="font-mono text-2xs text-accent uppercase tracking-wider mb-1.5">{label}</div>
      <p className="text-sm text-muted leading-relaxed">{text}</p>
    </div>
  );
}

