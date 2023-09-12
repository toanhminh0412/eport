import { NextResponse } from "next/server";
import { db } from "../../../../../public/libs/firebase";
import { cookies } from "next/headers";
import { query, collection, getDocs, where } from "firebase/firestore";

export async function GET(request) {
    // Get current user id
    const util = require('util');
    const cookieStore = cookies();
    const uidCookie = cookieStore.get('eport-uid').value;

    // Get current site
    const sitesQuery = query(collection(db, 'sites'), where('owner', '==', uidCookie));
    const sitesSnap = await getDocs(sitesQuery);
    let sites = sitesSnap.docs;

    // Get published site
    const publishedSitesQuery = query(collection(db, 'publishedSites'), where('owner', '==', uidCookie));
    const publishedSitesSnap = await getDocs(publishedSitesQuery);
    let publishedSites = publishedSitesSnap.docs; 

    if (publishedSites.length === 0) {
        return NextResponse.json({
            status: 400,
            isEqual: false
        });
    }

    const currentSite = sites[0].data();
    const publishedSite = publishedSites[0].data();

    if (util.isDeepStrictEqual(currentSite.sections, publishedSite.sections) === false) {
        return NextResponse.json({
            status: 200,
            isEqual: false
        });
    } else {
        return NextResponse.json({
            status: 200,
            isEqual: true
        });
    }
}