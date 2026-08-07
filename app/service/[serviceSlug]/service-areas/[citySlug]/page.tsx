import type { Metadata } from 'next'
import { generateMetadata as buildPageMetadata, getPageSeoData } from '@/app/lib/metadata'
import { Site } from '@/app/lib/types'
import type { ServiceAreaPage } from '@/app/lib/types'
import api from '@/app/lib/fetch-api'
import ServiceAreaClient from './ServiceAreaClient'

interface ServiceAreaPageProps {
  params: Promise<{ serviceSlug: string; citySlug: string }>
}

export async function generateMetadata({ params }: ServiceAreaPageProps): Promise<Metadata> {
  const { serviceSlug, citySlug } = await params

  try {
    const defaultSiteResponse = await api.get('/public/sites/default')

    if (defaultSiteResponse.success && defaultSiteResponse.data) {
      const site: Site = defaultSiteResponse.data

      const serviceAreaResponse = await api.get(
        `/public/sites/${site.slug}/service-areas/by-service/${serviceSlug}/${citySlug}`
      )

      if (serviceAreaResponse.success && serviceAreaResponse.data) {
        const serviceAreaPage: ServiceAreaPage = serviceAreaResponse.data
        return buildPageMetadata(getPageSeoData(serviceAreaPage), site)
      }
    }
  } catch (error) {
    console.error('Error generating service area metadata:', error)
  }

  return {
    title: 'Service Area Not Found',
    description: 'The requested service area page could not be found.',
  }
}

export default async function ServiceAreaPage({ params }: ServiceAreaPageProps) {
  const { serviceSlug, citySlug } = await params
  return <ServiceAreaClient serviceSlug={serviceSlug} citySlug={citySlug} />
}
