// Next imports
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// Local imports
import { db } from "../../../../../public/libs/firebase";
import { getUserFromToken, getTokenFromUser } from "@/helpers/authentication";
import cookieOptions from "@/data/cookieOptions";

// 3rd party imports
import { deleteDoc, doc, setDoc } from "firebase/firestore";


export async function GET(request) {
    const projectId = request.nextUrl.searchParams.get('projectId');
    const cookieStore = cookies();
    const userToken = cookieStore.get('eport-token') ? cookieStore.get('eport-token').value : null;

    // Unauthenticated users can't visit this route
    if (!userToken) {
        redirect('/login');
    }

    // Check if the currently logged in user owns this project
    let user = getUserFromToken(userToken);
    if (!user.projects.eresume.includes(projectId)) {
        return NextResponse.json({
            status: 403,
            message: "You can't delete a project you don't own!"
        })
    }

    // Delete the project and make necessary changes on Firestore
    await deleteDoc(doc(db, "eresume", projectId));
    await deleteDoc(doc(db, "published_eresume", projectId));
    const deleteProjectIndex = user.projects.eresume.indexOf(projectId);
    user.projects.eresume.splice(deleteProjectIndex, 1);
    await setDoc(doc(db, "users", user.uid), {
        projects: user.projects
    }, { merge: true });

    // Update user cookie
    const newUserToken = getTokenFromUser(user);
    cookieStore.set('eport-token', newUserToken, cookieOptions);

    return NextResponse.json({
        status: 200,
        message: "Project deleted successfully!"
    })
}