// Local imports
import PublishedDemo1 from '@/components/demo/demo1/published';
import NotFound from '../not-found';
import { db } from '../../../public/libs/firebase';

// 3rd party imports
import { collection, getDocs, query, where } from '@firebase/firestore';

// Generate <head> metadata for this page
export async function generateMetadata({ params }) {
    // read route params
    const domain = params.domain;
   
    // fetch data
    const site = await getSite(domain);
    console.log(site);
   
    // optionally access and extend (rather than replace) parent metadata
    const openGraphImage = site.sections[0].profilePic
   
    return {
      title: site.sections[0].fullName,
      description: site.sections[1].bio,
      alternates: {
        canonical: `https://eport.site/${domain}`,
      },
      openGraph: {
        images: openGraphImage,
      },
    }
}

// Get publishedSite object from domain
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

    if (site) {
        return <PublishedDemo1 site={site}/>
    } else {
        return <NotFound/>
    }
}