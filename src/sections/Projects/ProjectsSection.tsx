import { useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FolderGit2,
  Github,
  LayoutGrid,
  Orbit,
  Pause,
  Play,
  X,
} from 'lucide-react';
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

const ROULETTE_DURATION_MS = 8000;

export function ProjectsSection({ items, githubUrl, language, t }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | ProjectCategory>('ALL');
  const [layoutMode, setLayoutMode] = useState<'roulette' | 'grid'>('roulette');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHoverPaused, setIsHoverPaused] = useState(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const [elapsedMs, setElapsedMs] = useState(0);
  const [modalIndex, setModalIndex] = useState<number | null>(null);

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

  const isPaused = isHoverPaused || isManuallyPaused || modalIndex !== null;

  useEffect(() => {
    if (layoutMode !== 'roulette' || filteredItems.length <= 1 || isPaused) return;
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const timer = window.setInterval(() => {
      setElapsedMs((prev) => {
        const next = prev + 100;
        if (next >= ROULETTE_DURATION_MS) {
          setActiveIndex((idx) => (idx + 1) % filteredItems.length);
          return 0;
        }
        return next;
      });
    }, 100);

    return () => window.clearInterval(timer);
  }, [layoutMode, filteredItems.length, isPaused]);

  useEffect(() => {
    if (modalIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalIndex(null);
      if (e.key === 'ArrowLeft') {
        setModalIndex((prev) =>
          prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
        );
      }
      if (e.key === 'ArrowRight') {
        setModalIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredItems.length
        );
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [modalIndex, filteredItems.length]);

  const remainingPercent = Math.max(0, 100 - (elapsedMs / ROULETTE_DURATION_MS) * 100);
  const remainingSeconds = Math.max(1, Math.ceil((ROULETTE_DURATION_MS - elapsedMs) / 1000));

  const handleCategoryChange = (category: 'ALL' | ProjectCategory) => {
    setSelectedCategory(category);
    setActiveIndex(0);
    setElapsedMs(0);
    setModalIndex(null);
  };

  const handlePrev = () => {
    if (filteredItems.length === 0) return;
    setActiveIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    setElapsedMs(0);
  };

  const handleNext = () => {
    if (filteredItems.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % filteredItems.length);
    setElapsedMs(0);
  };

  const renderBriefCard = (project: ProjectItem, index: number, isFeatured = false) => (
    <article
      key={`${project.id}-${index}`}
      onClick={() => setModalIndex(index)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setModalIndex(index);
        }
      }}
      className={`card-interactive animate-roulette-slide group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-xl border bg-white p-6 transition-all duration-300 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] dark:bg-[#14243D]/85 ${
        isFeatured
          ? 'border-[#2563EB]/60 shadow-xl shadow-[#2563EB]/15 dark:border-[#63B3FA]/60'
          : 'border-slate-200 hover:border-[#2563EB] dark:border-slate-800 dark:hover:border-[#63B3FA]'
      }`}
    >
      {/* Top Countdown Bar */}
      {isFeatured && layoutMode === 'roulette' && filteredItems.length > 1 ? (
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-0 h-1 bg-slate-200 dark:bg-[#080F1E]"
        >
          <div
            className="h-full bg-gradient-to-r from-[#2563EB] via-[#A50044] to-[#C8102E] transition-[width] duration-100 ease-linear"
            style={{ width: `${remainingPercent}%` }}
          />
        </div>
      ) : (
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#2563EB] via-[#A50044] to-[#C8102E]"
        />
      )}

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

        {/* Richer Description + Implemented Solution */}
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
          {project.description[language]}
        </p>
        <p className="mt-2.5 border-l-2 border-[#2563EB]/50 pl-3 text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
          <span className="font-mono font-semibold text-slate-800 dark:text-[#F1F5F9]">
            {t.solutionLabel}:{' '}
          </span>
          {project.solutionImplemented[language]}
        </p>
      </div>

      <div className="mt-5">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[11px] text-slate-700 dark:border-slate-700 dark:bg-[#080F1E] dark:text-[#F1F5F9]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3 dark:border-slate-800">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setModalIndex(index);
            }}
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#2563EB]/10 px-3 py-1 font-mono text-xs font-semibold text-[#2563EB] transition-colors hover:bg-[#2563EB] hover:text-white dark:text-[#63B3FA] dark:hover:bg-[#2563EB] dark:hover:text-white"
          >
            <span>{language === 'es' ? 'Ver más' : 'View more'}</span>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>

          <span className="font-mono text-[10px] text-slate-500 dark:text-[#94A3B8]">
            {isFeatured && layoutMode === 'roulette' && filteredItems.length > 1
              ? `${project.status[language]} · ${isManuallyPaused ? '❚❚' : `${remainingSeconds}s`}`
              : project.status[language]}
          </span>
        </div>
      </div>
    </article>
  );

  const modalProject = modalIndex !== null ? filteredItems[modalIndex] : null;

  return (
    <section
      id="proyectos"
      className="border-b border-slate-200/80 py-20 sm:py-28 dark:border-slate-800/80"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
            onMouseEnter={() => setIsHoverPaused(true)}
            onMouseLeave={() => setIsHoverPaused(false)}
          >
            {/* Roulette Carousel Stage */}
            <div className="grid items-center gap-6 lg:grid-cols-12">
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

              <div
                className={
                  filteredItems.length > 1 ? 'lg:col-span-6' : 'mx-auto w-full max-w-2xl lg:col-span-12'
                }
              >
                {renderBriefCard(filteredItems[safeIndex]!, safeIndex, true)}
              </div>

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

            {/* Roulette Controls + Pause Button */}
            {filteredItems.length > 1 && (
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
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
                      onClick={() => {
                        setActiveIndex(idx);
                        setElapsedMs(0);
                      }}
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

                {/* Manual Pause / Resume Button */}
                <button
                  type="button"
                  onClick={() => setIsManuallyPaused((p) => !p)}
                  aria-pressed={isManuallyPaused}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 font-mono text-xs text-slate-700 transition-colors hover:border-[#2563EB] hover:text-[#2563EB] dark:border-slate-700 dark:bg-[#14243D] dark:text-[#F1F5F9]"
                >
                  {isManuallyPaused ? (
                    <>
                      <Play className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{language === 'es' ? 'Reanudar' : 'Resume'}</span>
                    </>
                  ) : (
                    <>
                      <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{language === 'es' ? 'Pausar' : 'Pause'}</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((project, index) => renderBriefCard(project, index))}
          </div>
        )}
      </div>

      {/* Project Detail Modal with Side Navigation */}
      {modalProject && modalIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={modalProject.name[language]}
          onClick={() => setModalIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-xs"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="animate-roulette-slide relative flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-[#2563EB]/50 bg-white p-6 shadow-2xl sm:p-8 dark:bg-[#0D172B]"
          >
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#2563EB] via-[#A50044] to-[#C8102E]"
            />

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-[#2563EB] dark:text-[#63B3FA]">
                  {String(modalIndex + 1).padStart(2, '0')} // {modalProject.categories.join(' · ')}
                </p>
                <h3 className="mt-1 font-display text-2xl font-bold text-slate-900 dark:text-[#F1F5F9]">
                  {modalProject.name[language]}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setModalIndex(null)}
                aria-label={language === 'es' ? 'Cerrar modal' : 'Close modal'}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:border-[#2563EB] hover:text-[#2563EB] dark:border-slate-700 dark:text-[#94A3B8] dark:hover:text-[#F1F5F9]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
              {modalProject.description[language]}
            </p>

            <dl className="mt-5 space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm dark:border-slate-800 dark:bg-[#080F1E]">
              <div>
                <dt className="font-mono text-xs font-semibold uppercase text-[#2563EB] dark:text-[#63B3FA]">
                  {t.problemLabel}
                </dt>
                <dd className="mt-1 text-slate-700 dark:text-[#94A3B8]">
                  {modalProject.problemSolved[language]}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs font-semibold uppercase text-[#2563EB] dark:text-[#63B3FA]">
                  {t.solutionLabel}
                </dt>
                <dd className="mt-1 text-slate-700 dark:text-[#94A3B8]">
                  {modalProject.solutionImplemented[language]}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs font-semibold uppercase text-[#2563EB] dark:text-[#63B3FA]">
                  {t.responsibilityLabel}
                </dt>
                <dd className="mt-1 text-slate-700 dark:text-[#94A3B8]">
                  {modalProject.responsibility[language]}
                </dd>
              </div>
            </dl>

            <div className="mt-5 flex flex-wrap gap-2">
              {modalProject.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs text-slate-700 dark:border-slate-700 dark:bg-[#14243D] dark:text-[#F1F5F9]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Modal Footer: Links + Side Navigation Arrows */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-4 dark:border-slate-800">
              <div className="flex items-center gap-3">
                {modalProject.githubUrl && (
                  <a
                    href={modalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#2563EB] px-3.5 py-1.5 font-mono text-xs font-semibold text-white hover:bg-[#1D4ED8]"
                  >
                    <Github className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{t.codeButton}</span>
                  </a>
                )}
                {modalProject.demoUrl && (
                  <a
                    href={modalProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3.5 py-1.5 font-mono text-xs font-semibold text-slate-700 dark:border-slate-700 dark:text-[#F1F5F9]"
                  >
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{t.demoButton}</span>
                  </a>
                )}
                <span className="font-mono text-xs text-slate-500 dark:text-[#94A3B8]">
                  {modalProject.status[language]}
                </span>
              </div>

              {filteredItems.length > 1 && (
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setModalIndex(
                        (modalIndex - 1 + filteredItems.length) % filteredItems.length
                      )
                    }
                    aria-label={language === 'es' ? 'Proyecto anterior' : 'Previous project'}
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-300 px-3 py-1.5 font-mono text-xs text-slate-700 hover:border-[#2563EB] hover:text-[#2563EB] dark:border-slate-700 dark:bg-[#14243D] dark:text-[#F1F5F9]"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                    <span>{language === 'es' ? 'Anterior' : 'Prev'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalIndex((modalIndex + 1) % filteredItems.length)}
                    aria-label={language === 'es' ? 'Siguiente proyecto' : 'Next project'}
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-300 px-3 py-1.5 font-mono text-xs text-slate-700 hover:border-[#2563EB] hover:text-[#2563EB] dark:border-slate-700 dark:bg-[#14243D] dark:text-[#F1F5F9]"
                  >
                    <span>{language === 'es' ? 'Siguiente' : 'Next'}</span>
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
