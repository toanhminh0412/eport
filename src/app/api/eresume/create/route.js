// Next imports
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

// Local imports
import { db } from '../../../../../public/libs/firebase';
import { getUserFromToken } from '@/helpers/authentication';
import siteData from '@/data/eresume/template0';

// 3rd party imports
import { nanoid } from 'nanoid';
import { doc, setDoc } from 'firebase/firestore';

// Create a new eresume project for current user
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
    // Get template selected
    const { searchParams } = new URL(request.url);
    const templateId = searchParams.get('templateId');

    // Create the new eresume project in Firestore
    const projectId = nanoid();
    await setDoc(doc(db, "eresume", projectId), {
        owner: user.uid,
        templateId: parseInt(templateId),
        theme: "light",
        sections: siteData,
    })

    // Update user profile to contain this eresume project
    if (!user.projects) {
        user.projects = {
            eresume: [projectId]
        };
    } else {
        user.projects.eresume.push(projectId);
    }
    await setDoc(doc(db, "users", user.uid), { 
        projects: user.projects
    }, { merge: true });
    
    return NextResponse.json({
        status: 201,
        message: 'Create an eresume project successfully',
        projectId: projectId
    })
}