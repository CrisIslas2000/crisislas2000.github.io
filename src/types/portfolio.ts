export type Language = 'es' | 'en';
export type Theme = 'dark' | 'light';

export interface LocalizedText {
  es: string;
  en: string;
}

export interface ProfileData {
  brand: string;
  name: string;
  nationality: LocalizedText;
  role: LocalizedText;
  tagline: LocalizedText;
  creativeConcept: string;
  headlineBio: LocalizedText;
  location: LocalizedText;
  favoriteLanguage: string;
  portraitSrc: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
}

export interface ExperienceItem {
  id: string;
  published: boolean;
  organization: string;
  role: LocalizedText;
  period: LocalizedText;
  responsibilities: {
    es: string[];
    en: string[];
  };
  achievements: {
    es: string[];
    en: string[];
  };
  technologies: string[];
}

export type TechCategoryId =
  | 'languages'
  | 'frontend'
  | 'backend'
  | 'databases'
  | 'infrastructure'
  | 'integration';

export type TechUsageLevel = 'professional' | 'exploring';

export interface TechItem {
  name: string;
  usage: TechUsageLevel;
  note?: LocalizedText;
}

export interface TechCategory {
  id: TechCategoryId;
  title: LocalizedText;
  items: TechItem[];
}

export type TacticalZoneId = 'goalkeeper' | 'defense' | 'midfield' | 'forward';

export interface TacticalZone {
  id: TacticalZoneId;
  code: string;
  positionLabel: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  technologies: string[];
  accent: 'blue' | 'garnet' | 'red';
}

export interface TacticalPlayer {
  id: string;
  name: string;
  zone: TacticalZoneId;
  roleLabel: LocalizedText;
  description: LocalizedText;
  isCaptain?: boolean;
}

export interface BenchTech {
  name: string;
  zone: TacticalZoneId;
  usage: TechUsageLevel;
  description: LocalizedText;
}

export type ProjectCategory =
  | 'Frontend'
  | 'Backend'
  | 'Full Stack'
  | 'APIs'
  | 'Infraestructura'
  | 'Automatización';

export interface ProjectItem {
  id: string;
  published: boolean;
  name: LocalizedText;
  image?: string;
  description: LocalizedText;
  problemSolved: LocalizedText;
  solutionImplemented: LocalizedText;
  responsibility: LocalizedText;
  stack: string[];
  categories: ProjectCategory[];
  status: LocalizedText;
  githubUrl?: string;
  demoUrl?: string;
}

export interface EducationItem {
  id: string;
  published: boolean;
  institution: string;
  degree: LocalizedText;
  field: LocalizedText;
  period: LocalizedText;
  status: LocalizedText;
  complementary?: LocalizedText;
}

export interface CertificationItem {
  id: string;
  published: boolean;
  name: LocalizedText;
  issuer: string;
  date: string;
  verificationUrl?: string;
}

export interface LanguageSkill {
  id: string;
  published: boolean;
  language: LocalizedText;
  level: LocalizedText;
  certificateNote?: LocalizedText;
}
