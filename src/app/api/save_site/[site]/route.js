import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { db } from '../../../../../public/libs/firebase';
import { doc, setDoc } from 'firebase/firestore';

// Update site info for a site id
export async function POST(request, { params }) {
    // Unauthenticated users can't visit this route
    const cookieStore = cookies();
    const uid = cookieStore.get('eport-uid');
    
    if (!uid) {
        redirect('/login');
    }

    const siteId = params.site;

    // Update site info on Firestore
    const siteInfo = await request.json();
    const site = siteInfo.site;

    // Block non-owner to update site
    if (site.owner !== uid.value) {
        return NextResponse.json({
            status: 403,
            message: "You cannot save sites you don't own"
        })
    }

    await setDoc(doc(db, "sites", siteId), site);

    return NextResponse.json({
        status: 200,
        message: 'Site saved successfully'
    })
}