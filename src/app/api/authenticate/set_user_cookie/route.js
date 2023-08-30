import { cookies } from "next/headers";

import { db } from "../../../../../public/libs/firebase";
import { getDoc, doc } from "firebase/firestore";
import { NextResponse } from "next/server";

/* Set user cookie from the client side:
Body:
    - User id: string
*/
export async function POST(request) {
    const cookieStore = cookies();
    const userId = (await request.json()).userId;

    // Get user info from Firestore
    const user = (await getDoc(doc(db, 'users', userId))).data();

    // Set user cookies
    cookieStore.set('eport-uid', user.uid);
    cookieStore.set('eport-email', user.email);
    cookieStore.set('eport-domain', user.domain);
    console.log('Set cookie');

    return NextResponse.json({
        status: 200,
        message: 'User cookie set successfully!'
    })
}