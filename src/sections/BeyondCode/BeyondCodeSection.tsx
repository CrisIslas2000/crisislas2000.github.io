import { useState } from 'react';
import { X } from 'lucide-react';
import { LuchaMascot } from '@/components/shared/LuchaMascot';
import type { Translations } from '@/i18n/translations';

interface BeyondCodeSectionProps {
  t: Translations['beyond'];
}

function CardIcon({ id }: { id: string }) {
  if (id === 'developer') {
    return (
      <svg viewBox="0 0 64 48" fill="none" className="h-12 w-16" aria-hidden="true">
        <rect x="4" y="4" width="56" height="40" rx="6" stroke="#2563EB" strokeWidth="2" fill="#080F1E" />
        <path d="M4 13H60" stroke="#2563EB" strokeWidth="1.5" strokeOpacity="0.6" />
        <circle cx="11" cy="8.5" r="1.5" fill="#63B3FA" />
        <circle cx="16" cy="8.5" r="1.5" fill="#2563EB" />
        <path d="M24 23L18 28L24 33" stroke="#63B3FA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40 23L46 28L40 33" stroke="#63B3FA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M34 21L30 35" stroke="#F1F5F9" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === 'strategist') {
    return (
      <svg viewBox="0 0 64 48" fill="none" className="h-12 w-16" aria-hidden="true">
        <rect x="4" y="4" width="56" height="40" rx="4" stroke="#94A3B8" strokeWidth="1.6" fill="#080F1E" />
        <path d="M32 4V44" stroke="#94A3B8" strokeWidth="1.4" strokeOpacity="0.7" />
        <circle cx="32" cy="24" r="7" stroke="#94A3B8" strokeWidth="1.4" strokeOpacity="0.8" />
        <rect x="4" y="14" width="8" height="20" stroke="#94A3B8" strokeWidth="1.4" strokeOpacity="0.7" />
        <rect x="52" y="14" width="8" height="20" stroke="#94A3B8" strokeWidth="1.4" strokeOpacity="0.7" />
        <circle cx="22" cy="18" r="2" fill="#63B3FA" />
        <circle cx="42" cy="30" r="2" fill="#A50044" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 48" fill="none" className="h-12 w-16" aria-hidden="true">
      <path
        d="M32 5C23 5 18 11.5 18 22C18 33 23 41 32 43C41 41 46 33 46 22C46 11.5 41 5 32 5Z"
        stroke="#F1F5F9"
        strokeWidth="1.8"
        fill="#14243D"
      />
      <path d="M32 5V16" stroke="#C8102E" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="26" cy="21" rx="4" ry="2.6" fill="#F1F5F9" />
      <ellipse cx="38" cy="21" rx="4" ry="2.6" fill="#F1F5F9" />
      <path d="M27 33C29 35 35 35 37 33" stroke="#A50044" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const cardLeftBorders = [
  'border-l-2 border-l-[#2563EB]',
  'border-l-2 border-l-[#A50044]',
  'border-l-2 border-l-[#C8102E]',
];

export function BeyondCodeSection({ t }: BeyondCodeSectionProps) {
  const [mascotOpen, setMascotOpen] = useState(false);

  return (
    <section
      id="beyond-the-code"
      className="relative border-b border-slate-200/80 py-16 sm:py-24 dark:border-slate-800/80"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-[#2563EB] dark:text-[#63B3FA]">
            {t.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-[#F1F5F9]">
            {t.title}
          </h2>
          <p className="mt-1 font-mono text-xs text-slate-500 dark:text-[#94A3B8]">
            80% Ingeniería · 20% Identidad
          </p>
        </div>

        {/* Propuesta C: 3 Cards with Left Vertical Accent Bar + Centered Icon */}
        <div className="grid gap-5 md:grid-cols-3">
          {t.cards.map((card, idx) => {
            const leftBorder = cardLeftBorders[idx] ?? 'border-l-2 border-l-[#2563EB]';
            return (
              <article
                key={card.id}
                className={`card-interactive group rounded-xl border border-slate-200 ${leftBorder} bg-white p-6 hover:border-[#2563EB]/50 dark:border-slate-800 dark:bg-[#14243D]/75 dark:hover:border-[#63B3FA]/40`}
              >
                <div className="mb-5 flex justify-center transition-transform duration-300 group-hover:scale-105">
                  <CardIcon id={card.id} />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-[#F1F5F9]">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Discreet Corner Lucha-Mask Easter Egg Trigger (Propuesta C bottom-right) */}
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={() => setMascotOpen((prev) => !prev)}
            aria-expanded={mascotOpen}
            aria-label={t.easterEggTrigger}
            title={t.easterEggTrigger}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 font-mono text-[11px] text-slate-500 transition-colors hover:border-[#2563EB] hover:text-[#2563EB] dark:border-slate-800 dark:bg-[#14243D]/60 dark:text-[#63B3FA] dark:hover:border-[#63B3FA]"
          >
            <LuchaMascot className="h-5 w-5" />
            <span className="hidden sm:inline">{t.easterEggTrigger}</span>
          </button>
        </div>

        {mascotOpen && (
          <div
            role="region"
            aria-label={t.easterEggTitle}
            className="mt-4 flex flex-col items-start justify-between gap-4 rounded-xl border border-[#2563EB]/40 bg-slate-50 p-5 sm:flex-row sm:items-center dark:bg-[#14243D]/90"
          >
            <div className="flex items-center gap-4">
              <LuchaMascot className="h-14 w-14 shrink-0" />
              <div>
                <h4 className="font-display text-base font-bold text-slate-900 dark:text-[#F1F5F9]">
                  {t.easterEggTitle}
                </h4>
                <p className="mt-1 text-sm text-slate-600 dark:text-[#94A3B8]">
                  {t.easterEggText}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setMascotOpen(false)}
              aria-label={t.easterEggClose}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-300 px-3 py-1.5 font-mono text-xs text-slate-700 hover:border-[#2563EB] dark:border-slate-700 dark:text-[#F1F5F9]"
            >
              <X className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{t.easterEggClose}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
