import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Lang } from '@/data/types';
import { ui } from '@/data/ui';
import { portfolio } from '@/data/portfolio';

interface LangCtx {
  lang: Lang;
  dir: 'ltr' | 'rtl';
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (typeof ui)['en'];
}

const Ctx = createContext<LangCtx | null>(null);

const STORAGE_KEY = 'hi-lang';

function getInitial(): Lang {
  if (typeof window === 'undefined') return 'en';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'ar') return stored;
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitial);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = dir;
    localStorage.setItem(STORAGE_KEY, lang);
    document.title = lang === 'ar'
      ? `${portfolio.name} | ${portfolio.title.ar}`
      : portfolio.seo.title;
  }, [lang, dir]);

  const setLang = (l: Lang) => setLangState(l);
  const toggle = () => setLangState((l) => (l === 'en' ? 'ar' : 'en'));

  return (
    <Ctx.Provider value={{ lang, dir, setLang, toggle, t: ui[lang] }}>
      {children}
    </Ctx.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
