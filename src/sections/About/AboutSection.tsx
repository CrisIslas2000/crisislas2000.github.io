import { Cpu, ShieldCheck, TrendingUp } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import type { Translations } from '@/i18n/translations';

interface AboutSectionProps {
  t: Translations['about'];
}

const pillarIcons = [Cpu, ShieldCheck, TrendingUp];

export function AboutSection({ t }: AboutSectionProps) {
  return (
    <section
      id="sobre-mi"
      className="border-b border-slate-200/80 py-16 sm:py-24 dark:border-slate-800/80"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={t.eyebrow} title={t.title} subtitle={t.summary} />

        <div className="grid gap-6 md:grid-cols-3">
          {t.pillars.map((pillar, index) => {
            const Icon = pillarIcons[index] ?? Cpu;
            return (
              <article
                key={pillar.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-[#2563EB]/50 dark:border-slate-800 dark:bg-[#14243D]/70 dark:hover:border-[#63B3FA]/40"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563EB]/10 text-[#2563EB] dark:text-[#63B3FA]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-slate-900 dark:text-[#F1F5F9]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
