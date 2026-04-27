import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = process.env.API_BASE_URL || 'https://sitifystudio.com/api';

export async function GET(
  request: NextRequest,
  { params }: { params: { siteId: string } }
) {
  try {
    const { siteId } = params;
    const { searchParams } = new URL(request.url);
    
    // Forward the request to the backend API
    const backendUrl = `${API_BASE_URL}/chatbot/public/${siteId}?${searchParams.toString()}`;
    
    const response = await fetch(backendUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Add cache control to prevent caching
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error(`Backend API returned ${response.status} for ${backendUrl}`);
      return NextResponse.json(
        { error: 'Failed to fetch chatbot settings' },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  } catch (error) {
    console.error('Error fetching chatbot settings:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
