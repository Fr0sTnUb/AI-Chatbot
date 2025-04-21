import { NextRequest, NextResponse } from 'next/server';
import { getAccessoryRecommendations } from '@/app/utils/geminiApi';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { image, prompt } = data;

    if (!image) {
      return NextResponse.json(
        { error: 'No image data provided' },
        { status: 400 }
      );
    }

    // Process the image with Gemini API, passing along any custom prompt
    const recommendations = await getAccessoryRecommendations(image, prompt);

    return NextResponse.json(recommendations);
  } catch (error) {
    console.error('Error processing recommendation request:', error);
    return NextResponse.json(
      { error: 'Failed to process image' },
      { status: 500 }
    );
  }
} 