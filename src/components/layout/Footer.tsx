import { BrandLogo } from '@/components/shared/BrandLogo';
import type { Translations } from '@/i18n/translations';

interface FooterProps {
  t: Translations['footer'];
}

export function Footer({ t }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="no-print border-t border-slate-200 bg-slate-50 py-10 dark:border-slate-800/80 dark:bg-[#080F1E]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <BrandLogo showWordmark={false} />
          <span className="text-sm text-slate-600 dark:text-[#94A3B8]">
            © {currentYear} {t.rights}
          </span>
        </div>
        <p className="font-mono text-xs text-slate-500 dark:text-[#94A3B8]">{t.builtWith}</p>
      </div>
    </footer>
  );
}
