import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Return user id if there is an active user
export async function GET(request) {
    const cookieStore = cookies();
    return NextResponse.json({
        uid: cookieStore.get('eport-uid').value,
        emailVerified: cookieStore.get('eport-email-verified').value
    });
}