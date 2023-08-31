import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { db } from "../../../../../public/libs/firebase";

import { doc, updateDoc } from "firebase/firestore";


/* Update user's emailVerified status to true */
export async function GET(request) {
    const cookieStore = cookies();
    const userId = cookieStore.get('eport-uid').value;

    // Update in Firestore
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {emailVerified: true});

    // Update in cookie
    cookieStore.set('eport-email-verified', true);

    return NextResponse.json({
        status: 200,
        message: 'Email verified successfully!'
    })
}