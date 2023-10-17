// Next imports
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

// Local imports
import { db } from '../../../../../public/libs/firebase';
import { getUserFromToken } from '@/helpers/authentication';

// 3rd party imports
import { doc, setDoc } from 'firebase/firestore';

export async function POST(request) {
    const cookieStore = cookies();
    const userTokenCookie = cookieStore.get('eport-token');

    if (!userTokenCookie) {
        redirect('/login');
    }

    const userToken = userTokenCookie.value;
    const user = getUserFromToken(userToken);
    const projectId = request.nextUrl.searchParams.get('projectId');

    console.log(projectId);

    // Update sections info on FireStore
    const projectInfo = await request.json();
    const project = projectInfo.project;

    // Block non-owner to update project
    if (project.owner !== user.uid) {
        return NextResponse.json({
            status: 400,
            message: "You cannot update projects you don't own"
        })
    }

    await setDoc(doc(db, "freelancer", projectId), project);

    return NextResponse.json({
        status: 200,
        message: 'Project saved successfully'
    })
}