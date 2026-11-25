import { BrandLogo } from '@/components/shared/BrandLogo';
import type { Translations } from '@/i18n/translations';

interface FooterProps {
  t: Translations['footer'];
}

export function Footer({ t }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="no-print relative border-t border-slate-200 bg-slate-50 py-10 dark:border-slate-800/80 dark:bg-[#080F1E]">
      {/* Subtle signature gradient line (#080F1E -> #16478D -> #A50044) */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-[#080F1E] via-[#16478D] to-[#A50044]"
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <BrandLogo showWordmark={false} />
          <span className="text-sm text-slate-600 dark:text-[#94A3B8]">
            © {currentYear} {t.rights}
          </span>
        </div>
        <div className="flex flex-col items-center gap-1 sm:items-end">
          <p className="font-mono text-xs font-semibold text-[#2563EB] dark:text-[#63B3FA]">
            Build. Learn. Evolve.
          </p>
          <p className="font-mono text-[11px] text-slate-500 dark:text-[#94A3B8]">{t.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
