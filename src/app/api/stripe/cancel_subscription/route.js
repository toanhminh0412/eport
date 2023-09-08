import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
    const cookieStore = cookies();
    const uid = cookieStore.get('eport-uid') ? cookieStore.get('eport-uid').value : '';

    // Check if user is logged in
    if (!uid) {
        return NextResponse.json({
            status: 403,
            message: 'You are not logged in'
        })
    }

    // Must delete plan from cookie so current plan cookie is reevaluated after going back to /manage_subscriptions
    cookieStore.delete('eport-plan');
    
    // User must be a customer to cancel a subscription
    if (!cookieStore.get('eport-stripe-customer-id') || !cookieStore.get('eport-stripe-customer-id').value) {
        return NextResponse.json({
            status: 400,
            message: 'You are not a customer. Please subscribe to a plan first.'
        })
    }
    const stripeCustomerId = cookieStore.get('eport-stripe-customer-id').value;

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