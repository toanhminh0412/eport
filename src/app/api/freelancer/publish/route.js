// Next imports
import { NextResponse } from "next/server";

// Local imports
import { db } from "../../../../../public/libs/firebase";

// Third party imports
import { collection, doc, query, setDoc, where, getDocs } from "firebase/firestore";

export async function POST(request) {
    const body = await request.json();
    const project = body.project;

    const projectId = request.nextUrl.searchParams.get('projectId');

    // Check if there is a freelancer site with the same domain
    const projectQuery = query(collection(db, 'published_freelancer'), where('domain', '==', project.domain));
    const projectQuerySnapshot = await getDocs(projectQuery);

    if (projectQuerySnapshot.docs.length > 0 && projectQuerySnapshot.docs[0].id != projectId) {
        return NextResponse.json({
            status: 400,
            message: "Domain already exists!"
        })
    }

    // Store the freelancer project in database
    await setDoc(doc(db, 'published_freelancer', projectId), project);
    await setDoc(doc(db, 'freelancer', projectId), {
        published: true,
        domain: project.domain
    }, {merge: true})

    return NextResponse.json({
        status: 200,
        message: 'Site published successfully!'
    })
}