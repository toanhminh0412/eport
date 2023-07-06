import { NextResponse } from 'next/server';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from '../../../../../public/libs/firebase';

// Parameter required for sending confirmation link to user emails
const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/login`,
    // This must be true.
    handleCodeInApp: true,
};

/* Handle users signing up
Body:
    - Email: string
    - Password: string
*/
export async function POST(request) {
    const signUpInfo = await request.json();
    const email = signUpInfo.email;
    const password = signUpInfo.password;
    
    // Information returned to users
    let success = false;
    let message = '';

    // Create a new user
    await createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
        // Send an email verification link
        const user = userCredential.user;
        await sendEmailVerification(user)
        .then(() => {
            success = true;
            message = 'Signed up successfully. Please click on the link sent to your email to activate your account.';
        }).catch(error => {
            success = false;
            message = 'Failed to send a verification email. Please make sure your email exist.';
        })
    })
    .catch((error) => {
        success = false;
        console.log('Error code: ' + error.code);
        if (error.code === 'auth/email-already-in-use') {
            message = "Email already exists. Please log in!"
        } else {
            message = error.message;
        }
    });
    return NextResponse.json({
        success: success,
        message: message
    })
}