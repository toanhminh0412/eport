import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { db } from '../../../../../public/libs/firebase';
import { SALT_ROUNDS } from '../../../../../public/libs/bcryptConfig';

import { getDoc, doc, setDoc } from 'firebase/firestore';
import bcrypt from 'bcrypt';

/* Handle users changing password
Body:
    - userId (optional): string. If userId is omitted, userId is extracted from cookie
    - currentPassword (optional): string. If currentPassword is presented, that means the logged in user is changing password
    - newPassword: string
*/
export async function POST(request) {
    const cookieStore = cookies();
    const uidCookie = cookieStore.get('eport-uid');

    const changePasswordInfo = await request.json();
    const userId = changePasswordInfo.userId;
    const currentPassword = changePasswordInfo.currentPassword;
    const newPassword = await bcrypt.hash(changePasswordInfo.newPassword, SALT_ROUNDS);

    // Information returned to users
    let status = 200;
    let message = '';
    
    // Unauthenticated users cannot change password
    if (!uidCookie && !userId) {
        redirect('/login');
    }
    const uid = userId ? userId : uidCookie.value;
    
    // Get user by id from Firestore
    const userSnap = await getDoc(doc(db, 'users', uid));
    if (userSnap.exists()) {
        const user = userSnap.data();
        // If currentPassword is presented, check if that password is correct
        if (currentPassword) {
            const isPasswordCorrect = await bcrypt.compare(currentPassword, user.password);
            if (!isPasswordCorrect) {
                status = 400;
                message = 'Current password is incorrect!';
                return NextResponse.json({
                    status: status,
                    message: message,
                });
            }
        }
        
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
        message: message,
    });
}