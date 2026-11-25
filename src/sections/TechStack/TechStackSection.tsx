import { useState } from 'react';
import { LayoutGrid, Shield, Star } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { TechLogo } from '@/components/shared/TechLogo';
import { tacticalBench, tacticalStarters } from '@/data/techStack';
import type { Translations } from '@/i18n/translations';
import type { Language, TacticalZone, TechCategory } from '@/types/portfolio';

interface TechStackSectionProps {
  categories: TechCategory[];
  tacticalZones: TacticalZone[];
  language: Language;
  t: Translations['tech'];
}

export function TechStackSection({
  categories,
  tacticalZones,
  language,
  t,
}: TechStackSectionProps) {
  const [viewMode, setViewMode] = useState<'both' | 'tactical' | 'conventional'>('both');
  const [selectedName, setSelectedName] = useState<string>('Java');

  const goalkeeper = tacticalStarters.filter((p) => p.zone === 'goalkeeper');
  const defenders = tacticalStarters.filter((p) => p.zone === 'defense');
  const midfielders = tacticalStarters.filter((p) => p.zone === 'midfield');
  const forwards = tacticalStarters.filter((p) => p.zone === 'forward');

  const selectedStarter = tacticalStarters.find((p) => p.name === selectedName);
  const selectedBench = tacticalBench.find((b) => b.name === selectedName);
  const activeZone = tacticalZones.find(
    (z) => z.id === (selectedStarter?.zone ?? selectedBench?.zone ?? 'midfield')
  );

  const renderPitchPlayer = (player: (typeof tacticalStarters)[number]) => {
    const isSelected = selectedName === player.name;
    return (
      <button
        key={player.id}
        type="button"
        onClick={() => setSelectedName(player.name)}
        aria-pressed={isSelected}
        className={`group relative flex flex-col items-center gap-1 rounded-xl border px-2.5 py-2 text-center transition-all ${
          isSelected
            ? 'border-[#63B3FA] bg-[#2563EB]/25 ring-2 ring-[#63B3FA]/50'
            : 'border-[#2563EB]/40 bg-[#080F1E]/85 hover:border-[#63B3FA]/80 hover:bg-[#14243D]'
        }`}
      >
        {player.isCaptain && (
          <span
            title={t.captainLabel}
            className="absolute -right-1.5 -top-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#A50044] text-[9px] font-bold text-white"
          >
            C
          </span>
        )}
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#14243D] border border-slate-700/80">
          <TechLogo name={player.name} className="h-4 w-4" />
        </span>
        <span className="font-mono text-[10px] font-semibold leading-tight text-[#F1F5F9]">
          {player.name}
        </span>
      </button>
    );
  };

  return (
    <section
      id="tecnologias"
      className="border-b border-slate-200/80 py-20 sm:py-28 dark:border-slate-800/80"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

          {/* View Switcher */}
          <div
            role="group"
            aria-label="Modo de visualización de tecnologías"
            className="mb-10 inline-flex rounded-xl border border-slate-200 bg-slate-100 p-1 dark:border-slate-800 dark:bg-[#14243D]"
          >
            <button
              type="button"
              onClick={() => setViewMode('both')}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                viewMode === 'both'
                  ? 'bg-[#2563EB] text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-[#94A3B8] dark:hover:text-[#F1F5F9]'
              }`}
            >
              <span>All</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('tactical')}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                viewMode === 'tactical'
                  ? 'bg-[#2563EB] text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-[#94A3B8] dark:hover:text-[#F1F5F9]'
              }`}
            >
              <Shield className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{t.viewTactical}</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('conventional')}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                viewMode === 'conventional'
                  ? 'bg-[#2563EB] text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-[#94A3B8] dark:hover:text-[#F1F5F9]'
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{t.viewConventional}</span>
            </button>
          </div>
        </div>

        {/* Real 4-3-3 Football Pitch + Bench/Reserves + Inspector */}
        {(viewMode === 'both' || viewMode === 'tactical') && (
          <div className="mb-16">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-slate-900 dark:text-[#F1F5F9]">
                  {t.tacticalTitle}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-slate-600 dark:text-[#94A3B8]">
                  {t.tacticalSubtitle}
                </p>
              </div>
              <span className="rounded-md border border-[#2563EB]/30 bg-[#2563EB]/10 px-3 py-1 font-mono text-xs font-semibold text-[#2563EB] dark:text-[#63B3FA]">
                {t.startersLabel}
              </span>
            </div>

            <div className="grid items-stretch gap-6 lg:grid-cols-12">
              {/* Left: Realistic Tactical Pitch (4-3-3) */}
              <div className="lg:col-span-8">
                <div className="relative overflow-hidden rounded-2xl border border-[#2563EB]/50 bg-[#080F1E] p-4 sm:p-6">
                  {/* Subtle Alternating Pitch Turf Stripes */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-35"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(90deg, #080F1E 0px, #080F1E 48px, #0D1933 48px, #0D1933 96px)',
                    }}
                  />

                  {/* SVG Football Pitch Markings */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 800 440"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute inset-0 h-full w-full"
                  >
                    {/* Outer touchline */}
                    <rect
                      x="18"
                      y="18"
                      width="764"
                      height="404"
                      rx="6"
                      fill="none"
                      stroke="#2563EB"
                      strokeOpacity="0.45"
                      strokeWidth="2"
                    />
                    {/* Halfway line */}
                    <line
                      x1="400"
                      y1="18"
                      x2="400"
                      y2="422"
                      stroke="#2563EB"
                      strokeOpacity="0.4"
                      strokeWidth="2"
                    />
                    {/* Center circle & spot */}
                    <circle
                      cx="400"
                      cy="220"
                      r="56"
                      fill="none"
                      stroke="#2563EB"
                      strokeOpacity="0.4"
                      strokeWidth="2"
                    />
                    <circle cx="400" cy="220" r="4" fill="#63B3FA" fillOpacity="0.6" />
                    {/* Left Penalty Area (Goalkeeper side) */}
                    <rect
                      x="18"
                      y="110"
                      width="105"
                      height="220"
                      fill="none"
                      stroke="#2563EB"
                      strokeOpacity="0.4"
                      strokeWidth="2"
                    />
                    <rect
                      x="18"
                      y="165"
                      width="42"
                      height="110"
                      fill="none"
                      stroke="#2563EB"
                      strokeOpacity="0.35"
                      strokeWidth="1.5"
                    />
                    {/* Right Penalty Area (Forward side) */}
                    <rect
                      x="677"
                      y="110"
                      width="105"
                      height="220"
                      fill="none"
                      stroke="#A50044"
                      strokeOpacity="0.45"
                      strokeWidth="2"
                    />
                    <rect
                      x="740"
                      y="165"
                      width="42"
                      height="110"
                      fill="none"
                      stroke="#C8102E"
                      strokeOpacity="0.4"
                      strokeWidth="1.5"
                    />
                  </svg>

                  {/* 4-3-3 Formation Grid */}
                  <div className="relative z-10 grid min-h-[340px] grid-cols-1 gap-5 py-2 sm:grid-cols-4 sm:items-center">
                    {/* GK (1) */}
                    <div className="flex flex-col items-center gap-2">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#63B3FA]">
                        POR
                      </span>
                      <div className="flex flex-wrap justify-center gap-2.5 sm:flex-col">
                        {goalkeeper.map(renderPitchPlayer)}
                      </div>
                    </div>

                    {/* DEF (4) */}
                    <div className="flex flex-col items-center gap-2">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#63B3FA]">
                        DEF (4)
                      </span>
                      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-1">
                        {defenders.map(renderPitchPlayer)}
                      </div>
                    </div>

                    {/* MID (3) */}
                    <div className="flex flex-col items-center gap-2">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#63B3FA]">
                        MED (3)
                      </span>
                      <div className="flex flex-wrap justify-center gap-3 sm:flex-col">
                        {midfielders.map(renderPitchPlayer)}
                      </div>
                    </div>

                    {/* FWD (3) */}
                    <div className="flex flex-col items-center gap-2">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#63B3FA]">
                        DEL (3)
                      </span>
                      <div className="flex flex-wrap justify-center gap-3 sm:flex-col">
                        {forwards.map(renderPitchPlayer)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bench / Reserves Bar */}
                <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-[#14243D]/70">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-[#63B3FA]">
                      {t.benchLabel} ({tacticalBench.length})
                    </span>
                    <span className="font-mono text-[11px] text-slate-500 dark:text-[#94A3B8]">
                      {t.exploringLabel}: Spring Boot
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tacticalBench.map((tech) => {
                      const isSelected = selectedName === tech.name;
                      return (
                        <button
                          key={tech.name}
                          type="button"
                          onClick={() => setSelectedName(tech.name)}
                          aria-pressed={isSelected}
                          className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 font-mono text-xs transition-colors ${
                            isSelected
                              ? 'border border-[#2563EB] bg-[#2563EB] text-white'
                              : tech.usage === 'exploring'
                                ? 'border border-dashed border-[#63B3FA]/60 bg-[#63B3FA]/10 text-slate-700 hover:border-[#2563EB] dark:text-[#63B3FA]'
                                : 'border border-slate-200 bg-slate-50 text-slate-700 hover:border-[#2563EB] dark:border-slate-700 dark:bg-[#080F1E] dark:text-[#F1F5F9]'
                          }`}
                        >
                          <TechLogo name={tech.name} className="h-3.5 w-3.5 shrink-0" />
                          <span>{tech.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right: Interactive Player / Tech Inspector */}
              <aside className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-4 dark:border-slate-800 dark:bg-[#14243D]/80">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#2563EB]/40 bg-[#2563EB]/10 px-2.5 py-1 font-mono text-xs font-semibold text-[#2563EB] dark:text-[#63B3FA]">
                      {selectedStarter
                        ? selectedStarter.roleLabel[language]
                        : `${t.benchLabel} · ${activeZone?.positionLabel[language] ?? ''}`}
                    </span>
                    {selectedStarter?.isCaptain && (
                      <span className="inline-flex items-center gap-1 rounded bg-[#A50044] px-2 py-0.5 font-mono text-[10px] font-bold text-white">
                        <Star className="h-3 w-3" aria-hidden="true" />
                        {t.captainLabel}
                      </span>
                    )}
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-[#080F1E]">
                      <TechLogo name={selectedName} className="h-7 w-7" />
                    </div>
                    <div>
                      <h4 className="font-display text-2xl font-bold text-slate-900 dark:text-[#F1F5F9]">
                        {selectedName}
                      </h4>
                      <p className="font-mono text-xs text-slate-500 dark:text-[#94A3B8]">
                        {selectedStarter
                          ? t.professionalLabel
                          : selectedBench?.usage === 'exploring'
                            ? t.exploringLabel
                            : t.professionalLabel}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                    {selectedStarter?.description[language] ??
                      selectedBench?.description[language] ??
                      activeZone?.description[language]}
                  </p>

                  {activeZone && (
                    <div className="mt-6 border-t border-slate-200 pt-4 dark:border-slate-700/70">
                      <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-[#94A3B8]">
                        {activeZone.positionLabel[language]} — {activeZone.title[language]}
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                        {activeZone.description[language]}
                      </p>
                    </div>
                  )}
                </div>

                <p className="mt-6 border-t border-slate-200 pt-4 font-mono text-[11px] text-slate-500 dark:border-slate-700/70 dark:text-[#94A3B8]">
                  {t.selectZoneHint}
                </p>
              </aside>
            </div>
          </div>
        )}

        {/* Conventional Categorized Stack (Name + Logo) */}
        {(viewMode === 'both' || viewMode === 'conventional') && (
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-5 font-mono text-xs">
              <span className="inline-flex items-center gap-2 text-slate-700 dark:text-[#F1F5F9]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#2563EB]" />
                {t.professionalLabel}
              </span>
              <span className="inline-flex items-center gap-2 text-slate-600 dark:text-[#94A3B8]">
                <span className="h-2.5 w-2.5 rounded-full border border-dashed border-[#63B3FA] bg-[#63B3FA]/20" />
                {t.exploringLabel}
              </span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <article
                  key={category.id}
                  className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#14243D]/70"
                >
                  <h3 className="font-display text-base font-semibold text-slate-900 dark:text-[#F1F5F9]">
                    {category.title[language]}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2.5">
                    {category.items.map((item) => (
                      <li
                        key={item.name}
                        title={item.note?.[language]}
                        className={`inline-flex items-center gap-2 rounded-lg px-3 py-1.5 font-mono text-xs ${
                          item.usage === 'professional'
                            ? 'border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#1D4ED8] dark:text-[#F1F5F9]'
                            : 'border border-dashed border-[#63B3FA]/50 bg-[#63B3FA]/10 text-slate-700 dark:text-[#63B3FA]'
                        }`}
                      >
                        <TechLogo name={item.name} className="h-4 w-4 shrink-0" />
                        <span>{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
