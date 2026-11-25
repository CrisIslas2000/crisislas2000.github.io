# CI. — Beyond the Code

Portafolio profesional y currículum vitae interactivo de **Cristian Islas** (`crisislas2000.github.io`).

## Stack del Proyecto
- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS v4
- **Iconos:** Lucide React + SVG vectoriales propios
- **Gestor de paquetes:** `pnpm`
- **Calidad:** ESLint, Prettier, TypeScript strict

## Instalación y Desarrollo Local

```bash
pnpm install
pnpm dev
```

## Validación y Compilación

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Actualización de Contenido
Todo el contenido profesional y personal se encuentra centralizado y tipado en `src/data/`:
- `src/data/profile.ts`: Datos generales, enlaces (GitHub, LinkedIn, correo) y fotografía.
- `src/data/experience.ts`: Experiencia laboral (`published: true` para mostrar públicamente).
- `src/data/techStack.ts`: Stack tecnológico y alineación táctica.
- `src/data/projects.ts`: Proyectos públicos (`published: true` para mostrar públicamente).
- `src/data/education.ts`: Formación académica, certificaciones e idiomas.

## Despliegue en GitHub Pages
El repositorio incluye el workflow `.github/workflows/deploy.yml` con permisos mínimos para compilar y publicar automáticamente la rama `main` en GitHub Pages.
