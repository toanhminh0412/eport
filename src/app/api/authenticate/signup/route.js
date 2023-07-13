import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { auth, db } from '../../../../../public/libs/firebase';
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';


/* Handle users signing up
Body:
    - Email: string
    - Password: string
*/
export async function POST(request) {
    const cookieStore = cookies();
    const signUpInfo = await request.json();
    const email = signUpInfo.email;
    const password = signUpInfo.password;
    
    // Information returned to users
    let success = false;
    let message = '';
    let newEmail = '';

    // Create a new user
    await createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
        // Send an email verification link
        const user = userCredential.user;
        newEmail = user.email;
        cookieStore.set('eport-uid', user.uid);
        cookieStore.set('eport-email', user.email);
        
        // Store the new user in the database
        const newUser = {
            uid: user.uid,
            email: user.email,
            emailVerified: false
        }
        await setDoc(doc(db, 'users', user.uid), newUser);
        success = true;
        message = 'Signed up successfully!';
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
        message: message,
        newEmail: newEmail
    })
}