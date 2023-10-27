// Next imports
import { cookies } from "next/headers";

// Local imports
import Dashboard from "./Dashboard";
import { getUserFromToken } from "@/helpers/authentication";

export const metadata = {
    title: 'Dashboard',
    description: "View and manage your Eport projects here!",
    alternates: {
        canonical: 'https://eport.site/dashboard',
    }
}

export default function Page() {
    const cookieStore = cookies();
    const token = cookieStore.get('eport-token').value;
    const user = getUserFromToken(token);
    console.log(user);

    return <Dashboard user={user}/>
}