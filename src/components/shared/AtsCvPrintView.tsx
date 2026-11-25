import type { Translations } from '@/i18n/translations';
import type {
  EducationItem,
  ExperienceItem,
  Language,
  LanguageSkill,
  ProfileData,
  ProjectItem,
  TechCategory,
} from '@/types/portfolio';

interface AtsCvPrintViewProps {
  profile: ProfileData;
  experience: ExperienceItem[];
  techCategories: TechCategory[];
  projects: ProjectItem[];
  education: EducationItem[];
  languages: LanguageSkill[];
  language: Language;
  t: Translations['atsCv'];
}

/**
 * Vista dedicada para exportación PDF / Impresión ATS:
 * Una sola columna, texto 100% seleccionable, sin barras ni elementos deportivos.
 */
export function AtsCvPrintView({
  profile,
  experience,
  techCategories,
  projects,
  education,
  languages,
  language,
  t,
}: AtsCvPrintViewProps) {
  const publishedExp = experience.filter((e) => e.published);
  const publishedProjects = projects.filter((p) => p.published);
  const publishedEdu = education.filter((e) => e.published);
  const publishedLangs = languages.filter((l) => l.published);

  return (
    <article className="print-only hidden bg-white text-slate-900">
      <header className="border-b border-slate-300 pb-4">
        <h1 className="text-2xl font-bold tracking-tight text-slate-950">{profile.name}</h1>
        <p className="mt-1 text-sm font-semibold text-slate-700">{profile.role[language]}</p>
        <p className="mt-1 text-xs text-slate-600">
          {profile.location[language]} · {profile.githubUrl}
          {profile.linkedinUrl ? ` · ${profile.linkedinUrl}` : ''}
          {profile.email ? ` · ${profile.email}` : ''}
        </p>
      </header>

      <section className="mt-4">
        <h2 className="border-b border-slate-200 pb-1 text-sm font-bold uppercase tracking-wider text-slate-900">
          {t.summaryTitle}
        </h2>
        <p className="mt-2 text-xs leading-relaxed text-slate-800">
          {profile.headlineBio[language]}
        </p>
      </section>

      <section className="mt-4">
        <h2 className="border-b border-slate-200 pb-1 text-sm font-bold uppercase tracking-wider text-slate-900">
          {t.techTitle}
        </h2>
        <ul className="mt-2 space-y-1 text-xs text-slate-800">
          {techCategories.map((cat) => (
            <li key={cat.id}>
              <strong>{cat.title[language]}:</strong>{' '}
              {cat.items.map((item) => item.name).join(', ')}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-4">
        <h2 className="border-b border-slate-200 pb-1 text-sm font-bold uppercase tracking-wider text-slate-900">
          {t.experienceTitle}
        </h2>
        {publishedExp.length === 0 ? (
          <p className="mt-2 text-xs text-slate-600">{t.pendingData}</p>
        ) : (
          <div className="mt-2 space-y-3">
            {publishedExp.map((exp) => (
              <div key={exp.id}>
                <p className="text-xs font-bold text-slate-900">
                  {exp.role[language]} — {exp.organization} ({exp.period[language]})
                </p>
                <ul className="mt-1 list-disc pl-4 text-xs text-slate-800">
                  {exp.responsibilities[language].map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                  {exp.achievements[language].map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </section>

      {publishedProjects.length > 0 && (
        <section className="mt-4">
          <h2 className="border-b border-slate-200 pb-1 text-sm font-bold uppercase tracking-wider text-slate-900">
            {t.projectsTitle}
          </h2>
          <ul className="mt-2 space-y-2 text-xs text-slate-800">
            {publishedProjects.map((proj) => (
              <li key={proj.id}>
                <strong>{proj.name[language]}:</strong> {proj.description[language]} (
                {proj.stack.join(', ')})
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-4">
        <h2 className="border-b border-slate-200 pb-1 text-sm font-bold uppercase tracking-wider text-slate-900">
          {t.educationTitle}
        </h2>
        {publishedEdu.length === 0 ? (
          <p className="mt-2 text-xs text-slate-600">{t.pendingData}</p>
        ) : (
          <ul className="mt-2 space-y-1 text-xs text-slate-800">
            {publishedEdu.map((edu) => (
              <li key={edu.id}>
                <strong>{edu.degree[language]}</strong> — {edu.field[language]}, {edu.institution}{' '}
                ({edu.period[language]})
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-4">
        <h2 className="border-b border-slate-200 pb-1 text-sm font-bold uppercase tracking-wider text-slate-900">
          {t.languagesTitle}
        </h2>
        <p className="mt-2 text-xs text-slate-800">
          {publishedLangs
            .map((lang) => `${lang.language[language]} (${lang.level[language]})`)
            .join(' · ')}
        </p>
      </section>
    </article>
  );
}
