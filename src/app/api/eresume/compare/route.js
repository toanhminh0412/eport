// Next imports
import { NextResponse } from "next/server";

// Local imports
import { db } from "../../../../../public/libs/firebase";

// 3rd party imports
import { doc, getDoc } from "firebase/firestore";

const util = require('util');

export async function GET(request) {
    const projectId = request.nextUrl.searchParams.get('projectId');

    // Get published site
    const publishedProjectSnap = await getDoc(doc(db, "published_eresume", projectId));
    if (!publishedProjectSnap.exists()) {
        return NextResponse.json({
            status: 404,
            isEqual: false,
            publishedProject: {}
        });
    }
    const publishedProject = publishedProjectSnap.data();

    // Get current site
    const projectSnap = await getDoc(doc(db, "eresume", projectId));
    const currentProject = projectSnap.data();

    if (util.isDeepStrictEqual(currentProject.sections, publishedProject.sections) === false || currentProject.theme !== publishedProject.theme) {
        return NextResponse.json({
            status: 200,
            isEqual: false,
            publishedProject: publishedProject
        });
    } else {
        return NextResponse.json({
            status: 200,
            isEqual: true,
            publishedProject: publishedProject
        });
    }
}