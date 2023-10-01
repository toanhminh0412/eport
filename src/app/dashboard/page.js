// Local imports
import Dashboard from "./Dashboard";

export const metadata = {
    title: 'Dashboard',
    description: "View and manage your Eport projects here!",
    alternates: {
        canonical: 'https://eport.site/dashboard',
    }
}

export default function Page() {
    return <Dashboard/>
}