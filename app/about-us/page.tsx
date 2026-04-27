'use client';

import { useState, useEffect } from 'react';
import { HeroSection } from '@/app/components/sections/HeroSection';
import { AboutSection } from '@/app/components/sections/AboutSection';
import { WhyChooseUsSection } from '@/app/components/sections/WhyChooseUsSection';
import { CompanyDetailSection } from '@/app/components/sections/CompanyDetailSection';
import { CTA2Section } from '@/app/components/sections/CTA2Section';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { useWebBuilder } from '@/app/providers/WebBuilderProvider';
import { Page } from '@/app/lib/types';

export default function AboutPage() {
  const { site } = useWebBuilder();
  const [aboutPage, setAboutPage] = useState<Page | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutPage = async () => {
      try {
        if (!site?._id) {
          setLoading(false);
          return;
        }

        // Get auth token from localStorage
        const token = localStorage.getItem('accessToken') || 
                      localStorage.getItem('token') || 
                      localStorage.getItem('auth_token');
        
        const headers: Record<string, string> = {
          'Content-Type': 'application/json',
        };
        
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }

        // Fetch about page type
        const response = await fetch(`/api/pages?siteId=${site._id}&pageType=about`, {
          headers,
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch about page');
        }
        
        const data = await response.json();
        
        if (data.success && data.data?.pages?.length > 0) {
          const aboutPages = data.data.pages.filter((p: Page) => p.pageType === 'about');
          
          if (aboutPages.length > 0) {
            const aboutPageId = aboutPages[0]._id;
            
            const aboutResponse = await fetch(`/api/pages/${aboutPageId}`, {
              headers,
            });
            
            if (!aboutResponse.ok) {
              throw new Error('Failed to fetch about page details');
            }
            
            const aboutData = await aboutResponse.json();
            
            if (aboutData.success && aboutData.data?.page) {
              setAboutPage(aboutData.data.page);
            }
          }
        }
      } catch (err) {
        console.error('Error fetching about page:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutPage();
  }, [site?._id]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {loading ? (
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <>
            {/* Hero Section - only renders if enabled */}
            {aboutPage?.hero && <HeroSection hero={aboutPage.hero} />}

            {/* About Section - only renders if enabled */}
            {aboutPage?.aboutSection && <AboutSection aboutSection={aboutPage.aboutSection} />}

            {/* Why Choose Us Section - only renders if enabled */}
            {aboutPage?.whyChooseUsSection && <WhyChooseUsSection whyChooseUsSection={aboutPage.whyChooseUsSection} />}

            {/* Company Detail Section - only renders if enabled */}
            {aboutPage?.companyDetailSection && <CompanyDetailSection companyDetailSection={aboutPage.companyDetailSection} />}

            {/* CTA2 Section - only renders if enabled */}
            {aboutPage?.cta2Section && <CTA2Section cta2Section={aboutPage.cta2Section} />}
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
