// Next imports
import { cookies } from "next/headers"

// Local imports
import { db } from "../../../../public/libs/firebase";
import { getUserFromToken } from "@/helpers/authentication";
import { Page403, Page404 } from "@/components/pages/status_pages";
import Template1 from "@/components/freelancer/template1/site";

// 3rd party imports
import { doc, getDoc } from "firebase/firestore";

export const metadata = {
    title: 'Eport - Freelancer project',
    description: "Edit your freelancer project here with Eport!",
}

export default async function Page({searchParams}) {
    const cookieStore = cookies();
    const userToken = cookieStore.get('eport-token') ? cookieStore.get('eport-token').value : null;
    const user = getUserFromToken(userToken);

    // Get project data from project id
    const projectId = searchParams.projectId;
    const projectSnap = await getDoc(doc(db, "freelancer", projectId));
    
    if (projectSnap.exists()) {
        const project = projectSnap.data();

        // Return a 403 page if user is not the owner of the project
        if (!user || !user.uid || project.owner !== user.uid) {
            return <Page403 message="Sorry! You don't have permission to access this project."/>
        }

        // Return the project page
        return (
            <>
                <div className="sm:hidden flex flex-col justify-center h-[80vh]">
                    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                        <div className="card-body">
                            <h2 className="card-title">Screen too small</h2>
                            <p>Your browser resolution is too small to use the site editor. Please use a larger device.</p>
                        </div>
                    </div>
                </div>
                <div className="hidden sm:block">
                    <Template1 project={project}/>
                </div>
            </>
        )
    } else {
        // Return 404 page if project is not found
        return <Page404 message="Sorry! This Eresume project doesn't exist."/>
    }
}