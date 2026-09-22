import { motion } from 'framer-motion';
import { ArrowDown, Linkedin, Mail, MessageCircle, MapPin } from 'lucide-react';
import { portfolio } from '@/data/portfolio';
import { useLang } from '@/context/LanguageContext';
import { useEmailModal } from '@/context/EmailModalContext';
import { ProfilePhoto } from '@/components/ui/ProfilePhoto';
import { CVButton } from '@/components/ui/CVButton';
import { BlueprintGrid, HeroAnnotations } from '@/components/ui/Blueprint';

/**
 * Hero section.
 *
 * Engineering annotations:
 *   - HeroAnnotations adds a sparse axis marker + section reference.
 *   - These are aria-hidden micro-details; they do not compete with content.
 */
export function Hero() {
  const { t, lang } = useLang();
  const { openEmailModal } = useEmailModal();

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex items-center pt-20 pb-12 overflow-hidden"
    >
      {/* Blueprint grid background */}
      <BlueprintGrid className="opacity-60" />

      {/* Sparse engineering micro-annotations (axis marker, section ref) */}
      <HeroAnnotations />

      {/* Ambient accent glow — very restrained, supports composition */}
      <div
        aria-hidden
        className="absolute -top-32 end-[-10%] h-[36rem] w-[36rem] rounded-full blur-3xl opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, rgb(var(--accent)) 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-7xl container-px w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* ── Text column ───────────────────────────────────────────────── */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-tight"
            >
              {portfolio.name}
            </motion.h1>

            {/* Professional title */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
              className="mt-4 text-lg md:text-xl font-medium text-accent"
            >
              {portfolio.title[lang]}
            </motion.p>

            {/* Headline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.19 }}
              className="mt-6 text-base md:text-lg text-muted leading-relaxed max-w-xl"
            >
              {portfolio.heroHeadline[lang]}
            </motion.p>

            {/* Primary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.26 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <CVButton />
              <a href="#projects" className="btn btn-outline">
                {t.buttons.viewProjects}
              </a>
              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                aria-label={t.buttons.linkedin}
              >
                <Linkedin size={16} /> {t.buttons.linkedin}
              </a>
              <a
                href={`https://wa.me/${portfolio.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                aria-label={t.buttons.whatsapp}
              >
                <MessageCircle size={16} /> {t.buttons.whatsapp}
              </a>
            </motion.div>

            {/* Quick contact & metadata row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-subtle"
            >
              <span className="inline-flex items-center gap-1.5 text-muted">
                <MapPin size={13} className="text-accent" /> {portfolio.location[lang]}
              </span>
              <span className="hidden sm:inline" style={{ color: 'rgb(var(--border-strong))' }}>
                |
              </span>
              <button
                type="button"
                onClick={() => openEmailModal()}
                className="inline-flex items-center gap-1.5 hover:text-accent transition-colors cursor-pointer"
                title={portfolio.email}
              >
                <Mail size={13} /> {portfolio.email}
              </button>
              <span className="hidden sm:inline" style={{ color: 'rgb(var(--border-strong))' }}>
                |
              </span>
              <span className="font-mono">{portfolio.phone}</span>
            </motion.div>
          </div>

          {/* ── Photo column ──────────────────────────────────────────────── */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="relative"
            >
              <ProfilePhoto size="xl" />
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="hidden md:flex absolute bottom-6 inset-x-0 mx-auto w-fit flex-col items-center gap-1 text-subtle hover:text-accent transition-colors"
          aria-label={lang === 'ar' ? 'انتقل إلى نبذة' : 'Scroll to about'}
        >
          <span className="font-mono text-2xs uppercase tracking-[0.18em]">
            {lang === 'ar' ? 'اسحب للأسفل' : 'Scroll'}
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
