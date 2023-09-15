// Next imports
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// Local imports
import { getUserFromToken, getTokenFromUser } from "@/helpers/authentication";


export async function GET(request) {
    const cookieStore = cookies();
    const userToken = cookieStore.get('eport-token') ? cookieStore.get('eport-token').value : '';

    // Check if user is logged in
    if (!userToken) {
        return NextResponse.json({
            status: 403,
            message: 'You are not logged in'
        })
    }

    // Must delete plan from cookie so current plan cookie is reevaluated after going back to /manage_subscriptions
    let user = getUserFromToken(userToken);
    user.plan = '';
    // cookieStore.delete('eport-plan');
    const newUserToken = getTokenFromUser(user);
    cookieStore.set('eport-token', newUserToken);
    
    // User must be a customer to cancel a subscription
    const stripeCustomerId = user.stripeCustomerId;
    if (!stripeCustomerId) {
        return NextResponse.json({
            status: 400,
            message: 'You are not a customer. Please subscribe to a plan first.'
        })
    }

    // Cancel subscription on Stripe
    const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
    const customer = await stripe.customers.retrieve(
        stripeCustomerId, {
            expand: ['subscriptions']
        }
    );

    // User must have an active subscription to cancel
    if (customer && customer.subscriptions.data.length > 0) {
        const subscriptionId = customer.subscriptions.data[0].id;
        await stripe.subscriptions.update(
            subscriptionId,
            {
              cancel_at_period_end: true,
            }
        );
        return NextResponse.json({
            status: 200,
            message: 'Subscription cancelled successfully!'
        })
    }

    // If user does not have an active subscription
    return NextResponse.json({
        status: 400,
        message: 'You do not have an active subscription to cancel.'
    })
}