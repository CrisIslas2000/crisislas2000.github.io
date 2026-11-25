interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="font-mono text-xs font-medium uppercase tracking-widest text-[#2563EB] dark:text-[#63B3FA]">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-[#F1F5F9] sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-[#94A3B8]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
