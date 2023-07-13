'use server'

import { redirect } from "next/navigation";
import { cookies } from 'next/headers';

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../public/libs/firebase";

// Redirect to login page if user is not logged in
export const checkLoggedInAction = () => {
    const cookieStore = cookies();
    if (!cookieStore.get('eport-uid')) {
        redirect('/login');
    }
}

// Redirect to email verification page if user has not verified their email
export async function checkEmailVerificationAction() {
    const cookieStore = cookies();
    const userId = cookieStore.get('eport-uid').value;
    const user = (await getDoc(doc(db, 'users', userId))).data();
    if (!user.emailVerified) {
        redirect('/confirm_email');
    }
    return user;
}