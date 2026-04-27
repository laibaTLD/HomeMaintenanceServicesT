'use client';

import { useState, useEffect } from 'react';
import { HeroSection } from '@/app/components/sections/HeroSection';
import { TestimonialsSection } from '@/app/components/sections/TestimonialsSection';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { useWebBuilder } from '@/app/providers/WebBuilderProvider';
import { Page } from '@/app/lib/types';

export default function TestimonialsPage() {
  const { site } = useWebBuilder();
  const [testimonialsPage, setTestimonialsPage] = useState<Page | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonialsPage = async () => {
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

        const response = await fetch(`/api/pages?siteId=${site._id}&pageType=testimonials`, {
          headers,
        });

        if (!response.ok) {
          throw new Error('Failed to fetch testimonials page');
        }

        const data = await response.json();
        
        if (data.success && data.data?.pages?.length > 0) {
          const testimonialsPages = data.data.pages.filter((p: Page) => p.pageType === 'testimonials');
          
          if (testimonialsPages.length > 0) {
            const pageId = testimonialsPages[0]._id;
            
            const pageResponse = await fetch(`/api/pages/${pageId}`, {
              headers,
            });
            
            if (!pageResponse.ok) {
              throw new Error('Failed to fetch testimonials page details');
            }
            
            const pageData = await pageResponse.json();
            
            if (pageData.success && pageData.data?.page) {
              setTestimonialsPage(pageData.data.page);
            }
          }
        }
      } catch (err) {
        console.error('Error fetching testimonials page:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonialsPage();
  }, [site?._id]);

  // Default configurations (fallback)
  const defaultHero = {
    enabled: true,
    title: { 
      type: 'doc', 
      content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Client Testimonials' }] }] 
    },
    subtitle: { 
      type: 'doc', 
      content: [{ type: 'paragraph', content: [{ type: 'text', text: 'What Our Clients Say' }] }] 
    },
    description: { 
      type: 'doc', 
      content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Hear from our satisfied clients about their experience working with us' }] }] 
    },
    primaryCta: {
      label: 'Contact Us',
      href: '/contact-us',
    },
  };

  const defaultTestimonialsSection = {
    enabled: true,
    title: { 
      type: 'doc', 
      content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Client Testimonials' }] }] 
    },
    description: { 
      type: 'doc', 
      content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Hear what our clients have to say about our services' }] }] 
    },
    testimonials: [],
  };

  // Use page data if available, otherwise use defaults
  const hero = testimonialsPage?.hero?.enabled ? testimonialsPage.hero : defaultHero;
  const testimonialsSection = testimonialsPage?.testimonialsSection?.enabled 
    ? testimonialsPage.testimonialsSection 
    : defaultTestimonialsSection;

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
            {/* Hero Section */}
            <HeroSection hero={hero} />

            {/* Testimonials Section */}
            <TestimonialsSection testimonialsSection={testimonialsSection} />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
