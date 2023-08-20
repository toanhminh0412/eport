import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/* Handle users logging out */
export async function GET(request) {
    const cookieStore = cookies();

    // Delete user info from cookie (Log user out)
    cookieStore.delete('eport-uid');
    cookieStore.delete('eport-email');
    redirect('/login');
}