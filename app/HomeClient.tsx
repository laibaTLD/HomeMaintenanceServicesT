'use client';

import { useWebBuilder } from '@/app/providers/WebBuilderProvider';
import { Page } from '@/app/lib/types';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { HeroSection } from '@/app/components/sections/HeroSection';
import { AboutSection } from '@/app/components/sections/AboutSection';
import { ServicesSection } from '@/app/components/sections/ServicesSection';
import { ServiceHighlightsSection } from '@/app/components/sections/ServiceHighlightsSection';
import { TestimonialsSection } from '@/app/components/sections/TestimonialsSection';
import { FAQSection } from '@/app/components/sections/FAQSection';
import { CTASection } from '@/app/components/sections/CTASection';
import { WhyChooseUsSection } from '@/app/components/sections/WhyChooseUsSection';
import { CompanyDetailSection } from '@/app/components/sections/CompanyDetailSection';
import { ProjectsSection } from '@/app/components/sections/ProjectsSection';
import { ProjectSection } from '@/app/components/sections/ProjectSection';
import { CTA2Section } from '@/app/components/sections/CTA2Section';
import { CTA3Section } from '@/app/components/sections/CTA3Section';
import { ServingAreasSection } from '@/app/components/sections/ServingAreasSection';
import { GallerySection } from '@/app/components/sections/GallerySection';
import { BlogSection } from '@/app/components/sections/BlogSection';
import { ContactSection } from './components/sections/ContactSection';

export default function HomeClient() {
  const { site, pages, testimonials } = useWebBuilder();

  // Get theme colors from site
  const themeColors = {
    primary: site?.theme?.lightPrimaryColor || '#000000',
    secondary: site?.theme?.lightSecondaryColor || '#EF4444',
    accent: site?.theme?.lightPrimaryColor || '#3B82F6',
    // New theme colors
    mainText: site?.theme?.darkPrimaryColor || '#1F2937',
    secondaryText: site?.theme?.darkSecondaryColor || '#6B7280',
    pageBackground: site?.theme?.pageBackgroundColor || '#FFFFFF',
    sectionBackground: site?.theme?.sectionBackgroundColorLight || '#F9FAFB',
    cardBackground: site?.theme?.cardBackgroundColorLight || '#FFFFFF',
    primaryButton: site?.theme?.primaryButtonColorLight || '#3B82F6',
    hoverActive: site?.theme?.hoverActiveColorLight || '#2563EB',
    inactive: site?.theme?.inactiveColorLight || '#9CA3AF',
  };

  // Get theme fonts from site
  const themeFonts = {
    heading: site?.theme?.headingFont,
    body: site?.theme?.bodyFont,
  };

  const homePage = pages.find((p: Page) => p.pageType === 'home');

  // Don't flash empty/error UI while site or home page is still loading
  if (!site || !homePage) {
    return null;
  }

  const displayPage = homePage;

  return (
    <div 
      className="min-h-screen selection:bg-blue-100 selection:text-blue-900"
      style={{ 
        backgroundColor: themeColors.pageBackground,
        fontFamily: themeFonts.body
      }}
    >
      <Header />

      <main>
        <HeroSection hero={displayPage.hero} />

        {/* <ServiceHighlightsSection serviceHighlightsSection={displayPage.serviceHighlightsSection} /> */}

        <AboutSection aboutSection={displayPage.aboutSection} />
        <ServicesSection servicesSection={displayPage.servicesSection} />
        <CTASection ctaSection={displayPage.ctaSection} />

        <WhyChooseUsSection whyChooseUsSection={displayPage.whyChooseUsSection} />
        <CTA3Section cta3Section={displayPage.cta3Section} />
        <CompanyDetailSection companyDetailSection={displayPage.companyDetailSection} />
        <ProjectSection projectSection={displayPage.projectSection} />
        <ProjectsSection projectsSection={displayPage.projectsSection} />
        <CTA2Section cta2Section={displayPage.cta2Section} />
        

        <TestimonialsSection testimonialsSection={displayPage.testimonialsSection || { enabled: true, testimonials: testimonials?.testimonials || [] }} />
        <GallerySection gallerySection={displayPage.gallerySection} />
        <BlogSection blogSection={displayPage.blogSection} />
        <ServingAreasSection />
        <FAQSection faqSection={displayPage.faqSection} />
        <ContactSection contactSection={displayPage.contactSection} />
      </main>
      
      <Footer />
    </div>
  );
}
