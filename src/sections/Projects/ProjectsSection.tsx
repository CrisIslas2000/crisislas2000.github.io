import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, FolderGit2, Github, LayoutGrid, Orbit } from 'lucide-react';
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
  const [layoutMode, setLayoutMode] = useState<'roulette' | 'grid'>('roulette');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const publishedItems = items.filter((item) => item.published);
  const availableCategories = CATEGORIES.filter((cat) =>
    publishedItems.some((item) => item.categories.includes(cat))
  );
  const filteredItems =
    selectedCategory === 'ALL'
      ? publishedItems
      : publishedItems.filter((item) => item.categories.includes(selectedCategory));

  const safeIndex =
    filteredItems.length > 0 ? Math.min(activeIndex, filteredItems.length - 1) : 0;

  useEffect(() => {
    if (layoutMode !== 'roulette' || filteredItems.length <= 1 || isPaused) return;
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredItems.length);
    }, 8000);

    return () => window.clearInterval(timer);
  }, [layoutMode, filteredItems.length, isPaused]);

  const handleCategoryChange = (category: 'ALL' | ProjectCategory) => {
    setSelectedCategory(category);
    setActiveIndex(0);
  };

  const handlePrev = () => {
    if (filteredItems.length === 0) return;
    setActiveIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleNext = () => {
    if (filteredItems.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const renderProjectCard = (project: ProjectItem, index: number, isFeatured = false) => (
    <article
      key={project.id}
      className={`card-interactive relative flex flex-col justify-between overflow-hidden rounded-xl border bg-white p-6 transition-all duration-300 hover:scale-[1.03] dark:bg-[#14243D]/85 ${
        isFeatured
          ? 'border-[#2563EB]/60 shadow-xl shadow-[#2563EB]/15 dark:border-[#63B3FA]/60'
          : 'border-slate-200 hover:border-[#2563EB] dark:border-slate-800 dark:hover:border-[#63B3FA]'
      }`}
    >
      {/* Thin Editorial Sports Top Bar */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#2563EB] via-[#A50044] to-[#C8102E]"
      />

      <div>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#2563EB] dark:text-[#63B3FA]">
              {String(index + 1).padStart(2, '0')} // {project.categories.join(' · ')}
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

        <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
          {project.description[language]}
        </p>

        <dl className="mt-4 space-y-2 border-t border-slate-200 pt-3 text-xs dark:border-slate-800">
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
          <div>
            <dt className="inline font-mono font-semibold text-slate-700 dark:text-[#F1F5F9]">
              {t.responsibilityLabel}:{' '}
            </dt>
            <dd className="inline text-slate-600 dark:text-[#94A3B8]">
              {project.responsibility[language]}
            </dd>
          </div>
        </dl>
      </div>

      <div className="mt-5">
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
  );

  return (
    <section
      id="proyectos"
      className="border-b border-slate-200/80 py-20 sm:py-28 dark:border-slate-800/80"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header Row: Title Left + Mode & Filter Pills Right */}
        <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
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

          <div className="flex flex-wrap items-center gap-3">
            {/* Roulette / Grid Switcher */}
            <div
              role="group"
              aria-label="Modo de vista de proyectos"
              className="inline-flex rounded-xl border border-slate-200 bg-slate-100 p-1 dark:border-slate-800 dark:bg-[#14243D]"
            >
              <button
                type="button"
                onClick={() => setLayoutMode('roulette')}
                className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-mono text-xs transition-colors ${
                  layoutMode === 'roulette'
                    ? 'bg-[#2563EB] text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-[#94A3B8] dark:hover:text-[#F1F5F9]'
                }`}
              >
                <Orbit className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{language === 'es' ? 'Ruleta' : 'Carousel'}</span>
              </button>
              <button
                type="button"
                onClick={() => setLayoutMode('grid')}
                className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-mono text-xs transition-colors ${
                  layoutMode === 'grid'
                    ? 'bg-[#2563EB] text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-[#94A3B8] dark:hover:text-[#F1F5F9]'
                }`}
              >
                <LayoutGrid className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{language === 'es' ? 'Todos' : 'Grid'}</span>
              </button>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar proyectos">
              <button
                type="button"
                onClick={() => handleCategoryChange('ALL')}
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
                  onClick={() => handleCategoryChange(category)}
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
        ) : layoutMode === 'roulette' ? (
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Roulette Carousel Stage (auto-rotates every 8s, pauses on hover) */}
            <div className="grid items-center gap-6 lg:grid-cols-12">
              {/* Prev Card Preview (Desktop) */}
              {filteredItems.length > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="hidden h-full flex-col justify-between rounded-xl border border-slate-200 bg-white/60 p-5 text-left opacity-65 transition-all duration-300 hover:scale-[1.02] hover:border-[#2563EB] hover:opacity-100 lg:col-span-3 lg:flex dark:border-slate-800 dark:bg-[#14243D]/40"
                >
                  <div>
                    <p className="font-mono text-[10px] uppercase text-[#63B3FA]">
                      {String(
                        ((safeIndex - 1 + filteredItems.length) % filteredItems.length) + 1
                      ).padStart(2, '0')}{' '}
                      // PREV
                    </p>
                    <h3 className="mt-2 font-display text-base font-bold text-slate-900 dark:text-[#F1F5F9]">
                      {
                        filteredItems[
                          (safeIndex - 1 + filteredItems.length) % filteredItems.length
                        ]?.name[language]
                      }
                    </h3>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-[#2563EB] dark:text-[#63B3FA]">
                    <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                    <span>{language === 'es' ? 'Anterior' : 'Previous'}</span>
                  </span>
                </button>
              )}

              {/* Active Center Featured Card */}
              <div
                className={
                  filteredItems.length > 1 ? 'lg:col-span-6' : 'mx-auto w-full max-w-2xl lg:col-span-12'
                }
              >
                {renderProjectCard(filteredItems[safeIndex]!, safeIndex, true)}
              </div>

              {/* Next Card Preview (Desktop) */}
              {filteredItems.length > 1 && (
                <button
                  type="button"
                  onClick={handleNext}
                  className="hidden h-full flex-col justify-between rounded-xl border border-slate-200 bg-white/60 p-5 text-left opacity-65 transition-all duration-300 hover:scale-[1.02] hover:border-[#2563EB] hover:opacity-100 lg:col-span-3 lg:flex dark:border-slate-800 dark:bg-[#14243D]/40"
                >
                  <div>
                    <p className="font-mono text-[10px] uppercase text-[#63B3FA]">
                      {String(((safeIndex + 1) % filteredItems.length) + 1).padStart(2, '0')} //
                      NEXT
                    </p>
                    <h3 className="mt-2 font-display text-base font-bold text-slate-900 dark:text-[#F1F5F9]">
                      {filteredItems[(safeIndex + 1) % filteredItems.length]?.name[language]}
                    </h3>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-[#2563EB] dark:text-[#63B3FA]">
                    <span>{language === 'es' ? 'Siguiente' : 'Next'}</span>
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </button>
              )}
            </div>

            {/* Roulette Controls & Dots */}
            {filteredItems.length > 1 && (
              <div className="mt-6 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label={language === 'es' ? 'Proyecto anterior' : 'Previous project'}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 transition-all hover:border-[#2563EB] hover:text-[#2563EB] dark:border-slate-700 dark:bg-[#14243D] dark:text-[#F1F5F9]"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </button>

                <div className="flex items-center gap-2">
                  {filteredItems.map((proj, idx) => (
                    <button
                      key={proj.id}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`${idx + 1}: ${proj.name[language]}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === safeIndex
                          ? 'w-7 bg-[#2563EB] dark:bg-[#63B3FA]'
                          : 'w-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label={language === 'es' ? 'Siguiente proyecto' : 'Next project'}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 transition-all hover:border-[#2563EB] hover:text-[#2563EB] dark:border-slate-700 dark:bg-[#14243D] dark:text-[#F1F5F9]"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((project, index) => renderProjectCard(project, index))}
          </div>
        )}
      </div>
    </section>
  );
}
