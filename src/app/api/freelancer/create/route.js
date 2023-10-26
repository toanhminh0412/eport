// Next imports
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

// Local imports
import { db } from '../../../../../public/libs/firebase';
import { getTokenFromUser, getUserFromToken } from '@/helpers/authentication';
import cookieOptions from '@/data/cookieOptions';
import { getSectionInitialData as getSectionInitialDataTemplate0 } from '@/components/freelancer/template0/helper';
import { getSectionInitialData as getSectionInitialDataTemplate1 } from '@/components/freelancer/template1/helper';

// 3rd party imports
import { nanoid } from 'nanoid';
import { doc, setDoc, updateDoc } from 'firebase/firestore';


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
    const date = new Date();

    if (parseInt(templateId) === 0) {
        await setDoc(doc(db, "freelancer", projectId), {
            owner: user.uid,
            ownerEmail: user.email,
            templateId: parseInt(templateId),
            theme: "light",
            sections: [
                {
                    ...getSectionInitialDataTemplate0("navbar1"),
                    id: nanoid()
                },
                {
                    ...getSectionInitialDataTemplate0("header1"),
                    id: nanoid()
                },
                {
                    ...getSectionInitialDataTemplate0("service2"),
                    id: nanoid()
                },
                {
                    ...getSectionInitialDataTemplate0("contact1"),
                    id: nanoid()
                },
            ],
            lastEdited: date.toISOString(),
        })
    } else if (parseInt(templateId) === 1) {
        await setDoc(doc(db, "freelancer", projectId), {
            owner: user.uid,
            ownerEmail: user.email,
            templateId: parseInt(templateId),
            theme: "light",
            sections: [
                {
                    ...getSectionInitialDataTemplate1("navbar1"),
                    id: nanoid()
                },
                {
                    ...getSectionInitialDataTemplate1("header1"),
                    id: nanoid()
                },
                {
                    ...getSectionInitialDataTemplate1("service1"),
                    id: nanoid()
                },
                {
                    ...getSectionInitialDataTemplate1("contact2"),
                    id: nanoid()
                },
            ],
            lastEdited: date.toISOString(),
        })
    }
    

    // Update user profile to contain this eresume project
    if (!user.projects) {
        user.projects = {
            freelancer: [projectId]
        };
    } else if (!user.projects.freelancer) {
        user.projects.freelancer = [projectId];
    } else {
        user.projects.freelancer.push(projectId);
    }

    await updateDoc(doc(db, "users", user.uid), { 
        projects: user.projects
    });

    // Update user cookie
    const newUserToken = getTokenFromUser(user);
    cookieStore.set('eport-token', newUserToken, cookieOptions);
    
    return NextResponse.json({
        status: 201,
        message: 'Create a freelancer project successfully',
        projectId: projectId
    })
}