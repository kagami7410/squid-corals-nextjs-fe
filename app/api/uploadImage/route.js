// pages/api/image.ts
import { getToken } from '../../../lib/token';
import axios from 'axios';

// app/api/upload/route.js

import { NextResponse } from 'next/server';

// Import form-data to reconstruct the FormData when sending it to another server
import FormData from 'form-data';

export async function POST(request) {
  try {
    // Step 1: Read the form data (including image file) from the client
    const formData = await request.formData(); // Parse FormData from the request
    const imageFile = formData.get('image'); // Assuming the field name is 'image'

    if (!imageFile) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 });
    }

    // Step 2: Prepare the data to forward to another server
    const newFormData = new FormData();
    newFormData.append('image', imageFile); // Reconstruct the FormData with the image file

    // Step 3: Send the image to another server using fetch
    const externalServerResponse = await fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: newFormData,
      headers: {
        // Fetch automatically sets the correct 'Content-Type' with form-data
        // You can add additional headers if needed.
      },
    });

    // Step 4: Handle response from external server
    const externalServerData = await externalServerResponse.json();

    // Return the response from the external server back to the client
    return NextResponse.json(externalServerData);
  } catch (error) {
    // Handle any errors
    console.error('Error processing the request:', error);
    return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
  }
}