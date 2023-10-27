// Next imports
import { redirect } from "next/navigation";
import { cookies } from "next/headers";


export default async function Dashboard() {
    const cookieStore = cookies();

    // Redirect to dashboard if user is logged in
    if (cookieStore.get('eport-token')) {
        redirect('/dashboard');
    }
}
