import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/* Handle users logging out */
export async function GET(request) {
    const cookieStore = cookies();

    // Delete user info from cookie (Log user out)
    cookieStore.delete('eport-uid');
    cookieStore.delete('eport-email');
    cookieStore.delete('eport-email-verified');
    cookieStore.delete('eport-signInMethod');
    cookieStore.delete('eport-domain');
    cookieStore.delete('eport-stripe-customer-id');
    cookieStore.delete('eport-plan');
    cookieStore.delete('eport-plan-status');
    cookieStore.delete('eport-plan-expired-date');
    redirect('/login');
}