import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request) {
    const cookieStore = cookies();
    const uid = cookieStore.get('eport-uid') ? cookieStore.get('eport-uid').value : '';

    if (!uid) {
        redirect('/login');
    }

    const stripeCustomerId = cookieStore.get('eport-stripe-customer-id') ? cookieStore.get('eport-stripe-customer-id').value : '';
    // Set plan cookie if not exists
    if (stripeCustomerId && !cookieStore.get('eport-plan')) {
        const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
        const customer = await stripe.customers.retrieve(
            stripeCustomerId, {
                expand: ['subscriptions']
            }
        );
        if (customer && customer.subscriptions.data.length > 0 && customer.subscriptions.data[0].current_period_end * 1000 > new Date().getTime()) {
            console.log('Subscription is active');
            cookieStore.set('eport-plan', 'premium');
            // Store plan status and expired date in cookie
            const currentSubscription = customer.subscriptions.data[0];
            cookieStore.set('eport-plan-status', currentSubscription.cancel_at_period_end ? 'Cancelled' : 'Active');
            cookieStore.set('eport-plan-expired-date', new Date(currentSubscription.current_period_end * 1000).toDateString());
        } else {
            cookieStore.set('eport-plan', 'basic');
        }
    } else if (!stripeCustomerId) {
        cookieStore.set('eport-plan', 'basic');
    }

    const planStatus = cookieStore.get('eport-plan-status') ? cookieStore.get('eport-plan-status').value : '';

    if (planStatus === 'Active') {
        redirect('/manage_subscriptions?status=active');
    } else if (planStatus === 'Cancelled') {
        redirect('/manage_subscriptions?status=cancel');
    } else {
        redirect('/manage_subscriptions');
    }
}