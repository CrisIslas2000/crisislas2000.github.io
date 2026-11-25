import type { ExperienceItem } from '@/types/portfolio';

export const experienceItems: ExperienceItem[] = [
  {
    id: 'exp-hidalgo',
    published: true,
    organization: 'Gobierno del Estado de Hidalgo',
    role: {
      es: 'Desarrollador Web',
      en: 'Web Developer',
    },
    period: {
      es: '2024 — Actualidad',
      en: '2024 — Present',
    },
    responsibilities: {
      es: [
        'Desarrollo de sistemas web institucionales con React, Node.js, Express.js, PHP, Symfony, PostgreSQL y SQL Server.',
        'Implementación de arquitectura por capas y patrón Controller-Service-Repository para mejorar mantenibilidad y escalabilidad.',
        'Desarrollo e integración de APIs REST y uso de Sequelize ORM, Drizzle ORM y Doctrine ORM.',
        'Implementación de OCR, validaciones, reglas de negocio, generación de reportes, oficios, expedientes digitales, logs transaccionales, Firebase Cloud Messaging y login con doble factor de autenticación.',
      ],
      en: [
        'Development of institutional web systems with React, Node.js, Express.js, PHP, Symfony, PostgreSQL, and SQL Server.',
        'Implementation of layered architecture and Controller-Service-Repository pattern to improve maintainability and scalability.',
        'Development and integration of REST APIs using Sequelize ORM, Drizzle ORM, and Doctrine ORM.',
        'Implementation of OCR, business rules, digital records, transactional logs, Firebase Cloud Messaging notifications, and two-factor authentication.',
      ],
    },
    achievements: {
      es: [
        'Optimización de tiempos de revisión, reducción de errores de captura y mejora de trazabilidad de información.',
        'Análisis de problemáticas operativas y propuesta de soluciones técnicas aplicando pensamiento crítico y analítico.',
      ],
      en: [
        'Optimized review times, reduced data-entry errors, and improved information traceability.',
        'Analyzed operational bottlenecks and proposed technical solutions with critical and analytical thinking.',
      ],
    },
    technologies: [
      'React',
      'Node.js',
      'Express',
      'PHP',
      'Symfony',
      'PostgreSQL',
      'SQL Server',
      'REST APIs',
      'Firebase Cloud Messaging',
    ],
  },
  {
    id: 'exp-municipio',
    published: true,
    organization: 'Presidencia Municipal',
    role: {
      es: 'Desarrollador Web y Soporte Técnico',
      en: 'Web Developer & Technical Support',
    },
    period: {
      es: '2023 — 2024',
      en: '2023 — 2024',
    },
    responsibilities: {
      es: [
        'Desarrollo, soporte y mantenimiento de sistemas web con PHP, JavaScript, Bootstrap, SQL Server y MySQL.',
        'Diseño y administración de bases de datos relacionales.',
        'Implementación de interfaces responsivas para usuarios internos y externos.',
        'Soporte técnico, atención a usuarios y solución de incidencias operativas.',
      ],
      en: [
        'Development, support, and maintenance of web systems using PHP, JavaScript, Bootstrap, SQL Server, and MySQL.',
        'Design and administration of relational databases.',
        'Implementation of responsive interfaces for internal and external users.',
        'Technical support, user assistance, and resolution of operational incidents.',
      ],
    },
    achievements: {
      es: [],
      en: [],
    },
    technologies: ['PHP', 'JavaScript', 'Bootstrap', 'SQL Server', 'MySQL'],
  },
  {
    id: 'exp-novacorp',
    published: true,
    organization: 'Nova Corp',
    role: {
      es: 'Desarrollador Web',
      en: 'Web Developer',
    },
    period: {
      es: 'Julio 2022 — Noviembre 2022',
      en: 'July 2022 — November 2022',
    },
    responsibilities: {
      es: [
        'Creación, soporte y mantenimiento de páginas web utilizando WordPress, HTML, CSS y JavaScript.',
        'Implementación de ajustes visuales y funcionales en sitios web, apoyando la mejora de interfaces y experiencia de usuario.',
      ],
      en: [
        'Creation, support, and maintenance of websites using WordPress, HTML, CSS, and JavaScript.',
        'Implementation of visual and functional updates, supporting UI and user experience improvements.',
      ],
    },
    achievements: {
      es: [],
      en: [],
    },
    technologies: ['WordPress', 'HTML', 'CSS', 'JavaScript'],
  },
];
