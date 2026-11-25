import { Download, Github, Linkedin, Mail } from 'lucide-react';
import type { Translations } from '@/i18n/translations';
import type { Language, ProfileData } from '@/types/portfolio';

interface HeroSectionProps {
  profile: ProfileData;
  language: Language;
  t: Translations['hero'];
  onDownloadCv: () => void;
}

export function HeroSection({ profile, language, t, onDownloadCv }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-slate-200/80 py-14 sm:py-20 dark:border-slate-800/80"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* Left: Propuesta A Editorial Intro */}
        <div className="order-2 lg:order-1 lg:col-span-7">
          <div className="inline-flex items-center rounded-md border border-[#2563EB]/30 bg-[#14243D]/10 px-3 py-1 font-mono text-xs font-medium text-[#1D4ED8] dark:bg-[#14243D] dark:text-[#63B3FA]">
            {profile.role[language]}
          </div>

          <h1 className="mt-5 font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl dark:text-[#F1F5F9]">
            {profile.name}
            <span className="text-[#2563EB]">.</span>
          </h1>

          <p className="mt-3 font-display text-2xl font-medium text-slate-700 sm:text-3xl dark:text-[#F1F5F9]/90">
            {profile.tagline[language]}
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-[#94A3B8]">
            {profile.headlineBio[language]}
          </p>

          {/* CTAs matching Propuesta A */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <button
              type="button"
              onClick={onDownloadCv}
              className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#63B3FA]"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>{t.downloadCv}</span>
            </button>

            <a
              href="#proyectos"
              className="inline-flex items-center rounded-lg border border-slate-300 bg-transparent px-5 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:border-[#2563EB] hover:text-[#2563EB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] dark:border-slate-700 dark:text-[#F1F5F9] dark:hover:border-[#63B3FA]"
            >
              {t.viewProjects}
            </a>
          </div>

          {/* Square Social Icon Buttons matching Propuesta A */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 text-slate-700 transition-colors hover:border-[#2563EB] hover:text-[#2563EB] dark:border-slate-700 dark:bg-[#14243D]/60 dark:text-[#94A3B8] dark:hover:border-[#63B3FA] dark:hover:text-[#F1F5F9]"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>

            {profile.linkedinUrl && (
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 text-slate-700 transition-colors hover:border-[#2563EB] hover:text-[#2563EB] dark:border-slate-700 dark:bg-[#14243D]/60 dark:text-[#94A3B8] dark:hover:border-[#63B3FA] dark:hover:text-[#F1F5F9]"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
            )}

            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 text-slate-700 transition-colors hover:border-[#2563EB] hover:text-[#2563EB] dark:border-slate-700 dark:bg-[#14243D]/60 dark:text-[#94A3B8] dark:hover:border-[#63B3FA] dark:hover:text-[#F1F5F9]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        {/* Right: Borderless Cutout Portrait with Soft Radial Blue Aura (Propuesta A) */}
        <div className="order-1 flex justify-center lg:order-2 lg:col-span-5">
          <div className="relative flex w-full max-w-sm items-center justify-center">
            {/* Soft Radial Blue Glow behind portrait */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute h-72 w-72 rounded-full bg-[#2563EB]/30 blur-3xl dark:bg-[#2563EB]/35"
            />
            <img
              src={profile.portraitSrc}
              alt={t.portraitAlt}
              className="relative z-10 h-auto w-full max-w-[340px] rounded-2xl object-cover object-top [mask-image:linear-gradient(to_bottom,black_76%,transparent_100%)] dark:rounded-none dark:[mask-image:radial-gradient(ellipse_78%_85%_at_50%_46%,black_62%,transparent_100%)]"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
