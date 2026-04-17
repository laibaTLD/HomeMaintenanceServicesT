import { Metadata } from 'next'
import { generateMetadata as buildMetadata, getSiteSeoData } from '@/app/lib/metadata'
import { Page, Site } from '@/app/lib/types'
import api from '@/app/lib/fetch-api'
import HomeClient from './HomeClient'

export async function generateMetadata(): Promise<Metadata> {
  try {
    console.log('generateMetadata: Fetching default site...')
    
    // Fetch default site
    const defaultSiteResponse = await api.get('/public/sites/default')
    
    console.log('generateMetadata: Response received:', defaultSiteResponse)
    
    if (defaultSiteResponse.success && defaultSiteResponse.data) {
      const site: Site = defaultSiteResponse.data
      
      console.log('generateMetadata: Site found:', site.slug)
      
      // Fetch pages to find home page
      const pagesResponse = await api.get(`/public/sites/${site.slug}/pages`)
      
      console.log('generateMetadata: Pages response:', pagesResponse)
      
      if (pagesResponse.success && pagesResponse.data) {
        const pages: Page[] = pagesResponse.data
        const homePage = pages.find(p => p.pageType === 'home')
        
        if (homePage) {
          console.log('generateMetadata: Home page found')
          // Use page SEO data, fallback to site SEO data
          const seoData = {
            title: homePage.seo?.title || site.seo?.title,
            description: homePage.seo?.description || site.seo?.description || site.business?.description,
            keywords: homePage.seo?.keywords || site.seo?.keywords,
            ogImageUrl: homePage.seo?.ogImageUrl || site.seo?.ogImageUrl,
            noIndex: homePage.seo?.noIndex || false
          }

          return buildMetadata(seoData, site)
        }
      }
      
      console.log('generateMetadata: Using site SEO data as fallback')
      // Fallback: use site SEO data
      return buildMetadata(getSiteSeoData(site), site)
    }
  } catch (error) {
    console.error('Error generating home metadata:', error)
    console.error('Error details:', JSON.stringify(error, null, 2))
    if (error instanceof Error) {
      console.error('Error name:', error.name)
      console.error('Error message:', error.message)
    }
  }
  
  console.log('generateMetadata: Using fallback metadata')
  // Fallback metadata
  return {
    title: 'Web Builder Site',
    description: 'Generated site using Web Builder',
  }
}

export default function Home() {
  return <HomeClient />
}
