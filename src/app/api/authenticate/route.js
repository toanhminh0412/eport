import { NextResponse } from 'next/server'

export async function GET(request) {
    console.log('GET method in authenticated is called');
    return NextResponse.json({message: 'Hello from server'});
}