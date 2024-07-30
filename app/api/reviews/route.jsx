import getGoogleReview from '@/app/getReview';
import { NextResponse } from 'next/server';

export async function GET() {
  

  try {
   
    const response = await getGoogleReview();
    console.log(response);
    const reviewsData = response;

    return NextResponse.json(reviewsData);
  } catch (error) {
    console.error('Error fetching Google reviews:', error.message);
    return NextResponse.json({ error: 'Error fetching Google reviews' }, { status: 500 });
  }
}
