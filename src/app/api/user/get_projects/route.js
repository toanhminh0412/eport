// Next imports
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// Local imports
import { db } from "../../../../../public/libs/firebase";
import { getUserFromToken } from "@/helpers/authentication";

// 3rd party imports
import { doc, getDoc } from "firebase/firestore";


// Get all projects for the currently logged in user
export async function GET(request) {
    // Get current user id
    const cookieStore = cookies();
    const userTokenCookie = cookieStore.get('eport-token');

    // Unauthenticated users can't visit this route
    if (!userTokenCookie) {
        redirect('/login');
    }

    const userToken = userTokenCookie.value;
    const user = getUserFromToken(userToken);
    console.log(user);
    if (!user.projects) {
        return NextResponse.json({
            status: 200,
            projects: [],
            message: "Get all projects for user successfully"
        })
    }

    // Make an array of project objects with 3 fields - type, content and id:
    let responseProjects = []
    const projectTypes = Object.keys(user.projects);

    // TODO: Implement fetching data ONLY once using getDocs, instead of running getDoc in each interation
    for (let projectTypeInd = 0; projectTypeInd < projectTypes.length; projectTypeInd++) {
        const projectType = projectTypes[projectTypeInd];
        const projectIds = user.projects[projectType];
        for (let projectInd = 0; projectInd < projectIds.length; projectInd++) {
            const projectId = projectIds[projectInd];
            const project = (await getDoc(doc(db, projectType, projectId))).data();
            responseProjects.push({
                type: projectType, 
                content: project, 
                id: projectId
            });
        }
    }

    return NextResponse.json({
        status: 200,
        projects: responseProjects,
        message: "Get all projects for user successfully"
    })
}