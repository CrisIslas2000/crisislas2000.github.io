import type { Language } from '@/types/portfolio';

export interface Translations {
  nav: {
    home: string;
    about: string;
    experience: string;
    tech: string;
    projects: string;
    education: string;
    contact: string;
    downloadCv: string;
    openMenu: string;
    closeMenu: string;
    toggleTheme: string;
    toggleLang: string;
  };
  hero: {
    badge: string;
    downloadCv: string;
    viewProjects: string;
    portraitAlt: string;
  };
  about: {
    eyebrow: string;
    title: string;
    summary: string;
    pillars: {
      title: string;
      description: string;
    }[];
  };
  experience: {
    eyebrow: string;
    title: string;
    subtitle: string;
    responsibilities: string;
    achievements: string;
    emptyNotice: string;
  };
  tech: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewConventional: string;
    viewTactical: string;
    professionalLabel: string;
    exploringLabel: string;
    tacticalTitle: string;
    tacticalSubtitle: string;
    startersLabel: string;
    benchLabel: string;
    captainLabel: string;
    selectZoneHint: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    allCategory: string;
    problemLabel: string;
    solutionLabel: string;
    responsibilityLabel: string;
    codeButton: string;
    demoButton: string;
    emptyNotice: string;
  };
  education: {
    eyebrow: string;
    title: string;
    certificationsTitle: string;
    languagesTitle: string;
    verifyLink: string;
    pendingNotice: string;
  };
  beyond: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: {
      id: string;
      index: string;
      title: string;
      subtitle: string;
      description: string;
    }[];
    easterEggTrigger: string;
    easterEggTitle: string;
    easterEggText: string;
    easterEggClose: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    locationLabel: string;
    githubLabel: string;
    linkedinLabel: string;
    emailLabel: string;
    pendingField: string;
    downloadCv: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
  atsCv: {
    title: string;
    summaryTitle: string;
    experienceTitle: string;
    techTitle: string;
    projectsTitle: string;
    educationTitle: string;
    languagesTitle: string;
    pendingData: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      experience: 'Experiencia',
      tech: 'Tecnologías',
      projects: 'Proyectos',
      education: 'Formación',
      contact: 'Contacto',
      downloadCv: 'Descargar CV',
      openMenu: 'Abrir menú de navegación',
      closeMenu: 'Cerrar menú de navegación',
      toggleTheme: 'Cambiar tema claro u oscuro',
      toggleLang: 'Cambiar idioma a inglés',
    },
    hero: {
      badge: 'Disponible para colaborar en proyectos de ingeniería',
      downloadCv: 'Descargar CV',
      viewProjects: 'Ver proyectos',
      portraitAlt: 'Retrato profesional de Cristian Islas',
    },
    about: {
      eyebrow: '01 · Perfil profesional',
      title: 'Sobre mí',
      summary:
        'Soy Cristian Islas, desarrollador de software mexicano enfocado en construir sistemas confiables, mantenibles y bien estructurados. Mi trabajo combina desarrollo web, arquitectura backend, integración entre sistemas y administración de bases de datos, con experiencia en entornos de software gubernamental.',
      pillars: [
        {
          title: 'Arquitectura Backend e Integración',
          description:
            'Diseño de REST APIs, comunicación entre sistemas heterogéneos y modelado de datos relacionales con Java (mi lenguaje favorito), PHP y Node.js.',
        },
        {
          title: 'Seguridad y Mantenibilidad',
          description:
            'Código limpio, organizado y pensado para perdurar: control de accesos, integridad de datos y despliegues reproducibles sobre Linux.',
        },
        {
          title: 'Aprendizaje Continuo',
          description:
            'Evolución constante en ecosistemas modernos como Spring Boot y automatización con n8n para resolver problemas reales con mayor precisión.',
        },
      ],
    },
    experience: {
      eyebrow: '02 · Trayectoria',
      title: 'Experiencia profesional',
      subtitle: 'Historial laboral verificable orientado a resultados técnicos y estabilidad operativa.',
      responsibilities: 'Responsabilidades',
      achievements: 'Logros verificables',
      emptyNotice: 'Próximamente más detalles de trayectoria.',
    },
    tech: {
      eyebrow: '03 · Capacidades técnicas',
      title: 'Stack tecnológico',
      subtitle:
        'Distinción transparente entre tecnologías utilizadas en entorno profesional y herramientas actualmente en exploración.',
      viewConventional: 'Vista convencional',
      viewTactical: 'Mi alineación tecnológica',
      professionalLabel: 'Uso profesional',
      exploringLabel: 'En exploración',
      tacticalTitle: 'Mi alineación tecnológica',
      tacticalSubtitle:
        'Formación 4-3-3: los 11 titulares representan mi núcleo principal y la banca reúne las tecnologías complementarias y en exploración.',
      startersLabel: '11 Titulares · Formación 4-3-3',
      benchLabel: 'Banca técnica / Reservas',
      captainLabel: 'Capitán',
      selectZoneHint: 'Haz clic en cualquier titular o reserva para ver su función en el equipo.',
    },
    projects: {
      eyebrow: '04 · Portafolio técnico',
      title: 'Proyectos destacados',
      subtitle: 'Soluciones documentadas por problema resuelto, arquitectura implementada y responsabilidad directa.',
      allCategory: 'Todos',
      problemLabel: 'Problema',
      solutionLabel: 'Solución',
      responsibilityLabel: 'Responsabilidad',
      codeButton: 'Repositorio',
      demoButton: 'Demo',
      emptyNotice:
        'No hay proyectos en esta categoría por el momento. Puedes explorar más en mi GitHub.',
    },
    education: {
      eyebrow: '05 · Preparación',
      title: 'Formación académica',
      certificationsTitle: 'Certificaciones y cursos',
      languagesTitle: 'Idiomas',
      verifyLink: 'Verificar credencial',
      pendingNotice: 'Sin registros adicionales por el momento.',
    },
    beyond: {
      eyebrow: '06 · 20% Identidad personal',
      title: 'Beyond the Code',
      subtitle:
        'Más allá del código: los principios de estrategia, disciplina y carácter que traslado desde mis pasiones hacia la ingeniería de software.',
      cards: [
        {
          id: 'developer',
          index: '01',
          title: 'El desarrollador',
          subtitle: 'Lógica, precisión y oficio',
          description:
            'Pasión por entender cómo funcionan los sistemas por dentro, diseñar arquitecturas limpias y resolver problemas complejos con calma y rigor técnico.',
        },
        {
          id: 'strategist',
          index: '02',
          title: 'El estratega',
          subtitle: 'Fútbol · Visión y juego en equipo',
          description:
            'Inspirado en la lectura de juego, la creatividad táctica y la precisión colectiva del fútbol: cada módulo cumple una función clara para que todo el equipo funcione.',
        },
        {
          id: 'wrestler',
          index: '03',
          title: 'El luchador',
          subtitle: 'Lucha libre · Disciplina y carácter',
          description:
            'Inspirado en la entrega, constancia y resiliencia de la lucha libre: caer, aprender, ajustar la técnica y nunca rendirse ante un reto técnico difícil.',
        },
      ],
      easterEggTrigger: 'Ver aliado en esquina azul',
      easterEggTitle: 'Rincón Azul · Inspiración Kemonito',
      easterEggText:
        'Un pequeño recordatorio de que incluso los sistemas más robustos necesitan carisma, humildad y corazón para salir a dar lo mejor cada día.',
      easterEggClose: 'Cerrar',
    },
    contact: {
      eyebrow: '07 · Hablemos',
      title: 'Contacto',
      subtitle: 'Canales directos para oportunidades profesionales, colaboración técnica o revisión de código.',
      locationLabel: 'Ubicación',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      emailLabel: 'Correo profesional',
      pendingField: 'Por confirmar',
      downloadCv: 'Descargar CV (PDF / ATS)',
    },
    footer: {
      rights: 'Cristian Islas. Todos los derechos reservados.',
      builtWith: 'Construido con React, TypeScript y Tailwind CSS.',
    },
    atsCv: {
      title: 'Currículum Vitae — Formato ATS',
      summaryTitle: 'Perfil Profesional',
      experienceTitle: 'Experiencia Profesional',
      techTitle: 'Tecnologías',
      projectsTitle: 'Proyectos Públicos',
      educationTitle: 'Formación Académica',
      languagesTitle: 'Idiomas',
      pendingData: 'Información en validación / por confirmar.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      tech: 'Tech Stack',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
      downloadCv: 'Download CV',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      toggleTheme: 'Toggle light or dark theme',
      toggleLang: 'Switch language to Spanish',
    },
    hero: {
      badge: 'Open to software engineering collaborations',
      downloadCv: 'Download CV',
      viewProjects: 'View projects',
      portraitAlt: 'Professional portrait of Cristian Islas',
    },
    about: {
      eyebrow: '01 · Professional Profile',
      title: 'About me',
      summary:
        'I am Cristian Islas, a Mexican software developer focused on building reliable, maintainable, and well-structured systems. My work combines web development, backend architecture, system integration, and database management, with experience in government software environments.',
      pillars: [
        {
          title: 'Backend Architecture & Integration',
          description:
            'Designing REST APIs, connecting heterogeneous systems, and modeling relational databases with Java (my favorite language), PHP, and Node.js.',
        },
        {
          title: 'Security & Maintainability',
          description:
            'Clean, organized code built to last: access control, data integrity, and reproducible deployments on Linux servers.',
        },
        {
          title: 'Continuous Learning',
          description:
            'Steady growth in modern ecosystems such as Spring Boot and workflow automation with n8n to solve real-world problems with precision.',
        },
      ],
    },
    experience: {
      eyebrow: '02 · Career',
      title: 'Professional experience',
      subtitle: 'Verifiable work history focused on technical outcomes and operational stability.',
      responsibilities: 'Responsibilities',
      achievements: 'Verifiable achievements',
      emptyNotice: 'More career details coming soon.',
    },
    tech: {
      eyebrow: '03 · Technical Capabilities',
      title: 'Tech stack',
      subtitle:
        'Transparent distinction between technologies used professionally and tools currently being explored.',
      viewConventional: 'Conventional view',
      viewTactical: 'My tech lineup',
      professionalLabel: 'Professional use',
      exploringLabel: 'Exploring',
      tacticalTitle: 'My technological lineup',
      tacticalSubtitle:
        '4-3-3 formation: the starting 11 represent my core strengths, and the bench gathers complementary and exploring technologies.',
      startersLabel: 'Starting 11 · 4-3-3 Formation',
      benchLabel: 'Technical Bench / Reserves',
      captainLabel: 'Captain',
      selectZoneHint: 'Click any starter or reserve to inspect its role on the team.',
    },
    projects: {
      eyebrow: '04 · Technical Portfolio',
      title: 'Featured projects',
      subtitle: 'Solutions documented by problem solved, implemented architecture, and direct ownership.',
      allCategory: 'All',
      problemLabel: 'Problem',
      solutionLabel: 'Solution',
      responsibilityLabel: 'Ownership',
      codeButton: 'Repository',
      demoButton: 'Demo',
      emptyNotice:
        'No projects in this category at the moment. You can explore more on my GitHub.',
    },
    education: {
      eyebrow: '05 · Background',
      title: 'Education',
      certificationsTitle: 'Certifications & Courses',
      languagesTitle: 'Languages',
      verifyLink: 'Verify credential',
      pendingNotice: 'No additional records at the moment.',
    },
    beyond: {
      eyebrow: '06 · 20% Personal Identity',
      title: 'Beyond the Code',
      subtitle:
        'Beyond the code: the principles of strategy, discipline, and character I bring from my passions into software engineering.',
      cards: [
        {
          id: 'developer',
          index: '01',
          title: 'The Developer',
          subtitle: 'Logic, precision & craft',
          description:
            'A passion for understanding systems from the inside out, designing clean architectures, and solving complex problems with calm technical rigor.',
        },
        {
          id: 'strategist',
          index: '02',
          title: 'The Strategist',
          subtitle: 'Football · Vision & teamwork',
          description:
            'Inspired by tactical awareness, creativity, and collective precision in football: every module has a clear role so the whole team performs.',
        },
        {
          id: 'wrestler',
          index: '03',
          title: 'The Wrestler',
          subtitle: 'Lucha Libre · Discipline & grit',
          description:
            'Inspired by the dedication, consistency, and resilience of lucha libre: get back up, refine the technique, and never back down from a tough engineering challenge.',
        },
      ],
      easterEggTrigger: 'Meet the blue corner mascot',
      easterEggTitle: 'Blue Corner · Kemonito-inspired',
      easterEggText:
        'A subtle reminder that even the most robust systems need heart, humility, and charisma to show up at their best every day.',
      easterEggClose: 'Close',
    },
    contact: {
      eyebrow: '07 · Connect',
      title: 'Contact',
      subtitle: 'Direct channels for professional opportunities, technical collaboration, or code review.',
      locationLabel: 'Location',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      emailLabel: 'Professional email',
      pendingField: 'Pending confirmation',
      downloadCv: 'Download CV (PDF / ATS)',
    },
    footer: {
      rights: 'Cristian Islas. All rights reserved.',
      builtWith: 'Built with React, TypeScript, and Tailwind CSS.',
    },
    atsCv: {
      title: 'Curriculum Vitae — ATS Format',
      summaryTitle: 'Professional Summary',
      experienceTitle: 'Professional Experience',
      techTitle: 'Technical Stack',
      projectsTitle: 'Public Projects',
      educationTitle: 'Education',
      languagesTitle: 'Languages',
      pendingData: 'Information pending confirmation.',
    },
  },
};
