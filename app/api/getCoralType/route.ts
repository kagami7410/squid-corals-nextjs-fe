import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
    // Extract query parameters from the URL
    const { searchParams } = new URL(req.url);
    const coralType = searchParams.get('coralType'); // Extract 'corqalType' from query


    try {
        // Replace the URL with your API endpoint
        const res = await fetch(`http://localhost:9080/backend/items/getByType?coralType=${coralType}`);
        const data = await res.json();
        console.log(data)

        // Pass the data to the page via props
        return NextResponse.json(data, { status: 200 })

    }

    catch (error) {
        return NextResponse.json(error, { status: 500 })
    }
}
