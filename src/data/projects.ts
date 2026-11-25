import type { ProjectItem } from '@/types/portfolio';

export const projectItems: ProjectItem[] = [
  {
    id: 'proj-n8n-integration',
    published: true,
    name: {
      es: 'Integración n8n: Sistema de Correspondencia (Relacional) y Domino Lotus (No Relacional)',
      en: 'n8n Integration: Correspondence System (Relational) & Domino Lotus (Non-Relational)',
    },
    description: {
      es: 'Flujos de automatización e interoperabilidad con n8n para conectar un sistema interno de correspondencia y trámites (base de datos relacional) con Domino Lotus (modelo no relacional).',
      en: 'Automation and interoperability workflows using n8n to connect an internal correspondence and procedures system (relational database) with Domino Lotus (non-relational model).',
    },
    problemSolved: {
      es: 'Necesidad de comunicar e intercambiar información entre un desarrollo propio en Domino Lotus (no relacional) y el sistema interno de correspondencia y trámites (relacional).',
      en: 'Need to bridge and synchronize data between a custom Domino Lotus platform (non-relational) and an internal correspondence and procedures system (relational).',
    },
    solutionImplemented: {
      es: 'Orquestación de flujos en n8n y consumo de REST APIs para transformar y sincronizar datos entre el modelo relacional y el no relacional.',
      en: 'Workflow orchestration in n8n and REST API integration to transform and synchronize data between relational and non-relational models.',
    },
    responsibility: {
      es: 'Diseño, mapeo de datos e implementación de los flujos de integración con n8n.',
      en: 'Design, data mapping, and implementation of n8n integration workflows.',
    },
    stack: ['n8n', 'REST APIs', 'Domino Lotus', 'Base de datos relacional', 'Integración entre sistemas'],
    categories: ['Automatización', 'APIs', 'Backend'],
    status: {
      es: 'Integración implementada',
      en: 'Implemented integration',
    },
  },
  {
    id: 'proj-apoyos-sociales',
    published: true,
    name: {
      es: 'Sistema de Registro para Apoyos Sociales',
      en: 'Social Support Registration System',
    },
    description: {
      es: 'Sistema web para registro, validación y seguimiento de solicitantes con generación de expedientes digitales en tiempo real y reportes administrativos.',
      en: 'Web platform for applicant registration, validation, and tracking with real-time digital records and administrative reporting.',
    },
    problemSolved: {
      es: 'Errores de captura manual y necesidad de procesar alto volumen diario de registros con validación de identidad.',
      en: 'Manual data-entry errors and high daily registration volume requiring identity validation.',
    },
    solutionImplemented: {
      es: 'OCR para lectura de CURP y validación automática de nombre, fecha de nacimiento, estado, género y edad, soportando ~80,000 registros diarios y cerca de 400,000 solicitantes.',
      en: 'OCR for CURP reading and automatic validation of personal data, supporting ~80,000 daily records and nearly 400,000 applicants.',
    },
    responsibility: {
      es: 'Implementación de OCR, validaciones automáticas, expedientes digitales y reportes administrativos.',
      en: 'Implementation of OCR, automated validations, digital records, and administrative reports.',
    },
    stack: ['React', 'Node.js', 'REST APIs', 'PostgreSQL', 'OCR'],
    categories: ['Full Stack', 'Backend', 'APIs'],
    status: {
      es: 'Producción institucional',
      en: 'Institutional production',
    },
  },
  {
    id: 'proj-gestion-requerimientos',
    published: true,
    name: {
      es: 'Sistema de Gestión de Requerimientos',
      en: 'Requirements Management System',
    },
    description: {
      es: 'Plataforma para registrar, validar, organizar y dar seguimiento a requerimientos internos de desarrollo.',
      en: 'Platform to register, validate, organize, and track internal software development requirements.',
    },
    problemSolved: {
      es: 'Retrabajo y falta de claridad en la comunicación entre áreas solicitantes y equipo de desarrollo.',
      en: 'Rework and unclear communication between requesting departments and the development team.',
    },
    solutionImplemented: {
      es: 'Expedientes digitales, estructura estandarizada, notificaciones con Firebase Cloud Messaging, logs transaccionales y reportes.',
      en: 'Digital records, standardized structure, Firebase Cloud Messaging notifications, transactional logs, and reporting.',
    },
    responsibility: {
      es: 'Desarrollo de flujos de seguimiento, notificaciones push, logs transaccionales y documentación.',
      en: 'Development of tracking workflows, push notifications, transactional logs, and documentation.',
    },
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Firebase Cloud Messaging'],
    categories: ['Full Stack', 'Backend'],
    status: {
      es: 'Producción institucional',
      en: 'Institutional production',
    },
  },
  {
    id: 'proj-archivo-general',
    published: true,
    name: {
      es: 'Sistema Web para el Archivo General del Estado',
      en: 'State General Archive Web Platform',
    },
    description: {
      es: 'Plataforma para trazabilidad histórica de procesos institucionales relacionados con creación, modificación y eliminación de áreas.',
      en: 'Platform for historical traceability of institutional processes covering creation, modification, and removal of departments.',
    },
    problemSolved: {
      es: 'Tiempos altos de revisión y riesgo de pérdida de evidencia histórica en procesos institucionales.',
      en: 'Long review cycles and risk of losing historical evidence across institutional processes.',
    },
    solutionImplemented: {
      es: 'Línea del tiempo por institución, historial de cambios, expedientes digitales, reportes y carga masiva de información histórica.',
      en: 'Institutional timeline, change history, digital records, reporting, and bulk historical data import.',
    },
    responsibility: {
      es: 'Desarrollo de trazabilidad histórica, carga masiva y generación de reportes.',
      en: 'Development of historical traceability, bulk import, and reporting.',
    },
    stack: ['PHP', 'Symfony', 'PostgreSQL', 'SQL Server', 'REST APIs'],
    categories: ['Full Stack', 'Backend'],
    status: {
      es: 'Producción institucional',
      en: 'Institutional production',
    },
  },
  {
    id: 'proj-auditorias',
    published: true,
    name: {
      es: 'Sistema de Auditorías',
      en: 'Audit Management System',
    },
    description: {
      es: 'Sistema web para registro, validación y seguimiento de proyectos sujetos a revisión con alta seguridad y trazabilidad.',
      en: 'Web system for registering, validating, and tracking audited projects with strong security and traceability.',
    },
    problemSolved: {
      es: 'Procesos manuales lentos y necesidad de mayor seguridad y trazabilidad en revisiones.',
      en: 'Slow manual workflows and need for stronger security and audit traceability.',
    },
    solutionImplemented: {
      es: 'Login con doble factor de autenticación (2FA), OCR para lectura e inserción en BD, cálculos automatizados, generación de oficios e historial de transacciones.',
      en: 'Two-factor authentication (2FA), OCR for database ingestion, automated calculations, official document generation, and transaction logs.',
    },
    responsibility: {
      es: 'Implementación de seguridad 2FA, módulo OCR, automatización de cálculos e historial transaccional.',
      en: 'Implementation of 2FA security, OCR module, automated calculations, and transaction history.',
    },
    stack: ['React', 'Node.js', 'Symfony', 'PostgreSQL', 'OCR', '2FA'],
    categories: ['Full Stack', 'Backend', 'APIs'],
    status: {
      es: 'Producción institucional',
      en: 'Institutional production',
    },
  },
];
