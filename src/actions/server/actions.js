import { redirect } from "next/navigation";
import { cookies } from 'next/headers';

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../public/libs/firebase";

// Redirect to login page if user is not logged in
export const checkLoggedInAction = () => {
    const cookieStore = cookies();
    console.log(cookieStore.get('eport-uid'));
    if (!cookieStore.get('eport-uid')) {
        console.log('Redirecting to login in checkLoggedInAction');
        redirect('/login');
    }
}

/* Redirect to email verification page if user has not verified their email
*  Otherwise, returns the user object
*/
export async function checkEmailVerificationAction() {
    const cookieStore = cookies();
    const userId = cookieStore.get('eport-uid').value;
    const user = (await getDoc(doc(db, 'users', userId))).data();
    console.log(user);

    // Log user out if user is not found
    if (!user) {
        console.log('Calling logout');
        redirect('/api/authenticate/logout');
    }

    // Redirect to email verification page if user has not verified their email
    if (!user.emailVerified) {
        console.log('Calling confirm_email');
        redirect('/confirm_email');
    }
    return user;
}