import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Fetch site data directly from backend API
    const siteSlug = process.env.NEXT_PUBLIC_WEBBUILDER_SITE_SLUG;
    if (!siteSlug) {
      throw new Error('Site slug not configured');
    }

    // Use the same API base URL as the template
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!API_BASE_URL) {
      throw new Error('NEXT_PUBLIC_API_BASE_URL environment variable is required');
    }

    // Direct fetch to avoid circular dependency
    const response = await fetch(`${API_BASE_URL}/public/sites/${siteSlug}`);
    const responseData = await response.json();
    const site = responseData.data?.data ?? responseData.data;
    
    return NextResponse.json({
      success: true,
      data: {
        legal: site.legal || {}
      }
    });
  } catch (error) {
    console.error('Error fetching legal files:', error);
    return NextResponse.json(
      { success: false, error: { message: 'Failed to fetch legal files' } },
      { status: 500 }
    );
  }
}
