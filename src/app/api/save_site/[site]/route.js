// Next imports
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// Local imports
import { db } from '../../../../../public/libs/firebase';
import { getUserFromToken } from '@/helpers/authentication';

// 3rd party imports
import { doc, setDoc } from 'firebase/firestore';

// Update site info for a site id
export async function POST(request, { params }) {
    // Unauthenticated users can't visit this route
    const cookieStore = cookies();
    const userTokenCookie = cookieStore.get('eport-token');
    
    if (!userTokenCookie) {
        redirect('/login');
    }

    const userToken = userTokenCookie.value;
    const user = getUserFromToken(userToken);
    const siteId = params.site;

    // Update site info on Firestore
    const siteInfo = await request.json();
    const site = siteInfo.site;

    // Block non-owner to update site
    if (site.owner !== user.uid) {
        return NextResponse.json({
            status: 400,
            message: "You cannot save sites you don't own"
        })
    }

    await setDoc(doc(db, "sites", siteId), site);

    return NextResponse.json({
        status: 200,
        message: 'Site saved successfully'
    })
}