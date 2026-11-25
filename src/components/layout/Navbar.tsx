import { useState } from 'react';
import { Download, Globe, Menu, Moon, Sun, X } from 'lucide-react';
import { BrandLogo } from '@/components/shared/BrandLogo';
import type { Translations } from '@/i18n/translations';
import type { Language, Theme } from '@/types/portfolio';

interface NavbarProps {
  t: Translations['nav'];
  language: Language;
  theme: Theme;
  onToggleLanguage: () => void;
  onToggleTheme: () => void;
  onDownloadCv: () => void;
}

export function Navbar({
  t,
  language,
  theme,
  onToggleLanguage,
  onToggleTheme,
  onDownloadCv,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#inicio', label: t.home },
    { href: '#sobre-mi', label: t.about },
    { href: '#experiencia', label: t.experience },
    { href: '#tecnologias', label: t.tech },
    { href: '#proyectos', label: t.projects },
    { href: '#formacion', label: t.education },
    { href: '#contacto', label: t.contact },
  ];

  return (
    <header className="no-print sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md dark:border-slate-800/80 dark:bg-[#080F1E]/90">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        <a
          href="#inicio"
          className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
        >
          <BrandLogo />
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-[#2563EB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] dark:text-[#94A3B8] dark:hover:text-[#F1F5F9]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleLanguage}
            aria-label={t.toggleLang}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 font-mono text-xs font-medium text-slate-700 transition-colors hover:border-[#2563EB] hover:text-[#2563EB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] dark:border-slate-700 dark:text-[#94A3B8] dark:hover:border-[#63B3FA] dark:hover:text-[#F1F5F9]"
          >
            <Globe className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{language.toUpperCase()}</span>
          </button>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={t.toggleTheme}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-colors hover:border-[#2563EB] hover:text-[#2563EB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] dark:border-slate-700 dark:text-[#94A3B8] dark:hover:border-[#63B3FA] dark:hover:text-[#F1F5F9]"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={onDownloadCv}
            className="hidden items-center gap-1.5 rounded-lg bg-[#2563EB] px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#1D4ED8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#63B3FA] sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{t.downloadCv}</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t.closeMenu : t.openMenu}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden dark:border-slate-700 dark:text-[#F1F5F9]"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden dark:border-slate-800 dark:bg-[#080F1E]">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-2 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-[#2563EB] dark:text-[#F1F5F9] dark:hover:bg-[#14243D]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onDownloadCv();
            }}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1D4ED8]"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            <span>{t.downloadCv}</span>
          </button>
        </div>
      )}
    </header>
  );
}
