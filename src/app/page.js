import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import Demo1 from "@/components/demo/demo1/site";

import { db } from "../../public/libs/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

/* Get site data from uid
*  Params:
*    uid: string
*  Returns:
*    site: object
*/
async function getSite(uid) {
    const sitesQuery = query(collection(db, 'sites'), where('owner', '==', uid));

    const sitesSnap = await getDocs(sitesQuery);
    let sites = []; 
    sitesSnap.forEach((doc) => {
      sites.push({id: doc.id, site: doc.data()});
    });

    // Return site data if there is a site. Otherwise, redirect to create site page.
    if (sites.length === 0) {
      redirect('/api/new_site');
    }

    return sites[0];
}

export default async function Dashboard() {
    const cookieStore = cookies();
    const userId = cookieStore.get('eport-uid').value;
    const site = await getSite(userId);
    const plan = cookieStore.get('eport-plan') ? cookieStore.get('eport-plan').value : 'basic';

    return <Demo1 content={site.site} siteId={site.id} plan={plan}/>
}
