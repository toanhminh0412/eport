// Next imports
import { cookies } from "next/headers";
import { nanoid } from "nanoid";
import { redirect } from "next/navigation";
import siteData from "@/data/demo1/newSite";

// Local imports
import Demo1 from "@/components/demo/demo1/site";

export const metadata = {
    title: 'Demo',
    description: "Too lazy to login? Build your own site with Eport right now, no login required!",
    alternates: {
        canonical: 'https://eport.site/demo',
    }
}

function getDemoSite() {
    const cookieStore = cookies();
    const siteDataLength = siteData.length;
    // Get sections in cookies and add it up to one array
    let count = 0;
    const sectionsData = [];
    for (let i = 0; i < siteDataLength; i++) {
        if (cookieStore.get('eport-demoSite-' + i)) {
            count = count + 1;
            sectionsData.push(JSON.parse(cookieStore.get('eport-demoSite-' + i).value));
        }
    }

    // If missing cookies, recreate a new demo site
    if (count !== siteDataLength || !cookieStore.get('eport-theme')) {
        redirect('/api/demo/new_site');
    }

    // return site
    const site = {
        theme: cookieStore.get('eport-theme').value,
        sections: sectionsData
    }
    return site
}

export default function Demo() {
    const cookieStore = cookies();

    // Check if user logged in
    const userToken = cookieStore.get('eport-token') ? cookieStore.get('eport-token').value : null;
    const isLoggedIn = userToken ? true : false;

    // Get site, set site id to a random id, set demo to true and set plan to premium
    const site = getDemoSite();
    const siteId = nanoid();
    const demo = true;
    const plan = "premium";

    return (
        <Demo1 content={site} siteId={siteId} plan={plan} demo={demo} isLoggedIn={isLoggedIn}/>
    )
}