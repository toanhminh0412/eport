// Next imports
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// Local imports
import { db } from "../../../../../public/libs/firebase";
import { getUserFromToken, getTokenFromUser } from "@/helpers/authentication";
import cookieOptions from "@/data/cookieOptions";

// 3rd party imports
import { doc, updateDoc } from "firebase/firestore";


/* Update user's emailVerified status to true */
export async function GET(request) {
    const cookieStore = cookies();
    const userToken = cookieStore.get('eport-token').value;
    let user = getUserFromToken(userToken);
    const userId = user.uid;

    // Update in Firestore
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {emailVerified: true});

    // Update in cookie
    user.emailVerified = true;
    const newUserToken = getTokenFromUser(user);
    cookieStore.set('eport-token', newUserToken, cookieOptions);

    return NextResponse.json({
        status: 200,
        message: 'Email verified successfully!'
    })
}