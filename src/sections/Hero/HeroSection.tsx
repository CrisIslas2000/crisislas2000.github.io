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

interface HeroTrait {
  code: string;
  label: { es: string; en: string };
  side: 'left' | 'right';
  posClass: string;
  delayClass: string;
}

const HERO_FIFA_TRAITS: HeroTrait[] = [
  {
    code: 'DBG',
    label: { es: 'Debugging en producción', en: 'Prod Debugging' },
    side: 'left',
    posClass: 'sm:-left-20 sm:top-2',
    delayClass: 'delay-[0ms]',
  },
  {
    code: 'ARQ',
    label: { es: 'Arquitectura en capas', en: 'Layered Architecture' },
    side: 'right',
    posClass: 'sm:-right-20 sm:top-4',
    delayClass: 'delay-[50ms]',
  },
  {
    code: 'JAV',
    label: { es: 'Modo Java + Café', en: 'Java + Coffee Mode' },
    side: 'left',
    posClass: 'sm:-left-24 sm:top-[28%]',
    delayClass: 'delay-[100ms]',
  },
  {
    code: 'API',
    label: { es: 'Pases filtrados (REST)', en: 'Through-Ball APIs' },
    side: 'right',
    posClass: 'sm:-right-24 sm:top-[30%]',
    delayClass: 'delay-[150ms]',
  },
  {
    code: 'SQL',
    label: { es: 'Sin miedo al JOIN', en: 'Fearless SQL JOINs' },
    side: 'left',
    posClass: 'sm:-left-24 sm:top-[56%]',
    delayClass: 'delay-[200ms]',
  },
  {
    code: 'SEC',
    label: { es: '2FA y código seguro', en: '2FA & Secure Code' },
    side: 'right',
    posClass: 'sm:-right-24 sm:top-[58%]',
    delayClass: 'delay-[250ms]',
  },
  {
    code: 'GIT',
    label: { es: 'Deploy en viernes sin miedo', en: 'Fearless Friday Deploy' },
    side: 'left',
    posClass: 'sm:-left-16 sm:bottom-3',
    delayClass: 'delay-[300ms]',
  },
  {
    code: 'RES',
    label: { es: 'Aguante en el ring', en: 'Ring Resilience' },
    side: 'right',
    posClass: 'sm:-right-16 sm:bottom-3',
    delayClass: 'delay-[350ms]',
  },
];

