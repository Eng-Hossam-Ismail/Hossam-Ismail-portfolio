import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Hexagon } from 'lucide-react';
import { portfolio } from '@/data/portfolio';
import { useLang } from '@/context/LanguageContext';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { CVButton } from '@/components/ui/CVButton';

export function Navbar() {
  const { t, lang, dir } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  const menuTriggerRef = useRef<HTMLButtonElement | null>(null);
  const drawerRef = useRef<HTMLElement | null>(null);

  const navItems = useMemo(() => portfolio.nav.filter((n) => n.enabled), []);
  const drawerX = dir === 'rtl' ? '-100%' : '100%';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      // active section detection
      const sections = navItems
        .map((n) => document.getElementById(n.id))
        .filter(Boolean) as HTMLElement[];
      const y = window.scrollY + 120;
      let current = 'home';
      for (const s of sections) {
        if (s.offsetTop <= y) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [navItems]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Handle ESC and Tab trap for mobile drawer
  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(() => {
      const focusables = drawerRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusables && focusables.length > 0) {
        focusables[0].focus();
      }
    }, 60);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        menuTriggerRef.current?.focus();
      }
      if (e.key === 'Tab' && drawerRef.current) {
        const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'backdrop-blur-xl' : ''
        }`}
        style={{
          backgroundColor: scrolled ? 'rgb(var(--bg) / 0.82)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgb(var(--border))' : '1px solid transparent',
        }}
      >
        <nav className="mx-auto max-w-7xl container-px h-16 md:h-18 flex items-center justify-between gap-4">
          {/* Logo / name */}
          <a
            href="#home"
            className="flex items-center gap-2.5 shrink-0 group"
            aria-label={portfolio.name}
          >
            <span className="relative grid place-items-center h-9 w-9">
              <Hexagon size={32} className="text-accent transition-transform duration-500 group-hover:rotate-90" strokeWidth={1.5} />
              <span className="absolute font-mono text-xs font-bold text-accent">HI</span>
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-display text-sm font-semibold">{portfolio.name}</span>
              <span className="font-mono text-2xs text-subtle uppercase tracking-[0.14em]">
                {portfolio.navbarSubtitle[lang]}
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  active === item.id ? 'text-accent' : 'text-muted hover:text-fg'
                }`}
              >
                {t.nav[item.id] ?? item.label[lang]}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-2 -bottom-px h-px"
                    style={{ backgroundColor: 'rgb(var(--accent))' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
            <ThemeToggle />
            <div className="hidden md:block">
              <CVButton variant="outline" className="!px-3 !py-2 text-xs" />
            </div>
            {/* Mobile menu trigger */}
            <button
              ref={menuTriggerRef}
              onClick={() => setOpen(true)}
              className="lg:hidden h-9 w-9 rounded-lg border flex items-center justify-center"
              style={{ borderColor: 'rgb(var(--border))' }}
              aria-label={t.buttons.openMenu}
            >
              <Menu size={18} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-label={t.buttons.openMenu}
              initial={{ x: drawerX }}
              animate={{ x: 0 }}
              exit={{ x: drawerX }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
              className="fixed top-0 bottom-0 end-0 z-50 w-[82%] max-w-sm lg:hidden surface shadow-elevate-lg flex flex-col"
              style={{ backgroundColor: 'rgb(var(--bg-elevated))' }}
            >
              <div className="flex items-center justify-between h-16 px-4 border-b" style={{ borderColor: 'rgb(var(--border))' }}>
                <span className="font-display font-semibold">{portfolio.name}</span>
                <button
                  onClick={() => setOpen(false)}
                  className="h-9 w-9 rounded-lg border flex items-center justify-center"
                  style={{ borderColor: 'rgb(var(--border))' }}
                  aria-label={t.buttons.closeMenu}
                >
                  <X size={18} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-4 py-4">
                <nav className="flex flex-col gap-1">
                  {navItems.map((item, i) => (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i + 0.1, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className={`flex items-center justify-between rounded-lg px-3 py-3 text-[15px] font-medium transition-colors ${
                        active === item.id ? 'text-accent bg-subtle' : 'text-muted hover:text-fg'
                      }`}
                      style={active === item.id ? { backgroundColor: 'rgb(var(--accent-soft))' } : {}}
                    >
                      <span>{t.nav[item.id] ?? item.label[lang]}</span>
                      <span className="font-mono text-2xs text-subtle">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </motion.a>
                  ))}
                </nav>
              </div>
              <div className="p-4 border-t flex flex-col gap-3" style={{ borderColor: 'rgb(var(--border))' }}>
                <div className="flex items-center justify-between">
                  <LanguageSwitcher />
                  <ThemeToggle />
                </div>
                <CVButton className="w-full" />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
