import type { BenchTech, TacticalPlayer, TacticalZone, TechCategory } from '@/types/portfolio';

export const techCategories: TechCategory[] = [
  {
    id: 'languages',
    title: {
      es: 'Lenguajes',
      en: 'Languages',
    },
    items: [
      {
        name: 'Java',
        usage: 'professional',
        note: { es: 'Lenguaje principal favorito', en: 'Favorite primary language' },
      },
      { name: 'JavaScript', usage: 'professional' },
      { name: 'TypeScript', usage: 'professional' },
      { name: 'PHP', usage: 'professional' },
      { name: 'SQL', usage: 'professional' },
      { name: 'HTML', usage: 'professional' },
      { name: 'CSS', usage: 'professional' },
    ],
  },
  {
    id: 'frontend',
    title: {
      es: 'Frontend',
      en: 'Frontend',
    },
    items: [
      { name: 'React', usage: 'professional' },
      { name: 'Tailwind CSS', usage: 'professional' },
      { name: 'Bootstrap', usage: 'professional' },
    ],
  },
  {
    id: 'backend',
    title: {
      es: 'Backend',
      en: 'Backend',
    },
    items: [
      { name: 'Node.js', usage: 'professional' },
      { name: 'Express', usage: 'professional' },
      { name: 'Symfony', usage: 'professional' },
      { name: 'Laravel', usage: 'professional' },
      { name: 'Spring Boot', usage: 'exploring' },
    ],
  },
  {
    id: 'databases',
    title: {
      es: 'Bases de datos y ORMs',
      en: 'Databases & ORMs',
    },
    items: [
      { name: 'PostgreSQL', usage: 'professional' },
      { name: 'SQL Server', usage: 'professional' },
      { name: 'MySQL', usage: 'professional' },
      { name: 'MariaDB', usage: 'professional' },
      { name: 'Sequelize ORM', usage: 'professional' },
      { name: 'Drizzle ORM', usage: 'professional' },
      { name: 'Doctrine ORM', usage: 'professional' },
    ],
  },
  {
    id: 'infrastructure',
    title: {
      es: 'Infraestructura y herramientas',
      en: 'Infrastructure & Tools',
    },
    items: [
      { name: 'Linux', usage: 'professional' },
      { name: 'Rocky Linux', usage: 'professional' },
      { name: 'Git', usage: 'professional' },
      { name: 'GitHub', usage: 'professional' },
      { name: 'Docker', usage: 'professional' },
      { name: 'Docker Compose', usage: 'professional' },
      { name: 'Nginx', usage: 'professional' },
      { name: 'PM2', usage: 'professional' },
      { name: 'pnpm', usage: 'professional' },
      { name: 'Postman', usage: 'professional' },
    ],
  },
  {
    id: 'integration',
    title: {
      es: 'Integración y automatización',
      en: 'Integration & Automation',
    },
    items: [
      { name: 'REST APIs', usage: 'professional' },
      { name: 'n8n', usage: 'professional' },
      { name: 'Firebase Cloud Messaging', usage: 'professional' },
      { name: 'Integración entre sistemas', usage: 'professional' },
    ],
  },
];

/**
 * 11 Titulares en formación táctica 4-3-3 (Tu ventaja competitiva principal).
 */
