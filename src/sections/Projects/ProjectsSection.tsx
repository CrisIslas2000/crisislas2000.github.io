import { useState } from 'react';
import { ExternalLink, FolderGit2, Github } from 'lucide-react';
import type { Translations } from '@/i18n/translations';
import type { Language, ProjectCategory, ProjectItem } from '@/types/portfolio';

interface ProjectsSectionProps {
  items: ProjectItem[];
  githubUrl: string;
  language: Language;
  t: Translations['projects'];
}

const CATEGORIES: ProjectCategory[] = [
  'Frontend',
  'Backend',
  'Full Stack',
  'APIs',
  'Infraestructura',
  'Automatización',
];

export function ProjectsSection({ items, githubUrl, language, t }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | ProjectCategory>('ALL');

  const publishedItems = items.filter((item) => item.published);
  const availableCategories = CATEGORIES.filter((cat) =>
    publishedItems.some((item) => item.categories.includes(cat))
  );
  const filteredItems =
    selectedCategory === 'ALL'
      ? publishedItems
      : publishedItems.filter((item) => item.categories.includes(selectedCategory));

  return (
    <section
      id="proyectos"
      className="border-b border-slate-200/80 py-20 sm:py-28 dark:border-slate-800/80"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Propuesta B Header Row: Title Left + Filter Pills Right */}
        <div className="mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-[#2563EB] dark:text-[#63B3FA]">
              {t.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-slate-900 sm:text-4xl dark:text-[#F1F5F9]">
              {t.title}
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-[#94A3B8]">
              {t.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar proyectos">
            <button
              type="button"
              onClick={() => setSelectedCategory('ALL')}
              className={`rounded-full px-3.5 py-1.5 font-mono text-xs font-medium transition-colors ${
                selectedCategory === 'ALL'
                  ? 'bg-[#2563EB] text-white'
                  : 'border border-slate-200 bg-white text-slate-600 hover:border-[#2563EB] dark:border-slate-800 dark:bg-[#14243D] dark:text-[#94A3B8]'
              }`}
            >
              {t.allCategory}
            </button>
            {availableCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-3.5 py-1.5 font-mono text-xs font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#2563EB] text-white'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-[#2563EB] dark:border-slate-800 dark:bg-[#14243D] dark:text-[#94A3B8]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 p-8 sm:flex-row sm:items-center sm:p-10 dark:border-slate-700 dark:bg-[#14243D]/40">
            <div className="flex items-start gap-3">
              <FolderGit2
                className="mt-0.5 h-5 w-5 shrink-0 text-[#2563EB] dark:text-[#63B3FA]"
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                {t.emptyNotice}
              </p>
            </div>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#2563EB] px-4 py-2 text-xs font-semibold text-white hover:bg-[#1D4ED8]"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              <span>GitHub</span>
            </a>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((project, index) => (
              <article
                key={project.id}
                className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-[#2563EB] dark:border-slate-800 dark:bg-[#14243D]/80 dark:hover:border-[#63B3FA]"
              >
                {/* Thin Editorial Sports Top Bar (#2563EB -> #A50044 -> #C8102E) */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-[#2563EB] via-[#A50044] to-[#C8102E]"
                />

                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-[#2563EB] dark:text-[#63B3FA]">
                        {String(index + 1).padStart(2, '0')} // {project.categories[0]}
                      </p>
                      <h3 className="mt-1 font-display text-lg font-bold text-slate-900 dark:text-[#F1F5F9]">
                        {project.name[language]}
                      </h3>
                    </div>
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.name[language]}
                        loading="lazy"
                        className="h-12 w-16 shrink-0 rounded-md border border-slate-700 object-cover"
                      />
                    )}
                  </div>

                  <p className="mt-2.5 text-sm text-slate-600 dark:text-[#94A3B8]">
                    {project.description[language]}
                  </p>

                  <dl className="mt-3 space-y-1.5 border-t border-slate-200 pt-3 text-xs dark:border-slate-800">
                    <div>
                      <dt className="inline font-mono font-semibold text-slate-700 dark:text-[#F1F5F9]">
                        {t.problemLabel}:{' '}
                      </dt>
                      <dd className="inline text-slate-600 dark:text-[#94A3B8]">
                        {project.problemSolved[language]}
                      </dd>
                    </div>
                    <div>
                      <dt className="inline font-mono font-semibold text-slate-700 dark:text-[#F1F5F9]">
                        {t.solutionLabel}:{' '}
                      </dt>
                      <dd className="inline text-slate-600 dark:text-[#94A3B8]">
                        {project.solutionImplemented[language]}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[11px] text-slate-700 dark:border-slate-700 dark:bg-[#080F1E] dark:text-[#F1F5F9]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-[#2563EB] hover:underline dark:text-[#63B3FA]"
                        >
                          <Github className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>{t.codeButton}</span>
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-slate-700 hover:underline dark:text-[#F1F5F9]"
                        >
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>{t.demoButton}</span>
                        </a>
                      )}
                    </div>
                    <span className="font-mono text-[10px] text-slate-500 dark:text-[#94A3B8]">
                      {project.status[language]}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
