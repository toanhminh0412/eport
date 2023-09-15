// Next imports
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Local imports
import { getUserFromToken, getTokenFromUser } from "@/helpers/authentication";


export async function GET(request) {
    const cookieStore = cookies();
    const userToken = cookieStore.get('eport-token') ? cookieStore.get('eport-token').value : '';

    if (!userToken) {
        redirect('/login');
    }
    console.log('Calling set_plan_cookie');

    let user = getUserFromToken(userToken);
    const stripeCustomerId = user.stripeCustomerId;
    console.log('Before user:');
    console.log(user);
    // Set plan cookie if not exists
    if (stripeCustomerId && !user.plan) {
        const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
        const customer = await stripe.customers.retrieve(
            stripeCustomerId, {
                expand: ['subscriptions']
            }
        );
        console.log(customer);
        if (customer && customer.subscriptions.data.length > 0 && customer.subscriptions.data[0].current_period_end * 1000 > new Date().getTime()) {
            console.log('Subscription is active');
            user.plan = 'premium';
            // Store plan status and expired date in cookie
            const currentSubscription = customer.subscriptions.data[0];
            user.planStatus = currentSubscription.cancel_at_period_end ? 'Cancelled' : 'Active';
            user.planExpiredDate = new Date(currentSubscription.current_period_end * 1000).toDateString();
        } else {
            user.plan = 'basic';
            user.planStatus = '';
            user.planExpiredDate = '';
        }
    } else if (!stripeCustomerId) {
        user.plan = 'basic';
        user.planStatus = '';
        user.planExpiredDate = '';
    }

    console.log(user);
    const newToken = getTokenFromUser(user);
    cookieStore.set('eport-token', newToken);

    const planStatus = user.planStatus;

    if (planStatus === 'Active') {
        redirect('/manage_subscriptions?status=active');
    } else if (planStatus === 'Cancelled') {
        redirect('/manage_subscriptions?status=cancel');
    } else {
        redirect('/manage_subscriptions');
    }
}