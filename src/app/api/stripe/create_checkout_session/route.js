import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import { db } from '../../../../../public/libs/firebase';
import { doc, updateDoc } from 'firebase/firestore';

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export async function GET(request) {
    const cookieStore = cookies();
    const uid = cookieStore.get('eport-uid') ? cookieStore.get('eport-uid').value : '';
    const email = cookieStore.get('eport-email') ? cookieStore.get('eport-email').value : '';

    // Check if user is logged in
    if (!uid) {
        return NextResponse.json({
            status: 403,
            message: 'You are not logged in'
        })
    }

    // Must delete plan from cookie so current plan cookie is reevaluated after going back to /manage_subscriptions
    cookieStore.delete('eport-plan');

    // Create a new customer with this user's email if user is not a Stripe customer
    if (!cookieStore.get('eport-stripe-customer-id') || !cookieStore.get('eport-stripe-customer-id').value) {
        const customer = await stripe.customers.create({
            email: email
        });
        cookieStore.set('eport-stripe-customer-id', customer.id);
        
        // Update Stripe customer id for user on Firestore
        await updateDoc(doc(db, 'users', uid), {
            stripeCustomerId: customer.id
        });
    }

    const customerId = cookieStore.get('eport-stripe-customer-id').value;

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
        customer: customerId,
        line_items: [
            {price: process.env.NEXT_PUBLIC_STRIPE_PRODUCT_ID, quantity: 1}
        ],
        mode: 'subscription',
        success_url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/manage_subscriptions`,
        cancel_url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/manage_subscriptions`,
        subscription_data: {
            trial_period_days: 15
        }
    });

    return NextResponse.json({
        status: 200,
        sessionUrl: session.url
    })
}