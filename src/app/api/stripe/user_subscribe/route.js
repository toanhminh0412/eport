/* Note: this file is not in use. It might be used if we need to handle events from Stripe */
// Next imports
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
const endpointSecret = process.env.NEXT_PUBLIC_STRIPE_ENDPOINT_SECRET;

export async function POST(request) {
    const headersList = headers();
    const sig = headersList.get('stripe-signature');
    const requestBody = await request.text();

    let event;
    let customerId;

    try {
        event = stripe.webhooks.constructEvent(requestBody, sig, endpointSecret);
    } catch (err) {
        console.log(err);
        return NextResponse.json({
            status: 500,
            message: `Webhook Error: ${err.message}`
        });
    }

    // Handle the event
    switch (event.type) {
        // Handle event when user subscribes Premium plan
        case 'invoice.payment_succeeded':
            console.log('Triggered invoice.payment_succeeded');
            console.log(event.data.object);
            break;
        // ... handle other event types
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({
        status: 200,
        message: 'Stripe webhook received!'
    });
}