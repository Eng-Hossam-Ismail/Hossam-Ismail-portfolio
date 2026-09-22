import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Copy,
  Check,
  X,
  ExternalLink,
  MessageCircle,
  Laptop,
  Globe,
} from 'lucide-react';
import { portfolio } from '@/data/portfolio';
import { useLang } from '@/context/LanguageContext';

export interface EmailModalOptions {
  subject?: string;
  body?: string;
  senderName?: string;
  senderEmail?: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  options?: EmailModalOptions;
}

export function EmailActionModal({ isOpen, onClose, options }: Props) {
  const { t, lang } = useLang();
  const [copied, setCopied] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const subject = options?.subject || (lang === 'ar' ? 'استفسار وتواصل هندسي' : 'Engineering Inquiry & Contact');
  const body = options?.body || (lang === 'ar' ? 'السلام عليكم مهندس حسام،\n\n' : 'Hello Eng. Hossam,\n\n');

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(portfolio.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(portfolio.email)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const mailtoUrl = `mailto:${portfolio.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const waNumber = portfolio.whatsapp.replace(/[^0-9]/g, '');
  const waText = options?.body
    ? `${options.body}`
    : (lang === 'ar' ? 'السلام عليكم مهندس حسام، أرغب في التواصل معك بخصوص فرصة هندسية / مشروع.' : 'Hello Eng. Hossam, I would like to connect with you regarding an engineering opportunity.');
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`;

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKey);
    setTimeout(() => closeBtnRef.current?.focus(), 50);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, onClose]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(portfolio.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      const input = document.createElement('input');
      input.value = portfolio.email;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleOpenLink = (url: string, isMailto = false) => {
    if (isMailto) {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const labels = t.emailModal || {
    title: lang === 'ar' ? 'تواصل عبر البريد الإلكتروني' : 'Contact via Email',
    subtitle: lang === 'ar' ? 'اختر الوسيلة الأنسب لك لإرسال رسالتك مباشرة إلى المهندس حسام:' : 'Choose your preferred way to send your email directly to Eng. Hossam:',
    openGmail: lang === 'ar' ? 'فتح عبر بريد Gmail (المتصفح)' : 'Open in Gmail (Web)',
    gmailDesc: lang === 'ar' ? 'يفتح تبويب جديد في جيميل مع المستلم والموضوع جاهزين فوراً' : 'Opens a new compose tab in Gmail with recipient and text pre-filled',
    openDefault: lang === 'ar' ? 'تطبيق البريد الافتراضي' : 'Default Mail Client',
    defaultDesc: lang === 'ar' ? 'Outlook أو Apple Mail أو تطبيق البريد المثبت على جهازك' : 'Outlook, Apple Mail, Windows Mail, or your installed client',
    openOutlook: lang === 'ar' ? 'فتح عبر Outlook Web' : 'Open in Outlook Web',
    outlookDesc: lang === 'ar' ? 'لحسابات Outlook.com ومايكروسوفت والبريد المؤسسي والجامعي' : 'For Outlook.com, Microsoft 365, or work/school accounts',
    copyEmail: lang === 'ar' ? 'نسخ عنوان البريد الإلكتروني' : 'Copy Email Address',
    copied: lang === 'ar' ? 'تم نسخ البريد بنجاح!' : 'Email copied to clipboard!',
    orWhatsapp: lang === 'ar' ? 'تفضل المحادثة الفورية المباشرة؟ تواصل عبر واتساب' : 'Prefer instant messaging? Chat on WhatsApp',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={labels.title}
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="relative surface rounded-2xl w-full max-w-lg shadow-elevate-lg border border-default overflow-hidden"
            style={{ backgroundColor: 'rgb(var(--bg-elevated))' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 pb-4 border-b border-default flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div
                  className="grid place-items-center h-11 w-11 rounded-xl shrink-0"
                  style={{ backgroundColor: 'rgb(var(--accent-soft))' }}
                >
                  <Mail size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-fg">
                    {labels.title}
                  </h3>
                  <p className="text-xs text-muted mt-0.5 leading-relaxed">
                    {labels.subtitle}
                  </p>
                </div>
              </div>
              <button
                ref={closeBtnRef}
                onClick={onClose}
                className="h-8 w-8 rounded-lg border border-default flex items-center justify-center text-muted hover:text-fg hover:border-strong transition-colors shrink-0"
                aria-label={t.buttons.closeMenu}
              >
                <X size={16} />
              </button>
            </div>

            {/* Email Address Pill with Copy button */}
            <div className="px-6 pt-4 pb-2">
              <div
                className="rounded-xl p-3 border border-default surface-subtle flex items-center justify-between gap-2"
                style={{ borderColor: 'rgb(var(--border))' }}
              >
                <div className="min-w-0 flex items-center gap-2">
                  <span className="font-mono text-xs md:text-sm font-semibold text-fg truncate">
                    {portfolio.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className={`chip !text-xs !py-1.5 !px-3 font-medium inline-flex items-center gap-1.5 transition-all shrink-0 ${
                    copied
                      ? '!bg-emerald-500 !text-white !border-emerald-600'
                      : 'hover:border-accent hover:text-accent'
                  }`}
                  title={labels.copyEmail}
                >
                  {copied ? (
                    <>
                      <Check size={13} />
                      <span>{labels.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>{labels.copyEmail}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Methods list */}
            <div className="p-6 pt-2 space-y-2.5">
              {/* Method 1: Gmail (Web) */}
              <button
                type="button"
                onClick={() => handleOpenLink(gmailUrl)}
                className="w-full text-start p-3.5 rounded-xl border border-default hover:border-accent hover:shadow-elevate transition-all group flex items-center gap-3.5 surface-subtle"
                style={{ backgroundColor: 'rgb(var(--bg-elevated))' }}
              >
                <div className="grid place-items-center h-10 w-10 rounded-lg shrink-0 bg-red-500/10 text-red-500 border border-red-500/20 group-hover:scale-105 transition-transform">
                  <Globe size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-fg flex items-center gap-1.5 group-hover:text-accent transition-colors">
                    <span>{labels.openGmail}</span>
                    <span className="chip !text-[10px] !py-0 !px-1.5 font-mono text-red-500 bg-red-500/10 border-red-500/20">
                      {lang === 'ar' ? 'موصى به' : 'Fast'}
                    </span>
                  </div>
                  <div className="text-2xs text-muted truncate mt-0.5">
                    {labels.gmailDesc}
                  </div>
                </div>
                <ExternalLink size={15} className="text-subtle group-hover:text-accent transition-colors shrink-0" />
              </button>

              {/* Method 2: Default Mail Client (mailto) */}
              <button
                type="button"
                onClick={() => handleOpenLink(mailtoUrl, true)}
                className="w-full text-start p-3.5 rounded-xl border border-default hover:border-accent hover:shadow-elevate transition-all group flex items-center gap-3.5 surface-subtle"
                style={{ backgroundColor: 'rgb(var(--bg-elevated))' }}
              >
                <div
                  className="grid place-items-center h-10 w-10 rounded-lg shrink-0 text-accent group-hover:scale-105 transition-transform"
                  style={{ backgroundColor: 'rgb(var(--accent-soft))' }}
                >
                  <Laptop size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-fg group-hover:text-accent transition-colors">
                    {labels.openDefault}
                  </div>
                  <div className="text-2xs text-muted truncate mt-0.5">
                    {labels.defaultDesc}
                  </div>
                </div>
                <ExternalLink size={15} className="text-subtle group-hover:text-accent transition-colors shrink-0" />
              </button>

              {/* Method 3: Outlook Web */}
              <button
                type="button"
                onClick={() => handleOpenLink(outlookUrl)}
                className="w-full text-start p-3.5 rounded-xl border border-default hover:border-accent hover:shadow-elevate transition-all group flex items-center gap-3.5 surface-subtle"
                style={{ backgroundColor: 'rgb(var(--bg-elevated))' }}
              >
                <div className="grid place-items-center h-10 w-10 rounded-lg shrink-0 bg-blue-500/10 text-blue-500 border border-blue-500/20 group-hover:scale-105 transition-transform">
                  <Mail size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-fg group-hover:text-accent transition-colors">
                    {labels.openOutlook}
                  </div>
                  <div className="text-2xs text-muted truncate mt-0.5">
                    {labels.outlookDesc}
                  </div>
                </div>
                <ExternalLink size={15} className="text-subtle group-hover:text-accent transition-colors shrink-0" />
              </button>
            </div>

            {/* Footer / WhatsApp alternative */}
            <div
              className="p-4 bg-subtle border-t border-default flex items-center justify-between gap-3 text-xs"
              style={{ borderColor: 'rgb(var(--border))' }}
            >
              <div className="flex items-center gap-2 text-muted min-w-0">
                <MessageCircle size={15} className="text-emerald-500 shrink-0" />
                <span className="truncate">{labels.orWhatsapp}</span>
              </div>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost !text-xs !py-1.5 !px-3 shrink-0 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10"
              >
                {t.buttons.whatsapp}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
