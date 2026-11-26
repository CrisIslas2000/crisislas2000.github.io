# PORTFOLIO_PROFILE — Extracción del Portafolio Web (`https://crisislas2000.github.io/`)

> Documento generado exclusivamente a partir de los archivos de contenido y configuración del repositorio (`src/data/`, `src/i18n/`, `src/styles/`, `docs/`, `index.html`, `package.json` y `public/`).

---

## 1. Nombre completo
- **Confirmado en el portafolio (`src/data/profile.ts`, `index.html`):** Cristian Islas *(marca personal: `CI.`)*.
- **Nota de origen:** En tu CV base figura como Cristian Alan Morales Islas; en el sitio público se muestra como **Cristian Islas**.

## 2. Título profesional
- **Confirmado:** `Software Developer | Full Stack & Backend Engineering`

## 3. Resumen profesional
- **ES (`src/data/profile.ts`):** Desarrollador Web Full Stack con 3 años de experiencia en análisis, desarrollo, mantenimiento y optimización de sistemas web institucionales. Especializado en React, Node.js, Express.js, PHP, Symfony, APIs REST, arquitectura por capas, bases de datos relacionales, ORMs, OCR, logs transaccionales y autenticación con doble factor.
- **EN (`src/data/profile.ts`):** Full Stack Web Developer with 3 years of experience analyzing, building, maintaining, and optimizing institutional web systems. Experienced in React, Node.js, Express.js, PHP, Symfony, REST APIs, layered architecture, relational databases, ORMs, OCR, transactional logs, and two-factor authentication.

## 4. Experiencia laboral, puestos, fechas y responsabilidades (`src/data/experience.ts`)
*(Todos los registros están confirmados y con `published: true`)*

### 1) Gobierno del Estado de Hidalgo — Desarrollador Web
- **Periodo:** `2024 — Actualidad` (`2024 — Present`)
- **Responsabilidades:**
  - Desarrollo de sistemas web institucionales con React, Node.js, Express.js, PHP, Symfony, PostgreSQL y SQL Server.
  - Implementación de arquitectura por capas y patrón Controller-Service-Repository para mejorar mantenibilidad y escalabilidad.
  - Desarrollo e integración de APIs REST y uso de Sequelize ORM, Drizzle ORM y Doctrine ORM.
  - Implementación de OCR, validaciones, reglas de negocio, generación de reportes, oficios, expedientes digitales, logs transaccionales, Firebase Cloud Messaging y login con doble factor de autenticación.
- **Logros:**
  - Optimización de tiempos de revisión, reducción de errores de captura y mejora de trazabilidad de información.
  - Análisis de problemáticas operativas y propuesta de soluciones técnicas aplicando pensamiento crítico y analítico.

### 2) Presidencia Municipal — Desarrollador Web y Soporte Técnico
- **Periodo:** `2023 — 2024`
- **Responsabilidades:**
  - Desarrollo, soporte y mantenimiento de sistemas web con PHP, JavaScript, Bootstrap, SQL Server y MySQL.
  - Diseño y administración de bases de datos relacionales.
  - Implementación de interfaces responsivas para usuarios internos y externos.
  - Soporte técnico, atención a usuarios y solución de incidencias operativas.

### 3) Nova Corp — Desarrollador Web
- **Periodo:** `Julio 2022 — Noviembre 2022` (`July 2022 — November 2022`)
- **Responsabilidades:**
  - Creación, soporte y mantenimiento de páginas web utilizando WordPress, HTML, CSS y JavaScript.
  - Implementación de ajustes visuales y funcionales en sitios web, apoyando la mejora de interfaces y experiencia de usuario.

## 5. Formación académica (`src/data/education.ts`)
*(Confirmada, `published: true`)*
- **Universidad Autónoma del Estado de Hidalgo (UAEH):** Licenciatura en Ciencias Computacionales (`2018 — 2022`, Egresado).
- **Centro de Bachillerato Tecnológico industrial y de servicios No. 222 (CBTis 222):** Carrera Técnica — Técnico en Programación (`2015 — 2018`, Concluido).

## 6. Lenguajes de programación (`src/data/techStack.ts`)
- **Uso profesional confirmado:** Java *(lenguaje principal favorito)*, JavaScript, TypeScript, PHP, SQL, HTML, CSS.

## 7. Frameworks y bibliotecas (`src/data/techStack.ts`)
- **Uso profesional confirmado:**
  - **Frontend:** React, Tailwind CSS, Bootstrap.
  - **Backend:** Node.js, Express, Symfony, Laravel.
