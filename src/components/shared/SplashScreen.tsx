import { useEffect, useState } from 'react';
import { BrandLogo } from '@/components/shared/BrandLogo';

const SESSION_KEY = 'ci-splash-seen';

/**
 * Pantalla de carga minimalista (0.9s, una vez por sesión, respeta prefers-reduced-motion).
 */
export function SplashScreen() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return false;
    return window.sessionStorage.getItem(SESSION_KEY) !== '1';
  });
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!visible) return;

    window.sessionStorage.setItem(SESSION_KEY, '1');
    const fadeTimer = window.setTimeout(() => setFading(true), 700);
    const hideTimer = window.setTimeout(() => setVisible(false), 1050);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`no-print fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080F1E] transition-opacity duration-350 ${
        fading ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-5 px-6 text-center">
        <div className="scale-125">
          <BrandLogo />
        </div>

        {/* Fine progress bar with signature gradient (#2563EB -> #A50044) */}
        <div className="h-0.5 w-48 overflow-hidden rounded-full bg-[#14243D]">
          <div className="animate-splash-bar h-full rounded-full bg-gradient-to-r from-[#2563EB] via-[#63B3FA] to-[#A50044]" />
        </div>

        <p className="font-mono text-xs tracking-widest text-[#63B3FA]">
          Build. Learn. Evolve.
        </p>
      </div>
    </div>
  );
}
