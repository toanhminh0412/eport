import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "../../../../../public/libs/firebase";
import { collection, doc, query, setDoc, getDocs, where } from 'firebase/firestore';
import { nanoid } from 'nanoid';

export async function GET(request) {
    const cookieStore = cookies()
    const requestHeaders = new Headers(request.headers)
    const email = requestHeaders.get('x-forwarded-email');
    const uid = requestHeaders.get('x-forwarded-uid');

    let success = false;
    let message = '';

    const usersCollection = collection(db, 'users');
    const usersEmail = query(usersCollection, where ("email", "==", email))
    const usersDocs = await getDocs(usersEmail);

    if (usersDocs.docs.length === 0) {
        const newUserId = nanoid();
        const newUser = {
            uid: newUserId,
            email: email,
            password: null,
            signInMethod: 'Google',
            emailVerified: true,
            domain: '',
        }
        
        // Save user in 'users' collection in Firestore
        await setDoc(doc(usersCollection, newUserId), newUser);
        
        // Log user in
        cookieStore.set('eport-uid', newUser.uid);
        cookieStore.set('eport-email', newUser.email);
        cookieStore.set('eport-signInMethod', newUser.signInMethod);
        cookieStore.set('eport-email-verified', newUser.emailVerified);
        cookieStore.set('eport-domain', newUser.domain);

        success = true;
        message = 'Login successfully!';
    } else {
        usersDocs.forEach((doc) => {
            const user = doc.data();
            if (user.signInMethod === "Google") {
                success = true;
                message = 'Login successfully!';
                cookieStore.set('eport-uid', user.uid);
                cookieStore.set('eport-email', user.email);
                cookieStore.set('eport-signInMethod', 'Google');
                cookieStore.set('eport-email-verified', true);
                cookieStore.set('eport-domain', "");
            } else {
                success = false;
                message = "Google SignIn option is not available to this email. Please log in using your email and password!";
            }
        });
    }

    return NextResponse.json({
        uid: cookieStore.get('eport-uid') ? cookieStore.get('eport-uid').value : '',
        email: cookieStore.get('eport-email') ? cookieStore.get('eport-email').value : '',
        signInMethod: cookieStore.get('eport-signInMethod') ? cookieStore.get('eport-signInMethod').value : '',
        domain: cookieStore.get('eport-domain') ? cookieStore.get('eport-domain').value : '',
        success: success,
        message: message
    })
}