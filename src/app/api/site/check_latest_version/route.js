// Next imports
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// Local imports
import { db } from "../../../../../public/libs/firebase";
import { getUserFromToken } from "@/helpers/authentication";

// 3rd party imports
import { query, collection, getDocs, where } from "firebase/firestore";

const util = require('util');

export async function GET(request) {
    // Get current user id
    const cookieStore = cookies();
    const userToken = cookieStore.get('eport-token').value;
    const user = getUserFromToken(userToken);
    const uid = user.uid;

    // Get current site
    const sitesQuery = query(collection(db, 'sites'), where('owner', '==', uid));
    const sitesSnap = await getDocs(sitesQuery);
    let sites = sitesSnap.docs;

    // Get published site
    const publishedSitesQuery = query(collection(db, 'publishedSites'), where('owner', '==', uid));
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

    if (util.isDeepStrictEqual(currentSite.sections, publishedSite.sections) === false || currentSite.theme !== publishedSite.theme) {
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