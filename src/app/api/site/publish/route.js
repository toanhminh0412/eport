// Next imports
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Local imports
import { db } from '../../../../../public/libs/firebase';
import { getUserFromToken, getTokenFromUser } from '@/helpers/authentication';

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
    const userToken = cookieStore.get('eport-token').value;
    let user = getUserFromToken(userToken);
    const uid = user.uid;

    // Check if there is a site with the same domain
    const siteQuery = query(collection(db, 'publishedSites'), where('domain', '==', site.domain));
    const siteQuerySnapshot = await getDocs(siteQuery);
    if (siteQuerySnapshot.docs.length > 0 && siteQuerySnapshot.docs[0].id !== uid) {
        return NextResponse.json({
            status: 400,
            message: 'Domain already exists!'
        })
    }

    // Store the site in the database
    await setDoc(doc(db, 'publishedSites', uid), site);
    await setDoc(doc(db, 'users', uid), {
        domain: site.domain
    }, { merge: true });
    // cookieStore.set('eport-domain', site.domain);
    user.domain = site.domain;
    const newUserToken = getTokenFromUser(user);
    cookieStore.set('eport-token', newUserToken);

    return NextResponse.json({
        status: 200,
        message: 'Site published successfully!'
    })
}