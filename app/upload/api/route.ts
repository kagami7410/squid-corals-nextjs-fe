// pages/api/image.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  // Extract query parameters from the URL
  const { searchParams } = new URL(req.url);
  const imageName = searchParams.get('imageName'); // Extract 'imageName' from query

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaWF0IjoxNzI3MTcyNDE4LCJleHAiOjE3MjcxNzYwMTh9.9R4NeNQrqUMfHzYV85hH8tfAHq3wkWcjNEUyd50dg7s'; // Replace with your actual token

  try {
    const response = await fetch(`http:localhost:8000/squidCorals/images?imageName=${imageName}`, {
      headers: {
        'Authorization': `${token}`,
      },
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Error fetching image' }, { status: 400 });
    }

    const imageBuffer = await response.arrayBuffer();

    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': 'image/jpeg',
      },
    });

    // const imageBuffer = await response.arrayBuffer();
    // NextResponse.headers.set('Content-Type', response.headers.get('Content-Type') || 'image/jpeg');
    // res.send(imageBuffer);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load image' }, { status: 500 });
  }
}
