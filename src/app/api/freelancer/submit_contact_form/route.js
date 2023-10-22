// Next imports
import { NextResponse } from "next/server";

// Local Imports
import { db } from "../../../../../public/libs/firebase";

// 3rd Party Imports
import { collection, query, where, getDocs, setDoc, doc } from "firebase/firestore";


export async function GET(request) {
    const ownerEmail = request.nextUrl.searchParams.get('ownerEmail');

    // Check if the site owner with the email has any email quota remaining
    const userQuery = query(collection(db, "users"), where("email", "==", ownerEmail));
    const userSnap = await getDocs(userQuery);
    if (userSnap.empty) {
        return NextResponse.json({
            status: 404,
            message: "Website owner not found"
        })
    }

    const user = userSnap.docs[0].data();

    // Can't send email if user has no quota remaining
    if (user.emailQuota <= 0) {
        return NextResponse.json({
            status: 400,
            message: "Website owner has no email quota remaining"
        })
    }

    // Decrease user's email quota by 1
    await setDoc(doc(db, "users", userSnap.docs[0].id), {
        emailQuota: user.emailQuota - 1
    }, {merge: true});

    return NextResponse.json({
        status: 200,
        message: "Email sent successfully"
    })
}