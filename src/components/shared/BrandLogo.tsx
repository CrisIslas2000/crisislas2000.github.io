interface BrandLogoProps {
  className?: string;
  showWordmark?: boolean;
}

/**
 * Monograma CI. — Variante 2 ("02 / SPLIT BRIDGE"):
 * Máscara geométrica dividida verticalmente (blanco + azul #2563EB) con iniciales CI. en #63B3FA.
 */
export function BrandLogo({ className = 'h-9 w-auto', showWordmark = true }: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9 shrink-0"
        aria-hidden="true"
      >
        {/* Left Half (Faceted Mask) */}
        <path
          d="M31 8L18 14L13 24C13 39 20 51 31 55V49H25C22.5 49 21 47 21 44.5C21 42 22.5 40 25 40H31V36H27C25 36 24 34.5 24 33C24 31.5 25 30 27 30H31V24L20 19L16 25C16 36 21 46 31 50V8Z"
          className="fill-slate-900 dark:fill-[#F1F5F9]"
        />
        <path
          d="M17 24C17 24 22 25 27 29C24 31 19 30 17 24Z"
          className="fill-[#F8FAFC] dark:fill-[#080F1E]"
        />
        {/* Right Half Top Brow (#2563EB) */}
        <path
          d="M33 8L46 14L51 24C51 35 47 44 41 50L38 47C43 42 46 34 46 25L42 19L33 24V8Z"
          fill="#2563EB"
        />
        <path
          d="M47 24C47 24 42 25 37 29C40 31 45 30 47 24Z"
          className="fill-slate-900 dark:fill-[#F1F5F9]"
        />
        {/* Lower Right "CI." (#63B3FA) */}
        <path d="M34 34H40V37H37V43H40V46H34V34Z" fill="#63B3FA" />
        <rect x="42" y="34" width="3.5" height="12" fill="#63B3FA" />
        <rect x="47.5" y="42.5" width="3.5" height="3.5" fill="#63B3FA" />
        <path d="M33 55C37 53.5 40.5 51.5 43 49L40 46.5C38 48.5 35.5 50 33 51V55Z" fill="#2563EB" />
      </svg>
      {showWordmark && (
        <span className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-[#F1F5F9]">
          CI<span className="text-[#2563EB]">.</span>
        </span>
      )}
    </span>
  );
}
