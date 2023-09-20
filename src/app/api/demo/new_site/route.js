// Next imports
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import cookieOptions from "@/data/cookieOptions";

// Local imports
import siteData from "@/data/site";

export async function GET(request) {
    // Split up sections into a single section and store it in the cookies
    const cookieStore = cookies();
    for (let i = 0; i < siteData.length; i++) {
        cookieStore.set('eport-demoSite-' + i, JSON.stringify(siteData[i]), cookieOptions);
    }

    redirect('/demo')
}