import { useEffect, useRef, useState } from 'react';
import { Braces } from 'lucide-react';
import type { Translations } from '@/i18n/translations';

interface AboutSectionProps {
  t: Translations['about'];
}

export function AboutSection({ t }: AboutSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [typedLength, setTypedLength] = useState(0);
  const [started, setStarted] = useState(false);

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
      setTypedLength((prev) => Math.min(prev + 4, fullText.length));
    }, 16);

    return () => window.clearTimeout(timer);
  }, [started, typedLength, fullText.length]);

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

        {/* JSON / Developer Module Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {t.pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="card-interactive group overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-[#2563EB]/60 dark:border-slate-800 dark:bg-[#0D172B] dark:hover:border-[#63B3FA]/50"
            >
              {/* Mini Code Editor Tab Header */}
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100/80 px-4 py-2.5 dark:border-slate-800 dark:bg-[#14243D]">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#C8102E]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#63B3FA]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#2563EB]/80" />
                </div>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-slate-600 dark:text-[#63B3FA]">
                  <Braces className="h-3 w-3" aria-hidden="true" />
                  <span>{`pillar_0${index + 1}.json`}</span>
                </span>
              </div>

              {/* JSON Body */}
              <div className="p-5 font-mono text-xs leading-relaxed">
                <p className="text-slate-400 dark:text-slate-500">{'{'}</p>
                <div className="pl-4">
                  <p>
                    <span className="text-[#2563EB] dark:text-[#63B3FA]">&quot;focus&quot;</span>
                    <span className="text-slate-500">: </span>
                    <span className="font-semibold text-slate-900 dark:text-[#F1F5F9]">
                      &quot;{pillar.title}&quot;
                    </span>
                    <span className="text-slate-500">,</span>
                  </p>
                  <p className="mt-2">
                    <span className="text-[#2563EB] dark:text-[#63B3FA]">&quot;detail&quot;</span>
                    <span className="text-slate-500">: </span>
                    <span className="text-slate-600 dark:text-[#94A3B8]">
                      &quot;{pillar.description}&quot;
                    </span>
                  </p>
                </div>
                <p className="text-slate-400 dark:text-slate-500">{'}'}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
