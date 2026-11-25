import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import type { Translations } from '@/i18n/translations';
import type { Language, ProfileData } from '@/types/portfolio';

interface ContactSectionProps {
  profile: ProfileData;
  language: Language;
  t: Translations['contact'];
  onDownloadCv: () => void;
}

export function ContactSection({ profile, language, t, onDownloadCv }: ContactSectionProps) {
  return (
    <section id="contacto" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* GitHub */}
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-[#2563EB] dark:border-slate-800 dark:bg-[#14243D]/70 dark:hover:border-[#63B3FA]"
          >
            <Github className="mt-0.5 h-5 w-5 shrink-0 text-[#2563EB] dark:text-[#63B3FA]" aria-hidden="true" />
            <div>
              <p className="font-mono text-xs text-slate-500 dark:text-[#94A3B8]">{t.githubLabel}</p>
              <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-[#F1F5F9]">
                @CrisIslas2000
              </p>
            </div>
          </a>

          {/* LinkedIn (configurable) */}
          {profile.linkedinUrl ? (
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-[#2563EB] dark:border-slate-800 dark:bg-[#14243D]/70 dark:hover:border-[#63B3FA]"
            >
              <Linkedin className="mt-0.5 h-5 w-5 shrink-0 text-[#2563EB] dark:text-[#63B3FA]" aria-hidden="true" />
              <div>
                <p className="font-mono text-xs text-slate-500 dark:text-[#94A3B8]">
                  {t.linkedinLabel}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-[#F1F5F9]">
                  {profile.name}
                </p>
              </div>
            </a>
          ) : (
            <div className="flex items-start gap-3 rounded-2xl border border-dashed border-slate-300 bg-slate-50/70 p-5 dark:border-slate-700 dark:bg-[#14243D]/30">
              <Linkedin className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
              <div>
                <p className="font-mono text-xs text-slate-500 dark:text-[#94A3B8]">
                  {t.linkedinLabel}
                </p>
                <p className="mt-1 text-sm text-slate-500 dark:text-[#94A3B8]">{t.pendingField}</p>
              </div>
            </div>
          )}

          {/* Email (configurable) */}
          {profile.email ? (
            <a
              href={`mailto:${profile.email}`}
              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-[#2563EB] dark:border-slate-800 dark:bg-[#14243D]/70 dark:hover:border-[#63B3FA]"
            >
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#2563EB] dark:text-[#63B3FA]" aria-hidden="true" />
              <div className="min-w-0">
                <p className="font-mono text-xs text-slate-500 dark:text-[#94A3B8]">{t.emailLabel}</p>
                <p className="mt-1 truncate text-sm font-semibold text-slate-900 dark:text-[#F1F5F9]">
                  {profile.email}
                </p>
              </div>
            </a>
          ) : (
            <div className="flex items-start gap-3 rounded-2xl border border-dashed border-slate-300 bg-slate-50/70 p-5 dark:border-slate-700 dark:bg-[#14243D]/30">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
              <div>
                <p className="font-mono text-xs text-slate-500 dark:text-[#94A3B8]">{t.emailLabel}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-[#94A3B8]">{t.pendingField}</p>
              </div>
            </div>
          )}

          {/* Location */}
          <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-[#14243D]/70">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#2563EB] dark:text-[#63B3FA]" aria-hidden="true" />
            <div>
              <p className="font-mono text-xs text-slate-500 dark:text-[#94A3B8]">
                {t.locationLabel}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-[#F1F5F9]">
                {profile.location[language]}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={onDownloadCv}
            className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#63B3FA]"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            <span>{t.downloadCv}</span>
          </button>

          <a
            href={`${profile.githubUrl}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-[#2563EB] hover:text-[#2563EB] dark:border-slate-700 dark:bg-[#14243D] dark:text-[#F1F5F9] dark:hover:border-[#63B3FA]"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            <span>{language === 'es' ? 'Repositorios en GitHub' : 'GitHub Repositories'}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
