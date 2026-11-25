interface LuchaMascotProps {
  className?: string;
}

/**
 * Ilustración original minimalista de mascota azul de lucha libre mexicana
 * inspirada conceptualmente en el carisma de Kemonito.
 */
export function LuchaMascot({ className = 'h-16 w-16' }: LuchaMascotProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Aura sutil */}
      <circle cx="40" cy="40" r="36" className="fill-[#2563EB]/15 stroke-[#63B3FA]/40" strokeWidth="1.5" />
      {/* Orejas */}
      <circle cx="19" cy="36" r="6" fill="#2563EB" />
      <circle cx="61" cy="36" r="6" fill="#2563EB" />
      {/* Cabeza / Máscara azul */}
      <path
        d="M40 14C26 14 19 24 19 37C19 52 27 63 40 65C53 63 61 52 61 37C61 24 54 14 40 14Z"
        fill="#2563EB"
      />
      {/* Detalle frontal */}
      <path d="M40 14V27" stroke="#63B3FA" strokeWidth="3" strokeLinecap="round" />
      {/* Antifaz / ojos */}
      <ellipse cx="31" cy="36" rx="6.5" ry="5" fill="#F1F5F9" />
      <ellipse cx="49" cy="36" rx="6.5" ry="5" fill="#F1F5F9" />
      <circle cx="31.5" cy="36" r="2.2" fill="#080F1E" />
      <circle cx="48.5" cy="36" r="2.2" fill="#080F1E" />
      {/* Sonrisa amigable */}
      <path
        d="M34 49C36 52 44 52 46 49"
        stroke="#F1F5F9"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Mini detalle rojo/granate en cuello */}
      <path d="M30 62C34 65 46 65 50 62" stroke="#A50044" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