- **En exploración:** Spring Boot.

## 8. Bases de datos (`src/data/techStack.ts`)
- **Motores relacionales (uso profesional):** PostgreSQL, SQL Server, MySQL, MariaDB.
- **ORMs (uso profesional):** Sequelize ORM, Drizzle ORM, Doctrine ORM.
- **No relacional (referenciado en proyecto `n8n`):** Domino Lotus.

## 9. Infraestructura y DevOps (`src/data/techStack.ts`, `.github/workflows/deploy.yml`)
- **Uso profesional confirmado:** Linux, Rocky Linux, Docker, Docker Compose, Nginx, PM2, Git, GitHub, GitHub Actions, GitHub Pages.

## 10. Herramientas de desarrollo (`src/data/techStack.ts`)
- **Uso profesional confirmado:** pnpm, Postman, REST APIs, n8n, Firebase Cloud Messaging, Integración entre sistemas.

## 11. Proyectos y sus descripciones (`src/data/projects.ts`)
*(Todos los proyectos están confirmados y con `published: true`)*

1. **Integración n8n entre Sistema de Correspondencia (Relacional) y Domino Lotus (No Relacional)**
   - **Categorías:** `Automatización`, `APIs`, `Backend` | **Estado:** Integración implementada.
   - **Descripción:** Flujos de automatización e interoperabilidad con `n8n` para conectar un sistema interno de correspondencia y trámites (base de datos relacional) con Domino Lotus (modelo no relacional).
   - **Pendiente:** Enlace público a repositorio o demo (no disponible por tratarse de integración institucional).

2. **Sistema de Registro para Apoyos Sociales**
   - **Categorías:** `Full Stack`, `Backend`, `APIs` | **Estado:** Producción institucional.
   - **Descripción:** Sistema web para registro, validación y seguimiento de solicitantes con OCR para lectura de CURP, validación automática, expedientes digitales en tiempo real y reportes administrativos (~80,000 registros diarios y cerca de 400,000 solicitantes).
   - **Stack:** React, Node.js, REST APIs, PostgreSQL, OCR.
   - **Pendiente:** Enlace público a repositorio o demo.

3. **Sistema de Gestión de Requerimientos**
   - **Categorías:** `Full Stack`, `Backend` | **Estado:** Producción institucional.
   - **Descripción:** Plataforma para registrar, validar, organizar y dar seguimiento a requerimientos internos de desarrollo con expedientes digitales, notificaciones mediante Firebase Cloud Messaging, logs transaccionales y reportes.
   - **Stack:** React, Node.js, Express, PostgreSQL, Firebase Cloud Messaging.
   - **Pendiente:** Enlace público a repositorio o demo.

4. **Sistema Web para el Archivo General del Estado**
   - **Categorías:** `Full Stack`, `Backend` | **Estado:** Producción institucional.
   - **Descripción:** Plataforma para trazabilidad histórica de procesos institucionales (creación, modificación y eliminación de áreas), línea del tiempo por institución, historial de cambios, expedientes digitales, reportes y carga masiva.
   - **Stack:** PHP, Symfony, PostgreSQL, SQL Server, REST APIs.
   - **Pendiente:** Enlace público a repositorio o demo.

5. **Sistema de Auditorías**
   - **Categorías:** `Full Stack`, `Backend`, `APIs` | **Estado:** Producción institucional.
   - **Descripción:** Sistema web para registro, validación y seguimiento de proyectos sujetos a revisión con login con doble factor (2FA), OCR para lectura e inserción en BD, cálculos automatizados, generación de oficios e historial de transacciones.
   - **Stack:** React, Node.js, Symfony, PostgreSQL, OCR, 2FA.
   - **Pendiente:** Enlace público a repositorio o demo.

## 12. Certificaciones (`src/data/education.ts`)
- **Estado:** Sin registros (`certificationItems = []`). Confirmado por el autor que por el momento no se incluyen certificaciones o cursos.

## 13. Idiomas (`src/data/education.ts`)
- **Confirmado:**
  - Español — Nativo.
  - Inglés — B1 (Intermedio) *(sin certificación oficial)*.

## 14. Enlaces de contacto públicos (`src/data/profile.ts`, `index.html`)
- **Sitio web:** `https://crisislas2000.github.io/`
- **GitHub:** `https://github.com/CrisIslas2000`
- **LinkedIn:** `https://www.linkedin.com/in/cristian-alan-morales-islas-b8281b262`
- **Correo electrónico:** `crisislas10@gmail.com`
- **Ubicación pública:** México.
- *(No se incluye teléfono ni domicilio por privacidad).*

