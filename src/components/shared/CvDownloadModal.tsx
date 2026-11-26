import { useEffect, useState } from 'react';
import { CheckCircle2, FileText, X } from 'lucide-react';
import type { Language } from '@/types/portfolio';

interface CvDownloadModalProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
}

function triggerPdfDownload() {
  const link = document.createElement('a');
  link.href = '/documents/CV_Cristian_Islas-v2.pdf';
  link.download = 'CV_Cristian_Islas.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function CvDownloadModal({ isOpen, language, onClose }: CvDownloadModalProps) {
  const [status, setStatus] = useState<'preparing' | 'done'>('preparing');

  useEffect(() => {
    if (!isOpen) {
      setStatus('preparing');
      return;
    }

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      triggerPdfDownload();
      setStatus('done');
      const quickClose = window.setTimeout(onClose, 800);
      return () => window.clearTimeout(quickClose);
    }

    setStatus('preparing');
    const downloadTimer = window.setTimeout(() => {
      triggerPdfDownload();
      setStatus('done');
    }, 1100);

    const closeTimer = window.setTimeout(() => {
      onClose();
    }, 2200);

    return () => {
      window.clearTimeout(downloadTimer);
      window.clearTimeout(closeTimer);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={language === 'es' ? 'Descargando CV' : 'Downloading CV'}
      onClick={onClose}
      className="no-print fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-xs"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-roulette-slide relative w-full max-w-sm rounded-2xl border border-[#2563EB]/50 bg-white p-6 shadow-2xl dark:bg-[#0D172B]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={language === 'es' ? 'Cerrar' : 'Close'}
          className="absolute right-4 top-4 rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-[#14243D] dark:hover:text-[#F1F5F9]"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563EB]/15 text-[#2563EB] dark:text-[#63B3FA]">
            {status === 'done' ? (
              <CheckCircle2 className="h-5 w-5 text-emerald-500" aria-hidden="true" />
            ) : (
              <FileText className="h-5 w-5 animate-pulse" aria-hidden="true" />
            )}
          </div>
          <div>
            <p className="font-display text-base font-bold text-slate-900 dark:text-[#F1F5F9]">
              {status === 'done'
                ? language === 'es'
                  ? '¡CV descargado!'
                  : 'CV downloaded!'
                : language === 'es'
                  ? 'Preparando currículum…'
                  : 'Preparing resume…'}
            </p>
            <p className="font-mono text-[11px] text-slate-500 dark:text-[#94A3B8]">
              CV_Cristian_Islas.pdf
            </p>
          </div>
        </div>

        {/* Mini ATS Document Skeleton Preview */}
        <div
          aria-hidden="true"
          className="mt-5 space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-[#080F1E]"
        >
          <div className="h-2.5 w-1/2 animate-pulse rounded bg-[#2563EB]/40" />
          <div className="h-2 w-full animate-pulse rounded bg-slate-200 dark:bg-[#14243D]" />
          <div className="h-2 w-5/6 animate-pulse rounded bg-slate-200 dark:bg-[#14243D]" />
          <div className="h-2 w-2/3 animate-pulse rounded bg-slate-200 dark:bg-[#14243D]" />
        </div>

        {/* Progress Bar */}
        <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-[#14243D]">
          <div
            className={`h-full rounded-full bg-gradient-to-r from-[#2563EB] via-[#63B3FA] to-[#A50044] transition-all duration-1000 ease-out ${
              status === 'done' ? 'w-full' : 'w-3/4'
            }`}
          />
        </div>
      </div>
    </div>
  );
}