export const tacticalStarters: TacticalPlayer[] = [
  // Portería (1)
  {
    id: 'gk-security',
    name: 'REST APIs',
    zone: 'goalkeeper',
    roleLabel: { es: 'Portería · Seguridad e Integridad', en: 'Goalkeeper · Security & Integrity' },
    description: {
      es: 'Primera y última línea de defensa: contratos claros, control de accesos, validación de datos e integración segura entre sistemas.',
      en: 'Last line of defense: clear contracts, access control, data validation, and secure system integration.',
    },
  },
  // Defensa (4)
  {
    id: 'def-linux',
    name: 'Linux',
    zone: 'defense',
    roleLabel: { es: 'Defensa · Sistema Operativo', en: 'Defense · Operating System' },
    description: {
      es: 'Base sólida de servidores en producción, permisos, servicios y estabilidad operativa.',
      en: 'Solid production server foundation, permissions, services, and operational stability.',
    },
  },
  {
    id: 'def-docker',
    name: 'Docker',
    zone: 'defense',
    roleLabel: { es: 'Defensa · Contenedores', en: 'Defense · Containers' },
    description: {
      es: 'Entornos reproducibles y aislados para desplegar servicios sin fricciones.',
      en: 'Reproducible, isolated environments for frictionless service deployments.',
    },
  },
  {
    id: 'def-nginx',
    name: 'Nginx',
    zone: 'defense',
    roleLabel: { es: 'Defensa · Proxy Inverso', en: 'Defense · Reverse Proxy' },
    description: {
      es: 'Enrutamiento seguro, TLS/SSL y balanceo eficiente frente a las aplicaciones.',
      en: 'Secure routing, TLS/SSL termination, and efficient traffic handling.',
    },
  },
  {
    id: 'def-git',
    name: 'Git',
    zone: 'defense',
    roleLabel: { es: 'Defensa · Control de Versiones', en: 'Defense · Version Control' },
    description: {
      es: 'Trazabilidad, ramas ordenadas y trabajo colaborativo disciplinado.',
      en: 'Traceability, clean branching, and disciplined team collaboration.',
    },
  },
  // Mediocampo (3) — Java (Capitán), Node.js, SQL
  {
    id: 'mid-java',
    name: 'Java',
    zone: 'midfield',
    isCaptain: true,
    roleLabel: { es: 'Mediocampo · Capitán & Backend Core', en: 'Midfield · Captain & Backend Core' },
    description: {
      es: 'Mi lenguaje favorito y eje del equipo: tipado fuerte, arquitectura orientada a objetos, mantenibilidad y alto rendimiento.',
      en: 'My favorite language and team playmaker: strong typing, object-oriented architecture, maintainability, and reliability.',
    },
  },
  {
    id: 'mid-node',
    name: 'Node.js',
    zone: 'midfield',
    roleLabel: { es: 'Mediocampo · Servicios y APIs', en: 'Midfield · Services & APIs' },
    description: {
      es: 'Agilidad para construir APIs REST, microservicios e integraciones asíncronas.',
      en: 'Agility to build REST APIs, microservices, and asynchronous integrations.',
    },
  },
  {
    id: 'mid-sql',
    name: 'SQL',
    zone: 'midfield',
    roleLabel: { es: 'Mediocampo · Datos Relacionales', en: 'Midfield · Relational Data' },
    description: {
      es: 'Modelado relacional, consultas optimizadas, transacciones e integridad de datos.',
      en: 'Relational modeling, optimized queries, transactions, and data integrity.',
    },
  },
  // Delantera (3) — React, TypeScript, n8n
  {
    id: 'fwd-react',
    name: 'React',
    zone: 'forward',
    roleLabel: { es: 'Delantera · Interfaces Modernas', en: 'Forward · Modern Interfaces' },
    description: {
      es: 'Componentes reutilizables y experiencias web reactivas enfocadas en el usuario.',
      en: 'Reusable components and reactive user-focused web experiences.',
    },
  },
  {
    id: 'fwd-ts',
    name: 'TypeScript',
    zone: 'forward',
    roleLabel: { es: 'Delantera · Precisión en Frontend', en: 'Forward · Frontend Precision' },
    description: {
      es: 'Contratos tipados de extremo a extremo para evitar errores antes de llegar a producción.',
      en: 'End-to-end typed contracts to catch bugs before production.',
    },
  },
  {
    id: 'fwd-n8n',
    name: 'n8n',
    zone: 'forward',
    roleLabel: { es: 'Delantera · Automatización e Integración', en: 'Forward · Automation & Integration' },
    description: {
      es: 'Orquestación de flujos e integración entre sistemas relacionales y no relacionales.',
      en: 'Workflow orchestration and integration between relational and non-relational systems.',
    },
  },
];

/**
 * Banca Técnica / Reservas Estratégicas (Tecnologías complementarias y en exploración).
 */
