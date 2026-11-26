import { useState } from 'react';
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
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section
      id="beyond-the-code"
      className="relative border-b border-slate-200/80 py-16 sm:py-24 dark:border-slate-800/80"
    >
      <div
        onMouseLeave={() => setActiveCard(null)}
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
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

        {/* 3 Cards: Hover/Click reveals dedicated personal visual panel below */}
        <div className="grid gap-5 md:grid-cols-3">
          {t.cards.map((card, idx) => {
            const leftBorder = cardLeftBorders[idx] ?? 'border-l-2 border-l-[#2563EB]';
            const isSelected = activeCard === card.id;

            return (
              <article
                key={card.id}
                onMouseEnter={() => setActiveCard(card.id)}
                onClick={() => setActiveCard(card.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveCard(card.id);
                  }
                }}
                className={`card-interactive group cursor-pointer rounded-xl border ${leftBorder} bg-white p-6 transition-all duration-300 dark:bg-[#14243D]/75 ${
                  isSelected
                    ? 'border-[#2563EB] shadow-lg shadow-[#2563EB]/15 dark:border-[#63B3FA]'
                    : 'border-slate-200 hover:border-[#2563EB]/50 dark:border-slate-800'
                }`}
              >
                <div className="mb-5 flex justify-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
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

        {/* Dynamic Spotlight Panel (adapts cleanly to Light & Dark theme) */}
        {activeCard && (
          <div className="mt-6 overflow-hidden rounded-2xl border border-[#2563EB]/40 bg-white p-6 text-slate-900 shadow-xl shadow-[#2563EB]/10 transition-all duration-300 dark:bg-[#080F1E] dark:text-[#F1F5F9]">
            {activeCard === 'developer' && (
              <div className="animate-roulette-slide grid items-center gap-6 md:grid-cols-12">
                <div className="md:col-span-7">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-[#2563EB] dark:text-[#63B3FA]">
                    CLEAN CODE · ARCHITECTURE · JAVA
                  </p>
                  <blockquote className="mt-2 font-display text-lg font-semibold leading-snug text-slate-900 dark:text-[#F1F5F9]">
                    &ldquo;Cualquiera puede escribir código que una computadora entienda; los buenos
                    programadores escriben código que los humanos entienden.&rdquo;
                  </blockquote>
                  <p className="mt-2 font-mono text-xs text-slate-600 dark:text-[#94A3B8]">
                    — Martin Fowler
                  </p>
                </div>
                {/* Animated Layered Architecture Flow */}
                <div className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-4 md:col-span-5 dark:border-slate-800 dark:bg-[#0D172B]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-[#94A3B8]">
                    Arquitectura por Capas
                  </span>
                  <div className="flex w-full items-center justify-between gap-1.5 font-mono text-[11px]">
                    <span className="animate-pulse rounded-md border border-[#2563EB]/50 bg-[#2563EB]/10 px-2.5 py-1.5 font-semibold text-[#1D4ED8] dark:border-[#2563EB]/60 dark:bg-[#14243D] dark:text-[#63B3FA]">
                      Controller
                    </span>
                    <span className="text-[#2563EB]">→</span>
                    <span className="rounded-md border border-[#63B3FA]/60 bg-white px-2.5 py-1.5 font-semibold text-slate-800 dark:bg-[#14243D] dark:text-[#F1F5F9]">
                      Service
                    </span>
                    <span className="text-[#2563EB]">→</span>
                    <span className="rounded-md border border-[#A50044]/50 bg-white px-2.5 py-1.5 font-semibold text-slate-800 dark:border-[#A50044]/60 dark:bg-[#14243D] dark:text-[#F1F5F9]">
                      Repository
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#2563EB] dark:text-[#63B3FA]">
                    SOLID · Validación · Mantenibilidad
                  </span>
                </div>
              </div>
            )}

            {activeCard === 'strategist' && (
              <div className="animate-roulette-slide grid items-center gap-6 md:grid-cols-12">
                <div className="md:col-span-8">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-[#2563EB] dark:text-[#63B3FA]">
                    VISIÓN TÁCTICA · INSPIRACIÓN #10
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold leading-snug text-slate-900 dark:text-[#F1F5F9]">
                    Leer la cancha antes de recibir el balón: así como un pase filtrado rompe
                    líneas, una buena arquitectura resuelve el problema antes de escribir la primera
                    línea de código.
                  </p>
                  <p className="mt-2 font-mono text-xs text-slate-600 dark:text-[#94A3B8]">
                    Precisión · Creatividad · Trabajo en equipo
                  </p>
                </div>
                <div className="flex items-center justify-center md:col-span-4">
                  <div className="flex h-24 w-24 flex-col items-center justify-center rounded-2xl border-2 border-[#A50044] bg-gradient-to-b from-slate-100 to-white shadow-lg dark:from-[#14243D] dark:to-[#080F1E]">
                    <span className="font-display text-3xl font-bold text-slate-900 dark:text-[#F1F5F9]">
                      10
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#2563EB] dark:text-[#63B3FA]">
                      Estratega
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeCard === 'wrestler' && (
              <div className="animate-roulette-slide relative overflow-hidden rounded-xl border border-[#2563EB]/30 bg-slate-50 p-5 dark:border-[#2563EB]/40 dark:bg-[#050A14]">
                {/* Mini Blue Lucha Ring */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-3 flex flex-col gap-2"
                >
                  <span className="h-[1.5px] w-full bg-[#2563EB]/60 dark:bg-[#2563EB]/70" />
                  <span className="h-[1.5px] w-full bg-slate-300 dark:bg-[#F1F5F9]/50" />
                  <span className="h-[1.5px] w-full bg-[#A50044]/70 dark:bg-[#A50044]/75" />
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 left-0 top-0 w-2 bg-gradient-to-b from-[#2563EB] to-[#14243D]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 right-0 top-0 w-2 bg-gradient-to-b from-[#C8102E] to-[#14243D]"
                />

                <div className="relative z-10 flex flex-col items-center gap-5 pt-3 sm:flex-row">
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-[#2563EB]/40 bg-white shadow-lg shadow-[#2563EB]/15 dark:border-[#2563EB]/50 dark:bg-[#14243D]/90">
                    <LuchaMascot className="h-18 w-18 animate-bounce" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#2563EB] dark:text-[#63B3FA]">
                      RINCÓN AZUL · INSPIRACIÓN KEMONITO &amp; LUCHA LIBRE
                    </span>
                    <h4 className="mt-1 font-display text-lg font-bold text-slate-900 dark:text-[#F1F5F9]">
                      {t.easterEggTitle}
                    </h4>
                    <p className="mt-1 text-sm text-slate-600 dark:text-[#94A3B8]">
                      {t.easterEggText}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
