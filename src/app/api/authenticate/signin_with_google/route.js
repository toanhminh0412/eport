import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "../../../../../public/libs/firebase";
import { collection, doc, query, setDoc, getDocs, where } from 'firebase/firestore';
import { nanoid } from 'nanoid';

export async function GET(request) {
    const cookieStore = cookies()
    const requestHeaders = new Headers(request.headers)
    const email = requestHeaders.get('x-forwarded-email');
    const uid = requestHeaders.get('x-forwarded-uid');

    let success = false;
    let message = '';

    const usersCollection = collection(db, 'users');
    const usersEmail = query(usersCollection, where ("email", "==", email))
    const usersDocs = await getDocs(usersEmail);

    // Didn't find any user with this Google email
    if (usersDocs.docs.length === 0) {
        const newUserId = nanoid();
        const newUser = {
            uid: newUserId,
            email: email,
            password: null,
            signInMethod: 'Google',
            emailVerified: true,
            domain: '',
        }
        
        // Save user in 'users' collection in Firestore
        await setDoc(doc(usersCollection, newUserId), newUser);
        
        // Log user in
        cookieStore.set('eport-uid', newUser.uid);
        cookieStore.set('eport-email', newUser.email);
        cookieStore.set('eport-signInMethod', newUser.signInMethod);
        cookieStore.set('eport-email-verified', newUser.emailVerified);
        cookieStore.set('eport-domain', newUser.domain);
        cookieStore.set('eport-stripe-customer-id', '');

        success = true;
        message = 'Login successfully!';

    // Found an user with this Google email
    } else {
        const user = usersDocs.docs[0].data();
        if (user.signInMethod === "Google") {
            success = true;
            message = 'Login successfully!';
            cookieStore.set('eport-uid', user.uid);
            cookieStore.set('eport-email', user.email);
            cookieStore.set('eport-signInMethod', 'Google');
            cookieStore.set('eport-email-verified', true);
            cookieStore.set('eport-domain', "");
            cookieStore.set('eport-stripe-customer-id', user.stripeCustomerId ? user.stripeCustomerId : '');

            // Check if user has an active subscription
            const stripeCustomerId = cookieStore.get('eport-stripe-customer-id') ? cookieStore.get('eport-stripe-customer-id').value : '';
            if (!user.stripeCustomerId) {
                cookieStore.set('eport-plan', 'basic');
            } else {
                const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
                const customer = await stripe.customers.retrieve(
                    stripeCustomerId, {
                        expand: ['subscriptions']
                    }
                );
                if (customer && customer.subscriptions.data.length > 0 && customer.subscriptions.data[0].current_period_end * 1000 > new Date().getTime()) {
                    console.log('Subscription is active');
                    cookieStore.set('eport-plan', 'premium');
                } else {
                    cookieStore.set('eport-plan', 'basic');
                }
            }
        } else {
            success = false;
            message = "Google SignIn option is not available to this email. Please log in using your email and password!";
        }
    }

    return NextResponse.json({
        uid: cookieStore.get('eport-uid') ? cookieStore.get('eport-uid').value : '',
        email: cookieStore.get('eport-email') ? cookieStore.get('eport-email').value : '',
        signInMethod: cookieStore.get('eport-signInMethod') ? cookieStore.get('eport-signInMethod').value : '',
        domain: cookieStore.get('eport-domain') ? cookieStore.get('eport-domain').value : '',
        success: success,
        message: message
    })
}