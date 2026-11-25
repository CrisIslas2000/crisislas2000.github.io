import { Briefcase } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import type { Translations } from '@/i18n/translations';
import type { ExperienceItem, Language } from '@/types/portfolio';

interface ExperienceSectionProps {
  items: ExperienceItem[];
  language: Language;
  t: Translations['experience'];
}

export function ExperienceSection({ items, language, t }: ExperienceSectionProps) {
  const publishedItems = items.filter((item) => item.published);

  return (
    <section
      id="experiencia"
      className="border-b border-slate-200/80 py-20 sm:py-28 dark:border-slate-800/80"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

        {publishedItems.length === 0 ? (
          <div className="flex max-w-3xl items-start gap-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 p-8 sm:p-10 dark:border-slate-700/80 dark:bg-[#14243D]/40">
            <Briefcase
              className="mt-0.5 h-5 w-5 shrink-0 text-[#2563EB] dark:text-[#63B3FA]"
              aria-hidden="true"
            />
            <p className="text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
              {t.emptyNotice}
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {publishedItems.map((item) => (
              <div
                key={item.id}
                className="grid gap-4 sm:grid-cols-12 sm:items-start"
              >
                {/* Left Period Column (Propuesta A) */}
                <div className="pt-1 font-mono text-xs text-slate-500 sm:col-span-3 sm:text-right sm:pr-6 dark:text-[#94A3B8]">
                  {item.period[language]}
                </div>

                {/* Right Timeline Card */}
                <div className="relative border-l border-slate-300 pl-6 sm:col-span-9 dark:border-[#2563EB]/40">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-[#2563EB] ring-4 ring-[#2563EB]/20"
                  />
                  <div className="card-interactive rounded-xl border border-slate-200 bg-white p-5 hover:border-[#2563EB]/50 dark:border-slate-800 dark:bg-[#14243D]/60 dark:hover:border-[#63B3FA]/40">
                    <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-[#F1F5F9]">
                      {item.role[language]} —{' '}
                      <span className="text-[#2563EB] dark:text-[#63B3FA]">
                        {item.organization}
                      </span>
                    </h3>

                    {item.responsibilities[language].length > 0 && (
                      <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-slate-600 dark:text-[#94A3B8]">
                        {item.responsibilities[language].map((resp) => (
                          <li key={resp}>{resp}</li>
                        ))}
                      </ul>
                    )}

                    {item.achievements[language].length > 0 && (
                      <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-600 dark:text-[#94A3B8]">
                        {item.achievements[language].map((ach) => (
                          <li key={ach}>{ach}</li>
                        ))}
                      </ul>
                    )}

                    {item.technologies.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-xs text-slate-700 dark:border-slate-700 dark:bg-[#080F1E] dark:text-[#F1F5F9]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
