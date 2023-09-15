// Next imports
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Local imports
import { db } from '../../../../../public/libs/firebase';
import { getUserFromToken, getTokenFromUser } from '@/helpers/authentication';

// 3rd party imports
import { doc, updateDoc } from 'firebase/firestore';

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

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
    
    // Create a new customer with this user's email if user is not a Stripe customer
    const uid = user.uid;
    const email = user.email;
    if (!user.stripeCustomerId) {
        const customer = await stripe.customers.create({
            email: email
        });
        user.stripeCustomerId = customer.id;
        
        // Update Stripe customer id for user on Firestore
        await updateDoc(doc(db, 'users', uid), {
            stripeCustomerId: customer.id
        });
    }

    const newUserToken = getTokenFromUser(user);
    cookieStore.set('eport-token', newUserToken);

    const customerId = user.stripeCustomerId;

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