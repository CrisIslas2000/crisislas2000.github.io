import { useEffect, useState } from 'react';
import { BrandLogo } from '@/components/shared/BrandLogo';

const BOOT_STEPS = [
  '> init CI.beyond_the_code()',
  '> mounting stack & ring_assets... [OK]',
  '> ready. Build. Learn. Evolve.',
];

/**
 * Pantalla de carga tecnológica + lucha libre (~2s, respeta prefers-reduced-motion).
 */
export function SplashScreen() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });
  const [fading, setFading] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (!visible) return;

    const step1 = window.setTimeout(() => setStepIndex(1), 850);
    const step2 = window.setTimeout(() => setStepIndex(2), 1750);
    const fadeTimer = window.setTimeout(() => setFading(true), 2650);
    const hideTimer = window.setTimeout(() => setVisible(false), 3000);

    return () => {
      window.clearTimeout(step1);
      window.clearTimeout(step2);
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`no-print bg-grid-pattern fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080F1E] transition-opacity duration-350 ${
        fading ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative flex w-full max-w-sm flex-col items-center gap-5 rounded-2xl border border-[#2563EB]/30 bg-[#080F1E]/95 px-7 py-8 text-center shadow-2xl shadow-[#2563EB]/10">
        {/* Minimalist 3-rope Lucha Ring Corner Lines */}
        <div className="flex w-full items-center gap-3">
          <div className="flex flex-1 flex-col gap-1.5">
            <span className="h-[1.5px] w-full bg-[#2563EB]/60" />
            <span className="h-[1.5px] w-full bg-[#F1F5F9]/40" />
            <span className="h-[1.5px] w-full bg-[#A50044]/70" />
          </div>
          <div className="scale-125 px-2">
            <BrandLogo showWordmark={false} />
          </div>
          <div className="flex flex-1 flex-col gap-1.5">
            <span className="h-[1.5px] w-full bg-[#2563EB]/60" />
            <span className="h-[1.5px] w-full bg-[#F1F5F9]/40" />
            <span className="h-[1.5px] w-full bg-[#C8102E]/70" />
          </div>
        </div>

        <p className="font-display text-lg font-bold tracking-tight text-[#F1F5F9]">
          CI<span className="text-[#2563EB]">.</span> — Beyond the Code
        </p>

        {/* Fine progress bar */}
        <div className="h-1 w-full overflow-hidden rounded-full bg-[#14243D]">
          <div className="animate-splash-bar h-full rounded-full bg-gradient-to-r from-[#2563EB] via-[#63B3FA] to-[#A50044]" />
        </div>

        {/* Terminal Boot Sequence */}
        <div className="w-full rounded-xl border border-slate-800 bg-[#050A14] px-3.5 py-2.5 text-left font-mono text-[11px] leading-relaxed">
          {BOOT_STEPS.slice(0, stepIndex + 1).map((line, idx) => (
            <p
              key={line}
              className={idx === stepIndex ? 'text-[#63B3FA]' : 'text-[#94A3B8]'}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
