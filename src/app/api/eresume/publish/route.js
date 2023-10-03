// Next imports
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Local imports
import { db } from '../../../../../public/libs/firebase';
import { getUserFromToken } from '@/helpers/authentication';

// 3rd party imports
import { collection, doc, query, setDoc, where, getDocs } from 'firebase/firestore';

/* Handle publishing sites 
Body:
    - site: publishedSite object
*/
export async function POST(request) {
    const cookieStore = cookies();
    const body = await request.json();
    const site = body.site;

    // This code breaks if user is not logged in
    // So we can use it to prevent unauthenticated users from visiting this route atm
    const userToken = cookieStore.get('eport-token').value;
    let user = getUserFromToken(userToken);
    const uid = user.uid;
    const projectId = request.nextUrl.searchParams.get('projectId');

    // Check if there is a site with the same domain
    const projectQuery = query(collection(db, 'published_eresume'), where('domain', '==', site.domain));
    const projectQuerySnapshot = await getDocs(projectQuery);

    if (projectQuerySnapshot.docs.length > 0 && projectQuerySnapshot.docs[0].id !== projectId) {
        return NextResponse.json({
            status: 400,
            message: 'Domain already exists!'
        })
    }

    // Store the site in the database
    await setDoc(doc(db, 'published_eresume', projectId), site);
    await setDoc(doc(db, 'eresume', projectId), {published: true, domain: site.domain}, { merge: true });

    return NextResponse.json({
        status: 200,
        message: 'Site published successfully!'
    })
}