import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
const endpointSecret = "whsec_5e138e06334ddd1a711bf21935bc0bb011cea541d3bb3dd86ccbc16ad072d550";

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