import type { CertificationItem, EducationItem, LanguageSkill } from '@/types/portfolio';

export const educationItems: EducationItem[] = [
  {
    id: 'edu-uaeh',
    published: true,
    institution: 'Universidad Autónoma del Estado de Hidalgo (UAEH)',
    degree: {
      es: 'Licenciatura',
      en: "Bachelor's Degree",
    },
    field: {
      es: 'Ciencias Computacionales',
      en: 'Computer Science',
    },
    period: {
      es: '2018 — 2022',
      en: '2018 — 2022',
    },
    status: {
      es: 'Egresado',
      en: 'Graduated',
    },
  },
  {
    id: 'edu-cbtis222',
    published: true,
    institution: 'Centro de Bachillerato Tecnológico industrial y de servicios No. 222 (CBTis 222)',
    degree: {
      es: 'Carrera Técnica',
      en: 'Technical Degree',
    },
    field: {
      es: 'Técnico en Programación',
      en: 'Programming Technician',
    },
    period: {
      es: '2015 — 2018',
      en: '2015 — 2018',
    },
    status: {
      es: 'Concluido',
      en: 'Completed',
    },
  },
];

export const certificationItems: CertificationItem[] = [];

export const languageSkills: LanguageSkill[] = [
  {
    id: 'lang-es',
    published: true,
    language: {
      es: 'Español',
      en: 'Spanish',
    },
    level: {
      es: 'Nativo',
      en: 'Native',
    },
  },
  {
    id: 'lang-en',
    published: true,
    language: {
      es: 'Inglés',
      en: 'English',
    },
    level: {
      es: 'B1 (Intermedio)',
      en: 'B1 (Intermediate)',
    },
  },
];
