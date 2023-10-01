// Next imports
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// Local imports
import { db } from '../../../../../public/libs/firebase';
import { getUserFromToken } from '@/helpers/authentication';

// 3rd party imports
import { doc, setDoc } from 'firebase/firestore';

// Update project info for a project id
export async function POST(request) {
    // Unauthenticated users can't visit this route
    const cookieStore = cookies();
    const userTokenCookie = cookieStore.get('eport-token');
    
    if (!userTokenCookie) {
        redirect('/login');
    }

    const userToken = userTokenCookie.value;
    const user = getUserFromToken(userToken);
    const projectId = request.nextUrl.searchParams.get('projectId');

    // Update project info on Firestore
    const projectInfo = await request.json();
    const project = projectInfo.site;

    // Block non-owner to update project
    if (project.owner !== user.uid) {
        return NextResponse.json({
            status: 400,
            message: "You cannot update projects you don't own"
        })
    }

    await setDoc(doc(db, "eresume", projectId), project);

    return NextResponse.json({
        status: 200,
        message: 'Project saved successfully'
    })
}