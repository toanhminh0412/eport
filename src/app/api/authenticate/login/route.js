import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import { db } from '../../../../../public/libs/firebase';

import { query, where, getDocs, collection } from 'firebase/firestore';

import bcrypt from 'bcrypt';

/* Handle users logging in
Query:
    - Email: string
    - Password: string
*/
export async function GET(request) {
    const cookieStore = cookies();
    const requestHeaders = new Headers(request.headers)
    const email = requestHeaders.get('x-forwarded-email');
    const password = requestHeaders.get('x-forwarded-password');
    console.log(password);
    let success = false;
    let message = '';

    // Get user by email and password from Firestore
    const userDoc = await getDocs(collection(db, 'users'));
    let i = 0;

    // Have to use while as await doesn't work in for loop
    while (i < userDoc.docs.length) {
        const userData = userDoc.docs[i].data();
        if (userData.email == email) {
            if (userData.password) {
                const passwordMatch = await bcrypt.compare(password, userData.password);
                if (passwordMatch) {
                    success = true;
                    message = 'Login successfully!';
                    cookieStore.set('eport-uid', userData.uid);
                    cookieStore.set('eport-email', userData.email);
                    cookieStore.set('eport-domain', userData.domain);
                }
            }
            break;
        }
        i++;
    };
    if (!success) {
        message = 'Invalid email and password. Please try again or sign up!';
    }

    return NextResponse.json({
        uid: cookieStore.get('eport-uid') ? cookieStore.get('eport-uid').value : '',
        email: cookieStore.get('eport-email') ? cookieStore.get('eport-email').value : '',
        domain: cookieStore.get('eport-domain') ? cookieStore.get('eport-domain').value : '',
        success: success,
        message: message
    })
}