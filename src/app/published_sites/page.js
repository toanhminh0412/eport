// Next imports
import Link from "next/link";

// Local imports
import { db } from "../../../public/libs/firebase";
import PublishedDemo1 from "@/components/demo/demo1/published";

// 3rd party imports
import { query, collection, getDocs, where, limit, orderBy } from "firebase/firestore";

export const metadata = {
    title: 'Published sites',
    description: "Checkout some of the sites built by other Eport users",
    alternates: {
        canonical: 'https://eport.site/published_sites',
    }
  }

// Get all published sites that are set to display on "published_sites" page
const getPublishedSites = async () => {
    const publishedSitesQuery = query(collection(db, 'publishedSites'), where('displayedOnEport', '==', true), orderBy('publishedDate', 'desc'), limit(20));
    // const publishedSitesQuery = query(collection(db, 'publishedSites'));
    const publishedSitesQuerySnapshot = await getDocs(publishedSitesQuery);
    return publishedSitesQuerySnapshot.docs.map(doc => doc.data());
}

export default async function Page() {
    const publishedSites = await getPublishedSites();

    return (
        <main className="prose bg-white max-w-none w-screen min-h-[70vh] pt-20 lg:pt-12 pb-32">
            <div className="w-11/12 mx-auto">
                <h1>Checkout some of the sites built by other users</h1>
                {publishedSites.length > 0 ? (<div className="mt-4">
                    {publishedSites.map((site, index) => (
                    <div key={`${site.domain}-${index}`}>
                        <h2>
                            {site.sections[0].fullName} - {site.sections[0].job} ({site.plan} plan)
                            <span><br className="sm:hidden"/><Link href={`/${site.domain}`} className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white sm:ml-5 sm:mt-[-3px]">Visit Site</Link></span>
                        </h2>
                        <div className="w-full md:px-6 h-128 overflow-y-auto border border-slate-300 shadow-md rounded-md bg-slate-100">
                            <PublishedDemo1 site={site}/>
                        </div>
                    </div>
                    ))}
                </div>) : 
                (<p>No public site found. This might mean users don&apos;t want their sites to be public.</p>)}
            </div>
        </main>
    )
}