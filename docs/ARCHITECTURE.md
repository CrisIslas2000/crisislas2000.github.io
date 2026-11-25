# ARCHITECTURE.md — CI. Beyond the Code

## Stack Técnico
- **Core:** React 19, TypeScript, Vite, Tailwind CSS v4 (`@tailwindcss/vite`).
- **Gestor de paquetes:** `pnpm`.
- **Iconos:** `lucide-react` + componentes SVG propios (`BrandLogo`, `LuchaMascot`).
- **Calidad:** ESLint, Prettier, TypeScript strict (`tsc -b`).
- **Despliegue:** Sitio estático en GitHub Pages (`https://crisislas2000.github.io`) vía GitHub Actions.

## Estructura Modular
- `src/types/` — Contratos TypeScript para perfil, experiencia, stack, proyectos, formación y certificaciones.
- `src/data/` — Fuente única de verdad para contenido profesional y personal. Los campos pendientes se mantienen configurables (`visible: false` o listas vacías) sin inventar datos.
- `src/i18n/` — Traducciones centralizadas (`es` predeterminado, `en` secundario) con persistencia en `localStorage` y actualización de `document.documentElement.lang`.
- `src/hooks/` — `useTheme`, `useLanguage` y `useCvExport` (generación de CV limpio ATS en ventana de impresión / descarga).
- `src/components/` — `layout/` (Navbar, Footer), `shared/` (BrandLogo, SectionHeader, LuchaMascot), `ui/`.
- `src/sections/` — Secciones independientes: `Hero`, `About`, `Experience`, `TechStack`, `TacticalLineup`, `Projects`, `Education`, `Certifications`, `BeyondCode`, `Contact`.
