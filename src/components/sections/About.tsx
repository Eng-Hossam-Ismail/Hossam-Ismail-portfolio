import { motion } from 'framer-motion';
import { portfolio } from '@/data/portfolio';
import { useLang } from '@/context/LanguageContext';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AboutImage } from '@/components/ui/AboutImage';

export function About() {
  const { t, lang } = useLang();
  const paragraphs = portfolio.about.summary[lang].split('\n\n');

  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-7xl container-px">
        <SectionHeader
          eyebrow="01 / About"
          title={t.sections.about}
        />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ── Left Column: Narrative & Focus ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col gap-5"
          >
            {/* Narrative Paragraphs */}
            <div className="space-y-3.5">
              {paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-base md:text-lg leading-relaxed text-muted"
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Core Engineering Focus Pillars */}
            <div className="pt-1">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="h-px w-3.5" style={{ backgroundColor: 'rgb(var(--accent))' }} />
                <h3 className="font-mono text-2xs uppercase tracking-[0.18em] text-accent font-medium">
                  {t.about.focusTitle}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolio.about.focus.map((f) => (
                  <span
                    key={f.en}
                    className="chip font-mono text-xs"
                  >
                    {f[lang]}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right Column: Structural / Architectural Image ──────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-5 flex items-center justify-center w-full"
          >
            <AboutImage
              src={portfolio.about.image}
              alt={portfolio.about.imageAlt ? portfolio.about.imageAlt[lang] : undefined}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