## 15. Enlace de descarga del CV (`src/App.tsx`, `src/components/shared/AtsCvPrintView.tsx`)
- **Mecanismo actual:** Generación dinámica en navegador mediante vista dedicada imprimible/PDF en formato ATS (`window.print()`).
- **Pendiente:** No existe un archivo `.pdf` estático en `public/documents/` para enlace directo externo en el README de GitHub.

## 16. URL pública de mi fotografía (`index.html`, `src/data/profile.ts`)
- **Confirmado:** `https://crisislas2000.github.io/images/cristian-portrait.jpg`

## 17. Identidad visual (`docs/DESIGN.md`, `src/components/shared/BrandLogo.tsx`, `src/styles/index.css`)
- **Marca:** `CI.` — *Beyond the Code*.
- **Logotipo:** Monograma geométrico minimalista dividido verticalmente inspirado en máscara de lucha libre (`02 / Split Bridge`).
- **Distribución conceptual:** 80% identidad profesional / 20% identidad personal.
- **Tipografías:** `Space Grotesk` (encabezados), `Inter` (contenido general), `JetBrains Mono` (detalles técnicos).
- **Temas:** Modo oscuro (predeterminado) y modo claro.

## 18. Paleta de colores (`docs/DESIGN.md`, `src/styles/index.css`)
- **Tema oscuro:**
  - Fondo principal: `#080F1E`
  - Fondo secundario / superficies: `#14243D`
  - Azul principal: `#2563EB`
  - Azul secundario: `#63B3FA`
  - Granate de acento puntual: `#A50044`
  - Rojo de acento puntual: `#C8102E`
  - Texto principal: `#F1F5F9`
  - Texto secundario: `#94A3B8`
- **Tema claro:**
  - Fondo principal: `#F8FAFC`
  - Superficies: `#FFFFFF` (borde `#E2E8F0`)
  - Azul principal: `#1D4ED8`
  - Texto principal: `#0F172A`
  - Texto secundario: `#475569`

## 19. Intereses personales (`src/i18n/translations.ts`, `src/sections/BeyondCode/BeyondCodeSection.tsx`)
- **Sección *Beyond the Code* (20%):**
  - *El desarrollador:* Lógica, precisión y oficio en arquitectura de software.
  - *El estratega:* Fútbol como metáfora de visión táctica, creatividad y trabajo en equipo *(alineación táctica 4-3-3 + banca técnica)*.
  - *El luchador:* Lucha libre mexicana como metáfora de disciplina, perseverancia y carácter *(incluye easter egg opcional de mascota azul inspirada en Kemonito)*.

## 20. Frases representativas (`src/data/profile.ts`, `src/i18n/translations.ts`)
- `"Más allá del código."` / `"Beyond the code."`
- `"80% Ingeniería · 20% Identidad"`

## 21. Tecnologías utilizadas para construir el portafolio (`package.json`, `vite.config.ts`)
- **Runtime / UI:** React `^19.1.0`, React DOM `^19.1.0`, Lucide React `^0.511.0`.
- **Estilos:** Tailwind CSS `^4.1.7`, `@tailwindcss/vite` `^4.1.7`.
- **Lenguaje y Build:** TypeScript `~5.8.3`, Vite `^8.3.8`, `@vitejs/plugin-react` `^4.4.1`.
- **Calidad y formato:** ESLint `^9.27.0`, `typescript-eslint` `^8.33.0`, Prettier `^3.5.3`.
- **Gestor de paquetes y CI/CD:** `pnpm`, GitHub Actions (`actions/checkout@v4`, `pnpm/action-setup@v4`, `actions/setup-node@v4`, `actions/deploy-pages@v4`).

## 22. Rutas de recursos gráficos reutilizables (`public/`, `src/components/shared/`)
- **Retrato del autor:** `public/images/cristian-portrait.jpg` (URL pública: `https://crisislas2000.github.io/images/cristian-portrait.jpg`).
- **Favicon / Logotipo vectorial `CI.`:** `public/icons/favicon.svg` (URL pública: `https://crisislas2000.github.io/icons/favicon.svg`) y componente `src/components/shared/BrandLogo.tsx`.
- **Mascota azul (SVG):** `src/components/shared/LuchaMascot.tsx`.
- **Iconos SVG de tecnologías:** `src/components/shared/TechLogo.tsx`.
