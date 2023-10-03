// Local imports
import PublishedDemo1 from '@/components/eresume/template0/published';
import { Page404 } from '@/components/pages/status_pages';
import { db } from '../../../../public/libs/firebase';

// 3rd party imports
import { collection, getDocs, query, where } from '@firebase/firestore';

// Generate <head> metadata for this page
export async function generateMetadata({ params }) {
    // read route params
    const domain = params.domain;
   
    // fetch data
    const site = await getSite(domain);
    if (!site) {
        return {
            title: "Not found",
            description: "This page is not found",
        }
    }
   
    // optionally access and extend (rather than replace) parent metadata
    const openGraphImage = site.sections[0].profilePic
   
    return {
      title: `${site.sections[0].fullName} - Eresume`,
      description: site.sections[1].bio,
      alternates: {
        canonical: `https://eport.site/eresume/${domain}`,
      },
      openGraph: {
        images: openGraphImage,
      },
    }
}

// Get publishedSite object from domain
const getSite = async (domain) => {
    const siteQuery = query(collection(db, 'published_eresume'), where('domain', '==', domain));
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
        return <Page404 message="Sorry! This eresume doesn't exist."/>
    }
}