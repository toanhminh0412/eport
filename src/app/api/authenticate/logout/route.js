import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "../../../../../public/libs/firebase";
import { signOut } from "firebase/auth";

/* Handle users logging out */
export async function GET(request) {
    const cookieStore = cookies();
    
    // Sign user out
    await signOut(auth);

    // Delete user info from cookie
    cookieStore.delete('eport-uid');
    cookieStore.delete('eport-email');
    redirect('/login');
}