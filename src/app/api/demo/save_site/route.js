import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
    // Save site on demo page
    const cookieStore = cookies();
    const siteInfo = await request.json();
    const site = siteInfo.site;
    var count = 0;

    // Set site to cookies after user click save button
    for (let i = 0; i < 9; i++) {
        if (cookieStore.get('eport-demoSite-' + i) !== null) {
            cookieStore.set('eport-demoSite-' + i, JSON.stringify(site.sections[i]));
            count = count + 1;
        }
    }

    // Return false if missing cookies
    // Return true if all cookies are set
    if (count === 9) {
        return NextResponse.json({
            status: 200,
            message: 'Site saved successfully'
        })
    } else {
        return NextResponse.json({
            status: 403,
            message: 'Site saved unsuccessfully'
        })
    }
}