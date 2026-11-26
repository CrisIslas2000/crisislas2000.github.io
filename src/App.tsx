import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { AtsCvPrintView } from '@/components/shared/AtsCvPrintView';
import { SplashScreen } from '@/components/shared/SplashScreen';
import { certificationItems, educationItems, languageSkills } from '@/data/education';
import { experienceItems } from '@/data/experience';
import { profileData } from '@/data/profile';
import { projectItems } from '@/data/projects';
import { tacticalLineup, techCategories } from '@/data/techStack';
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';
import { translations } from '@/i18n/translations';
import { AboutSection } from '@/sections/About/AboutSection';
import { BeyondCodeSection } from '@/sections/BeyondCode/BeyondCodeSection';
import { ContactSection } from '@/sections/Contact/ContactSection';
import { EducationSection } from '@/sections/Education/EducationSection';
import { ExperienceSection } from '@/sections/Experience/ExperienceSection';
import { HeroSection } from '@/sections/Hero/HeroSection';
import { ProjectsSection } from '@/sections/Projects/ProjectsSection';
import { TechStackSection } from '@/sections/TechStack/TechStackSection';

export function App() {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[language];

  const handleDownloadCv = () => {
    const link = document.createElement('a');
    link.href = '/documents/CV_Cristian_Islas.pdf';
    link.download = 'CV_Cristian_Islas.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-thematic-watermarks min-h-screen bg-[#F8FAFC] text-[#0F172A] transition-colors dark:bg-[#080F1E] dark:text-[#F1F5F9]">
      <SplashScreen />

      {/* Skip to content for keyboard accessibility */}
      <a
        href="#contenido-principal"
        className="no-print sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#2563EB] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {language === 'es' ? 'Saltar al contenido principal' : 'Skip to main content'}
      </a>

      <Navbar
        t={t.nav}
        language={language}
        theme={theme}
        onToggleLanguage={toggleLanguage}
        onToggleTheme={toggleTheme}
        onDownloadCv={handleDownloadCv}
      />

      <main id="contenido-principal" className="no-print">
        <HeroSection
          profile={profileData}
          language={language}
          t={t.hero}
          onDownloadCv={handleDownloadCv}
        />
        <AboutSection t={t.about} />
        <ExperienceSection items={experienceItems} language={language} t={t.experience} />
        <TechStackSection
          categories={techCategories}
          tacticalZones={tacticalLineup}
          language={language}
          t={t.tech}
        />
        <ProjectsSection
          items={projectItems}
          githubUrl={profileData.githubUrl}
          language={language}
          t={t.projects}
        />
        <EducationSection
          education={educationItems}
          certifications={certificationItems}
          languages={languageSkills}
          language={language}
          t={t.education}
        />
        <BeyondCodeSection t={t.beyond} />
        <ContactSection
          profile={profileData}
          language={language}
          t={t.contact}
          onDownloadCv={handleDownloadCv}
        />
      </main>

      <Footer t={t.footer} />

      {/* Dedicated ATS-Friendly Single-Column Printable PDF CV */}
      <AtsCvPrintView
        profile={profileData}
        experience={experienceItems}
        techCategories={techCategories}
        projects={projectItems}
        education={educationItems}
        languages={languageSkills}
        language={language}
        t={t.atsCv}
      />
    </div>
  );
}

export default App;
