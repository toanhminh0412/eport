import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { db } from "../../../../../public/libs/firebase";

import { doc, getDoc } from "firebase/firestore";
import { redirect } from "next/navigation";



// Get site details
export async function GET(request, { params }) {
    // Get user id
    const cookieStore = cookies();
    const uid = cookieStore.get('eport-uid');

    // Unauthenticated users can't visit this route
    if (!uid) {
        redirect('/login');
    }

    const siteId = params.site;
    console.log(siteId);

    // Fetch site defails from Firestore
    const siteSnap = await getDoc(doc(db, 'sites', siteId));
    if (siteSnap.exists()) {
        const site = siteSnap.data();
        if (!site.owner === uid.value) {
            return NextResponse.json({
                status: 403,
                message: "User is not owner of this site"
            })
        }
        return NextResponse.json({
            status: 200,
            message: "Get site successfully",
            site: site
        })
    } else {
        return NextResponse.json({
            status: 404,
            message: "Site doesn't exist"
        })
    }
}