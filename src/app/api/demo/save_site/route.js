import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import siteData from "@/data/demo1/newSite";
import cookieOptions from "@/data/cookieOptions";

export async function POST(request) {
    // Save site on demo page
    const cookieStore = cookies();
    const siteInfo = await request.json();
    const site = siteInfo.site;
    const siteDataLength = siteData.length;
    let count = 0;

    // Set site to cookies after user click save button
    for (let i = 0; i < siteDataLength; i++) {
        if (cookieStore.get('eport-demoSite-' + i)) {
            cookieStore.set('eport-demoSite-' + i, JSON.stringify(site.sections[i]), cookieOptions);
            count = count + 1;
        }
    }

    // Set theme to cookies
    cookieStore.set('eport-theme', site.theme, cookieOptions);
    
    // Return false if missing cookies
    // Return true if all cookies are set
    if (count === siteDataLength) {
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