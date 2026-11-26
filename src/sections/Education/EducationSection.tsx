import { Award, GraduationCap, Languages } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import type { Translations } from '@/i18n/translations';
import type { CertificationItem, EducationItem, Language, LanguageSkill } from '@/types/portfolio';

interface EducationSectionProps {
  education: EducationItem[];
  certifications: CertificationItem[];
  languages: LanguageSkill[];
  language: Language;
  t: Translations['education'];
}

export function EducationSection({
  education,
  certifications,
  languages,
  language,
  t,
}: EducationSectionProps) {
  const publishedEdu = education.filter((item) => item.published);
  const publishedCerts = certifications.filter((item) => item.published);
  const publishedLangs = languages.filter((item) => item.published);

  return (
    <section
      id="formacion"
      className="border-b border-slate-200/80 py-20 sm:py-28 dark:border-slate-800/80"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={t.eyebrow} title={t.title} />

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Academic Education with playful school-stage hover tilt & badge */}
          <div className="card-interactive group rounded-2xl border border-slate-200 bg-white p-8 hover:border-[#2563EB]/50 lg:col-span-2 dark:border-slate-800 dark:bg-[#14243D]/70 dark:hover:border-[#63B3FA]/40">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <GraduationCap
                  className="h-6 w-6 text-[#2563EB] transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110 dark:text-[#63B3FA]"
                  aria-hidden="true"
                />
                <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-[#F1F5F9]">
                  {t.title}
                </h3>
              </div>
              <span className="rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 px-3 py-0.5 font-mono text-[11px] text-[#2563EB] transition-transform duration-300 group-hover:scale-105 dark:text-[#63B3FA]">
                2015 → 2022 · {language === 'es' ? 'Etapa escolar' : 'Academic journey'}
              </span>
            </div>

            {publishedEdu.length === 0 ? (
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                {t.pendingNotice}
              </p>
            ) : (
              <ul className="mt-5 space-y-4">
                {publishedEdu.map((edu, idx) => (
                  <li
                    key={edu.id}
                    className="group/edu relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:rotate-[-0.5deg] hover:border-[#2563EB]/60 hover:shadow-md dark:border-slate-700/80 dark:bg-[#080F1E] dark:hover:border-[#63B3FA]/60"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="font-display text-base font-semibold text-slate-900 dark:text-[#F1F5F9]">
                        {edu.degree[language]} — {edu.field[language]}
                      </p>
                      <span className="font-mono text-xs text-slate-500 dark:text-[#94A3B8]">
                        {edu.period[language]}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-[#2563EB] dark:text-[#63B3FA]">
                      {edu.institution}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-mono text-xs text-slate-600 dark:text-[#94A3B8]">
                        {edu.status[language]}
                      </span>
                      <span className="font-mono text-[10px] text-[#63B3FA] opacity-0 transition-opacity duration-300 group-hover/edu:opacity-100">
                        {idx === 0
                          ? language === 'es'
                            ? '🎓 Nivel Superior'
                            : '🎓 University'
                          : language === 'es'
                            ? '💻 Donde empezó el código'
                            : '💻 Where code began'}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {publishedCerts.length > 0 && (
              <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-700/70">
                <div className="flex items-center gap-2.5">
                  <Award className="h-5 w-5 text-[#2563EB] dark:text-[#63B3FA]" aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-[#F1F5F9]">
                    {t.certificationsTitle}
                  </h3>
                </div>

                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {publishedCerts.map((cert) => (
                    <li
                      key={cert.id}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700/80 dark:bg-[#080F1E]"
                    >
                      <p className="font-display text-sm font-semibold text-slate-900 dark:text-[#F1F5F9]">
                        {cert.name[language]}
                      </p>
                      <p className="mt-1 text-xs text-slate-600 dark:text-[#94A3B8]">
                        {cert.issuer} · {cert.date}
                      </p>
                      {cert.verificationUrl && (
                        <a
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-block font-mono text-xs text-[#2563EB] hover:underline dark:text-[#63B3FA]"
                        >
                          {t.verifyLink}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Languages */}
          <aside className="card-interactive rounded-2xl border border-slate-200 bg-white p-8 hover:border-[#2563EB]/50 dark:border-slate-800 dark:bg-[#14243D]/70 dark:hover:border-[#63B3FA]/40">
            <div className="flex items-center gap-2.5">
              <Languages className="h-5 w-5 text-[#2563EB] dark:text-[#63B3FA]" aria-hidden="true" />
              <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-[#F1F5F9]">
                {t.languagesTitle}
              </h3>
            </div>

            <ul className="mt-4 space-y-3">
              {publishedLangs.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-all duration-300 hover:translate-x-1 hover:border-[#2563EB]/50 dark:border-slate-700/80 dark:bg-[#080F1E] dark:hover:border-[#63B3FA]/50"
                >
                  <span className="text-sm font-medium text-slate-900 dark:text-[#F1F5F9]">
                    {item.language[language]}
                  </span>
                  <span className="font-mono text-xs text-[#2563EB] dark:text-[#63B3FA]">
                    {item.level[language]}
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
