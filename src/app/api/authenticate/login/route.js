import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { auth, db } from '../../../../../public/libs/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';

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
    let success = false;
    let message = '';

    // Log user in
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        if (userCredential) {
            const user = userCredential.user;
            cookieStore.set('eport-uid', user.uid);
            cookieStore.set('eport-email', user.email);

            // Get user profile
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            if (userDoc.exists()) {
                const userData = userDoc.data();
                cookieStore.set('eport-domain', userData.domain);
            }

            success = true;
            message = 'Login successfully!';
        } else {
            success = false;
            message = 'User credential not found!';
        }
    } catch(error) {
        if (error.code == "auth/user-not-found") {
            message = "Invalid email and password. Please try again or sign up!"
        } else {
            message = error.message;
        }
    };

    return NextResponse.json({
        uid: cookieStore.get('eport-uid') ? cookieStore.get('eport-uid').value : '',
        email: cookieStore.get('eport-email') ? cookieStore.get('eport-email').value : '',
        domain: cookieStore.get('eport-domain') ? cookieStore.get('eport-domain').value : '',
        success: success,
        message: message
    })
}