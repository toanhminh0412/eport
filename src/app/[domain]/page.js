import PublishedDemo1 from '@/components/demo/demo1/published';
import UpperNav from '@/components/UpperNav';
import { db } from '../../../public/libs/firebase';
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

    if (site) {
        return <PublishedDemo1 site={site} />
    } else {
        return (
            <main>
                <div className='prose p-10'>
                    <h1>404</h1>
                    <p>Sorry! Site doesn&apos;t exist.</p>
                </div>
            </main>
        )
    }
}