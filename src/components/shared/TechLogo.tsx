import { Code2, Cpu, Database, Globe, Server, ShieldCheck, Workflow } from 'lucide-react';

interface TechLogoProps {
  name: string;
  className?: string;
}

/**
 * Renderiza el logotipo SVG minimalista para cada tecnología del stack y la alineación táctica.
 */
export function TechLogo({ name, className = 'h-4 w-4 shrink-0' }: TechLogoProps) {
  const key = name.toLowerCase();

  if (key === 'java') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path
          d="M9 17.5C7 18.2 10.5 19.5 14 19C16.5 18.7 18 17.8 18 17.8M8 14.5C6.5 15.2 9.5 16.3 13.5 16C16.5 15.8 17.5 15 17.5 15M12.5 3C13.8 4.8 10.8 6.5 11.8 8.8C12.5 10.3 14 11 13.2 12.5"
          stroke="#F89820"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path d="M6 21H18" stroke="#5382A1" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (key === 'javascript') {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#F7DF1E" />
        <text
          x="12"
          y="16.5"
          textAnchor="middle"
          fontSize="10"
          fontWeight="800"
          fontFamily="monospace"
          fill="#0F172A"
        >
          JS
        </text>
      </svg>
    );
  }

  if (key === 'typescript') {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#3178C6" />
        <text
          x="12"
          y="16.5"
          textAnchor="middle"
          fontSize="10"
          fontWeight="800"
          fontFamily="monospace"
          fill="#FFFFFF"
        >
          TS
        </text>
      </svg>
    );
  }

  if (key === 'php') {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <ellipse cx="12" cy="12" rx="10" ry="6.5" fill="#777BB4" />
        <text
          x="12"
          y="14.5"
          textAnchor="middle"
          fontSize="7.5"
          fontWeight="800"
          fontFamily="monospace"
          fill="#FFFFFF"
        >
          PHP
        </text>
      </svg>
    );
  }

  if (key === 'html') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M4 3L5.5 19L12 21L18.5 19L20 3H4Z" fill="#E34F26" />
        <path d="M16 7H8L8.4 11H15.5L15 15.5L12 16.5L9 15.5L8.8 13.5" stroke="#FFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (key === 'css') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M4 3L5.5 19L12 21L18.5 19L20 3H4Z" fill="#1572B6" />
        <path d="M8 7H16L15.4 11H9.5M15.4 11L15 15.5L12 16.5L9 15.5" stroke="#FFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (key === 'react') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="#61DAFB" strokeWidth="1.4" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1.4" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" stroke="#61DAFB" strokeWidth="1.4" />
      </svg>
    );
  }

  if (key === 'tailwind css') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path
          d="M12 6C9.3 6 7.7 7.3 7 10C8 8.7 9.2 8.2 10.5 8.5C11.3 8.7 11.8 9.3 12.4 9.9C13.4 10.9 14.5 12 17 12C19.7 12 21.3 10.7 22 8C21 9.3 19.8 9.8 18.5 9.5C17.7 9.3 17.2 8.7 16.6 8.1C15.6 7.1 14.5 6 12 6ZM7 12C4.3 12 2.7 13.3 2 16C3 14.7 4.2 14.2 5.5 14.5C6.3 14.7 6.8 15.3 7.4 15.9C8.4 16.9 9.5 18 12 18C14.7 18 16.3 16.7 17 14C16 15.3 14.8 15.8 13.5 15.5C12.7 15.3 12.2 14.7 11.6 14.1C10.6 13.1 9.5 12 7 12Z"
          fill="#38BDF8"
        />
      </svg>
    );
  }

  if (key === 'bootstrap') {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect x="2" y="3" width="20" height="18" rx="4.5" fill="#7952B3" />
        <text
          x="12"
          y="16.5"
          textAnchor="middle"
          fontSize="12"
          fontWeight="800"
          fontFamily="sans-serif"
          fill="#FFFFFF"
        >
          B
        </text>
      </svg>
    );
  }

  if (key === 'node.js') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M12 2L20.5 7V17L12 22L3.5 17V7L12 2Z" fill="#339933" fillOpacity="0.2" stroke="#339933" strokeWidth="1.8" />
        <path d="M10 15.5V8.5L14.5 15.5V8.5" stroke="#68A063" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (key === 'express') {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="3" fill="#1E293B" stroke="#64748B" strokeWidth="1.2" />
        <text x="12" y="15" textAnchor="middle" fontSize="8.5" fontWeight="700" fontFamily="monospace" fill="#F1F5F9">
          EX
        </text>
      </svg>
    );
  }

  if (key === 'symfony') {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="9.5" fill="#1E293B" stroke="#F1F5F9" strokeWidth="1.4" />
        <text x="12" y="15.5" textAnchor="middle" fontSize="9.5" fontWeight="700" fontFamily="serif" fill="#F1F5F9">
          Sf
        </text>
      </svg>
    );
  }

  if (key === 'spring boot') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M12 2.5L20 7V17L12 21.5L4 17V7L12 2.5Z" stroke="#6DB33F" strokeWidth="1.8" fill="#6DB33F" fillOpacity="0.18" />
        <path d="M12 7.5V12.5M8.8 9.2C7.4 10.8 7.6 13.3 9.2 14.7C10.8 16.1 13.2 16.1 14.8 14.7C16.4 13.3 16.6 10.8 15.2 9.2" stroke="#6DB33F" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (key === 'postgresql' || key === 'mysql' || key === 'mariadb' || key.includes('sql') || key.includes('orm')) {
    const color =
      key === 'postgresql'
        ? '#336791'
        : key === 'mysql'
          ? '#00758F'
          : key === 'mariadb'
            ? '#003545'
            : '#63B3FA';
    return <Database className={className} style={{ color }} aria-hidden="true" />;
  }

  if (key === 'docker' || key === 'docker compose') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <rect x="4" y="10" width="3" height="3" fill="#2496ED" />
        <rect x="8" y="10" width="3" height="3" fill="#2496ED" />
        <rect x="12" y="10" width="3" height="3" fill="#2496ED" />
        <rect x="8" y="6" width="3" height="3" fill="#2496ED" />
        <rect x="12" y="6" width="3" height="3" fill="#2496ED" />
        <path d="M2 14.5H19.5C20.5 14.5 21.5 13.5 22 12.5C20 12 19 13 18.5 14.5C18 18 14 20 9.5 20C5 20 2.5 17.5 2 14.5Z" fill="#2496ED" />
      </svg>
    );
  }

  if (key === 'git') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <rect x="5" y="5" width="14" height="14" rx="2" transform="rotate(45 12 2)" fill="#F05032" />
        <circle cx="12" cy="8.5" r="1.5" fill="#FFF" />
        <circle cx="12" cy="15.5" r="1.5" fill="#FFF" />
        <circle cx="15.5" cy="12" r="1.5" fill="#FFF" />
        <path d="M12 10V14M12 10L14.5 11.5" stroke="#FFF" strokeWidth="1.4" />
      </svg>
    );
  }

  if (key === 'github') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-slate-800 dark:text-[#F1F5F9]`} aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.59.69.49A10.22 10.22 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
      </svg>
    );
  }

  if (key === 'linux' || key === 'rocky linux') {
    return <Server className={`${className} text-emerald-500`} aria-hidden="true" />;
  }

  if (key === 'nginx') {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path d="M12 2L20.5 7V17L12 22L3.5 17V7L12 2Z" fill="#009639" />
        <path d="M9 15.5V8.5L15 15.5V8.5" stroke="#FFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (key === 'postman') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="#FF6C37" />
        <path
          d="M8 15L15.5 8.5M15.5 8.5H10.5M15.5 8.5V13.5"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (key === 'pm2' || key === 'pnpm') {
    return <Cpu className={`${className} text-[#63B3FA]`} aria-hidden="true" />;
  }

  if (key === 'n8n') {
    return <Workflow className={`${className} text-[#EA4B71]`} aria-hidden="true" />;
  }

  if (key.includes('api') || key.includes('integración')) {
    return <Globe className={`${className} text-[#63B3FA]`} aria-hidden="true" />;
  }

  if (key.includes('seguridad') || key.includes('validación') || key.includes('mantenibilidad') || key.includes('disponibilidad')) {
    return <ShieldCheck className={`${className} text-[#63B3FA]`} aria-hidden="true" />;
  }

  return <Code2 className={`${className} text-[#63B3FA]`} aria-hidden="true" />;
}
