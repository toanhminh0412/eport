// Next imports
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

// Local imports
import { db } from "../../public/libs/firebase";
import Demo1 from "@/components/demo/demo1/site";
import { getUserFromToken } from "@/helpers/authentication";

// 3rd party imports
import { collection, getDocs, query, where } from "firebase/firestore";

export const metadata = {
  title: 'Dashboard',
  description: "View, edit and publish your site here!",
  alternates: {
      canonical: 'https://eport.site',
  }
}

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
    
    // Check if user login
    const userToken = cookieStore.get('eport-token') ? cookieStore.get('eport-token').value : null;
    const isLoggedIn = userToken ? true : false;

    // Set user id, site, plan and demo
    const user = getUserFromToken(userToken);
    const userId = user.uid;
    const site = await getSite(userId);
    const plan = user.plan ? user.plan : 'basic';
    const demo = false

    return <Demo1 content={site.site} siteId={site.id} plan={plan} demo={demo} isLoggedIn={isLoggedIn}/>
}
