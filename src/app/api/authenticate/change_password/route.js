import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { db } from '../../../../../public/libs/firebase';
import { SALT_ROUNDS } from '../../../../../public/libs/bcryptConfig';

import { getDoc, doc, setDoc } from 'firebase/firestore';
import bcrypt from 'bcrypt';

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
    const newPassword = await bcrypt.hash(changePasswordInfo.newPassword, SALT_ROUNDS);

    // Information returned to users
    let status = 200;
    let message = '';
    
    // Unauthenticated users cannot change password
    if (!uidCookie) {
        redirect('/login');
    }
    const uid = uidCookie.value;
    
    // Get user by id from Firestore
    const userSnap = await getDoc(doc(db, 'users', uid));
    if (userSnap.exists()) {
        const user = userSnap.data();
        
        // Update current user password
        const newUser = {
            ...user,
            password: newPassword
        }
        await setDoc(doc(db, 'users', uid), newUser);
        status = 200;
        message = 'Password changed successfully!';
    } else {
        status = 400;
        message = 'User does not exist!';
    }

    return NextResponse.json({
        status: status,
        message: message
    });
}