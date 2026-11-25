import { useEffect, useState } from 'react';
import { ArrowDownRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import type { Translations } from '@/i18n/translations';
import type { Language, ProfileData } from '@/types/portfolio';

interface HeroSectionProps {
  profile: ProfileData;
  language: Language;
  t: Translations['hero'];
  onDownloadCv: () => void;
}

const ROTATING_SPECIALTIES = [
  'Software Developer',
  'Full Stack Development',
  'Backend Engineering',
  'REST API & System Integration',
  'Build. Learn. Evolve.',
];

export function HeroSection({ profile, language, t, onDownloadCv }: HeroSectionProps) {
  const [specIndex, setSpecIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setSpecIndex((prev) => (prev + 1) % ROTATING_SPECIALTIES.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-slate-200/80 py-14 sm:py-20 dark:border-slate-800/80"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* Left: Propuesta A Editorial Intro */}
        <div className="order-2 lg:order-1 lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-md border border-[#2563EB]/30 bg-[#14243D]/10 px-3 py-1 font-mono text-xs font-medium text-[#1D4ED8] dark:bg-[#14243D] dark:text-[#63B3FA]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] dark:bg-[#63B3FA]" />
            <span>{profile.role[language]}</span>
          </div>

          <h1 className="mt-5 font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl dark:text-[#F1F5F9]">
            {profile.name}
            <span className="text-[#2563EB]">.</span>
          </h1>

          <p
            aria-live="polite"
            className="mt-2 font-mono text-sm font-semibold text-[#2563EB] sm:text-base dark:text-[#63B3FA]"
          >
            &gt; {ROTATING_SPECIALTIES[specIndex]}
          </p>

          <p className="mt-3 font-display text-2xl font-medium text-slate-700 sm:text-3xl dark:text-[#F1F5F9]/90">
            {profile.tagline[language]}
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-[#94A3B8]">
            {profile.headlineBio[language]}
          </p>

          {/* Enhanced Interactive CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <button
              type="button"
              onClick={onDownloadCv}
              className="group inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-lg hover:shadow-[#2563EB]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#63B3FA]"
            >
              <Download
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
              <span>{t.downloadCv}</span>
            </button>

            <a
              href="#proyectos"
              className="group inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-transparent px-5 py-2.5 text-sm font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2563EB] hover:bg-[#2563EB]/10 hover:text-[#2563EB] hover:shadow-md hover:shadow-[#2563EB]/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] dark:border-slate-700 dark:text-[#F1F5F9] dark:hover:border-[#63B3FA] dark:hover:text-[#63B3FA]"
            >
              <span>{t.viewProjects}</span>
              <ArrowDownRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Enhanced Social Icon Buttons */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB] hover:bg-[#2563EB]/15 hover:text-[#2563EB] hover:shadow-md hover:shadow-[#2563EB]/20 dark:border-slate-700 dark:bg-[#14243D]/60 dark:text-[#94A3B8] dark:hover:border-[#63B3FA] dark:hover:text-[#F1F5F9]"
            >
              <Github
                className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />
            </a>

            {profile.linkedinUrl && (
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB] hover:bg-[#2563EB]/15 hover:text-[#2563EB] hover:shadow-md hover:shadow-[#2563EB]/20 dark:border-slate-700 dark:bg-[#14243D]/60 dark:text-[#94A3B8] dark:hover:border-[#63B3FA] dark:hover:text-[#F1F5F9]"
              >
                <Linkedin
                  className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
              </a>
            )}

            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB] hover:bg-[#2563EB]/15 hover:text-[#2563EB] hover:shadow-md hover:shadow-[#2563EB]/20 dark:border-slate-700 dark:bg-[#14243D]/60 dark:text-[#94A3B8] dark:hover:border-[#63B3FA] dark:hover:text-[#F1F5F9]"
              >
                <Mail
                  className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
              </a>
            )}
          </div>
        </div>

        {/* Right: Interactive Borderless Portrait with Hover Zoom & Aura */}
        <div className="order-1 flex justify-center lg:order-2 lg:col-span-5">
          <div className="group relative flex w-full max-w-sm items-center justify-center">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute h-72 w-72 rounded-full bg-[#2563EB]/30 blur-3xl transition-all duration-500 group-hover:scale-110 group-hover:bg-[#2563EB]/45 dark:bg-[#2563EB]/35"
            />
            <img
              src={profile.portraitSrc}
              alt={t.portraitAlt}
              className="relative z-10 h-auto w-full max-w-[340px] rounded-2xl object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 [mask-image:linear-gradient(to_bottom,black_76%,transparent_100%)] dark:rounded-none dark:[mask-image:radial-gradient(ellipse_78%_85%_at_50%_46%,black_62%,transparent_100%)]"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
