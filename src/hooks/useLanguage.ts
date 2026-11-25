import { useEffect, useState } from 'react';
import type { Language } from '@/types/portfolio';

const STORAGE_KEY = 'ci-portfolio-lang';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'es';
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === 'en' || saved === 'es' ? saved : 'es';
  });

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  return { language, setLanguage, toggleLanguage };
}
