import { useEffect, useRef, useState } from 'react';
import { Braces, Pencil } from 'lucide-react';
import type { Translations } from '@/i18n/translations';

interface AboutSectionProps {
  t: Translations['about'];
}

export function AboutSection({ t }: AboutSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [typedLength, setTypedLength] = useState(0);
  const [started, setStarted] = useState(false);

  // Local non-persisted editable state for the JSON cards + post-brace note
  const [editablePillars, setEditablePillars] = useState(t.pillars);
  const [postNotes, setPostNotes] = useState<string[]>(['', '', '']);
  const [editingCell, setEditingCell] = useState<{
    idx: number;
    field: 'title' | 'description' | 'note';
  } | null>(null);

  useEffect(() => {
    setEditablePillars(t.pillars);
    setEditingCell(null);
  }, [t.pillars]);

  const fullText = t.summary;

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setTypedLength(fullText.length);
      setStarted(true);
      return;
    }

    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setTypedLength(0);
          setStarted(true);
        } else {
          setStarted(false);
          setTypedLength(0);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [fullText.length]);

  useEffect(() => {
    setTypedLength(0);
  }, [fullText]);

  useEffect(() => {
    if (!started || typedLength >= fullText.length) return;

    const timer = window.setTimeout(() => {
      setTypedLength((prev) => Math.min(prev + 2, fullText.length));
    }, 28);

    return () => window.clearTimeout(timer);
  }, [started, typedLength, fullText.length]);

  const updatePillar = (idx: number, field: 'title' | 'description', value: string) => {
    setEditablePillars((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, [field]: value } : item))
    );
  };

  return (
    <section
      ref={sectionRef}
      id="sobre-mi"
      className="border-b border-slate-200/80 py-16 sm:py-24 dark:border-slate-800/80"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-[#2563EB] dark:text-[#63B3FA]">
            {t.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-[#F1F5F9]">
            {t.title}
          </h2>
          <p className="mt-4 min-h-[5.5rem] font-mono text-sm leading-relaxed text-slate-700 sm:text-base dark:text-[#94A3B8]">
            {fullText.slice(0, typedLength)}
            {typedLength < fullText.length && (
              <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-[#2563EB] align-middle dark:bg-[#63B3FA]" />
            )}
          </p>
        </div>

        {/* Interactive Editable JSON Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {editablePillars.map((pillar, index) => {
            const isEditingTitle =
              editingCell?.idx === index && editingCell.field === 'title';
            const isEditingDesc =
              editingCell?.idx === index && editingCell.field === 'description';

            return (
              <article
                key={t.pillars[index]?.title ?? index}
                className="card-interactive group overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-[#2563EB]/60 dark:border-slate-800 dark:bg-[#0D172B] dark:hover:border-[#63B3FA]/50"
              >
                <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100/80 px-4 py-2.5 dark:border-slate-800 dark:bg-[#14243D]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#C8102E]/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#63B3FA]/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#2563EB]/80" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-slate-600 dark:text-[#63B3FA]">
                    <Braces className="h-3 w-3" aria-hidden="true" />
                    <span>{`pillar_0${index + 1}.json`}</span>
                    <Pencil
                      className="h-2.5 w-2.5 opacity-0 transition-opacity group-hover:opacity-70"
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <div className="p-5 font-mono text-xs leading-relaxed">
                  <p className="text-slate-400 dark:text-slate-500">{'{'}</p>
                  <div className="pl-4">
                    <div>
                      <span className="text-[#2563EB] dark:text-[#63B3FA]">&quot;focus&quot;</span>
                      <span className="text-slate-500">: </span>
                      {isEditingTitle ? (
                        <input
                          type="text"
                          autoFocus
                          value={pillar.title}
                          onChange={(e) => updatePillar(index, 'title', e.target.value)}
                          onBlur={() => setEditingCell(null)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === 'Escape') setEditingCell(null);
                          }}
                          className="w-full rounded border border-[#2563EB] bg-slate-50 px-1.5 py-0.5 font-mono text-xs font-semibold text-slate-900 focus:outline-none dark:bg-[#14243D] dark:text-[#F1F5F9]"
                        />
                      ) : (
                        <button
                          type="button"
                          onClick={() => setEditingCell({ idx: index, field: 'title' })}
                          title="Click para editar"
                          className="cursor-text rounded text-left font-semibold text-slate-900 transition-colors hover:bg-[#2563EB]/10 dark:text-[#F1F5F9]"
                        >
                          &quot;{pillar.title}&quot;
                        </button>
                      )}
                      <span className="text-slate-500">,</span>
                    </div>
                    <div className="mt-2">
                      <span className="text-[#2563EB] dark:text-[#63B3FA]">&quot;detail&quot;</span>
                      <span className="text-slate-500">: </span>
                      {isEditingDesc ? (
                        <textarea
                          autoFocus
                          rows={4}
                          value={pillar.description}
                          onChange={(e) => updatePillar(index, 'description', e.target.value)}
                          onBlur={() => setEditingCell(null)}
                          onKeyDown={(e) => {
                            if (e.key === 'Escape') setEditingCell(null);
                          }}
                          className="mt-1 w-full rounded border border-[#2563EB] bg-slate-50 p-1.5 font-mono text-xs text-slate-800 focus:outline-none dark:bg-[#14243D] dark:text-[#F1F5F9]"
                        />
                      ) : (
                        <button
                          type="button"
                          onClick={() => setEditingCell({ idx: index, field: 'description' })}
                          title="Click para editar"
                          className="cursor-text rounded text-left text-slate-600 transition-colors hover:bg-[#2563EB]/10 dark:text-[#94A3B8]"
                        >
                          &quot;{pillar.description}&quot;
                        </button>
                      )}
                    </div>
                  </div>
                  <p className="text-slate-400 dark:text-slate-500">{'}'}</p>

                  {/* Editable line after closing brace } */}
                  <div className="mt-2 border-t border-slate-200/70 pt-2 dark:border-slate-800">
                    {editingCell?.idx === index && editingCell.field === 'note' ? (
                      <input
                        type="text"
                        autoFocus
                        placeholder="// escribe aquí..."
                        value={postNotes[index] ?? ''}
                        onChange={(e) =>
                          setPostNotes((prev) =>
                            prev.map((val, i) => (i === index ? e.target.value : val))
                          )
                        }
                        onBlur={() => setEditingCell(null)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === 'Escape') setEditingCell(null);
                        }}
                        className="w-full rounded border border-[#2563EB] bg-slate-50 px-1.5 py-0.5 font-mono text-[11px] text-slate-800 focus:outline-none dark:bg-[#14243D] dark:text-[#63B3FA]"
                      />
                    ) : (
                      <button
                        type="button"
                        onClick={() => setEditingCell({ idx: index, field: 'note' })}
                        className="w-full cursor-text rounded px-1 py-0.5 text-left font-mono text-[11px] text-slate-400 transition-colors hover:bg-[#2563EB]/10 hover:text-[#2563EB] dark:text-slate-500 dark:hover:text-[#63B3FA]"
                      >
                        {postNotes[index]
                          ? `// ${postNotes[index]}`
                          : '// + clic para escribir nota libre...'}
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
