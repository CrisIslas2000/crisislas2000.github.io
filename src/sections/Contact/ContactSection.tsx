import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
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
            className="card-interactive group flex items-start justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-5 hover:border-[#2563EB] dark:border-slate-800 dark:bg-[#14243D]/70 dark:hover:border-[#63B3FA]"
          >
            <div className="flex items-start gap-3">
              <Github
                className="mt-0.5 h-5 w-5 shrink-0 text-[#2563EB] transition-transform duration-300 group-hover:scale-110 dark:text-[#63B3FA]"
                aria-hidden="true"
              />
              <div>
                <p className="font-mono text-xs text-slate-500 dark:text-[#94A3B8]">{t.githubLabel}</p>
                <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-[#F1F5F9]">
                  @CrisIslas2000
                </p>
              </div>
            </div>
            <ArrowUpRight
              className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#63B3FA]"
              aria-hidden="true"
            />
          </a>

          {/* LinkedIn */}
          {profile.linkedinUrl ? (
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-interactive group flex items-start justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-5 hover:border-[#2563EB] dark:border-slate-800 dark:bg-[#14243D]/70 dark:hover:border-[#63B3FA]"
            >
              <div className="flex items-start gap-3">
                <Linkedin
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#2563EB] transition-transform duration-300 group-hover:scale-110 dark:text-[#63B3FA]"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-mono text-xs text-slate-500 dark:text-[#94A3B8]">
                    {t.linkedinLabel}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-[#F1F5F9]">
                    {profile.name}
                  </p>
                </div>
              </div>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#63B3FA]"
                aria-hidden="true"
              />
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

          {/* Email */}
          {profile.email ? (
            <a
              href={`mailto:${profile.email}`}
              className="card-interactive group flex items-start justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-5 hover:border-[#2563EB] dark:border-slate-800 dark:bg-[#14243D]/70 dark:hover:border-[#63B3FA]"
            >
              <div className="flex min-w-0 items-start gap-3">
                <Mail
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#2563EB] transition-transform duration-300 group-hover:scale-110 dark:text-[#63B3FA]"
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <p className="font-mono text-xs text-slate-500 dark:text-[#94A3B8]">{t.emailLabel}</p>
                  <p className="mt-1 truncate text-sm font-semibold text-slate-900 dark:text-[#F1F5F9]">
                    {profile.email}
                  </p>
                </div>
              </div>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#63B3FA]"
                aria-hidden="true"
              />
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
          <div className="card-interactive group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 hover:border-[#2563EB]/60 dark:border-slate-800 dark:bg-[#14243D]/70 dark:hover:border-[#63B3FA]/50">
            <MapPin
              className="mt-0.5 h-5 w-5 shrink-0 text-[#2563EB] transition-transform duration-300 group-hover:scale-110 dark:text-[#63B3FA]"
              aria-hidden="true"
            />
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
            className="group inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-lg hover:shadow-[#2563EB]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#63B3FA]"
          >
            <Download
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
              aria-hidden="true"
            />
            <span>{t.downloadCv}</span>
          </button>

          <a
            href={`${profile.githubUrl}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2563EB] hover:text-[#2563EB] hover:shadow-md hover:shadow-[#2563EB]/15 dark:border-slate-700 dark:bg-[#14243D] dark:text-[#F1F5F9] dark:hover:border-[#63B3FA]"
          >
            <Github
              className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            />
            <span>{language === 'es' ? 'Repositorios en GitHub' : 'GitHub Repositories'}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
