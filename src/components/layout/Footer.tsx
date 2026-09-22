import { ArrowUp, Linkedin, Mail, MessageCircle, Phone, Hexagon } from 'lucide-react';
import { portfolio } from '@/data/portfolio';
import { useLang } from '@/context/LanguageContext';
import { useEmailModal } from '@/context/EmailModalContext';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export function Footer() {
  const { t, lang } = useLang();
  const { openEmailModal } = useEmailModal();
  const year = new Date().getFullYear();
  const navItems = portfolio.nav.filter((n) => n.enabled && n.id !== 'home');

  const waNumber = portfolio.whatsapp.replace(/[^0-9]/g, '');

  return (
    <footer className="relative border-t" style={{ borderColor: 'rgb(var(--border))' }}>
      <div className="mx-auto max-w-7xl container-px py-12 md:py-14">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <a href="#home" className="flex items-center gap-2.5 mb-3">
              <span className="relative grid place-items-center h-9 w-9">
                <Hexagon size={32} className="text-accent" strokeWidth={1.5} />
                <span className="absolute font-mono text-xs font-bold text-accent">HI</span>
              </span>
              <span className="font-display text-base font-semibold">{portfolio.name}</span>
            </a>
            <p className="text-sm text-muted max-w-sm leading-relaxed">{portfolio.title[lang]}</p>
            <p className="mt-2 text-sm text-subtle">{portfolio.location[lang]}</p>

            <div className="mt-5 flex items-center gap-2">
              <a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-lg border flex items-center justify-center text-muted hover:text-accent transition-colors" style={{ borderColor: 'rgb(var(--border))' }} aria-label={t.buttons.linkedin}>
                <Linkedin size={16} />
              </a>
              <button
                type="button"
                onClick={() => openEmailModal()}
                className="h-9 w-9 rounded-lg border flex items-center justify-center text-muted hover:text-accent transition-colors cursor-pointer"
                style={{ borderColor: 'rgb(var(--border))' }}
                aria-label={t.buttons.email}
                title={portfolio.email}
              >
                <Mail size={16} />
              </button>
              <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-lg border flex items-center justify-center text-muted hover:text-accent transition-colors" style={{ borderColor: 'rgb(var(--border))' }} aria-label={t.buttons.whatsapp}>
                <MessageCircle size={16} />
              </a>
              <a href={`tel:${portfolio.phone}`} className="h-9 w-9 rounded-lg border flex items-center justify-center text-muted hover:text-accent transition-colors" style={{ borderColor: 'rgb(var(--border))' }} aria-label={t.buttons.call}>
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4">
            <h3 className="font-mono text-2xs uppercase tracking-wider text-subtle mb-4">
              {t.footer.quickLinks}
            </h3>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navItems.map((n) => (
                <a key={n.id} href={`#${n.id}`} className="text-sm text-muted hover:text-accent transition-colors">
                  {t.nav[n.id] ?? n.label[lang]}
                </a>
              ))}
            </nav>
          </div>

          {/* Controls */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h3 className="font-mono text-2xs uppercase tracking-wider text-subtle mb-1">
              {t.footer.contact}
            </h3>
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
            <a href="#home" className="btn btn-outline !text-xs !py-2 w-fit">
              <ArrowUp size={13} /> {t.buttons.backToTop}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: 'rgb(var(--border))' }}>
          <p className="text-2xs text-subtle font-mono">
            © {year} {portfolio.name}. {t.footer.rights}
          </p>
          <p className="text-2xs text-subtle font-mono">{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
