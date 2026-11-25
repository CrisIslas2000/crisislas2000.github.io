import { useEffect, useState } from 'react';
import { BrandLogo } from '@/components/shared/BrandLogo';

const BOOT_STEPS = [
  '> init CI.beyond_the_code()',
  '> mounting stack & ring_assets... [OK]',
  '> ready. Build. Learn. Evolve.',
];

/**
 * Pantalla de carga tecnológica + ring de lucha libre (~3s, respeta prefers-reduced-motion).
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
      className={`no-print bg-grid-pattern fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080F1E] px-4 transition-opacity duration-350 ${
        fading ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative flex w-full max-w-md flex-col items-center gap-4 rounded-2xl border border-[#2563EB]/30 bg-[#080F1E]/95 px-6 py-7 text-center shadow-2xl shadow-[#2563EB]/15">
        {/* Perspective Lucha Libre Ring with CI. Logo in the Center */}
        <div className="relative flex h-44 w-full items-center justify-center">
          <svg
            viewBox="0 0 320 170"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
          >
            {/* Ring Mat (Perspective Trapezoid) */}
            <polygon
              points="55,68 265,68 302,142 18,142"
              fill="#14243D"
              stroke="#2563EB"
              strokeOpacity="0.6"
              strokeWidth="1.8"
            />
            {/* Ring Apron */}
            <polygon
              points="18,142 302,142 296,158 24,158"
              fill="#0D1933"
              stroke="#2563EB"
              strokeOpacity="0.35"
              strokeWidth="1.2"
            />
            {/* Center Ring Circle */}
            <ellipse
              cx="160"
              cy="104"
              rx="42"
              ry="16"
              fill="#080F1E"
              fillOpacity="0.65"
              stroke="#63B3FA"
              strokeOpacity="0.45"
              strokeWidth="1.4"
            />

            {/* Back Ropes (Top, Middle, Bottom) */}
            <line x1="55" y1="26" x2="265" y2="26" stroke="#2563EB" strokeWidth="2" />
            <line x1="55" y1="40" x2="265" y2="40" stroke="#F1F5F9" strokeOpacity="0.7" strokeWidth="1.8" />
            <line x1="55" y1="54" x2="265" y2="54" stroke="#A50044" strokeWidth="2" />

            {/* Left Side Ropes */}
            <line x1="55" y1="26" x2="18" y2="86" stroke="#2563EB" strokeWidth="2" />
            <line x1="55" y1="40" x2="18" y2="104" stroke="#F1F5F9" strokeOpacity="0.7" strokeWidth="1.8" />
            <line x1="55" y1="54" x2="18" y2="122" stroke="#A50044" strokeWidth="2" />

            {/* Right Side Ropes */}
            <line x1="265" y1="26" x2="302" y2="86" stroke="#2563EB" strokeWidth="2" />
            <line x1="265" y1="40" x2="302" y2="104" stroke="#F1F5F9" strokeOpacity="0.7" strokeWidth="1.8" />
            <line x1="265" y1="54" x2="302" y2="122" stroke="#C8102E" strokeWidth="2" />

            {/* 4 Corner Posts & Turnbuckles */}
            {/* Back Left (Blue) */}
            <line x1="55" y1="20" x2="55" y2="68" stroke="#63B3FA" strokeWidth="4" strokeLinecap="round" />
            {/* Back Right (Garnet) */}
            <line x1="265" y1="20" x2="265" y2="68" stroke="#A50044" strokeWidth="4" strokeLinecap="round" />
            {/* Front Left (Blue) */}
            <line x1="18" y1="78" x2="18" y2="142" stroke="#2563EB" strokeWidth="5" strokeLinecap="round" />
            {/* Front Right (Crimson) */}
            <line x1="302" y1="78" x2="302" y2="142" stroke="#C8102E" strokeWidth="5" strokeLinecap="round" />

            {/* Front Ropes (crossing in front with subtle transparency) */}
            <line x1="18" y1="86" x2="302" y2="86" stroke="#2563EB" strokeOpacity="0.75" strokeWidth="2.2" />
            <line x1="18" y1="104" x2="302" y2="104" stroke="#F1F5F9" strokeOpacity="0.55" strokeWidth="2" />
            <line x1="18" y1="122" x2="302" y2="122" stroke="#A50044" strokeOpacity="0.8" strokeWidth="2.2" />
          </svg>

          {/* CI. Logo centered inside the Ring */}
          <div className="absolute top-1/2 -translate-y-1/2 scale-125 rounded-xl bg-[#080F1E]/75 p-1.5 backdrop-blur-xs">
            <BrandLogo showWordmark={false} />
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
