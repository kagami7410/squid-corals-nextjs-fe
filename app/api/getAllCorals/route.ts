import { NextRequest, NextResponse } from 'next/server';


export async function GET(request:NextRequest) {
    try{
        const res = await fetch('http://localhost:9080/backend/items/getAll');
        const data = await res.json();
        console.log(data)
        return NextResponse.json(data, { status: 200 });
    }
    catch(error) {
        return NextResponse.json({ error: 'Failed to get request' }, { status: 500 });
    }


}