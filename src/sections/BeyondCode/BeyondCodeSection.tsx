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
        <rect
          x="4"
          y="4"
          width="56"
          height="40"
          rx="6"
          className="fill-slate-100 stroke-[#2563EB] dark:fill-[#080F1E] dark:stroke-[#63B3FA]"
          strokeWidth="2"
        />
        <path
          d="M4 13H60"
          className="stroke-[#2563EB]/50 dark:stroke-[#63B3FA]/50"
          strokeWidth="1.5"
        />
        <circle cx="11" cy="8.5" r="1.5" fill="#63B3FA" />
        <circle cx="16" cy="8.5" r="1.5" fill="#2563EB" />
        <path
          d="M24 23L18 28L24 33"
          className="stroke-[#2563EB] dark:stroke-[#63B3FA]"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 23L46 28L40 33"
          className="stroke-[#2563EB] dark:stroke-[#63B3FA]"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34 21L30 35"
          className="stroke-slate-800 dark:stroke-[#F1F5F9]"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (id === 'strategist') {
    return (
      <svg viewBox="0 0 64 48" fill="none" className="h-12 w-16" aria-hidden="true">
        <rect
          x="4"
          y="4"
          width="56"
          height="40"
          rx="4"
          className="fill-slate-100 stroke-slate-500 dark:fill-[#080F1E] dark:stroke-[#63B3FA]/70"
          strokeWidth="1.8"
        />
        <path
          d="M32 4V44"
          className="stroke-slate-400 dark:stroke-[#63B3FA]/50"
          strokeWidth="1.4"
        />
        <circle
          cx="32"
          cy="24"
          r="7"
          className="stroke-slate-500 dark:stroke-[#63B3FA]/70"
          strokeWidth="1.5"
        />
        <rect
          x="4"
          y="14"
          width="8"
          height="20"
          className="stroke-slate-400 dark:stroke-[#63B3FA]/50"
          strokeWidth="1.4"
        />
        <rect
          x="52"
          y="14"
          width="8"
          height="20"
          className="stroke-slate-400 dark:stroke-[#63B3FA]/50"
          strokeWidth="1.4"
        />
        <circle cx="22" cy="18" r="2.5" fill="#2563EB" />
        <circle cx="42" cy="30" r="2.5" fill="#A50044" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 48" fill="none" className="h-12 w-16" aria-hidden="true">
      <path
        d="M32 5C23 5 18 11.5 18 22C18 33 23 41 32 43C41 41 46 33 46 22C46 11.5 41 5 32 5Z"
        className="fill-[#2563EB] stroke-[#1D4ED8] dark:fill-[#14243D] dark:stroke-[#63B3FA]"
        strokeWidth="2"
      />
      <path d="M32 5V16" stroke="#C8102E" strokeWidth="2.4" strokeLinecap="round" />
      <ellipse cx="26" cy="21" rx="4" ry="2.6" fill="#F1F5F9" />
      <ellipse cx="38" cy="21" rx="4" ry="2.6" fill="#F1F5F9" />
      <path d="M27 33C29 35 35 35 37 33" stroke="#F1F5F9" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const cardLeftBorders = [
  'border-l-2 border-l-[#2563EB]',
  'border-l-2 border-l-[#A50044]',
  'border-l-2 border-l-[#C8102E]',
];

export function BeyondCodeSection({ t }: BeyondCodeSectionProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [pinnedCard, setPinnedCard] = useState<string | null>(null);
  const activeCard = hoveredCard ?? pinnedCard;

  const handleCardClick = (id: string) => {
    setPinnedCard((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="beyond-the-code"
      className="relative border-b border-slate-200/80 py-16 sm:py-24 dark:border-slate-800/80"
    >
      <div
        onMouseLeave={() => setHoveredCard(null)}
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

        {/* 3 Cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {t.cards.map((card, idx) => {
            const leftBorder = cardLeftBorders[idx] ?? 'border-l-2 border-l-[#2563EB]';
            const isSelected = activeCard === card.id;

            return (
              <article
                key={card.id}
                onMouseEnter={() => setHoveredCard(card.id)}
                onClick={() => handleCardClick(card.id)}
                role="button"
                tabIndex={0}
                aria-expanded={isSelected}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(card.id);
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

        {/* Dynamic Spotlight Panel */}
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
              <div className="animate-roulette-slide grid items-center gap-6 md:grid-cols-12">
                {/* Perspective Lucha Libre Ring with Kemonito inside (matching SplashScreen) */}
                <div className="relative flex h-44 items-center justify-center md:col-span-5">
                  <svg
                    viewBox="0 0 320 170"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full"
                    aria-hidden="true"
                  >
                    <polygon
                      points="55,68 265,68 302,142 18,142"
                      className="fill-slate-200/80 stroke-[#2563EB] dark:fill-[#14243D]"
                      strokeOpacity="0.65"
                      strokeWidth="1.8"
                    />
                    <polygon
                      points="18,142 302,142 296,158 24,158"
                      className="fill-slate-300/70 stroke-[#2563EB] dark:fill-[#0D1933]"
                      strokeOpacity="0.4"
                      strokeWidth="1.2"
                    />
                    <ellipse
                      cx="160"
                      cy="104"
                      rx="42"
                      ry="16"
                      className="fill-white/70 stroke-[#2563EB] dark:fill-[#080F1E]/70 dark:stroke-[#63B3FA]"
                      strokeOpacity="0.5"
                      strokeWidth="1.4"
                    />
                    <line x1="55" y1="26" x2="265" y2="26" stroke="#2563EB" strokeWidth="2" />
                    <line x1="55" y1="40" x2="265" y2="40" className="stroke-slate-400 dark:stroke-[#F1F5F9]" strokeOpacity="0.7" strokeWidth="1.8" />
                    <line x1="55" y1="54" x2="265" y2="54" stroke="#A50044" strokeWidth="2" />
                    <line x1="55" y1="26" x2="18" y2="86" stroke="#2563EB" strokeWidth="2" />
                    <line x1="55" y1="40" x2="18" y2="104" className="stroke-slate-400 dark:stroke-[#F1F5F9]" strokeOpacity="0.7" strokeWidth="1.8" />
                    <line x1="55" y1="54" x2="18" y2="122" stroke="#A50044" strokeWidth="2" />
                    <line x1="265" y1="26" x2="302" y2="86" stroke="#2563EB" strokeWidth="2" />
                    <line x1="265" y1="40" x2="302" y2="104" className="stroke-slate-400 dark:stroke-[#F1F5F9]" strokeOpacity="0.7" strokeWidth="1.8" />
                    <line x1="265" y1="54" x2="302" y2="122" stroke="#C8102E" strokeWidth="2" />
                    <line x1="55" y1="20" x2="55" y2="68" stroke="#63B3FA" strokeWidth="4" strokeLinecap="round" />
                    <line x1="265" y1="20" x2="265" y2="68" stroke="#A50044" strokeWidth="4" strokeLinecap="round" />
                    <line x1="18" y1="78" x2="18" y2="142" stroke="#2563EB" strokeWidth="5" strokeLinecap="round" />
                    <line x1="302" y1="78" x2="302" y2="142" stroke="#C8102E" strokeWidth="5" strokeLinecap="round" />
                    <line x1="18" y1="86" x2="302" y2="86" stroke="#2563EB" strokeOpacity="0.8" strokeWidth="2.2" />
                    <line x1="18" y1="104" x2="302" y2="104" className="stroke-slate-400 dark:stroke-[#F1F5F9]" strokeOpacity="0.6" strokeWidth="2" />
                    <line x1="18" y1="122" x2="302" y2="122" stroke="#A50044" strokeOpacity="0.85" strokeWidth="2.2" />
                  </svg>
                  <div className="absolute top-[46%] -translate-y-1/2">
                    <LuchaMascot className="h-14 w-14 animate-bounce" />
                  </div>
                </div>

                <div className="md:col-span-7">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#2563EB] dark:text-[#63B3FA]">
                    RINCÓN AZUL · INSPIRACIÓN KEMONITO &amp; LUCHA LIBRE
                  </span>
                  <h4 className="mt-1 font-display text-lg font-bold text-slate-900 dark:text-[#F1F5F9]">
                    {t.easterEggTitle}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                    {t.easterEggText}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
