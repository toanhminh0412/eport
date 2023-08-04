import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { auth } from '../../../../../public/libs/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

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
    await signInWithEmailAndPassword(auth, email, password)
    .then(async(userCredential) => {
        // Signed in, set user info in cookie
        const user = userCredential.user;
        cookieStore.set('eport-uid', user.uid);
        cookieStore.set('eport-email', user.email);
        success = true;
        message = 'Login successfully!';
    })
    .catch((error) => {
        if (error.code == "auth/user-not-found") {
            message = "Invalid email and password. Please try again or sign up!"
        } else {
            message = error.message;
        }
    });

    return NextResponse.json({
        uid: cookieStore.get('eport-uid').value,
        email: cookieStore.get('eport-email').value,
        success: success,
        message: message
    })
}