// Next imports
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

// Local imports
import { db } from '../../../../public/libs/firebase';
import { getUserFromToken } from '@/helpers/authentication';
import sectionData from '@/data/site';
import siteData from '@/data/site';

// 3rd party imports
import { addDoc, collection } from 'firebase/firestore';

// Create a new template for current user
export async function GET(request) {
    // Get current user id
    const cookieStore = cookies();
    const userTokenCookie = cookieStore.get('eport-token');
    const siteDataLength = siteData.length;

    // Unauthenticated users can't visit this route
    if (!userTokenCookie) {
        redirect('/login');
    }

    // Check if there is a demo site in cookies
    let count = 0;
    const sectionDemoData = [];
    for (let i = 0; i < siteDataLength; i++) {
        if (cookieStore.get('eport-demoSite-' + i)) {
            count = count + 1;
            sectionDemoData.push(JSON.parse(cookieStore.get('eport-demoSite-' + i).value));
            cookieStore.delete('eport-demoSite-' + i);
        }
    }

    const userToken = userTokenCookie.value;
    const user = getUserFromToken(userToken);
    // Get template selected
    const { searchParams } = new URL(request.url);
    const selectedTemplate = searchParams.get('selectedTemplate');

    // if user edit demo section, add a demo site to database
    if (count === siteDataLength) {
        // Create the new template same with deno in Firestore
        await addDoc(collection(db, "sites"), {
            owner: user.uid,
            selectedTemplate: parseInt(selectedTemplate),
            sections: sectionDemoData,
        })
    } else { 
        // Create the new template in Firestore
        await addDoc(collection(db, "sites"), {
            owner: user.uid,
            selectedTemplate: parseInt(selectedTemplate),
            sections: sectionData,
        })
    }
    redirect('/')
}