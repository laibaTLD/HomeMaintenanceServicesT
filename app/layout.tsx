import type { Metadata } from 'next'
import './globals.css'
import { WebBuilderProvider } from '@/app/providers/WebBuilderProvider'
import { ChatbotProviderWrapper } from '@/app/providers/ChatbotProviderWrapper'
import { ErrorBoundary } from '@/app/components/ui/ErrorBoundary'
import { ThemeFontWrapper } from './components/ui/ThemeFontWrapper'
import { LanguageProvider } from '@/app/i18n/LanguageProvider'
import { siteApi } from '@/app/lib/api'

const SITE_SLUG = process.env.NEXT_PUBLIC_WEBBUILDER_SITE_SLUG

export async function generateMetadata(): Promise<Metadata> {
  const metadata: Metadata = {
    title: 'Web Builder Site',
    description: 'Generated site using Web Builder',
  }

  if (!SITE_SLUG) return metadata

  try {
    const site = await siteApi.getSiteBySlug(SITE_SLUG, 60)
    if (site?.seo?.faviconUrl) {
      metadata.icons = { icon: site.seo.faviconUrl }
    }
  } catch {
    // Keep fallback metadata when site fetch fails
  }

  return metadata
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ErrorBoundary>
          <WebBuilderProvider>
            <LanguageProvider>
              <ThemeFontWrapper>
                <ChatbotProviderWrapper>
                  {children}
                </ChatbotProviderWrapper>
              </ThemeFontWrapper>
            </LanguageProvider>
          </WebBuilderProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
