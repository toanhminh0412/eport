// Next imports
import { cookies } from 'next/headers';

// Local imports
import PublishedDemo1 from '@/components/demo/demo1/published';
import NotFound from '../not-found';
import { db } from '../../../public/libs/firebase';

// 3rd party imports
import { collection, getDocs, query, where } from '@firebase/firestore';


const getSite = async (domain) => {
    const siteQuery = query(collection(db, 'publishedSites'), where('domain', '==', domain));
    const siteQuerySnapshot = await getDocs(siteQuery);
    if (siteQuerySnapshot.docs.length > 0) {
        return siteQuerySnapshot.docs[0].data();
    } else {
        return null;
    }
}

export default async function PublishedSite({ params }) {
    const site = await getSite(params.domain);
    const cookieStore = cookies();
    const plan = cookieStore.get('eport-plan') ? cookieStore.get('eport-plan').value : 'basic';

    if (site) {
        return <PublishedDemo1 site={site} plan={plan}/>
    } else {
        return <NotFound/>
    }
}