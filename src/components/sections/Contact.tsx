import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MessageCircle,
  Phone,
  Linkedin,
  MapPin,
  Send,
  Check,
  Copy,
  Globe,
  Laptop,
  ArrowRight,
  RotateCcw,
} from 'lucide-react';
import { portfolio } from '@/data/portfolio';
import { useLang } from '@/context/LanguageContext';
import { useEmailModal } from '@/context/EmailModalContext';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Contact() {
  const { t, lang } = useLang();
  const { openEmailModal } = useEmailModal();

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [submittedChannel, setSubmittedChannel] = useState<string | null>(null);

  const waNumber = portfolio.whatsapp.replace(/[^0-9]/g, '');

  const buildSubject = () =>
    `Portfolio contact from ${form.name.trim() || (lang === 'ar' ? 'زائر للموقع' : 'a visitor')}`;

  const buildBody = () => {
    const header = lang === 'ar'
      ? `رسالة جديدة من بورتفوليو الهندسة الإنشائية:`
      : `New message from Civil & Structural Portfolio:`;
    const sender = lang === 'ar'
      ? `الاسم: ${form.name.trim() || 'غير محدد'}\nالبريد الإلكتروني: ${form.email.trim() || 'غير محدد'}`
      : `From: ${form.name.trim() || 'Not specified'}\nEmail: ${form.email.trim() || 'Not specified'}`;

    return `${form.message.trim()}\n\n--------------------\n${header}\n${sender}`;
  };

  const getGmailUrl = () => {
    const s = encodeURIComponent(buildSubject());
    const b = encodeURIComponent(buildBody());
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(portfolio.email)}&su=${s}&body=${b}`;
  };

  const getMailtoUrl = () => {
    const s = encodeURIComponent(buildSubject());
    const b = encodeURIComponent(buildBody());
    return `mailto:${portfolio.email}?subject=${s}&body=${b}`;
  };

  const getWhatsAppUrl = () => {
    const text = lang === 'ar'
      ? `السلام عليكم مهندس حسام،\nأنا: ${form.name || 'زائر للموقع'}\nالإيميل: ${form.email || '—'}\n\nالرسالة:\n${form.message || 'أرغب في التواصل معك بخصوص فرصة هندسية.'}`
      : `Hello Eng. Hossam,\nFrom: ${form.name || 'Visitor'}\nEmail: ${form.email || '—'}\n\nMessage:\n${form.message || 'I would like to connect with you regarding an engineering opportunity.'}`;
    return `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
  };

  // Direct handlers
  const handleSendGmail = () => {
    if (!validate()) return;
    window.open(getGmailUrl(), '_blank', 'noopener,noreferrer');
    setSubmittedChannel('gmail');
  };

  const handleSendApp = () => {
    if (!validate()) return;
    window.location.href = getMailtoUrl();
    setSubmittedChannel('app');
  };

  const handleSendWhatsApp = () => {
    if (!validate()) return;
    window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer');
    setSubmittedChannel('whatsapp');
  };

  const handleCopyMessage = async () => {
    const text = buildBody();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const input = document.createElement('textarea');
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const validate = () => {
    if (!form.message.trim()) {
      alert(lang === 'ar' ? 'يرجى كتابة نص الرسالة' : 'Please write your message first');
      return false;
    }
    return true;
  };

  // Submitting form: opens the EmailActionModal pre-filled
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    openEmailModal({
      subject: buildSubject(),
      body: buildBody(),
      senderName: form.name,
      senderEmail: form.email,
    });
    setSubmittedChannel('modal');
  };

  const handleReset = () => {
    setForm({ name: '', email: '', message: '' });
    setSubmittedChannel(null);
  };

  const channels = [
    {
      id: 'email',
      icon: Mail,
      label: t.buttons.email,
      value: portfolio.email,
      action: () => openEmailModal(),
    },
    {
      id: 'whatsapp',
      icon: MessageCircle,
      label: t.buttons.whatsapp,
      value: portfolio.phone,
      href: `https://wa.me/${waNumber}`,
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      label: t.buttons.linkedin,
      value: 'LinkedIn',
      href: portfolio.linkedin,
    },
    {
      id: 'phone',
      icon: Phone,
      label: t.buttons.call,
      value: portfolio.phone,
      href: `tel:${portfolio.phone}`,
    },
  ];

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-7xl container-px">
        <SectionHeader eyebrow="07 / Contact" title={t.contact.title} description={t.contact.subtitle} />

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Direct channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            <div className="surface rounded-2xl p-6 md:p-8" style={{ backgroundColor: 'rgb(var(--bg-elevated))' }}>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-display text-xl font-semibold">{portfolio.name}</h3>
              </div>
              <p className="text-accent font-medium text-sm">{portfolio.title[lang]}</p>
              <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted">
                <MapPin size={13} /> {t.contact.basedIn} {portfolio.location[lang]}
              </p>

              <div className="mt-6">
                <div className="font-mono text-2xs text-subtle uppercase tracking-wider mb-3">
                  {t.contact.orReachDirectly}
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {channels.map((c) =>
                    c.action ? (
                      <button
                        key={c.label}
                        type="button"
                        onClick={c.action}
                        className="surface-subtle rounded-xl p-4 flex items-center gap-3 group hover:shadow-elevate transition-all text-start cursor-pointer w-full border border-default hover:border-accent/40"
                      >
                        <div
                          className="grid place-items-center h-10 w-10 rounded-lg shrink-0 group-hover:scale-105 transition-transform"
                          style={{ backgroundColor: 'rgb(var(--accent-soft))' }}
                        >
                          <c.icon size={16} className="text-accent" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-2xs font-mono uppercase tracking-wider text-subtle">{c.label}</div>
                          <div className="text-sm font-medium truncate text-fg group-hover:text-accent transition-colors">
                            {c.value}
                          </div>
                        </div>
                      </button>
                    ) : (
                      <a
                        key={c.label}
                        href={c.href}
                        target={c.href?.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="surface-subtle rounded-xl p-4 flex items-center gap-3 group hover:shadow-elevate transition-all border border-default hover:border-accent/40"
                      >
                        <div
                          className="grid place-items-center h-10 w-10 rounded-lg shrink-0 group-hover:scale-105 transition-transform"
                          style={{ backgroundColor: 'rgb(var(--accent-soft))' }}
                        >
                          <c.icon size={16} className="text-accent" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-2xs font-mono uppercase tracking-wider text-subtle">{c.label}</div>
                          <div className="text-sm font-medium truncate text-fg group-hover:text-accent transition-colors">
                            {c.value}
                          </div>
                        </div>
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="surface rounded-2xl p-6 md:p-8 h-full flex flex-col justify-between" style={{ backgroundColor: 'rgb(var(--bg-elevated))' }}>
              <div>
                <div className="flex items-center justify-between gap-3 mb-1">
                  <h3 className="font-display text-lg font-semibold">{t.contact.formTitle}</h3>
                  {submittedChannel && (
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs text-accent hover:underline inline-flex items-center gap-1 font-medium"
                    >
                      <RotateCcw size={12} />
                      {t.contact.resetForm || (lang === 'ar' ? 'رسالة جديدة' : 'New Message')}
                    </button>
                  )}
                </div>

                {submittedChannel && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs flex items-start gap-2.5"
                  >
                    <Check size={16} className="shrink-0 text-emerald-500 mt-0.5" />
                    <div className="leading-relaxed">
                      <span className="font-semibold block">
                        {t.contact.successTitle || (lang === 'ar' ? 'اختر طريقة إرسال رسالتك' : 'Choose how you want to send your message')}
                      </span>
                      <span>
                        {t.contact.successDesc || (lang === 'ar' ? 'رسالتك مجهزة وجاهزة للإرسال. حدد القناة المفضلة أدناه للمتابعة:' : 'Your message is pre-filled and ready. Select your preferred channel below to send it:')}
                      </span>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
                  <Field label={t.contact.formName} htmlFor="contact-name">
                    <input
                      id="contact-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder={lang === 'ar' ? 'مثال: م. أحمد عبد الله' : 'e.g. Eng. Ahmed'}
                      className="w-full rounded-lg border bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors focus-accent"
                      style={{ borderColor: 'rgb(var(--border))' }}
                      autoComplete="name"
                    />
                  </Field>

                  <Field label={t.contact.formEmail} htmlFor="contact-email">
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder={lang === 'ar' ? 'name@example.com' : 'name@example.com'}
                      className="w-full rounded-lg border bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors focus-accent"
                      style={{ borderColor: 'rgb(var(--border))' }}
                      autoComplete="email"
                    />
                  </Field>

                  <Field label={t.contact.formMessage} htmlFor="contact-message">
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder={lang === 'ar' ? 'اكتب تفاصيل استفسارك أو المشروع الإنشائي هنا...' : 'Write your inquiry or project details here...'}
                      className="w-full rounded-lg border bg-transparent px-3.5 py-2.5 text-sm outline-none transition-colors focus-accent resize-none"
                      style={{ borderColor: 'rgb(var(--border))' }}
                    />
                  </Field>

                  {/* Main Action Buttons */}
                  <div className="pt-1 flex flex-col gap-2.5">
                    {/* Primary Option: Gmail Web Compose (Fastest & 100% reliable in browser) */}
                    <button
                      type="button"
                      onClick={handleSendGmail}
                      className="btn btn-primary w-full justify-center !py-3 font-semibold shadow-sm group"
                    >
                      <Globe size={16} className="text-red-300 group-hover:scale-110 transition-transform" />
                      <span>{t.contact.sendViaGmail || (lang === 'ar' ? 'إرسال عبر بريد Gmail (المتصفح)' : 'Send via Gmail (Web)')}</span>
                    </button>

                    {/* Secondary Row: WhatsApp + Default Mail App */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={handleSendWhatsApp}
                        className="btn btn-outline justify-center !py-2.5 text-xs text-emerald-600 dark:text-emerald-400 hover:border-emerald-500 hover:bg-emerald-500/10 transition-colors"
                      >
                        <MessageCircle size={15} />
                        <span>{t.contact.sendViaWhatsApp || (lang === 'ar' ? 'إرسال عبر واتساب' : 'Send via WhatsApp')}</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleSendApp}
                        className="btn btn-outline justify-center !py-2.5 text-xs hover:border-accent transition-colors"
                      >
                        <Laptop size={15} />
                        <span>{t.contact.sendViaApp || (lang === 'ar' ? 'تطبيق البريد الافتراضي' : 'Default Mail App')}</span>
                      </button>
                    </div>

                    {/* Copy message button */}
                    <div className="flex items-center justify-between pt-1">
                      <button
                        type="button"
                        onClick={handleCopyMessage}
                        className="inline-flex items-center gap-1.5 text-2xs font-mono text-subtle hover:text-accent transition-colors py-1"
                      >
                        {copied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                        <span>{copied ? (t.contact.messageCopied || (lang === 'ar' ? 'تم نسخ النص!' : 'Copied!')) : (t.contact.copyMessage || (lang === 'ar' ? 'نسخ نص الرسالة' : 'Copy message text'))}</span>
                      </button>

                      <button
                        type="submit"
                        className="inline-flex items-center gap-1 text-2xs font-mono text-accent hover:underline py-1"
                      >
                        <span>{t.contact.dispatchTitle || (lang === 'ar' ? 'خيارات إرسال إضافية' : 'More sending options')}</span>
                        <ArrowRight size={11} className={lang === 'ar' ? 'rotate-180' : ''} />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-2xs font-mono uppercase tracking-wider text-subtle mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}
