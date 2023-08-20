import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

/* Handle users changing password
Body:
    - Current password: string
    - New password: string
*/
export async function POST(request) {

    const cookieStore = cookies();
    const uidCookie = cookieStore.get('eport-uid');

    const changePasswordInfo = await request.json();
    const currentPassword = changePasswordInfo.currentPassword;
    const newPassword = changePasswordInfo.newPassword;

    // Unauthenticated users cannot change password
    if (!uidCookie) {
        redirect('/login');
    }
    const uid = uidCookie.value;

    return NextResponse.json({
        status: 200,
        message: 'Password changed successfully!'
    });
}