import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Return user id if there is an active user
export async function GET(request) {
    const cookieStore = cookies();
    const uid = cookieStore.get('eport-uid');
    const emailVerified = cookieStore.get('eport-email-verified');

    return NextResponse.json({
        uid: uid ? uid.value : null,
        emailVerified: emailVerified ? emailVerified.value : false
    });
}