export const tacticalBench: BenchTech[] = [
  {
    name: 'PostgreSQL',
    zone: 'midfield',
    usage: 'professional',
    description: {
      es: 'Motor relacional robusto para integridad transaccional y consultas complejas.',
      en: 'Robust relational engine for transactional integrity and complex queries.',
    },
  },
  {
    name: 'PHP',
    zone: 'midfield',
    usage: 'professional',
    description: {
      es: 'Desarrollo y mantenimiento de sistemas web institucionales y APIs.',
      en: 'Development and maintenance of institutional web systems and APIs.',
    },
  },
  {
    name: 'Express',
    zone: 'midfield',
    usage: 'professional',
    description: {
      es: 'Servicios HTTP ligeros y middlewares en Node.js.',
      en: 'Lightweight HTTP services and middlewares on Node.js.',
    },
  },
  {
    name: 'Bootstrap',
    zone: 'forward',
    usage: 'professional',
    description: {
      es: 'Maquetación rápida y responsiva en aplicaciones web.',
      en: 'Fast, responsive layout for web applications.',
    },
  },
  {
    name: 'MySQL',
    zone: 'midfield',
    usage: 'professional',
    description: {
      es: 'Base de datos relacional ampliamente utilizada en aplicaciones web.',
      en: 'Widely used relational database for web applications.',
    },
  },
  {
    name: 'MariaDB',
    zone: 'midfield',
    usage: 'professional',
    description: {
      es: 'Motor relacional compatible con MySQL en servidores Linux.',
      en: 'MySQL-compatible relational engine on Linux servers.',
    },
  },
  {
    name: 'Rocky Linux',
    zone: 'defense',
    usage: 'professional',
    description: {
      es: 'Distribución empresarial estable para servidores de producción.',
      en: 'Enterprise-grade stable distribution for production servers.',
    },
  },
  {
    name: 'Docker Compose',
    zone: 'defense',
    usage: 'professional',
    description: {
      es: 'Orquestación local y multi-contenedor de servicios.',
      en: 'Multi-container service orchestration.',
    },
  },
  {
    name: 'PM2',
    zone: 'defense',
    usage: 'professional',
    description: {
      es: 'Gestión y monitoreo de procesos Node.js en producción.',
      en: 'Process management and monitoring for Node.js in production.',
    },
  },
  {
    name: 'GitHub',
    zone: 'defense',
    usage: 'professional',
    description: {
      es: 'Colaboración, revisión de código y automatización CI/CD.',
      en: 'Collaboration, code review, and CI/CD automation.',
    },
  },
  {
    name: 'pnpm',
    zone: 'defense',
    usage: 'professional',
    description: {
      es: 'Gestor de paquetes rápido y estricto en proyectos frontend/Node.',
      en: 'Fast, strict package manager for frontend/Node projects.',
    },
  },
  {
    name: 'Spring Boot',
    zone: 'midfield',
    usage: 'exploring',
    description: {
      es: 'En exploración para potenciar APIs empresariales sobre Java.',
      en: 'Currently exploring to build enterprise APIs on Java.',
    },
  },
  {
    name: 'Symfony',
    zone: 'midfield',
    usage: 'professional',
    description: {
      es: 'Framework robusto para sistemas empresariales e institucionales estructurados.',
      en: 'Robust framework for structured enterprise and institutional systems.',
    },
  },
  {
    name: 'Tailwind CSS',
    zone: 'forward',
    usage: 'professional',
    description: {
      es: 'Sistemas visuales consistentes, responsivos y limpios sin CSS redundante.',
      en: 'Consistent, responsive, clean design systems without redundant CSS.',
    },
  },
  {
    name: 'Postman',
    zone: 'midfield',
    usage: 'professional',
    description: {
      es: 'Diseño, prueba y documentación de REST APIs, validación de respuestas y manejo de entornos.',
      en: 'REST API testing, request collections, response validation, and environment management.',
    },
  },
];

export const tacticalLineup: TacticalZone[] = [
  {
    id: 'forward',
    code: 'DEL',
    positionLabel: { es: 'Delantera', en: 'Forward' },
    title: {
      es: 'Frontend y Aplicaciones',
      en: 'Frontend & Applications',
    },
    description: {
      es: 'Interfaces claras, responsivas y accesibles donde la estrategia técnica se vuelve tangible para el usuario.',
      en: 'Clear, responsive, accessible interfaces where technical strategy becomes tangible for the user.',
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'JavaScript', 'HTML', 'CSS'],
    accent: 'blue',
  },
  {
    id: 'midfield',
    code: 'MED',
    positionLabel: { es: 'Mediocampo', en: 'Midfield' },
    title: {
      es: 'Backend, APIs y Bases de Datos',
      en: 'Backend, APIs & Databases',
    },
    description: {
      es: 'El motor de distribución: lógica de negocio, integración entre sistemas, REST APIs y persistencia relacional.',
      en: 'The distribution engine: business logic, system integration, REST APIs, and relational persistence.',
    },
    technologies: [
      'Java',
      'Node.js',
      'Symfony',
      'Express',
      'PHP',
      'Spring Boot',
      'n8n',
      'PostgreSQL',
      'MySQL',
      'MariaDB',
    ],
    accent: 'garnet',
  },
  {
    id: 'defense',
    code: 'DEF',
    positionLabel: { es: 'Defensa', en: 'Defense' },
    title: {
      es: 'Infraestructura y Herramientas',
      en: 'Infrastructure & Tools',
    },
    description: {
      es: 'Solidez operativa, despliegue reproducible, servidores Linux y control de versiones ordenado.',
      en: 'Operational solidity, reproducible deployments, Linux servers, and disciplined version control.',
    },
    technologies: [
      'Linux',
      'Docker',
      'Nginx',
      'Git',
      'Rocky Linux',
      'Docker Compose',
      'PM2',
      'GitHub',
      'pnpm',
    ],
    accent: 'red',
  },
  {
    id: 'goalkeeper',
    code: 'POR',
    positionLabel: { es: 'Portería', en: 'Goalkeeper' },
    title: {
      es: 'Seguridad e Integridad',
      en: 'Security & Integrity',
    },
    description: {
      es: 'Última línea de defensa: disponibilidad, control de accesos, validación de datos, mantenibilidad y buenas prácticas.',
      en: 'Last line of defense: availability, access control, data validation, maintainability, and best practices.',
    },
    technologies: ['REST APIs', 'Integración entre sistemas'],
    accent: 'blue',
  },
];