export function HeroSection({ profile, language, t, onDownloadCv }: HeroSectionProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing');
  const [photoFocused, setPhotoFocused] = useState(false);

  const currentWord = ROTATING_SPECIALTIES[wordIndex] ?? ROTATING_SPECIALTIES[0];

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCharCount(currentWord.length);
      return;
    }

    let timer: number;

    if (phase === 'typing') {
      if (charCount < currentWord.length) {
        timer = window.setTimeout(() => setCharCount((c) => c + 1), 42);
      } else {
        timer = window.setTimeout(() => setPhase('pausing'), 0);
      }
    } else if (phase === 'pausing') {
      timer = window.setTimeout(() => setPhase('deleting'), 2000);
    } else {
      if (charCount > 0) {
        timer = window.setTimeout(() => setCharCount((c) => c - 1), 24);
      } else {
        timer = window.setTimeout(() => {
          setWordIndex((idx) => (idx + 1) % ROTATING_SPECIALTIES.length);
          setPhase('typing');
        }, 120);
      }
    }

    return () => window.clearTimeout(timer);
  }, [charCount, currentWord.length, phase]);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-slate-200/80 py-14 sm:py-20 dark:border-slate-800/80"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* Left: Editorial Intro */}
        <div
          className={`order-2 transition-all duration-500 lg:order-1 lg:col-span-7 ${
            photoFocused ? 'opacity-40 blur-[1.5px]' : 'opacity-100 blur-0'
          }`}
        >
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
            className="mt-2 min-h-[1.75rem] font-mono text-sm font-semibold text-[#2563EB] sm:text-base dark:text-[#63B3FA]"
          >
            &gt; {currentWord.slice(0, charCount)}
            <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-[#2563EB] align-middle dark:bg-[#63B3FA]" />
          </p>

          <p className="mt-3 font-display text-2xl font-medium text-slate-700 sm:text-3xl dark:text-[#F1F5F9]/90">
            {profile.tagline[language]}
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-[#94A3B8]">
            {profile.headlineBio[language]}
          </p>

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

        {/* Right: Portrait Spotlight + 8 Callout Badges (Circle -> Line -> Label) */}
        <div className="order-1 flex flex-col items-center lg:order-2 lg:col-span-5">
          <div
            onMouseEnter={() => setPhotoFocused(true)}
            onMouseLeave={() => setPhotoFocused(false)}
            onClick={() => setPhotoFocused((prev) => !prev)}
            role="button"
            tabIndex={0}
            aria-pressed={photoFocused}
            aria-label={
              language === 'es'
                ? 'Ver atributos estilo ficha técnica'
                : 'View tech card attributes'
            }
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setPhotoFocused((prev) => !prev);
              }
            }}
            className="relative flex w-full max-w-sm cursor-pointer items-center justify-center focus:outline-none"
          >
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute h-72 w-72 rounded-full blur-3xl transition-all duration-500 ${
                photoFocused
                  ? 'scale-125 bg-[#2563EB]/45 dark:bg-[#2563EB]/50'
                  : 'bg-[#2563EB]/30 dark:bg-[#2563EB]/35'
              }`}
            />

            <img
              src={profile.portraitSrc}
              alt={t.portraitAlt}
              className={`relative z-10 h-auto w-full max-w-[340px] rounded-2xl object-cover object-top transition-transform duration-500 ease-out [mask-image:linear-gradient(to_bottom,black_76%,transparent_100%)] dark:rounded-none dark:[mask-image:radial-gradient(ellipse_78%_85%_at_50%_46%,black_62%,transparent_100%)] ${
                photoFocused ? 'scale-110' : 'scale-100'
              }`}
              loading="eager"
              decoding="async"
            />

            {/* 8 Callout Badges (Circle Node -> Connector Line -> Card) */}
            {HERO_FIFA_TRAITS.map((trait) => {
              const isLeft = trait.side === 'left';
              return (
                <div
                  key={trait.code}
                  aria-hidden={!photoFocused}
                  className={`pointer-events-none absolute z-20 hidden items-center transition-all duration-300 sm:flex ${trait.posClass} ${trait.delayClass} ${
                    isLeft ? 'flex-row-reverse' : 'flex-row'
                  } ${photoFocused ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
                >
                  {/* Circle Anchor Node */}
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full border-2 border-[#63B3FA] bg-[#2563EB] shadow-[0_0_8px_rgba(99,179,250,0.9)]" />
                  {/* Connector Line */}
                  <span className="h-[1.5px] w-7 shrink-0 bg-gradient-to-r from-[#63B3FA] to-[#2563EB]" />
                  {/* Label Card */}
                  <div className="flex items-center gap-2 rounded-xl border border-[#2563EB]/60 bg-[#080F1E]/95 px-2.5 py-1.5 shadow-lg shadow-[#2563EB]/25 backdrop-blur-xs">
                    <span className="rounded bg-[#2563EB] px-1.5 py-0.5 font-mono text-[10px] font-bold text-white">
                      {trait.code}
                    </span>
                    <span className="whitespace-nowrap font-mono text-[11px] font-medium text-[#F1F5F9]">
                      {trait.label[language]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Grid when Tapped */}
          {photoFocused && (
            <div className="animate-roulette-slide mt-4 grid w-full max-w-sm grid-cols-2 gap-2 sm:hidden">
              {HERO_FIFA_TRAITS.map((trait) => (
                <div
                  key={trait.code}
                  className="flex items-center gap-2 rounded-lg border border-[#2563EB]/50 bg-[#080F1E]/95 px-2.5 py-1.5"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#63B3FA]" />
                  <span className="rounded bg-[#2563EB] px-1.5 py-0.5 font-mono text-[10px] font-bold text-white">
                    {trait.code}
                  </span>
                  <span className="truncate font-mono text-[10px] text-[#F1F5F9]">
                    {trait.label[language]}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
